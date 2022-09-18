/* tslint:disable */
/* eslint-disable */
/**
 * CasaOS Local Storage API
 * <picture>     <source media=\"(prefers-color-scheme: dark)\" srcset=\"https://raw.githubusercontent.com/IceWhaleTech/logo/main/casaos/casaos_banner_dark_night_800px.png\">     <source media=\"(prefers-color-scheme: light)\" srcset=\"https://raw.githubusercontent.com/IceWhaleTech/logo/main/casaos/casaos_banner_twilight_blue_800px.png\">     <img alt=\"CasaOS\" src=\"https://raw.githubusercontent.com/IceWhaleTech/logo/main/casaos/casaos_banner_twilight_blue_800px.png\"> </picture>  CasaOS Local Storage service manages local storage including disks, partitions and mounting points.  This API allows interacting with the service to conduct such management.  For issues and discussions, please visit the [GitHub repository](https://github.com/IceWhaleTech/CasaOS) or join [our Discord](https://discord.gg/knqAbbBbeX).
 *
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BaseResponse } from '../models';
// @ts-ignore
import { GetMounts200Response } from '../models';
// @ts-ignore
import { Mount } from '../models';
// @ts-ignore
import { UpdateMount200Response } from '../models';
// @ts-ignore
import { UpdateMount400Response } from '../models';
/**
 * MountMethodsApi - axios parameter creator
 * @export
 */
export const MountMethodsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all volumes currently mounted on the system. Volumes can be filtered by corresponding query parameters.
         * @summary Get all mounted volumes
         * @param {string} [id] Filter the results by id
         * @param {string} [mount_point] Filter the results by mount point
         * @param {string} [type] Filter the results by type
         * @param {string} [source] Filter the results by source
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMounts: async (id?: string, mount_point?: string, type?: string, source?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/mount`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (mount_point !== undefined) {
                localVarQueryParameter['mount_point'] = mount_point;
            }

            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }

            if (source !== undefined) {
                localVarQueryParameter['source'] = source;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * (TODO)
         * @summary Mount a volume
         * @param {Mount} mount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mount: async (mount: Mount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mount' is not null or undefined
            assertParamExists('mount', 'mount', mount)
            const localVarPath = `/mount`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(mount, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * (TODO)
         * @summary Umount volume
         * @param {string} mount_point Filter the results by mount point
         * @param {boolean} [persist] &#x60;true&#x60; if the mount should be removed from &#x60;/etc/fstab&#x60;, &#x60;false&#x60; otherwise
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umount: async (mount_point: string, persist?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mount_point' is not null or undefined
            assertParamExists('umount', 'mount_point', mount_point)
            const localVarPath = `/mount`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (mount_point !== undefined) {
                localVarQueryParameter['mount_point'] = mount_point;
            }

            if (persist !== undefined) {
                localVarQueryParameter['persist'] = persist;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updating a mount volume is equivalent to unmounting the volume and mounting it again with the new parameters.
         * @summary Update a mount volume
         * @param {string} mount_point Filter the results by mount point
         * @param {Mount} mount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMount: async (mount_point: string, mount: Mount, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'mount_point' is not null or undefined
            assertParamExists('updateMount', 'mount_point', mount_point)
            // verify required parameter 'mount' is not null or undefined
            assertParamExists('updateMount', 'mount', mount)
            const localVarPath = `/mount`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (mount_point !== undefined) {
                localVarQueryParameter['mount_point'] = mount_point;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(mount, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MountMethodsApi - functional programming interface
 * @export
 */
export const MountMethodsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MountMethodsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all volumes currently mounted on the system. Volumes can be filtered by corresponding query parameters.
         * @summary Get all mounted volumes
         * @param {string} [id] Filter the results by id
         * @param {string} [mount_point] Filter the results by mount point
         * @param {string} [type] Filter the results by type
         * @param {string} [source] Filter the results by source
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMounts(id?: string, mount_point?: string, type?: string, source?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetMounts200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMounts(id, mount_point, type, source, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * (TODO)
         * @summary Mount a volume
         * @param {Mount} mount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async mount(mount: Mount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateMount200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.mount(mount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * (TODO)
         * @summary Umount volume
         * @param {string} mount_point Filter the results by mount point
         * @param {boolean} [persist] &#x60;true&#x60; if the mount should be removed from &#x60;/etc/fstab&#x60;, &#x60;false&#x60; otherwise
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async umount(mount_point: string, persist?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BaseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.umount(mount_point, persist, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updating a mount volume is equivalent to unmounting the volume and mounting it again with the new parameters.
         * @summary Update a mount volume
         * @param {string} mount_point Filter the results by mount point
         * @param {Mount} mount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMount(mount_point: string, mount: Mount, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateMount200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMount(mount_point, mount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MountMethodsApi - factory interface
 * @export
 */
export const MountMethodsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MountMethodsApiFp(configuration)
    return {
        /**
         * Get all volumes currently mounted on the system. Volumes can be filtered by corresponding query parameters.
         * @summary Get all mounted volumes
         * @param {string} [id] Filter the results by id
         * @param {string} [mount_point] Filter the results by mount point
         * @param {string} [type] Filter the results by type
         * @param {string} [source] Filter the results by source
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMounts(id?: string, mount_point?: string, type?: string, source?: string, options?: any): AxiosPromise<GetMounts200Response> {
            return localVarFp.getMounts(id, mount_point, type, source, options).then((request) => request(axios, basePath));
        },
        /**
         * (TODO)
         * @summary Mount a volume
         * @param {Mount} mount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        mount(mount: Mount, options?: any): AxiosPromise<UpdateMount200Response> {
            return localVarFp.mount(mount, options).then((request) => request(axios, basePath));
        },
        /**
         * (TODO)
         * @summary Umount volume
         * @param {string} mount_point Filter the results by mount point
         * @param {boolean} [persist] &#x60;true&#x60; if the mount should be removed from &#x60;/etc/fstab&#x60;, &#x60;false&#x60; otherwise
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        umount(mount_point: string, persist?: boolean, options?: any): AxiosPromise<BaseResponse> {
            return localVarFp.umount(mount_point, persist, options).then((request) => request(axios, basePath));
        },
        /**
         * Updating a mount volume is equivalent to unmounting the volume and mounting it again with the new parameters.
         * @summary Update a mount volume
         * @param {string} mount_point Filter the results by mount point
         * @param {Mount} mount 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMount(mount_point: string, mount: Mount, options?: any): AxiosPromise<UpdateMount200Response> {
            return localVarFp.updateMount(mount_point, mount, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMounts operation in MountMethodsApi.
 * @export
 * @interface MountMethodsApiGetMountsRequest
 */
export interface MountMethodsApiGetMountsRequest {
    /**
     * Filter the results by id
     * @type {string}
     * @memberof MountMethodsApiGetMounts
     */
    readonly id?: string

    /**
     * Filter the results by mount point
     * @type {string}
     * @memberof MountMethodsApiGetMounts
     */
    readonly mount_point?: string

    /**
     * Filter the results by type
     * @type {string}
     * @memberof MountMethodsApiGetMounts
     */
    readonly type?: string

    /**
     * Filter the results by source
     * @type {string}
     * @memberof MountMethodsApiGetMounts
     */
    readonly source?: string
}

/**
 * Request parameters for mount operation in MountMethodsApi.
 * @export
 * @interface MountMethodsApiMountRequest
 */
export interface MountMethodsApiMountRequest {
    /**
     * 
     * @type {Mount}
     * @memberof MountMethodsApiMount
     */
    readonly mount: Mount
}

/**
 * Request parameters for umount operation in MountMethodsApi.
 * @export
 * @interface MountMethodsApiUmountRequest
 */
export interface MountMethodsApiUmountRequest {
    /**
     * Filter the results by mount point
     * @type {string}
     * @memberof MountMethodsApiUmount
     */
    readonly mount_point: string

    /**
     * &#x60;true&#x60; if the mount should be removed from &#x60;/etc/fstab&#x60;, &#x60;false&#x60; otherwise
     * @type {boolean}
     * @memberof MountMethodsApiUmount
     */
    readonly persist?: boolean
}

/**
 * Request parameters for updateMount operation in MountMethodsApi.
 * @export
 * @interface MountMethodsApiUpdateMountRequest
 */
export interface MountMethodsApiUpdateMountRequest {
    /**
     * Filter the results by mount point
     * @type {string}
     * @memberof MountMethodsApiUpdateMount
     */
    readonly mount_point: string

    /**
     * 
     * @type {Mount}
     * @memberof MountMethodsApiUpdateMount
     */
    readonly mount: Mount
}

/**
 * MountMethodsApi - object-oriented interface
 * @export
 * @class MountMethodsApi
 * @extends {BaseAPI}
 */
export class MountMethodsApi extends BaseAPI {
    /**
     * Get all volumes currently mounted on the system. Volumes can be filtered by corresponding query parameters.
     * @summary Get all mounted volumes
     * @param {MountMethodsApiGetMountsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MountMethodsApi
     */
    public getMounts(requestParameters: MountMethodsApiGetMountsRequest = {}, options?: AxiosRequestConfig) {
        return MountMethodsApiFp(this.configuration).getMounts(requestParameters.id, requestParameters.mount_point, requestParameters.type, requestParameters.source, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * (TODO)
     * @summary Mount a volume
     * @param {MountMethodsApiMountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MountMethodsApi
     */
    public mount(requestParameters: MountMethodsApiMountRequest, options?: AxiosRequestConfig) {
        return MountMethodsApiFp(this.configuration).mount(requestParameters.mount, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * (TODO)
     * @summary Umount volume
     * @param {MountMethodsApiUmountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MountMethodsApi
     */
    public umount(requestParameters: MountMethodsApiUmountRequest, options?: AxiosRequestConfig) {
        return MountMethodsApiFp(this.configuration).umount(requestParameters.mount_point, requestParameters.persist, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updating a mount volume is equivalent to unmounting the volume and mounting it again with the new parameters.
     * @summary Update a mount volume
     * @param {MountMethodsApiUpdateMountRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MountMethodsApi
     */
    public updateMount(requestParameters: MountMethodsApiUpdateMountRequest, options?: AxiosRequestConfig) {
        return MountMethodsApiFp(this.configuration).updateMount(requestParameters.mount_point, requestParameters.mount, options).then((request) => request(this.axios, this.basePath));
    }
}