import {Base} from './Base';

export class Project extends Base {

    sessionId: string;

    constructor() {
        super();

        this.sessionId = '';
    }


    list() {
        console.log('TBD');
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
}

