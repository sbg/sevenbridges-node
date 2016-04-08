import * as _ from 'lodash';

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
}

export function url(urlTemplate?: string) {
    var keys: Array<string>;

    if (urlTemplate) {
        keys = getParams(urlTemplate);
    }

    return function (target: any, key: string, descriptor: any) {

        return {
            value: function (...args: any[]) {

                let options: any = args[0] || {};

                let url: string = urlTemplate;

                if (urlTemplate && keys) {

                    _.forEach(keys, function (key) {

                        if (options[key]) {
                            url = url.replace('{' + key + '}', options[key]);
                            delete options[key];
                        } else {
                            throw Error('Missing required PATH parameter: ' + key);
                        }

                    });

                }

                let body: any = null;

                if (options.body) {
                    body = options.body;
                    delete options.body;
                }

                let qs: any = options;

                var result = descriptor.value.apply(this, [url, body, qs]);

                return result;
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

