import { Interfaces } from './interfaces/SBGInterfaces';
declare class SBG {
    Config: Interfaces.SBGConfigInterface;
    Api: Interfaces.ApiInterface;
    constructor(config: any);
    send(options: Interfaces.RequestOptionsInterface, callback: Interfaces.HTTPResponseObject): void;
}
export = SBG;
