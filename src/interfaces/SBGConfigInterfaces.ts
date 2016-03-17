
export namespace Interfaces {

    export interface HTTPResponseObject {
        err: any;
        response: any;
    }

    export interface RequestOptionsInterface {
        method: string;
        url: string;
        headers?: SBGRequestHeadersInterface;
    }


    export interface SBGRequestHeadersInterface {
        'session-id': string;
    }

    export interface ApiInterface {
        request: Function;
    }

    export interface ClientConfigInterface {

    }

    export interface SBGConfigInterface {
        'session-id': string;
    }

    export interface InstanceConfigInterface extends SBGConfigInterface {
        temp: string;
    }
}
