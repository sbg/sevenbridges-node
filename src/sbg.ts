import {Interfaces} from './interfaces/SBGInterfaces';

import {Project} from './clients/Project';

class SBG {

    Projects : Interfaces.ProjectClientInterface;

    constructor() {
        this.instantiateClients();
    }

    private instantiateClients() {
        this.Projects = new Project();
    }

}

export = SBG;
