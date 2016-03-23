/// <reference path="../../node_modules/typescript/lib/lib.core.d.ts" />

export namespace ApiConfig {

    export var baseUrl: string = 'https://api.sbgenomics.com/';
    export var apiVersion: string = 'v2';
    export var apiUrl: string = baseUrl + apiVersion;

    export var urls: any = {
        rate_limit_url: '/rate_limit',
        user_url: '/user',
        users_url: '/users',
        billing_url: '/billing',
        projects_url: '/projects',
        files_url: '/files',
        tasks_url: '/tasks',
        apps_url: '/apps',
        action_url: '/action'
    };

    export function updateApiVersion(version: number): void {
        apiVersion = 'v' + version;
        apiUrl = baseUrl + apiVersion;
    }

    export function getApiEndpoint(): string {
        return baseUrl + apiVersion;
    }

}
