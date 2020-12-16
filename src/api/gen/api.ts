/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * Service API Document
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */
import url from "url";

import { getAuthenticationHeaders, handleGeneratedApiResponse, safeFetch } from "api/helpers";
import { EmptyResponse } from 'libs/fetch'

import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration?: Configuration;
    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name = "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface AccountRequest
 */
export interface AccountRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    birthdate: string;
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    email: string;
    /**
     * 
     * @type {boolean}
     * @memberof AccountRequest
     */
    hasAllowedRecommendations: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof AccountRequest
     */
    token: string;
}/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum CategoryNameEnum {
    CINEMA = 'CINEMA',
    CONFERENCE = 'CONFERENCE',
    INSTRUMENT = 'INSTRUMENT',
    JEUXVIDEO = 'JEUX_VIDEO',
    FILM = 'FILM',
    LECON = 'LECON',
    LIVRE = 'LIVRE',
    MUSIQUE = 'MUSIQUE',
    PRESSE = 'PRESSE',
    SPECTACLE = 'SPECTACLE',
    VISITE = 'VISITE'
}/**
 * An enumeration.
 * @export
 * @enum {string}
 */
export enum CategoryType {
    Event = 'Event',
    Thing = 'Thing'
}/**
 * 
 * @export
 * @interface Coordinates
 */
export interface Coordinates {
    /**
     * 
     * @type {number}
     * @memberof Coordinates
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof Coordinates
     */
    longitude?: number;
}/**
 * 
 * @export
 * @interface OfferCategoryResponse
 */
export interface OfferCategoryResponse {
    /**
     * 
     * @type {CategoryType}
     * @memberof OfferCategoryResponse
     */
    categoryType: CategoryType;
    /**
     * 
     * @type {string}
     * @memberof OfferCategoryResponse
     */
    label: string;
    /**
     * 
     * @type {CategoryNameEnum}
     * @memberof OfferCategoryResponse
     */
    name: CategoryNameEnum;
}/**
 * 
 * @export
 * @interface OfferOffererResponse
 */
export interface OfferOffererResponse {
    /**
     * 
     * @type {string}
     * @memberof OfferOffererResponse
     */
    name: string;
}/**
 * 
 * @export
 * @interface OfferResponse
 */
export interface OfferResponse {
    /**
     * 
     * @type {Array<OfferStockResponse>}
     * @memberof OfferResponse
     */
    bookableStocks: Array<OfferStockResponse>;
    /**
     * 
     * @type {OfferCategoryResponse}
     * @memberof OfferResponse
     */
    category: OfferCategoryResponse;
    /**
     * 
     * @type {string}
     * @memberof OfferResponse
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof OfferResponse
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof OfferResponse
     */
    imageUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OfferResponse
     */
    isDigital: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OfferResponse
     */
    isDuo: boolean;
    /**
     * 
     * @type {string}
     * @memberof OfferResponse
     */
    name: string;
    /**
     * 
     * @type {OfferVenueResponse}
     * @memberof OfferResponse
     */
    venue: OfferVenueResponse;
    /**
     * 
     * @type {string}
     * @memberof OfferResponse
     */
    withdrawalDetails?: string;
}/**
 * 
 * @export
 * @interface OfferStockResponse
 */
export interface OfferStockResponse {
    /**
     * 
     * @type {Date}
     * @memberof OfferStockResponse
     */
    beginningDatetime?: Date;
    /**
     * 
     * @type {number}
     * @memberof OfferStockResponse
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof OfferStockResponse
     */
    price: number;
}/**
 * 
 * @export
 * @interface OfferVenueResponse
 */
export interface OfferVenueResponse {
    /**
     * 
     * @type {string}
     * @memberof OfferVenueResponse
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof OfferVenueResponse
     */
    city?: string;
    /**
     * 
     * @type {Coordinates}
     * @memberof OfferVenueResponse
     */
    coordinates: Coordinates;
    /**
     * 
     * @type {number}
     * @memberof OfferVenueResponse
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof OfferVenueResponse
     */
    name: string;
    /**
     * 
     * @type {OfferOffererResponse}
     * @memberof OfferVenueResponse
     */
    offerer: OfferOffererResponse;
    /**
     * 
     * @type {string}
     * @memberof OfferVenueResponse
     */
    postalCode?: string;
    /**
     * 
     * @type {string}
     * @memberof OfferVenueResponse
     */
    publicName?: string;
}/**
 * 
 * @export
 * @interface RefreshResponse
 */
export interface RefreshResponse {
    /**
     * 
     * @type {string}
     * @memberof RefreshResponse
     */
    accessToken: string;
}/**
 * 
 * @export
 * @interface RequestPasswordResetRequest
 */
export interface RequestPasswordResetRequest {
    /**
     * 
     * @type {string}
     * @memberof RequestPasswordResetRequest
     */
    email: string;
}/**
 * 
 * @export
 * @interface ResetPasswordRequest
 */
export interface ResetPasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordRequest
     */
    newPassword: string;
    /**
     * 
     * @type {string}
     * @memberof ResetPasswordRequest
     */
    resetPasswordToken: string;
}/**
 * 
 * @export
 * @interface SigninRequest
 */
export interface SigninRequest {
    /**
     * 
     * @type {string}
     * @memberof SigninRequest
     */
    identifier: string;
    /**
     * 
     * @type {string}
     * @memberof SigninRequest
     */
    password: string;
}/**
 * 
 * @export
 * @interface SigninResponse
 */
export interface SigninResponse {
    /**
     * 
     * @type {string}
     * @memberof SigninResponse
     */
    accessToken: string;
    /**
     * 
     * @type {string}
     * @memberof SigninResponse
     */
    refreshToken: string;
}/**
 * 
 * @export
 * @interface UserProfileResponse
 */
export interface UserProfileResponse {
    /**
     * 
     * @type {string}
     * @memberof UserProfileResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserProfileResponse
     */
    firstName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserProfileResponse
     */
    isBeneficiary: boolean;
}/**
 * 
 * @export
 * @interface ValidateEmailRequest
 */
export interface ValidateEmailRequest {
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailRequest
     */
    emailValidationToken: string;
}/**
 * 
 * @export
 * @interface ValidateEmailResponse
 */
export interface ValidateEmailResponse {
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailResponse
     */
    accessToken: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailResponse
     */
    idCheckToken?: string;
    /**
     * 
     * @type {string}
     * @memberof ValidateEmailResponse
     */
    refreshToken: string;
}
/**
 * DefaultApi - fetch parameter creator
 * @export
 */
export const DefaultApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary get_user_profile <GET>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getnativev1me(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/me`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary get_offer <GET>
         * @param {string} offer_id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getnativev1offerofferId(offer_id: string, options: any = {}): Promise<FetchArgs> {
            // verify required parameter 'offer_id' is not null or undefined
            if (offer_id === null || offer_id === undefined) {
                throw new RequiredError('offer_id','Required parameter offer_id was null or undefined when calling getnativev1offerofferId.');
            }
            const localVarPath = `/native/v1/offer/{offer_id}`
                .replace(`{${"offer_id"}}`, encodeURIComponent(String(offer_id)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary create_account <POST>
         * @param {AccountRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1account(body?: AccountRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/account`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"AccountRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary refresh <POST>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1refreshAccessToken(options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/refresh_access_token`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary request_password_reset <POST>
         * @param {RequestPasswordResetRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1requestPasswordReset(body?: RequestPasswordResetRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/request_password_reset`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"RequestPasswordResetRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary reset_password <POST>
         * @param {ResetPasswordRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1resetPassword(body?: ResetPasswordRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/reset_password`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ResetPasswordRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary signin <POST>
         * @param {SigninRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1signin(body?: SigninRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/signin`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"SigninRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary validate_email <POST>
         * @param {ValidateEmailRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1validateEmail(body?: ValidateEmailRequest, options: any = {}): Promise<FetchArgs> {
            const localVarPath = `/native/v1/validate_email`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'POST' }, options);
            const localVarHeaderParameter = await getAuthenticationHeaders();
            const localVarQueryParameter = {} as any;
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
            const needsSerialization = (<any>"ValidateEmailRequest" !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.body =  needsSerialization ? JSON.stringify(body || {}) : (body || "");
            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary get_user_profile <GET>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getnativev1me(basePath: string, options?: any): Promise<UserProfileResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).getnativev1me(options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary get_offer <GET>
         * @param {string} offer_id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getnativev1offerofferId(basePath: string, offer_id: string, options?: any): Promise<OfferResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).getnativev1offerofferId(offer_id, options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary create_account <POST>
         * @param {AccountRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1account(basePath: string, body?: AccountRequest, options?: any): Promise<EmptyResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).postnativev1account(body, options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary refresh <POST>
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1refreshAccessToken(basePath: string, options?: any): Promise<RefreshResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).postnativev1refreshAccessToken(options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary request_password_reset <POST>
         * @param {RequestPasswordResetRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1requestPasswordReset(basePath: string, body?: RequestPasswordResetRequest, options?: any): Promise<EmptyResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).postnativev1requestPasswordReset(body, options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary reset_password <POST>
         * @param {ResetPasswordRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1resetPassword(basePath: string, body?: ResetPasswordRequest, options?: any): Promise<EmptyResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).postnativev1resetPassword(body, options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary signin <POST>
         * @param {SigninRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1signin(basePath: string, body?: SigninRequest, options?: any): Promise<SigninResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).postnativev1signin(body, options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
        /**
         * 
         * @summary validate_email <POST>
         * @param {ValidateEmailRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postnativev1validateEmail(basePath: string, body?: ValidateEmailRequest, options?: any): Promise<ValidateEmailResponse> {
            const localVarFetchArgs = await DefaultApiFetchParamCreator(configuration).postnativev1validateEmail(body, options);
            const response = await safeFetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options)
            return handleGeneratedApiResponse(response)
        },
    }
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary get_user_profile <GET>
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async getnativev1me(options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.getnativev1me(this.basePath, options)
    }
    /**
     * 
     * @summary get_offer <GET>
     * @param {string} offer_id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async getnativev1offerofferId(offer_id: string, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.getnativev1offerofferId(this.basePath, offer_id, options)
    }
    /**
     * 
     * @summary create_account <POST>
     * @param {AccountRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async postnativev1account(body?: AccountRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.postnativev1account(this.basePath, body, options)
    }
    /**
     * 
     * @summary refresh <POST>
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async postnativev1refreshAccessToken(options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.postnativev1refreshAccessToken(this.basePath, options)
    }
    /**
     * 
     * @summary request_password_reset <POST>
     * @param {RequestPasswordResetRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async postnativev1requestPasswordReset(body?: RequestPasswordResetRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.postnativev1requestPasswordReset(this.basePath, body, options)
    }
    /**
     * 
     * @summary reset_password <POST>
     * @param {ResetPasswordRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async postnativev1resetPassword(body?: ResetPasswordRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.postnativev1resetPassword(this.basePath, body, options)
    }
    /**
     * 
     * @summary signin <POST>
     * @param {SigninRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async postnativev1signin(body?: SigninRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.postnativev1signin(this.basePath, body, options)
    }
    /**
     * 
     * @summary validate_email <POST>
     * @param {ValidateEmailRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public async postnativev1validateEmail(body?: ValidateEmailRequest, options?: any) {
        const functionalApi = DefaultApiFp(this.configuration)
        return functionalApi.postnativev1validateEmail(this.basePath, body, options)
    }
}
