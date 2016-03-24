import {Interfaces} from './interfaces/SBGInterfaces';

import {Project} from './clients/Project';
import {Billing} from './clients/Billing';

class SBG {

    Projects : Interfaces.ProjectClientInterface;
    Billing : Interfaces.BillingClientInterface;

    constructor() {
        this.instantiateClients();
    }

    private instantiateClients() {
        this.Projects = new Project();
        this.Billing = new Billing();
    }

}

export = SBG;
