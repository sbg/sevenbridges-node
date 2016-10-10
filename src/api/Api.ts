/// <reference path="../../typings/modules/request/index.d.ts" />
/// <reference path="../../typings/globals/Q/index.d.ts" />

import * as Q from 'q';

import * as Request from 'request';
import {Interfaces} from './../interfaces/SBGInterfaces';
import {APIResponse, ResponseInterface} from '../util/Response';

export module Api {

    export function request(options: Interfaces.RequestOptionsInterface): Q.IPromise<ResponseInterface> {

        let deferred = Q.defer();

        Request(options, function (err, res, body) {

            if (err) {
                console.log('error occ', err);
                deferred.reject(err);
                return;
            }

            deferred.resolve(new APIResponse(err, res, body));
        });

        return deferred.promise;
    }

}

