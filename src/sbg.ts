import {ClientInterfaces} from './interfaces/ClientInterfaces';

import {Project} from './clients/Project';
import {Billing} from './clients/Billing';
import {User} from './clients/User';
import {File} from './clients/File';
import {Apps} from './clients/Apps';

class SBG {

    Projects : ClientInterfaces.ProjectClientInterface;
    Billing : ClientInterfaces.BillingClientInterface;
    User : ClientInterfaces.UserClientInterface;
    File : ClientInterfaces.FileClientInterface;
    Apps : ClientInterfaces.AppsClientInterface;

    constructor() {
        this._instantiateClients();
    }

    private _instantiateClients() {
        this.Projects = new Project();
        this.Billing = new Billing();
        this.User = new User();
        this.File = new File();
        this.Apps = new Apps();
    }

}

export = SBG;
