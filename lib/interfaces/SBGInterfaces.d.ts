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
        'session-id': string;
    }
    interface ApiInterface {
        request: Function;
    }
    interface ClientConfigInterface {
    }
    interface SBGConfigInterface {
        'session-id': string;
    }
    interface InstanceConfigInterface extends SBGConfigInterface {
        temp: string;
    }
}
