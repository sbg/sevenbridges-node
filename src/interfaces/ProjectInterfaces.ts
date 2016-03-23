export module ProjectInterfaces {

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
