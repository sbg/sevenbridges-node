/// <reference path="../../typings/request/request.d.ts" />
/// <reference path="../../typings/q/Q.d.ts" />

import * as Q from 'q';

import * as Request from 'request';
import {Interfaces} from './../interfaces/SBGInterfaces';

export module Api {

    export function request(options: Interfaces.RequestOptionsInterface): Q.IPromise<Interfaces.APIResponseInterface> {

        let deferred = Q.defer();

        Request(options, function (err, res, body) {

            if (err) {
                deferred.reject(err);
            }

            let DefferedResponse: Interfaces.APIResponseInterface = {
                response: res,
                body: body
            };

            deferred.resolve(DefferedResponse);
        });

        return deferred.promise;
    }

}

