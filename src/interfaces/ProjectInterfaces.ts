import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace ProjectInterfaces {

    export interface ProjectClientInterface extends Interfaces.ClientInterface {
        list(username: string): Q.IPromise<ResponseInterface>;
        create(project: NewProjectInterface): Q.IPromise<ResponseInterface>;
        edit(id: string, project: UpdateProjectInterface): Q.IPromise<ResponseInterface>;
        listByUserName(username: string): Q.IPromise<ResponseInterface>;
        delete(id: string): Q.IPromise<ResponseInterface>;
        getDetails(id: string): Q.IPromise<ResponseInterface>;
        listMembers(id: string): Q.IPromise<ResponseInterface>;
        addMember(id: string, member: ProjectMemberInterface): Q.IPromise<ResponseInterface>;
        removeMember(id: string, username: string): Q.IPromise<ResponseInterface>;
        getMemberPermissions(id: string, username: string): Q.IPromise<ResponseInterface>;
        editMemberPermissions(id: string, username: string, permissions: ProjectPermissionsInterface): Q.IPromise<ResponseInterface>;
        overwriteMemberPermissions(id: string, username: string, permissions: ProjectPermissionsInterface): Q.IPromise<ResponseInterface>;
    }

    export interface ProjectPermissionsInterface {
        read?: boolean;
        write?: boolean;
        execute?: boolean;
        copy?: boolean;
        admin?: boolean;
    }

    export interface NewProjectInterface {
        name: string;
        description?: string;
        billing_group: string;
        type?: string;
    }

    export interface UpdateProjectInterface {
        name?: string;
        description?: string;
        billing_group?: string;
    }

    export interface ProjectMemberInterface {
        username: string;
        permissions: ProjectPermissionsInterface;
    }

}
