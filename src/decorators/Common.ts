import * as _ from 'lodash';
import {Util} from '../util/Util';

/**
 * Parses url string to extract params
 *
 * For: "/{id}/revision/{revision}" will return ['id', 'revision']
 *
 *
 * @param url
 * @returns {Array<string>}
 */
function getParams(url: string): Array<string> {

    var keys: Array<string> = [];
    var arr: Array<string> = url.split('/');

    _.forEach(arr, (s) => {
        if (_.startsWith(s, '{') && _.endsWith(s, '}')) {
            let str: string = s;

            str = str.slice(1);
            str = str.substring(0, str.length - 1);
            keys.push(str);
        }
    });

    return keys;
};

function _formatUrl(url: string, options: any, method: string, keys: any) {

    function replace(key: string, optional: boolean = false): void {

        if (options[key] || optional) {

            let temp: string = key;
            let value = options[key];

            if (optional) {
                temp = temp + '?';
            }

            if (optional && !value) {
                url = url.replace('/{' + temp + '}', '');
            } else {
                url = url.replace('{' + temp + '}', value);
            }

            delete options[key];
        } else {
            if (!optional) {
                throw Error('Missing required PATH parameter: ' + key + ' in method: ' + method);
            }
        }
    }

    _.forEach(keys, function (key) {

        if (_.endsWith(key, '?')) {
            key = key.substring(0, key.length - 1);
            replace(key, true);
        } else {
            replace(key);
        }

    });

    return url;

};

export function url(urlTemplate?: string) {
    var keys: Array<string>;

    if (urlTemplate) {
        keys = getParams(urlTemplate);
    }

    return function (target: any, method: string, descriptor: any) {

        return {

            value: function (...args: any[]) {

                let options: any = args[0] || {};

                let url: string = urlTemplate;

                if (urlTemplate && keys) {

                    url = _formatUrl(url, options, method, keys);
                }

                let body: any = null;

                if (options.body) {
                    body = options.body;
                    delete options.body;
                }

                let qs: any = options;

                return descriptor.value.apply(this, [{

                    url: url,
                    qs: qs,
                    body: body
                }]);
            }

        };
    };
};


export function validate(items: Array<any>) {
    return function (target: any, key: string, descriptor: any) {

        return {
            value: function (...args: any[]) {
                let p = args[0];
                _.forEach(items, (item) => {
                    if (!p[item.key] || typeof p[item.key] !== item.type) {
                        throw Error('Invalid path type');
                    }
                });

                return descriptor.value.apply(this, args.map(a => a));
            }
        };
    };
};

