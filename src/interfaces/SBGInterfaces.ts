export namespace Interfaces {



    export interface APIResponseInterface {
        response: any;
        body: any;
    }

    export interface HTTPResponseObject {
        err: any;
        response: any;
    }
    
    export interface RequestOptionsInterface {
        method?: string;
        url: string;
        headers?: SBGRequestHeadersInterface;
        json?: boolean;
    }

    export interface SBGRequestHeadersInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface ApiInterface {
        request: Function;
    }

    export interface ClientConfigInterface {
        getToken : Function;

    }

    export interface SBGConfigInterface {
        'X-SBG-Auth-Token': string;
    }

    export interface ClientInterface {

    }

    export interface ProjectClientInterface extends ClientInterface {
        list: Function;
    }

}
