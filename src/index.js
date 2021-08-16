/**
 * EzDocSeal
 * The easiest API to sign PDF documents, creating a blue bar. You provide a name, e-mail address, location and reason and the result is a signed PDF document. If you want more features and/or control we suggest to use our PDF stamper API.
 *
 * OpenAPI spec version: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import Error from './model/Error';
import JsonSignRequest from './model/JsonSignRequest';
import JsonSignResponse from './model/JsonSignResponse';
import SignData from './model/SignData';
import DefaultApi from './api/DefaultApi';

/**
* The_easiest_API_to_sign_PDF_documents_creating_a_blue_bar__You_provide_a_name_e_mail_address_location_and_reason_and_the_result_is_a_signed_PDF_document__If_you_want_more_features_andor_control_we_suggest_to_use_our_PDF_stamper_API_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EzDocSeal = require('SphereonSDKEzDocseal/index'); // See note below*.
* var xxxSvc = new EzDocSeal.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EzDocSeal.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['SphereonSDKEzDocseal/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new EzDocSeal.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EzDocSeal.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module SphereonSDKEzDocseal/index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:SphereonSDKEzDocseal/ApiClient}
     */
    ApiClient,

    /**
     * The Error model constructor.
     * @property {module:SphereonSDKEzDocseal/model/Error}
     */
    Error,

    /**
     * The JsonSignRequest model constructor.
     * @property {module:SphereonSDKEzDocseal/model/JsonSignRequest}
     */
    JsonSignRequest,

    /**
     * The JsonSignResponse model constructor.
     * @property {module:SphereonSDKEzDocseal/model/JsonSignResponse}
     */
    JsonSignResponse,

    /**
     * The SignData model constructor.
     * @property {module:SphereonSDKEzDocseal/model/SignData}
     */
    SignData,

    /**
    * The DefaultApi service constructor.
    * @property {module:SphereonSDKEzDocseal/api/DefaultApi}
    */
    DefaultApi
};