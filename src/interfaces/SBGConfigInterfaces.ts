
export namespace Interfaces {

    export interface ClientConfigInterface {

    }

    export interface SBGConfigInterface {
        sessionId: string;
    }

    export interface InstanceConfigInterface extends SBGConfigInterface {
        temp: string;
    }
}
