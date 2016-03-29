import {ClientInterfaces} from './interfaces/ClientInterfaces';

import {Project} from './clients/Project';
import {Billing} from './clients/Billing';
import {User} from './clients/User';

class SBG {

    Projects : ClientInterfaces.ProjectClientInterface;
    Billing : ClientInterfaces.BillingClientInterface;
    User : ClientInterfaces.UserClientInterface;

    constructor() {
        this.instantiateClients();
    }

    private instantiateClients() {
        this.Projects = new Project();
        this.Billing = new Billing();
        this.User = new User();
    }

}

export = SBG;
