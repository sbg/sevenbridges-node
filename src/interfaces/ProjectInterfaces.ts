import {Interfaces} from './SBGInterfaces';

export namespace ProjectInterfaces {

    export interface ProjectClientInterface extends Interfaces.ClientInterface {
        list: Function;
        create: Function;
        delete: Function;
        edit: Function;
        listByUserName: Function;
        getDetails: Function;
        listMembers: Function;
        addMember: Function;
        removeMember: Function;
        getMemberPermissions: Function;
        editMemberPermissions: Function;
        overwriteMemberPermissions: Function;
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
