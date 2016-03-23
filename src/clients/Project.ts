import {Base} from './Base';
import {Interfaces} from '../interfaces/SBGInterfaces';
import {ProjectInterfaces} from '../interfaces/ProjectInterfaces';

import {ApiConfig} from '../api/config';


export class Project extends Base implements Interfaces.ProjectClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.projects_url;

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

    /**
     * Create new project
     *
     * Example request body:
     *
     * {
     *   "name": "My New Project",
     *   "description": "A project for testing my apps",
     *   "billing_group": "1f0c2751-694c-4e98-b863-06b68f5a61ca"
     *   "type": "v2"
     * }
     */
    create(project: ProjectInterfaces.NewProjectInterface) {
        console.log('TBD');

        var options = {
            url: this.url
        };

        this._post(options);
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

