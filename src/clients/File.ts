import {Base} from './Base';
import {FileInterfaces} from '../interfaces/FileInterfaces';
import {ApiConfig} from '../api/config';

export class File extends Base implements FileInterfaces.FileClientInterface {

    public url: string = ApiConfig.apiUrl + ApiConfig.urls.files_url;

    /**
     * List files in project
     *
     * @returns {Q.IPromise<any>}
     */
    list(projectId: string, fields?: string ) {
        return this._get({
            url: this.url,
            qs: {
                projectId: projectId,
                fields: fields
            }
        });
    }

    /**
     * Delete file
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    delete(fileId: string, fields?: string) {
        return this._delete({
            url: this.url + '/' + fileId,
            qs: {
                fields: fields
            }
        });
    }

    /**
     * Get file details
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    getDetails(fileId: string, fields?: string) {
        return this._get({
            url: this.url + '/' + fileId,
            qs: {
                fields: fields
            }
        });
    }

    updateDetails(fileId: string, fields?: string) {
        return this._patch({
            url: this.url + '/' + fileId,
            qs: {
                fields: fields
            }
        });
    }

    /**
     *  Copy files to a another project
     *
     *  Example Response:
     * {
     *   "href": "https://api.sbgenomics.com/v2/files/569637cce4b0b65fcb306ae5",
     *   "id": "569637cce4b0b65fcb306ae5",
     *   "name": "new-file",
     *   "size": 68425,
     *   "project": "RFranklin/my-project",
     *   "created_on": "2016-01-13T11:41:00Z",
     *   "modified_on": "2016-01-13T11:41:00Z",
     *   "origin": {},
     *   "metadata": {
     *      "file_type": "fastq",
     *      "sample": "E16201_pool35_L1756",
     *      "library": "hg19",
     *       "platform_unit": "C18_99",
     *       "seq_tech": "IonTorrent",
     *       "qual_scale": "sanger"
     *    }
     * }
     * @param fileId
     * @param projectId
     * @param newName
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    copy(fileId: string, projectId: string, newName: string, fields?: string) {
        return this._post({
            url: this.url + '/' + fileId + '/actions/copy',
            body: {
                project: projectId,
                name: newName
            },
            qs: {
                fields: fields
            }
        });
    }

    /**
     * Get file download url
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    getDownloadUrl(fileId: string, fields?: string ) {
        return this._get({
            url: this.url + '/' + fileId + '/download_info',
            qs: {
                fields: fields
            }
        });
    }

    /**
     * Get files metadata
     *
     * @param fileId
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    getMetadata(fileId: string, fields?: string ) {
        return this._get({
            url: this.url + '/' + fileId + '/metadata',
            qs: {
                fields: fields
            }
        });
    }

    /**
     * Modify files metadata
     *
     * @param fileId
     * @param metadata
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    modifyMetadata(fileId: string, metadata: any, fields?: string ) {
        return this._patch({
            url: this.url + '/' + fileId + '/metadata',
            body: metadata,
            qs: {
                fields: fields
            }
        });
    }

    /**
     * Overwrite files metadata
     *
     * @param fileId
     * @param metadata
     * @param fields
     * @returns {Q.IPromise<any>}
     */
    overwriteMetadata(fileId: string, metadata: any, fields?: string ) {
        return this._put({
            url: this.url + '/' + fileId + '/metadata',
            body: metadata,
            qs: {
                fields: fields
            }
        });
    }

}
