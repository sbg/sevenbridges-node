import {ClientInterfaces} from './interfaces/ClientInterfaces';

import {Project} from './clients/Project';
import {Billing} from './clients/Billing';

class SBG {

    Projects : ClientInterfaces.ProjectClientInterface;
    Billing : ClientInterfaces.BillingClientInterface;

    constructor() {
        this.instantiateClients();
    }

    private instantiateClients() {
        this.Projects = new Project();
        this.Billing = new Billing();
    }

}

export = SBG;
