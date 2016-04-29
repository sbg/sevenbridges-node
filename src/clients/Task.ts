import {Base} from './Base';
import {url} from '../decorators/Common';
import {Interfaces} from '../interfaces/SBGInterfaces';
import {TaskInterfaces} from '../interfaces/TaskInterfaces';
import {ApiConfig} from '../api/config';

export class Task extends Base implements TaskInterfaces.TaskClientInterface {

    public url: string = ApiConfig.baseUrl + ApiConfig.urls.tasks_url;

    constructor() {
        super();
    }

    @url('/')
    list(options: TaskInterfaces.ListTasksInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/projects/{project_owner}/{project}/tasks')
    listInProject(options: Interfaces.RequestHandlerInterface) {
        return this._get({
            url: ApiConfig.baseUrl + options.url,
            qs: options.qs
        });
    }

    /**
     *
     * Create Task
     *
     * Request example:
     *  {
     *      "description": "my draft task",
     *      "name": "RFranklin, Experiment IV",
     *      "app": "RFranklin/my-project/new-test-app",
     *      "project": "RFranklin/my-project",
     *      "inputs": {
     *          "cuffdiff_zip": {
     *              "class": "File",
     *               "path": "562785e6e4b00a1d67a8b1aa",
     *               "name": "example_human_known_indels.vcf"
     *          }
     *      }
     *  }
     *
     * @param options
     * @returns {Q.IPromise<any>}
     */
    @url('/')
    create(options: TaskInterfaces.CreateTaskInterface) {

        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._post(opts, options.body);
    }

    @url('/{id}')
    delete(options: TaskInterfaces.IdBasedInterface) {
        return this._delete({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/{id}/inputs')
    getTaskInputs(options: TaskInterfaces.IdBasedInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/{id}/actions/abort')
    abort(options: TaskInterfaces.IdBasedInterface) {
        return this._post({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/{id}')
    getDetails(options: TaskInterfaces.IdBasedInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/{id}')
    modify(options: TaskInterfaces.IdBasedInterface) {

        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._patch(opts, options.body);
    }

    @url('/{id}/execution_details')
    getExecutionDetails(options: TaskInterfaces.IdBasedInterface) {
        return this._get({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/{id}/actions/run')
    run(options: TaskInterfaces.RunTaskInterface) {
        return this._post({
            url: this.url + options.url,
            qs: options.qs
        });
    }

    @url('/{id}/inputs')
    modifyInputs(options: TaskInterfaces.IdBasedInterface) {

        let opts = {
            url: this.url + options.url,
            qs: options.qs
        };

        return this._patch(opts, options.body);
    }


}

