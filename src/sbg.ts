import {ClientInterfaces} from './interfaces/ClientInterfaces';

import {Project} from './clients/Project';
import {Billing} from './clients/Billing';
import {User} from './clients/User';
import {File} from './clients/File';

class SBG {

    Projects : ClientInterfaces.ProjectClientInterface;
    Billing : ClientInterfaces.BillingClientInterface;
    User : ClientInterfaces.UserClientInterface;
    File : ClientInterfaces.FileClientInterface;

    constructor() {
        this.instantiateClients();
    }

    private instantiateClients() {
        this.Projects = new Project();
        this.Billing = new Billing();
        this.User = new User();
        this.File = new File();
    }

}

export = SBG;
