import {Base} from './Base';

export class Task extends Base {
    sessionId: string;

    constructor() {
        super();
        this.sessionId = '';
    }

}

