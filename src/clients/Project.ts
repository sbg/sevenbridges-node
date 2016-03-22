import {Base} from './Base';
import {Interfaces} from '../interfaces/SBGInterfaces';


export class Project extends Base implements Interfaces.ProjectClientInterface {

    constructor() {
        super();
    }

    list() {

        var options = {
            method : 'GET',
            url : 'https://api.sbgenomics.com/v2/tasks'
        };

        return this._get(options);
    }

    createNew() {
        console.log('TBD');
    }

    listByUserName(username: string) {
        console.log('TBD');
    }


    delete() {
        console.log('TBD');
    }

    getDetails() {
        console.log('TBD');
    }

    edit() {
        console.log('TBD');
    }

    listFiles() {
        console.log('TBD');
    }

    listMembers() {
        console.log('TBD');
    }

    addMember() {
        console.log('TBD');
    }

    getMemberPermissions() {
        console.log('TBD');
    }

    setMemberPermissions() {
        console.log('TBD');
    }
    
}

