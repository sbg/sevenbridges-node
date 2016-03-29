
export namespace Interfaces {

    export interface HTTPResponseObject {
        err: any;
        response: any;
    }

    export interface QuertStringInterface {
        fields?: string;
    }

    export interface RequestOptionsInterface {
        method?: string;
        url: string;
        headers?: SBGRequestHeadersInterface;
        json?: boolean;
        body?: any;
        qs?: QuertStringInterface;
    }

    export interface SBGRequestHeadersInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface ApiInterface {
        request: Function;
    }

    export interface ClientConfigInterface {
        getConfig: () => any;
        getToken : () => string;
    }

    export interface SBGConfigInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface ClientInterface {
        url: string;
    }

}
