"use strict";

module.exports = {
  defaults: {
    sources: {
      html: "<!DOCTYPE html>\n<html>\n    <head>\n        <title>Page Title</title>\n    </head>\n    <body>\n        <!-- Put your page markup here -->\n    </body>\n</html>",
      css: "",
      javascript: ""
    },
    errors: {
      html: [],
      css: [],
      javascript: []
    },
    enabledLibraries: []
  },

  libraries: [
    {
      name: "jQuery",
      javascript: "https://code.jquery.com/jquery-2.1.4.js",
      validations: {javascript: {jquery: {$set: true}}}
    },
    {
      name: "lodash",
      javascript: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js",
      validations: {javascript: {predef: {$push: ['_']}}}
    },
    {
      name: "Underscore.js",
      javascript: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore.js",
      validations: {javascript: {predef: {$push: ['_']}}}
    },
    {
      name: "AngularJS",
      javascript: "https://code.angularjs.org/1.4.4/angular.js",
      validations: {javascript: {predef: {$push: ['angular']}}}
    },
    {
      name: "React",
      javascript: "https://fb.me/react-0.13.3.js",
      validations: {javascript: {predef: {$push: ['React']}}}
    },
    {
      name: "Ember.js",
      javascript: "http://builds.emberjs.com/release/ember.js",
      validations: {javascript: {predef: {$push: ['Ember']}}}
    },
    {
      name: "Bootstrap",
      css: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
      javascript: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"
    },
    {
      name: "Foundation",
      css: "https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/css/foundation.css",
      javascript: "https://cdnjs.cloudflare.com/ajax/libs/foundation/5.5.2/js/foundation.js"
    },
    {
      name: "normalize.css",
      css:"https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css"
    }
  ]
}
