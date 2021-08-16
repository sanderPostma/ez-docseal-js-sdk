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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EzDocSeal);
  }
}(this, function(expect, EzDocSeal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EzDocSeal.JsonSignResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JsonSignResponse', function() {
    it('should create an instance of JsonSignResponse', function() {
      // uncomment below and update the code to test JsonSignResponse
      //var instane = new EzDocSeal.JsonSignResponse();
      //expect(instance).to.be.a(EzDocSeal.JsonSignResponse);
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new EzDocSeal.JsonSignResponse();
      //expect(instance).to.be();
    });

  });

}));