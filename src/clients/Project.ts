import {Base} from './Base';
import {Interfaces} from '../interfaces/SBGInterfaces';
import {ProjectInterfaces} from '../interfaces/ProjectInterfaces';

import {ApiConfig} from '../api/config';


export class Project extends Base implements Interfaces.ProjectClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.projects_url;

    constructor() {
        super();
    }

    /**
     * List projects
     *
     * @returns {*}
     */
    list() {

        let options = {
            method: 'GET',
            url: this.url
        };

        return this._get(options);
    }

    /**
     * Create new project
     *
     * Example request body:
     *
     * {
     *   'name': 'My New Project',
     *   'description': 'A project for testing my apps',
     *   'billing_group': '1f0c2751-694c-4e98-b863-06b68f5a61ca'
     *   'type': 'v2'
     * }
     */
    create(project: ProjectInterfaces.NewProjectInterface) {
        let options = {
            url: this.url
        };

        return this._post(options, project);
    }

    /**
     * Edit project
     *
     * Example request body:
     *
     * {
     *   'name': 'My New Project',
     *   'description': 'A project for testing my apps',
     *   'billing_group': '1f0c2751-694c-4e98-b863-06b68f5a61ca'
     * }
     *
     * @param owner
     * @param id
     * @param project
     * @returns {*}
     */
    edit(id: string, project: ProjectInterfaces.UpdateProjectInterface) {

        let options = {
            url: this.url + '/' + id
        };

        return this._patch(options, project);
    }

    /**
     * List the projects owned by and accessible to a particular user
     *
     * @param username
     * @returns {*}
     */
    listByUserName(username: string) {

        let options = {
            url: this.url + '/' + username
        };

        return this._get(options);
    }


    delete(id: string) {
        let options = {
            url: this.url + '/' + id
        };

        return this._delete(options);
    }

    /**
     * Get details of a project
     *
     * @param owner
     * @param id
     */
    getDetails(id: string) {

        let options = {
            url: this.url + '/' + id
        };

        return this._get(options);
    }

    /**
     * List project members
     *
     * @param owner
     * @param id
     */
    listMembers(id: string) {

        let options = {
            url: this.url + id + '/members'
        };

        return this._get(options);
    }

    /**
     * Add project member
     *
     * Example request body:
     * {
     *    "username" : "Jane_Doe",
     *    "permissions": {
     *        "read" : true,
     *        "write": true,
     *        "execute": false
     *    }
     * }
     *
     * @param owner
     * @param id
     * @param member
     * @returns {*}
     */
    addMember(id: string, member: ProjectInterfaces.ProjectMemberInterface) {
        let options = {
            url: this.url + '/' + id + '/members'
        };

        return this._post(options, member);
    }

    /**
     * Remove member from project
     *
     * @param owner
     * @param id
     * @param username
     * @returns {*}
     */
    removeMember(id: string, username: string) {
        let options = {
            url: this.url + '/' + id + '/members/' + username
        };

        return this._delete(options);
    }

    getMemberPermissions(id: string, username: string) {
        let options = {
            url: this.url + '/' + id + '/members/' + username
        };

        return this._get(options);
    }

    /**
     * Modify a project member's permissions
     *
     * Example request body:
     *
     * {
     *    "read" : true,
     *    "write": true,
     *    "execute": false
     * }
     *
     * @param owner
     * @param id
     * @param username
     * @param permissions
     * @returns {*}
     */
    editMemberPermissions(id: string, username: string, permissions: ProjectInterfaces.ProjectPermissionsInterface) {
        let options = {
            url: this.url + '/' + id + '/members/' + username + '/permissions'
        };

        return this._patch(options, permissions);
    }

    /**
     * Overwrite a project member's permissions
     *
     * Example request body:
     *
     * {
     *    "read" : true,
     *    "write": true,
     *    "execute": false
     * }
     *
     * @param owner
     * @param id
     * @param username
     * @param permissions
     * @returns {*}
     */
    overwriteMemberPermissions(id: string, username: string, permissions: ProjectInterfaces.ProjectPermissionsInterface) {
        let options = {
            url: this.url + '/' + id + '/members/' + username + '/permissions'
        };

        return this._put(options, permissions);
    }


}

