export namespace Interfaces {

    export interface HTTPResponseObject {
        err: any;
        response: any;
    }

    export interface RequestOptionsInterface {
        method?: string;
        url: string;
        headers?: SBGRequestHeadersInterface;
        json?: boolean;
        body?: any;
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

    }

    export interface BillingClientInterface extends ClientInterface {
        list: Function;
    }

    export interface ProjectClientInterface extends ClientInterface {
        list: Function;
    }

}
