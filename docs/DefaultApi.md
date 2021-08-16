# EzDocSeal.DefaultApi

All URIs are relative to *https://api.dev.sphereon.io/ezdocseal/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sign**](DefaultApi.md#sign) | **POST** /sign | 

<a name="sign"></a>
# **sign**
> JsonSignResponse sign(body)



### Example
```javascript
import EzDocSeal from 'ez_doc_seal';
let defaultClient = EzDocSeal.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new EzDocSeal.DefaultApi();
let body = new EzDocSeal.JsonSignRequest(); // JsonSignRequest | 

apiInstance.sign(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JsonSignRequest**](JsonSignRequest.md)|  | 

### Return type

[**JsonSignResponse**](JsonSignResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

