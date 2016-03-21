export declare namespace Interfaces {
    interface HTTPResponseObject {
        err: any;
        response: any;
    }
    interface RequestOptionsInterface {
        method: string;
        url: string;
        headers?: SBGRequestHeadersInterface;
    }
    interface SBGRequestHeadersInterface {
        'X-SBG-Auth-Token': string;
    }
    interface ApiInterface {
        request: Function;
    }
    interface ClientConfigInterface {
    }
    interface SBGConfigInterface {
        'X-SBG-Auth-Token': string;
    }
    interface InstanceConfigInterface extends SBGConfigInterface {
        temp: string;
    }
}
