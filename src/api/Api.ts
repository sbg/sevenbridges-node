/// <reference path="../../typings/request/request.d.ts" />
/// <reference path="../../typings/q/Q.d.ts" />

import * as Q from 'q';

import * as Request from 'request';
import {Interfaces} from './../interfaces/SBGInterfaces';

export module Api {

    export function request(options: Interfaces.RequestOptionsInterface): Q.IPromise<any> {

        let deferred = Q.defer();

        Request(options, function (err, res, body) {

            if (err) {
                console.log('error occ', err);
                deferred.reject(err);
                return;
            }

            deferred.resolve(body);
        });

        return deferred.promise;
    }

}

