/// <reference path="../../typings/node/node.d.ts" />

export namespace ApiConfig {

    var apiUrlTemplate: string = 'https://<api-env>api.sbgenomics.com/';

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

    function updateApiUrl(): void {
        apiUrl = baseUrl + apiVersion;
    }

    export function updateApiEnvironment(env: string): void {
        baseUrl = apiUrlTemplate.replace('<api-env>', env === 'aws' ? '' : env + '-');
        updateApiUrl();
    }

    export function updateApiVersion(version: number): void {
        apiVersion = 'v' + version;
        apiUrl = baseUrl + apiVersion;
        updateApiUrl();
    }

    export function getApiEndpoint(): string {
        return baseUrl + apiVersion;
    }

}
