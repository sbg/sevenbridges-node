import {Interfaces} from './interfaces/SBGConfigInterfaces';

class SBG {

    config: Interfaces.SBGConfigInterface;

    constructor(config: Interfaces.SBGConfigInterface ) {
        this.config = config;
    }

}

export = SBG;
