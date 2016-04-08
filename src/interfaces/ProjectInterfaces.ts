import {Interfaces} from './SBGInterfaces';
import {ResponseInterface} from '../util/APIResponse';

export namespace ProjectInterfaces {

    export interface ProjectClientInterface extends Interfaces.ClientInterface {
        list(options: ListOptionsInterface): Q.IPromise<ResponseInterface>;
        create(options: CreateProjectInterface): Q.IPromise<ResponseInterface>;
        edit(options: EditProjectInterface): Q.IPromise<ResponseInterface>;
        listByUserName(options: ListOptionsInterface): Q.IPromise<ResponseInterface>;
        delete(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        getDetails(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        listMembers(options: IdBasedInterface): Q.IPromise<ResponseInterface>;
        addMember(options: AddMemberInterface): Q.IPromise<ResponseInterface>;
        removeMember(options: RemoveMemberInterface): Q.IPromise<ResponseInterface>;
        getMemberPermissions(options: RemoveMemberInterface): Q.IPromise<ResponseInterface>;
        editMemberPermissions(options: EditPermissionsInterface): Q.IPromise<ResponseInterface>;
        overwriteMemberPermissions(options: EditPermissionsInterface): Q.IPromise<ResponseInterface>;
    }

    export interface EditPermissionsInterface extends IdBasedInterface {
        username: string;
        permissions: ProjectPermissionsInterface;
    }

    export interface IdBasedInterface extends Interfaces.QueryStringInterface {
        id: string;
    }

    export interface RemoveMemberInterface extends IdBasedInterface {
        username: string;
    }

    export interface AddMemberInterface extends IdBasedInterface {
        member: ProjectMemberInterface;
    }

    export interface EditProjectInterface extends Interfaces.QueryStringInterface {
        id: string;
        body: UpdateProjectInterface;
    }

    export interface CreateProjectInterface extends Interfaces.QueryStringInterface {
        body: NewProjectInterface;
    }

    export interface ListOptionsInterface extends Interfaces.QueryStringInterface {
        username: string;
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
