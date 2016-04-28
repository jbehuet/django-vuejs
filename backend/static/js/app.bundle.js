(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jbe/Documents/Projets/django_todo/frontend-src/js/app.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.router = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _app = require('./components/app.vue');

var _app2 = _interopRequireDefault(_app);

var _home = require('./components/home.vue');

var _home2 = _interopRequireDefault(_home);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueResource2.default);
_vue2.default.use(_vueRouter2.default);

// Router options
var router = exports.router = new _vueRouter2.default({
    history: false,
    root: '/'
});

// Router map for defining components
router.map({
    '/': {
        component: _home2.default
    }
});

// Redirect to the home route if any routes are unmatched
router.redirect({
    '*': '/'
});

router.start(_app2.default, '#app');

},{"./components/app.vue":"/Users/jbe/Documents/Projets/django_todo/frontend-src/js/components/app.vue","./components/home.vue":"/Users/jbe/Documents/Projets/django_todo/frontend-src/js/components/home.vue","vue":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue/dist/vue.common.js","vue-resource":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/index.js","vue-router":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-router/dist/vue-router.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/js/components/app.vue":[function(require,module,exports){
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <ul class=\"nav navbar-nav\">\n      <li><a v-link=\"'home'\">HAAme</a></li>\n    </ul>\n  </div>    \n</nav>\n<div class=\"container\">\n  <router-view></router-view>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/jbe/Documents/Projets/django_todo/frontend-src/js/components/app.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue/dist/vue.common.js","vue-hot-reload-api":"/Users/jbe/Documents/Projets/django_todo/node_modules/vue-hot-reload-api/index.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/js/components/home.vue":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      quote: ''
    };
  },

  methods: {
    getQuote: function getQuote() {
      var _this = this;

      this.$http.get('http://localhost:8000/api/todos', function (data) {
        _this.quote = data;
      }).error(function (err) {
        return console.log(err);
      });
    }
  }
};
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"col-sm-6 col-sm-offset-3\">\n  <h1>Get a Free Chuck Norris Quote!</h1>\n  <button class=\"btn btn-primary\" v-on:click=\"getQuote()\">Get a Quote</button>\n  <div class=\"quote-area\" v-if=\"quote\">\n    <h2><blockquote></blockquote></h2>      \n  </div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/jbe/Documents/Projets/django_todo/frontend-src/js/components/home.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue/dist/vue.common.js","vue-hot-reload-api":"/Users/jbe/Documents/Projets/django_todo/node_modules/vue-hot-reload-api/index.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/before.js":[function(require,module,exports){
/**
 * Before Interceptor.
 */

var _ = require('../util');

module.exports = {

    request: function (request) {

        if (_.isFunction(request.beforeSend)) {
            request.beforeSend.call(this, request);
        }

        return request;
    }

};

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/index.js":[function(require,module,exports){
/**
 * Base client.
 */

var _ = require('../../util');
var Promise = require('../../promise');
var xhrClient = require('./xhr');

module.exports = function (request) {

    var response = (request.client || xhrClient)(request);

    return Promise.resolve(response).then(function (response) {

        if (response.headers) {

            var headers = parseHeaders(response.headers);

            response.headers = function (name) {

                if (name) {
                    return headers[_.toLower(name)];
                }

                return headers;
            };

        }

        response.ok = response.status >= 200 && response.status < 300;

        return response;
    });

};

function parseHeaders(str) {

    var headers = {}, value, name, i;

    if (_.isString(str)) {
        _.each(str.split('\n'), function (row) {

            i = row.indexOf(':');
            name = _.trim(_.toLower(row.slice(0, i)));
            value = _.trim(row.slice(i + 1));

            if (headers[name]) {

                if (_.isArray(headers[name])) {
                    headers[name].push(value);
                } else {
                    headers[name] = [headers[name], value];
                }

            } else {

                headers[name] = value;
            }

        });
    }

    return headers;
}

},{"../../promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js","../../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js","./xhr":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/xhr.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/jsonp.js":[function(require,module,exports){
/**
 * JSONP client.
 */

var _ = require('../../util');
var Promise = require('../../promise');

module.exports = function (request) {
    return new Promise(function (resolve) {

        var callback = '_jsonp' + Math.random().toString(36).substr(2), response = {request: request, data: null}, handler, script;

        request.params[request.jsonp] = callback;
        request.cancel = function () {
            handler({type: 'cancel'});
        };

        script = document.createElement('script');
        script.src = _.url(request);
        script.type = 'text/javascript';
        script.async = true;

        window[callback] = function (data) {
            response.data = data;
        };

        handler = function (event) {

            if (event.type === 'load' && response.data !== null) {
                response.status = 200;
            } else if (event.type === 'error') {
                response.status = 404;
            } else {
                response.status = 0;
            }

            resolve(response);

            delete window[callback];
            document.body.removeChild(script);
        };

        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
};

},{"../../promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js","../../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/xdr.js":[function(require,module,exports){
/**
 * XDomain client (Internet Explorer).
 */

var _ = require('../../util');
var Promise = require('../../promise');

module.exports = function (request) {
    return new Promise(function (resolve) {

        var xdr = new XDomainRequest(), response = {request: request}, handler;

        request.cancel = function () {
            xdr.abort();
        };

        xdr.open(request.method, _.url(request), true);

        handler = function (event) {

            response.data = xdr.responseText;
            response.status = xdr.status;
            response.statusText = xdr.statusText;

            resolve(response);
        };

        xdr.timeout = 0;
        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = function () {};
        xdr.onprogress = function () {};

        xdr.send(request.data);
    });
};

},{"../../promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js","../../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/xhr.js":[function(require,module,exports){
/**
 * XMLHttp client.
 */

var _ = require('../../util');
var Promise = require('../../promise');

module.exports = function (request) {
    return new Promise(function (resolve) {

        var xhr = new XMLHttpRequest(), response = {request: request}, handler;

        request.cancel = function () {
            xhr.abort();
        };

        xhr.open(request.method, _.url(request), true);

        handler = function (event) {

            response.data = xhr.responseText;
            response.status = xhr.status;
            response.statusText = xhr.statusText;
            response.headers = xhr.getAllResponseHeaders();

            resolve(response);
        };

        xhr.timeout = 0;
        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = function () {};
        xhr.onprogress = function () {};

        if (_.isPlainObject(request.xhr)) {
            _.extend(xhr, request.xhr);
        }

        if (_.isPlainObject(request.upload)) {
            _.extend(xhr.upload, request.upload);
        }

        _.each(request.headers || {}, function (value, header) {
            xhr.setRequestHeader(header, value);
        });

        xhr.send(request.data);
    });
};

},{"../../promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js","../../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/cors.js":[function(require,module,exports){
/**
 * CORS Interceptor.
 */

var _ = require('../util');
var xdrClient = require('./client/xdr');
var xhrCors = 'withCredentials' in new XMLHttpRequest();
var originUrl = _.url.parse(location.href);

module.exports = {

    request: function (request) {

        if (request.crossOrigin === null) {
            request.crossOrigin = crossOrigin(request);
        }

        if (request.crossOrigin) {

            if (!xhrCors) {
                request.client = xdrClient;
            }

            request.emulateHTTP = false;
        }

        return request;
    }

};

function crossOrigin(request) {

    var requestUrl = _.url.parse(_.url(request));

    return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
}

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js","./client/xdr":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/xdr.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/header.js":[function(require,module,exports){
/**
 * Header Interceptor.
 */

var _ = require('../util');

module.exports = {

    request: function (request) {

        request.method = request.method.toUpperCase();
        request.headers = _.extend({}, _.http.headers.common,
            !request.crossOrigin ? _.http.headers.custom : {},
            _.http.headers[request.method.toLowerCase()],
            request.headers
        );

        if (_.isPlainObject(request.data) && /^(GET|JSONP)$/i.test(request.method)) {
            _.extend(request.params, request.data);
            delete request.data;
        }

        return request;
    }

};

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/index.js":[function(require,module,exports){
/**
 * Service for sending network requests.
 */

var _ = require('../util');
var Client = require('./client');
var Promise = require('../promise');
var interceptor = require('./interceptor');
var jsonType = {'Content-Type': 'application/json'};

function Http(url, options) {

    var client = Client, request, promise;

    Http.interceptors.forEach(function (handler) {
        client = interceptor(handler, this.$vm)(client);
    }, this);

    options = _.isObject(url) ? url : _.extend({url: url}, options);
    request = _.merge({}, Http.options, this.$options, options);
    promise = client(request).bind(this.$vm).then(function (response) {

        return response.ok ? response : Promise.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            _.error(response);
        }

        return Promise.reject(response);
    });

    if (request.success) {
        promise.success(request.success);
    }

    if (request.error) {
        promise.error(request.error);
    }

    return promise;
}

Http.options = {
    method: 'get',
    data: '',
    params: {},
    headers: {},
    xhr: null,
    upload: null,
    jsonp: 'callback',
    beforeSend: null,
    crossOrigin: null,
    emulateHTTP: false,
    emulateJSON: false,
    timeout: 0
};

Http.interceptors = [
    require('./before'),
    require('./timeout'),
    require('./jsonp'),
    require('./method'),
    require('./mime'),
    require('./header'),
    require('./cors')
];

Http.headers = {
    put: jsonType,
    post: jsonType,
    patch: jsonType,
    delete: jsonType,
    common: {'Accept': 'application/json, text/plain, */*'},
    custom: {'X-Requested-With': 'XMLHttpRequest'}
};

['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {

    Http[method] = function (url, data, success, options) {

        if (_.isFunction(data)) {
            options = success;
            success = data;
            data = undefined;
        }

        if (_.isObject(success)) {
            options = success;
            success = undefined;
        }

        return this(url, _.extend({method: method, data: data, success: success}, options));
    };
});

module.exports = _.http = Http;

},{"../promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js","../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js","./before":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/before.js","./client":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/index.js","./cors":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/cors.js","./header":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/header.js","./interceptor":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/interceptor.js","./jsonp":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/jsonp.js","./method":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/method.js","./mime":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/mime.js","./timeout":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/timeout.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/interceptor.js":[function(require,module,exports){
/**
 * Interceptor factory.
 */

var _ = require('../util');
var Promise = require('../promise');

module.exports = function (handler, vm) {

    return function (client) {

        if (_.isFunction(handler)) {
            handler = handler.call(vm, Promise);
        }

        return function (request) {

            if (_.isFunction(handler.request)) {
                request = handler.request.call(vm, request);
            }

            return when(request, function (request) {
                return when(client(request), function (response) {

                    if (_.isFunction(handler.response)) {
                        response = handler.response.call(vm, response);
                    }

                    return response;
                });
            });
        };
    };
};

function when(value, fulfilled, rejected) {

    var promise = Promise.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

},{"../promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js","../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/jsonp.js":[function(require,module,exports){
/**
 * JSONP Interceptor.
 */

var jsonpClient = require('./client/jsonp');

module.exports = {

    request: function (request) {

        if (request.method == 'JSONP') {
            request.client = jsonpClient;
        }

        return request;
    }

};

},{"./client/jsonp":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/client/jsonp.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/method.js":[function(require,module,exports){
/**
 * HTTP method override Interceptor.
 */

module.exports = {

    request: function (request) {

        if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
            request.headers['X-HTTP-Method-Override'] = request.method;
            request.method = 'POST';
        }

        return request;
    }

};

},{}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/mime.js":[function(require,module,exports){
/**
 * Mime Interceptor.
 */

var _ = require('../util');

module.exports = {

    request: function (request) {

        if (request.emulateJSON && _.isPlainObject(request.data)) {
            request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            request.data = _.url.params(request.data);
        }

        if (_.isObject(request.data) && /FormData/i.test(request.data.toString())) {
            delete request.headers['Content-Type'];
        }

        if (_.isPlainObject(request.data)) {
            request.data = JSON.stringify(request.data);
        }

        return request;
    },

    response: function (response) {

        try {
            response.data = JSON.parse(response.data);
        } catch (e) {}

        return response;
    }

};

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/timeout.js":[function(require,module,exports){
/**
 * Timeout Interceptor.
 */

module.exports = function () {

    var timeout;

    return {

        request: function (request) {

            if (request.timeout) {
                timeout = setTimeout(function () {
                    request.cancel();
                }, request.timeout);
            }

            return request;
        },

        response: function (response) {

            clearTimeout(timeout);

            return response;
        }

    };
};

},{}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/index.js":[function(require,module,exports){
/**
 * Install plugin.
 */

function install(Vue) {

    var _ = require('./util');

    _.config = Vue.config;
    _.warning = Vue.util.warn;
    _.nextTick = Vue.util.nextTick;

    Vue.url = require('./url');
    Vue.http = require('./http');
    Vue.resource = require('./resource');
    Vue.Promise = require('./promise');

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function () {
                return _.options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function () {
                return _.options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function () {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function () {
                return function (executor) {
                    return new Vue.Promise(executor, this);
                }.bind(this);
            }
        }

    });
}

if (window.Vue) {
    Vue.use(install);
}

module.exports = install;

},{"./http":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/http/index.js","./promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js","./resource":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/resource.js","./url":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/index.js","./util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/lib/promise.js":[function(require,module,exports){
/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var _ = require('../util');

var RESOLVED = 0;
var REJECTED = 1;
var PENDING  = 2;

function Promise(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise.reject = function (r) {
    return new Promise(function (resolve, reject) {
        reject(r);
    });
};

Promise.resolve = function (x) {
    return new Promise(function (resolve, reject) {
        resolve(x);
    });
};

Promise.all = function all(iterable) {
    return new Promise(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise.race = function race(iterable) {
    return new Promise(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    _.nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

module.exports = Promise;

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/lib/url-template.js":[function(require,module,exports){
/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

exports.expand = function (url, params, variables) {

    var tmpl = this.parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
};

exports.parse = function (template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function (context) {
            return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, exports.getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return exports.encodeReserved(literal);
                }
            });
        }
    };
};

exports.getValues = function (context, operator, key, modifier) {

    var value = context[key], result = [];

    if (this.isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(this.isDefined).forEach(function (value) {
                        result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
                    }, this);
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (this.isDefined(value[k])) {
                            result.push(this.encodeValue(operator, value[k], k));
                        }
                    }, this);
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(this.isDefined).forEach(function (value) {
                        tmp.push(this.encodeValue(operator, value));
                    }, this);
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (this.isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(this.encodeValue(operator, value[k].toString()));
                        }
                    }, this);
                }

                if (this.isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
};

exports.isDefined = function (value) {
    return value !== undefined && value !== null;
};

exports.isKeyOperator = function (operator) {
    return operator === ';' || operator === '&' || operator === '?';
};

exports.encodeValue = function (operator, value, key) {

    value = (operator === '+' || operator === '#') ? this.encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
};

exports.encodeReserved = function (str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
};

},{}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/promise.js":[function(require,module,exports){
/**
 * Promise adapter.
 */

var _ = require('./util');
var PromiseObj = window.Promise || require('./lib/promise');

function Promise(executor, context) {

    if (executor instanceof PromiseObj) {
        this.promise = executor;
    } else {
        this.promise = new PromiseObj(executor.bind(context));
    }

    this.context = context;
}

Promise.all = function (iterable, context) {
    return new Promise(PromiseObj.all(iterable), context);
};

Promise.resolve = function (value, context) {
    return new Promise(PromiseObj.resolve(value), context);
};

Promise.reject = function (reason, context) {
    return new Promise(PromiseObj.reject(reason), context);
};

Promise.race = function (iterable, context) {
    return new Promise(PromiseObj.race(iterable), context);
};

var p = Promise.prototype;

p.bind = function (context) {
    this.context = context;
    return this;
};

p.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    this.promise = this.promise.then(fulfilled, rejected);

    return this;
};

p.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    this.promise = this.promise.catch(rejected);

    return this;
};

p.finally = function (callback) {

    return this.then(function (value) {
            callback.call(this);
            return value;
        }, function (reason) {
            callback.call(this);
            return PromiseObj.reject(reason);
        }
    );
};

p.success = function (callback) {

    _.warn('The `success` method has been deprecated. Use the `then` method instead.');

    return this.then(function (response) {
        return callback.call(this, response.data, response.status, response) || response;
    });
};

p.error = function (callback) {

    _.warn('The `error` method has been deprecated. Use the `catch` method instead.');

    return this.catch(function (response) {
        return callback.call(this, response.data, response.status, response) || response;
    });
};

p.always = function (callback) {

    _.warn('The `always` method has been deprecated. Use the `finally` method instead.');

    var cb = function (response) {
        return callback.call(this, response.data, response.status, response) || response;
    };

    return this.then(cb, cb);
};

module.exports = Promise;

},{"./lib/promise":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/lib/promise.js","./util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/resource.js":[function(require,module,exports){
/**
 * Service for interacting with RESTful services.
 */

var _ = require('./util');

function Resource(url, params, actions, options) {

    var self = this, resource = {};

    actions = _.extend({},
        Resource.actions,
        actions
    );

    _.each(actions, function (action, name) {

        action = _.merge({url: url, params: params || {}}, options, action);

        resource[name] = function () {
            return (self.$http || _.http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options = _.extend({}, action), params = {}, data, success, error;

    switch (args.length) {

        case 4:

            error = args[3];
            success = args[2];

        case 3:
        case 2:

            if (_.isFunction(args[1])) {

                if (_.isFunction(args[0])) {

                    success = args[0];
                    error = args[1];

                    break;
                }

                success = args[1];
                error = args[2];

            } else {

                params = args[0];
                data = args[1];
                success = args[2];

                break;
            }

        case 1:

            if (_.isFunction(args[0])) {
                success = args[0];
            } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
                data = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
    }

    options.data = data;
    options.params = _.extend({}, options.params, params);

    if (success) {
        options.success = success;
    }

    if (error) {
        options.error = error;
    }

    return options;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

module.exports = _.resource = Resource;

},{"./util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/index.js":[function(require,module,exports){
/**
 * Service for URL templating.
 */

var _ = require('../util');
var ie = document.documentMode;
var el = document.createElement('a');

function Url(url, params) {

    var options = url, transform;

    if (_.isString(url)) {
        options = {url: url, params: params};
    }

    options = _.merge({}, Url.options, this.$options, options);

    Url.transforms.forEach(function (handler) {
        transform = factory(handler, transform, this.$vm);
    }, this);

    return transform(options);
};

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transforms = [
    require('./template'),
    require('./legacy'),
    require('./query'),
    require('./root')
];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (_.isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    if (ie) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options) {
        return handler.call(vm, options, next);
    };
}

function serialize(params, obj, scope) {

    var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;

    _.each(obj, function (value, key) {

        hash = _.isObject(value) || _.isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

module.exports = _.url = Url;

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js","./legacy":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/legacy.js","./query":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/query.js","./root":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/root.js","./template":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/template.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/legacy.js":[function(require,module,exports){
/**
 * Legacy Transform.
 */

var _ = require('../util');

module.exports = function (options, next) {

    var variables = [], url = next(options);

    url = url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {

        _.warn('The `:' + name + '` parameter syntax has been deprecated. Use the `{' + name + '}` syntax instead.');

        if (options.params[name]) {
            variables.push(name);
            return slash + encodeUriSegment(options.params[name]);
        }

        return '';
    });

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
};

function encodeUriSegment(value) {

    return encodeUriQuery(value, true).
        replace(/%26/gi, '&').
        replace(/%3D/gi, '=').
        replace(/%2B/gi, '+');
}

function encodeUriQuery(value, spaces) {

    return encodeURIComponent(value).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, (spaces ? '%20' : '+'));
}

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/query.js":[function(require,module,exports){
/**
 * Query Parameter Transform.
 */

var _ = require('../util');

module.exports = function (options, next) {

    var urlParams = Object.keys(_.url.options.params), query = {}, url = next(options);

   _.each(options.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = _.url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
};

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/root.js":[function(require,module,exports){
/**
 * Root Prefix Transform.
 */

var _ = require('../util');

module.exports = function (options, next) {

    var url = next(options);

    if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
        url = options.root + '/' + url;
    }

    return url;
};

},{"../util":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/url/template.js":[function(require,module,exports){
/**
 * URL Template (RFC 6570) Transform.
 */

var UrlTemplate = require('../lib/url-template');

module.exports = function (options) {

    var variables = [], url = UrlTemplate.expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
};

},{"../lib/url-template":"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/lib/url-template.js"}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-resource/src/util.js":[function(require,module,exports){
/**
 * Utility functions.
 */

var _ = exports, array = [], console = window.console;

_.warn = function (msg) {
    if (console && _.warning && (!_.config.silent || _.config.debug)) {
        console.warn('[VueResource warn]: ' + msg);
    }
};

_.error = function (msg) {
    if (console) {
        console.error(msg);
    }
};

_.trim = function (str) {
    return str.replace(/^\s*|\s*$/g, '');
};

_.toLower = function (str) {
    return str ? str.toLowerCase() : '';
};

_.isArray = Array.isArray;

_.isString = function (val) {
    return typeof val === 'string';
};

_.isFunction = function (val) {
    return typeof val === 'function';
};

_.isObject = function (obj) {
    return obj !== null && typeof obj === 'object';
};

_.isPlainObject = function (obj) {
    return _.isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
};

_.options = function (fn, obj, options) {

    options = options || {};

    if (_.isFunction(options)) {
        options = options.call(obj);
    }

    return _.merge(fn.bind({$vm: obj, $options: options}), fn, {$options: options});
};

_.each = function (obj, iterator) {

    var i, key;

    if (typeof obj.length == 'number') {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (_.isObject(obj)) {
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
};

_.defaults = function (target, source) {

    for (var key in source) {
        if (target[key] === undefined) {
            target[key] = source[key];
        }
    }

    return target;
};

_.extend = function (target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (arg) {
        merge(target, arg);
    });

    return target;
};

_.merge = function (target) {

    var args = array.slice.call(arguments, 1);

    args.forEach(function (arg) {
        merge(target, arg, true);
    });

    return target;
};

function merge(target, source, deep) {
    for (var key in source) {
        if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
            if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
                target[key] = {};
            }
            if (_.isArray(source[key]) && !_.isArray(target[key])) {
                target[key] = [];
            }
            merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

},{}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue-router/dist/vue-router.js":[function(require,module,exports){
/*!
 * vue-router v0.7.11
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  global.VueRouter = factory();
}(this, function () { 'use strict';

  var babelHelpers = {};

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  function Target(path, matcher, delegate) {
    this.path = path;
    this.matcher = matcher;
    this.delegate = delegate;
  }

  Target.prototype = {
    to: function to(target, callback) {
      var delegate = this.delegate;

      if (delegate && delegate.willAddRoute) {
        target = delegate.willAddRoute(this.matcher.target, target);
      }

      this.matcher.add(this.path, target);

      if (callback) {
        if (callback.length === 0) {
          throw new Error("You must have an argument in the function passed to `to`");
        }
        this.matcher.addChild(this.path, target, callback, this.delegate);
      }
      return this;
    }
  };

  function Matcher(target) {
    this.routes = {};
    this.children = {};
    this.target = target;
  }

  Matcher.prototype = {
    add: function add(path, handler) {
      this.routes[path] = handler;
    },

    addChild: function addChild(path, target, callback, delegate) {
      var matcher = new Matcher(target);
      this.children[path] = matcher;

      var match = generateMatch(path, matcher, delegate);

      if (delegate && delegate.contextEntered) {
        delegate.contextEntered(target, match);
      }

      callback(match);
    }
  };

  function generateMatch(startingPath, matcher, delegate) {
    return function (path, nestedCallback) {
      var fullPath = startingPath + path;

      if (nestedCallback) {
        nestedCallback(generateMatch(fullPath, matcher, delegate));
      } else {
        return new Target(startingPath + path, matcher, delegate);
      }
    };
  }

  function addRoute(routeArray, path, handler) {
    var len = 0;
    for (var i = 0, l = routeArray.length; i < l; i++) {
      len += routeArray[i].path.length;
    }

    path = path.substr(len);
    var route = { path: path, handler: handler };
    routeArray.push(route);
  }

  function eachRoute(baseRoute, matcher, callback, binding) {
    var routes = matcher.routes;

    for (var path in routes) {
      if (routes.hasOwnProperty(path)) {
        var routeArray = baseRoute.slice();
        addRoute(routeArray, path, routes[path]);

        if (matcher.children[path]) {
          eachRoute(routeArray, matcher.children[path], callback, binding);
        } else {
          callback.call(binding, routeArray);
        }
      }
    }
  }

  function map (callback, addRouteCallback) {
    var matcher = new Matcher();

    callback(generateMatch("", matcher, this.delegate));

    eachRoute([], matcher, function (route) {
      if (addRouteCallback) {
        addRouteCallback(this, route);
      } else {
        this.add(route);
      }
    }, this);
  }

  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

  function isArray(test) {
    return Object.prototype.toString.call(test) === "[object Array]";
  }

  // A Segment represents a segment in the original route description.
  // Each Segment type provides an `eachChar` and `regex` method.
  //
  // The `eachChar` method invokes the callback with one or more character
  // specifications. A character specification consumes one or more input
  // characters.
  //
  // The `regex` method returns a regex fragment for the segment. If the
  // segment is a dynamic of star segment, the regex fragment also includes
  // a capture.
  //
  // A character specification contains:
  //
  // * `validChars`: a String with a list of all valid characters, or
  // * `invalidChars`: a String with a list of all invalid characters
  // * `repeat`: true if the character specification can repeat

  function StaticSegment(string) {
    this.string = string;
  }
  StaticSegment.prototype = {
    eachChar: function eachChar(callback) {
      var string = this.string,
          ch;

      for (var i = 0, l = string.length; i < l; i++) {
        ch = string.charAt(i);
        callback({ validChars: ch });
      }
    },

    regex: function regex() {
      return this.string.replace(escapeRegex, '\\$1');
    },

    generate: function generate() {
      return this.string;
    }
  };

  function DynamicSegment(name) {
    this.name = name;
  }
  DynamicSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "/", repeat: true });
    },

    regex: function regex() {
      return "([^/]+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function StarSegment(name) {
    this.name = name;
  }
  StarSegment.prototype = {
    eachChar: function eachChar(callback) {
      callback({ invalidChars: "", repeat: true });
    },

    regex: function regex() {
      return "(.+)";
    },

    generate: function generate(params) {
      var val = params[this.name];
      return val == null ? ":" + this.name : val;
    }
  };

  function EpsilonSegment() {}
  EpsilonSegment.prototype = {
    eachChar: function eachChar() {},
    regex: function regex() {
      return "";
    },
    generate: function generate() {
      return "";
    }
  };

  function parse(route, names, specificity) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (route.charAt(0) === "/") {
      route = route.substr(1);
    }

    var segments = route.split("/"),
        results = [];

    // A routes has specificity determined by the order that its different segments
    // appear in. This system mirrors how the magnitude of numbers written as strings
    // works.
    // Consider a number written as: "abc". An example would be "200". Any other number written
    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
    // leading symbol, "1".
    // The rule is that symbols to the left carry more weight than symbols to the right
    // when a number is written out as a string. In the above strings, the leading digit
    // represents how many 100's are in the number, and it carries more weight than the middle
    // number which represents how many 10's are in the number.
    // This system of number magnitude works well for route specificity, too. A route written as
    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
    // `x`, irrespective of the other parts.
    // Because of this similarity, we assign each type of segment a number value written as a
    // string. We can find the specificity of compound routes by concatenating these strings
    // together, from left to right. After we have looped through all of the segments,
    // we convert the string to a number.
    specificity.val = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i],
          match;

      if (match = segment.match(/^:([^\/]+)$/)) {
        results.push(new DynamicSegment(match[1]));
        names.push(match[1]);
        specificity.val += '3';
      } else if (match = segment.match(/^\*([^\/]+)$/)) {
        results.push(new StarSegment(match[1]));
        specificity.val += '2';
        names.push(match[1]);
      } else if (segment === "") {
        results.push(new EpsilonSegment());
        specificity.val += '1';
      } else {
        results.push(new StaticSegment(segment));
        specificity.val += '4';
      }
    }

    specificity.val = +specificity.val;

    return results;
  }

  // A State has a character specification and (`charSpec`) and a list of possible
  // subsequent states (`nextStates`).
  //
  // If a State is an accepting state, it will also have several additional
  // properties:
  //
  // * `regex`: A regular expression that is used to extract parameters from paths
  //   that reached this accepting state.
  // * `handlers`: Information on how to convert the list of captures into calls
  //   to registered handlers with the specified parameters
  // * `types`: How many static, dynamic or star segments in this route. Used to
  //   decide which route to use if multiple registered routes match a path.
  //
  // Currently, State is implemented naively by looping over `nextStates` and
  // comparing a character specification against a character. A more efficient
  // implementation would use a hash of keys pointing at one or more next states.

  function State(charSpec) {
    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype = {
    get: function get(charSpec) {
      var nextStates = this.nextStates;

      for (var i = 0, l = nextStates.length; i < l; i++) {
        var child = nextStates[i];

        var isEqual = child.charSpec.validChars === charSpec.validChars;
        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

        if (isEqual) {
          return child;
        }
      }
    },

    put: function put(charSpec) {
      var state;

      // If the character specification already exists in a child of the current
      // state, just return that state.
      if (state = this.get(charSpec)) {
        return state;
      }

      // Make a new state for the character spec
      state = new State(charSpec);

      // Insert the new state as a child of the current state
      this.nextStates.push(state);

      // If this character specification repeats, insert the new state as a child
      // of itself. Note that this will not trigger an infinite loop because each
      // transition during recognition consumes a character.
      if (charSpec.repeat) {
        state.nextStates.push(state);
      }

      // Return the new state
      return state;
    },

    // Find a list of child states matching the next character
    match: function match(ch) {
      // DEBUG "Processing `" + ch + "`:"
      var nextStates = this.nextStates,
          child,
          charSpec,
          chars;

      // DEBUG "  " + debugState(this)
      var returned = [];

      for (var i = 0, l = nextStates.length; i < l; i++) {
        child = nextStates[i];

        charSpec = child.charSpec;

        if (typeof (chars = charSpec.validChars) !== 'undefined') {
          if (chars.indexOf(ch) !== -1) {
            returned.push(child);
          }
        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
          if (chars.indexOf(ch) === -1) {
            returned.push(child);
          }
        }
      }

      return returned;
    }

    /** IF DEBUG
    , debug: function() {
      var charSpec = this.charSpec,
          debug = "[",
          chars = charSpec.validChars || charSpec.invalidChars;
       if (charSpec.invalidChars) { debug += "^"; }
      debug += chars;
      debug += "]";
       if (charSpec.repeat) { debug += "+"; }
       return debug;
    }
    END IF **/
  };

  /** IF DEBUG
  function debug(log) {
    console.log(log);
  }

  function debugState(state) {
    return state.nextStates.map(function(n) {
      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
    }).join(", ")
  }
  END IF **/

  // Sort the routes by specificity
  function sortSolutions(states) {
    return states.sort(function (a, b) {
      return b.specificity.val - a.specificity.val;
    });
  }

  function recognizeChar(states, ch) {
    var nextStates = [];

    for (var i = 0, l = states.length; i < l; i++) {
      var state = states[i];

      nextStates = nextStates.concat(state.match(ch));
    }

    return nextStates;
  }

  var oCreate = Object.create || function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };

  function RecognizeResults(queryParams) {
    this.queryParams = queryParams || {};
  }
  RecognizeResults.prototype = oCreate({
    splice: Array.prototype.splice,
    slice: Array.prototype.slice,
    push: Array.prototype.push,
    length: 0,
    queryParams: null
  });

  function findHandler(state, path, queryParams) {
    var handlers = state.handlers,
        regex = state.regex;
    var captures = path.match(regex),
        currentCapture = 1;
    var result = new RecognizeResults(queryParams);

    for (var i = 0, l = handlers.length; i < l; i++) {
      var handler = handlers[i],
          names = handler.names,
          params = {};

      for (var j = 0, m = names.length; j < m; j++) {
        params[names[j]] = captures[currentCapture++];
      }

      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
    }

    return result;
  }

  function addSegment(currentState, segment) {
    segment.eachChar(function (ch) {
      var state;

      currentState = currentState.put(ch);
    });

    return currentState;
  }

  function decodeQueryParamPart(part) {
    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
    part = part.replace(/\+/gm, '%20');
    return decodeURIComponent(part);
  }

  // The main interface

  var RouteRecognizer = function RouteRecognizer() {
    this.rootState = new State();
    this.names = {};
  };

  RouteRecognizer.prototype = {
    add: function add(routes, options) {
      var currentState = this.rootState,
          regex = "^",
          specificity = {},
          handlers = [],
          allSegments = [],
          name;

      var isEmpty = true;

      for (var i = 0, l = routes.length; i < l; i++) {
        var route = routes[i],
            names = [];

        var segments = parse(route.path, names, specificity);

        allSegments = allSegments.concat(segments);

        for (var j = 0, m = segments.length; j < m; j++) {
          var segment = segments[j];

          if (segment instanceof EpsilonSegment) {
            continue;
          }

          isEmpty = false;

          // Add a "/" for the new segment
          currentState = currentState.put({ validChars: "/" });
          regex += "/";

          // Add a representation of the segment to the NFA and regex
          currentState = addSegment(currentState, segment);
          regex += segment.regex();
        }

        var handler = { handler: route.handler, names: names };
        handlers.push(handler);
      }

      if (isEmpty) {
        currentState = currentState.put({ validChars: "/" });
        regex += "/";
      }

      currentState.handlers = handlers;
      currentState.regex = new RegExp(regex + "$");
      currentState.specificity = specificity;

      if (name = options && options.as) {
        this.names[name] = {
          segments: allSegments,
          handlers: handlers
        };
      }
    },

    handlersFor: function handlersFor(name) {
      var route = this.names[name],
          result = [];
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      for (var i = 0, l = route.handlers.length; i < l; i++) {
        result.push(route.handlers[i]);
      }

      return result;
    },

    hasRoute: function hasRoute(name) {
      return !!this.names[name];
    },

    generate: function generate(name, params) {
      var route = this.names[name],
          output = "";
      if (!route) {
        throw new Error("There is no route named " + name);
      }

      var segments = route.segments;

      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i];

        if (segment instanceof EpsilonSegment) {
          continue;
        }

        output += "/";
        output += segment.generate(params);
      }

      if (output.charAt(0) !== '/') {
        output = '/' + output;
      }

      if (params && params.queryParams) {
        output += this.generateQueryString(params.queryParams);
      }

      return output;
    },

    generateQueryString: function generateQueryString(params) {
      var pairs = [];
      var keys = [];
      for (var key in params) {
        if (params.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
      keys.sort();
      for (var i = 0, len = keys.length; i < len; i++) {
        key = keys[i];
        var value = params[key];
        if (value == null) {
          continue;
        }
        var pair = encodeURIComponent(key);
        if (isArray(value)) {
          for (var j = 0, l = value.length; j < l; j++) {
            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
            pairs.push(arrayPair);
          }
        } else {
          pair += "=" + encodeURIComponent(value);
          pairs.push(pair);
        }
      }

      if (pairs.length === 0) {
        return '';
      }

      return "?" + pairs.join("&");
    },

    parseQueryString: function parseQueryString(queryString) {
      var pairs = queryString.split("&"),
          queryParams = {};
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('='),
            key = decodeQueryParamPart(pair[0]),
            keyLength = key.length,
            isArray = false,
            value;
        if (pair.length === 1) {
          value = 'true';
        } else {
          //Handle arrays
          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
            isArray = true;
            key = key.slice(0, keyLength - 2);
            if (!queryParams[key]) {
              queryParams[key] = [];
            }
          }
          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
        }
        if (isArray) {
          queryParams[key].push(value);
        } else {
          queryParams[key] = value;
        }
      }
      return queryParams;
    },

    recognize: function recognize(path) {
      var states = [this.rootState],
          pathLen,
          i,
          l,
          queryStart,
          queryParams = {},
          isSlashDropped = false;

      queryStart = path.indexOf('?');
      if (queryStart !== -1) {
        var queryString = path.substr(queryStart + 1, path.length);
        path = path.substr(0, queryStart);
        queryParams = this.parseQueryString(queryString);
      }

      path = decodeURI(path);

      // DEBUG GROUP path

      if (path.charAt(0) !== "/") {
        path = "/" + path;
      }

      pathLen = path.length;
      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
        path = path.substr(0, pathLen - 1);
        isSlashDropped = true;
      }

      for (i = 0, l = path.length; i < l; i++) {
        states = recognizeChar(states, path.charAt(i));
        if (!states.length) {
          break;
        }
      }

      // END DEBUG GROUP

      var solutions = [];
      for (i = 0, l = states.length; i < l; i++) {
        if (states[i].handlers) {
          solutions.push(states[i]);
        }
      }

      states = sortSolutions(solutions);

      var state = solutions[0];

      if (state && state.handlers) {
        // if a trailing slash was dropped and a star segment is the last segment
        // specified, put the trailing slash back
        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
          path = path + "/";
        }
        return findHandler(state, path, queryParams);
      }
    }
  };

  RouteRecognizer.prototype.map = map;

  RouteRecognizer.VERSION = '0.1.9';

  var genQuery = RouteRecognizer.prototype.generateQueryString;

  // export default for holding the Vue reference
  var exports$1 = {};
  /**
   * Warn stuff.
   *
   * @param {String} msg
   */

  function warn(msg) {
    /* istanbul ignore next */
    if (window.console) {
      console.warn('[vue-router] ' + msg);
      if (!exports$1.Vue || exports$1.Vue.config.debug) {
        console.warn(new Error('warning stack trace:').stack);
      }
    }
  }

  /**
   * Resolve a relative path.
   *
   * @param {String} base
   * @param {String} relative
   * @param {Boolean} append
   * @return {String}
   */

  function resolvePath(base, relative, append) {
    var query = base.match(/(\?.*)$/);
    if (query) {
      query = query[1];
      base = base.slice(0, -query.length);
    }
    // a query!
    if (relative.charAt(0) === '?') {
      return base + relative;
    }
    var stack = base.split('/');
    // remove trailing segment if:
    // - not appending
    // - appending to trailing slash (last segment is empty)
    if (!append || !stack[stack.length - 1]) {
      stack.pop();
    }
    // resolve relative path
    var segments = relative.replace(/^\//, '').split('/');
    for (var i = 0; i < segments.length; i++) {
      var segment = segments[i];
      if (segment === '.') {
        continue;
      } else if (segment === '..') {
        stack.pop();
      } else {
        stack.push(segment);
      }
    }
    // ensure leading slash
    if (stack[0] !== '') {
      stack.unshift('');
    }
    return stack.join('/');
  }

  /**
   * Forgiving check for a promise
   *
   * @param {Object} p
   * @return {Boolean}
   */

  function isPromise(p) {
    return p && typeof p.then === 'function';
  }

  /**
   * Retrive a route config field from a component instance
   * OR a component contructor.
   *
   * @param {Function|Vue} component
   * @param {String} name
   * @return {*}
   */

  function getRouteConfig(component, name) {
    var options = component && (component.$options || component.options);
    return options && options.route && options.route[name];
  }

  /**
   * Resolve an async component factory. Have to do a dirty
   * mock here because of Vue core's internal API depends on
   * an ID check.
   *
   * @param {Object} handler
   * @param {Function} cb
   */

  var resolver = undefined;

  function resolveAsyncComponent(handler, cb) {
    if (!resolver) {
      resolver = {
        resolve: exports$1.Vue.prototype._resolveComponent,
        $options: {
          components: {
            _: handler.component
          }
        }
      };
    } else {
      resolver.$options.components._ = handler.component;
    }
    resolver.resolve('_', function (Component) {
      handler.component = Component;
      cb(Component);
    });
  }

  /**
   * Map the dynamic segments in a path to params.
   *
   * @param {String} path
   * @param {Object} params
   * @param {Object} query
   */

  function mapParams(path, params, query) {
    if (params === undefined) params = {};

    path = path.replace(/:([^\/]+)/g, function (_, key) {
      var val = params[key];
      /* istanbul ignore if */
      if (!val) {
        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
      }
      return val || '';
    });
    if (query) {
      path += genQuery(query);
    }
    return path;
  }

  var hashRE = /#.*$/;

  var HTML5History = (function () {
    function HTML5History(_ref) {
      var root = _ref.root;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HTML5History);

      if (root) {
        // make sure there's the starting slash
        if (root.charAt(0) !== '/') {
          root = '/' + root;
        }
        // remove trailing slash
        this.root = root.replace(/\/$/, '');
        this.rootRE = new RegExp('^\\' + this.root);
      } else {
        this.root = null;
      }
      this.onChange = onChange;
      // check base tag
      var baseEl = document.querySelector('base');
      this.base = baseEl && baseEl.getAttribute('href');
    }

    HTML5History.prototype.start = function start() {
      var _this = this;

      this.listener = function (e) {
        var url = decodeURI(location.pathname + location.search);
        if (_this.root) {
          url = url.replace(_this.rootRE, '');
        }
        _this.onChange(url, e && e.state, location.hash);
      };
      window.addEventListener('popstate', this.listener);
      this.listener();
    };

    HTML5History.prototype.stop = function stop() {
      window.removeEventListener('popstate', this.listener);
    };

    HTML5History.prototype.go = function go(path, replace, append) {
      var url = this.formatPath(path, append);
      if (replace) {
        history.replaceState({}, '', url);
      } else {
        // record scroll position by replacing current state
        history.replaceState({
          pos: {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        }, '', location.href);
        // then push new state
        history.pushState({}, '', url);
      }
      var hashMatch = path.match(hashRE);
      var hash = hashMatch && hashMatch[0];
      path = url
      // strip hash so it doesn't mess up params
      .replace(hashRE, '')
      // remove root before matching
      .replace(this.rootRE, '');
      this.onChange(path, null, hash);
    };

    HTML5History.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/'
      // absolute path
      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
    };

    return HTML5History;
  })();

  var HashHistory = (function () {
    function HashHistory(_ref) {
      var hashbang = _ref.hashbang;
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, HashHistory);

      this.hashbang = hashbang;
      this.onChange = onChange;
    }

    HashHistory.prototype.start = function start() {
      var self = this;
      this.listener = function () {
        var path = location.hash;
        var raw = path.replace(/^#!?/, '');
        // always
        if (raw.charAt(0) !== '/') {
          raw = '/' + raw;
        }
        var formattedPath = self.formatPath(raw);
        if (formattedPath !== path) {
          location.replace(formattedPath);
          return;
        }
        // determine query
        // note it's possible to have queries in both the actual URL
        // and the hash fragment itself.
        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
      };
      window.addEventListener('hashchange', this.listener);
      this.listener();
    };

    HashHistory.prototype.stop = function stop() {
      window.removeEventListener('hashchange', this.listener);
    };

    HashHistory.prototype.go = function go(path, replace, append) {
      path = this.formatPath(path, append);
      if (replace) {
        location.replace(path);
      } else {
        location.hash = path;
      }
    };

    HashHistory.prototype.formatPath = function formatPath(path, append) {
      var isAbsoloute = path.charAt(0) === '/';
      var prefix = '#' + (this.hashbang ? '!' : '');
      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
    };

    return HashHistory;
  })();

  var AbstractHistory = (function () {
    function AbstractHistory(_ref) {
      var onChange = _ref.onChange;
      babelHelpers.classCallCheck(this, AbstractHistory);

      this.onChange = onChange;
      this.currentPath = '/';
    }

    AbstractHistory.prototype.start = function start() {
      this.onChange('/');
    };

    AbstractHistory.prototype.stop = function stop() {
      // noop
    };

    AbstractHistory.prototype.go = function go(path, replace, append) {
      path = this.currentPath = this.formatPath(path, append);
      this.onChange(path);
    };

    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
    };

    return AbstractHistory;
  })();

  /**
   * Determine the reusability of an existing router view.
   *
   * @param {Directive} view
   * @param {Object} handler
   * @param {Transition} transition
   */

  function canReuse(view, handler, transition) {
    var component = view.childVM;
    if (!component || !handler) {
      return false;
    }
    // important: check view.Component here because it may
    // have been changed in activate hook
    if (view.Component !== handler.component) {
      return false;
    }
    var canReuseFn = getRouteConfig(component, 'canReuse');
    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
      to: transition.to,
      from: transition.from
    }) : true; // defaults to true
  }

  /**
   * Check if a component can deactivate.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function canDeactivate(view, transition, next) {
    var fromComponent = view.childVM;
    var hook = getRouteConfig(fromComponent, 'canDeactivate');
    if (!hook) {
      next();
    } else {
      transition.callHook(hook, fromComponent, next, {
        expectBoolean: true
      });
    }
  }

  /**
   * Check if a component can activate.
   *
   * @param {Object} handler
   * @param {Transition} transition
   * @param {Function} next
   */

  function canActivate(handler, transition, next) {
    resolveAsyncComponent(handler, function (Component) {
      // have to check due to async-ness
      if (transition.aborted) {
        return;
      }
      // determine if this component can be activated
      var hook = getRouteConfig(Component, 'canActivate');
      if (!hook) {
        next();
      } else {
        transition.callHook(hook, null, next, {
          expectBoolean: true
        });
      }
    });
  }

  /**
   * Call deactivate hooks for existing router-views.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Function} next
   */

  function deactivate(view, transition, next) {
    var component = view.childVM;
    var hook = getRouteConfig(component, 'deactivate');
    if (!hook) {
      next();
    } else {
      transition.callHooks(hook, component, next);
    }
  }

  /**
   * Activate / switch component for a router-view.
   *
   * @param {Directive} view
   * @param {Transition} transition
   * @param {Number} depth
   * @param {Function} [cb]
   */

  function activate(view, transition, depth, cb, reuse) {
    var handler = transition.activateQueue[depth];
    if (!handler) {
      saveChildView(view);
      if (view._bound) {
        view.setComponent(null);
      }
      cb && cb();
      return;
    }

    var Component = view.Component = handler.component;
    var activateHook = getRouteConfig(Component, 'activate');
    var dataHook = getRouteConfig(Component, 'data');
    var waitForData = getRouteConfig(Component, 'waitForData');

    view.depth = depth;
    view.activated = false;

    var component = undefined;
    var loading = !!(dataHook && !waitForData);

    // "reuse" is a flag passed down when the parent view is
    // either reused via keep-alive or as a child of a kept-alive view.
    // of course we can only reuse if the current kept-alive instance
    // is of the correct type.
    reuse = reuse && view.childVM && view.childVM.constructor === Component;

    if (reuse) {
      // just reuse
      component = view.childVM;
      component.$loadingRouteData = loading;
    } else {
      saveChildView(view);

      // unbuild current component. this step also destroys
      // and removes all nested child views.
      view.unbuild(true);

      // build the new component. this will also create the
      // direct child view of the current one. it will register
      // itself as view.childView.
      component = view.build({
        _meta: {
          $loadingRouteData: loading
        },
        created: function created() {
          this._routerView = view;
        }
      });

      // handle keep-alive.
      // when a kept-alive child vm is restored, we need to
      // add its cached child views into the router's view list,
      // and also properly update current view's child view.
      if (view.keepAlive) {
        component.$loadingRouteData = loading;
        var cachedChildView = component._keepAliveRouterView;
        if (cachedChildView) {
          view.childView = cachedChildView;
          component._keepAliveRouterView = null;
        }
      }
    }

    // cleanup the component in case the transition is aborted
    // before the component is ever inserted.
    var cleanup = function cleanup() {
      component.$destroy();
    };

    // actually insert the component and trigger transition
    var insert = function insert() {
      if (reuse) {
        cb && cb();
        return;
      }
      var router = transition.router;
      if (router._rendered || router._transitionOnLoad) {
        view.transition(component);
      } else {
        // no transition on first render, manual transition
        /* istanbul ignore if */
        if (view.setCurrent) {
          // 0.12 compat
          view.setCurrent(component);
        } else {
          // 1.0
          view.childVM = component;
        }
        component.$before(view.anchor, null, false);
      }
      cb && cb();
    };

    var afterData = function afterData() {
      // activate the child view
      if (view.childView) {
        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
      }
      insert();
    };

    // called after activation hook is resolved
    var afterActivate = function afterActivate() {
      view.activated = true;
      if (dataHook && waitForData) {
        // wait until data loaded to insert
        loadData(component, transition, dataHook, afterData, cleanup);
      } else {
        // load data and insert at the same time
        if (dataHook) {
          loadData(component, transition, dataHook);
        }
        afterData();
      }
    };

    if (activateHook) {
      transition.callHooks(activateHook, component, afterActivate, {
        cleanup: cleanup,
        postActivate: true
      });
    } else {
      afterActivate();
    }
  }

  /**
   * Reuse a view, just reload data if necessary.
   *
   * @param {Directive} view
   * @param {Transition} transition
   */

  function reuse(view, transition) {
    var component = view.childVM;
    var dataHook = getRouteConfig(component, 'data');
    if (dataHook) {
      loadData(component, transition, dataHook);
    }
  }

  /**
   * Asynchronously load and apply data to component.
   *
   * @param {Vue} component
   * @param {Transition} transition
   * @param {Function} hook
   * @param {Function} cb
   * @param {Function} cleanup
   */

  function loadData(component, transition, hook, cb, cleanup) {
    component.$loadingRouteData = true;
    transition.callHooks(hook, component, function () {
      component.$loadingRouteData = false;
      component.$emit('route-data-loaded', component);
      cb && cb();
    }, {
      cleanup: cleanup,
      postActivate: true,
      processData: function processData(data) {
        // handle promise sugar syntax
        var promises = [];
        if (isPlainObject(data)) {
          Object.keys(data).forEach(function (key) {
            var val = data[key];
            if (isPromise(val)) {
              promises.push(val.then(function (resolvedVal) {
                component.$set(key, resolvedVal);
              }));
            } else {
              component.$set(key, val);
            }
          });
        }
        if (promises.length) {
          return promises[0].constructor.all(promises);
        }
      }
    });
  }

  /**
   * Save the child view for a kept-alive view so that
   * we can restore it when it is switched back to.
   *
   * @param {Directive} view
   */

  function saveChildView(view) {
    if (view.keepAlive && view.childVM && view.childView) {
      view.childVM._keepAliveRouterView = view.childView;
    }
    view.childView = null;
  }

  /**
   * Check plain object.
   *
   * @param {*} val
   */

  function isPlainObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  /**
   * A RouteTransition object manages the pipeline of a
   * router-view switching process. This is also the object
   * passed into user route hooks.
   *
   * @param {Router} router
   * @param {Route} to
   * @param {Route} from
   */

  var RouteTransition = (function () {
    function RouteTransition(router, to, from) {
      babelHelpers.classCallCheck(this, RouteTransition);

      this.router = router;
      this.to = to;
      this.from = from;
      this.next = null;
      this.aborted = false;
      this.done = false;
    }

    /**
     * Abort current transition and return to previous location.
     */

    RouteTransition.prototype.abort = function abort() {
      if (!this.aborted) {
        this.aborted = true;
        // if the root path throws an error during validation
        // on initial load, it gets caught in an infinite loop.
        var abortingOnLoad = !this.from.path && this.to.path === '/';
        if (!abortingOnLoad) {
          this.router.replace(this.from.path || '/');
        }
      }
    };

    /**
     * Abort current transition and redirect to a new location.
     *
     * @param {String} path
     */

    RouteTransition.prototype.redirect = function redirect(path) {
      if (!this.aborted) {
        this.aborted = true;
        if (typeof path === 'string') {
          path = mapParams(path, this.to.params, this.to.query);
        } else {
          path.params = path.params || this.to.params;
          path.query = path.query || this.to.query;
        }
        this.router.replace(path);
      }
    };

    /**
     * A router view transition's pipeline can be described as
     * follows, assuming we are transitioning from an existing
     * <router-view> chain [Component A, Component B] to a new
     * chain [Component A, Component C]:
     *
     *  A    A
     *  | => |
     *  B    C
     *
     * 1. Reusablity phase:
     *   -> canReuse(A, A)
     *   -> canReuse(B, C)
     *   -> determine new queues:
     *      - deactivation: [B]
     *      - activation: [C]
     *
     * 2. Validation phase:
     *   -> canDeactivate(B)
     *   -> canActivate(C)
     *
     * 3. Activation phase:
     *   -> deactivate(B)
     *   -> activate(C)
     *
     * Each of these steps can be asynchronous, and any
     * step can potentially abort the transition.
     *
     * @param {Function} cb
     */

    RouteTransition.prototype.start = function start(cb) {
      var transition = this;

      // determine the queue of views to deactivate
      var deactivateQueue = [];
      var view = this.router._rootView;
      while (view) {
        deactivateQueue.unshift(view);
        view = view.childView;
      }
      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

      // determine the queue of route handlers to activate
      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
        return match.handler;
      });

      // 1. Reusability phase
      var i = undefined,
          reuseQueue = undefined;
      for (i = 0; i < reverseDeactivateQueue.length; i++) {
        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
          break;
        }
      }
      if (i > 0) {
        reuseQueue = reverseDeactivateQueue.slice(0, i);
        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
        activateQueue = activateQueue.slice(i);
      }

      // 2. Validation phase
      transition.runQueue(deactivateQueue, canDeactivate, function () {
        transition.runQueue(activateQueue, canActivate, function () {
          transition.runQueue(deactivateQueue, deactivate, function () {
            // 3. Activation phase

            // Update router current route
            transition.router._onTransitionValidated(transition);

            // trigger reuse for all reused views
            reuseQueue && reuseQueue.forEach(function (view) {
              return reuse(view, transition);
            });

            // the root of the chain that needs to be replaced
            // is the top-most non-reusable view.
            if (deactivateQueue.length) {
              var _view = deactivateQueue[deactivateQueue.length - 1];
              var depth = reuseQueue ? reuseQueue.length : 0;
              activate(_view, transition, depth, cb);
            } else {
              cb();
            }
          });
        });
      });
    };

    /**
     * Asynchronously and sequentially apply a function to a
     * queue.
     *
     * @param {Array} queue
     * @param {Function} fn
     * @param {Function} cb
     */

    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
      var transition = this;
      step(0);
      function step(index) {
        if (index >= queue.length) {
          cb();
        } else {
          fn(queue[index], transition, function () {
            step(index + 1);
          });
        }
      }
    };

    /**
     * Call a user provided route transition hook and handle
     * the response (e.g. if the user returns a promise).
     *
     * If the user neither expects an argument nor returns a
     * promise, the hook is assumed to be synchronous.
     *
     * @param {Function} hook
     * @param {*} [context]
     * @param {Function} [cb]
     * @param {Object} [options]
     *                 - {Boolean} expectBoolean
     *                 - {Boolean} postActive
     *                 - {Function} processData
     *                 - {Function} cleanup
     */

    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

      var _ref$expectBoolean = _ref.expectBoolean;
      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
      var _ref$postActivate = _ref.postActivate;
      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
      var processData = _ref.processData;
      var cleanup = _ref.cleanup;

      var transition = this;
      var nextCalled = false;

      // abort the transition
      var abort = function abort() {
        cleanup && cleanup();
        transition.abort();
      };

      // handle errors
      var onError = function onError(err) {
        postActivate ? next() : abort();
        if (err && !transition.router._suppress) {
          warn('Uncaught error during transition: ');
          throw err instanceof Error ? err : new Error(err);
        }
      };

      // since promise swallows errors, we have to
      // throw it in the next tick...
      var onPromiseError = function onPromiseError(err) {
        try {
          onError(err);
        } catch (e) {
          setTimeout(function () {
            throw e;
          }, 0);
        }
      };

      // advance the transition to the next step
      var next = function next() {
        if (nextCalled) {
          warn('transition.next() should be called only once.');
          return;
        }
        nextCalled = true;
        if (transition.aborted) {
          cleanup && cleanup();
          return;
        }
        cb && cb();
      };

      var nextWithBoolean = function nextWithBoolean(res) {
        if (typeof res === 'boolean') {
          res ? next() : abort();
        } else if (isPromise(res)) {
          res.then(function (ok) {
            ok ? next() : abort();
          }, onPromiseError);
        } else if (!hook.length) {
          next();
        }
      };

      var nextWithData = function nextWithData(data) {
        var res = undefined;
        try {
          res = processData(data);
        } catch (err) {
          return onError(err);
        }
        if (isPromise(res)) {
          res.then(next, onPromiseError);
        } else {
          next();
        }
      };

      // expose a clone of the transition object, so that each
      // hook gets a clean copy and prevent the user from
      // messing with the internals.
      var exposed = {
        to: transition.to,
        from: transition.from,
        abort: abort,
        next: processData ? nextWithData : next,
        redirect: function redirect() {
          transition.redirect.apply(transition, arguments);
        }
      };

      // actually call the hook
      var res = undefined;
      try {
        res = hook.call(context, exposed);
      } catch (err) {
        return onError(err);
      }

      if (expectBoolean) {
        // boolean hooks
        nextWithBoolean(res);
      } else if (isPromise(res)) {
        // promise
        if (processData) {
          res.then(nextWithData, onPromiseError);
        } else {
          res.then(next, onPromiseError);
        }
      } else if (processData && isPlainOjbect(res)) {
        // data promise sugar
        nextWithData(res);
      } else if (!hook.length) {
        next();
      }
    };

    /**
     * Call a single hook or an array of async hooks in series.
     *
     * @param {Array} hooks
     * @param {*} context
     * @param {Function} cb
     * @param {Object} [options]
     */

    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
      var _this = this;

      if (Array.isArray(hooks)) {
        this.runQueue(hooks, function (hook, _, next) {
          if (!_this.aborted) {
            _this.callHook(hook, context, next, options);
          }
        }, cb);
      } else {
        this.callHook(hooks, context, cb, options);
      }
    };

    return RouteTransition;
  })();

  function isPlainOjbect(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
  }

  function toArray(val) {
    return val ? Array.prototype.slice.call(val) : [];
  }

  var internalKeysRE = /^(component|subRoutes)$/;

  /**
   * Route Context Object
   *
   * @param {String} path
   * @param {Router} router
   */

  var Route = function Route(path, router) {
    var _this = this;

    babelHelpers.classCallCheck(this, Route);

    var matched = router._recognizer.recognize(path);
    if (matched) {
      // copy all custom fields from route configs
      [].forEach.call(matched, function (match) {
        for (var key in match.handler) {
          if (!internalKeysRE.test(key)) {
            _this[key] = match.handler[key];
          }
        }
      });
      // set query and params
      this.query = matched.queryParams;
      this.params = [].reduce.call(matched, function (prev, cur) {
        if (cur.params) {
          for (var key in cur.params) {
            prev[key] = cur.params[key];
          }
        }
        return prev;
      }, {});
    }
    // expose path and router
    this.path = path;
    this.router = router;
    // for internal use
    this.matched = matched || router._notFoundHandler;
    // Important: freeze self to prevent observation
    Object.freeze(this);
  };

  function applyOverride (Vue) {
    var _Vue$util = Vue.util;
    var extend = _Vue$util.extend;
    var isArray = _Vue$util.isArray;
    var defineReactive = _Vue$util.defineReactive;

    // override Vue's init and destroy process to keep track of router instances
    var init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      options = options || {};
      var root = options._parent || options.parent || this;
      var router = root.$router;
      var route = root.$route;
      if (router) {
        // expose router
        this.$router = router;
        router._children.push(this);
        /* istanbul ignore if */
        if (this._defineMeta) {
          // 0.12
          this._defineMeta('$route', route);
        } else {
          // 1.0
          defineReactive(this, '$route', route);
        }
      }
      init.call(this, options);
    };

    var destroy = Vue.prototype._destroy;
    Vue.prototype._destroy = function () {
      if (!this._isBeingDestroyed && this.$router) {
        this.$router._children.$remove(this);
      }
      destroy.apply(this, arguments);
    };

    // 1.0 only: enable route mixins
    var strats = Vue.config.optionMergeStrategies;
    var hooksToMergeRE = /^(data|activate|deactivate)$/;

    if (strats) {
      strats.route = function (parentVal, childVal) {
        if (!childVal) return parentVal;
        if (!parentVal) return childVal;
        var ret = {};
        extend(ret, parentVal);
        for (var key in childVal) {
          var a = ret[key];
          var b = childVal[key];
          // for data, activate and deactivate, we need to merge them into
          // arrays similar to lifecycle hooks.
          if (a && hooksToMergeRE.test(key)) {
            ret[key] = (isArray(a) ? a : [a]).concat(b);
          } else {
            ret[key] = b;
          }
        }
        return ret;
      };
    }
  }

  function View (Vue) {

    var _ = Vue.util;
    var componentDef =
    // 0.12
    Vue.directive('_component') ||
    // 1.0
    Vue.internalDirectives.component;
    // <router-view> extends the internal component directive
    var viewDef = _.extend({}, componentDef);

    // with some overrides
    _.extend(viewDef, {

      _isRouterView: true,

      bind: function bind() {
        var route = this.vm.$route;
        /* istanbul ignore if */
        if (!route) {
          warn('<router-view> can only be used inside a ' + 'router-enabled app.');
          return;
        }
        // force dynamic directive so v-component doesn't
        // attempt to build right now
        this._isDynamicLiteral = true;
        // finally, init by delegating to v-component
        componentDef.bind.call(this);

        // locate the parent view
        var parentView = undefined;
        var parent = this.vm;
        while (parent) {
          if (parent._routerView) {
            parentView = parent._routerView;
            break;
          }
          parent = parent.$parent;
        }
        if (parentView) {
          // register self as a child of the parent view,
          // instead of activating now. This is so that the
          // child's activate hook is called after the
          // parent's has resolved.
          this.parentView = parentView;
          parentView.childView = this;
        } else {
          // this is the root view!
          var router = route.router;
          router._rootView = this;
        }

        // handle late-rendered view
        // two possibilities:
        // 1. root view rendered after transition has been
        //    validated;
        // 2. child view rendered after parent view has been
        //    activated.
        var transition = route.router._currentTransition;
        if (!parentView && transition.done || parentView && parentView.activated) {
          var depth = parentView ? parentView.depth + 1 : 0;
          activate(this, transition, depth);
        }
      },

      unbind: function unbind() {
        if (this.parentView) {
          this.parentView.childView = null;
        }
        componentDef.unbind.call(this);
      }
    });

    Vue.elementDirective('router-view', viewDef);
  }

  var trailingSlashRE = /\/$/;
  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
  var queryStringRE = /\?.*$/;

  // install v-link, which provides navigation support for
  // HTML5 history mode
  function Link (Vue) {
    var _Vue$util = Vue.util;
    var _bind = _Vue$util.bind;
    var isObject = _Vue$util.isObject;
    var addClass = _Vue$util.addClass;
    var removeClass = _Vue$util.removeClass;

    Vue.directive('link-active', {
      priority: 1001,
      bind: function bind() {
        this.el.__v_link_active = true;
      }
    });

    Vue.directive('link', {
      priority: 1000,

      bind: function bind() {
        var vm = this.vm;
        /* istanbul ignore if */
        if (!vm.$route) {
          warn('v-link can only be used inside a router-enabled app.');
          return;
        }
        this.router = vm.$route.router;
        // update things when the route changes
        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
        // check if active classes should be applied to a different element
        this.activeEl = this.el;
        var parent = this.el.parentNode;
        while (parent) {
          if (parent.__v_link_active) {
            this.activeEl = parent;
            break;
          }
          parent = parent.parentNode;
        }
        // no need to handle click if link expects to be opened
        // in a new window/tab.
        /* istanbul ignore if */
        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
          return;
        }
        // handle click
        this.handler = _bind(this.onClick, this);
        this.el.addEventListener('click', this.handler);
      },

      update: function update(target) {
        this.target = target;
        if (isObject(target)) {
          this.append = target.append;
          this.exact = target.exact;
          this.prevActiveClass = this.activeClass;
          this.activeClass = target.activeClass;
        }
        this.onRouteUpdate(this.vm.$route);
      },

      onClick: function onClick(e) {
        // don't redirect with control keys
        /* istanbul ignore if */
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        // don't redirect when preventDefault called
        /* istanbul ignore if */
        if (e.defaultPrevented) return;
        // don't redirect on right click
        /* istanbul ignore if */
        if (e.button !== 0) return;

        var target = this.target;
        if (target) {
          // v-link with expression, just go
          e.preventDefault();
          this.router.go(target);
        } else {
          // no expression, delegate for an <a> inside
          var el = e.target;
          while (el.tagName !== 'A' && el !== this.el) {
            el = el.parentNode;
          }
          if (el.tagName === 'A' && sameOrigin(el)) {
            e.preventDefault();
            this.router.go({
              path: el.pathname,
              replace: target && target.replace,
              append: target && target.append
            });
          }
        }
      },

      onRouteUpdate: function onRouteUpdate(route) {
        // router._stringifyPath is dependent on current route
        // and needs to be called again whenver route changes.
        var newPath = this.router._stringifyPath(this.target);
        if (this.path !== newPath) {
          this.path = newPath;
          this.updateActiveMatch();
          this.updateHref();
        }
        this.updateClasses(route.path);
      },

      updateActiveMatch: function updateActiveMatch() {
        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
      },

      updateHref: function updateHref() {
        if (this.el.tagName !== 'A') {
          return;
        }
        var path = this.path;
        var router = this.router;
        var isAbsolute = path.charAt(0) === '/';
        // do not format non-hash relative paths
        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
        if (href) {
          this.el.href = href;
        } else {
          this.el.removeAttribute('href');
        }
      },

      updateClasses: function updateClasses(path) {
        var el = this.activeEl;
        var activeClass = this.activeClass || this.router._linkActiveClass;
        // clear old class
        if (this.prevActiveClass !== activeClass) {
          removeClass(el, this.prevActiveClass);
        }
        // remove query string before matching
        var dest = this.path.replace(queryStringRE, '');
        path = path.replace(queryStringRE, '');
        // add new class
        if (this.exact) {
          if (dest === path ||
          // also allow additional trailing slash
          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
            addClass(el, activeClass);
          } else {
            removeClass(el, activeClass);
          }
        } else {
          if (this.activeRE && this.activeRE.test(path)) {
            addClass(el, activeClass);
          } else {
            removeClass(el, activeClass);
          }
        }
      },

      unbind: function unbind() {
        this.el.removeEventListener('click', this.handler);
        this.unwatch && this.unwatch();
      }
    });

    function sameOrigin(link) {
      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
    }
  }

  var historyBackends = {
    abstract: AbstractHistory,
    hash: HashHistory,
    html5: HTML5History
  };

  // late bind during install
  var Vue = undefined;

  /**
   * Router constructor
   *
   * @param {Object} [options]
   */

  var Router = (function () {
    function Router() {
      var _this = this;

      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref$hashbang = _ref.hashbang;
      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
      var _ref$abstract = _ref.abstract;
      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
      var _ref$history = _ref.history;
      var history = _ref$history === undefined ? false : _ref$history;
      var _ref$saveScrollPosition = _ref.saveScrollPosition;
      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
      var _ref$transitionOnLoad = _ref.transitionOnLoad;
      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
      var _ref$suppressTransitionError = _ref.suppressTransitionError;
      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
      var _ref$root = _ref.root;
      var root = _ref$root === undefined ? null : _ref$root;
      var _ref$linkActiveClass = _ref.linkActiveClass;
      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
      babelHelpers.classCallCheck(this, Router);

      /* istanbul ignore if */
      if (!Router.installed) {
        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
      }

      // Vue instances
      this.app = null;
      this._children = [];

      // route recognizer
      this._recognizer = new RouteRecognizer();
      this._guardRecognizer = new RouteRecognizer();

      // state
      this._started = false;
      this._startCb = null;
      this._currentRoute = {};
      this._currentTransition = null;
      this._previousTransition = null;
      this._notFoundHandler = null;
      this._notFoundRedirect = null;
      this._beforeEachHooks = [];
      this._afterEachHooks = [];

      // trigger transition on initial render?
      this._rendered = false;
      this._transitionOnLoad = transitionOnLoad;

      // history mode
      this._root = root;
      this._abstract = abstract;
      this._hashbang = hashbang;

      // check if HTML5 history is available
      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
      this._history = history && hasPushState;
      this._historyFallback = history && !hasPushState;

      // create history object
      var inBrowser = Vue.util.inBrowser;
      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

      var History = historyBackends[this.mode];
      this.history = new History({
        root: root,
        hashbang: this._hashbang,
        onChange: function onChange(path, state, anchor) {
          _this._match(path, state, anchor);
        }
      });

      // other options
      this._saveScrollPosition = saveScrollPosition;
      this._linkActiveClass = linkActiveClass;
      this._suppress = suppressTransitionError;
    }

    /**
     * Allow directly passing components to a route
     * definition.
     *
     * @param {String} path
     * @param {Object} handler
     */

    // API ===================================================

    /**
    * Register a map of top-level paths.
    *
    * @param {Object} map
    */

    Router.prototype.map = function map(_map) {
      for (var route in _map) {
        this.on(route, _map[route]);
      }
      return this;
    };

    /**
     * Register a single root-level path
     *
     * @param {String} rootPath
     * @param {Object} handler
     *                 - {String} component
     *                 - {Object} [subRoutes]
     *                 - {Boolean} [forceRefresh]
     *                 - {Function} [before]
     *                 - {Function} [after]
     */

    Router.prototype.on = function on(rootPath, handler) {
      if (rootPath === '*') {
        this._notFound(handler);
      } else {
        this._addRoute(rootPath, handler, []);
      }
      return this;
    };

    /**
     * Set redirects.
     *
     * @param {Object} map
     */

    Router.prototype.redirect = function redirect(map) {
      for (var path in map) {
        this._addRedirect(path, map[path]);
      }
      return this;
    };

    /**
     * Set aliases.
     *
     * @param {Object} map
     */

    Router.prototype.alias = function alias(map) {
      for (var path in map) {
        this._addAlias(path, map[path]);
      }
      return this;
    };

    /**
     * Set global before hook.
     *
     * @param {Function} fn
     */

    Router.prototype.beforeEach = function beforeEach(fn) {
      this._beforeEachHooks.push(fn);
      return this;
    };

    /**
     * Set global after hook.
     *
     * @param {Function} fn
     */

    Router.prototype.afterEach = function afterEach(fn) {
      this._afterEachHooks.push(fn);
      return this;
    };

    /**
     * Navigate to a given path.
     * The path can be an object describing a named path in
     * the format of { name: '...', params: {}, query: {}}
     * The path is assumed to be already decoded, and will
     * be resolved against root (if provided)
     *
     * @param {String|Object} path
     * @param {Boolean} [replace]
     */

    Router.prototype.go = function go(path) {
      var replace = false;
      var append = false;
      if (Vue.util.isObject(path)) {
        replace = path.replace;
        append = path.append;
      }
      path = this._stringifyPath(path);
      if (path) {
        this.history.go(path, replace, append);
      }
    };

    /**
     * Short hand for replacing current path
     *
     * @param {String} path
     */

    Router.prototype.replace = function replace(path) {
      if (typeof path === 'string') {
        path = { path: path };
      }
      path.replace = true;
      this.go(path);
    };

    /**
     * Start the router.
     *
     * @param {VueConstructor} App
     * @param {String|Element} container
     * @param {Function} [cb]
     */

    Router.prototype.start = function start(App, container, cb) {
      /* istanbul ignore if */
      if (this._started) {
        warn('already started.');
        return;
      }
      this._started = true;
      this._startCb = cb;
      if (!this.app) {
        /* istanbul ignore if */
        if (!App || !container) {
          throw new Error('Must start vue-router with a component and a ' + 'root container.');
        }
        /* istanbul ignore if */
        if (App instanceof Vue) {
          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
        }
        this._appContainer = container;
        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
        // give it a name for better debugging
        Ctor.options.name = Ctor.options.name || 'RouterApp';
      }

      // handle history fallback in browsers that do not
      // support HTML5 history API
      if (this._historyFallback) {
        var _location = window.location;
        var _history = new HTML5History({ root: this._root });
        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
        if (path && path !== '/') {
          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
          return;
        }
      }

      this.history.start();
    };

    /**
     * Stop listening to route changes.
     */

    Router.prototype.stop = function stop() {
      this.history.stop();
      this._started = false;
    };

    // Internal methods ======================================

    /**
    * Add a route containing a list of segments to the internal
    * route recognizer. Will be called recursively to add all
    * possible sub-routes.
    *
    * @param {String} path
    * @param {Object} handler
    * @param {Array} segments
    */

    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
      guardComponent(path, handler);
      handler.path = path;
      handler.fullPath = (segments.reduce(function (path, segment) {
        return path + segment.path;
      }, '') + path).replace('//', '/');
      segments.push({
        path: path,
        handler: handler
      });
      this._recognizer.add(segments, {
        as: handler.name
      });
      // add sub routes
      if (handler.subRoutes) {
        for (var subPath in handler.subRoutes) {
          // recursively walk all sub routes
          this._addRoute(subPath, handler.subRoutes[subPath],
          // pass a copy in recursion to avoid mutating
          // across branches
          segments.slice());
        }
      }
    };

    /**
     * Set the notFound route handler.
     *
     * @param {Object} handler
     */

    Router.prototype._notFound = function _notFound(handler) {
      guardComponent('*', handler);
      this._notFoundHandler = [{ handler: handler }];
    };

    /**
     * Add a redirect record.
     *
     * @param {String} path
     * @param {String} redirectPath
     */

    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
      if (path === '*') {
        this._notFoundRedirect = redirectPath;
      } else {
        this._addGuard(path, redirectPath, this.replace);
      }
    };

    /**
     * Add an alias record.
     *
     * @param {String} path
     * @param {String} aliasPath
     */

    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
      this._addGuard(path, aliasPath, this._match);
    };

    /**
     * Add a path guard.
     *
     * @param {String} path
     * @param {String} mappedPath
     * @param {Function} handler
     */

    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
      var _this2 = this;

      this._guardRecognizer.add([{
        path: path,
        handler: function handler(match, query) {
          var realPath = mapParams(mappedPath, match.params, query);
          _handler.call(_this2, realPath);
        }
      }]);
    };

    /**
     * Check if a path matches any redirect records.
     *
     * @param {String} path
     * @return {Boolean} - if true, will skip normal match.
     */

    Router.prototype._checkGuard = function _checkGuard(path) {
      var matched = this._guardRecognizer.recognize(path);
      if (matched) {
        matched[0].handler(matched[0], matched.queryParams);
        return true;
      } else if (this._notFoundRedirect) {
        matched = this._recognizer.recognize(path);
        if (!matched) {
          this.replace(this._notFoundRedirect);
          return true;
        }
      }
    };

    /**
     * Match a URL path and set the route context on vm,
     * triggering view updates.
     *
     * @param {String} path
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._match = function _match(path, state, anchor) {
      var _this3 = this;

      if (this._checkGuard(path)) {
        return;
      }

      var currentRoute = this._currentRoute;
      var currentTransition = this._currentTransition;

      if (currentTransition) {
        if (currentTransition.to.path === path) {
          // do nothing if we have an active transition going to the same path
          return;
        } else if (currentRoute.path === path) {
          // We are going to the same path, but we also have an ongoing but
          // not-yet-validated transition. Abort that transition and reset to
          // prev transition.
          currentTransition.aborted = true;
          this._currentTransition = this._prevTransition;
          return;
        } else {
          // going to a totally different path. abort ongoing transition.
          currentTransition.aborted = true;
        }
      }

      // construct new route and transition context
      var route = new Route(path, this);
      var transition = new RouteTransition(this, route, currentRoute);

      // current transition is updated right now.
      // however, current route will only be updated after the transition has
      // been validated.
      this._prevTransition = currentTransition;
      this._currentTransition = transition;

      if (!this.app) {
        (function () {
          // initial render
          var router = _this3;
          _this3.app = new _this3._appConstructor({
            el: _this3._appContainer,
            created: function created() {
              this.$router = router;
            },
            _meta: {
              $route: route
            }
          });
        })();
      }

      // check global before hook
      var beforeHooks = this._beforeEachHooks;
      var startTransition = function startTransition() {
        transition.start(function () {
          _this3._postTransition(route, state, anchor);
        });
      };

      if (beforeHooks.length) {
        transition.runQueue(beforeHooks, function (hook, _, next) {
          if (transition === _this3._currentTransition) {
            transition.callHook(hook, null, next, {
              expectBoolean: true
            });
          }
        }, startTransition);
      } else {
        startTransition();
      }

      if (!this._rendered && this._startCb) {
        this._startCb.call(null);
      }

      // HACK:
      // set rendered to true after the transition start, so
      // that components that are acitvated synchronously know
      // whether it is the initial render.
      this._rendered = true;
    };

    /**
     * Set current to the new transition.
     * This is called by the transition object when the
     * validation of a route has succeeded.
     *
     * @param {Transition} transition
     */

    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
      // set current route
      var route = this._currentRoute = transition.to;
      // update route context for all children
      if (this.app.$route !== route) {
        this.app.$route = route;
        this._children.forEach(function (child) {
          child.$route = route;
        });
      }
      // call global after hook
      if (this._afterEachHooks.length) {
        this._afterEachHooks.forEach(function (hook) {
          return hook.call(null, {
            to: transition.to,
            from: transition.from
          });
        });
      }
      this._currentTransition.done = true;
    };

    /**
     * Handle stuff after the transition.
     *
     * @param {Route} route
     * @param {Object} [state]
     * @param {String} [anchor]
     */

    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
      // handle scroll positions
      // saved scroll positions take priority
      // then we check if the path has an anchor
      var pos = state && state.pos;
      if (pos && this._saveScrollPosition) {
        Vue.nextTick(function () {
          window.scrollTo(pos.x, pos.y);
        });
      } else if (anchor) {
        Vue.nextTick(function () {
          var el = document.getElementById(anchor.slice(1));
          if (el) {
            window.scrollTo(window.scrollX, el.offsetTop);
          }
        });
      }
    };

    /**
     * Normalize named route object / string paths into
     * a string.
     *
     * @param {Object|String|Number} path
     * @return {String}
     */

    Router.prototype._stringifyPath = function _stringifyPath(path) {
      var fullPath = '';
      if (path && typeof path === 'object') {
        if (path.name) {
          var extend = Vue.util.extend;
          var currentParams = this._currentTransition && this._currentTransition.to.params;
          var targetParams = path.params || {};
          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
          if (path.query) {
            params.queryParams = path.query;
          }
          fullPath = this._recognizer.generate(path.name, params);
        } else if (path.path) {
          fullPath = path.path;
          if (path.query) {
            var query = this._recognizer.generateQueryString(path.query);
            if (fullPath.indexOf('?') > -1) {
              fullPath += '&' + query.slice(1);
            } else {
              fullPath += query;
            }
          }
        }
      } else {
        fullPath = path ? path + '' : '';
      }
      return encodeURI(fullPath);
    };

    return Router;
  })();

  function guardComponent(path, handler) {
    var comp = handler.component;
    if (Vue.util.isPlainObject(comp)) {
      comp = handler.component = Vue.extend(comp);
    }
    /* istanbul ignore if */
    if (typeof comp !== 'function') {
      handler.component = null;
      warn('invalid component for route "' + path + '".');
    }
  }

  /* Installation */

  Router.installed = false;

  /**
   * Installation interface.
   * Install the necessary directives.
   */

  Router.install = function (externalVue) {
    /* istanbul ignore if */
    if (Router.installed) {
      warn('already installed.');
      return;
    }
    Vue = externalVue;
    applyOverride(Vue);
    View(Vue);
    Link(Vue);
    exports$1.Vue = Vue;
    Router.installed = true;
  };

  // auto install
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Router);
  }

  return Router;

}));
},{}],"/Users/jbe/Documents/Projets/django_todo/frontend-src/node_modules/vue/dist/vue.common.js":[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v1.0.17
 * (c) 2016 Evan You
 * Released under the MIT License.
 */
'use strict';

function set(obj, key, val) {
  if (hasOwn(obj, key)) {
    obj[key] = val;
    return;
  }
  if (obj._isVue) {
    set(obj._data, key, val);
    return;
  }
  var ob = obj.__ob__;
  if (!ob) {
    obj[key] = val;
    return;
  }
  ob.convert(key, val);
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._proxy(key);
      vm._digest();
    }
  }
  return val;
}

/**
 * Delete a property and trigger change if necessary.
 *
 * @param {Object} obj
 * @param {String} key
 */

function del(obj, key) {
  if (!hasOwn(obj, key)) {
    return;
  }
  delete obj[key];
  var ob = obj.__ob__;
  if (!ob) {
    return;
  }
  ob.dep.notify();
  if (ob.vms) {
    var i = ob.vms.length;
    while (i--) {
      var vm = ob.vms[i];
      vm._unproxy(key);
      vm._digest();
    }
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check whether the object has the property.
 *
 * @param {Object} obj
 * @param {String} key
 * @return {Boolean}
 */

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

/**
 * Check if an expression is a literal value.
 *
 * @param {String} exp
 * @return {Boolean}
 */

var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

function isLiteral(exp) {
  return literalValueRE.test(exp);
}

/**
 * Check if a string starts with $ or _
 *
 * @param {String} str
 * @return {Boolean}
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}

/**
 * Guard text output, make sure undefined outputs
 * empty string
 *
 * @param {*} value
 * @return {String}
 */

function _toString(value) {
  return value == null ? '' : value.toString();
}

/**
 * Check and convert possible numeric strings to numbers
 * before setting back to data
 *
 * @param {*} value
 * @return {*|Number}
 */

function toNumber(value) {
  if (typeof value !== 'string') {
    return value;
  } else {
    var parsed = Number(value);
    return isNaN(parsed) ? value : parsed;
  }
}

/**
 * Convert string boolean literals into real booleans.
 *
 * @param {*} value
 * @return {*|Boolean}
 */

function toBoolean(value) {
  return value === 'true' ? true : value === 'false' ? false : value;
}

/**
 * Strip quotes from a string
 *
 * @param {String} str
 * @return {String | false}
 */

function stripQuotes(str) {
  var a = str.charCodeAt(0);
  var b = str.charCodeAt(str.length - 1);
  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
}

/**
 * Camelize a hyphen-delmited string.
 *
 * @param {String} str
 * @return {String}
 */

var camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Hyphenate a camelCase string.
 *
 * @param {String} str
 * @return {String}
 */

var hyphenateRE = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
}

/**
 * Converts hyphen/underscore/slash delimitered names into
 * camelized classNames.
 *
 * e.g. my-component => MyComponent
 *      some_else    => SomeElse
 *      some/comp    => SomeComp
 *
 * @param {String} str
 * @return {String}
 */

var classifyRE = /(?:^|[-_\/])(\w)/g;

function classify(str) {
  return str.replace(classifyRE, toUpper);
}

/**
 * Simple bind, faster than native
 *
 * @param {Function} fn
 * @param {Object} ctx
 * @return {Function}
 */

function bind(fn, ctx) {
  return function (a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  };
}

/**
 * Convert an Array-like object to a real Array.
 *
 * @param {Array-like} list
 * @param {Number} [start] - start index
 * @return {Array}
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret;
}

/**
 * Mix properties into target object.
 *
 * @param {Object} to
 * @param {Object} from
 */

function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 *
 * @param {*} obj
 * @return {Boolean}
 */

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

function isPlainObject(obj) {
  return toString.call(obj) === OBJECT_STRING;
}

/**
 * Array type check.
 *
 * @param {*} obj
 * @return {Boolean}
 */

var isArray = Array.isArray;

/**
 * Define a non-enumerable property
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 * @param {Boolean} [enumerable]
 */

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Debounce a function so it only gets called after the
 * input stops arriving after the given wait period.
 *
 * @param {Function} func
 * @param {Number} wait
 * @return {Function} - the debounced function
 */

function _debounce(func, wait) {
  var timeout, args, context, timestamp, result;
  var later = function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    }
  };
  return function () {
    context = this;
    args = arguments;
    timestamp = Date.now();
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }
    return result;
  };
}

/**
 * Manual indexOf because it's slightly faster than
 * native.
 *
 * @param {Array} arr
 * @param {*} obj
 */

function indexOf(arr, obj) {
  var i = arr.length;
  while (i--) {
    if (arr[i] === obj) return i;
  }
  return -1;
}

/**
 * Make a cancellable version of an async callback.
 *
 * @param {Function} fn
 * @return {Function}
 */

function cancellable(fn) {
  var cb = function cb() {
    if (!cb.cancelled) {
      return fn.apply(this, arguments);
    }
  };
  cb.cancel = function () {
    cb.cancelled = true;
  };
  return cb;
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */

function looseEqual(a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
  /* eslint-enable eqeqeq */
}

var hasProto = ('__proto__' in {});

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

// UA sniffing for working around browser-specific quirks
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;

var transitionProp = undefined;
var transitionEndEvent = undefined;
var animationProp = undefined;
var animationEndEvent = undefined;

// Transition property/event sniffing
if (inBrowser && !isIE9) {
  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
}

/**
 * Defer a task to execute it asynchronously. Ideally this
 * should be executed as a microtask, so we leverage
 * MutationObserver if it's available, and fallback to
 * setTimeout(0).
 *
 * @param {Function} cb
 * @param {Object} ctx
 */

var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;
  function nextTickHandler() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks = [];
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  /* istanbul ignore if */
  if (typeof MutationObserver !== 'undefined') {
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(counter);
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = counter;
    };
  } else {
    // webpack attempts to inject a shim for setImmediate
    // if it is used as a global, so we have to work around that to
    // avoid bundling unnecessary code.
    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
    timerFunc = context.setImmediate || setTimeout;
  }
  return function (cb, ctx) {
    var func = ctx ? function () {
      cb.call(ctx);
    } : cb;
    callbacks.push(func);
    if (pending) return;
    pending = true;
    timerFunc(nextTickHandler, 0);
  };
})();

function Cache(limit) {
  this.size = 0;
  this.limit = limit;
  this.head = this.tail = undefined;
  this._keymap = Object.create(null);
}

var p = Cache.prototype;

/**
 * Put <value> into the cache associated with <key>.
 * Returns the entry which was removed to make room for
 * the new entry. Otherwise undefined is returned.
 * (i.e. if there was enough room already).
 *
 * @param {String} key
 * @param {*} value
 * @return {Entry|undefined}
 */

p.put = function (key, value) {
  var removed;
  if (this.size === this.limit) {
    removed = this.shift();
  }

  var entry = this.get(key, true);
  if (!entry) {
    entry = {
      key: key
    };
    this._keymap[key] = entry;
    if (this.tail) {
      this.tail.newer = entry;
      entry.older = this.tail;
    } else {
      this.head = entry;
    }
    this.tail = entry;
    this.size++;
  }
  entry.value = value;

  return removed;
};

/**
 * Purge the least recently used (oldest) entry from the
 * cache. Returns the removed entry or undefined if the
 * cache was empty.
 */

p.shift = function () {
  var entry = this.head;
  if (entry) {
    this.head = this.head.newer;
    this.head.older = undefined;
    entry.newer = entry.older = undefined;
    this._keymap[entry.key] = undefined;
    this.size--;
  }
  return entry;
};

/**
 * Get and register recent use of <key>. Returns the value
 * associated with <key> or undefined if not in cache.
 *
 * @param {String} key
 * @param {Boolean} returnEntry
 * @return {Entry|*}
 */

p.get = function (key, returnEntry) {
  var entry = this._keymap[key];
  if (entry === undefined) return;
  if (entry === this.tail) {
    return returnEntry ? entry : entry.value;
  }
  // HEAD--------------TAIL
  //   <.older   .newer>
  //  <--- add direction --
  //   A  B  C  <D>  E
  if (entry.newer) {
    if (entry === this.head) {
      this.head = entry.newer;
    }
    entry.newer.older = entry.older; // C <-- E.
  }
  if (entry.older) {
    entry.older.newer = entry.newer; // C. --> E
  }
  entry.newer = undefined; // D --x
  entry.older = this.tail; // D. --> E
  if (this.tail) {
    this.tail.newer = entry; // E. <-- D
  }
  this.tail = entry;
  return returnEntry ? entry : entry.value;
};

var cache$1 = new Cache(1000);
var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
var reservedArgRE = /^in$|^-?\d+/;

/**
 * Parser state
 */

var str;
var dir;
var c;
var prev;
var i;
var l;
var lastFilterIndex;
var inSingle;
var inDouble;
var curly;
var square;
var paren;
/**
 * Push a filter to the current directive object
 */

function pushFilter() {
  var exp = str.slice(lastFilterIndex, i).trim();
  var filter;
  if (exp) {
    filter = {};
    var tokens = exp.match(filterTokenRE);
    filter.name = tokens[0];
    if (tokens.length > 1) {
      filter.args = tokens.slice(1).map(processFilterArg);
    }
  }
  if (filter) {
    (dir.filters = dir.filters || []).push(filter);
  }
  lastFilterIndex = i + 1;
}

/**
 * Check if an argument is dynamic and strip quotes.
 *
 * @param {String} arg
 * @return {Object}
 */

function processFilterArg(arg) {
  if (reservedArgRE.test(arg)) {
    return {
      value: toNumber(arg),
      dynamic: false
    };
  } else {
    var stripped = stripQuotes(arg);
    var dynamic = stripped === arg;
    return {
      value: dynamic ? arg : stripped,
      dynamic: dynamic
    };
  }
}

/**
 * Parse a directive value and extract the expression
 * and its filters into a descriptor.
 *
 * Example:
 *
 * "a + 1 | uppercase" will yield:
 * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
 *
 * @param {String} str
 * @return {Object}
 */

function parseDirective(s) {
  var hit = cache$1.get(s);
  if (hit) {
    return hit;
  }

  // reset parser state
  str = s;
  inSingle = inDouble = false;
  curly = square = paren = 0;
  lastFilterIndex = 0;
  dir = {};

  for (i = 0, l = str.length; i < l; i++) {
    prev = c;
    c = str.charCodeAt(i);
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
    } else if (c === 0x7C && // pipe
    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
      if (dir.expression == null) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        dir.expression = str.slice(0, i).trim();
      } else {
        // already has filter
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22:
          inDouble = true;break; // "
        case 0x27:
          inSingle = true;break; // '
        case 0x28:
          paren++;break; // (
        case 0x29:
          paren--;break; // )
        case 0x5B:
          square++;break; // [
        case 0x5D:
          square--;break; // ]
        case 0x7B:
          curly++;break; // {
        case 0x7D:
          curly--;break; // }
      }
    }
  }

  if (dir.expression == null) {
    dir.expression = str.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  cache$1.put(s, dir);
  return dir;
}

var directive = Object.freeze({
  parseDirective: parseDirective
});

var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
var cache = undefined;
var tagRE = undefined;
var htmlRE = undefined;
/**
 * Escape a string so it can be used in a RegExp
 * constructor.
 *
 * @param {String} str
 */

function escapeRegex(str) {
  return str.replace(regexEscapeRE, '\\$&');
}

function compileRegex() {
  var open = escapeRegex(config.delimiters[0]);
  var close = escapeRegex(config.delimiters[1]);
  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
  // reset cache
  cache = new Cache(1000);
}

/**
 * Parse a template text string into an array of tokens.
 *
 * @param {String} text
 * @return {Array<Object> | null}
 *               - {String} type
 *               - {String} value
 *               - {Boolean} [html]
 *               - {Boolean} [oneTime]
 */

function parseText(text) {
  if (!cache) {
    compileRegex();
  }
  var hit = cache.get(text);
  if (hit) {
    return hit;
  }
  text = text.replace(/\n/g, '');
  if (!tagRE.test(text)) {
    return null;
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, html, value, first, oneTime;
  /* eslint-disable no-cond-assign */
  while (match = tagRE.exec(text)) {
    /* eslint-enable no-cond-assign */
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push({
        value: text.slice(lastIndex, index)
      });
    }
    // tag token
    html = htmlRE.test(match[0]);
    value = html ? match[1] : match[2];
    first = value.charCodeAt(0);
    oneTime = first === 42; // *
    value = oneTime ? value.slice(1) : value;
    tokens.push({
      tag: true,
      value: value.trim(),
      html: html,
      oneTime: oneTime
    });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push({
      value: text.slice(lastIndex)
    });
  }
  cache.put(text, tokens);
  return tokens;
}

/**
 * Format a list of tokens into an expression.
 * e.g. tokens parsed from 'a {{b}} c' can be serialized
 * into one single expression as '"a " + b + " c"'.
 *
 * @param {Array} tokens
 * @param {Vue} [vm]
 * @return {String}
 */

function tokensToExp(tokens, vm) {
  if (tokens.length > 1) {
    return tokens.map(function (token) {
      return formatToken(token, vm);
    }).join('+');
  } else {
    return formatToken(tokens[0], vm, true);
  }
}

/**
 * Format a single token.
 *
 * @param {Object} token
 * @param {Vue} [vm]
 * @param {Boolean} [single]
 * @return {String}
 */

function formatToken(token, vm, single) {
  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
}

/**
 * For an attribute with multiple interpolation tags,
 * e.g. attr="some-{{thing | filter}}", in order to combine
 * the whole thing into a single watchable expression, we
 * have to inline those filters. This function does exactly
 * that. This is a bit hacky but it avoids heavy changes
 * to directive parser and watcher mechanism.
 *
 * @param {String} exp
 * @param {Boolean} single
 * @return {String}
 */

var filterRE = /[^|]\|[^|]/;
function inlineFilters(exp, single) {
  if (!filterRE.test(exp)) {
    return single ? exp : '(' + exp + ')';
  } else {
    var dir = parseDirective(exp);
    if (!dir.filters) {
      return '(' + exp + ')';
    } else {
      return 'this._applyFilters(' + dir.expression + // value
      ',null,' + // oldValue (null for read)
      JSON.stringify(dir.filters) + // filter descriptors
      ',false)'; // write?
    }
  }
}

var text = Object.freeze({
  compileRegex: compileRegex,
  parseText: parseText,
  tokensToExp: tokensToExp
});

var delimiters = ['{{', '}}'];
var unsafeDelimiters = ['{{{', '}}}'];

var config = Object.defineProperties({

  /**
   * Whether to print debug messages.
   * Also enables stack trace for warnings.
   *
   * @type {Boolean}
   */

  debug: false,

  /**
   * Whether to suppress warnings.
   *
   * @type {Boolean}
   */

  silent: false,

  /**
   * Whether to use async rendering.
   */

  async: true,

  /**
   * Whether to warn against errors caught when evaluating
   * expressions.
   */

  warnExpressionErrors: true,

  /**
   * Internal flag to indicate the delimiters have been
   * changed.
   *
   * @type {Boolean}
   */

  _delimitersChanged: true,

  /**
   * List of asset types that a component can own.
   *
   * @type {Array}
   */

  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

  /**
   * prop binding modes
   */

  _propBindingModes: {
    ONE_WAY: 0,
    TWO_WAY: 1,
    ONE_TIME: 2
  },

  /**
   * Max circular updates allowed in a batcher flush cycle.
   */

  _maxUpdateCount: 100

}, {
  delimiters: { /**
                 * Interpolation delimiters. Changing these would trigger
                 * the text parser to re-compile the regular expressions.
                 *
                 * @type {Array<String>}
                 */

    get: function get() {
      return delimiters;
    },
    set: function set(val) {
      delimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  },
  unsafeDelimiters: {
    get: function get() {
      return unsafeDelimiters;
    },
    set: function set(val) {
      unsafeDelimiters = val;
      compileRegex();
    },
    configurable: true,
    enumerable: true
  }
});

var warn = undefined;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var hasConsole = typeof console !== 'undefined';
    warn = function (msg, e) {
      if (hasConsole && (!config.silent || config.debug)) {
        console.warn('[Vue warn]: ' + msg);
        /* istanbul ignore if */
        if (config.debug) {
          if (e) {
            throw e;
          } else {
            console.warn(new Error('Warning Stack Trace').stack);
          }
        }
      }
    };
  })();
}

/**
 * Append with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function appendWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    target.appendChild(el);
  }, vm, cb);
}

/**
 * InsertBefore with transition.
 *
 * @param {Element} el
 * @param {Element} target
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function beforeWithTransition(el, target, vm, cb) {
  applyTransition(el, 1, function () {
    before(el, target);
  }, vm, cb);
}

/**
 * Remove with transition.
 *
 * @param {Element} el
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function removeWithTransition(el, vm, cb) {
  applyTransition(el, -1, function () {
    remove(el);
  }, vm, cb);
}

/**
 * Apply transitions with an operation callback.
 *
 * @param {Element} el
 * @param {Number} direction
 *                  1: enter
 *                 -1: leave
 * @param {Function} op - the actual DOM operation
 * @param {Vue} vm
 * @param {Function} [cb]
 */

function applyTransition(el, direction, op, vm, cb) {
  var transition = el.__v_trans;
  if (!transition ||
  // skip if there are no js hooks and CSS transition is
  // not supported
  !transition.hooks && !transitionEndEvent ||
  // skip transitions for initial compile
  !vm._isCompiled ||
  // if the vm is being manipulated by a parent directive
  // during the parent's compilation phase, skip the
  // animation.
  vm.$parent && !vm.$parent._isCompiled) {
    op();
    if (cb) cb();
    return;
  }
  var action = direction > 0 ? 'enter' : 'leave';
  transition[action](op, cb);
}

var transition = Object.freeze({
  appendWithTransition: appendWithTransition,
  beforeWithTransition: beforeWithTransition,
  removeWithTransition: removeWithTransition,
  applyTransition: applyTransition
});

/**
 * Query an element selector if it's not an element already.
 *
 * @param {String|Element} el
 * @return {Element}
 */

function query(el) {
  if (typeof el === 'string') {
    var selector = el;
    el = document.querySelector(el);
    if (!el) {
      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
    }
  }
  return el;
}

/**
 * Check if a node is in the document.
 * Note: document.documentElement.contains should work here
 * but always returns false for comment nodes in phantomjs,
 * making unit tests difficult. This is fixed by doing the
 * contains() check on the node's parentNode instead of
 * the node itself.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function inDoc(node) {
  var doc = document.documentElement;
  var parent = node && node.parentNode;
  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
}

/**
 * Get and remove an attribute from a node.
 *
 * @param {Node} node
 * @param {String} _attr
 */

function getAttr(node, _attr) {
  var val = node.getAttribute(_attr);
  if (val !== null) {
    node.removeAttribute(_attr);
  }
  return val;
}

/**
 * Get an attribute with colon or v-bind: prefix.
 *
 * @param {Node} node
 * @param {String} name
 * @return {String|null}
 */

function getBindAttr(node, name) {
  var val = getAttr(node, ':' + name);
  if (val === null) {
    val = getAttr(node, 'v-bind:' + name);
  }
  return val;
}

/**
 * Check the presence of a bind attribute.
 *
 * @param {Node} node
 * @param {String} name
 * @return {Boolean}
 */

function hasBindAttr(node, name) {
  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

function before(el, target) {
  target.parentNode.insertBefore(el, target);
}

/**
 * Insert el after target
 *
 * @param {Element} el
 * @param {Element} target
 */

function after(el, target) {
  if (target.nextSibling) {
    before(el, target.nextSibling);
  } else {
    target.parentNode.appendChild(el);
  }
}

/**
 * Remove el from DOM
 *
 * @param {Element} el
 */

function remove(el) {
  el.parentNode.removeChild(el);
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

function prepend(el, target) {
  if (target.firstChild) {
    before(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
}

/**
 * Replace target with el
 *
 * @param {Element} target
 * @param {Element} el
 */

function replace(target, el) {
  var parent = target.parentNode;
  if (parent) {
    parent.replaceChild(el, target);
  }
}

/**
 * Add event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 * @param {Boolean} [useCapture]
 */

function on(el, event, cb, useCapture) {
  el.addEventListener(event, cb, useCapture);
}

/**
 * Remove event listener shorthand.
 *
 * @param {Element} el
 * @param {String} event
 * @param {Function} cb
 */

function off(el, event, cb) {
  el.removeEventListener(event, cb);
}

/**
 * In IE9, setAttribute('class') will result in empty class
 * if the element also has the :class attribute; However in
 * PhantomJS, setting `className` does not work on SVG elements...
 * So we have to do a conditional check here.
 *
 * @param {Element} el
 * @param {String} cls
 */

function setClass(el, cls) {
  /* istanbul ignore if */
  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
    el.className = cls;
  } else {
    el.setAttribute('class', cls);
  }
}

/**
 * Add class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      setClass(el, (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for IE & SVG
 *
 * @param {Element} el
 * @param {String} cls
 */

function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    setClass(el, cur.trim());
  }
  if (!el.className) {
    el.removeAttribute('class');
  }
}

/**
 * Extract raw content inside an element into a temporary
 * container div
 *
 * @param {Element} el
 * @param {Boolean} asFragment
 * @return {Element|DocumentFragment}
 */

function extractContent(el, asFragment) {
  var child;
  var rawContent;
  /* istanbul ignore if */
  if (isTemplate(el) && isFragment(el.content)) {
    el = el.content;
  }
  if (el.hasChildNodes()) {
    trimNode(el);
    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
    /* eslint-disable no-cond-assign */
    while (child = el.firstChild) {
      /* eslint-enable no-cond-assign */
      rawContent.appendChild(child);
    }
  }
  return rawContent;
}

/**
 * Trim possible empty head/tail text and comment
 * nodes inside a parent.
 *
 * @param {Node} node
 */

function trimNode(node) {
  var child;
  /* eslint-disable no-sequences */
  while ((child = node.firstChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  while ((child = node.lastChild, isTrimmable(child))) {
    node.removeChild(child);
  }
  /* eslint-enable no-sequences */
}

function isTrimmable(node) {
  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
}

/**
 * Check if an element is a template tag.
 * Note if the template appears inside an SVG its tagName
 * will be in lowercase.
 *
 * @param {Element} el
 */

function isTemplate(el) {
  return el.tagName && el.tagName.toLowerCase() === 'template';
}

/**
 * Create an "anchor" for performing dom insertion/removals.
 * This is used in a number of scenarios:
 * - fragment instance
 * - v-html
 * - v-if
 * - v-for
 * - component
 *
 * @param {String} content
 * @param {Boolean} persist - IE trashes empty textNodes on
 *                            cloneNode(true), so in certain
 *                            cases the anchor needs to be
 *                            non-empty to be persisted in
 *                            templates.
 * @return {Comment|Text}
 */

function createAnchor(content, persist) {
  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
  anchor.__v_anchor = true;
  return anchor;
}

/**
 * Find a component ref attribute that starts with $.
 *
 * @param {Element} node
 * @return {String|undefined}
 */

var refRE = /^v-ref:/;

function findRef(node) {
  if (node.hasAttributes()) {
    var attrs = node.attributes;
    for (var i = 0, l = attrs.length; i < l; i++) {
      var name = attrs[i].name;
      if (refRE.test(name)) {
        return camelize(name.replace(refRE, ''));
      }
    }
  }
}

/**
 * Map a function to a range of nodes .
 *
 * @param {Node} node
 * @param {Node} end
 * @param {Function} op
 */

function mapNodeRange(node, end, op) {
  var next;
  while (node !== end) {
    next = node.nextSibling;
    op(node);
    node = next;
  }
  op(end);
}

/**
 * Remove a range of nodes with transition, store
 * the nodes in a fragment with correct ordering,
 * and call callback when done.
 *
 * @param {Node} start
 * @param {Node} end
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Function} cb
 */

function removeNodeRange(start, end, vm, frag, cb) {
  var done = false;
  var removed = 0;
  var nodes = [];
  mapNodeRange(start, end, function (node) {
    if (node === end) done = true;
    nodes.push(node);
    removeWithTransition(node, vm, onRemoved);
  });
  function onRemoved() {
    removed++;
    if (done && removed >= nodes.length) {
      for (var i = 0; i < nodes.length; i++) {
        frag.appendChild(nodes[i]);
      }
      cb && cb();
    }
  }
}

/**
 * Check if a node is a DocumentFragment.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isFragment(node) {
  return node && node.nodeType === 11;
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 *
 * @param {Element} el
 * @return {String}
 */

function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML;
  }
}

var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
var reservedTagRE = /^(slot|partial|component)$/;

var isUnknownElement = undefined;
if (process.env.NODE_ENV !== 'production') {
  isUnknownElement = function (el, tag) {
    if (tag.indexOf('-') > -1) {
      // http://stackoverflow.com/a/28210364/1070244
      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
    } else {
      return (/HTMLUnknownElement/.test(el.toString()) &&
        // Chrome returns unknown for several HTML5 elements.
        // https://code.google.com/p/chromium/issues/detail?id=540526
        !/^(data|time|rtc|rb)$/.test(tag)
      );
    }
  };
}

/**
 * Check if an element is a component, if yes return its
 * component id.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Object|undefined}
 */

function checkComponentAttr(el, options) {
  var tag = el.tagName.toLowerCase();
  var hasAttrs = el.hasAttributes();
  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
    if (resolveAsset(options, 'components', tag)) {
      return { id: tag };
    } else {
      var is = hasAttrs && getIsBinding(el);
      if (is) {
        return is;
      } else if (process.env.NODE_ENV !== 'production') {
        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
        if (expectedTag) {
          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
        } else if (isUnknownElement(el, tag)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
        }
      }
    }
  } else if (hasAttrs) {
    return getIsBinding(el);
  }
}

/**
 * Get "is" binding from an element.
 *
 * @param {Element} el
 * @return {Object|undefined}
 */

function getIsBinding(el) {
  // dynamic syntax
  var exp = getAttr(el, 'is');
  if (exp != null) {
    return { id: exp };
  } else {
    exp = getBindAttr(el, 'is');
    if (exp != null) {
      return { id: exp, dynamic: true };
    }
  }
}

/**
 * Set a prop's initial value on a vm and its data object.
 *
 * @param {Vue} vm
 * @param {Object} prop
 * @param {*} value
 */

function initProp(vm, prop, value) {
  var key = prop.path;
  value = coerceProp(prop, value);
  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
}

/**
 * Assert whether a prop is valid.
 *
 * @param {Object} prop
 * @param {*} value
 */

function assertProp(prop, value) {
  if (!prop.options.required && ( // non-required
  prop.raw === null || // abscent
  value == null) // null or undefined
  ) {
      return true;
    }
  var options = prop.options;
  var type = options.type;
  var valid = true;
  var expectedType;
  if (type) {
    if (type === String) {
      expectedType = 'string';
      valid = typeof value === expectedType;
    } else if (type === Number) {
      expectedType = 'number';
      valid = typeof value === 'number';
    } else if (type === Boolean) {
      expectedType = 'boolean';
      valid = typeof value === 'boolean';
    } else if (type === Function) {
      expectedType = 'function';
      valid = typeof value === 'function';
    } else if (type === Object) {
      expectedType = 'object';
      valid = isPlainObject(value);
    } else if (type === Array) {
      expectedType = 'array';
      valid = isArray(value);
    } else {
      valid = value instanceof type;
    }
  }
  if (!valid) {
    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
    return false;
  }
  var validator = options.validator;
  if (validator) {
    if (!validator(value)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
      return false;
    }
  }
  return true;
}

/**
 * Force parsing value with coerce option.
 *
 * @param {*} value
 * @param {Object} options
 * @return {*}
 */

function coerceProp(prop, value) {
  var coerce = prop.options.coerce;
  if (!coerce) {
    return value;
  }
  // coerce is a function
  return coerce(value);
}

function formatType(val) {
  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
}

function formatValue(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 *
 * All strategy functions follow the same signature:
 *
 * @param {*} parentVal
 * @param {*} childVal
 * @param {Vue} [vm]
 */

var strats = config.optionMergeStrategies = Object.create(null);

/**
 * Helper that recursively merges two data objects together.
 */

function mergeData(to, from) {
  var key, toVal, fromVal;
  for (key in from) {
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to;
}

/**
 * Data
 */

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
      return parentVal;
    }
    if (!parentVal) {
      return childVal;
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn() {
      return mergeData(childVal.call(this), parentVal.call(this));
    };
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
};

/**
 * El
 */

strats.el = function (parentVal, childVal, vm) {
  if (!vm && childVal && typeof childVal !== 'function') {
    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
    return;
  }
  var ret = childVal || parentVal;
  // invoke the element factory if this is instance merge
  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
};

/**
 * Hooks and param attributes are merged as arrays.
 */

strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
};

/**
 * 0.11 deprecation warning
 */

strats.paramAttributes = function () {
  /* istanbul ignore next */
  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
};

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal) {
  var res = Object.create(parentVal);
  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Events & Watchers.
 *
 * Events & watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = strats.events = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent ? parent.concat(child) : [child];
  }
  return ret;
};

/**
 * Other object hashes.
 */

strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
  if (!childVal) return parentVal;
  if (!parentVal) return childVal;
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret;
};

/**
 * Default strategy.
 */

var defaultStrat = function defaultStrat(parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};

/**
 * Make sure component options get converted to actual
 * constructors.
 *
 * @param {Object} options
 */

function guardComponents(options) {
  if (options.components) {
    var components = options.components = guardArrayAssets(options.components);
    var ids = Object.keys(components);
    var def;
    if (process.env.NODE_ENV !== 'production') {
      var map = options._componentNameMap = {};
    }
    for (var i = 0, l = ids.length; i < l; i++) {
      var key = ids[i];
      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
        continue;
      }
      // record a all lowercase <-> kebab-case mapping for
      // possible custom element case error warning
      if (process.env.NODE_ENV !== 'production') {
        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
      }
      def = components[key];
      if (isPlainObject(def)) {
        components[key] = Vue.extend(def);
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 *
 * @param {Object} options
 */

function guardProps(options) {
  var props = options.props;
  var i, val;
  if (isArray(props)) {
    options.props = {};
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        options.props[val] = null;
      } else if (val.name) {
        options.props[val.name] = val;
      }
    }
  } else if (isPlainObject(props)) {
    var keys = Object.keys(props);
    i = keys.length;
    while (i--) {
      val = props[keys[i]];
      if (typeof val === 'function') {
        props[keys[i]] = { type: val };
      }
    }
  }
}

/**
 * Guard an Array-format assets option and converted it
 * into the key-value Object format.
 *
 * @param {Object|Array} assets
 * @return {Object}
 */

function guardArrayAssets(assets) {
  if (isArray(assets)) {
    var res = {};
    var i = assets.length;
    var asset;
    while (i--) {
      asset = assets[i];
      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
      if (!id) {
        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
      } else {
        res[id] = asset;
      }
    }
    return res;
  }
  return assets;
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 *
 * @param {Object} parent
 * @param {Object} child
 * @param {Vue} [vm] - if vm is present, indicates this is
 *                     an instantiation merge.
 */

function mergeOptions(parent, child, vm) {
  guardComponents(child);
  guardProps(child);
  var options = {};
  var key;
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options;
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 *
 * @param {Object} options
 * @param {String} type
 * @param {String} id
 * @return {Object|Function}
 */

function resolveAsset(options, type, id) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }
  var assets = options[type];
  var camelizedId;
  return assets[id] ||
  // camelCase ID
  assets[camelizedId = camelize(id)] ||
  // Pascal Case ID
  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
}

/**
 * Assert asset exists
 */

function assertAsset(val, type, id) {
  if (!val) {
    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
  }
}

var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 *
 * @constructor
 */
function Dep() {
  this.id = uid$1++;
  this.subs = [];
}

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;

/**
 * Add a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};

/**
 * Remove a directive subscriber.
 *
 * @param {Directive} sub
 */

Dep.prototype.removeSub = function (sub) {
  this.subs.$remove(sub);
};

/**
 * Add self as a dependency to the target watcher.
 */

Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};

/**
 * Notify all subscribers of a new value.
 */

Dep.prototype.notify = function () {
  // stablize the subscriber list first
  var subs = toArray(this.subs);
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto)

/**
 * Intercept mutating methods and emit events
 */

;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break;
      case 'unshift':
        inserted = args;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;
    }
    if (inserted) ob.observeArray(inserted);
    // notify change
    ob.dep.notify();
    return result;
  });
});

/**
 * Swap the element at the given index with a new value
 * and emits corresponding event.
 *
 * @param {Number} index
 * @param {*} val
 * @return {*} - replaced element
 */

def(arrayProto, '$set', function $set(index, val) {
  if (index >= this.length) {
    this.length = Number(index) + 1;
  }
  return this.splice(index, 1, val)[0];
});

/**
 * Convenience method to remove the element at given index.
 *
 * @param {Number} index
 * @param {*} val
 */

def(arrayProto, '$remove', function $remove(item) {
  /* istanbul ignore if */
  if (!this.length) return;
  var index = indexOf(this, item);
  if (index > -1) {
    return this.splice(index, 1);
  }
});

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 *
 * @param {Array|Object} value
 * @constructor
 */

function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  def(value, '__ob__', this);
  if (isArray(value)) {
    var augment = hasProto ? protoAugment : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
}

// Instance methods

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 *
 * @param {Object} obj
 */

Observer.prototype.walk = function (obj) {
  var keys = Object.keys(obj);
  for (var i = 0, l = keys.length; i < l; i++) {
    this.convert(keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 *
 * @param {Array} items
 */

Observer.prototype.observeArray = function (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

/**
 * Convert a property into getter/setter so we can emit
 * the events when the property is accessed/changed.
 *
 * @param {String} key
 * @param {*} val
 */

Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};

/**
 * Add an owner vm, so that when $set/$delete mutations
 * happen we can notify owner vms to proxy the keys and
 * digest the watchers. This is only called when the object
 * is observed as an instance's root $data.
 *
 * @param {Vue} vm
 */

Observer.prototype.addVm = function (vm) {
  (this.vms || (this.vms = [])).push(vm);
};

/**
 * Remove an owner vm. This is called when the object is
 * swapped out as an instance's $data object.
 *
 * @param {Vue} vm
 */

Observer.prototype.removeVm = function (vm) {
  this.vms.$remove(vm);
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * @param {Object|Array} target
 * @param {Object} proto
 */

function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 *
 * @param {*} value
 * @param {Vue} [vm]
 * @return {Observer|undefined}
 * @static
 */

function observe(value, vm) {
  if (!value || typeof value !== 'object') {
    return;
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }
  if (ob && vm) {
    ob.addVm(vm);
  }
  return ob;
}

/**
 * Define a reactive property on an Object.
 *
 * @param {Object} obj
 * @param {String} key
 * @param {*} val
 */

function defineReactive(obj, key, val) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return;
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (isArray(value)) {
          for (var e, i = 0, l = value.length; i < l; i++) {
            e = value[i];
            e && e.__ob__ && e.__ob__.dep.depend();
          }
        }
      }
      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      if (newVal === value) {
        return;
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}



var util = Object.freeze({
	defineReactive: defineReactive,
	set: set,
	del: del,
	hasOwn: hasOwn,
	isLiteral: isLiteral,
	isReserved: isReserved,
	_toString: _toString,
	toNumber: toNumber,
	toBoolean: toBoolean,
	stripQuotes: stripQuotes,
	camelize: camelize,
	hyphenate: hyphenate,
	classify: classify,
	bind: bind,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	def: def,
	debounce: _debounce,
	indexOf: indexOf,
	cancellable: cancellable,
	looseEqual: looseEqual,
	isArray: isArray,
	hasProto: hasProto,
	inBrowser: inBrowser,
	devtools: devtools,
	isIE9: isIE9,
	isAndroid: isAndroid,
	get transitionProp () { return transitionProp; },
	get transitionEndEvent () { return transitionEndEvent; },
	get animationProp () { return animationProp; },
	get animationEndEvent () { return animationEndEvent; },
	nextTick: nextTick,
	query: query,
	inDoc: inDoc,
	getAttr: getAttr,
	getBindAttr: getBindAttr,
	hasBindAttr: hasBindAttr,
	before: before,
	after: after,
	remove: remove,
	prepend: prepend,
	replace: replace,
	on: on,
	off: off,
	setClass: setClass,
	addClass: addClass,
	removeClass: removeClass,
	extractContent: extractContent,
	trimNode: trimNode,
	isTemplate: isTemplate,
	createAnchor: createAnchor,
	findRef: findRef,
	mapNodeRange: mapNodeRange,
	removeNodeRange: removeNodeRange,
	isFragment: isFragment,
	getOuterHTML: getOuterHTML,
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	assertAsset: assertAsset,
	checkComponentAttr: checkComponentAttr,
	initProp: initProp,
	assertProp: assertProp,
	coerceProp: coerceProp,
	commonTagRE: commonTagRE,
	reservedTagRE: reservedTagRE,
	get warn () { return warn; }
});

var uid = 0;

function initMixin (Vue) {
  /**
   * The main init sequence. This is called for every
   * instance, including ones that are created from extended
   * constructors.
   *
   * @param {Object} options - this options object should be
   *                           the result of merging class
   *                           options and the options passed
   *                           in to the constructor.
   */

  Vue.prototype._init = function (options) {
    options = options || {};

    this.$el = null;
    this.$parent = options.parent;
    this.$root = this.$parent ? this.$parent.$root : this;
    this.$children = [];
    this.$refs = {}; // child vm references
    this.$els = {}; // element references
    this._watchers = []; // all watchers as an array
    this._directives = []; // all directives

    // a uid
    this._uid = uid++;

    // a flag to avoid this being observed
    this._isVue = true;

    // events bookkeeping
    this._events = {}; // registered callbacks
    this._eventsCount = {}; // for $broadcast optimization

    // fragment instance properties
    this._isFragment = false;
    this._fragment = // @type {DocumentFragment}
    this._fragmentStart = // @type {Text|Comment}
    this._fragmentEnd = null; // @type {Text|Comment}

    // lifecycle state
    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
    this._unlinkFn = null;

    // context:
    // if this is a transcluded component, context
    // will be the common parent vm of this instance
    // and its host.
    this._context = options._context || this.$parent;

    // scope:
    // if this is inside an inline v-for, the scope
    // will be the intermediate scope created for this
    // repeat fragment. this is used for linking props
    // and container directives.
    this._scope = options._scope;

    // fragment:
    // if this instance is compiled inside a Fragment, it
    // needs to reigster itself as a child of that fragment
    // for attach/detach to work properly.
    this._frag = options._frag;
    if (this._frag) {
      this._frag.children.push(this);
    }

    // push self into parent / transclusion host
    if (this.$parent) {
      this.$parent.$children.push(this);
    }

    // save raw constructor data before merge
    // so that we know which properties are provided at
    // instantiation.
    if (process.env.NODE_ENV !== 'production') {
      this._runtimeData = options.data;
    }

    // merge options.
    options = this.$options = mergeOptions(this.constructor.options, options, this);

    // set ref
    this._updateRef();

    // initialize data as empty object.
    // it will be filled up in _initScope().
    this._data = {};

    // call init hook
    this._callHook('init');

    // initialize data observation and scope inheritance.
    this._initState();

    // setup event system and option events.
    this._initEvents();

    // call created hook
    this._callHook('created');

    // if `el` option is passed, start compilation.
    if (options.el) {
      this.$mount(options.el);
    }
  };
}

var pathCache = new Cache(1000);

// actions
var APPEND = 0;
var PUSH = 1;
var INC_SUB_PATH_DEPTH = 2;
var PUSH_SUB_PATH = 3;

// states
var BEFORE_PATH = 0;
var IN_PATH = 1;
var BEFORE_IDENT = 2;
var IN_IDENT = 3;
var IN_SUB_PATH = 4;
var IN_SINGLE_QUOTE = 5;
var IN_DOUBLE_QUOTE = 6;
var AFTER_PATH = 7;
var ERROR = 8;

var pathStateMachine = [];

pathStateMachine[BEFORE_PATH] = {
  'ws': [BEFORE_PATH],
  'ident': [IN_IDENT, APPEND],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[IN_PATH] = {
  'ws': [IN_PATH],
  '.': [BEFORE_IDENT],
  '[': [IN_SUB_PATH],
  'eof': [AFTER_PATH]
};

pathStateMachine[BEFORE_IDENT] = {
  'ws': [BEFORE_IDENT],
  'ident': [IN_IDENT, APPEND]
};

pathStateMachine[IN_IDENT] = {
  'ident': [IN_IDENT, APPEND],
  '0': [IN_IDENT, APPEND],
  'number': [IN_IDENT, APPEND],
  'ws': [IN_PATH, PUSH],
  '.': [BEFORE_IDENT, PUSH],
  '[': [IN_SUB_PATH, PUSH],
  'eof': [AFTER_PATH, PUSH]
};

pathStateMachine[IN_SUB_PATH] = {
  "'": [IN_SINGLE_QUOTE, APPEND],
  '"': [IN_DOUBLE_QUOTE, APPEND],
  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
  ']': [IN_PATH, PUSH_SUB_PATH],
  'eof': ERROR,
  'else': [IN_SUB_PATH, APPEND]
};

pathStateMachine[IN_SINGLE_QUOTE] = {
  "'": [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_SINGLE_QUOTE, APPEND]
};

pathStateMachine[IN_DOUBLE_QUOTE] = {
  '"': [IN_SUB_PATH, APPEND],
  'eof': ERROR,
  'else': [IN_DOUBLE_QUOTE, APPEND]
};

/**
 * Determine the type of a character in a keypath.
 *
 * @param {Char} ch
 * @return {String} type
 */

function getPathCharType(ch) {
  if (ch === undefined) {
    return 'eof';
  }

  var code = ch.charCodeAt(0);

  switch (code) {
    case 0x5B: // [
    case 0x5D: // ]
    case 0x2E: // .
    case 0x22: // "
    case 0x27: // '
    case 0x30:
      // 0
      return ch;

    case 0x5F: // _
    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space
    case 0x09: // Tab
    case 0x0A: // Newline
    case 0x0D: // Return
    case 0xA0: // No-break space
    case 0xFEFF: // Byte Order Mark
    case 0x2028: // Line Separator
    case 0x2029:
      // Paragraph Separator
      return 'ws';
  }

  // a-z, A-Z
  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
    return 'ident';
  }

  // 1-9
  if (code >= 0x31 && code <= 0x39) {
    return 'number';
  }

  return 'else';
}

/**
 * Format a subPath, return its plain form if it is
 * a literal string or number. Otherwise prepend the
 * dynamic indicator (*).
 *
 * @param {String} path
 * @return {String}
 */

function formatSubPath(path) {
  var trimmed = path.trim();
  // invalid leading 0
  if (path.charAt(0) === '0' && isNaN(path)) {
    return false;
  }
  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
}

/**
 * Parse a string path into an array of segments
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parse(path) {
  var keys = [];
  var index = -1;
  var mode = BEFORE_PATH;
  var subPathDepth = 0;
  var c, newChar, key, type, transition, action, typeMap;

  var actions = [];

  actions[PUSH] = function () {
    if (key !== undefined) {
      keys.push(key);
      key = undefined;
    }
  };

  actions[APPEND] = function () {
    if (key === undefined) {
      key = newChar;
    } else {
      key += newChar;
    }
  };

  actions[INC_SUB_PATH_DEPTH] = function () {
    actions[APPEND]();
    subPathDepth++;
  };

  actions[PUSH_SUB_PATH] = function () {
    if (subPathDepth > 0) {
      subPathDepth--;
      mode = IN_SUB_PATH;
      actions[APPEND]();
    } else {
      subPathDepth = 0;
      key = formatSubPath(key);
      if (key === false) {
        return false;
      } else {
        actions[PUSH]();
      }
    }
  };

  function maybeUnescapeQuote() {
    var nextChar = path[index + 1];
    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
      index++;
      newChar = '\\' + nextChar;
      actions[APPEND]();
      return true;
    }
  }

  while (mode != null) {
    index++;
    c = path[index];

    if (c === '\\' && maybeUnescapeQuote()) {
      continue;
    }

    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || ERROR;

    if (transition === ERROR) {
      return; // parse error
    }

    mode = transition[0];
    action = actions[transition[1]];
    if (action) {
      newChar = transition[2];
      newChar = newChar === undefined ? c : newChar;
      if (action() === false) {
        return;
      }
    }

    if (mode === AFTER_PATH) {
      keys.raw = path;
      return keys;
    }
  }
}

/**
 * External parse that check for a cache hit first
 *
 * @param {String} path
 * @return {Array|undefined}
 */

function parsePath(path) {
  var hit = pathCache.get(path);
  if (!hit) {
    hit = parse(path);
    if (hit) {
      pathCache.put(path, hit);
    }
  }
  return hit;
}

/**
 * Get from an object from a path string
 *
 * @param {Object} obj
 * @param {String} path
 */

function getPath(obj, path) {
  return parseExpression(path).get(obj);
}

/**
 * Warn against setting non-existent root path on a vm.
 */

var warnNonExistent;
if (process.env.NODE_ENV !== 'production') {
  warnNonExistent = function (path) {
    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
  };
}

/**
 * Set on an object from a path
 *
 * @param {Object} obj
 * @param {String | Array} path
 * @param {*} val
 */

function setPath(obj, path, val) {
  var original = obj;
  if (typeof path === 'string') {
    path = parse(path);
  }
  if (!path || !isObject(obj)) {
    return false;
  }
  var last, key;
  for (var i = 0, l = path.length; i < l; i++) {
    last = obj;
    key = path[i];
    if (key.charAt(0) === '*') {
      key = parseExpression(key.slice(1)).get.call(original, original);
    }
    if (i < l - 1) {
      obj = obj[key];
      if (!isObject(obj)) {
        obj = {};
        if (process.env.NODE_ENV !== 'production' && last._isVue) {
          warnNonExistent(path);
        }
        set(last, key, obj);
      }
    } else {
      if (isArray(obj)) {
        obj.$set(key, val);
      } else if (key in obj) {
        obj[key] = val;
      } else {
        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
          warnNonExistent(path);
        }
        set(obj, key, val);
      }
    }
  }
  return true;
}

var path = Object.freeze({
  parsePath: parsePath,
  getPath: getPath,
  setPath: setPath
});

var expressionCache = new Cache(1000);

var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

var wsRE = /\s/g;
var newlineRE = /\n/g;
var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
var restoreRE = /"(\d+)"/g;
var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
var booleanLiteralRE = /^(?:true|false)$/;

/**
 * Save / Rewrite / Restore
 *
 * When rewriting paths found in an expression, it is
 * possible for the same letter sequences to be found in
 * strings and Object literal property keys. Therefore we
 * remove and store these parts in a temporary array, and
 * restore them after the path rewrite.
 */

var saved = [];

/**
 * Save replacer
 *
 * The save regex can match two possible cases:
 * 1. An opening object literal
 * 2. A string
 * If matched as a plain string, we need to escape its
 * newlines, since the string needs to be preserved when
 * generating the function body.
 *
 * @param {String} str
 * @param {String} isString - str if matched as a string
 * @return {String} - placeholder with index
 */

function save(str, isString) {
  var i = saved.length;
  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
  return '"' + i + '"';
}

/**
 * Path rewrite replacer
 *
 * @param {String} raw
 * @return {String}
 */

function rewrite(raw) {
  var c = raw.charAt(0);
  var path = raw.slice(1);
  if (allowedKeywordsRE.test(path)) {
    return raw;
  } else {
    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
    return c + 'scope.' + path;
  }
}

/**
 * Restore replacer
 *
 * @param {String} str
 * @param {String} i - matched save index
 * @return {String}
 */

function restore(str, i) {
  return saved[i];
}

/**
 * Rewrite an expression, prefixing all path accessors with
 * `scope.` and generate getter/setter functions.
 *
 * @param {String} exp
 * @return {Function}
 */

function compileGetter(exp) {
  if (improperKeywordsRE.test(exp)) {
    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
  }
  // reset state
  saved.length = 0;
  // save strings and object literal keys
  var body = exp.replace(saveRE, save).replace(wsRE, '');
  // rewrite all paths
  // pad 1 space here becaue the regex matches 1 extra char
  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
  return makeGetterFn(body);
}

/**
 * Build a getter function. Requires eval.
 *
 * We isolate the try/catch so it doesn't affect the
 * optimization of the parse function when it is not called.
 *
 * @param {String} body
 * @return {Function|undefined}
 */

function makeGetterFn(body) {
  try {
    /* eslint-disable no-new-func */
    return new Function('scope', 'return ' + body + ';');
    /* eslint-enable no-new-func */
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
  }
}

/**
 * Compile a setter function for the expression.
 *
 * @param {String} exp
 * @return {Function|undefined}
 */

function compileSetter(exp) {
  var path = parsePath(exp);
  if (path) {
    return function (scope, val) {
      setPath(scope, path, val);
    };
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
  }
}

/**
 * Parse an expression into re-written getter/setters.
 *
 * @param {String} exp
 * @param {Boolean} needSet
 * @return {Function}
 */

function parseExpression(exp, needSet) {
  exp = exp.trim();
  // try cache
  var hit = expressionCache.get(exp);
  if (hit) {
    if (needSet && !hit.set) {
      hit.set = compileSetter(hit.exp);
    }
    return hit;
  }
  var res = { exp: exp };
  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
  // optimized super simple getter
  ? makeGetterFn('scope.' + exp)
  // dynamic getter
  : compileGetter(exp);
  if (needSet) {
    res.set = compileSetter(exp);
  }
  expressionCache.put(exp, res);
  return res;
}

/**
 * Check if an expression is a simple path.
 *
 * @param {String} exp
 * @return {Boolean}
 */

function isSimplePath(exp) {
  return pathTestRE.test(exp) &&
  // don't treat true/false as paths
  !booleanLiteralRE.test(exp) &&
  // Math constants e.g. Math.PI, Math.E etc.
  exp.slice(0, 5) !== 'Math.';
}

var expression = Object.freeze({
  parseExpression: parseExpression,
  isSimplePath: isSimplePath
});

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.
var queue = [];
var userQueue = [];
var has = {};
var circular = {};
var waiting = false;
var internalQueueDepleted = false;

/**
 * Reset the batcher's state.
 */

function resetBatcherState() {
  queue = [];
  userQueue = [];
  has = {};
  circular = {};
  waiting = internalQueueDepleted = false;
}

/**
 * Flush both queues and run the watchers.
 */

function flushBatcherQueue() {
  runBatcherQueue(queue);
  internalQueueDepleted = true;
  runBatcherQueue(userQueue);
  // dev tool hook
  /* istanbul ignore if */
  if (devtools) {
    devtools.emit('flush');
  }
  resetBatcherState();
}

/**
 * Run the watchers in a single queue.
 *
 * @param {Array} queue
 */

function runBatcherQueue(queue) {
  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (var i = 0; i < queue.length; i++) {
    var watcher = queue[i];
    var id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        queue.splice(has[id], 1);
        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
      }
    }
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 *
 * @param {Watcher} watcher
 *   properties:
 *   - {Number} id
 *   - {Function} run
 */

function pushWatcher(watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    // if an internal watcher is pushed, but the internal
    // queue is already depleted, we run it immediately.
    if (internalQueueDepleted && !watcher.user) {
      watcher.run();
      return;
    }
    // push watcher into appropriate queue
    var q = watcher.user ? userQueue : queue;
    has[id] = q.length;
    q.push(watcher);
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushBatcherQueue);
    }
  }
}

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 *
 * @param {Vue} vm
 * @param {String} expression
 * @param {Function} cb
 * @param {Object} options
 *                 - {Array} filters
 *                 - {Boolean} twoWay
 *                 - {Boolean} deep
 *                 - {Boolean} user
 *                 - {Boolean} sync
 *                 - {Boolean} lazy
 *                 - {Function} [preProcess]
 *                 - {Function} [postProcess]
 * @constructor
 */
function Watcher(vm, expOrFn, cb, options) {
  // mix in options
  if (options) {
    extend(this, options);
  }
  var isFn = typeof expOrFn === 'function';
  this.vm = vm;
  vm._watchers.push(this);
  this.expression = isFn ? expOrFn.toString() : expOrFn;
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = Object.create(null);
  this.newDeps = null;
  this.prevError = null; // for async error stacks
  // parse expression for getter/setter
  if (isFn) {
    this.getter = expOrFn;
    this.setter = undefined;
  } else {
    var res = parseExpression(expOrFn, this.twoWay);
    this.getter = res.get;
    this.setter = res.set;
  }
  this.value = this.lazy ? undefined : this.get();
  // state for avoiding false triggers for deep and Array
  // watchers during vm._digest()
  this.queued = this.shallow = false;
}

/**
 * Add a dependency to this directive.
 *
 * @param {Dep} dep
 */

Watcher.prototype.addDep = function (dep) {
  var id = dep.id;
  if (!this.newDeps[id]) {
    this.newDeps[id] = dep;
    if (!this.deps[id]) {
      this.deps[id] = dep;
      dep.addSub(this);
    }
  }
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */

Watcher.prototype.get = function () {
  this.beforeGet();
  var scope = this.scope || this.vm;
  var value;
  try {
    value = this.getter.call(scope, scope);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
    }
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  if (this.preProcess) {
    value = this.preProcess(value);
  }
  if (this.filters) {
    value = scope._applyFilters(value, null, this.filters, false);
  }
  if (this.postProcess) {
    value = this.postProcess(value);
  }
  this.afterGet();
  return value;
};

/**
 * Set the corresponding value with the setter.
 *
 * @param {*} value
 */

Watcher.prototype.set = function (value) {
  var scope = this.scope || this.vm;
  if (this.filters) {
    value = scope._applyFilters(value, this.value, this.filters, true);
  }
  try {
    this.setter.call(scope, scope, value);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
      warn('Error when evaluating setter "' + this.expression + '"', e);
    }
  }
  // two-way sync for v-for alias
  var forContext = scope.$forContext;
  if (forContext && forContext.alias === this.expression) {
    if (forContext.filters) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
      return;
    }
    forContext._withLock(function () {
      if (scope.$key) {
        // original is an object
        forContext.rawValue[scope.$key] = value;
      } else {
        forContext.rawValue.$set(scope.$index, value);
      }
    });
  }
};

/**
 * Prepare for dependency collection.
 */

Watcher.prototype.beforeGet = function () {
  Dep.target = this;
  this.newDeps = Object.create(null);
};

/**
 * Clean up for dependency collection.
 */

Watcher.prototype.afterGet = function () {
  Dep.target = null;
  var ids = Object.keys(this.deps);
  var i = ids.length;
  while (i--) {
    var id = ids[i];
    if (!this.newDeps[id]) {
      this.deps[id].removeSub(this);
    }
  }
  this.deps = this.newDeps;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 *
 * @param {Boolean} shallow
 */

Watcher.prototype.update = function (shallow) {
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync || !config.async) {
    this.run();
  } else {
    // if queued, only overwrite shallow with non-shallow,
    // but not the other way around.
    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
    this.queued = true;
    // record before-push error stack in debug mode
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.debug) {
      this.prevError = new Error('[vue] async stack trace');
    }
    pushWatcher(this);
  }
};

/**
 * Batcher job interface.
 * Will be called by the batcher.
 */

Watcher.prototype.run = function () {
  if (this.active) {
    var value = this.get();
    if (value !== this.value ||
    // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated; but only do so if this is a
    // non-shallow update (caused by a vm digest).
    (isObject(value) || this.deep) && !this.shallow) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      // in debug + async mode, when a watcher callbacks
      // throws, we also throw the saved before-push error
      // so the full cross-tick stack trace is available.
      var prevError = this.prevError;
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
        this.prevError = null;
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          nextTick(function () {
            throw prevError;
          }, 0);
          throw e;
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
    this.queued = this.shallow = false;
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */

Watcher.prototype.evaluate = function () {
  // avoid overwriting another watcher that is being
  // collected.
  var current = Dep.target;
  this.value = this.get();
  this.dirty = false;
  Dep.target = current;
};

/**
 * Depend on all deps collected by this watcher.
 */

Watcher.prototype.depend = function () {
  var depIds = Object.keys(this.deps);
  var i = depIds.length;
  while (i--) {
    this.deps[depIds[i]].depend();
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */

Watcher.prototype.teardown = function () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      this.vm._watchers.$remove(this);
    }
    var depIds = Object.keys(this.deps);
    var i = depIds.length;
    while (i--) {
      this.deps[depIds[i]].removeSub(this);
    }
    this.active = false;
    this.vm = this.cb = this.value = null;
  }
};

/**
 * Recrusively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 *
 * @param {*} val
 */

function traverse(val) {
  var i, keys;
  if (isArray(val)) {
    i = val.length;
    while (i--) traverse(val[i]);
  } else if (isObject(val)) {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) traverse(val[keys[i]]);
  }
}

var text$1 = {

  bind: function bind() {
    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
  },

  update: function update(value) {
    this.el[this.attr] = _toString(value);
  }
};

var templateCache = new Cache(1000);
var idSelectorCache = new Cache(1000);

var map = {
  efault: [0, '', ''],
  legend: [1, '<fieldset>', '</fieldset>'],
  tr: [2, '<table><tbody>', '</tbody></table>'],
  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
};

map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

/**
 * Check if a node is a supported template node with a
 * DocumentFragment content.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isRealTemplate(node) {
  return isTemplate(node) && isFragment(node.content);
}

var tagRE$1 = /<([\w:]+)/;
var entityRE = /&#?\w+?;/;

/**
 * Convert a string template to a DocumentFragment.
 * Determines correct wrapping by tag types. Wrapping
 * strategy found in jQuery & component/domify.
 *
 * @param {String} templateString
 * @param {Boolean} raw
 * @return {DocumentFragment}
 */

function stringToFragment(templateString, raw) {
  // try a cache hit first
  var cacheKey = raw ? templateString : templateString.trim();
  var hit = templateCache.get(cacheKey);
  if (hit) {
    return hit;
  }

  var frag = document.createDocumentFragment();
  var tagMatch = templateString.match(tagRE$1);
  var entityMatch = entityRE.test(templateString);

  if (!tagMatch && !entityMatch) {
    // text only, return a single text node.
    frag.appendChild(document.createTextNode(templateString));
  } else {
    var tag = tagMatch && tagMatch[1];
    var wrap = map[tag] || map.efault;
    var depth = wrap[0];
    var prefix = wrap[1];
    var suffix = wrap[2];
    var node = document.createElement('div');

    node.innerHTML = prefix + templateString + suffix;
    while (depth--) {
      node = node.lastChild;
    }

    var child;
    /* eslint-disable no-cond-assign */
    while (child = node.firstChild) {
      /* eslint-enable no-cond-assign */
      frag.appendChild(child);
    }
  }
  if (!raw) {
    trimNode(frag);
  }
  templateCache.put(cacheKey, frag);
  return frag;
}

/**
 * Convert a template node to a DocumentFragment.
 *
 * @param {Node} node
 * @return {DocumentFragment}
 */

function nodeToFragment(node) {
  // if its a template tag and the browser supports it,
  // its content is already a document fragment.
  if (isRealTemplate(node)) {
    trimNode(node.content);
    return node.content;
  }
  // script template
  if (node.tagName === 'SCRIPT') {
    return stringToFragment(node.textContent);
  }
  // normal node, clone it to avoid mutating the original
  var clonedNode = cloneNode(node);
  var frag = document.createDocumentFragment();
  var child;
  /* eslint-disable no-cond-assign */
  while (child = clonedNode.firstChild) {
    /* eslint-enable no-cond-assign */
    frag.appendChild(child);
  }
  trimNode(frag);
  return frag;
}

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
var hasBrokenTemplate = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var a = document.createElement('div');
    a.innerHTML = '<template>1</template>';
    return !a.cloneNode(true).firstChild.innerHTML;
  } else {
    return false;
  }
})();

// Test for IE10/11 textarea placeholder clone bug
var hasTextareaCloneBug = (function () {
  /* istanbul ignore else */
  if (inBrowser) {
    var t = document.createElement('textarea');
    t.placeholder = 't';
    return t.cloneNode(true).value === 't';
  } else {
    return false;
  }
})();

/**
 * 1. Deal with Safari cloning nested <template> bug by
 *    manually cloning all template instances.
 * 2. Deal with IE10/11 textarea placeholder bug by setting
 *    the correct value after cloning.
 *
 * @param {Element|DocumentFragment} node
 * @return {Element|DocumentFragment}
 */

function cloneNode(node) {
  if (!node.querySelectorAll) {
    return node.cloneNode();
  }
  var res = node.cloneNode(true);
  var i, original, cloned;
  /* istanbul ignore if */
  if (hasBrokenTemplate) {
    var tempClone = res;
    if (isRealTemplate(node)) {
      node = node.content;
      tempClone = res.content;
    }
    original = node.querySelectorAll('template');
    if (original.length) {
      cloned = tempClone.querySelectorAll('template');
      i = cloned.length;
      while (i--) {
        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
      }
    }
  }
  /* istanbul ignore if */
  if (hasTextareaCloneBug) {
    if (node.tagName === 'TEXTAREA') {
      res.value = node.value;
    } else {
      original = node.querySelectorAll('textarea');
      if (original.length) {
        cloned = res.querySelectorAll('textarea');
        i = cloned.length;
        while (i--) {
          cloned[i].value = original[i].value;
        }
      }
    }
  }
  return res;
}

/**
 * Process the template option and normalizes it into a
 * a DocumentFragment that can be used as a partial or a
 * instance template.
 *
 * @param {*} template
 *        Possible values include:
 *        - DocumentFragment object
 *        - Node object of type Template
 *        - id selector: '#some-template-id'
 *        - template string: '<div><span>{{msg}}</span></div>'
 * @param {Boolean} shouldClone
 * @param {Boolean} raw
 *        inline HTML interpolation. Do not check for id
 *        selector and keep whitespace in the string.
 * @return {DocumentFragment|undefined}
 */

function parseTemplate(template, shouldClone, raw) {
  var node, frag;

  // if the template is already a document fragment,
  // do nothing
  if (isFragment(template)) {
    trimNode(template);
    return shouldClone ? cloneNode(template) : template;
  }

  if (typeof template === 'string') {
    // id selector
    if (!raw && template.charAt(0) === '#') {
      // id selector can be cached too
      frag = idSelectorCache.get(template);
      if (!frag) {
        node = document.getElementById(template.slice(1));
        if (node) {
          frag = nodeToFragment(node);
          // save selector to cache
          idSelectorCache.put(template, frag);
        }
      }
    } else {
      // normal string template
      frag = stringToFragment(template, raw);
    }
  } else if (template.nodeType) {
    // a direct node
    frag = nodeToFragment(template);
  }

  return frag && shouldClone ? cloneNode(frag) : frag;
}

var template = Object.freeze({
  cloneNode: cloneNode,
  parseTemplate: parseTemplate
});

var html = {

  bind: function bind() {
    // a comment node means this is a binding for
    // {{{ inline unescaped html }}}
    if (this.el.nodeType === 8) {
      // hold nodes
      this.nodes = [];
      // replace the placeholder with proper anchor
      this.anchor = createAnchor('v-html');
      replace(this.el, this.anchor);
    }
  },

  update: function update(value) {
    value = _toString(value);
    if (this.nodes) {
      this.swap(value);
    } else {
      this.el.innerHTML = value;
    }
  },

  swap: function swap(value) {
    // remove old nodes
    var i = this.nodes.length;
    while (i--) {
      remove(this.nodes[i]);
    }
    // convert new value to a fragment
    // do not attempt to retrieve from id selector
    var frag = parseTemplate(value, true, true);
    // save a reference to these nodes so we can remove later
    this.nodes = toArray(frag.childNodes);
    before(frag, this.anchor);
  }
};

/**
 * Abstraction for a partially-compiled fragment.
 * Can optionally compile content with a child scope.
 *
 * @param {Function} linker
 * @param {Vue} vm
 * @param {DocumentFragment} frag
 * @param {Vue} [host]
 * @param {Object} [scope]
 */
function Fragment(linker, vm, frag, host, scope, parentFrag) {
  this.children = [];
  this.childFrags = [];
  this.vm = vm;
  this.scope = scope;
  this.inserted = false;
  this.parentFrag = parentFrag;
  if (parentFrag) {
    parentFrag.childFrags.push(this);
  }
  this.unlink = linker(vm, frag, host, scope, this);
  var single = this.single = frag.childNodes.length === 1 &&
  // do not go single mode if the only node is an anchor
  !frag.childNodes[0].__v_anchor;
  if (single) {
    this.node = frag.childNodes[0];
    this.before = singleBefore;
    this.remove = singleRemove;
  } else {
    this.node = createAnchor('fragment-start');
    this.end = createAnchor('fragment-end');
    this.frag = frag;
    prepend(this.node, frag);
    frag.appendChild(this.end);
    this.before = multiBefore;
    this.remove = multiRemove;
  }
  this.node.__v_frag = this;
}

/**
 * Call attach/detach for all components contained within
 * this fragment. Also do so recursively for all child
 * fragments.
 *
 * @param {Function} hook
 */

Fragment.prototype.callHook = function (hook) {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    this.childFrags[i].callHook(hook);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    hook(this.children[i]);
  }
};

/**
 * Insert fragment before target, single node version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function singleBefore(target, withTransition) {
  this.inserted = true;
  var method = withTransition !== false ? beforeWithTransition : before;
  method(this.node, target, this.vm);
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, single node version
 */

function singleRemove() {
  this.inserted = false;
  var shouldCallRemove = inDoc(this.node);
  var self = this;
  this.beforeRemove();
  removeWithTransition(this.node, this.vm, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Insert fragment before target, multi-nodes version
 *
 * @param {Node} target
 * @param {Boolean} withTransition
 */

function multiBefore(target, withTransition) {
  this.inserted = true;
  var vm = this.vm;
  var method = withTransition !== false ? beforeWithTransition : before;
  mapNodeRange(this.node, this.end, function (node) {
    method(node, target, vm);
  });
  if (inDoc(this.node)) {
    this.callHook(attach);
  }
}

/**
 * Remove fragment, multi-nodes version
 */

function multiRemove() {
  this.inserted = false;
  var self = this;
  var shouldCallRemove = inDoc(this.node);
  this.beforeRemove();
  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
    if (shouldCallRemove) {
      self.callHook(detach);
    }
    self.destroy();
  });
}

/**
 * Prepare the fragment for removal.
 */

Fragment.prototype.beforeRemove = function () {
  var i, l;
  for (i = 0, l = this.childFrags.length; i < l; i++) {
    // call the same method recursively on child
    // fragments, depth-first
    this.childFrags[i].beforeRemove(false);
  }
  for (i = 0, l = this.children.length; i < l; i++) {
    // Call destroy for all contained instances,
    // with remove:false and defer:true.
    // Defer is necessary because we need to
    // keep the children to call detach hooks
    // on them.
    this.children[i].$destroy(false, true);
  }
  var dirs = this.unlink.dirs;
  for (i = 0, l = dirs.length; i < l; i++) {
    // disable the watchers on all the directives
    // so that the rendered content stays the same
    // during removal.
    dirs[i]._watcher && dirs[i]._watcher.teardown();
  }
};

/**
 * Destroy the fragment.
 */

Fragment.prototype.destroy = function () {
  if (this.parentFrag) {
    this.parentFrag.childFrags.$remove(this);
  }
  this.node.__v_frag = null;
  this.unlink();
};

/**
 * Call attach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function attach(child) {
  if (!child._isAttached) {
    child._callHook('attached');
  }
}

/**
 * Call detach hook for a Vue instance.
 *
 * @param {Vue} child
 */

function detach(child) {
  if (child._isAttached) {
    child._callHook('detached');
  }
}

var linkerCache = new Cache(5000);

/**
 * A factory that can be used to create instances of a
 * fragment. Caches the compiled linker if possible.
 *
 * @param {Vue} vm
 * @param {Element|String} el
 */
function FragmentFactory(vm, el) {
  this.vm = vm;
  var template;
  var isString = typeof el === 'string';
  if (isString || isTemplate(el)) {
    template = parseTemplate(el, true);
  } else {
    template = document.createDocumentFragment();
    template.appendChild(el);
  }
  this.template = template;
  // linker can be cached, but only for components
  var linker;
  var cid = vm.constructor.cid;
  if (cid > 0) {
    var cacheId = cid + (isString ? el : getOuterHTML(el));
    linker = linkerCache.get(cacheId);
    if (!linker) {
      linker = compile(template, vm.$options, true);
      linkerCache.put(cacheId, linker);
    }
  } else {
    linker = compile(template, vm.$options, true);
  }
  this.linker = linker;
}

/**
 * Create a fragment instance with given host and scope.
 *
 * @param {Vue} host
 * @param {Object} scope
 * @param {Fragment} parentFrag
 */

FragmentFactory.prototype.create = function (host, scope, parentFrag) {
  var frag = cloneNode(this.template);
  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
};

var ON = 700;
var MODEL = 800;
var BIND = 850;
var TRANSITION = 1100;
var EL = 1500;
var COMPONENT = 1500;
var PARTIAL = 1750;
var FOR = 2000;
var IF = 2000;
var SLOT = 2100;

var uid$3 = 0;

var vFor = {

  priority: FOR,

  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

  bind: function bind() {
    // support "item in/of items" syntax
    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
    if (inMatch) {
      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
      if (itMatch) {
        this.iterator = itMatch[1].trim();
        this.alias = itMatch[2].trim();
      } else {
        this.alias = inMatch[1].trim();
      }
      this.expression = inMatch[2];
    }

    if (!this.alias) {
      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
      return;
    }

    // uid as a cache identifier
    this.id = '__v-for__' + ++uid$3;

    // check if this is an option list,
    // so that we know if we need to update the <select>'s
    // v-model when the option list has changed.
    // because v-model has a lower priority than v-for,
    // the v-model is not bound here yet, so we have to
    // retrive it in the actual updateModel() function.
    var tag = this.el.tagName;
    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

    // setup anchor nodes
    this.start = createAnchor('v-for-start');
    this.end = createAnchor('v-for-end');
    replace(this.el, this.end);
    before(this.start, this.end);

    // cache
    this.cache = Object.create(null);

    // fragment factory
    this.factory = new FragmentFactory(this.vm, this.el);
  },

  update: function update(data) {
    this.diff(data);
    this.updateRef();
    this.updateModel();
  },

  /**
   * Diff, based on new data and old data, determine the
   * minimum amount of DOM manipulations needed to make the
   * DOM reflect the new data Array.
   *
   * The algorithm diffs the new data Array by storing a
   * hidden reference to an owner vm instance on previously
   * seen data. This allows us to achieve O(n) which is
   * better than a levenshtein distance based algorithm,
   * which is O(m * n).
   *
   * @param {Array} data
   */

  diff: function diff(data) {
    // check if the Array was converted from an Object
    var item = data[0];
    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

    var trackByKey = this.params.trackBy;
    var oldFrags = this.frags;
    var frags = this.frags = new Array(data.length);
    var alias = this.alias;
    var iterator = this.iterator;
    var start = this.start;
    var end = this.end;
    var inDocument = inDoc(start);
    var init = !oldFrags;
    var i, l, frag, key, value, primitive;

    // First pass, go through the new Array and fill up
    // the new frags array. If a piece of data has a cached
    // instance for it, we reuse it. Otherwise build a new
    // instance.
    for (i = 0, l = data.length; i < l; i++) {
      item = data[i];
      key = convertedFromObject ? item.$key : null;
      value = convertedFromObject ? item.$value : item;
      primitive = !isObject(value);
      frag = !init && this.getCachedFrag(value, i, key);
      if (frag) {
        // reusable fragment
        frag.reused = true;
        // update $index
        frag.scope.$index = i;
        // update $key
        if (key) {
          frag.scope.$key = key;
        }
        // update iterator
        if (iterator) {
          frag.scope[iterator] = key !== null ? key : i;
        }
        // update data for track-by, object repeat &
        // primitive values.
        if (trackByKey || convertedFromObject || primitive) {
          frag.scope[alias] = value;
        }
      } else {
        // new isntance
        frag = this.create(value, alias, i, key);
        frag.fresh = !init;
      }
      frags[i] = frag;
      if (init) {
        frag.before(end);
      }
    }

    // we're done for the initial render.
    if (init) {
      return;
    }

    // Second pass, go through the old fragments and
    // destroy those who are not reused (and remove them
    // from cache)
    var removalIndex = 0;
    var totalRemoved = oldFrags.length - frags.length;
    // when removing a large number of fragments, watcher removal
    // turns out to be a perf bottleneck, so we batch the watcher
    // removals into a single filter call!
    this.vm._vForRemoving = true;
    for (i = 0, l = oldFrags.length; i < l; i++) {
      frag = oldFrags[i];
      if (!frag.reused) {
        this.deleteCachedFrag(frag);
        this.remove(frag, removalIndex++, totalRemoved, inDocument);
      }
    }
    this.vm._vForRemoving = false;
    if (removalIndex) {
      this.vm._watchers = this.vm._watchers.filter(function (w) {
        return w.active;
      });
    }

    // Final pass, move/insert new fragments into the
    // right place.
    var targetPrev, prevEl, currentPrev;
    var insertionIndex = 0;
    for (i = 0, l = frags.length; i < l; i++) {
      frag = frags[i];
      // this is the frag that we should be after
      targetPrev = frags[i - 1];
      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
      if (frag.reused && !frag.staggerCb) {
        currentPrev = findPrevFrag(frag, start, this.id);
        if (currentPrev !== targetPrev && (!currentPrev ||
        // optimization for moving a single item.
        // thanks to suggestions by @livoras in #1807
        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
          this.move(frag, prevEl);
        }
      } else {
        // new instance, or still in stagger.
        // insert with updated stagger index.
        this.insert(frag, insertionIndex++, prevEl, inDocument);
      }
      frag.reused = frag.fresh = false;
    }
  },

  /**
   * Create a new fragment instance.
   *
   * @param {*} value
   * @param {String} alias
   * @param {Number} index
   * @param {String} [key]
   * @return {Fragment}
   */

  create: function create(value, alias, index, key) {
    var host = this._host;
    // create iteration scope
    var parentScope = this._scope || this.vm;
    var scope = Object.create(parentScope);
    // ref holder for the scope
    scope.$refs = Object.create(parentScope.$refs);
    scope.$els = Object.create(parentScope.$els);
    // make sure point $parent to parent scope
    scope.$parent = parentScope;
    // for two-way binding on alias
    scope.$forContext = this;
    // define scope properties
    defineReactive(scope, alias, value);
    defineReactive(scope, '$index', index);
    if (key) {
      defineReactive(scope, '$key', key);
    } else if (scope.$key) {
      // avoid accidental fallback
      def(scope, '$key', null);
    }
    if (this.iterator) {
      defineReactive(scope, this.iterator, key !== null ? key : index);
    }
    var frag = this.factory.create(host, scope, this._frag);
    frag.forId = this.id;
    this.cacheFrag(value, frag, index, key);
    return frag;
  },

  /**
   * Update the v-ref on owner vm.
   */

  updateRef: function updateRef() {
    var ref = this.descriptor.ref;
    if (!ref) return;
    var hash = (this._scope || this.vm).$refs;
    var refs;
    if (!this.fromObject) {
      refs = this.frags.map(findVmFromFrag);
    } else {
      refs = {};
      this.frags.forEach(function (frag) {
        refs[frag.scope.$key] = findVmFromFrag(frag);
      });
    }
    hash[ref] = refs;
  },

  /**
   * For option lists, update the containing v-model on
   * parent <select>.
   */

  updateModel: function updateModel() {
    if (this.isOption) {
      var parent = this.start.parentNode;
      var model = parent && parent.__v_model;
      if (model) {
        model.forceUpdate();
      }
    }
  },

  /**
   * Insert a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Node} prevEl
   * @param {Boolean} inDocument
   */

  insert: function insert(frag, index, prevEl, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
    }
    var staggerAmount = this.getStagger(frag, index, null, 'enter');
    if (inDocument && staggerAmount) {
      // create an anchor and insert it synchronously,
      // so that we can resolve the correct order without
      // worrying about some elements not inserted yet
      var anchor = frag.staggerAnchor;
      if (!anchor) {
        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
        anchor.__v_frag = frag;
      }
      after(anchor, prevEl);
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.before(anchor);
        remove(anchor);
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.before(prevEl.nextSibling);
    }
  },

  /**
   * Remove a fragment. Handles staggering.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {Boolean} inDocument
   */

  remove: function remove(frag, index, total, inDocument) {
    if (frag.staggerCb) {
      frag.staggerCb.cancel();
      frag.staggerCb = null;
      // it's not possible for the same frag to be removed
      // twice, so if we have a pending stagger callback,
      // it means this frag is queued for enter but removed
      // before its transition started. Since it is already
      // destroyed, we can just leave it in detached state.
      return;
    }
    var staggerAmount = this.getStagger(frag, index, total, 'leave');
    if (inDocument && staggerAmount) {
      var op = frag.staggerCb = cancellable(function () {
        frag.staggerCb = null;
        frag.remove();
      });
      setTimeout(op, staggerAmount);
    } else {
      frag.remove();
    }
  },

  /**
   * Move a fragment to a new position.
   * Force no transition.
   *
   * @param {Fragment} frag
   * @param {Node} prevEl
   */

  move: function move(frag, prevEl) {
    // fix a common issue with Sortable:
    // if prevEl doesn't have nextSibling, this means it's
    // been dragged after the end anchor. Just re-position
    // the end anchor to the end of the container.
    /* istanbul ignore if */
    if (!prevEl.nextSibling) {
      this.end.parentNode.appendChild(this.end);
    }
    frag.before(prevEl.nextSibling, false);
  },

  /**
   * Cache a fragment using track-by or the object key.
   *
   * @param {*} value
   * @param {Fragment} frag
   * @param {Number} index
   * @param {String} [key]
   */

  cacheFrag: function cacheFrag(value, frag, index, key) {
    var trackByKey = this.params.trackBy;
    var cache = this.cache;
    var primitive = !isObject(value);
    var id;
    if (key || trackByKey || primitive) {
      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
      if (!cache[id]) {
        cache[id] = frag;
      } else if (trackByKey !== '$index') {
        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
      }
    } else {
      id = this.id;
      if (hasOwn(value, id)) {
        if (value[id] === null) {
          value[id] = frag;
        } else {
          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
        }
      } else {
        def(value, id, frag);
      }
    }
    frag.raw = value;
  },

  /**
   * Get a cached fragment from the value/index/key
   *
   * @param {*} value
   * @param {Number} index
   * @param {String} key
   * @return {Fragment}
   */

  getCachedFrag: function getCachedFrag(value, index, key) {
    var trackByKey = this.params.trackBy;
    var primitive = !isObject(value);
    var frag;
    if (key || trackByKey || primitive) {
      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
      frag = this.cache[id];
    } else {
      frag = value[this.id];
    }
    if (frag && (frag.reused || frag.fresh)) {
      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
    }
    return frag;
  },

  /**
   * Delete a fragment from cache.
   *
   * @param {Fragment} frag
   */

  deleteCachedFrag: function deleteCachedFrag(frag) {
    var value = frag.raw;
    var trackByKey = this.params.trackBy;
    var scope = frag.scope;
    var index = scope.$index;
    // fix #948: avoid accidentally fall through to
    // a parent repeater which happens to have $key.
    var key = hasOwn(scope, '$key') && scope.$key;
    var primitive = !isObject(value);
    if (trackByKey || key || primitive) {
      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
      this.cache[id] = null;
    } else {
      value[this.id] = null;
      frag.raw = null;
    }
  },

  /**
   * Get the stagger amount for an insertion/removal.
   *
   * @param {Fragment} frag
   * @param {Number} index
   * @param {Number} total
   * @param {String} type
   */

  getStagger: function getStagger(frag, index, total, type) {
    type = type + 'Stagger';
    var trans = frag.node.__v_trans;
    var hooks = trans && trans.hooks;
    var hook = hooks && (hooks[type] || hooks.stagger);
    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
  },

  /**
   * Pre-process the value before piping it through the
   * filters. This is passed to and called by the watcher.
   */

  _preProcess: function _preProcess(value) {
    // regardless of type, store the un-filtered raw value.
    this.rawValue = value;
    return value;
  },

  /**
   * Post-process the value after it has been piped through
   * the filters. This is passed to and called by the watcher.
   *
   * It is necessary for this to be called during the
   * wathcer's dependency collection phase because we want
   * the v-for to update when the source Object is mutated.
   */

  _postProcess: function _postProcess(value) {
    if (isArray(value)) {
      return value;
    } else if (isPlainObject(value)) {
      // convert plain object to array.
      var keys = Object.keys(value);
      var i = keys.length;
      var res = new Array(i);
      var key;
      while (i--) {
        key = keys[i];
        res[i] = {
          $key: key,
          $value: value[key]
        };
      }
      return res;
    } else {
      if (typeof value === 'number' && !isNaN(value)) {
        value = range(value);
      }
      return value || [];
    }
  },

  unbind: function unbind() {
    if (this.descriptor.ref) {
      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
    }
    if (this.frags) {
      var i = this.frags.length;
      var frag;
      while (i--) {
        frag = this.frags[i];
        this.deleteCachedFrag(frag);
        frag.destroy();
      }
    }
  }
};

/**
 * Helper to find the previous element that is a fragment
 * anchor. This is necessary because a destroyed frag's
 * element could still be lingering in the DOM before its
 * leaving transition finishes, but its inserted flag
 * should have been set to false so we can skip them.
 *
 * If this is a block repeat, we want to make sure we only
 * return frag that is bound to this v-for. (see #929)
 *
 * @param {Fragment} frag
 * @param {Comment|Text} anchor
 * @param {String} id
 * @return {Fragment}
 */

function findPrevFrag(frag, anchor, id) {
  var el = frag.node.previousSibling;
  /* istanbul ignore if */
  if (!el) return;
  frag = el.__v_frag;
  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
    el = el.previousSibling;
    /* istanbul ignore if */
    if (!el) return;
    frag = el.__v_frag;
  }
  return frag;
}

/**
 * Find a vm from a fragment.
 *
 * @param {Fragment} frag
 * @return {Vue|undefined}
 */

function findVmFromFrag(frag) {
  var node = frag.node;
  // handle multi-node frag
  if (frag.end) {
    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
      node = node.nextSibling;
    }
  }
  return node.__vue__;
}

/**
 * Create a range array from given number.
 *
 * @param {Number} n
 * @return {Array}
 */

function range(n) {
  var i = -1;
  var ret = new Array(Math.floor(n));
  while (++i < n) {
    ret[i] = i;
  }
  return ret;
}

if (process.env.NODE_ENV !== 'production') {
  vFor.warnDuplicate = function (value) {
    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
  };
}

var vIf = {

  priority: IF,

  bind: function bind() {
    var el = this.el;
    if (!el.__vue__) {
      // check else block
      var next = el.nextElementSibling;
      if (next && getAttr(next, 'v-else') !== null) {
        remove(next);
        this.elseFactory = new FragmentFactory(next._context || this.vm, next);
      }
      // check main block
      this.anchor = createAnchor('v-if');
      replace(el, this.anchor);
      this.factory = new FragmentFactory(this.vm, el);
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
      this.invalid = true;
    }
  },

  update: function update(value) {
    if (this.invalid) return;
    if (value) {
      if (!this.frag) {
        this.insert();
      }
    } else {
      this.remove();
    }
  },

  insert: function insert() {
    if (this.elseFrag) {
      this.elseFrag.remove();
      this.elseFrag = null;
    }
    this.frag = this.factory.create(this._host, this._scope, this._frag);
    this.frag.before(this.anchor);
  },

  remove: function remove() {
    if (this.frag) {
      this.frag.remove();
      this.frag = null;
    }
    if (this.elseFactory && !this.elseFrag) {
      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
      this.elseFrag.before(this.anchor);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
    if (this.elseFrag) {
      this.elseFrag.destroy();
    }
  }
};

var show = {

  bind: function bind() {
    // check else block
    var next = this.el.nextElementSibling;
    if (next && getAttr(next, 'v-else') !== null) {
      this.elseEl = next;
    }
  },

  update: function update(value) {
    this.apply(this.el, value);
    if (this.elseEl) {
      this.apply(this.elseEl, !value);
    }
  },

  apply: function apply(el, value) {
    if (inDoc(el)) {
      applyTransition(el, value ? 1 : -1, toggle, this.vm);
    } else {
      toggle();
    }
    function toggle() {
      el.style.display = value ? '' : 'none';
    }
  }
};

var text$2 = {

  bind: function bind() {
    var self = this;
    var el = this.el;
    var isRange = el.type === 'range';
    var lazy = this.params.lazy;
    var number = this.params.number;
    var debounce = this.params.debounce;

    // handle composition events.
    //   http://blog.evanyou.me/2014/01/03/composition-event/
    // skip this for Android because it handles composition
    // events quite differently. Android doesn't trigger
    // composition events for language input methods e.g.
    // Chinese, but instead triggers them for spelling
    // suggestions... (see Discussion/#162)
    var composing = false;
    if (!isAndroid && !isRange) {
      this.on('compositionstart', function () {
        composing = true;
      });
      this.on('compositionend', function () {
        composing = false;
        // in IE11 the "compositionend" event fires AFTER
        // the "input" event, so the input handler is blocked
        // at the end... have to call it here.
        //
        // #1327: in lazy mode this is unecessary.
        if (!lazy) {
          self.listener();
        }
      });
    }

    // prevent messing with the input when user is typing,
    // and force update on blur.
    this.focused = false;
    if (!isRange && !lazy) {
      this.on('focus', function () {
        self.focused = true;
      });
      this.on('blur', function () {
        self.focused = false;
      });
    }

    // Now attach the main listener
    this.listener = this.rawListener = function () {
      if (composing || !self._bound) {
        return;
      }
      var val = number || isRange ? toNumber(el.value) : el.value;
      self.set(val);
      // force update on next tick to avoid lock & same value
      // also only update when user is not typing
      nextTick(function () {
        if (self._bound && !self.focused) {
          self.update(self._watcher.value);
        }
      });
    };

    // apply debounce
    if (debounce) {
      this.listener = _debounce(this.listener, debounce);
    }

    // Support jQuery events, since jQuery.trigger() doesn't
    // trigger native events in some cases and some plugins
    // rely on $.trigger()
    //
    // We want to make sure if a listener is attached using
    // jQuery, it is also removed with jQuery, that's why
    // we do the check for each directive instance and
    // store that check result on itself. This also allows
    // easier test coverage control by unsetting the global
    // jQuery variable in tests.
    this.hasjQuery = typeof jQuery === 'function';
    if (this.hasjQuery) {
      var method = jQuery.fn.on ? 'on' : 'bind';
      jQuery(el)[method]('change', this.rawListener);
      if (!lazy) {
        jQuery(el)[method]('input', this.listener);
      }
    } else {
      this.on('change', this.rawListener);
      if (!lazy) {
        this.on('input', this.listener);
      }
    }

    // IE9 doesn't fire input event on backspace/del/cut
    if (!lazy && isIE9) {
      this.on('cut', function () {
        nextTick(self.listener);
      });
      this.on('keyup', function (e) {
        if (e.keyCode === 46 || e.keyCode === 8) {
          self.listener();
        }
      });
    }

    // set initial value if present
    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.value = _toString(value);
  },

  unbind: function unbind() {
    var el = this.el;
    if (this.hasjQuery) {
      var method = jQuery.fn.off ? 'off' : 'unbind';
      jQuery(el)[method]('change', this.listener);
      jQuery(el)[method]('input', this.listener);
    }
  }
};

var radio = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      // value overwrite via v-bind:value
      if (el.hasOwnProperty('_value')) {
        return el._value;
      }
      var val = el.value;
      if (self.params.number) {
        val = toNumber(val);
      }
      return val;
    };

    this.listener = function () {
      self.set(self.getValue());
    };
    this.on('change', this.listener);

    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    this.el.checked = looseEqual(value, this.getValue());
  }
};

var select = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    // method to force update DOM using latest value.
    this.forceUpdate = function () {
      if (self._watcher) {
        self.update(self._watcher.get());
      }
    };

    // check if this is a multiple select
    var multiple = this.multiple = el.hasAttribute('multiple');

    // attach listener
    this.listener = function () {
      var value = getValue(el, multiple);
      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
      self.set(value);
    };
    this.on('change', this.listener);

    // if has initial value, set afterBind
    var initValue = getValue(el, multiple, true);
    if (multiple && initValue.length || !multiple && initValue !== null) {
      this.afterBind = this.listener;
    }

    // All major browsers except Firefox resets
    // selectedIndex with value -1 to 0 when the element
    // is appended to a new parent, therefore we have to
    // force a DOM update whenever that happens...
    this.vm.$on('hook:attached', this.forceUpdate);
  },

  update: function update(value) {
    var el = this.el;
    el.selectedIndex = -1;
    var multi = this.multiple && isArray(value);
    var options = el.options;
    var i = options.length;
    var op, val;
    while (i--) {
      op = options[i];
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      /* eslint-disable eqeqeq */
      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
      /* eslint-enable eqeqeq */
    }
  },

  unbind: function unbind() {
    /* istanbul ignore next */
    this.vm.$off('hook:attached', this.forceUpdate);
  }
};

/**
 * Get select value
 *
 * @param {SelectElement} el
 * @param {Boolean} multi
 * @param {Boolean} init
 * @return {Array|*}
 */

function getValue(el, multi, init) {
  var res = multi ? [] : null;
  var op, val, selected;
  for (var i = 0, l = el.options.length; i < l; i++) {
    op = el.options[i];
    selected = init ? op.hasAttribute('selected') : op.selected;
    if (selected) {
      val = op.hasOwnProperty('_value') ? op._value : op.value;
      if (multi) {
        res.push(val);
      } else {
        return val;
      }
    }
  }
  return res;
}

/**
 * Native Array.indexOf uses strict equal, but in this
 * case we need to match string/numbers with custom equal.
 *
 * @param {Array} arr
 * @param {*} val
 */

function indexOf$1(arr, val) {
  var i = arr.length;
  while (i--) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }
  return -1;
}

var checkbox = {

  bind: function bind() {
    var self = this;
    var el = this.el;

    this.getValue = function () {
      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
    };

    function getBooleanValue() {
      var val = el.checked;
      if (val && el.hasOwnProperty('_trueValue')) {
        return el._trueValue;
      }
      if (!val && el.hasOwnProperty('_falseValue')) {
        return el._falseValue;
      }
      return val;
    }

    this.listener = function () {
      var model = self._watcher.value;
      if (isArray(model)) {
        var val = self.getValue();
        if (el.checked) {
          if (indexOf(model, val) < 0) {
            model.push(val);
          }
        } else {
          model.$remove(val);
        }
      } else {
        self.set(getBooleanValue());
      }
    };

    this.on('change', this.listener);
    if (el.hasAttribute('checked')) {
      this.afterBind = this.listener;
    }
  },

  update: function update(value) {
    var el = this.el;
    if (isArray(value)) {
      el.checked = indexOf(value, this.getValue()) > -1;
    } else {
      if (el.hasOwnProperty('_trueValue')) {
        el.checked = looseEqual(value, el._trueValue);
      } else {
        el.checked = !!value;
      }
    }
  }
};

var handlers = {
  text: text$2,
  radio: radio,
  select: select,
  checkbox: checkbox
};

var model = {

  priority: MODEL,
  twoWay: true,
  handlers: handlers,
  params: ['lazy', 'number', 'debounce'],

  /**
   * Possible elements:
   *   <select>
   *   <textarea>
   *   <input type="*">
   *     - text
   *     - checkbox
   *     - radio
   *     - number
   */

  bind: function bind() {
    // friendly warning...
    this.checkFilters();
    if (this.hasRead && !this.hasWrite) {
      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
    }
    var el = this.el;
    var tag = el.tagName;
    var handler;
    if (tag === 'INPUT') {
      handler = handlers[el.type] || handlers.text;
    } else if (tag === 'SELECT') {
      handler = handlers.select;
    } else if (tag === 'TEXTAREA') {
      handler = handlers.text;
    } else {
      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
      return;
    }
    el.__v_model = this;
    handler.bind.call(this);
    this.update = handler.update;
    this._unbind = handler.unbind;
  },

  /**
   * Check read/write filter stats.
   */

  checkFilters: function checkFilters() {
    var filters = this.filters;
    if (!filters) return;
    var i = filters.length;
    while (i--) {
      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
      if (typeof filter === 'function' || filter.read) {
        this.hasRead = true;
      }
      if (filter.write) {
        this.hasWrite = true;
      }
    }
  },

  unbind: function unbind() {
    this.el.__v_model = null;
    this._unbind && this._unbind();
  }
};

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  'delete': [8, 46],
  up: 38,
  left: 37,
  right: 39,
  down: 40
};

function keyFilter(handler, keys) {
  var codes = keys.map(function (key) {
    var charCode = key.charCodeAt(0);
    if (charCode > 47 && charCode < 58) {
      return parseInt(key, 10);
    }
    if (key.length === 1) {
      charCode = key.toUpperCase().charCodeAt(0);
      if (charCode > 64 && charCode < 91) {
        return charCode;
      }
    }
    return keyCodes[key];
  });
  codes = [].concat.apply([], codes);
  return function keyHandler(e) {
    if (codes.indexOf(e.keyCode) > -1) {
      return handler.call(this, e);
    }
  };
}

function stopFilter(handler) {
  return function stopHandler(e) {
    e.stopPropagation();
    return handler.call(this, e);
  };
}

function preventFilter(handler) {
  return function preventHandler(e) {
    e.preventDefault();
    return handler.call(this, e);
  };
}

function selfFilter(handler) {
  return function selfHandler(e) {
    if (e.target === e.currentTarget) {
      return handler.call(this, e);
    }
  };
}

var on$1 = {

  priority: ON,
  acceptStatement: true,
  keyCodes: keyCodes,

  bind: function bind() {
    // deal with iframes
    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
      var self = this;
      this.iframeBind = function () {
        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
      };
      this.on('load', this.iframeBind);
    }
  },

  update: function update(handler) {
    // stub a noop for v-on with no value,
    // e.g. @mousedown.prevent
    if (!this.descriptor.raw) {
      handler = function () {};
    }

    if (typeof handler !== 'function') {
      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
      return;
    }

    // apply modifiers
    if (this.modifiers.stop) {
      handler = stopFilter(handler);
    }
    if (this.modifiers.prevent) {
      handler = preventFilter(handler);
    }
    if (this.modifiers.self) {
      handler = selfFilter(handler);
    }
    // key filter
    var keys = Object.keys(this.modifiers).filter(function (key) {
      return key !== 'stop' && key !== 'prevent';
    });
    if (keys.length) {
      handler = keyFilter(handler, keys);
    }

    this.reset();
    this.handler = handler;

    if (this.iframeBind) {
      this.iframeBind();
    } else {
      on(this.el, this.arg, this.handler, this.modifiers.capture);
    }
  },

  reset: function reset() {
    var el = this.iframeBind ? this.el.contentWindow : this.el;
    if (this.handler) {
      off(el, this.arg, this.handler);
    }
  },

  unbind: function unbind() {
    this.reset();
  }
};

var prefixes = ['-webkit-', '-moz-', '-ms-'];
var camelPrefixes = ['Webkit', 'Moz', 'ms'];
var importantRE = /!important;?$/;
var propCache = Object.create(null);

var testEl = null;

var style = {

  deep: true,

  update: function update(value) {
    if (typeof value === 'string') {
      this.el.style.cssText = value;
    } else if (isArray(value)) {
      this.handleObject(value.reduce(extend, {}));
    } else {
      this.handleObject(value || {});
    }
  },

  handleObject: function handleObject(value) {
    // cache object styles so that only changed props
    // are actually updated.
    var cache = this.cache || (this.cache = {});
    var name, val;
    for (name in cache) {
      if (!(name in value)) {
        this.handleSingle(name, null);
        delete cache[name];
      }
    }
    for (name in value) {
      val = value[name];
      if (val !== cache[name]) {
        cache[name] = val;
        this.handleSingle(name, val);
      }
    }
  },

  handleSingle: function handleSingle(prop, value) {
    prop = normalize(prop);
    if (!prop) return; // unsupported prop
    // cast possible numbers/booleans into strings
    if (value != null) value += '';
    if (value) {
      var isImportant = importantRE.test(value) ? 'important' : '';
      if (isImportant) {
        value = value.replace(importantRE, '').trim();
      }
      this.el.style.setProperty(prop, value, isImportant);
    } else {
      this.el.style.removeProperty(prop);
    }
  }

};

/**
 * Normalize a CSS property name.
 * - cache result
 * - auto prefix
 * - camelCase -> dash-case
 *
 * @param {String} prop
 * @return {String}
 */

function normalize(prop) {
  if (propCache[prop]) {
    return propCache[prop];
  }
  var res = prefix(prop);
  propCache[prop] = propCache[res] = res;
  return res;
}

/**
 * Auto detect the appropriate prefix for a CSS property.
 * https://gist.github.com/paulirish/523692
 *
 * @param {String} prop
 * @return {String}
 */

function prefix(prop) {
  prop = hyphenate(prop);
  var camel = camelize(prop);
  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
  if (!testEl) {
    testEl = document.createElement('div');
  }
  var i = prefixes.length;
  var prefixed;
  while (i--) {
    prefixed = camelPrefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixes[i] + prop;
    }
  }
  if (camel in testEl.style) {
    return prop;
  }
}

// xlink
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
// these attributes expect enumrated values of "true" or "false"
// but are not boolean attributes
var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;

// these attributes should set a hidden property for
// binding v-model to object values
var modelProps = {
  value: '_value',
  'true-value': '_trueValue',
  'false-value': '_falseValue'
};

var bind$1 = {

  priority: BIND,

  bind: function bind() {
    var attr = this.arg;
    var tag = this.el.tagName;
    // should be deep watch on object mode
    if (!attr) {
      this.deep = true;
    }
    // handle interpolation bindings
    var descriptor = this.descriptor;
    var tokens = descriptor.interp;
    if (tokens) {
      // handle interpolations with one-time tokens
      if (descriptor.hasOneTime) {
        this.expression = tokensToExp(tokens, this._scope || this.vm);
      }

      // only allow binding on native attributes
      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
        this.el.removeAttribute(attr);
        this.invalid = true;
      }

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production') {
        var raw = attr + '="' + descriptor.raw + '": ';
        // warn src
        if (attr === 'src') {
          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
        }

        // warn style
        if (attr === 'style') {
          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
        }
      }
    }
  },

  update: function update(value) {
    if (this.invalid) {
      return;
    }
    var attr = this.arg;
    if (this.arg) {
      this.handleSingle(attr, value);
    } else {
      this.handleObject(value || {});
    }
  },

  // share object handler with v-bind:class
  handleObject: style.handleObject,

  handleSingle: function handleSingle(attr, value) {
    var el = this.el;
    var interp = this.descriptor.interp;
    if (this.modifiers.camel) {
      attr = camelize(attr);
    }
    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
      el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
      ? '' : value : value;
    }
    // set model props
    var modelProp = modelProps[attr];
    if (!interp && modelProp) {
      el[modelProp] = value;
      // update v-model if present
      var model = el.__v_model;
      if (model) {
        model.listener();
      }
    }
    // do not set value attribute for textarea
    if (attr === 'value' && el.tagName === 'TEXTAREA') {
      el.removeAttribute(attr);
      return;
    }
    // update attribute
    if (enumeratedAttrRE.test(attr)) {
      el.setAttribute(attr, value ? 'true' : 'false');
    } else if (value != null && value !== false) {
      if (attr === 'class') {
        // handle edge case #1960:
        // class interpolation should not overwrite Vue transition class
        if (el.__v_trans) {
          value += ' ' + el.__v_trans.id + '-transition';
        }
        setClass(el, value);
      } else if (xlinkRE.test(attr)) {
        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
      } else {
        el.setAttribute(attr, value === true ? '' : value);
      }
    } else {
      el.removeAttribute(attr);
    }
  }
};

var el = {

  priority: EL,

  bind: function bind() {
    /* istanbul ignore if */
    if (!this.arg) {
      return;
    }
    var id = this.id = camelize(this.arg);
    var refs = (this._scope || this.vm).$els;
    if (hasOwn(refs, id)) {
      refs[id] = this.el;
    } else {
      defineReactive(refs, id, this.el);
    }
  },

  unbind: function unbind() {
    var refs = (this._scope || this.vm).$els;
    if (refs[this.id] === this.el) {
      refs[this.id] = null;
    }
  }
};

var ref = {
  bind: function bind() {
    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
  }
};

var cloak = {
  bind: function bind() {
    var el = this.el;
    this.vm.$once('pre-hook:compiled', function () {
      el.removeAttribute('v-cloak');
    });
  }
};

// must export plain object
var directives = {
  text: text$1,
  html: html,
  'for': vFor,
  'if': vIf,
  show: show,
  model: model,
  on: on$1,
  bind: bind$1,
  el: el,
  ref: ref,
  cloak: cloak
};

var vClass = {

  deep: true,

  update: function update(value) {
    if (value && typeof value === 'string') {
      this.handleObject(stringToObject(value));
    } else if (isPlainObject(value)) {
      this.handleObject(value);
    } else if (isArray(value)) {
      this.handleArray(value);
    } else {
      this.cleanup();
    }
  },

  handleObject: function handleObject(value) {
    this.cleanup(value);
    var keys = this.prevKeys = Object.keys(value);
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i];
      if (value[key]) {
        addClass(this.el, key);
      } else {
        removeClass(this.el, key);
      }
    }
  },

  handleArray: function handleArray(value) {
    this.cleanup(value);
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        addClass(this.el, value[i]);
      }
    }
    this.prevKeys = value.slice();
  },

  cleanup: function cleanup(value) {
    if (this.prevKeys) {
      var i = this.prevKeys.length;
      while (i--) {
        var key = this.prevKeys[i];
        if (key && (!value || !contains(value, key))) {
          removeClass(this.el, key);
        }
      }
    }
  }
};

function stringToObject(value) {
  var res = {};
  var keys = value.trim().split(/\s+/);
  var i = keys.length;
  while (i--) {
    res[keys[i]] = true;
  }
  return res;
}

function contains(value, key) {
  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
}

var component = {

  priority: COMPONENT,

  params: ['keep-alive', 'transition-mode', 'inline-template'],

  /**
   * Setup. Two possible usages:
   *
   * - static:
   *   <comp> or <div v-component="comp">
   *
   * - dynamic:
   *   <component :is="view">
   */

  bind: function bind() {
    if (!this.el.__vue__) {
      // keep-alive cache
      this.keepAlive = this.params.keepAlive;
      if (this.keepAlive) {
        this.cache = {};
      }
      // check inline-template
      if (this.params.inlineTemplate) {
        // extract inline template as a DocumentFragment
        this.inlineTemplate = extractContent(this.el, true);
      }
      // component resolution related state
      this.pendingComponentCb = this.Component = null;
      // transition related state
      this.pendingRemovals = 0;
      this.pendingRemovalCb = null;
      // create a ref anchor
      this.anchor = createAnchor('v-component');
      replace(this.el, this.anchor);
      // remove is attribute.
      // this is removed during compilation, but because compilation is
      // cached, when the component is used elsewhere this attribute
      // will remain at link time.
      this.el.removeAttribute('is');
      // remove ref, same as above
      if (this.descriptor.ref) {
        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
      }
      // if static, build right now.
      if (this.literal) {
        this.setComponent(this.expression);
      }
    } else {
      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
    }
  },

  /**
   * Public update, called by the watcher in the dynamic
   * literal scenario, e.g. <component :is="view">
   */

  update: function update(value) {
    if (!this.literal) {
      this.setComponent(value);
    }
  },

  /**
   * Switch dynamic components. May resolve the component
   * asynchronously, and perform transition based on
   * specified transition mode. Accepts a few additional
   * arguments specifically for vue-router.
   *
   * The callback is called when the full transition is
   * finished.
   *
   * @param {String} value
   * @param {Function} [cb]
   */

  setComponent: function setComponent(value, cb) {
    this.invalidatePending();
    if (!value) {
      // just remove current
      this.unbuild(true);
      this.remove(this.childVM, cb);
      this.childVM = null;
    } else {
      var self = this;
      this.resolveComponent(value, function () {
        self.mountComponent(cb);
      });
    }
  },

  /**
   * Resolve the component constructor to use when creating
   * the child vm.
   */

  resolveComponent: function resolveComponent(id, cb) {
    var self = this;
    this.pendingComponentCb = cancellable(function (Component) {
      self.ComponentName = Component.options.name || id;
      self.Component = Component;
      cb();
    });
    this.vm._resolveComponent(id, this.pendingComponentCb);
  },

  /**
   * Create a new instance using the current constructor and
   * replace the existing instance. This method doesn't care
   * whether the new component and the old one are actually
   * the same.
   *
   * @param {Function} [cb]
   */

  mountComponent: function mountComponent(cb) {
    // actual mount
    this.unbuild(true);
    var self = this;
    var activateHooks = this.Component.options.activate;
    var cached = this.getCached();
    var newComponent = this.build();
    if (activateHooks && !cached) {
      this.waitingFor = newComponent;
      callActivateHooks(activateHooks, newComponent, function () {
        if (self.waitingFor !== newComponent) {
          return;
        }
        self.waitingFor = null;
        self.transition(newComponent, cb);
      });
    } else {
      // update ref for kept-alive component
      if (cached) {
        newComponent._updateRef();
      }
      this.transition(newComponent, cb);
    }
  },

  /**
   * When the component changes or unbinds before an async
   * constructor is resolved, we need to invalidate its
   * pending callback.
   */

  invalidatePending: function invalidatePending() {
    if (this.pendingComponentCb) {
      this.pendingComponentCb.cancel();
      this.pendingComponentCb = null;
    }
  },

  /**
   * Instantiate/insert a new child vm.
   * If keep alive and has cached instance, insert that
   * instance; otherwise build a new one and cache it.
   *
   * @param {Object} [extraOptions]
   * @return {Vue} - the created instance
   */

  build: function build(extraOptions) {
    var cached = this.getCached();
    if (cached) {
      return cached;
    }
    if (this.Component) {
      // default options
      var options = {
        name: this.ComponentName,
        el: cloneNode(this.el),
        template: this.inlineTemplate,
        // make sure to add the child with correct parent
        // if this is a transcluded component, its parent
        // should be the transclusion host.
        parent: this._host || this.vm,
        // if no inline-template, then the compiled
        // linker can be cached for better performance.
        _linkerCachable: !this.inlineTemplate,
        _ref: this.descriptor.ref,
        _asComponent: true,
        _isRouterView: this._isRouterView,
        // if this is a transcluded component, context
        // will be the common parent vm of this instance
        // and its host.
        _context: this.vm,
        // if this is inside an inline v-for, the scope
        // will be the intermediate scope created for this
        // repeat fragment. this is used for linking props
        // and container directives.
        _scope: this._scope,
        // pass in the owner fragment of this component.
        // this is necessary so that the fragment can keep
        // track of its contained components in order to
        // call attach/detach hooks for them.
        _frag: this._frag
      };
      // extra options
      // in 1.0.0 this is used by vue-router only
      /* istanbul ignore if */
      if (extraOptions) {
        extend(options, extraOptions);
      }
      var child = new this.Component(options);
      if (this.keepAlive) {
        this.cache[this.Component.cid] = child;
      }
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
      }
      return child;
    }
  },

  /**
   * Try to get a cached instance of the current component.
   *
   * @return {Vue|undefined}
   */

  getCached: function getCached() {
    return this.keepAlive && this.cache[this.Component.cid];
  },

  /**
   * Teardown the current child, but defers cleanup so
   * that we can separate the destroy and removal steps.
   *
   * @param {Boolean} defer
   */

  unbuild: function unbuild(defer) {
    if (this.waitingFor) {
      this.waitingFor.$destroy();
      this.waitingFor = null;
    }
    var child = this.childVM;
    if (!child || this.keepAlive) {
      if (child) {
        // remove ref
        child._updateRef(true);
      }
      return;
    }
    // the sole purpose of `deferCleanup` is so that we can
    // "deactivate" the vm right now and perform DOM removal
    // later.
    child.$destroy(false, defer);
  },

  /**
   * Remove current destroyed child and manually do
   * the cleanup after removal.
   *
   * @param {Function} cb
   */

  remove: function remove(child, cb) {
    var keepAlive = this.keepAlive;
    if (child) {
      // we may have a component switch when a previous
      // component is still being transitioned out.
      // we want to trigger only one lastest insertion cb
      // when the existing transition finishes. (#1119)
      this.pendingRemovals++;
      this.pendingRemovalCb = cb;
      var self = this;
      child.$remove(function () {
        self.pendingRemovals--;
        if (!keepAlive) child._cleanup();
        if (!self.pendingRemovals && self.pendingRemovalCb) {
          self.pendingRemovalCb();
          self.pendingRemovalCb = null;
        }
      });
    } else if (cb) {
      cb();
    }
  },

  /**
   * Actually swap the components, depending on the
   * transition mode. Defaults to simultaneous.
   *
   * @param {Vue} target
   * @param {Function} [cb]
   */

  transition: function transition(target, cb) {
    var self = this;
    var current = this.childVM;
    // for devtool inspection
    if (process.env.NODE_ENV !== 'production') {
      if (current) current._inactive = true;
      target._inactive = false;
    }
    this.childVM = target;
    switch (self.params.transitionMode) {
      case 'in-out':
        target.$before(self.anchor, function () {
          self.remove(current, cb);
        });
        break;
      case 'out-in':
        self.remove(current, function () {
          target.$before(self.anchor, cb);
        });
        break;
      default:
        self.remove(current);
        target.$before(self.anchor, cb);
    }
  },

  /**
   * Unbind.
   */

  unbind: function unbind() {
    this.invalidatePending();
    // Do not defer cleanup when unbinding
    this.unbuild();
    // destroy all keep-alive cached instances
    if (this.cache) {
      for (var key in this.cache) {
        this.cache[key].$destroy();
      }
      this.cache = null;
    }
  }
};

/**
 * Call activate hooks in order (asynchronous)
 *
 * @param {Array} hooks
 * @param {Vue} vm
 * @param {Function} cb
 */

function callActivateHooks(hooks, vm, cb) {
  var total = hooks.length;
  var called = 0;
  hooks[0].call(vm, next);
  function next() {
    if (++called >= total) {
      cb();
    } else {
      hooks[called].call(vm, next);
    }
  }
}

var bindingModes = config._propBindingModes;

var propDef = {

  bind: function bind() {
    var child = this.vm;
    var parent = child._context;
    // passed in from compiler directly
    var prop = this.descriptor.prop;
    var childKey = prop.path;
    var parentKey = prop.parentPath;
    var twoWay = prop.mode === bindingModes.TWO_WAY;

    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
      val = coerceProp(prop, val);
      if (assertProp(prop, val)) {
        child[childKey] = val;
      }
    }, {
      twoWay: twoWay,
      filters: prop.filters,
      // important: props need to be observed on the
      // v-for scope if present
      scope: this._scope
    });

    // set the child initial value.
    initProp(child, prop, parentWatcher.value);

    // setup two-way binding
    if (twoWay) {
      // important: defer the child watcher creation until
      // the created hook (after data observation)
      var self = this;
      child.$once('pre-hook:created', function () {
        self.childWatcher = new Watcher(child, childKey, function (val) {
          parentWatcher.set(val);
        }, {
          // ensure sync upward before parent sync down.
          // this is necessary in cases e.g. the child
          // mutates a prop array, then replaces it. (#1683)
          sync: true
        });
      });
    }
  },

  unbind: function unbind() {
    this.parentWatcher.teardown();
    if (this.childWatcher) {
      this.childWatcher.teardown();
    }
  }
};

var queue$1 = [];
var queued = false;

/**
 * Push a job into the queue.
 *
 * @param {Function} job
 */

function pushJob(job) {
  queue$1.push(job);
  if (!queued) {
    queued = true;
    nextTick(flush);
  }
}

/**
 * Flush the queue, and do one forced reflow before
 * triggering transitions.
 */

function flush() {
  // Force layout
  var f = document.documentElement.offsetHeight;
  for (var i = 0; i < queue$1.length; i++) {
    queue$1[i]();
  }
  queue$1 = [];
  queued = false;
  // dummy return, so js linters don't complain about
  // unused variable f
  return f;
}

var TYPE_TRANSITION = 'transition';
var TYPE_ANIMATION = 'animation';
var transDurationProp = transitionProp + 'Duration';
var animDurationProp = animationProp + 'Duration';

/**
 * A Transition object that encapsulates the state and logic
 * of the transition.
 *
 * @param {Element} el
 * @param {String} id
 * @param {Object} hooks
 * @param {Vue} vm
 */
function Transition(el, id, hooks, vm) {
  this.id = id;
  this.el = el;
  this.enterClass = hooks && hooks.enterClass || id + '-enter';
  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
  this.hooks = hooks;
  this.vm = vm;
  // async state
  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
  this.justEntered = false;
  this.entered = this.left = false;
  this.typeCache = {};
  // check css transition type
  this.type = hooks && hooks.type;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production') {
    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
    }
  }
  // bind
  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
    self[m] = bind(self[m], self);
  });
}

var p$1 = Transition.prototype;

/**
 * Start an entering transition.
 *
 * 1. enter transition triggered
 * 2. call beforeEnter hook
 * 3. add enter class
 * 4. insert/show element
 * 5. call enter hook (with possible explicit js callback)
 * 6. reflow
 * 7. based on transition type:
 *    - transition:
 *        remove class now, wait for transitionend,
 *        then done if there's no explicit js callback.
 *    - animation:
 *        wait for animationend, remove class,
 *        then done if there's no explicit js callback.
 *    - no css transition:
 *        done now if there's no explicit js callback.
 * 8. wait for either done or js callback, then call
 *    afterEnter hook.
 *
 * @param {Function} op - insert/show the element
 * @param {Function} [cb]
 */

p$1.enter = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeEnter');
  this.cb = cb;
  addClass(this.el, this.enterClass);
  op();
  this.entered = false;
  this.callHookWithCb('enter');
  if (this.entered) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.enterCancelled;
  pushJob(this.enterNextTick);
};

/**
 * The "nextTick" phase of an entering transition, which is
 * to be pushed into a queue and executed after a reflow so
 * that removing the class can trigger a CSS transition.
 */

p$1.enterNextTick = function () {
  // Important hack:
  // in Chrome, if a just-entered element is applied the
  // leave class while its interpolated property still has
  // a very small value (within one frame), Chrome will
  // skip the leave transition entirely and not firing the
  // transtionend event. Therefore we need to protected
  // against such cases using a one-frame timeout.
  this.justEntered = true;
  var self = this;
  setTimeout(function () {
    self.justEntered = false;
  }, 17);

  var enterDone = this.enterDone;
  var type = this.getCssTransitionType(this.enterClass);
  if (!this.pendingJsCb) {
    if (type === TYPE_TRANSITION) {
      // trigger transition by removing enter class now
      removeClass(this.el, this.enterClass);
      this.setupCssCb(transitionEndEvent, enterDone);
    } else if (type === TYPE_ANIMATION) {
      this.setupCssCb(animationEndEvent, enterDone);
    } else {
      enterDone();
    }
  } else if (type === TYPE_TRANSITION) {
    removeClass(this.el, this.enterClass);
  }
};

/**
 * The "cleanup" phase of an entering transition.
 */

p$1.enterDone = function () {
  this.entered = true;
  this.cancel = this.pendingJsCb = null;
  removeClass(this.el, this.enterClass);
  this.callHook('afterEnter');
  if (this.cb) this.cb();
};

/**
 * Start a leaving transition.
 *
 * 1. leave transition triggered.
 * 2. call beforeLeave hook
 * 3. add leave class (trigger css transition)
 * 4. call leave hook (with possible explicit js callback)
 * 5. reflow if no explicit js callback is provided
 * 6. based on transition type:
 *    - transition or animation:
 *        wait for end event, remove class, then done if
 *        there's no explicit js callback.
 *    - no css transition:
 *        done if there's no explicit js callback.
 * 7. wait for either done or js callback, then call
 *    afterLeave hook.
 *
 * @param {Function} op - remove/hide the element
 * @param {Function} [cb]
 */

p$1.leave = function (op, cb) {
  this.cancelPending();
  this.callHook('beforeLeave');
  this.op = op;
  this.cb = cb;
  addClass(this.el, this.leaveClass);
  this.left = false;
  this.callHookWithCb('leave');
  if (this.left) {
    return; // user called done synchronously.
  }
  this.cancel = this.hooks && this.hooks.leaveCancelled;
  // only need to handle leaveDone if
  // 1. the transition is already done (synchronously called
  //    by the user, which causes this.op set to null)
  // 2. there's no explicit js callback
  if (this.op && !this.pendingJsCb) {
    // if a CSS transition leaves immediately after enter,
    // the transitionend event never fires. therefore we
    // detect such cases and end the leave immediately.
    if (this.justEntered) {
      this.leaveDone();
    } else {
      pushJob(this.leaveNextTick);
    }
  }
};

/**
 * The "nextTick" phase of a leaving transition.
 */

p$1.leaveNextTick = function () {
  var type = this.getCssTransitionType(this.leaveClass);
  if (type) {
    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
    this.setupCssCb(event, this.leaveDone);
  } else {
    this.leaveDone();
  }
};

/**
 * The "cleanup" phase of a leaving transition.
 */

p$1.leaveDone = function () {
  this.left = true;
  this.cancel = this.pendingJsCb = null;
  this.op();
  removeClass(this.el, this.leaveClass);
  this.callHook('afterLeave');
  if (this.cb) this.cb();
  this.op = null;
};

/**
 * Cancel any pending callbacks from a previously running
 * but not finished transition.
 */

p$1.cancelPending = function () {
  this.op = this.cb = null;
  var hasPending = false;
  if (this.pendingCssCb) {
    hasPending = true;
    off(this.el, this.pendingCssEvent, this.pendingCssCb);
    this.pendingCssEvent = this.pendingCssCb = null;
  }
  if (this.pendingJsCb) {
    hasPending = true;
    this.pendingJsCb.cancel();
    this.pendingJsCb = null;
  }
  if (hasPending) {
    removeClass(this.el, this.enterClass);
    removeClass(this.el, this.leaveClass);
  }
  if (this.cancel) {
    this.cancel.call(this.vm, this.el);
    this.cancel = null;
  }
};

/**
 * Call a user-provided synchronous hook function.
 *
 * @param {String} type
 */

p$1.callHook = function (type) {
  if (this.hooks && this.hooks[type]) {
    this.hooks[type].call(this.vm, this.el);
  }
};

/**
 * Call a user-provided, potentially-async hook function.
 * We check for the length of arguments to see if the hook
 * expects a `done` callback. If true, the transition's end
 * will be determined by when the user calls that callback;
 * otherwise, the end is determined by the CSS transition or
 * animation.
 *
 * @param {String} type
 */

p$1.callHookWithCb = function (type) {
  var hook = this.hooks && this.hooks[type];
  if (hook) {
    if (hook.length > 1) {
      this.pendingJsCb = cancellable(this[type + 'Done']);
    }
    hook.call(this.vm, this.el, this.pendingJsCb);
  }
};

/**
 * Get an element's transition type based on the
 * calculated styles.
 *
 * @param {String} className
 * @return {Number}
 */

p$1.getCssTransitionType = function (className) {
  /* istanbul ignore if */
  if (!transitionEndEvent ||
  // skip CSS transitions if page is not visible -
  // this solves the issue of transitionend events not
  // firing until the page is visible again.
  // pageVisibility API is supported in IE10+, same as
  // CSS transitions.
  document.hidden ||
  // explicit js-only transition
  this.hooks && this.hooks.css === false ||
  // element is hidden
  isHidden(this.el)) {
    return;
  }
  var type = this.type || this.typeCache[className];
  if (type) return type;
  var inlineStyles = this.el.style;
  var computedStyles = window.getComputedStyle(this.el);
  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
  if (transDuration && transDuration !== '0s') {
    type = TYPE_TRANSITION;
  } else {
    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
    if (animDuration && animDuration !== '0s') {
      type = TYPE_ANIMATION;
    }
  }
  if (type) {
    this.typeCache[className] = type;
  }
  return type;
};

/**
 * Setup a CSS transitionend/animationend callback.
 *
 * @param {String} event
 * @param {Function} cb
 */

p$1.setupCssCb = function (event, cb) {
  this.pendingCssEvent = event;
  var self = this;
  var el = this.el;
  var onEnd = this.pendingCssCb = function (e) {
    if (e.target === el) {
      off(el, event, onEnd);
      self.pendingCssEvent = self.pendingCssCb = null;
      if (!self.pendingJsCb && cb) {
        cb();
      }
    }
  };
  on(el, event, onEnd);
};

/**
 * Check if an element is hidden - in that case we can just
 * skip the transition alltogether.
 *
 * @param {Element} el
 * @return {Boolean}
 */

function isHidden(el) {
  if (/svg$/.test(el.namespaceURI)) {
    // SVG elements do not have offset(Width|Height)
    // so we need to check the client rect
    var rect = el.getBoundingClientRect();
    return !(rect.width || rect.height);
  } else {
    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
  }
}

var transition$1 = {

  priority: TRANSITION,

  update: function update(id, oldId) {
    var el = this.el;
    // resolve on owner vm
    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
    id = id || 'v';
    el.__v_trans = new Transition(el, id, hooks, this.vm);
    if (oldId) {
      removeClass(el, oldId + '-transition');
    }
    addClass(el, id + '-transition');
  }
};

var internalDirectives = {
  style: style,
  'class': vClass,
  component: component,
  prop: propDef,
  transition: transition$1
};

var propBindingModes = config._propBindingModes;
var empty = {};

// regexes
var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

/**
 * Compile props on a root element and return
 * a props link function.
 *
 * @param {Element|DocumentFragment} el
 * @param {Array} propOptions
 * @return {Function} propsLinkFn
 */

function compileProps(el, propOptions) {
  var props = [];
  var names = Object.keys(propOptions);
  var i = names.length;
  var options, name, attr, value, path, parsed, prop;
  while (i--) {
    name = names[i];
    options = propOptions[name] || empty;

    if (process.env.NODE_ENV !== 'production' && name === '$data') {
      warn('Do not use $data as prop.');
      continue;
    }

    // props could contain dashes, which will be
    // interpreted as minus calculations by the parser
    // so we need to camelize the path here
    path = camelize(name);
    if (!identRE$1.test(path)) {
      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
      continue;
    }

    prop = {
      name: name,
      path: path,
      options: options,
      mode: propBindingModes.ONE_WAY,
      raw: null
    };

    attr = hyphenate(name);
    // first check dynamic version
    if ((value = getBindAttr(el, attr)) === null) {
      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
        prop.mode = propBindingModes.TWO_WAY;
      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
        prop.mode = propBindingModes.ONE_TIME;
      }
    }
    if (value !== null) {
      // has dynamic binding!
      prop.raw = value;
      parsed = parseDirective(value);
      value = parsed.expression;
      prop.filters = parsed.filters;
      // check binding type
      if (isLiteral(value) && !parsed.filters) {
        // for expressions containing literal numbers and
        // booleans, there's no need to setup a prop binding,
        // so we can optimize them as a one-time set.
        prop.optimizedLiteral = true;
      } else {
        prop.dynamic = true;
        // check non-settable path for two-way bindings
        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
          prop.mode = propBindingModes.ONE_WAY;
          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
        }
      }
      prop.parentPath = value;

      // warn required two-way
      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
        warn('Prop "' + name + '" expects a two-way binding type.');
      }
    } else if ((value = getAttr(el, attr)) !== null) {
      // has literal binding!
      prop.raw = value;
    } else if (process.env.NODE_ENV !== 'production') {
      // check possible camelCase prop usage
      var lowerCaseName = path.toLowerCase();
      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
      if (value) {
        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.');
      } else if (options.required) {
        // warn missing required
        warn('Missing required prop: ' + name);
      }
    }
    // push prop
    props.push(prop);
  }
  return makePropsLinkFn(props);
}

/**
 * Build a function that applies props to a vm.
 *
 * @param {Array} props
 * @return {Function} propsLinkFn
 */

function makePropsLinkFn(props) {
  return function propsLinkFn(vm, scope) {
    // store resolved props info
    vm._props = {};
    var i = props.length;
    var prop, path, options, value, raw;
    while (i--) {
      prop = props[i];
      raw = prop.raw;
      path = prop.path;
      options = prop.options;
      vm._props[path] = prop;
      if (raw === null) {
        // initialize absent prop
        initProp(vm, prop, getDefault(vm, options));
      } else if (prop.dynamic) {
        // dynamic prop
        if (prop.mode === propBindingModes.ONE_TIME) {
          // one time binding
          value = (scope || vm._context || vm).$get(prop.parentPath);
          initProp(vm, prop, value);
        } else {
          if (vm._context) {
            // dynamic binding
            vm._bindDir({
              name: 'prop',
              def: propDef,
              prop: prop
            }, null, null, scope); // el, host, scope
          } else {
              // root instance
              initProp(vm, prop, vm.$get(prop.parentPath));
            }
        }
      } else if (prop.optimizedLiteral) {
        // optimized literal, cast it and just set once
        var stripped = stripQuotes(raw);
        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
        initProp(vm, prop, value);
      } else {
        // string literal, but we need to cater for
        // Boolean props with no value
        value = options.type === Boolean && raw === '' ? true : raw;
        initProp(vm, prop, value);
      }
    }
  };
}

/**
 * Get the default value of a prop.
 *
 * @param {Vue} vm
 * @param {Object} options
 * @return {*}
 */

function getDefault(vm, options) {
  // no default, return undefined
  if (!hasOwn(options, 'default')) {
    // absent boolean value defaults to false
    return options.type === Boolean ? false : undefined;
  }
  var def = options['default'];
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
  }
  // call factory function for non-Function types
  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
}

// special binding prefixes
var bindRE = /^v-bind:|^:/;
var onRE = /^v-on:|^@/;
var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
var modifierRE = /\.[^\.]+/g;
var transitionRE = /^(v-bind:|:)?transition$/;

// terminal directives
var terminalDirectives = ['for', 'if'];

// default directive priority
var DEFAULT_PRIORITY = 1000;

/**
 * Compile a template and return a reusable composite link
 * function, which recursively contains more link functions
 * inside. This top level compile function would normally
 * be called on instance root nodes, but can also be used
 * for partial compilation if the partial argument is true.
 *
 * The returned composite link function, when called, will
 * return an unlink function that tearsdown all directives
 * created during the linking phase.
 *
 * @param {Element|DocumentFragment} el
 * @param {Object} options
 * @param {Boolean} partial
 * @return {Function}
 */

function compile(el, options, partial) {
  // link function for the node itself.
  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
  // link function for the childNodes
  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

  /**
   * A composite linker function to be called on a already
   * compiled piece of DOM, which instantiates all directive
   * instances.
   *
   * @param {Vue} vm
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host] - host vm of transcluded content
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - link context fragment
   * @return {Function|undefined}
   */

  return function compositeLinkFn(vm, el, host, scope, frag) {
    // cache childNodes before linking parent, fix #657
    var childNodes = toArray(el.childNodes);
    // link
    var dirs = linkAndCapture(function compositeLinkCapturer() {
      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
    }, vm);
    return makeUnlinkFn(vm, dirs);
  };
}

/**
 * Apply a linker to a vm/element pair and capture the
 * directives created during the process.
 *
 * @param {Function} linker
 * @param {Vue} vm
 */

function linkAndCapture(linker, vm) {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // reset directives before every capture in production
    // mode, so that when unlinking we don't need to splice
    // them out (which turns out to be a perf hit).
    // they are kept in development mode because they are
    // useful for Vue's own tests.
    vm._directives = [];
  }
  var originalDirCount = vm._directives.length;
  linker();
  var dirs = vm._directives.slice(originalDirCount);
  dirs.sort(directiveComparator);
  for (var i = 0, l = dirs.length; i < l; i++) {
    dirs[i]._bind();
  }
  return dirs;
}

/**
 * Directive priority sort comparator
 *
 * @param {Object} a
 * @param {Object} b
 */

function directiveComparator(a, b) {
  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
  return a > b ? -1 : a === b ? 0 : 1;
}

/**
 * Linker functions return an unlink function that
 * tearsdown all directives instances generated during
 * the process.
 *
 * We create unlink functions with only the necessary
 * information to avoid retaining additional closures.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Vue} [context]
 * @param {Array} [contextDirs]
 * @return {Function}
 */

function makeUnlinkFn(vm, dirs, context, contextDirs) {
  function unlink(destroying) {
    teardownDirs(vm, dirs, destroying);
    if (context && contextDirs) {
      teardownDirs(context, contextDirs);
    }
  }
  // expose linked directives
  unlink.dirs = dirs;
  return unlink;
}

/**
 * Teardown partial linked directives.
 *
 * @param {Vue} vm
 * @param {Array} dirs
 * @param {Boolean} destroying
 */

function teardownDirs(vm, dirs, destroying) {
  var i = dirs.length;
  while (i--) {
    dirs[i]._teardown();
    if (process.env.NODE_ENV !== 'production' && !destroying) {
      vm._directives.$remove(dirs[i]);
    }
  }
}

/**
 * Compile link props on an instance.
 *
 * @param {Vue} vm
 * @param {Element} el
 * @param {Object} props
 * @param {Object} [scope]
 * @return {Function}
 */

function compileAndLinkProps(vm, el, props, scope) {
  var propsLinkFn = compileProps(el, props);
  var propDirs = linkAndCapture(function () {
    propsLinkFn(vm, scope);
  }, vm);
  return makeUnlinkFn(vm, propDirs);
}

/**
 * Compile the root element of an instance.
 *
 * 1. attrs on context container (context scope)
 * 2. attrs on the component template root node, if
 *    replace:true (child scope)
 *
 * If this is a fragment instance, we only need to compile 1.
 *
 * @param {Element} el
 * @param {Object} options
 * @param {Object} contextOptions
 * @return {Function}
 */

function compileRoot(el, options, contextOptions) {
  var containerAttrs = options._containerAttrs;
  var replacerAttrs = options._replacerAttrs;
  var contextLinkFn, replacerLinkFn;

  // only need to compile other attributes for
  // non-fragment instances
  if (el.nodeType !== 11) {
    // for components, container and replacer need to be
    // compiled separately and linked in different scopes.
    if (options._asComponent) {
      // 2. container attributes
      if (containerAttrs && contextOptions) {
        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
      }
      if (replacerAttrs) {
        // 3. replacer attributes
        replacerLinkFn = compileDirectives(replacerAttrs, options);
      }
    } else {
      // non-component, just compile as a normal element.
      replacerLinkFn = compileDirectives(el.attributes, options);
    }
  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
    // warn container directives for fragment instances
    var names = containerAttrs.filter(function (attr) {
      // allow vue-loader/vueify scoped css attributes
      return attr.name.indexOf('_v-') < 0 &&
      // allow event listeners
      !onRE.test(attr.name) &&
      // allow slots
      attr.name !== 'slot';
    }).map(function (attr) {
      return '"' + attr.name + '"';
    });
    if (names.length) {
      var plural = names.length > 1;
      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
    }
  }

  options._containerAttrs = options._replacerAttrs = null;
  return function rootLinkFn(vm, el, scope) {
    // link context scope dirs
    var context = vm._context;
    var contextDirs;
    if (context && contextLinkFn) {
      contextDirs = linkAndCapture(function () {
        contextLinkFn(context, el, null, scope);
      }, context);
    }

    // link self
    var selfDirs = linkAndCapture(function () {
      if (replacerLinkFn) replacerLinkFn(vm, el);
    }, vm);

    // return the unlink function that tearsdown context
    // container directives.
    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
  };
}

/**
 * Compile a node and return a nodeLinkFn based on the
 * node type.
 *
 * @param {Node} node
 * @param {Object} options
 * @return {Function|null}
 */

function compileNode(node, options) {
  var type = node.nodeType;
  if (type === 1 && node.tagName !== 'SCRIPT') {
    return compileElement(node, options);
  } else if (type === 3 && node.data.trim()) {
    return compileTextNode(node, options);
  } else {
    return null;
  }
}

/**
 * Compile an element and return a nodeLinkFn.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|null}
 */

function compileElement(el, options) {
  // preprocess textareas.
  // textarea treats its text content as the initial value.
  // just bind it as an attr directive for value.
  if (el.tagName === 'TEXTAREA') {
    var tokens = parseText(el.value);
    if (tokens) {
      el.setAttribute(':value', tokensToExp(tokens));
      el.value = '';
    }
  }
  var linkFn;
  var hasAttrs = el.hasAttributes();
  // check terminal directives (for & if)
  if (hasAttrs) {
    linkFn = checkTerminalDirectives(el, options);
  }
  // check element directives
  if (!linkFn) {
    linkFn = checkElementDirectives(el, options);
  }
  // check component
  if (!linkFn) {
    linkFn = checkComponent(el, options);
  }
  // normal directives
  if (!linkFn && hasAttrs) {
    linkFn = compileDirectives(el.attributes, options);
  }
  return linkFn;
}

/**
 * Compile a textNode and return a nodeLinkFn.
 *
 * @param {TextNode} node
 * @param {Object} options
 * @return {Function|null} textNodeLinkFn
 */

function compileTextNode(node, options) {
  // skip marked text nodes
  if (node._skip) {
    return removeText;
  }

  var tokens = parseText(node.wholeText);
  if (!tokens) {
    return null;
  }

  // mark adjacent text nodes as skipped,
  // because we are using node.wholeText to compile
  // all adjacent text nodes together. This fixes
  // issues in IE where sometimes it splits up a single
  // text node into multiple ones.
  var next = node.nextSibling;
  while (next && next.nodeType === 3) {
    next._skip = true;
    next = next.nextSibling;
  }

  var frag = document.createDocumentFragment();
  var el, token;
  for (var i = 0, l = tokens.length; i < l; i++) {
    token = tokens[i];
    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
    frag.appendChild(el);
  }
  return makeTextNodeLinkFn(tokens, frag, options);
}

/**
 * Linker for an skipped text node.
 *
 * @param {Vue} vm
 * @param {Text} node
 */

function removeText(vm, node) {
  remove(node);
}

/**
 * Process a single text token.
 *
 * @param {Object} token
 * @param {Object} options
 * @return {Node}
 */

function processTextToken(token, options) {
  var el;
  if (token.oneTime) {
    el = document.createTextNode(token.value);
  } else {
    if (token.html) {
      el = document.createComment('v-html');
      setTokenType('html');
    } else {
      // IE will clean up empty textNodes during
      // frag.cloneNode(true), so we have to give it
      // something here...
      el = document.createTextNode(' ');
      setTokenType('text');
    }
  }
  function setTokenType(type) {
    if (token.descriptor) return;
    var parsed = parseDirective(token.value);
    token.descriptor = {
      name: type,
      def: directives[type],
      expression: parsed.expression,
      filters: parsed.filters
    };
  }
  return el;
}

/**
 * Build a function that processes a textNode.
 *
 * @param {Array<Object>} tokens
 * @param {DocumentFragment} frag
 */

function makeTextNodeLinkFn(tokens, frag) {
  return function textNodeLinkFn(vm, el, host, scope) {
    var fragClone = frag.cloneNode(true);
    var childNodes = toArray(fragClone.childNodes);
    var token, value, node;
    for (var i = 0, l = tokens.length; i < l; i++) {
      token = tokens[i];
      value = token.value;
      if (token.tag) {
        node = childNodes[i];
        if (token.oneTime) {
          value = (scope || vm).$eval(value);
          if (token.html) {
            replace(node, parseTemplate(value, true));
          } else {
            node.data = value;
          }
        } else {
          vm._bindDir(token.descriptor, node, host, scope);
        }
      }
    }
    replace(el, fragClone);
  };
}

/**
 * Compile a node list and return a childLinkFn.
 *
 * @param {NodeList} nodeList
 * @param {Object} options
 * @return {Function|undefined}
 */

function compileNodeList(nodeList, options) {
  var linkFns = [];
  var nodeLinkFn, childLinkFn, node;
  for (var i = 0, l = nodeList.length; i < l; i++) {
    node = nodeList[i];
    nodeLinkFn = compileNode(node, options);
    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
    linkFns.push(nodeLinkFn, childLinkFn);
  }
  return linkFns.length ? makeChildLinkFn(linkFns) : null;
}

/**
 * Make a child link function for a node's childNodes.
 *
 * @param {Array<Function>} linkFns
 * @return {Function} childLinkFn
 */

function makeChildLinkFn(linkFns) {
  return function childLinkFn(vm, nodes, host, scope, frag) {
    var node, nodeLinkFn, childrenLinkFn;
    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
      node = nodes[n];
      nodeLinkFn = linkFns[i++];
      childrenLinkFn = linkFns[i++];
      // cache childNodes before linking parent, fix #657
      var childNodes = toArray(node.childNodes);
      if (nodeLinkFn) {
        nodeLinkFn(vm, node, host, scope, frag);
      }
      if (childrenLinkFn) {
        childrenLinkFn(vm, childNodes, host, scope, frag);
      }
    }
  };
}

/**
 * Check for element directives (custom elements that should
 * be resovled as terminal directives).
 *
 * @param {Element} el
 * @param {Object} options
 */

function checkElementDirectives(el, options) {
  var tag = el.tagName.toLowerCase();
  if (commonTagRE.test(tag)) {
    return;
  }
  var def = resolveAsset(options, 'elementDirectives', tag);
  if (def) {
    return makeTerminalNodeLinkFn(el, tag, '', options, def);
  }
}

/**
 * Check if an element is a component. If yes, return
 * a component link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function|undefined}
 */

function checkComponent(el, options) {
  var component = checkComponentAttr(el, options);
  if (component) {
    var ref = findRef(el);
    var descriptor = {
      name: 'component',
      ref: ref,
      expression: component.id,
      def: internalDirectives.component,
      modifiers: {
        literal: !component.dynamic
      }
    };
    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
      if (ref) {
        defineReactive((scope || vm).$refs, ref, null);
      }
      vm._bindDir(descriptor, el, host, scope, frag);
    };
    componentLinkFn.terminal = true;
    return componentLinkFn;
  }
}

/**
 * Check an element for terminal directives in fixed order.
 * If it finds one, return a terminal link function.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Function} terminalLinkFn
 */

function checkTerminalDirectives(el, options) {
  // skip v-pre
  if (getAttr(el, 'v-pre') !== null) {
    return skip;
  }
  // skip v-else block, but only if following v-if
  if (el.hasAttribute('v-else')) {
    var prev = el.previousElementSibling;
    if (prev && prev.hasAttribute('v-if')) {
      return skip;
    }
  }
  var value, dirName;
  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
    dirName = terminalDirectives[i];
    value = el.getAttribute('v-' + dirName);
    if (value != null) {
      return makeTerminalNodeLinkFn(el, dirName, value, options);
    }
  }
}

function skip() {}
skip.terminal = true;

/**
 * Build a node link function for a terminal directive.
 * A terminal link function terminates the current
 * compilation recursion and handles compilation of the
 * subtree in the directive.
 *
 * @param {Element} el
 * @param {String} dirName
 * @param {String} value
 * @param {Object} options
 * @param {Object} [def]
 * @return {Function} terminalLinkFn
 */

function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
  var parsed = parseDirective(value);
  var descriptor = {
    name: dirName,
    expression: parsed.expression,
    filters: parsed.filters,
    raw: value,
    // either an element directive, or if/for
    // #2366 or custom terminal directive
    def: def || resolveAsset(options, 'directives', dirName)
  };
  // check ref for v-for and router-view
  if (dirName === 'for' || dirName === 'router-view') {
    descriptor.ref = findRef(el);
  }
  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
    if (descriptor.ref) {
      defineReactive((scope || vm).$refs, descriptor.ref, null);
    }
    vm._bindDir(descriptor, el, host, scope, frag);
  };
  fn.terminal = true;
  return fn;
}

/**
 * Compile the directives on an element and return a linker.
 *
 * @param {Array|NamedNodeMap} attrs
 * @param {Object} options
 * @return {Function}
 */

function compileDirectives(attrs, options) {
  var i = attrs.length;
  var dirs = [];
  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
  while (i--) {
    attr = attrs[i];
    name = rawName = attr.name;
    value = rawValue = attr.value;
    tokens = parseText(value);
    // reset arg
    arg = null;
    // check modifiers
    modifiers = parseModifiers(name);
    name = name.replace(modifierRE, '');

    // attribute interpolations
    if (tokens) {
      value = tokensToExp(tokens);
      arg = name;
      pushDir('bind', directives.bind, tokens);
      // warn against mixing mustaches with v-bind
      if (process.env.NODE_ENV !== 'production') {
        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
          return attr.name === ':class' || attr.name === 'v-bind:class';
        })) {
          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
        }
      }
    } else

      // special attribute: transition
      if (transitionRE.test(name)) {
        modifiers.literal = !bindRE.test(name);
        pushDir('transition', internalDirectives.transition);
      } else

        // event handlers
        if (onRE.test(name)) {
          arg = name.replace(onRE, '');
          pushDir('on', directives.on);
        } else

          // attribute bindings
          if (bindRE.test(name)) {
            dirName = name.replace(bindRE, '');
            if (dirName === 'style' || dirName === 'class') {
              pushDir(dirName, internalDirectives[dirName]);
            } else {
              arg = dirName;
              pushDir('bind', directives.bind);
            }
          } else

            // normal directives
            if (matched = name.match(dirAttrRE)) {
              dirName = matched[1];
              arg = matched[2];

              // skip v-else (when used with v-show)
              if (dirName === 'else') {
                continue;
              }

              dirDef = resolveAsset(options, 'directives', dirName);

              if (process.env.NODE_ENV !== 'production') {
                assertAsset(dirDef, 'directive', dirName);
              }

              if (dirDef) {
                pushDir(dirName, dirDef);
              }
            }
  }

  /**
   * Push a directive.
   *
   * @param {String} dirName
   * @param {Object|Function} def
   * @param {Array} [interpTokens]
   */

  function pushDir(dirName, def, interpTokens) {
    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
    var parsed = !hasOneTimeToken && parseDirective(value);
    dirs.push({
      name: dirName,
      attr: rawName,
      raw: rawValue,
      def: def,
      arg: arg,
      modifiers: modifiers,
      // conversion from interpolation strings with one-time token
      // to expression is differed until directive bind time so that we
      // have access to the actual vm context for one-time bindings.
      expression: parsed && parsed.expression,
      filters: parsed && parsed.filters,
      interp: interpTokens,
      hasOneTime: hasOneTimeToken
    });
  }

  if (dirs.length) {
    return makeNodeLinkFn(dirs);
  }
}

/**
 * Parse modifiers from directive attribute name.
 *
 * @param {String} name
 * @return {Object}
 */

function parseModifiers(name) {
  var res = Object.create(null);
  var match = name.match(modifierRE);
  if (match) {
    var i = match.length;
    while (i--) {
      res[match[i].slice(1)] = true;
    }
  }
  return res;
}

/**
 * Build a link function for all directives on a single node.
 *
 * @param {Array} directives
 * @return {Function} directivesLinkFn
 */

function makeNodeLinkFn(directives) {
  return function nodeLinkFn(vm, el, host, scope, frag) {
    // reverse apply because it's sorted low to high
    var i = directives.length;
    while (i--) {
      vm._bindDir(directives[i], el, host, scope, frag);
    }
  };
}

/**
 * Check if an interpolation string contains one-time tokens.
 *
 * @param {Array} tokens
 * @return {Boolean}
 */

function hasOneTime(tokens) {
  var i = tokens.length;
  while (i--) {
    if (tokens[i].oneTime) return true;
  }
}

var specialCharRE = /[^\w\-:\.]/;

/**
 * Process an element or a DocumentFragment based on a
 * instance option object. This allows us to transclude
 * a template node/fragment before the instance is created,
 * so the processed fragment can then be cloned and reused
 * in v-for.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transclude(el, options) {
  // extract container attributes to pass them down
  // to compiler, because they need to be compiled in
  // parent scope. we are mutating the options object here
  // assuming the same object will be used for compile
  // right after this.
  if (options) {
    options._containerAttrs = extractAttrs(el);
  }
  // for template tags, what we want is its content as
  // a documentFragment (for fragment instances)
  if (isTemplate(el)) {
    el = parseTemplate(el);
  }
  if (options) {
    if (options._asComponent && !options.template) {
      options.template = '<slot></slot>';
    }
    if (options.template) {
      options._content = extractContent(el);
      el = transcludeTemplate(el, options);
    }
  }
  if (isFragment(el)) {
    // anchors for fragment instance
    // passing in `persist: true` to avoid them being
    // discarded by IE during template cloning
    prepend(createAnchor('v-start', true), el);
    el.appendChild(createAnchor('v-end', true));
  }
  return el;
}

/**
 * Process the template option.
 * If the replace option is true this will swap the $el.
 *
 * @param {Element} el
 * @param {Object} options
 * @return {Element|DocumentFragment}
 */

function transcludeTemplate(el, options) {
  var template = options.template;
  var frag = parseTemplate(template, true);
  if (frag) {
    var replacer = frag.firstChild;
    var tag = replacer.tagName && replacer.tagName.toLowerCase();
    if (options.replace) {
      /* istanbul ignore if */
      if (el === document.body) {
        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
      }
      // there are many cases where the instance must
      // become a fragment instance: basically anything that
      // can create more than 1 root nodes.
      if (
      // multi-children template
      frag.childNodes.length > 1 ||
      // non-element template
      replacer.nodeType !== 1 ||
      // single nested component
      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
      // element directive
      resolveAsset(options, 'elementDirectives', tag) ||
      // for block
      replacer.hasAttribute('v-for') ||
      // if block
      replacer.hasAttribute('v-if')) {
        return frag;
      } else {
        options._replacerAttrs = extractAttrs(replacer);
        mergeAttrs(el, replacer);
        return replacer;
      }
    } else {
      el.appendChild(frag);
      return el;
    }
  } else {
    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
  }
}

/**
 * Helper to extract a component container's attributes
 * into a plain object array.
 *
 * @param {Element} el
 * @return {Array}
 */

function extractAttrs(el) {
  if (el.nodeType === 1 && el.hasAttributes()) {
    return toArray(el.attributes);
  }
}

/**
 * Merge the attributes of two elements, and make sure
 * the class names are merged properly.
 *
 * @param {Element} from
 * @param {Element} to
 */

function mergeAttrs(from, to) {
  var attrs = from.attributes;
  var i = attrs.length;
  var name, value;
  while (i--) {
    name = attrs[i].name;
    value = attrs[i].value;
    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
      to.setAttribute(name, value);
    } else if (name === 'class' && !parseText(value)) {
      value.split(/\s+/).forEach(function (cls) {
        addClass(to, cls);
      });
    }
  }
}

/**
 * Scan and determine slot content distribution.
 * We do this during transclusion instead at compile time so that
 * the distribution is decoupled from the compilation order of
 * the slots.
 *
 * @param {Element|DocumentFragment} template
 * @param {Element} content
 * @param {Vue} vm
 */

function scanSlots(template, content, vm) {
  if (!content) {
    return;
  }
  var contents = vm._slotContents = {};
  var slots = template.querySelectorAll('slot');
  if (slots.length) {
    var hasDefault, slot, name;
    for (var i = 0, l = slots.length; i < l; i++) {
      slot = slots[i];
      /* eslint-disable no-cond-assign */
      if (name = slot.getAttribute('name')) {
        select(slot, name);
      } else if (process.env.NODE_ENV !== 'production' && (name = getBindAttr(slot, 'name'))) {
        warn('<slot :name="' + name + '">: slot names cannot be dynamic.');
      } else {
        // default slot
        hasDefault = true;
      }
      /* eslint-enable no-cond-assign */
    }
    if (hasDefault) {
      contents['default'] = extractFragment(content.childNodes, content);
    }
  }

  function select(slot, name) {
    // named slot
    var selector = '[slot="' + name + '"]';
    var nodes = content.querySelectorAll(selector);
    if (nodes.length) {
      contents[name] = extractFragment(nodes, content);
    }
  }
}

/**
 * Extract qualified content nodes from a node list.
 *
 * @param {NodeList} nodes
 * @param {Element} parent
 * @return {DocumentFragment}
 */

function extractFragment(nodes, parent) {
  var frag = document.createDocumentFragment();
  nodes = toArray(nodes);
  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];
    if (node.parentNode === parent) {
      if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
        parent.removeChild(node);
        node = parseTemplate(node);
      }
      frag.appendChild(node);
    }
  }
  return frag;
}



var compiler = Object.freeze({
	compile: compile,
	compileAndLinkProps: compileAndLinkProps,
	compileRoot: compileRoot,
	terminalDirectives: terminalDirectives,
	transclude: transclude,
	scanSlots: scanSlots
});

function stateMixin (Vue) {
  /**
   * Accessor for `$data` property, since setting $data
   * requires observing the new object and updating
   * proxied properties.
   */

  Object.defineProperty(Vue.prototype, '$data', {
    get: function get() {
      return this._data;
    },
    set: function set(newData) {
      if (newData !== this._data) {
        this._setData(newData);
      }
    }
  });

  /**
   * Setup the scope of an instance, which contains:
   * - observed data
   * - computed properties
   * - user methods
   * - meta properties
   */

  Vue.prototype._initState = function () {
    this._initProps();
    this._initMeta();
    this._initMethods();
    this._initData();
    this._initComputed();
  };

  /**
   * Initialize props.
   */

  Vue.prototype._initProps = function () {
    var options = this.$options;
    var el = options.el;
    var props = options.props;
    if (props && !el) {
      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
    }
    // make sure to convert string selectors into element now
    el = options.el = query(el);
    this._propsUnlinkFn = el && el.nodeType === 1 && props
    // props must be linked in proper scope if inside v-for
    ? compileAndLinkProps(this, el, props, this._scope) : null;
  };

  /**
   * Initialize the data.
   */

  Vue.prototype._initData = function () {
    var propsData = this._data;
    var optionsDataFn = this.$options.data;
    var optionsData = optionsDataFn && optionsDataFn();
    var runtimeData;
    if (process.env.NODE_ENV !== 'production') {
      runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
      this._runtimeData = null;
    }
    if (optionsData) {
      this._data = optionsData;
      for (var prop in propsData) {
        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop) && !hasOwn(runtimeData, prop)) {
          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
        }
        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
          set(optionsData, prop, propsData[prop]);
        }
      }
    }
    var data = this._data;
    // proxy data on instance
    var keys = Object.keys(data);
    var i, key;
    i = keys.length;
    while (i--) {
      key = keys[i];
      this._proxy(key);
    }
    // observe data
    observe(data, this);
  };

  /**
   * Swap the instance's $data. Called in $data's setter.
   *
   * @param {Object} newData
   */

  Vue.prototype._setData = function (newData) {
    newData = newData || {};
    var oldData = this._data;
    this._data = newData;
    var keys, key, i;
    // unproxy keys not present in new data
    keys = Object.keys(oldData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!(key in newData)) {
        this._unproxy(key);
      }
    }
    // proxy keys not already proxied,
    // and trigger change for changed values
    keys = Object.keys(newData);
    i = keys.length;
    while (i--) {
      key = keys[i];
      if (!hasOwn(this, key)) {
        // new property
        this._proxy(key);
      }
    }
    oldData.__ob__.removeVm(this);
    observe(newData, this);
    this._digest();
  };

  /**
   * Proxy a property, so that
   * vm.prop === vm._data.prop
   *
   * @param {String} key
   */

  Vue.prototype._proxy = function (key) {
    if (!isReserved(key)) {
      // need to store ref to self here
      // because these getter/setters might
      // be called by child scopes via
      // prototype inheritance.
      var self = this;
      Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function proxyGetter() {
          return self._data[key];
        },
        set: function proxySetter(val) {
          self._data[key] = val;
        }
      });
    }
  };

  /**
   * Unproxy a property.
   *
   * @param {String} key
   */

  Vue.prototype._unproxy = function (key) {
    if (!isReserved(key)) {
      delete this[key];
    }
  };

  /**
   * Force update on every watcher in scope.
   */

  Vue.prototype._digest = function () {
    for (var i = 0, l = this._watchers.length; i < l; i++) {
      this._watchers[i].update(true); // shallow updates
    }
  };

  /**
   * Setup computed properties. They are essentially
   * special getter/setters
   */

  function noop() {}
  Vue.prototype._initComputed = function () {
    var computed = this.$options.computed;
    if (computed) {
      for (var key in computed) {
        var userDef = computed[key];
        var def = {
          enumerable: true,
          configurable: true
        };
        if (typeof userDef === 'function') {
          def.get = makeComputedGetter(userDef, this);
          def.set = noop;
        } else {
          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
          def.set = userDef.set ? bind(userDef.set, this) : noop;
        }
        Object.defineProperty(this, key, def);
      }
    }
  };

  function makeComputedGetter(getter, owner) {
    var watcher = new Watcher(owner, getter, null, {
      lazy: true
    });
    return function computedGetter() {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value;
    };
  }

  /**
   * Setup instance methods. Methods must be bound to the
   * instance since they might be passed down as a prop to
   * child components.
   */

  Vue.prototype._initMethods = function () {
    var methods = this.$options.methods;
    if (methods) {
      for (var key in methods) {
        this[key] = bind(methods[key], this);
      }
    }
  };

  /**
   * Initialize meta information like $index, $key & $value.
   */

  Vue.prototype._initMeta = function () {
    var metas = this.$options._meta;
    if (metas) {
      for (var key in metas) {
        defineReactive(this, key, metas[key]);
      }
    }
  };
}

var eventRE = /^v-on:|^@/;

function eventsMixin (Vue) {
  /**
   * Setup the instance's option events & watchers.
   * If the value is a string, we pull it from the
   * instance's methods by name.
   */

  Vue.prototype._initEvents = function () {
    var options = this.$options;
    if (options._asComponent) {
      registerComponentEvents(this, options.el);
    }
    registerCallbacks(this, '$on', options.events);
    registerCallbacks(this, '$watch', options.watch);
  };

  /**
   * Register v-on events on a child component
   *
   * @param {Vue} vm
   * @param {Element} el
   */

  function registerComponentEvents(vm, el) {
    var attrs = el.attributes;
    var name, handler;
    for (var i = 0, l = attrs.length; i < l; i++) {
      name = attrs[i].name;
      if (eventRE.test(name)) {
        name = name.replace(eventRE, '');
        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
        if (typeof handler === 'function') {
          handler._fromParent = true;
          vm.$on(name.replace(eventRE), handler);
        } else if (process.env.NODE_ENV !== 'production') {
          warn('v-on:' + name + '="' + attrs[i].value + '"' + (vm.$options.name ? ' on component <' + vm.$options.name + '>' : '') + ' expects a function value, got ' + handler);
        }
      }
    }
  }

  /**
   * Register callbacks for option events and watchers.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {Object} hash
   */

  function registerCallbacks(vm, action, hash) {
    if (!hash) return;
    var handlers, key, i, j;
    for (key in hash) {
      handlers = hash[key];
      if (isArray(handlers)) {
        for (i = 0, j = handlers.length; i < j; i++) {
          register(vm, action, key, handlers[i]);
        }
      } else {
        register(vm, action, key, handlers);
      }
    }
  }

  /**
   * Helper to register an event/watch callback.
   *
   * @param {Vue} vm
   * @param {String} action
   * @param {String} key
   * @param {Function|String|Object} handler
   * @param {Object} [options]
   */

  function register(vm, action, key, handler, options) {
    var type = typeof handler;
    if (type === 'function') {
      vm[action](key, handler, options);
    } else if (type === 'string') {
      var methods = vm.$options.methods;
      var method = methods && methods[handler];
      if (method) {
        vm[action](key, method, options);
      } else {
        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
      }
    } else if (handler && type === 'object') {
      register(vm, action, key, handler.handler, handler);
    }
  }

  /**
   * Setup recursive attached/detached calls
   */

  Vue.prototype._initDOMHooks = function () {
    this.$on('hook:attached', onAttached);
    this.$on('hook:detached', onDetached);
  };

  /**
   * Callback to recursively call attached hook on children
   */

  function onAttached() {
    if (!this._isAttached) {
      this._isAttached = true;
      this.$children.forEach(callAttach);
    }
  }

  /**
   * Iterator to call attached hook
   *
   * @param {Vue} child
   */

  function callAttach(child) {
    if (!child._isAttached && inDoc(child.$el)) {
      child._callHook('attached');
    }
  }

  /**
   * Callback to recursively call detached hook on children
   */

  function onDetached() {
    if (this._isAttached) {
      this._isAttached = false;
      this.$children.forEach(callDetach);
    }
  }

  /**
   * Iterator to call detached hook
   *
   * @param {Vue} child
   */

  function callDetach(child) {
    if (child._isAttached && !inDoc(child.$el)) {
      child._callHook('detached');
    }
  }

  /**
   * Trigger all handlers for a hook
   *
   * @param {String} hook
   */

  Vue.prototype._callHook = function (hook) {
    this.$emit('pre-hook:' + hook);
    var handlers = this.$options[hook];
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        handlers[i].call(this);
      }
    }
    this.$emit('hook:' + hook);
  };
}

function noop() {}

/**
 * A directive links a DOM element with a piece of data,
 * which is the result of evaluating an expression.
 * It registers a watcher with the expression and calls
 * the DOM update function when a change is triggered.
 *
 * @param {String} name
 * @param {Node} el
 * @param {Vue} vm
 * @param {Object} descriptor
 *                 - {String} name
 *                 - {Object} def
 *                 - {String} expression
 *                 - {Array<Object>} [filters]
 *                 - {Boolean} literal
 *                 - {String} attr
 *                 - {String} raw
 * @param {Object} def - directive definition object
 * @param {Vue} [host] - transclusion host component
 * @param {Object} [scope] - v-for scope
 * @param {Fragment} [frag] - owner fragment
 * @constructor
 */
function Directive(descriptor, vm, el, host, scope, frag) {
  this.vm = vm;
  this.el = el;
  // copy descriptor properties
  this.descriptor = descriptor;
  this.name = descriptor.name;
  this.expression = descriptor.expression;
  this.arg = descriptor.arg;
  this.modifiers = descriptor.modifiers;
  this.filters = descriptor.filters;
  this.literal = this.modifiers && this.modifiers.literal;
  // private
  this._locked = false;
  this._bound = false;
  this._listeners = null;
  // link context
  this._host = host;
  this._scope = scope;
  this._frag = frag;
  // store directives on node in dev mode
  if (process.env.NODE_ENV !== 'production' && this.el) {
    this.el._vue_directives = this.el._vue_directives || [];
    this.el._vue_directives.push(this);
  }
}

/**
 * Initialize the directive, mixin definition properties,
 * setup the watcher, call definition bind() and update()
 * if present.
 *
 * @param {Object} def
 */

Directive.prototype._bind = function () {
  var name = this.name;
  var descriptor = this.descriptor;

  // remove attribute
  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
    var attr = descriptor.attr || 'v-' + name;
    this.el.removeAttribute(attr);
  }

  // copy def properties
  var def = descriptor.def;
  if (typeof def === 'function') {
    this.update = def;
  } else {
    extend(this, def);
  }

  // setup directive params
  this._setupParams();

  // initial bind
  if (this.bind) {
    this.bind();
  }
  this._bound = true;

  if (this.literal) {
    this.update && this.update(descriptor.raw);
  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
    // wrapped updater for context
    var dir = this;
    if (this.update) {
      this._update = function (val, oldVal) {
        if (!dir._locked) {
          dir.update(val, oldVal);
        }
      };
    } else {
      this._update = noop;
    }
    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
    {
      filters: this.filters,
      twoWay: this.twoWay,
      deep: this.deep,
      preProcess: preProcess,
      postProcess: postProcess,
      scope: this._scope
    });
    // v-model with inital inline value need to sync back to
    // model instead of update to DOM on init. They would
    // set the afterBind hook to indicate that.
    if (this.afterBind) {
      this.afterBind();
    } else if (this.update) {
      this.update(watcher.value);
    }
  }
};

/**
 * Setup all param attributes, e.g. track-by,
 * transition-mode, etc...
 */

Directive.prototype._setupParams = function () {
  if (!this.params) {
    return;
  }
  var params = this.params;
  // swap the params array with a fresh object.
  this.params = Object.create(null);
  var i = params.length;
  var key, val, mappedKey;
  while (i--) {
    key = params[i];
    mappedKey = camelize(key);
    val = getBindAttr(this.el, key);
    if (val != null) {
      // dynamic
      this._setupParamWatcher(mappedKey, val);
    } else {
      // static
      val = getAttr(this.el, key);
      if (val != null) {
        this.params[mappedKey] = val === '' ? true : val;
      }
    }
  }
};

/**
 * Setup a watcher for a dynamic param.
 *
 * @param {String} key
 * @param {String} expression
 */

Directive.prototype._setupParamWatcher = function (key, expression) {
  var self = this;
  var called = false;
  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
    self.params[key] = val;
    // since we are in immediate mode,
    // only call the param change callbacks if this is not the first update.
    if (called) {
      var cb = self.paramWatchers && self.paramWatchers[key];
      if (cb) {
        cb.call(self, val, oldVal);
      }
    } else {
      called = true;
    }
  }, {
    immediate: true,
    user: false
  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
};

/**
 * Check if the directive is a function caller
 * and if the expression is a callable one. If both true,
 * we wrap up the expression and use it as the event
 * handler.
 *
 * e.g. on-click="a++"
 *
 * @return {Boolean}
 */

Directive.prototype._checkStatement = function () {
  var expression = this.expression;
  if (expression && this.acceptStatement && !isSimplePath(expression)) {
    var fn = parseExpression(expression).get;
    var scope = this._scope || this.vm;
    var handler = function handler(e) {
      scope.$event = e;
      fn.call(scope, scope);
      scope.$event = null;
    };
    if (this.filters) {
      handler = scope._applyFilters(handler, null, this.filters);
    }
    this.update(handler);
    return true;
  }
};

/**
 * Set the corresponding value with the setter.
 * This should only be used in two-way directives
 * e.g. v-model.
 *
 * @param {*} value
 * @public
 */

Directive.prototype.set = function (value) {
  /* istanbul ignore else */
  if (this.twoWay) {
    this._withLock(function () {
      this._watcher.set(value);
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn('Directive.set() can only be used inside twoWay' + 'directives.');
  }
};

/**
 * Execute a function while preventing that function from
 * triggering updates on this directive instance.
 *
 * @param {Function} fn
 */

Directive.prototype._withLock = function (fn) {
  var self = this;
  self._locked = true;
  fn.call(self);
  nextTick(function () {
    self._locked = false;
  });
};

/**
 * Convenience method that attaches a DOM event listener
 * to the directive element and autometically tears it down
 * during unbind.
 *
 * @param {String} event
 * @param {Function} handler
 * @param {Boolean} [useCapture]
 */

Directive.prototype.on = function (event, handler, useCapture) {
  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
};

/**
 * Teardown the watcher and call unbind.
 */

Directive.prototype._teardown = function () {
  if (this._bound) {
    this._bound = false;
    if (this.unbind) {
      this.unbind();
    }
    if (this._watcher) {
      this._watcher.teardown();
    }
    var listeners = this._listeners;
    var i;
    if (listeners) {
      i = listeners.length;
      while (i--) {
        off(this.el, listeners[i][0], listeners[i][1]);
      }
    }
    var unwatchFns = this._paramUnwatchFns;
    if (unwatchFns) {
      i = unwatchFns.length;
      while (i--) {
        unwatchFns[i]();
      }
    }
    if (process.env.NODE_ENV !== 'production' && this.el) {
      this.el._vue_directives.$remove(this);
    }
    this.vm = this.el = this._watcher = this._listeners = null;
  }
};

function lifecycleMixin (Vue) {
  /**
   * Update v-ref for component.
   *
   * @param {Boolean} remove
   */

  Vue.prototype._updateRef = function (remove) {
    var ref = this.$options._ref;
    if (ref) {
      var refs = (this._scope || this._context).$refs;
      if (remove) {
        if (refs[ref] === this) {
          refs[ref] = null;
        }
      } else {
        refs[ref] = this;
      }
    }
  };

  /**
   * Transclude, compile and link element.
   *
   * If a pre-compiled linker is available, that means the
   * passed in element will be pre-transcluded and compiled
   * as well - all we need to do is to call the linker.
   *
   * Otherwise we need to call transclude/compile/link here.
   *
   * @param {Element} el
   */

  Vue.prototype._compile = function (el) {
    var options = this.$options;

    // transclude and init element
    // transclude can potentially replace original
    // so we need to keep reference; this step also injects
    // the template and caches the original attributes
    // on the container node and replacer node.
    var original = el;
    el = transclude(el, options);
    this._initElement(el);

    // handle v-pre on root node (#2026)
    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
      return;
    }

    // root is always compiled per-instance, because
    // container attrs and props can be different every time.
    var contextOptions = this._context && this._context.$options;
    var rootLinker = compileRoot(el, options, contextOptions);

    // scan for slot distribution before compiling the content
    // so that it's decoupeld from slot/directive compilation order
    scanSlots(el, options._content, this);

    // compile and link the rest
    var contentLinkFn;
    var ctor = this.constructor;
    // component compilation can be cached
    // as long as it's not using inline-template
    if (options._linkerCachable) {
      contentLinkFn = ctor.linker;
      if (!contentLinkFn) {
        contentLinkFn = ctor.linker = compile(el, options);
      }
    }

    // link phase
    // make sure to link root with prop scope!
    var rootUnlinkFn = rootLinker(this, el, this._scope);
    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

    // register composite unlink function
    // to be called during instance destruction
    this._unlinkFn = function () {
      rootUnlinkFn();
      // passing destroying: true to avoid searching and
      // splicing the directives
      contentUnlinkFn(true);
    };

    // finally replace original
    if (options.replace) {
      replace(original, el);
    }

    this._isCompiled = true;
    this._callHook('compiled');
  };

  /**
   * Initialize instance element. Called in the public
   * $mount() method.
   *
   * @param {Element} el
   */

  Vue.prototype._initElement = function (el) {
    if (isFragment(el)) {
      this._isFragment = true;
      this.$el = this._fragmentStart = el.firstChild;
      this._fragmentEnd = el.lastChild;
      // set persisted text anchors to empty
      if (this._fragmentStart.nodeType === 3) {
        this._fragmentStart.data = this._fragmentEnd.data = '';
      }
      this._fragment = el;
    } else {
      this.$el = el;
    }
    this.$el.__vue__ = this;
    this._callHook('beforeCompile');
  };

  /**
   * Create and bind a directive to an element.
   *
   * @param {String} name - directive name
   * @param {Node} node   - target node
   * @param {Object} desc - parsed directive descriptor
   * @param {Object} def  - directive definition object
   * @param {Vue} [host] - transclusion host component
   * @param {Object} [scope] - v-for scope
   * @param {Fragment} [frag] - owner fragment
   */

  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
  };

  /**
   * Teardown an instance, unobserves the data, unbind all the
   * directives, turn off all the event listeners, etc.
   *
   * @param {Boolean} remove - whether to remove the DOM node.
   * @param {Boolean} deferCleanup - if true, defer cleanup to
   *                                 be called later
   */

  Vue.prototype._destroy = function (remove, deferCleanup) {
    if (this._isBeingDestroyed) {
      if (!deferCleanup) {
        this._cleanup();
      }
      return;
    }

    var destroyReady;
    var pendingRemoval;

    var self = this;
    // Cleanup should be called either synchronously or asynchronoysly as
    // callback of this.$remove(), or if remove and deferCleanup are false.
    // In any case it should be called after all other removing, unbinding and
    // turning of is done
    var cleanupIfPossible = function cleanupIfPossible() {
      if (destroyReady && !pendingRemoval && !deferCleanup) {
        self._cleanup();
      }
    };

    // remove DOM element
    if (remove && this.$el) {
      pendingRemoval = true;
      this.$remove(function () {
        pendingRemoval = false;
        cleanupIfPossible();
      });
    }

    this._callHook('beforeDestroy');
    this._isBeingDestroyed = true;
    var i;
    // remove self from parent. only necessary
    // if parent is not being destroyed as well.
    var parent = this.$parent;
    if (parent && !parent._isBeingDestroyed) {
      parent.$children.$remove(this);
      // unregister ref (remove: true)
      this._updateRef(true);
    }
    // destroy all children.
    i = this.$children.length;
    while (i--) {
      this.$children[i].$destroy();
    }
    // teardown props
    if (this._propsUnlinkFn) {
      this._propsUnlinkFn();
    }
    // teardown all directives. this also tearsdown all
    // directive-owned watchers.
    if (this._unlinkFn) {
      this._unlinkFn();
    }
    i = this._watchers.length;
    while (i--) {
      this._watchers[i].teardown();
    }
    // remove reference to self on $el
    if (this.$el) {
      this.$el.__vue__ = null;
    }

    destroyReady = true;
    cleanupIfPossible();
  };

  /**
   * Clean up to ensure garbage collection.
   * This is called after the leave transition if there
   * is any.
   */

  Vue.prototype._cleanup = function () {
    if (this._isDestroyed) {
      return;
    }
    // remove self from owner fragment
    // do it in cleanup so that we can call $destroy with
    // defer right when a fragment is about to be removed.
    if (this._frag) {
      this._frag.children.$remove(this);
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (this._data.__ob__) {
      this._data.__ob__.removeVm(this);
    }
    // Clean up references to private properties and other
    // instances. preserve reference to _data so that proxy
    // accessors still work. The only potential side effect
    // here is that mutating the instance after it's destroyed
    // may affect the state of other components that are still
    // observing the same object, but that seems to be a
    // reasonable responsibility for the user rather than
    // always throwing an error on them.
    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
    // call the last hook...
    this._isDestroyed = true;
    this._callHook('destroyed');
    // turn off all instance listeners.
    this.$off();
  };
}

function miscMixin (Vue) {
  /**
   * Apply a list of filter (descriptors) to a value.
   * Using plain for loops here because this will be called in
   * the getter of any watcher with filters so it is very
   * performance sensitive.
   *
   * @param {*} value
   * @param {*} [oldValue]
   * @param {Array} filters
   * @param {Boolean} write
   * @return {*}
   */

  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
    var filter, fn, args, arg, offset, i, l, j, k;
    for (i = 0, l = filters.length; i < l; i++) {
      filter = filters[i];
      fn = resolveAsset(this.$options, 'filters', filter.name);
      if (process.env.NODE_ENV !== 'production') {
        assertAsset(fn, 'filter', filter.name);
      }
      if (!fn) continue;
      fn = write ? fn.write : fn.read || fn;
      if (typeof fn !== 'function') continue;
      args = write ? [value, oldValue] : [value];
      offset = write ? 2 : 1;
      if (filter.args) {
        for (j = 0, k = filter.args.length; j < k; j++) {
          arg = filter.args[j];
          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
        }
      }
      value = fn.apply(this, args);
    }
    return value;
  };

  /**
   * Resolve a component, depending on whether the component
   * is defined normally or using an async factory function.
   * Resolves synchronously if already resolved, otherwise
   * resolves asynchronously and caches the resolved
   * constructor on the factory.
   *
   * @param {String} id
   * @param {Function} cb
   */

  Vue.prototype._resolveComponent = function (id, cb) {
    var factory = resolveAsset(this.$options, 'components', id);
    if (process.env.NODE_ENV !== 'production') {
      assertAsset(factory, 'component', id);
    }
    if (!factory) {
      return;
    }
    // async component factory
    if (!factory.options) {
      if (factory.resolved) {
        // cached
        cb(factory.resolved);
      } else if (factory.requested) {
        // pool callbacks
        factory.pendingCallbacks.push(cb);
      } else {
        factory.requested = true;
        var cbs = factory.pendingCallbacks = [cb];
        factory.call(this, function resolve(res) {
          if (isPlainObject(res)) {
            res = Vue.extend(res);
          }
          // cache resolved
          factory.resolved = res;
          // invoke callbacks
          for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i](res);
          }
        }, function reject(reason) {
          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
        });
      }
    } else {
      // normal component
      cb(factory);
    }
  };
}

var filterRE$1 = /[^|]\|[^|]/;

function dataAPI (Vue) {
  /**
   * Get the value from an expression on this vm.
   *
   * @param {String} exp
   * @param {Boolean} [asStatement]
   * @return {*}
   */

  Vue.prototype.$get = function (exp, asStatement) {
    var res = parseExpression(exp);
    if (res) {
      if (asStatement && !isSimplePath(exp)) {
        var self = this;
        return function statementHandler() {
          self.$arguments = toArray(arguments);
          var result = res.get.call(self, self);
          self.$arguments = null;
          return result;
        };
      } else {
        try {
          return res.get.call(this, this);
        } catch (e) {}
      }
    }
  };

  /**
   * Set the value from an expression on this vm.
   * The expression must be a valid left-hand
   * expression in an assignment.
   *
   * @param {String} exp
   * @param {*} val
   */

  Vue.prototype.$set = function (exp, val) {
    var res = parseExpression(exp, true);
    if (res && res.set) {
      res.set.call(this, this, val);
    }
  };

  /**
   * Delete a property on the VM
   *
   * @param {String} key
   */

  Vue.prototype.$delete = function (key) {
    del(this._data, key);
  };

  /**
   * Watch an expression, trigger callback when its
   * value changes.
   *
   * @param {String|Function} expOrFn
   * @param {Function} cb
   * @param {Object} [options]
   *                 - {Boolean} deep
   *                 - {Boolean} immediate
   * @return {Function} - unwatchFn
   */

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;
    var parsed;
    if (typeof expOrFn === 'string') {
      parsed = parseDirective(expOrFn);
      expOrFn = parsed.expression;
    }
    var watcher = new Watcher(vm, expOrFn, cb, {
      deep: options && options.deep,
      sync: options && options.sync,
      filters: parsed && parsed.filters,
      user: !options || options.user !== false
    });
    if (options && options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn() {
      watcher.teardown();
    };
  };

  /**
   * Evaluate a text directive, including filters.
   *
   * @param {String} text
   * @param {Boolean} [asStatement]
   * @return {String}
   */

  Vue.prototype.$eval = function (text, asStatement) {
    // check for filters.
    if (filterRE$1.test(text)) {
      var dir = parseDirective(text);
      // the filter regex check might give false positive
      // for pipes inside strings, so it's possible that
      // we don't get any filters here
      var val = this.$get(dir.expression, asStatement);
      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
    } else {
      // no filter
      return this.$get(text, asStatement);
    }
  };

  /**
   * Interpolate a piece of template text.
   *
   * @param {String} text
   * @return {String}
   */

  Vue.prototype.$interpolate = function (text) {
    var tokens = parseText(text);
    var vm = this;
    if (tokens) {
      if (tokens.length === 1) {
        return vm.$eval(tokens[0].value) + '';
      } else {
        return tokens.map(function (token) {
          return token.tag ? vm.$eval(token.value) : token.value;
        }).join('');
      }
    } else {
      return text;
    }
  };

  /**
   * Log instance data as a plain JS object
   * so that it is easier to inspect in console.
   * This method assumes console is available.
   *
   * @param {String} [path]
   */

  Vue.prototype.$log = function (path) {
    var data = path ? getPath(this._data, path) : this._data;
    if (data) {
      data = clean(data);
    }
    // include computed fields
    if (!path) {
      for (var key in this.$options.computed) {
        data[key] = clean(this[key]);
      }
    }
    console.log(data);
  };

  /**
   * "clean" a getter/setter converted object into a plain
   * object copy.
   *
   * @param {Object} - obj
   * @return {Object}
   */

  function clean(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
}

function domAPI (Vue) {
  /**
   * Convenience on-instance nextTick. The callback is
   * auto-bound to the instance, and this avoids component
   * modules having to rely on the global Vue.
   *
   * @param {Function} fn
   */

  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this);
  };

  /**
   * Append instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$appendTo = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, append, appendWithTransition);
  };

  /**
   * Prepend instance to target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$prependTo = function (target, cb, withTransition) {
    target = query(target);
    if (target.hasChildNodes()) {
      this.$before(target.firstChild, cb, withTransition);
    } else {
      this.$appendTo(target, cb, withTransition);
    }
    return this;
  };

  /**
   * Insert instance before target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$before = function (target, cb, withTransition) {
    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
  };

  /**
   * Insert instance after target
   *
   * @param {Node} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$after = function (target, cb, withTransition) {
    target = query(target);
    if (target.nextSibling) {
      this.$before(target.nextSibling, cb, withTransition);
    } else {
      this.$appendTo(target.parentNode, cb, withTransition);
    }
    return this;
  };

  /**
   * Remove instance from DOM
   *
   * @param {Function} [cb]
   * @param {Boolean} [withTransition] - defaults to true
   */

  Vue.prototype.$remove = function (cb, withTransition) {
    if (!this.$el.parentNode) {
      return cb && cb();
    }
    var inDocument = this._isAttached && inDoc(this.$el);
    // if we are not in document, no need to check
    // for transitions
    if (!inDocument) withTransition = false;
    var self = this;
    var realCb = function realCb() {
      if (inDocument) self._callHook('detached');
      if (cb) cb();
    };
    if (this._isFragment) {
      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
    } else {
      var op = withTransition === false ? removeWithCb : removeWithTransition;
      op(this.$el, this, realCb);
    }
    return this;
  };

  /**
   * Shared DOM insertion function.
   *
   * @param {Vue} vm
   * @param {Element} target
   * @param {Function} [cb]
   * @param {Boolean} [withTransition]
   * @param {Function} op1 - op for non-transition insert
   * @param {Function} op2 - op for transition insert
   * @return vm
   */

  function insert(vm, target, cb, withTransition, op1, op2) {
    target = query(target);
    var targetIsDetached = !inDoc(target);
    var op = withTransition === false || targetIsDetached ? op1 : op2;
    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
    if (vm._isFragment) {
      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
        op(node, target, vm);
      });
      cb && cb();
    } else {
      op(vm.$el, target, vm, cb);
    }
    if (shouldCallHook) {
      vm._callHook('attached');
    }
    return vm;
  }

  /**
   * Check for selectors
   *
   * @param {String|Element} el
   */

  function query(el) {
    return typeof el === 'string' ? document.querySelector(el) : el;
  }

  /**
   * Append operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function append(el, target, vm, cb) {
    target.appendChild(el);
    if (cb) cb();
  }

  /**
   * InsertBefore operation that takes a callback.
   *
   * @param {Node} el
   * @param {Node} target
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function beforeWithCb(el, target, vm, cb) {
    before(el, target);
    if (cb) cb();
  }

  /**
   * Remove operation that takes a callback.
   *
   * @param {Node} el
   * @param {Vue} vm - unused
   * @param {Function} [cb]
   */

  function removeWithCb(el, vm, cb) {
    remove(el);
    if (cb) cb();
  }
}

function eventsAPI (Vue) {
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$on = function (event, fn) {
    (this._events[event] || (this._events[event] = [])).push(fn);
    modifyListenerCount(this, event, 1);
    return this;
  };

  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$once = function (event, fn) {
    var self = this;
    function on() {
      self.$off(event, on);
      fn.apply(this, arguments);
    }
    on.fn = fn;
    this.$on(event, on);
    return this;
  };

  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   */

  Vue.prototype.$off = function (event, fn) {
    var cbs;
    // all
    if (!arguments.length) {
      if (this.$parent) {
        for (event in this._events) {
          cbs = this._events[event];
          if (cbs) {
            modifyListenerCount(this, event, -cbs.length);
          }
        }
      }
      this._events = {};
      return this;
    }
    // specific event
    cbs = this._events[event];
    if (!cbs) {
      return this;
    }
    if (arguments.length === 1) {
      modifyListenerCount(this, event, -cbs.length);
      this._events[event] = null;
      return this;
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        modifyListenerCount(this, event, -1);
        cbs.splice(i, 1);
        break;
      }
    }
    return this;
  };

  /**
   * Trigger an event on self.
   *
   * @param {String|Object} event
   * @return {Boolean} shouldPropagate
   */

  Vue.prototype.$emit = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    var cbs = this._events[event];
    var shouldPropagate = isSource || !cbs;
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      // this is a somewhat hacky solution to the question raised
      // in #2102: for an inline component listener like <comp @test="doThis">,
      // the propagation handling is somewhat broken. Therefore we
      // need to treat these inline callbacks differently.
      var hasParentCbs = isSource && cbs.some(function (cb) {
        return cb._fromParent;
      });
      if (hasParentCbs) {
        shouldPropagate = false;
      }
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        var cb = cbs[i];
        var res = cb.apply(this, args);
        if (res === true && (!hasParentCbs || cb._fromParent)) {
          shouldPropagate = true;
        }
      }
    }
    return shouldPropagate;
  };

  /**
   * Recursively broadcast an event to all children instances.
   *
   * @param {String|Object} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$broadcast = function (event) {
    var isSource = typeof event === 'string';
    event = isSource ? event : event.name;
    // if no child has registered for this event,
    // then there's no need to broadcast.
    if (!this._eventsCount[event]) return;
    var children = this.$children;
    var args = toArray(arguments);
    if (isSource) {
      // use object event to indicate non-source emit
      // on children
      args[0] = { name: event, source: this };
    }
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var shouldPropagate = child.$emit.apply(child, args);
      if (shouldPropagate) {
        child.$broadcast.apply(child, args);
      }
    }
    return this;
  };

  /**
   * Recursively propagate an event up the parent chain.
   *
   * @param {String} event
   * @param {...*} additional arguments
   */

  Vue.prototype.$dispatch = function (event) {
    var shouldPropagate = this.$emit.apply(this, arguments);
    if (!shouldPropagate) return;
    var parent = this.$parent;
    var args = toArray(arguments);
    // use object event to indicate non-source emit
    // on parents
    args[0] = { name: event, source: this };
    while (parent) {
      shouldPropagate = parent.$emit.apply(parent, args);
      parent = shouldPropagate ? parent.$parent : null;
    }
    return this;
  };

  /**
   * Modify the listener counts on all parents.
   * This bookkeeping allows $broadcast to return early when
   * no child has listened to a certain event.
   *
   * @param {Vue} vm
   * @param {String} event
   * @param {Number} count
   */

  var hookRE = /^hook:/;
  function modifyListenerCount(vm, event, count) {
    var parent = vm.$parent;
    // hooks do not get broadcasted so no need
    // to do bookkeeping for them
    if (!parent || !count || hookRE.test(event)) return;
    while (parent) {
      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
      parent = parent.$parent;
    }
  }
}

function lifecycleAPI (Vue) {
  /**
   * Set instance target element and kick off the compilation
   * process. The passed in `el` can be a selector string, an
   * existing Element, or a DocumentFragment (for block
   * instances).
   *
   * @param {Element|DocumentFragment|string} el
   * @public
   */

  Vue.prototype.$mount = function (el) {
    if (this._isCompiled) {
      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
      return;
    }
    el = query(el);
    if (!el) {
      el = document.createElement('div');
    }
    this._compile(el);
    this._initDOMHooks();
    if (inDoc(this.$el)) {
      this._callHook('attached');
      ready.call(this);
    } else {
      this.$once('hook:attached', ready);
    }
    return this;
  };

  /**
   * Mark an instance as ready.
   */

  function ready() {
    this._isAttached = true;
    this._isReady = true;
    this._callHook('ready');
  }

  /**
   * Teardown the instance, simply delegate to the internal
   * _destroy.
   */

  Vue.prototype.$destroy = function (remove, deferCleanup) {
    this._destroy(remove, deferCleanup);
  };

  /**
   * Partially compile a piece of DOM and return a
   * decompile function.
   *
   * @param {Element|DocumentFragment} el
   * @param {Vue} [host]
   * @return {Function}
   */

  Vue.prototype.$compile = function (el, host, scope, frag) {
    return compile(el, this.$options, true)(this, el, host, scope, frag);
  };
}

/**
 * The exposed Vue constructor.
 *
 * API conventions:
 * - public API methods/properties are prefixed with `$`
 * - internal methods/properties are prefixed with `_`
 * - non-prefixed properties are assumed to be proxied user
 *   data.
 *
 * @constructor
 * @param {Object} [options]
 * @public
 */

function Vue(options) {
  this._init(options);
}

// install internals
initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
miscMixin(Vue);

// install instance APIs
dataAPI(Vue);
domAPI(Vue);
eventsAPI(Vue);
lifecycleAPI(Vue);

var slot = {

  priority: SLOT,
  params: ['name'],

  bind: function bind() {
    // this was resolved during component transclusion
    var name = this.params.name || 'default';
    var content = this.vm._slotContents && this.vm._slotContents[name];
    if (!content || !content.hasChildNodes()) {
      this.fallback();
    } else {
      this.compile(content.cloneNode(true), this.vm._context, this.vm);
    }
  },

  compile: function compile(content, context, host) {
    if (content && context) {
      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
        // if the inserted slot has v-if
        // inject fallback content as the v-else
        var elseBlock = document.createElement('template');
        elseBlock.setAttribute('v-else', '');
        elseBlock.innerHTML = this.el.innerHTML;
        // the else block should be compiled in child scope
        elseBlock._context = this.vm;
        content.appendChild(elseBlock);
      }
      var scope = host ? host._scope : this._scope;
      this.unlink = context.$compile(content, host, scope, this._frag);
    }
    if (content) {
      replace(this.el, content);
    } else {
      remove(this.el);
    }
  },

  fallback: function fallback() {
    this.compile(extractContent(this.el, true), this.vm);
  },

  unbind: function unbind() {
    if (this.unlink) {
      this.unlink();
    }
  }
};

var partial = {

  priority: PARTIAL,

  params: ['name'],

  // watch changes to name for dynamic partials
  paramWatchers: {
    name: function name(value) {
      vIf.remove.call(this);
      if (value) {
        this.insert(value);
      }
    }
  },

  bind: function bind() {
    this.anchor = createAnchor('v-partial');
    replace(this.el, this.anchor);
    this.insert(this.params.name);
  },

  insert: function insert(id) {
    var partial = resolveAsset(this.vm.$options, 'partials', id);
    if (process.env.NODE_ENV !== 'production') {
      assertAsset(partial, 'partial', id);
    }
    if (partial) {
      this.factory = new FragmentFactory(this.vm, partial);
      vIf.insert.call(this);
    }
  },

  unbind: function unbind() {
    if (this.frag) {
      this.frag.destroy();
    }
  }
};

var elementDirectives = {
  slot: slot,
  partial: partial
};

var convertArray = vFor._postProcess;

/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */

function limitBy(arr, n, offset) {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
}

/**
 * Filter filter for arrays
 *
 * @param {String} search
 * @param {String} [delimiter]
 * @param {String} ...dataKeys
 */

function filterBy(arr, search, delimiter) {
  arr = convertArray(arr);
  if (search == null) {
    return arr;
  }
  if (typeof search === 'function') {
    return arr.filter(search);
  }
  // cast to lowercase string
  search = ('' + search).toLowerCase();
  // allow optional `in` delimiter
  // because why not
  var n = delimiter === 'in' ? 3 : 2;
  // extract and flatten keys
  var keys = toArray(arguments, n).reduce(function (prev, cur) {
    return prev.concat(cur);
  }, []);
  var res = [];
  var item, key, val, j;
  for (var i = 0, l = arr.length; i < l; i++) {
    item = arr[i];
    val = item && item.$value || item;
    j = keys.length;
    if (j) {
      while (j--) {
        key = keys[j];
        if (key === '$key' && contains$1(item.$key, search) || contains$1(getPath(val, key), search)) {
          res.push(item);
          break;
        }
      }
    } else if (contains$1(item, search)) {
      res.push(item);
    }
  }
  return res;
}

/**
 * Filter filter for arrays
 *
 * @param {String} sortKey
 * @param {String} reverse
 */

function orderBy(arr, sortKey, reverse) {
  arr = convertArray(arr);
  if (!sortKey) {
    return arr;
  }
  var order = reverse && reverse < 0 ? -1 : 1;
  // sort on a copy to avoid mutating original array
  return arr.slice().sort(function (a, b) {
    if (sortKey !== '$key') {
      if (isObject(a) && '$value' in a) a = a.$value;
      if (isObject(b) && '$value' in b) b = b.$value;
    }
    a = isObject(a) ? getPath(a, sortKey) : a;
    b = isObject(b) ? getPath(b, sortKey) : b;
    return a === b ? 0 : a > b ? order : -order;
  });
}

/**
 * String contain helper
 *
 * @param {*} val
 * @param {String} search
 */

function contains$1(val, search) {
  var i;
  if (isPlainObject(val)) {
    var keys = Object.keys(val);
    i = keys.length;
    while (i--) {
      if (contains$1(val[keys[i]], search)) {
        return true;
      }
    }
  } else if (isArray(val)) {
    i = val.length;
    while (i--) {
      if (contains$1(val[i], search)) {
        return true;
      }
    }
  } else if (val != null) {
    return val.toString().toLowerCase().indexOf(search) > -1;
  }
}

var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
var filters = {

  orderBy: orderBy,
  filterBy: filterBy,
  limitBy: limitBy,

  /**
   * Stringify value.
   *
   * @param {Number} indent
   */

  json: {
    read: function read(value, indent) {
      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
    },
    write: function write(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  },

  /**
   * 'abc' => 'Abc'
   */

  capitalize: function capitalize(value) {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
  },

  /**
   * 'abc' => 'ABC'
   */

  uppercase: function uppercase(value) {
    return value || value === 0 ? value.toString().toUpperCase() : '';
  },

  /**
   * 'AbC' => 'abc'
   */

  lowercase: function lowercase(value) {
    return value || value === 0 ? value.toString().toLowerCase() : '';
  },

  /**
   * 12345 => $12,345.00
   *
   * @param {String} sign
   */

  currency: function currency(value, _currency) {
    value = parseFloat(value);
    if (!isFinite(value) || !value && value !== 0) return '';
    _currency = _currency != null ? _currency : '$';
    var stringified = Math.abs(value).toFixed(2);
    var _int = stringified.slice(0, -3);
    var i = _int.length % 3;
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
    var _float = stringified.slice(-3);
    var sign = value < 0 ? '-' : '';
    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
  },

  /**
   * 'item' => 'items'
   *
   * @params
   *  an array of strings corresponding to
   *  the single, double, triple ... forms of the word to
   *  be pluralized. When the number to be pluralized
   *  exceeds the length of the args, it will use the last
   *  entry in the array.
   *
   *  e.g. ['single', 'double', 'triple', 'multiple']
   */

  pluralize: function pluralize(value) {
    var args = toArray(arguments, 1);
    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
  },

  /**
   * Debounce a handler function.
   *
   * @param {Function} handler
   * @param {Number} delay = 300
   * @return {Function}
   */

  debounce: function debounce(handler, delay) {
    if (!handler) return;
    if (!delay) {
      delay = 300;
    }
    return _debounce(handler, delay);
  }
};

function installGlobalAPI (Vue) {
  /**
   * Vue and every constructor that extends Vue has an
   * associated options object, which can be accessed during
   * compilation steps as `this.constructor.options`.
   *
   * These can be seen as the default options of every
   * Vue instance.
   */

  Vue.options = {
    directives: directives,
    elementDirectives: elementDirectives,
    filters: filters,
    transitions: {},
    components: {},
    partials: {},
    replace: true
  };

  /**
   * Expose useful internals
   */

  Vue.util = util;
  Vue.config = config;
  Vue.set = set;
  Vue['delete'] = del;
  Vue.nextTick = nextTick;

  /**
   * The following are exposed for advanced usage / plugins
   */

  Vue.compiler = compiler;
  Vue.FragmentFactory = FragmentFactory;
  Vue.internalDirectives = internalDirectives;
  Vue.parsers = {
    path: path,
    text: text,
    template: template,
    directive: directive,
    expression: expression
  };

  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */

  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   *
   * @param {Object} extendOptions
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var isFirstExtend = Super.cid === 0;
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor;
    }
    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
        name = null;
      }
    }
    var Sub = createClass(name || 'VueComponent');
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super;
    // allow further extension
    Sub.extend = Super.extend;
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub;
    }
    return Sub;
  };

  /**
   * A function that returns a sub-class constructor with the
   * given name. This gives us much nicer output when
   * logging instances in the console.
   *
   * @param {String} name
   * @return {Function}
   */

  function createClass(name) {
    /* eslint-disable no-new-func */
    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
    /* eslint-enable no-new-func */
  }

  /**
   * Plugin system
   *
   * @param {Object} plugin
   */

  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return;
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this;
  };

  /**
   * Apply a global mixin by merging it into the default
   * options.
   */

  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin);
  };

  /**
   * Create asset registration methods with the following
   * signature:
   *
   * @param {String} id
   * @param {*} definition
   */

  config._assetTypes.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = id;
          definition = Vue.extend(definition);
        }
        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });

  // expose internal transition API
  extend(Vue.transition, transition);
}

installGlobalAPI(Vue);

Vue.version = '1.0.17';

// devtools global hook
/* istanbul ignore next */
if (devtools) {
  devtools.emit('init', Vue);
} else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
  console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
}

module.exports = Vue;
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":"/Users/jbe/Documents/Projets/django_todo/node_modules/process/browser.js"}],"/Users/jbe/Documents/Projets/django_todo/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/jbe/Documents/Projets/django_todo/node_modules/vue-hot-reload-api/index.js":[function(require,module,exports){
var Vue // late bind
var map = Object.create(null)
var shimmed = false
var isBrowserify = false

/**
 * Determine compatibility and apply patch.
 *
 * @param {Function} vue
 * @param {Boolean} browserify
 */

exports.install = function (vue, browserify) {
  if (shimmed) return
  shimmed = true

  Vue = vue
  isBrowserify = browserify

  exports.compatible = !!Vue.internalDirectives
  if (!exports.compatible) {
    console.warn(
      '[HMR] vue-loader hot reload is only compatible with ' +
      'Vue.js 1.0.0+.'
    )
    return
  }

  // patch view directive
  patchView(Vue.internalDirectives.component)
  console.log('[HMR] Vue component hot reload shim applied.')
  // shim router-view if present
  var routerView = Vue.elementDirective('router-view')
  if (routerView) {
    patchView(routerView)
    console.log('[HMR] vue-router <router-view> hot reload shim applied.')
  }
}

/**
 * Shim the view directive (component or router-view).
 *
 * @param {Object} View
 */

function patchView (View) {
  var unbuild = View.unbuild
  View.unbuild = function (defer) {
    if (!this.hotUpdating) {
      var prevComponent = this.childVM && this.childVM.constructor
      removeView(prevComponent, this)
      // defer = true means we are transitioning to a new
      // Component. Register this new component to the list.
      if (defer) {
        addView(this.Component, this)
      }
    }
    // call original
    return unbuild.call(this, defer)
  }
}

/**
 * Add a component view to a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function addView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    if (!map[id]) {
      map[id] = {
        Component: Component,
        views: [],
        instances: []
      }
    }
    map[id].views.push(view)
  }
}

/**
 * Remove a component view from a Component's hot list
 *
 * @param {Function} Component
 * @param {Directive} view - view directive instance
 */

function removeView (Component, view) {
  var id = Component && Component.options.hotID
  if (id) {
    map[id].views.$remove(view)
  }
}

/**
 * Create a record for a hot module, which keeps track of its construcotr,
 * instnaces and views (component directives or router-views).
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if (typeof options === 'function') {
    options = options.options
  }
  if (typeof options.el !== 'string' && typeof options.data !== 'object') {
    makeOptionsHot(id, options)
    map[id] = {
      Component: null,
      views: [],
      instances: []
    }
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  options.hotID = id
  injectHook(options, 'created', function () {
    var record = map[id]
    if (!record.Component) {
      record.Component = this.constructor
    }
    record.instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    map[id].instances.$remove(this)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

/**
 * Update a hot component.
 *
 * @param {String} id
 * @param {Object|null} newOptions
 * @param {String|null} newTemplate
 */

exports.update = function (id, newOptions, newTemplate) {
  var record = map[id]
  // force full-reload if an instance of the component is active but is not
  // managed by a view
  if (!record || (record.instances.length && !record.views.length)) {
    console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
    if (!isBrowserify) {
      window.location.reload()
    } else {
      // browserify-hmr somehow sends incomplete bundle if we reload here
      return
    }
  }
  if (!isBrowserify) {
    // browserify-hmr already logs this
    console.log('[HMR] Updating component: ' + format(id))
  }
  var Component = record.Component
  // update constructor
  if (newOptions) {
    // in case the user exports a constructor
    Component = record.Component = typeof newOptions === 'function'
      ? newOptions
      : Vue.extend(newOptions)
    makeOptionsHot(id, Component.options)
  }
  if (newTemplate) {
    Component.options.template = newTemplate
  }
  // handle recursive lookup
  if (Component.options.name) {
    Component.options.components[Component.options.name] = Component
  }
  // reset constructor cached linker
  Component.linker = null
  // reload all views
  record.views.forEach(function (view) {
    updateView(view, Component)
  })
  // flush devtools
  if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
  }
}

/**
 * Update a component view instance
 *
 * @param {Directive} view
 * @param {Function} Component
 */

function updateView (view, Component) {
  if (!view._bound) {
    return
  }
  view.Component = Component
  view.hotUpdating = true
  // disable transitions
  view.vm._isCompiled = false
  // save state
  var state = extractState(view.childVM)
  // remount, make sure to disable keep-alive
  var keepAlive = view.keepAlive
  view.keepAlive = false
  view.mountComponent()
  view.keepAlive = keepAlive
  // restore state
  restoreState(view.childVM, state, true)
  // re-eanble transitions
  view.vm._isCompiled = true
  view.hotUpdating = false
}

/**
 * Extract state from a Vue instance.
 *
 * @param {Vue} vm
 * @return {Object}
 */

function extractState (vm) {
  return {
    cid: vm.constructor.cid,
    data: vm.$data,
    children: vm.$children.map(extractState)
  }
}

/**
 * Restore state to a reloaded Vue instance.
 *
 * @param {Vue} vm
 * @param {Object} state
 */

function restoreState (vm, state, isRoot) {
  var oldAsyncConfig
  if (isRoot) {
    // set Vue into sync mode during state rehydration
    oldAsyncConfig = Vue.config.async
    Vue.config.async = false
  }
  // actual restore
  if (isRoot || !vm._props) {
    vm.$data = state.data
  } else {
    Object.keys(state.data).forEach(function (key) {
      if (!vm._props[key]) {
        // for non-root, only restore non-props fields
        vm.$data[key] = state.data[key]
      }
    })
  }
  // verify child consistency
  var hasSameChildren = vm.$children.every(function (c, i) {
    return state.children[i] && state.children[i].cid === c.constructor.cid
  })
  if (hasSameChildren) {
    // rehydrate children
    vm.$children.forEach(function (c, i) {
      restoreState(c, state.children[i])
    })
  }
  if (isRoot) {
    Vue.config.async = oldAsyncConfig
  }
}

function format (id) {
  return id.match(/[^\/]+\.vue$/)[0]
}

},{}]},{},["/Users/jbe/Documents/Projets/django_todo/frontend-src/js/app.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udGVuZC1zcmMvanMvYXBwLmpzIiwiZnJvbnRlbmQtc3JjL2pzL2NvbXBvbmVudHMvYXBwLnZ1ZSIsImZyb250ZW5kLXNyYy9qcy9jb21wb25lbnRzL2hvbWUudnVlIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvYmVmb3JlLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvY2xpZW50L2luZGV4LmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvY2xpZW50L2pzb25wLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvY2xpZW50L3hkci5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL3NyYy9odHRwL2NsaWVudC94aHIuanMiLCJmcm9udGVuZC1zcmMvbm9kZV9tb2R1bGVzL3Z1ZS1yZXNvdXJjZS9zcmMvaHR0cC9jb3JzLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvaGVhZGVyLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvaW5kZXguanMiLCJmcm9udGVuZC1zcmMvbm9kZV9tb2R1bGVzL3Z1ZS1yZXNvdXJjZS9zcmMvaHR0cC9pbnRlcmNlcHRvci5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL3NyYy9odHRwL2pzb25wLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvbWV0aG9kLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL2h0dHAvbWltZS5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL3NyYy9odHRwL3RpbWVvdXQuanMiLCJmcm9udGVuZC1zcmMvbm9kZV9tb2R1bGVzL3Z1ZS1yZXNvdXJjZS9zcmMvaW5kZXguanMiLCJmcm9udGVuZC1zcmMvbm9kZV9tb2R1bGVzL3Z1ZS1yZXNvdXJjZS9zcmMvbGliL3Byb21pc2UuanMiLCJmcm9udGVuZC1zcmMvbm9kZV9tb2R1bGVzL3Z1ZS1yZXNvdXJjZS9zcmMvbGliL3VybC10ZW1wbGF0ZS5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL3NyYy9wcm9taXNlLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL3Jlc291cmNlLmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL3VybC9pbmRleC5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL3NyYy91cmwvbGVnYWN5LmpzIiwiZnJvbnRlbmQtc3JjL25vZGVfbW9kdWxlcy92dWUtcmVzb3VyY2Uvc3JjL3VybC9xdWVyeS5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL3NyYy91cmwvcm9vdC5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJlc291cmNlL3NyYy91cmwvdGVtcGxhdGUuanMiLCJmcm9udGVuZC1zcmMvbm9kZV9tb2R1bGVzL3Z1ZS1yZXNvdXJjZS9zcmMvdXRpbC5qcyIsImZyb250ZW5kLXNyYy9ub2RlX21vZHVsZXMvdnVlLXJvdXRlci9kaXN0L3Z1ZS1yb3V0ZXIuanMiLCJmcm9udGVuZC1zcmMvbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5jb21tb24uanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxjQUFJLEdBQUo7QUFDQSxjQUFJLEdBQUo7OztBQUdPLElBQUksMEJBQVMsd0JBQWM7QUFDOUIsYUFBUyxLQURxQjtBQUU5QixVQUFNO0FBRndCLENBQWQsQ0FBYjs7O0FBTVAsT0FBTyxHQUFQLENBQVc7QUFDUCxTQUFLO0FBQ0Q7QUFEQztBQURFLENBQVg7OztBQU9BLE9BQU8sUUFBUCxDQUFnQjtBQUNaLFNBQUs7QUFETyxDQUFoQjs7QUFJQSxPQUFPLEtBQVAsZ0JBQWtCLE1BQWxCOzs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeGxGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzE5U0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcC52dWUnXG5pbXBvcnQgaG9tZSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS52dWUnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXG5pbXBvcnQgVnVlUmVzb3VyY2UgZnJvbSAndnVlLXJlc291cmNlJ1xuXG5WdWUudXNlKFZ1ZVJlc291cmNlKVxuVnVlLnVzZShWdWVSb3V0ZXIpXG5cbi8vIFJvdXRlciBvcHRpb25zXG5leHBvcnQgdmFyIHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICAgIGhpc3Rvcnk6IGZhbHNlLFxuICAgIHJvb3Q6ICcvJ1xufSlcblxuLy8gUm91dGVyIG1hcCBmb3IgZGVmaW5pbmcgY29tcG9uZW50c1xucm91dGVyLm1hcCh7XG4gICAgJy8nOiB7XG4gICAgICAgIGNvbXBvbmVudDogaG9tZVxuICAgIH1cbn0pO1xuXG4vLyBSZWRpcmVjdCB0byB0aGUgaG9tZSByb3V0ZSBpZiBhbnkgcm91dGVzIGFyZSB1bm1hdGNoZWRcbnJvdXRlci5yZWRpcmVjdCh7XG4gICAgJyonOiAnLydcbn0pXG5cbnJvdXRlci5zdGFydChBcHAsICcjYXBwJylcbiIsIjsodHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCI/IG1vZHVsZS5leHBvcnRzLm9wdGlvbnM6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IFwiXFxuPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1kZWZhdWx0XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+XFxuICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcbiAgICAgIDxsaT48YSB2LWxpbms9XFxcIidob21lJ1xcXCI+SEFBbWU8L2E+PC9saT5cXG4gICAgPC91bD5cXG4gIDwvZGl2PiAgICBcXG48L25hdj5cXG48ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcbiAgPHJvdXRlci12aWV3Pjwvcm91dGVyLXZpZXc+XFxuPC9kaXY+XFxuXCJcbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHsgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgdHJ1ZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIHZhciBpZCA9IFwiL1VzZXJzL2piZS9Eb2N1bWVudHMvUHJvamV0cy9kamFuZ29fdG9kby9mcm9udGVuZC1zcmMvanMvY29tcG9uZW50cy9hcHAudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gbW9kdWxlLmV4cG9ydHMub3B0aW9ucyA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSlcbiAgfVxufSkoKX0iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1b3RlOiAnJ1xuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdldFF1b3RlOiBmdW5jdGlvbiBnZXRRdW90ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3RvZG9zJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgX3RoaXMucXVvdGUgPSBkYXRhO1xuICAgICAgfSkuZXJyb3IoZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbmlmIChtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlKSBtb2R1bGUuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzLmRlZmF1bHRcbjsodHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcImZ1bmN0aW9uXCI/IG1vZHVsZS5leHBvcnRzLm9wdGlvbnM6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSA9IFwiXFxuPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLXNtLW9mZnNldC0zXFxcIj5cXG4gIDxoMT5HZXQgYSBGcmVlIENodWNrIE5vcnJpcyBRdW90ZSE8L2gxPlxcbiAgPGJ1dHRvbiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiB2LW9uOmNsaWNrPVxcXCJnZXRRdW90ZSgpXFxcIj5HZXQgYSBRdW90ZTwvYnV0dG9uPlxcbiAgPGRpdiBjbGFzcz1cXFwicXVvdGUtYXJlYVxcXCIgdi1pZj1cXFwicXVvdGVcXFwiPlxcbiAgICA8aDI+PGJsb2NrcXVvdGU+PC9ibG9ja3F1b3RlPjwvaDI+ICAgICAgXFxuICA8L2Rpdj5cXG48L2Rpdj5cXG5cIlxuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkgeyAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCB0cnVlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgdmFyIGlkID0gXCIvVXNlcnMvamJlL0RvY3VtZW50cy9Qcm9qZXRzL2RqYW5nb190b2RvL2Zyb250ZW5kLXNyYy9qcy9jb21wb25lbnRzL2hvbWUudnVlXCJcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKGlkLCBtb2R1bGUuZXhwb3J0cylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkudXBkYXRlKGlkLCBtb2R1bGUuZXhwb3J0cywgKHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJmdW5jdGlvblwiID8gbW9kdWxlLmV4cG9ydHMub3B0aW9ucyA6IG1vZHVsZS5leHBvcnRzKS50ZW1wbGF0ZSlcbiAgfVxufSkoKX0iLCIvKipcbiAqIEJlZm9yZSBJbnRlcmNlcHRvci5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICByZXF1ZXN0OiBmdW5jdGlvbiAocmVxdWVzdCkge1xuXG4gICAgICAgIGlmIChfLmlzRnVuY3Rpb24ocmVxdWVzdC5iZWZvcmVTZW5kKSkge1xuICAgICAgICAgICAgcmVxdWVzdC5iZWZvcmVTZW5kLmNhbGwodGhpcywgcmVxdWVzdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbn07XG4iLCIvKipcbiAqIEJhc2UgY2xpZW50LlxuICovXG5cbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCcuLi8uLi9wcm9taXNlJyk7XG52YXIgeGhyQ2xpZW50ID0gcmVxdWlyZSgnLi94aHInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXG4gICAgdmFyIHJlc3BvbnNlID0gKHJlcXVlc3QuY2xpZW50IHx8IHhockNsaWVudCkocmVxdWVzdCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzKSB7XG5cbiAgICAgICAgICAgIHZhciBoZWFkZXJzID0gcGFyc2VIZWFkZXJzKHJlc3BvbnNlLmhlYWRlcnMpO1xuXG4gICAgICAgICAgICByZXNwb25zZS5oZWFkZXJzID0gZnVuY3Rpb24gKG5hbWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFkZXJzW18udG9Mb3dlcihuYW1lKV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXNwb25zZS5vayA9IHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwO1xuXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9KTtcblxufTtcblxuZnVuY3Rpb24gcGFyc2VIZWFkZXJzKHN0cikge1xuXG4gICAgdmFyIGhlYWRlcnMgPSB7fSwgdmFsdWUsIG5hbWUsIGk7XG5cbiAgICBpZiAoXy5pc1N0cmluZyhzdHIpKSB7XG4gICAgICAgIF8uZWFjaChzdHIuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiAocm93KSB7XG5cbiAgICAgICAgICAgIGkgPSByb3cuaW5kZXhPZignOicpO1xuICAgICAgICAgICAgbmFtZSA9IF8udHJpbShfLnRvTG93ZXIocm93LnNsaWNlKDAsIGkpKSk7XG4gICAgICAgICAgICB2YWx1ZSA9IF8udHJpbShyb3cuc2xpY2UoaSArIDEpKTtcblxuICAgICAgICAgICAgaWYgKGhlYWRlcnNbbmFtZV0pIHtcblxuICAgICAgICAgICAgICAgIGlmIChfLmlzQXJyYXkoaGVhZGVyc1tuYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gW2hlYWRlcnNbbmFtZV0sIHZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhlYWRlcnM7XG59XG4iLCIvKipcbiAqIEpTT05QIGNsaWVudC5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi4vLi4vcHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gJ19qc29ucCcgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiksIHJlc3BvbnNlID0ge3JlcXVlc3Q6IHJlcXVlc3QsIGRhdGE6IG51bGx9LCBoYW5kbGVyLCBzY3JpcHQ7XG5cbiAgICAgICAgcmVxdWVzdC5wYXJhbXNbcmVxdWVzdC5qc29ucF0gPSBjYWxsYmFjaztcbiAgICAgICAgcmVxdWVzdC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYW5kbGVyKHt0eXBlOiAnY2FuY2VsJ30pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc3JjID0gXy51cmwocmVxdWVzdCk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiAgICAgICAgd2luZG93W2NhbGxiYWNrXSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICByZXNwb25zZS5kYXRhID0gZGF0YTtcbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAnbG9hZCcgJiYgcmVzcG9uc2UuZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9IDIwMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9IDQwNDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSB3aW5kb3dbY2FsbGJhY2tdO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBoYW5kbGVyO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IGhhbmRsZXI7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufTtcbiIsIi8qKlxuICogWERvbWFpbiBjbGllbnQgKEludGVybmV0IEV4cGxvcmVyKS5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uLy4uL3V0aWwnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi4vLi4vcHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG5cbiAgICAgICAgdmFyIHhkciA9IG5ldyBYRG9tYWluUmVxdWVzdCgpLCByZXNwb25zZSA9IHtyZXF1ZXN0OiByZXF1ZXN0fSwgaGFuZGxlcjtcblxuICAgICAgICByZXF1ZXN0LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHhkci5hYm9ydCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhkci5vcGVuKHJlcXVlc3QubWV0aG9kLCBfLnVybChyZXF1ZXN0KSwgdHJ1ZSk7XG5cbiAgICAgICAgaGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhID0geGRyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1cyA9IHhkci5zdGF0dXM7XG4gICAgICAgICAgICByZXNwb25zZS5zdGF0dXNUZXh0ID0geGRyLnN0YXR1c1RleHQ7XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhkci50aW1lb3V0ID0gMDtcbiAgICAgICAgeGRyLm9ubG9hZCA9IGhhbmRsZXI7XG4gICAgICAgIHhkci5vbmFib3J0ID0gaGFuZGxlcjtcbiAgICAgICAgeGRyLm9uZXJyb3IgPSBoYW5kbGVyO1xuICAgICAgICB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgeGRyLnNlbmQocmVxdWVzdC5kYXRhKTtcbiAgICB9KTtcbn07XG4iLCIvKipcbiAqIFhNTEh0dHAgY2xpZW50LlxuICovXG5cbnZhciBfID0gcmVxdWlyZSgnLi4vLi4vdXRpbCcpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCcuLi8uLi9wcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHJlc3BvbnNlID0ge3JlcXVlc3Q6IHJlcXVlc3R9LCBoYW5kbGVyO1xuXG4gICAgICAgIHJlcXVlc3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIF8udXJsKHJlcXVlc3QpLCB0cnVlKTtcblxuICAgICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgIHJlc3BvbnNlLnN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgIHJlc3BvbnNlLmhlYWRlcnMgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG5cbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhoci50aW1lb3V0ID0gMDtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGhhbmRsZXI7XG4gICAgICAgIHhoci5vbmFib3J0ID0gaGFuZGxlcjtcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBoYW5kbGVyO1xuICAgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge307XG5cbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChyZXF1ZXN0LnhocikpIHtcbiAgICAgICAgICAgIF8uZXh0ZW5kKHhociwgcmVxdWVzdC54aHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChyZXF1ZXN0LnVwbG9hZCkpIHtcbiAgICAgICAgICAgIF8uZXh0ZW5kKHhoci51cGxvYWQsIHJlcXVlc3QudXBsb2FkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uZWFjaChyZXF1ZXN0LmhlYWRlcnMgfHwge30sIGZ1bmN0aW9uICh2YWx1ZSwgaGVhZGVyKSB7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoZWFkZXIsIHZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgeGhyLnNlbmQocmVxdWVzdC5kYXRhKTtcbiAgICB9KTtcbn07XG4iLCIvKipcbiAqIENPUlMgSW50ZXJjZXB0b3IuXG4gKi9cblxudmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJyk7XG52YXIgeGRyQ2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQveGRyJyk7XG52YXIgeGhyQ29ycyA9ICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xudmFyIG9yaWdpblVybCA9IF8udXJsLnBhcnNlKGxvY2F0aW9uLmhyZWYpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuY3Jvc3NPcmlnaW4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuY3Jvc3NPcmlnaW4gPSBjcm9zc09yaWdpbihyZXF1ZXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LmNyb3NzT3JpZ2luKSB7XG5cbiAgICAgICAgICAgIGlmICgheGhyQ29ycykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3QuY2xpZW50ID0geGRyQ2xpZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXF1ZXN0LmVtdWxhdGVIVFRQID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIGNyb3NzT3JpZ2luKHJlcXVlc3QpIHtcblxuICAgIHZhciByZXF1ZXN0VXJsID0gXy51cmwucGFyc2UoXy51cmwocmVxdWVzdCkpO1xuXG4gICAgcmV0dXJuIChyZXF1ZXN0VXJsLnByb3RvY29sICE9PSBvcmlnaW5VcmwucHJvdG9jb2wgfHwgcmVxdWVzdFVybC5ob3N0ICE9PSBvcmlnaW5VcmwuaG9zdCk7XG59XG4iLCIvKipcbiAqIEhlYWRlciBJbnRlcmNlcHRvci5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICByZXF1ZXN0OiBmdW5jdGlvbiAocmVxdWVzdCkge1xuXG4gICAgICAgIHJlcXVlc3QubWV0aG9kID0gcmVxdWVzdC5tZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICAgICAgcmVxdWVzdC5oZWFkZXJzID0gXy5leHRlbmQoe30sIF8uaHR0cC5oZWFkZXJzLmNvbW1vbixcbiAgICAgICAgICAgICFyZXF1ZXN0LmNyb3NzT3JpZ2luID8gXy5odHRwLmhlYWRlcnMuY3VzdG9tIDoge30sXG4gICAgICAgICAgICBfLmh0dHAuaGVhZGVyc1tyZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpXSxcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1xuICAgICAgICApO1xuXG4gICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QocmVxdWVzdC5kYXRhKSAmJiAvXihHRVR8SlNPTlApJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG4gICAgICAgICAgICBfLmV4dGVuZChyZXF1ZXN0LnBhcmFtcywgcmVxdWVzdC5kYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbn07XG4iLCIvKipcbiAqIFNlcnZpY2UgZm9yIHNlbmRpbmcgbmV0d29yayByZXF1ZXN0cy5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcbnZhciBDbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIFByb21pc2UgPSByZXF1aXJlKCcuLi9wcm9taXNlJyk7XG52YXIgaW50ZXJjZXB0b3IgPSByZXF1aXJlKCcuL2ludGVyY2VwdG9yJyk7XG52YXIganNvblR5cGUgPSB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ307XG5cbmZ1bmN0aW9uIEh0dHAodXJsLCBvcHRpb25zKSB7XG5cbiAgICB2YXIgY2xpZW50ID0gQ2xpZW50LCByZXF1ZXN0LCBwcm9taXNlO1xuXG4gICAgSHR0cC5pbnRlcmNlcHRvcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICBjbGllbnQgPSBpbnRlcmNlcHRvcihoYW5kbGVyLCB0aGlzLiR2bSkoY2xpZW50KTtcbiAgICB9LCB0aGlzKTtcblxuICAgIG9wdGlvbnMgPSBfLmlzT2JqZWN0KHVybCkgPyB1cmwgOiBfLmV4dGVuZCh7dXJsOiB1cmx9LCBvcHRpb25zKTtcbiAgICByZXF1ZXN0ID0gXy5tZXJnZSh7fSwgSHR0cC5vcHRpb25zLCB0aGlzLiRvcHRpb25zLCBvcHRpb25zKTtcbiAgICBwcm9taXNlID0gY2xpZW50KHJlcXVlc3QpLmJpbmQodGhpcy4kdm0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLm9rID8gcmVzcG9uc2UgOiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XG5cbiAgICB9LCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICBpZiAocmVzcG9uc2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgXy5lcnJvcihyZXNwb25zZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlcXVlc3Quc3VjY2Vzcykge1xuICAgICAgICBwcm9taXNlLnN1Y2Nlc3MocmVxdWVzdC5zdWNjZXNzKTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5lcnJvcikge1xuICAgICAgICBwcm9taXNlLmVycm9yKHJlcXVlc3QuZXJyb3IpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5IdHRwLm9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICBkYXRhOiAnJyxcbiAgICBwYXJhbXM6IHt9LFxuICAgIGhlYWRlcnM6IHt9LFxuICAgIHhocjogbnVsbCxcbiAgICB1cGxvYWQ6IG51bGwsXG4gICAganNvbnA6ICdjYWxsYmFjaycsXG4gICAgYmVmb3JlU2VuZDogbnVsbCxcbiAgICBjcm9zc09yaWdpbjogbnVsbCxcbiAgICBlbXVsYXRlSFRUUDogZmFsc2UsXG4gICAgZW11bGF0ZUpTT046IGZhbHNlLFxuICAgIHRpbWVvdXQ6IDBcbn07XG5cbkh0dHAuaW50ZXJjZXB0b3JzID0gW1xuICAgIHJlcXVpcmUoJy4vYmVmb3JlJyksXG4gICAgcmVxdWlyZSgnLi90aW1lb3V0JyksXG4gICAgcmVxdWlyZSgnLi9qc29ucCcpLFxuICAgIHJlcXVpcmUoJy4vbWV0aG9kJyksXG4gICAgcmVxdWlyZSgnLi9taW1lJyksXG4gICAgcmVxdWlyZSgnLi9oZWFkZXInKSxcbiAgICByZXF1aXJlKCcuL2NvcnMnKVxuXTtcblxuSHR0cC5oZWFkZXJzID0ge1xuICAgIHB1dDoganNvblR5cGUsXG4gICAgcG9zdDoganNvblR5cGUsXG4gICAgcGF0Y2g6IGpzb25UeXBlLFxuICAgIGRlbGV0ZToganNvblR5cGUsXG4gICAgY29tbW9uOiB7J0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonfSxcbiAgICBjdXN0b206IHsnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCd9XG59O1xuXG5bJ2dldCcsICdwdXQnLCAncG9zdCcsICdwYXRjaCcsICdkZWxldGUnLCAnanNvbnAnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcblxuICAgIEh0dHBbbWV0aG9kXSA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIHN1Y2Nlc3MsIG9wdGlvbnMpIHtcblxuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGRhdGEpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gc3VjY2VzcztcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBkYXRhO1xuICAgICAgICAgICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KHN1Y2Nlc3MpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0gc3VjY2VzcztcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcyh1cmwsIF8uZXh0ZW5kKHttZXRob2Q6IG1ldGhvZCwgZGF0YTogZGF0YSwgc3VjY2Vzczogc3VjY2Vzc30sIG9wdGlvbnMpKTtcbiAgICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXy5odHRwID0gSHR0cDtcbiIsIi8qKlxuICogSW50ZXJjZXB0b3IgZmFjdG9yeS5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcbnZhciBQcm9taXNlID0gcmVxdWlyZSgnLi4vcHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoYW5kbGVyLCB2bSkge1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChjbGllbnQpIHtcblxuICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgICAgICAgICBoYW5kbGVyID0gaGFuZGxlci5jYWxsKHZtLCBQcm9taXNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAocmVxdWVzdCkge1xuXG4gICAgICAgICAgICBpZiAoXy5pc0Z1bmN0aW9uKGhhbmRsZXIucmVxdWVzdCkpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0ID0gaGFuZGxlci5yZXF1ZXN0LmNhbGwodm0sIHJlcXVlc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gd2hlbihyZXF1ZXN0LCBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aGVuKGNsaWVudChyZXF1ZXN0KSwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihoYW5kbGVyLnJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBoYW5kbGVyLnJlc3BvbnNlLmNhbGwodm0sIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiB3aGVuKHZhbHVlLCBmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG5cbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTtcbn1cbiIsIi8qKlxuICogSlNPTlAgSW50ZXJjZXB0b3IuXG4gKi9cblxudmFyIGpzb25wQ2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQvanNvbnAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICByZXF1ZXN0OiBmdW5jdGlvbiAocmVxdWVzdCkge1xuXG4gICAgICAgIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PSAnSlNPTlAnKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmNsaWVudCA9IGpzb25wQ2xpZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG59O1xuIiwiLyoqXG4gKiBIVFRQIG1ldGhvZCBvdmVycmlkZSBJbnRlcmNlcHRvci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZW11bGF0ZUhUVFAgJiYgL14oUFVUfFBBVENIfERFTEVURSkkL2kudGVzdChyZXF1ZXN0Lm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuaGVhZGVyc1snWC1IVFRQLU1ldGhvZC1PdmVycmlkZSddID0gcmVxdWVzdC5tZXRob2Q7XG4gICAgICAgICAgICByZXF1ZXN0Lm1ldGhvZCA9ICdQT1NUJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxufTtcbiIsIi8qKlxuICogTWltZSBJbnRlcmNlcHRvci5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgICByZXF1ZXN0OiBmdW5jdGlvbiAocmVxdWVzdCkge1xuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVtdWxhdGVKU09OICYmIF8uaXNQbGFpbk9iamVjdChyZXF1ZXN0LmRhdGEpKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgICAgICAgICByZXF1ZXN0LmRhdGEgPSBfLnVybC5wYXJhbXMocmVxdWVzdC5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KHJlcXVlc3QuZGF0YSkgJiYgL0Zvcm1EYXRhL2kudGVzdChyZXF1ZXN0LmRhdGEudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChyZXF1ZXN0LmRhdGEpKSB7XG4gICAgICAgICAgICByZXF1ZXN0LmRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfSxcblxuICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxufTtcbiIsIi8qKlxuICogVGltZW91dCBJbnRlcmNlcHRvci5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciB0aW1lb3V0O1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiAocmVxdWVzdCkge1xuXG4gICAgICAgICAgICBpZiAocmVxdWVzdC50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH0sIHJlcXVlc3QudGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgIH07XG59O1xuIiwiLyoqXG4gKiBJbnN0YWxsIHBsdWdpbi5cbiAqL1xuXG5mdW5jdGlvbiBpbnN0YWxsKFZ1ZSkge1xuXG4gICAgdmFyIF8gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuICAgIF8uY29uZmlnID0gVnVlLmNvbmZpZztcbiAgICBfLndhcm5pbmcgPSBWdWUudXRpbC53YXJuO1xuICAgIF8ubmV4dFRpY2sgPSBWdWUudXRpbC5uZXh0VGljaztcblxuICAgIFZ1ZS51cmwgPSByZXF1aXJlKCcuL3VybCcpO1xuICAgIFZ1ZS5odHRwID0gcmVxdWlyZSgnLi9odHRwJyk7XG4gICAgVnVlLnJlc291cmNlID0gcmVxdWlyZSgnLi9yZXNvdXJjZScpO1xuICAgIFZ1ZS5Qcm9taXNlID0gcmVxdWlyZSgnLi9wcm9taXNlJyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhWdWUucHJvdG90eXBlLCB7XG5cbiAgICAgICAgJHVybDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucyhWdWUudXJsLCB0aGlzLCB0aGlzLiRvcHRpb25zLnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJGh0dHA6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMoVnVlLmh0dHAsIHRoaXMsIHRoaXMuJG9wdGlvbnMuaHR0cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJHJlc291cmNlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVnVlLnJlc291cmNlLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgJHByb21pc2U6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXhlY3V0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWdWUuUHJvbWlzZShleGVjdXRvciwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9KTtcbn1cblxuaWYgKHdpbmRvdy5WdWUpIHtcbiAgICBWdWUudXNlKGluc3RhbGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc3RhbGw7XG4iLCIvKipcbiAqIFByb21pc2VzL0ErIHBvbHlmaWxsIHYxLjEuNCAoaHR0cHM6Ly9naXRodWIuY29tL2JyYW1zdGVpbi9wcm9taXMpXG4gKi9cblxudmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbnZhciBSRVNPTFZFRCA9IDA7XG52YXIgUkVKRUNURUQgPSAxO1xudmFyIFBFTkRJTkcgID0gMjtcblxuZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuXG4gICAgdGhpcy5zdGF0ZSA9IFBFTkRJTkc7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmRlZmVycmVkID0gW107XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICB0cnkge1xuICAgICAgICBleGVjdXRvcihmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKHgpO1xuICAgICAgICB9LCBmdW5jdGlvbiAocikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3Qocik7XG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcHJvbWlzZS5yZWplY3QoZSk7XG4gICAgfVxufVxuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcmVqZWN0KHIpO1xuICAgIH0pO1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICByZXNvbHZlKHgpO1xuICAgIH0pO1xufTtcblxuUHJvbWlzZS5hbGwgPSBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgY291bnQgPSAwLCByZXN1bHQgPSBbXTtcblxuICAgICAgICBpZiAoaXRlcmFibGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlcihpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbaV0gPSB4O1xuICAgICAgICAgICAgICAgIGNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmFibGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShpdGVyYWJsZVtpXSkudGhlbihyZXNvbHZlcihpKSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmFibGUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShpdGVyYWJsZVtpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG52YXIgcCA9IFByb21pc2UucHJvdG90eXBlO1xuXG5wLnJlc29sdmUgPSBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICBpZiAocHJvbWlzZS5zdGF0ZSA9PT0gUEVORElORykge1xuICAgICAgICBpZiAoeCA9PT0gcHJvbWlzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSBzZXR0bGVkIHdpdGggaXRzZWxmLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdGhlbiA9IHggJiYgeFsndGhlbiddO1xuXG4gICAgICAgICAgICBpZiAoeCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aGVuLmNhbGwoeCwgZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZSh4KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIHByb21pc2UucmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvbWlzZS5zdGF0ZSA9IFJFU09MVkVEO1xuICAgICAgICBwcm9taXNlLnZhbHVlID0geDtcbiAgICAgICAgcHJvbWlzZS5ub3RpZnkoKTtcbiAgICB9XG59O1xuXG5wLnJlamVjdCA9IGZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG5cbiAgICBpZiAocHJvbWlzZS5zdGF0ZSA9PT0gUEVORElORykge1xuICAgICAgICBpZiAocmVhc29uID09PSBwcm9taXNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlIHNldHRsZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9taXNlLnN0YXRlID0gUkVKRUNURUQ7XG4gICAgICAgIHByb21pc2UudmFsdWUgPSByZWFzb247XG4gICAgICAgIHByb21pc2Uubm90aWZ5KCk7XG4gICAgfVxufTtcblxucC5ub3RpZnkgPSBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgXy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChwcm9taXNlLnN0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICAgICAgICB3aGlsZSAocHJvbWlzZS5kZWZlcnJlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmZXJyZWQgPSBwcm9taXNlLmRlZmVycmVkLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgICAgIG9uUmVzb2x2ZWQgPSBkZWZlcnJlZFswXSxcbiAgICAgICAgICAgICAgICAgICAgb25SZWplY3RlZCA9IGRlZmVycmVkWzFdLFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gZGVmZXJyZWRbMl0sXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCA9IGRlZmVycmVkWzNdO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2Uuc3RhdGUgPT09IFJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9uUmVzb2x2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9uUmVzb2x2ZWQuY2FsbCh1bmRlZmluZWQsIHByb21pc2UudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwcm9taXNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlLnN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvblJlamVjdGVkLmNhbGwodW5kZWZpbmVkLCBwcm9taXNlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChwcm9taXNlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxucC50aGVuID0gZnVuY3Rpb24gdGhlbihvblJlc29sdmVkLCBvblJlamVjdGVkKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcHJvbWlzZS5kZWZlcnJlZC5wdXNoKFtvblJlc29sdmVkLCBvblJlamVjdGVkLCByZXNvbHZlLCByZWplY3RdKTtcbiAgICAgICAgcHJvbWlzZS5ub3RpZnkoKTtcbiAgICB9KTtcbn07XG5cbnAuY2F0Y2ggPSBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsIi8qKlxuICogVVJMIFRlbXBsYXRlIHYyLjAuNiAoaHR0cHM6Ly9naXRodWIuY29tL2JyYW1zdGVpbi91cmwtdGVtcGxhdGUpXG4gKi9cblxuZXhwb3J0cy5leHBhbmQgPSBmdW5jdGlvbiAodXJsLCBwYXJhbXMsIHZhcmlhYmxlcykge1xuXG4gICAgdmFyIHRtcGwgPSB0aGlzLnBhcnNlKHVybCksIGV4cGFuZGVkID0gdG1wbC5leHBhbmQocGFyYW1zKTtcblxuICAgIGlmICh2YXJpYWJsZXMpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2guYXBwbHkodmFyaWFibGVzLCB0bXBsLnZhcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBleHBhbmRlZDtcbn07XG5cbmV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAodGVtcGxhdGUpIHtcblxuICAgIHZhciBvcGVyYXRvcnMgPSBbJysnLCAnIycsICcuJywgJy8nLCAnOycsICc/JywgJyYnXSwgdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YXJzOiB2YXJpYWJsZXMsXG4gICAgICAgIGV4cGFuZDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKC9cXHsoW15cXHtcXH1dKylcXH18KFteXFx7XFx9XSspL2csIGZ1bmN0aW9uIChfLCBleHByZXNzaW9uLCBsaXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cHJlc3Npb24pIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgb3BlcmF0b3IgPSBudWxsLCB2YWx1ZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3JzLmluZGV4T2YoZXhwcmVzc2lvbi5jaGFyQXQoMCkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IgPSBleHByZXNzaW9uLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb24gPSBleHByZXNzaW9uLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb24uc3BsaXQoLywvZykuZm9yRWFjaChmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0bXAgPSAvKFteOlxcKl0qKSg/OjooXFxkKyl8KFxcKikpPy8uZXhlYyh2YXJpYWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaC5hcHBseSh2YWx1ZXMsIGV4cG9ydHMuZ2V0VmFsdWVzKGNvbnRleHQsIG9wZXJhdG9yLCB0bXBbMV0sIHRtcFsyXSB8fCB0bXBbM10pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlcy5wdXNoKHRtcFsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciAmJiBvcGVyYXRvciAhPT0gJysnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzZXBhcmF0b3IgPSAnLCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJz8nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gJyYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciAhPT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsdWVzLmxlbmd0aCAhPT0gMCA/IG9wZXJhdG9yIDogJycpICsgdmFsdWVzLmpvaW4oc2VwYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuam9pbignLCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVSZXNlcnZlZChsaXRlcmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5leHBvcnRzLmdldFZhbHVlcyA9IGZ1bmN0aW9uIChjb250ZXh0LCBvcGVyYXRvciwga2V5LCBtb2RpZmllcikge1xuXG4gICAgdmFyIHZhbHVlID0gY29udGV4dFtrZXldLCByZXN1bHQgPSBbXTtcblxuICAgIGlmICh0aGlzLmlzRGVmaW5lZCh2YWx1ZSkgJiYgdmFsdWUgIT09ICcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcblxuICAgICAgICAgICAgaWYgKG1vZGlmaWVyICYmIG1vZGlmaWVyICE9PSAnKicpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZygwLCBwYXJzZUludChtb2RpZmllciwgMTApKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5lbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWUsIHRoaXMuaXNLZXlPcGVyYXRvcihvcGVyYXRvcikgPyBrZXkgOiBudWxsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobW9kaWZpZXIgPT09ICcqJykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWx0ZXIodGhpcy5pc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSwgdGhpcy5pc0tleU9wZXJhdG9yKG9wZXJhdG9yKSA/IGtleSA6IG51bGwpKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzRGVmaW5lZCh2YWx1ZVtrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZVtrXSwgaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciB0bXAgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5maWx0ZXIodGhpcy5pc0RlZmluZWQpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaCh0aGlzLmVuY29kZVZhbHVlKG9wZXJhdG9yLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNEZWZpbmVkKHZhbHVlW2tdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2godGhpcy5lbmNvZGVWYWx1ZShvcGVyYXRvciwgdmFsdWVba10udG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0tleU9wZXJhdG9yKG9wZXJhdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIHRtcC5qb2luKCcsJykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG1wLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh0bXAuam9pbignLCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3BlcmF0b3IgPT09ICc7Jykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyAmJiAob3BlcmF0b3IgPT09ICcmJyB8fCBvcGVyYXRvciA9PT0gJz8nKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydHMuaXNEZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59O1xuXG5leHBvcnRzLmlzS2V5T3BlcmF0b3IgPSBmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICByZXR1cm4gb3BlcmF0b3IgPT09ICc7JyB8fCBvcGVyYXRvciA9PT0gJyYnIHx8IG9wZXJhdG9yID09PSAnPyc7XG59O1xuXG5leHBvcnRzLmVuY29kZVZhbHVlID0gZnVuY3Rpb24gKG9wZXJhdG9yLCB2YWx1ZSwga2V5KSB7XG5cbiAgICB2YWx1ZSA9IChvcGVyYXRvciA9PT0gJysnIHx8IG9wZXJhdG9yID09PSAnIycpID8gdGhpcy5lbmNvZGVSZXNlcnZlZCh2YWx1ZSkgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufTtcblxuZXhwb3J0cy5lbmNvZGVSZXNlcnZlZCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnNwbGl0KC8oJVswLTlBLUZhLWZdezJ9KS9nKS5tYXAoZnVuY3Rpb24gKHBhcnQpIHtcbiAgICAgICAgaWYgKCEvJVswLTlBLUZhLWZdLy50ZXN0KHBhcnQpKSB7XG4gICAgICAgICAgICBwYXJ0ID0gZW5jb2RlVVJJKHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXJ0O1xuICAgIH0pLmpvaW4oJycpO1xufTtcbiIsIi8qKlxuICogUHJvbWlzZSBhZGFwdGVyLlxuICovXG5cbnZhciBfID0gcmVxdWlyZSgnLi91dGlsJyk7XG52YXIgUHJvbWlzZU9iaiA9IHdpbmRvdy5Qcm9taXNlIHx8IHJlcXVpcmUoJy4vbGliL3Byb21pc2UnKTtcblxuZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvciwgY29udGV4dCkge1xuXG4gICAgaWYgKGV4ZWN1dG9yIGluc3RhbmNlb2YgUHJvbWlzZU9iaikge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBleGVjdXRvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZU9iaihleGVjdXRvci5iaW5kKGNvbnRleHQpKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xufVxuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShQcm9taXNlT2JqLmFsbChpdGVyYWJsZSksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZS5yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFByb21pc2VPYmoucmVzb2x2ZSh2YWx1ZSksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZS5yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFByb21pc2VPYmoucmVqZWN0KHJlYXNvbiksIGNvbnRleHQpO1xufTtcblxuUHJvbWlzZS5yYWNlID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFByb21pc2VPYmoucmFjZShpdGVyYWJsZSksIGNvbnRleHQpO1xufTtcblxudmFyIHAgPSBQcm9taXNlLnByb3RvdHlwZTtcblxucC5iaW5kID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHJldHVybiB0aGlzO1xufTtcblxucC50aGVuID0gZnVuY3Rpb24gKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcblxuICAgIGlmIChmdWxmaWxsZWQgJiYgZnVsZmlsbGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIGZ1bGZpbGxlZCA9IGZ1bGZpbGxlZC5iaW5kKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHJlamVjdGVkICYmIHJlamVjdGVkLmJpbmQgJiYgdGhpcy5jb250ZXh0KSB7XG4gICAgICAgIHJlamVjdGVkID0gcmVqZWN0ZWQuYmluZCh0aGlzLmNvbnRleHQpO1xuICAgIH1cblxuICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5wLmNhdGNoID0gZnVuY3Rpb24gKHJlamVjdGVkKSB7XG5cbiAgICBpZiAocmVqZWN0ZWQgJiYgcmVqZWN0ZWQuYmluZCAmJiB0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgcmVqZWN0ZWQgPSByZWplY3RlZC5iaW5kKHRoaXMuY29udGV4dCk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlLmNhdGNoKHJlamVjdGVkKTtcblxuICAgIHJldHVybiB0aGlzO1xufTtcblxucC5maW5hbGx5ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cbiAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlT2JqLnJlamVjdChyZWFzb24pO1xuICAgICAgICB9XG4gICAgKTtcbn07XG5cbnAuc3VjY2VzcyA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG4gICAgXy53YXJuKCdUaGUgYHN1Y2Nlc3NgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgdGhlIGB0aGVuYCBtZXRob2QgaW5zdGVhZC4nKTtcblxuICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UpIHx8IHJlc3BvbnNlO1xuICAgIH0pO1xufTtcblxucC5lcnJvciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXG4gICAgXy53YXJuKCdUaGUgYGVycm9yYCBtZXRob2QgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIHRoZSBgY2F0Y2hgIG1ldGhvZCBpbnN0ZWFkLicpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2F0Y2goZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXMsIHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UpIHx8IHJlc3BvbnNlO1xuICAgIH0pO1xufTtcblxucC5hbHdheXMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblxuICAgIF8ud2FybignVGhlIGBhbHdheXNgIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgdGhlIGBmaW5hbGx5YCBtZXRob2QgaW5zdGVhZC4nKTtcblxuICAgIHZhciBjYiA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2suY2FsbCh0aGlzLCByZXNwb25zZS5kYXRhLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlKSB8fCByZXNwb25zZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMudGhlbihjYiwgY2IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwiLyoqXG4gKiBTZXJ2aWNlIGZvciBpbnRlcmFjdGluZyB3aXRoIFJFU1RmdWwgc2VydmljZXMuXG4gKi9cblxudmFyIF8gPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuZnVuY3Rpb24gUmVzb3VyY2UodXJsLCBwYXJhbXMsIGFjdGlvbnMsIG9wdGlvbnMpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcywgcmVzb3VyY2UgPSB7fTtcblxuICAgIGFjdGlvbnMgPSBfLmV4dGVuZCh7fSxcbiAgICAgICAgUmVzb3VyY2UuYWN0aW9ucyxcbiAgICAgICAgYWN0aW9uc1xuICAgICk7XG5cbiAgICBfLmVhY2goYWN0aW9ucywgZnVuY3Rpb24gKGFjdGlvbiwgbmFtZSkge1xuXG4gICAgICAgIGFjdGlvbiA9IF8ubWVyZ2Uoe3VybDogdXJsLCBwYXJhbXM6IHBhcmFtcyB8fCB7fX0sIG9wdGlvbnMsIGFjdGlvbik7XG5cbiAgICAgICAgcmVzb3VyY2VbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHNlbGYuJGh0dHAgfHwgXy5odHRwKShvcHRzKGFjdGlvbiwgYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzb3VyY2U7XG59XG5cbmZ1bmN0aW9uIG9wdHMoYWN0aW9uLCBhcmdzKSB7XG5cbiAgICB2YXIgb3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBhY3Rpb24pLCBwYXJhbXMgPSB7fSwgZGF0YSwgc3VjY2VzcywgZXJyb3I7XG5cbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG5cbiAgICAgICAgY2FzZSA0OlxuXG4gICAgICAgICAgICBlcnJvciA9IGFyZ3NbM107XG4gICAgICAgICAgICBzdWNjZXNzID0gYXJnc1syXTtcblxuICAgICAgICBjYXNlIDM6XG4gICAgICAgIGNhc2UgMjpcblxuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhcmdzWzFdKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhcmdzWzBdKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGFyZ3NbMV07XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IGFyZ3NbMV07XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBhcmdzWzJdO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICAgICAgICAgICAgICBkYXRhID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gYXJnc1syXTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgMTpcblxuICAgICAgICAgICAgaWYgKF8uaXNGdW5jdGlvbihhcmdzWzBdKSkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgvXihQT1NUfFBVVHxQQVRDSCkkL2kudGVzdChvcHRpb25zLm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gYXJnc1swXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gYXJnc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAwOlxuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgdXAgdG8gNCBhcmd1bWVudHMgW3BhcmFtcywgZGF0YSwgc3VjY2VzcywgZXJyb3JdLCBnb3QgJyArIGFyZ3MubGVuZ3RoICsgJyBhcmd1bWVudHMnO1xuICAgIH1cblxuICAgIG9wdGlvbnMuZGF0YSA9IGRhdGE7XG4gICAgb3B0aW9ucy5wYXJhbXMgPSBfLmV4dGVuZCh7fSwgb3B0aW9ucy5wYXJhbXMsIHBhcmFtcyk7XG5cbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICBvcHRpb25zLnN1Y2Nlc3MgPSBzdWNjZXNzO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgICBvcHRpb25zLmVycm9yID0gZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5cblJlc291cmNlLmFjdGlvbnMgPSB7XG5cbiAgICBnZXQ6IHttZXRob2Q6ICdHRVQnfSxcbiAgICBzYXZlOiB7bWV0aG9kOiAnUE9TVCd9LFxuICAgIHF1ZXJ5OiB7bWV0aG9kOiAnR0VUJ30sXG4gICAgdXBkYXRlOiB7bWV0aG9kOiAnUFVUJ30sXG4gICAgcmVtb3ZlOiB7bWV0aG9kOiAnREVMRVRFJ30sXG4gICAgZGVsZXRlOiB7bWV0aG9kOiAnREVMRVRFJ31cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBfLnJlc291cmNlID0gUmVzb3VyY2U7XG4iLCIvKipcbiAqIFNlcnZpY2UgZm9yIFVSTCB0ZW1wbGF0aW5nLlxuICovXG5cbnZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xudmFyIGllID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xudmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG5mdW5jdGlvbiBVcmwodXJsLCBwYXJhbXMpIHtcblxuICAgIHZhciBvcHRpb25zID0gdXJsLCB0cmFuc2Zvcm07XG5cbiAgICBpZiAoXy5pc1N0cmluZyh1cmwpKSB7XG4gICAgICAgIG9wdGlvbnMgPSB7dXJsOiB1cmwsIHBhcmFtczogcGFyYW1zfTtcbiAgICB9XG5cbiAgICBvcHRpb25zID0gXy5tZXJnZSh7fSwgVXJsLm9wdGlvbnMsIHRoaXMuJG9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgVXJsLnRyYW5zZm9ybXMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICB0cmFuc2Zvcm0gPSBmYWN0b3J5KGhhbmRsZXIsIHRyYW5zZm9ybSwgdGhpcy4kdm0pO1xuICAgIH0sIHRoaXMpO1xuXG4gICAgcmV0dXJuIHRyYW5zZm9ybShvcHRpb25zKTtcbn07XG5cbi8qKlxuICogVXJsIG9wdGlvbnMuXG4gKi9cblxuVXJsLm9wdGlvbnMgPSB7XG4gICAgdXJsOiAnJyxcbiAgICByb290OiBudWxsLFxuICAgIHBhcmFtczoge31cbn07XG5cbi8qKlxuICogVXJsIHRyYW5zZm9ybXMuXG4gKi9cblxuVXJsLnRyYW5zZm9ybXMgPSBbXG4gICAgcmVxdWlyZSgnLi90ZW1wbGF0ZScpLFxuICAgIHJlcXVpcmUoJy4vbGVnYWN5JyksXG4gICAgcmVxdWlyZSgnLi9xdWVyeScpLFxuICAgIHJlcXVpcmUoJy4vcm9vdCcpXG5dO1xuXG4vKipcbiAqIEVuY29kZXMgYSBVcmwgcGFyYW1ldGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuVXJsLnBhcmFtcyA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgIHZhciBwYXJhbXMgPSBbXSwgZXNjYXBlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuXG4gICAgcGFyYW1zLmFkZCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cbiAgICAgICAgaWYgKF8uaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHVzaChlc2NhcGUoa2V5KSArICc9JyArIGVzY2FwZSh2YWx1ZSkpO1xuICAgIH07XG5cbiAgICBzZXJpYWxpemUocGFyYW1zLCBvYmopO1xuXG4gICAgcmV0dXJuIHBhcmFtcy5qb2luKCcmJykucmVwbGFjZSgvJTIwL2csICcrJyk7XG59O1xuXG4vKipcbiAqIFBhcnNlIGEgVVJMIGFuZCByZXR1cm4gaXRzIGNvbXBvbmVudHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICovXG5cblVybC5wYXJzZSA9IGZ1bmN0aW9uICh1cmwpIHtcblxuICAgIGlmIChpZSkge1xuICAgICAgICBlbC5ocmVmID0gdXJsO1xuICAgICAgICB1cmwgPSBlbC5ocmVmO1xuICAgIH1cblxuICAgIGVsLmhyZWYgPSB1cmw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiBlbC5ocmVmLFxuICAgICAgICBwcm90b2NvbDogZWwucHJvdG9jb2wgPyBlbC5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBwb3J0OiBlbC5wb3J0LFxuICAgICAgICBob3N0OiBlbC5ob3N0LFxuICAgICAgICBob3N0bmFtZTogZWwuaG9zdG5hbWUsXG4gICAgICAgIHBhdGhuYW1lOiBlbC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IGVsLnBhdGhuYW1lIDogJy8nICsgZWwucGF0aG5hbWUsXG4gICAgICAgIHNlYXJjaDogZWwuc2VhcmNoID8gZWwuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogZWwuaGFzaCA/IGVsLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJ1xuICAgIH07XG59O1xuXG5mdW5jdGlvbiBmYWN0b3J5KGhhbmRsZXIsIG5leHQsIHZtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBoYW5kbGVyLmNhbGwodm0sIG9wdGlvbnMsIG5leHQpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShwYXJhbXMsIG9iaiwgc2NvcGUpIHtcblxuICAgIHZhciBhcnJheSA9IF8uaXNBcnJheShvYmopLCBwbGFpbiA9IF8uaXNQbGFpbk9iamVjdChvYmopLCBoYXNoO1xuXG4gICAgXy5lYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcblxuICAgICAgICBoYXNoID0gXy5pc09iamVjdCh2YWx1ZSkgfHwgXy5pc0FycmF5KHZhbHVlKTtcblxuICAgICAgICBpZiAoc2NvcGUpIHtcbiAgICAgICAgICAgIGtleSA9IHNjb3BlICsgJ1snICsgKHBsYWluIHx8IGhhc2ggPyBrZXkgOiAnJykgKyAnXSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNjb3BlICYmIGFycmF5KSB7XG4gICAgICAgICAgICBwYXJhbXMuYWRkKHZhbHVlLm5hbWUsIHZhbHVlLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYXNoKSB7XG4gICAgICAgICAgICBzZXJpYWxpemUocGFyYW1zLCB2YWx1ZSwga2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcy5hZGQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfLnVybCA9IFVybDtcbiIsIi8qKlxuICogTGVnYWN5IFRyYW5zZm9ybS5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoJy4uL3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgbmV4dCkge1xuXG4gICAgdmFyIHZhcmlhYmxlcyA9IFtdLCB1cmwgPSBuZXh0KG9wdGlvbnMpO1xuXG4gICAgdXJsID0gdXJsLnJlcGxhY2UoLyhcXC8/KTooW2Etel1cXHcqKS9naSwgZnVuY3Rpb24gKG1hdGNoLCBzbGFzaCwgbmFtZSkge1xuXG4gICAgICAgIF8ud2FybignVGhlIGA6JyArIG5hbWUgKyAnYCBwYXJhbWV0ZXIgc3ludGF4IGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSB0aGUgYHsnICsgbmFtZSArICd9YCBzeW50YXggaW5zdGVhZC4nKTtcblxuICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHZhcmlhYmxlcy5wdXNoKG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHNsYXNoICsgZW5jb2RlVXJpU2VnbWVudChvcHRpb25zLnBhcmFtc1tuYW1lXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfSk7XG5cbiAgICB2YXJpYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLnBhcmFtc1trZXldO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVybDtcbn07XG5cbmZ1bmN0aW9uIGVuY29kZVVyaVNlZ21lbnQodmFsdWUpIHtcblxuICAgIHJldHVybiBlbmNvZGVVcmlRdWVyeSh2YWx1ZSwgdHJ1ZSkuXG4gICAgICAgIHJlcGxhY2UoLyUyNi9naSwgJyYnKS5cbiAgICAgICAgcmVwbGFjZSgvJTNEL2dpLCAnPScpLlxuICAgICAgICByZXBsYWNlKC8lMkIvZ2ksICcrJyk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZVVyaVF1ZXJ5KHZhbHVlLCBzcGFjZXMpIHtcblxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLlxuICAgICAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICAgICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICAgICAgcmVwbGFjZSgvJTIwL2csIChzcGFjZXMgPyAnJTIwJyA6ICcrJykpO1xufVxuIiwiLyoqXG4gKiBRdWVyeSBQYXJhbWV0ZXIgVHJhbnNmb3JtLlxuICovXG5cbnZhciBfID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBuZXh0KSB7XG5cbiAgICB2YXIgdXJsUGFyYW1zID0gT2JqZWN0LmtleXMoXy51cmwub3B0aW9ucy5wYXJhbXMpLCBxdWVyeSA9IHt9LCB1cmwgPSBuZXh0KG9wdGlvbnMpO1xuXG4gICBfLmVhY2gob3B0aW9ucy5wYXJhbXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh1cmxQYXJhbXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgcXVlcnlba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBxdWVyeSA9IF8udXJsLnBhcmFtcyhxdWVyeSk7XG5cbiAgICBpZiAocXVlcnkpIHtcbiAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09IC0xID8gJz8nIDogJyYnKSArIHF1ZXJ5O1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG59O1xuIiwiLyoqXG4gKiBSb290IFByZWZpeCBUcmFuc2Zvcm0uXG4gKi9cblxudmFyIF8gPSByZXF1aXJlKCcuLi91dGlsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIG5leHQpIHtcblxuICAgIHZhciB1cmwgPSBuZXh0KG9wdGlvbnMpO1xuXG4gICAgaWYgKF8uaXNTdHJpbmcob3B0aW9ucy5yb290KSAmJiAhdXJsLm1hdGNoKC9eKGh0dHBzPzopP1xcLy8pKSB7XG4gICAgICAgIHVybCA9IG9wdGlvbnMucm9vdCArICcvJyArIHVybDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xufTtcbiIsIi8qKlxuICogVVJMIFRlbXBsYXRlIChSRkMgNjU3MCkgVHJhbnNmb3JtLlxuICovXG5cbnZhciBVcmxUZW1wbGF0ZSA9IHJlcXVpcmUoJy4uL2xpYi91cmwtdGVtcGxhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXG4gICAgdmFyIHZhcmlhYmxlcyA9IFtdLCB1cmwgPSBVcmxUZW1wbGF0ZS5leHBhbmQob3B0aW9ucy51cmwsIG9wdGlvbnMucGFyYW1zLCB2YXJpYWJsZXMpO1xuXG4gICAgdmFyaWFibGVzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWxldGUgb3B0aW9ucy5wYXJhbXNba2V5XTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cmw7XG59O1xuIiwiLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9ucy5cbiAqL1xuXG52YXIgXyA9IGV4cG9ydHMsIGFycmF5ID0gW10sIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcblxuXy53YXJuID0gZnVuY3Rpb24gKG1zZykge1xuICAgIGlmIChjb25zb2xlICYmIF8ud2FybmluZyAmJiAoIV8uY29uZmlnLnNpbGVudCB8fCBfLmNvbmZpZy5kZWJ1ZykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbVnVlUmVzb3VyY2Ugd2Fybl06ICcgKyBtc2cpO1xuICAgIH1cbn07XG5cbl8uZXJyb3IgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgaWYgKGNvbnNvbGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgIH1cbn07XG5cbl8udHJpbSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn07XG5cbl8udG9Mb3dlciA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyID8gc3RyLnRvTG93ZXJDYXNlKCkgOiAnJztcbn07XG5cbl8uaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbl8uaXNTdHJpbmcgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufTtcblxuXy5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nO1xufTtcblxuXy5pc09iamVjdCA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuXy5pc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBfLmlzT2JqZWN0KG9iaikgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT0gT2JqZWN0LnByb3RvdHlwZTtcbn07XG5cbl8ub3B0aW9ucyA9IGZ1bmN0aW9uIChmbiwgb2JqLCBvcHRpb25zKSB7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIGlmIChfLmlzRnVuY3Rpb24ob3B0aW9ucykpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMuY2FsbChvYmopO1xuICAgIH1cblxuICAgIHJldHVybiBfLm1lcmdlKGZuLmJpbmQoeyR2bTogb2JqLCAkb3B0aW9uczogb3B0aW9uc30pLCBmbiwgeyRvcHRpb25zOiBvcHRpb25zfSk7XG59O1xuXG5fLmVhY2ggPSBmdW5jdGlvbiAob2JqLCBpdGVyYXRvcikge1xuXG4gICAgdmFyIGksIGtleTtcblxuICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVyYXRvci5jYWxsKG9ialtpXSwgb2JqW2ldLCBpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXy5pc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IuY2FsbChvYmpba2V5XSwgb2JqW2tleV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxuXy5kZWZhdWx0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5fLmV4dGVuZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcblxuICAgIHZhciBhcmdzID0gYXJyYXkuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgYXJncy5mb3JFYWNoKGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgbWVyZ2UodGFyZ2V0LCBhcmcpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG5cbl8ubWVyZ2UgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG5cbiAgICB2YXIgYXJncyA9IGFycmF5LnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIGFyZ3MuZm9yRWFjaChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIG1lcmdlKHRhcmdldCwgYXJnLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgZGVlcCkge1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKGRlZXAgJiYgKF8uaXNQbGFpbk9iamVjdChzb3VyY2Vba2V5XSkgfHwgXy5pc0FycmF5KHNvdXJjZVtrZXldKSkpIHtcbiAgICAgICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3Qoc291cmNlW2tleV0pICYmICFfLmlzUGxhaW5PYmplY3QodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLmlzQXJyYXkoc291cmNlW2tleV0pICYmICFfLmlzQXJyYXkodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgZGVlcCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc291cmNlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qIVxuICogdnVlLXJvdXRlciB2MC43LjExXG4gKiAoYykgMjAxNiBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIGdsb2JhbC5WdWVSb3V0ZXIgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBiYWJlbEhlbHBlcnMgPSB7fTtcblxuICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9O1xuICBmdW5jdGlvbiBUYXJnZXQocGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpIHtcbiAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgIHRoaXMubWF0Y2hlciA9IG1hdGNoZXI7XG4gICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICB9XG5cbiAgVGFyZ2V0LnByb3RvdHlwZSA9IHtcbiAgICB0bzogZnVuY3Rpb24gdG8odGFyZ2V0LCBjYWxsYmFjaykge1xuICAgICAgdmFyIGRlbGVnYXRlID0gdGhpcy5kZWxlZ2F0ZTtcblxuICAgICAgaWYgKGRlbGVnYXRlICYmIGRlbGVnYXRlLndpbGxBZGRSb3V0ZSkge1xuICAgICAgICB0YXJnZXQgPSBkZWxlZ2F0ZS53aWxsQWRkUm91dGUodGhpcy5tYXRjaGVyLnRhcmdldCwgdGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXRjaGVyLmFkZCh0aGlzLnBhdGgsIHRhcmdldCk7XG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgaGF2ZSBhbiBhcmd1bWVudCBpbiB0aGUgZnVuY3Rpb24gcGFzc2VkIHRvIGB0b2BcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tYXRjaGVyLmFkZENoaWxkKHRoaXMucGF0aCwgdGFyZ2V0LCBjYWxsYmFjaywgdGhpcy5kZWxlZ2F0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gTWF0Y2hlcih0YXJnZXQpIHtcbiAgICB0aGlzLnJvdXRlcyA9IHt9O1xuICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIE1hdGNoZXIucHJvdG90eXBlID0ge1xuICAgIGFkZDogZnVuY3Rpb24gYWRkKHBhdGgsIGhhbmRsZXIpIHtcbiAgICAgIHRoaXMucm91dGVzW3BhdGhdID0gaGFuZGxlcjtcbiAgICB9LFxuXG4gICAgYWRkQ2hpbGQ6IGZ1bmN0aW9uIGFkZENoaWxkKHBhdGgsIHRhcmdldCwgY2FsbGJhY2ssIGRlbGVnYXRlKSB7XG4gICAgICB2YXIgbWF0Y2hlciA9IG5ldyBNYXRjaGVyKHRhcmdldCk7XG4gICAgICB0aGlzLmNoaWxkcmVuW3BhdGhdID0gbWF0Y2hlcjtcblxuICAgICAgdmFyIG1hdGNoID0gZ2VuZXJhdGVNYXRjaChwYXRoLCBtYXRjaGVyLCBkZWxlZ2F0ZSk7XG5cbiAgICAgIGlmIChkZWxlZ2F0ZSAmJiBkZWxlZ2F0ZS5jb250ZXh0RW50ZXJlZCkge1xuICAgICAgICBkZWxlZ2F0ZS5jb250ZXh0RW50ZXJlZCh0YXJnZXQsIG1hdGNoKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sobWF0Y2gpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZU1hdGNoKHN0YXJ0aW5nUGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGgsIG5lc3RlZENhbGxiYWNrKSB7XG4gICAgICB2YXIgZnVsbFBhdGggPSBzdGFydGluZ1BhdGggKyBwYXRoO1xuXG4gICAgICBpZiAobmVzdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgbmVzdGVkQ2FsbGJhY2soZ2VuZXJhdGVNYXRjaChmdWxsUGF0aCwgbWF0Y2hlciwgZGVsZWdhdGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KHN0YXJ0aW5nUGF0aCArIHBhdGgsIG1hdGNoZXIsIGRlbGVnYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkUm91dGUocm91dGVBcnJheSwgcGF0aCwgaGFuZGxlcikge1xuICAgIHZhciBsZW4gPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcm91dGVBcnJheS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxlbiArPSByb3V0ZUFycmF5W2ldLnBhdGgubGVuZ3RoO1xuICAgIH1cblxuICAgIHBhdGggPSBwYXRoLnN1YnN0cihsZW4pO1xuICAgIHZhciByb3V0ZSA9IHsgcGF0aDogcGF0aCwgaGFuZGxlcjogaGFuZGxlciB9O1xuICAgIHJvdXRlQXJyYXkucHVzaChyb3V0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBlYWNoUm91dGUoYmFzZVJvdXRlLCBtYXRjaGVyLCBjYWxsYmFjaywgYmluZGluZykge1xuICAgIHZhciByb3V0ZXMgPSBtYXRjaGVyLnJvdXRlcztcblxuICAgIGZvciAodmFyIHBhdGggaW4gcm91dGVzKSB7XG4gICAgICBpZiAocm91dGVzLmhhc093blByb3BlcnR5KHBhdGgpKSB7XG4gICAgICAgIHZhciByb3V0ZUFycmF5ID0gYmFzZVJvdXRlLnNsaWNlKCk7XG4gICAgICAgIGFkZFJvdXRlKHJvdXRlQXJyYXksIHBhdGgsIHJvdXRlc1twYXRoXSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXIuY2hpbGRyZW5bcGF0aF0pIHtcbiAgICAgICAgICBlYWNoUm91dGUocm91dGVBcnJheSwgbWF0Y2hlci5jaGlsZHJlbltwYXRoXSwgY2FsbGJhY2ssIGJpbmRpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrLmNhbGwoYmluZGluZywgcm91dGVBcnJheSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXAgKGNhbGxiYWNrLCBhZGRSb3V0ZUNhbGxiYWNrKSB7XG4gICAgdmFyIG1hdGNoZXIgPSBuZXcgTWF0Y2hlcigpO1xuXG4gICAgY2FsbGJhY2soZ2VuZXJhdGVNYXRjaChcIlwiLCBtYXRjaGVyLCB0aGlzLmRlbGVnYXRlKSk7XG5cbiAgICBlYWNoUm91dGUoW10sIG1hdGNoZXIsIGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgaWYgKGFkZFJvdXRlQ2FsbGJhY2spIHtcbiAgICAgICAgYWRkUm91dGVDYWxsYmFjayh0aGlzLCByb3V0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZChyb3V0ZSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICB2YXIgc3BlY2lhbHMgPSBbJy8nLCAnLicsICcqJywgJysnLCAnPycsICd8JywgJygnLCAnKScsICdbJywgJ10nLCAneycsICd9JywgJ1xcXFwnXTtcblxuICB2YXIgZXNjYXBlUmVnZXggPSBuZXcgUmVnRXhwKCcoXFxcXCcgKyBzcGVjaWFscy5qb2luKCd8XFxcXCcpICsgJyknLCAnZycpO1xuXG4gIGZ1bmN0aW9uIGlzQXJyYXkodGVzdCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGVzdCkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgfVxuXG4gIC8vIEEgU2VnbWVudCByZXByZXNlbnRzIGEgc2VnbWVudCBpbiB0aGUgb3JpZ2luYWwgcm91dGUgZGVzY3JpcHRpb24uXG4gIC8vIEVhY2ggU2VnbWVudCB0eXBlIHByb3ZpZGVzIGFuIGBlYWNoQ2hhcmAgYW5kIGByZWdleGAgbWV0aG9kLlxuICAvL1xuICAvLyBUaGUgYGVhY2hDaGFyYCBtZXRob2QgaW52b2tlcyB0aGUgY2FsbGJhY2sgd2l0aCBvbmUgb3IgbW9yZSBjaGFyYWN0ZXJcbiAgLy8gc3BlY2lmaWNhdGlvbnMuIEEgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gY29uc3VtZXMgb25lIG9yIG1vcmUgaW5wdXRcbiAgLy8gY2hhcmFjdGVycy5cbiAgLy9cbiAgLy8gVGhlIGByZWdleGAgbWV0aG9kIHJldHVybnMgYSByZWdleCBmcmFnbWVudCBmb3IgdGhlIHNlZ21lbnQuIElmIHRoZVxuICAvLyBzZWdtZW50IGlzIGEgZHluYW1pYyBvZiBzdGFyIHNlZ21lbnQsIHRoZSByZWdleCBmcmFnbWVudCBhbHNvIGluY2x1ZGVzXG4gIC8vIGEgY2FwdHVyZS5cbiAgLy9cbiAgLy8gQSBjaGFyYWN0ZXIgc3BlY2lmaWNhdGlvbiBjb250YWluczpcbiAgLy9cbiAgLy8gKiBgdmFsaWRDaGFyc2A6IGEgU3RyaW5nIHdpdGggYSBsaXN0IG9mIGFsbCB2YWxpZCBjaGFyYWN0ZXJzLCBvclxuICAvLyAqIGBpbnZhbGlkQ2hhcnNgOiBhIFN0cmluZyB3aXRoIGEgbGlzdCBvZiBhbGwgaW52YWxpZCBjaGFyYWN0ZXJzXG4gIC8vICogYHJlcGVhdGA6IHRydWUgaWYgdGhlIGNoYXJhY3RlciBzcGVjaWZpY2F0aW9uIGNhbiByZXBlYXRcblxuICBmdW5jdGlvbiBTdGF0aWNTZWdtZW50KHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICB9XG4gIFN0YXRpY1NlZ21lbnQucHJvdG90eXBlID0ge1xuICAgIGVhY2hDaGFyOiBmdW5jdGlvbiBlYWNoQ2hhcihjYWxsYmFjaykge1xuICAgICAgdmFyIHN0cmluZyA9IHRoaXMuc3RyaW5nLFxuICAgICAgICAgIGNoO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY2ggPSBzdHJpbmcuY2hhckF0KGkpO1xuICAgICAgICBjYWxsYmFjayh7IHZhbGlkQ2hhcnM6IGNoIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZWdleDogZnVuY3Rpb24gcmVnZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpbmcucmVwbGFjZShlc2NhcGVSZWdleCwgJ1xcXFwkMScpO1xuICAgIH0sXG5cbiAgICBnZW5lcmF0ZTogZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIER5bmFtaWNTZWdtZW50KG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG4gIER5bmFtaWNTZWdtZW50LnByb3RvdHlwZSA9IHtcbiAgICBlYWNoQ2hhcjogZnVuY3Rpb24gZWFjaENoYXIoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKHsgaW52YWxpZENoYXJzOiBcIi9cIiwgcmVwZWF0OiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICByZWdleDogZnVuY3Rpb24gcmVnZXgoKSB7XG4gICAgICByZXR1cm4gXCIoW14vXSspXCI7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlOiBmdW5jdGlvbiBnZW5lcmF0ZShwYXJhbXMpIHtcbiAgICAgIHZhciB2YWwgPSBwYXJhbXNbdGhpcy5uYW1lXTtcbiAgICAgIHJldHVybiB2YWwgPT0gbnVsbCA/IFwiOlwiICsgdGhpcy5uYW1lIDogdmFsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBTdGFyU2VnbWVudChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuICBTdGFyU2VnbWVudC5wcm90b3R5cGUgPSB7XG4gICAgZWFjaENoYXI6IGZ1bmN0aW9uIGVhY2hDaGFyKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayh7IGludmFsaWRDaGFyczogXCJcIiwgcmVwZWF0OiB0cnVlIH0pO1xuICAgIH0sXG5cbiAgICByZWdleDogZnVuY3Rpb24gcmVnZXgoKSB7XG4gICAgICByZXR1cm4gXCIoLispXCI7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlOiBmdW5jdGlvbiBnZW5lcmF0ZShwYXJhbXMpIHtcbiAgICAgIHZhciB2YWwgPSBwYXJhbXNbdGhpcy5uYW1lXTtcbiAgICAgIHJldHVybiB2YWwgPT0gbnVsbCA/IFwiOlwiICsgdGhpcy5uYW1lIDogdmFsO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBFcHNpbG9uU2VnbWVudCgpIHt9XG4gIEVwc2lsb25TZWdtZW50LnByb3RvdHlwZSA9IHtcbiAgICBlYWNoQ2hhcjogZnVuY3Rpb24gZWFjaENoYXIoKSB7fSxcbiAgICByZWdleDogZnVuY3Rpb24gcmVnZXgoKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9LFxuICAgIGdlbmVyYXRlOiBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBwYXJzZShyb3V0ZSwgbmFtZXMsIHNwZWNpZmljaXR5KSB7XG4gICAgLy8gbm9ybWFsaXplIHJvdXRlIGFzIG5vdCBzdGFydGluZyB3aXRoIGEgXCIvXCIuIFJlY29nbml0aW9uIHdpbGxcbiAgICAvLyBhbHNvIG5vcm1hbGl6ZS5cbiAgICBpZiAocm91dGUuY2hhckF0KDApID09PSBcIi9cIikge1xuICAgICAgcm91dGUgPSByb3V0ZS5zdWJzdHIoMSk7XG4gICAgfVxuXG4gICAgdmFyIHNlZ21lbnRzID0gcm91dGUuc3BsaXQoXCIvXCIpLFxuICAgICAgICByZXN1bHRzID0gW107XG5cbiAgICAvLyBBIHJvdXRlcyBoYXMgc3BlY2lmaWNpdHkgZGV0ZXJtaW5lZCBieSB0aGUgb3JkZXIgdGhhdCBpdHMgZGlmZmVyZW50IHNlZ21lbnRzXG4gICAgLy8gYXBwZWFyIGluLiBUaGlzIHN5c3RlbSBtaXJyb3JzIGhvdyB0aGUgbWFnbml0dWRlIG9mIG51bWJlcnMgd3JpdHRlbiBhcyBzdHJpbmdzXG4gICAgLy8gd29ya3MuXG4gICAgLy8gQ29uc2lkZXIgYSBudW1iZXIgd3JpdHRlbiBhczogXCJhYmNcIi4gQW4gZXhhbXBsZSB3b3VsZCBiZSBcIjIwMFwiLiBBbnkgb3RoZXIgbnVtYmVyIHdyaXR0ZW5cbiAgICAvLyBcInh5elwiIHdpbGwgYmUgc21hbGxlciB0aGFuIFwiYWJjXCIgc28gbG9uZyBhcyBgYSA+IHpgLiBGb3IgaW5zdGFuY2UsIFwiMTk5XCIgaXMgc21hbGxlclxuICAgIC8vIHRoZW4gXCIyMDBcIiwgZXZlbiB0aG91Z2ggXCJ5XCIgYW5kIFwielwiICh3aGljaCBhcmUgYm90aCA5KSBhcmUgbGFyZ2VyIHRoYW4gXCIwXCIgKHRoZSB2YWx1ZVxuICAgIC8vIG9mIChgYmAgYW5kIGBjYCkuIFRoaXMgaXMgYmVjYXVzZSB0aGUgbGVhZGluZyBzeW1ib2wsIFwiMlwiLCBpcyBsYXJnZXIgdGhhbiB0aGUgb3RoZXJcbiAgICAvLyBsZWFkaW5nIHN5bWJvbCwgXCIxXCIuXG4gICAgLy8gVGhlIHJ1bGUgaXMgdGhhdCBzeW1ib2xzIHRvIHRoZSBsZWZ0IGNhcnJ5IG1vcmUgd2VpZ2h0IHRoYW4gc3ltYm9scyB0byB0aGUgcmlnaHRcbiAgICAvLyB3aGVuIGEgbnVtYmVyIGlzIHdyaXR0ZW4gb3V0IGFzIGEgc3RyaW5nLiBJbiB0aGUgYWJvdmUgc3RyaW5ncywgdGhlIGxlYWRpbmcgZGlnaXRcbiAgICAvLyByZXByZXNlbnRzIGhvdyBtYW55IDEwMCdzIGFyZSBpbiB0aGUgbnVtYmVyLCBhbmQgaXQgY2FycmllcyBtb3JlIHdlaWdodCB0aGFuIHRoZSBtaWRkbGVcbiAgICAvLyBudW1iZXIgd2hpY2ggcmVwcmVzZW50cyBob3cgbWFueSAxMCdzIGFyZSBpbiB0aGUgbnVtYmVyLlxuICAgIC8vIFRoaXMgc3lzdGVtIG9mIG51bWJlciBtYWduaXR1ZGUgd29ya3Mgd2VsbCBmb3Igcm91dGUgc3BlY2lmaWNpdHksIHRvby4gQSByb3V0ZSB3cml0dGVuIGFzXG4gICAgLy8gYGEvYi9jYCB3aWxsIGJlIG1vcmUgc3BlY2lmaWMgdGhhbiBgeC95L3pgIGFzIGxvbmcgYXMgYGFgIGlzIG1vcmUgc3BlY2lmaWMgdGhhblxuICAgIC8vIGB4YCwgaXJyZXNwZWN0aXZlIG9mIHRoZSBvdGhlciBwYXJ0cy5cbiAgICAvLyBCZWNhdXNlIG9mIHRoaXMgc2ltaWxhcml0eSwgd2UgYXNzaWduIGVhY2ggdHlwZSBvZiBzZWdtZW50IGEgbnVtYmVyIHZhbHVlIHdyaXR0ZW4gYXMgYVxuICAgIC8vIHN0cmluZy4gV2UgY2FuIGZpbmQgdGhlIHNwZWNpZmljaXR5IG9mIGNvbXBvdW5kIHJvdXRlcyBieSBjb25jYXRlbmF0aW5nIHRoZXNlIHN0cmluZ3NcbiAgICAvLyB0b2dldGhlciwgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBBZnRlciB3ZSBoYXZlIGxvb3BlZCB0aHJvdWdoIGFsbCBvZiB0aGUgc2VnbWVudHMsXG4gICAgLy8gd2UgY29udmVydCB0aGUgc3RyaW5nIHRvIGEgbnVtYmVyLlxuICAgIHNwZWNpZmljaXR5LnZhbCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzZWdtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbaV0sXG4gICAgICAgICAgbWF0Y2g7XG5cbiAgICAgIGlmIChtYXRjaCA9IHNlZ21lbnQubWF0Y2goL146KFteXFwvXSspJC8pKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChuZXcgRHluYW1pY1NlZ21lbnQobWF0Y2hbMV0pKTtcbiAgICAgICAgbmFtZXMucHVzaChtYXRjaFsxXSk7XG4gICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnMyc7XG4gICAgICB9IGVsc2UgaWYgKG1hdGNoID0gc2VnbWVudC5tYXRjaCgvXlxcKihbXlxcL10rKSQvKSkge1xuICAgICAgICByZXN1bHRzLnB1c2gobmV3IFN0YXJTZWdtZW50KG1hdGNoWzFdKSk7XG4gICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnMic7XG4gICAgICAgIG5hbWVzLnB1c2gobWF0Y2hbMV0pO1xuICAgICAgfSBlbHNlIGlmIChzZWdtZW50ID09PSBcIlwiKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChuZXcgRXBzaWxvblNlZ21lbnQoKSk7XG4gICAgICAgIHNwZWNpZmljaXR5LnZhbCArPSAnMSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2gobmV3IFN0YXRpY1NlZ21lbnQoc2VnbWVudCkpO1xuICAgICAgICBzcGVjaWZpY2l0eS52YWwgKz0gJzQnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNwZWNpZmljaXR5LnZhbCA9ICtzcGVjaWZpY2l0eS52YWw7XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8vIEEgU3RhdGUgaGFzIGEgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gYW5kIChgY2hhclNwZWNgKSBhbmQgYSBsaXN0IG9mIHBvc3NpYmxlXG4gIC8vIHN1YnNlcXVlbnQgc3RhdGVzIChgbmV4dFN0YXRlc2ApLlxuICAvL1xuICAvLyBJZiBhIFN0YXRlIGlzIGFuIGFjY2VwdGluZyBzdGF0ZSwgaXQgd2lsbCBhbHNvIGhhdmUgc2V2ZXJhbCBhZGRpdGlvbmFsXG4gIC8vIHByb3BlcnRpZXM6XG4gIC8vXG4gIC8vICogYHJlZ2V4YDogQSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBpcyB1c2VkIHRvIGV4dHJhY3QgcGFyYW1ldGVycyBmcm9tIHBhdGhzXG4gIC8vICAgdGhhdCByZWFjaGVkIHRoaXMgYWNjZXB0aW5nIHN0YXRlLlxuICAvLyAqIGBoYW5kbGVyc2A6IEluZm9ybWF0aW9uIG9uIGhvdyB0byBjb252ZXJ0IHRoZSBsaXN0IG9mIGNhcHR1cmVzIGludG8gY2FsbHNcbiAgLy8gICB0byByZWdpc3RlcmVkIGhhbmRsZXJzIHdpdGggdGhlIHNwZWNpZmllZCBwYXJhbWV0ZXJzXG4gIC8vICogYHR5cGVzYDogSG93IG1hbnkgc3RhdGljLCBkeW5hbWljIG9yIHN0YXIgc2VnbWVudHMgaW4gdGhpcyByb3V0ZS4gVXNlZCB0b1xuICAvLyAgIGRlY2lkZSB3aGljaCByb3V0ZSB0byB1c2UgaWYgbXVsdGlwbGUgcmVnaXN0ZXJlZCByb3V0ZXMgbWF0Y2ggYSBwYXRoLlxuICAvL1xuICAvLyBDdXJyZW50bHksIFN0YXRlIGlzIGltcGxlbWVudGVkIG5haXZlbHkgYnkgbG9vcGluZyBvdmVyIGBuZXh0U3RhdGVzYCBhbmRcbiAgLy8gY29tcGFyaW5nIGEgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gYWdhaW5zdCBhIGNoYXJhY3Rlci4gQSBtb3JlIGVmZmljaWVudFxuICAvLyBpbXBsZW1lbnRhdGlvbiB3b3VsZCB1c2UgYSBoYXNoIG9mIGtleXMgcG9pbnRpbmcgYXQgb25lIG9yIG1vcmUgbmV4dCBzdGF0ZXMuXG5cbiAgZnVuY3Rpb24gU3RhdGUoY2hhclNwZWMpIHtcbiAgICB0aGlzLmNoYXJTcGVjID0gY2hhclNwZWM7XG4gICAgdGhpcy5uZXh0U3RhdGVzID0gW107XG4gIH1cblxuICBTdGF0ZS5wcm90b3R5cGUgPSB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoY2hhclNwZWMpIHtcbiAgICAgIHZhciBuZXh0U3RhdGVzID0gdGhpcy5uZXh0U3RhdGVzO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5leHRTdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5leHRTdGF0ZXNbaV07XG5cbiAgICAgICAgdmFyIGlzRXF1YWwgPSBjaGlsZC5jaGFyU3BlYy52YWxpZENoYXJzID09PSBjaGFyU3BlYy52YWxpZENoYXJzO1xuICAgICAgICBpc0VxdWFsID0gaXNFcXVhbCAmJiBjaGlsZC5jaGFyU3BlYy5pbnZhbGlkQ2hhcnMgPT09IGNoYXJTcGVjLmludmFsaWRDaGFycztcblxuICAgICAgICBpZiAoaXNFcXVhbCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwdXQ6IGZ1bmN0aW9uIHB1dChjaGFyU3BlYykge1xuICAgICAgdmFyIHN0YXRlO1xuXG4gICAgICAvLyBJZiB0aGUgY2hhcmFjdGVyIHNwZWNpZmljYXRpb24gYWxyZWFkeSBleGlzdHMgaW4gYSBjaGlsZCBvZiB0aGUgY3VycmVudFxuICAgICAgLy8gc3RhdGUsIGp1c3QgcmV0dXJuIHRoYXQgc3RhdGUuXG4gICAgICBpZiAoc3RhdGUgPSB0aGlzLmdldChjaGFyU3BlYykpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIGEgbmV3IHN0YXRlIGZvciB0aGUgY2hhcmFjdGVyIHNwZWNcbiAgICAgIHN0YXRlID0gbmV3IFN0YXRlKGNoYXJTcGVjKTtcblxuICAgICAgLy8gSW5zZXJ0IHRoZSBuZXcgc3RhdGUgYXMgYSBjaGlsZCBvZiB0aGUgY3VycmVudCBzdGF0ZVxuICAgICAgdGhpcy5uZXh0U3RhdGVzLnB1c2goc3RhdGUpO1xuXG4gICAgICAvLyBJZiB0aGlzIGNoYXJhY3RlciBzcGVjaWZpY2F0aW9uIHJlcGVhdHMsIGluc2VydCB0aGUgbmV3IHN0YXRlIGFzIGEgY2hpbGRcbiAgICAgIC8vIG9mIGl0c2VsZi4gTm90ZSB0aGF0IHRoaXMgd2lsbCBub3QgdHJpZ2dlciBhbiBpbmZpbml0ZSBsb29wIGJlY2F1c2UgZWFjaFxuICAgICAgLy8gdHJhbnNpdGlvbiBkdXJpbmcgcmVjb2duaXRpb24gY29uc3VtZXMgYSBjaGFyYWN0ZXIuXG4gICAgICBpZiAoY2hhclNwZWMucmVwZWF0KSB7XG4gICAgICAgIHN0YXRlLm5leHRTdGF0ZXMucHVzaChzdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybiB0aGUgbmV3IHN0YXRlXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIC8vIEZpbmQgYSBsaXN0IG9mIGNoaWxkIHN0YXRlcyBtYXRjaGluZyB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAgICBtYXRjaDogZnVuY3Rpb24gbWF0Y2goY2gpIHtcbiAgICAgIC8vIERFQlVHIFwiUHJvY2Vzc2luZyBgXCIgKyBjaCArIFwiYDpcIlxuICAgICAgdmFyIG5leHRTdGF0ZXMgPSB0aGlzLm5leHRTdGF0ZXMsXG4gICAgICAgICAgY2hpbGQsXG4gICAgICAgICAgY2hhclNwZWMsXG4gICAgICAgICAgY2hhcnM7XG5cbiAgICAgIC8vIERFQlVHIFwiICBcIiArIGRlYnVnU3RhdGUodGhpcylcbiAgICAgIHZhciByZXR1cm5lZCA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5leHRTdGF0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGNoaWxkID0gbmV4dFN0YXRlc1tpXTtcblxuICAgICAgICBjaGFyU3BlYyA9IGNoaWxkLmNoYXJTcGVjO1xuXG4gICAgICAgIGlmICh0eXBlb2YgKGNoYXJzID0gY2hhclNwZWMudmFsaWRDaGFycykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgaWYgKGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuZWQucHVzaChjaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoY2hhcnMgPSBjaGFyU3BlYy5pbnZhbGlkQ2hhcnMpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIGlmIChjaGFycy5pbmRleE9mKGNoKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybmVkLnB1c2goY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0dXJuZWQ7XG4gICAgfVxuXG4gICAgLyoqIElGIERFQlVHXG4gICAgLCBkZWJ1ZzogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2hhclNwZWMgPSB0aGlzLmNoYXJTcGVjLFxuICAgICAgICAgIGRlYnVnID0gXCJbXCIsXG4gICAgICAgICAgY2hhcnMgPSBjaGFyU3BlYy52YWxpZENoYXJzIHx8IGNoYXJTcGVjLmludmFsaWRDaGFycztcbiAgICAgICBpZiAoY2hhclNwZWMuaW52YWxpZENoYXJzKSB7IGRlYnVnICs9IFwiXlwiOyB9XG4gICAgICBkZWJ1ZyArPSBjaGFycztcbiAgICAgIGRlYnVnICs9IFwiXVwiO1xuICAgICAgIGlmIChjaGFyU3BlYy5yZXBlYXQpIHsgZGVidWcgKz0gXCIrXCI7IH1cbiAgICAgICByZXR1cm4gZGVidWc7XG4gICAgfVxuICAgIEVORCBJRiAqKi9cbiAgfTtcblxuICAvKiogSUYgREVCVUdcbiAgZnVuY3Rpb24gZGVidWcobG9nKSB7XG4gICAgY29uc29sZS5sb2cobG9nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYnVnU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUubmV4dFN0YXRlcy5tYXAoZnVuY3Rpb24obikge1xuICAgICAgaWYgKG4ubmV4dFN0YXRlcy5sZW5ndGggPT09IDApIHsgcmV0dXJuIFwiKCBcIiArIG4uZGVidWcoKSArIFwiIFthY2NlcHRpbmddIClcIjsgfVxuICAgICAgcmV0dXJuIFwiKCBcIiArIG4uZGVidWcoKSArIFwiIDx0aGVuPiBcIiArIG4ubmV4dFN0YXRlcy5tYXAoZnVuY3Rpb24ocykgeyByZXR1cm4gcy5kZWJ1ZygpIH0pLmpvaW4oXCIgb3IgXCIpICsgXCIgKVwiO1xuICAgIH0pLmpvaW4oXCIsIFwiKVxuICB9XG4gIEVORCBJRiAqKi9cblxuICAvLyBTb3J0IHRoZSByb3V0ZXMgYnkgc3BlY2lmaWNpdHlcbiAgZnVuY3Rpb24gc29ydFNvbHV0aW9ucyhzdGF0ZXMpIHtcbiAgICByZXR1cm4gc3RhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBiLnNwZWNpZmljaXR5LnZhbCAtIGEuc3BlY2lmaWNpdHkudmFsO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVjb2duaXplQ2hhcihzdGF0ZXMsIGNoKSB7XG4gICAgdmFyIG5leHRTdGF0ZXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHN0YXRlID0gc3RhdGVzW2ldO1xuXG4gICAgICBuZXh0U3RhdGVzID0gbmV4dFN0YXRlcy5jb25jYXQoc3RhdGUubWF0Y2goY2gpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dFN0YXRlcztcbiAgfVxuXG4gIHZhciBvQ3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiAocHJvdG8pIHtcbiAgICBmdW5jdGlvbiBGKCkge31cbiAgICBGLnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHJldHVybiBuZXcgRigpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFJlY29nbml6ZVJlc3VsdHMocXVlcnlQYXJhbXMpIHtcbiAgICB0aGlzLnF1ZXJ5UGFyYW1zID0gcXVlcnlQYXJhbXMgfHwge307XG4gIH1cbiAgUmVjb2duaXplUmVzdWx0cy5wcm90b3R5cGUgPSBvQ3JlYXRlKHtcbiAgICBzcGxpY2U6IEFycmF5LnByb3RvdHlwZS5zcGxpY2UsXG4gICAgc2xpY2U6IEFycmF5LnByb3RvdHlwZS5zbGljZSxcbiAgICBwdXNoOiBBcnJheS5wcm90b3R5cGUucHVzaCxcbiAgICBsZW5ndGg6IDAsXG4gICAgcXVlcnlQYXJhbXM6IG51bGxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZmluZEhhbmRsZXIoc3RhdGUsIHBhdGgsIHF1ZXJ5UGFyYW1zKSB7XG4gICAgdmFyIGhhbmRsZXJzID0gc3RhdGUuaGFuZGxlcnMsXG4gICAgICAgIHJlZ2V4ID0gc3RhdGUucmVnZXg7XG4gICAgdmFyIGNhcHR1cmVzID0gcGF0aC5tYXRjaChyZWdleCksXG4gICAgICAgIGN1cnJlbnRDYXB0dXJlID0gMTtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IFJlY29nbml6ZVJlc3VsdHMocXVlcnlQYXJhbXMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBoYW5kbGVyID0gaGFuZGxlcnNbaV0sXG4gICAgICAgICAgbmFtZXMgPSBoYW5kbGVyLm5hbWVzLFxuICAgICAgICAgIHBhcmFtcyA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBqID0gMCwgbSA9IG5hbWVzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgICBwYXJhbXNbbmFtZXNbal1dID0gY2FwdHVyZXNbY3VycmVudENhcHR1cmUrK107XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKHsgaGFuZGxlcjogaGFuZGxlci5oYW5kbGVyLCBwYXJhbXM6IHBhcmFtcywgaXNEeW5hbWljOiAhIW5hbWVzLmxlbmd0aCB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2VnbWVudChjdXJyZW50U3RhdGUsIHNlZ21lbnQpIHtcbiAgICBzZWdtZW50LmVhY2hDaGFyKGZ1bmN0aW9uIChjaCkge1xuICAgICAgdmFyIHN0YXRlO1xuXG4gICAgICBjdXJyZW50U3RhdGUgPSBjdXJyZW50U3RhdGUucHV0KGNoKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyZW50U3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGVRdWVyeVBhcmFtUGFydChwYXJ0KSB7XG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDQwMS9pbnRlcmFjdC9mb3Jtcy5odG1sI2gtMTcuMTMuNC4xXG4gICAgcGFydCA9IHBhcnQucmVwbGFjZSgvXFwrL2dtLCAnJTIwJyk7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJ0KTtcbiAgfVxuXG4gIC8vIFRoZSBtYWluIGludGVyZmFjZVxuXG4gIHZhciBSb3V0ZVJlY29nbml6ZXIgPSBmdW5jdGlvbiBSb3V0ZVJlY29nbml6ZXIoKSB7XG4gICAgdGhpcy5yb290U3RhdGUgPSBuZXcgU3RhdGUoKTtcbiAgICB0aGlzLm5hbWVzID0ge307XG4gIH07XG5cbiAgUm91dGVSZWNvZ25pemVyLnByb3RvdHlwZSA9IHtcbiAgICBhZGQ6IGZ1bmN0aW9uIGFkZChyb3V0ZXMsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBjdXJyZW50U3RhdGUgPSB0aGlzLnJvb3RTdGF0ZSxcbiAgICAgICAgICByZWdleCA9IFwiXlwiLFxuICAgICAgICAgIHNwZWNpZmljaXR5ID0ge30sXG4gICAgICAgICAgaGFuZGxlcnMgPSBbXSxcbiAgICAgICAgICBhbGxTZWdtZW50cyA9IFtdLFxuICAgICAgICAgIG5hbWU7XG5cbiAgICAgIHZhciBpc0VtcHR5ID0gdHJ1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSByb3V0ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlc1tpXSxcbiAgICAgICAgICAgIG5hbWVzID0gW107XG5cbiAgICAgICAgdmFyIHNlZ21lbnRzID0gcGFyc2Uocm91dGUucGF0aCwgbmFtZXMsIHNwZWNpZmljaXR5KTtcblxuICAgICAgICBhbGxTZWdtZW50cyA9IGFsbFNlZ21lbnRzLmNvbmNhdChzZWdtZW50cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG0gPSBzZWdtZW50cy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICB2YXIgc2VnbWVudCA9IHNlZ21lbnRzW2pdO1xuXG4gICAgICAgICAgaWYgKHNlZ21lbnQgaW5zdGFuY2VvZiBFcHNpbG9uU2VnbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaXNFbXB0eSA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gQWRkIGEgXCIvXCIgZm9yIHRoZSBuZXcgc2VnbWVudFxuICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRTdGF0ZS5wdXQoeyB2YWxpZENoYXJzOiBcIi9cIiB9KTtcbiAgICAgICAgICByZWdleCArPSBcIi9cIjtcblxuICAgICAgICAgIC8vIEFkZCBhIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBzZWdtZW50IHRvIHRoZSBORkEgYW5kIHJlZ2V4XG4gICAgICAgICAgY3VycmVudFN0YXRlID0gYWRkU2VnbWVudChjdXJyZW50U3RhdGUsIHNlZ21lbnQpO1xuICAgICAgICAgIHJlZ2V4ICs9IHNlZ21lbnQucmVnZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYW5kbGVyID0geyBoYW5kbGVyOiByb3V0ZS5oYW5kbGVyLCBuYW1lczogbmFtZXMgfTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFN0YXRlLnB1dCh7IHZhbGlkQ2hhcnM6IFwiL1wiIH0pO1xuICAgICAgICByZWdleCArPSBcIi9cIjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFN0YXRlLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgICBjdXJyZW50U3RhdGUucmVnZXggPSBuZXcgUmVnRXhwKHJlZ2V4ICsgXCIkXCIpO1xuICAgICAgY3VycmVudFN0YXRlLnNwZWNpZmljaXR5ID0gc3BlY2lmaWNpdHk7XG5cbiAgICAgIGlmIChuYW1lID0gb3B0aW9ucyAmJiBvcHRpb25zLmFzKSB7XG4gICAgICAgIHRoaXMubmFtZXNbbmFtZV0gPSB7XG4gICAgICAgICAgc2VnbWVudHM6IGFsbFNlZ21lbnRzLFxuICAgICAgICAgIGhhbmRsZXJzOiBoYW5kbGVyc1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBoYW5kbGVyc0ZvcjogZnVuY3Rpb24gaGFuZGxlcnNGb3IobmFtZSkge1xuICAgICAgdmFyIHJvdXRlID0gdGhpcy5uYW1lc1tuYW1lXSxcbiAgICAgICAgICByZXN1bHQgPSBbXTtcbiAgICAgIGlmICghcm91dGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgaXMgbm8gcm91dGUgbmFtZWQgXCIgKyBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSByb3V0ZS5oYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocm91dGUuaGFuZGxlcnNbaV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICBoYXNSb3V0ZTogZnVuY3Rpb24gaGFzUm91dGUobmFtZSkge1xuICAgICAgcmV0dXJuICEhdGhpcy5uYW1lc1tuYW1lXTtcbiAgICB9LFxuXG4gICAgZ2VuZXJhdGU6IGZ1bmN0aW9uIGdlbmVyYXRlKG5hbWUsIHBhcmFtcykge1xuICAgICAgdmFyIHJvdXRlID0gdGhpcy5uYW1lc1tuYW1lXSxcbiAgICAgICAgICBvdXRwdXQgPSBcIlwiO1xuICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyByb3V0ZSBuYW1lZCBcIiArIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VnbWVudHMgPSByb3V0ZS5zZWdtZW50cztcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBzZWdtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIHNlZ21lbnQgPSBzZWdtZW50c1tpXTtcblxuICAgICAgICBpZiAoc2VnbWVudCBpbnN0YW5jZW9mIEVwc2lsb25TZWdtZW50KSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQgKz0gXCIvXCI7XG4gICAgICAgIG91dHB1dCArPSBzZWdtZW50LmdlbmVyYXRlKHBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvdXRwdXQuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICAgICAgb3V0cHV0ID0gJy8nICsgb3V0cHV0O1xuICAgICAgfVxuXG4gICAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5xdWVyeVBhcmFtcykge1xuICAgICAgICBvdXRwdXQgKz0gdGhpcy5nZW5lcmF0ZVF1ZXJ5U3RyaW5nKHBhcmFtcy5xdWVyeVBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSxcblxuICAgIGdlbmVyYXRlUXVlcnlTdHJpbmc6IGZ1bmN0aW9uIGdlbmVyYXRlUXVlcnlTdHJpbmcocGFyYW1zKSB7XG4gICAgICB2YXIgcGFpcnMgPSBbXTtcbiAgICAgIHZhciBrZXlzID0gW107XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBrZXlzLnNvcnQoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtc1trZXldO1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWlyID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICB2YXIgYXJyYXlQYWlyID0ga2V5ICsgJ1tdJyArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVtqXSk7XG4gICAgICAgICAgICBwYWlycy5wdXNoKGFycmF5UGFpcik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhaXIgKz0gXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgIHBhaXJzLnB1c2gocGFpcik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHBhaXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcIj9cIiArIHBhaXJzLmpvaW4oXCImXCIpO1xuICAgIH0sXG5cbiAgICBwYXJzZVF1ZXJ5U3RyaW5nOiBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nKSB7XG4gICAgICB2YXIgcGFpcnMgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIiksXG4gICAgICAgICAgcXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpLFxuICAgICAgICAgICAga2V5ID0gZGVjb2RlUXVlcnlQYXJhbVBhcnQocGFpclswXSksXG4gICAgICAgICAgICBrZXlMZW5ndGggPSBrZXkubGVuZ3RoLFxuICAgICAgICAgICAgaXNBcnJheSA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU7XG4gICAgICAgIGlmIChwYWlyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHZhbHVlID0gJ3RydWUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vSGFuZGxlIGFycmF5c1xuICAgICAgICAgIGlmIChrZXlMZW5ndGggPiAyICYmIGtleS5zbGljZShrZXlMZW5ndGggLSAyKSA9PT0gJ1tdJykge1xuICAgICAgICAgICAgaXNBcnJheSA9IHRydWU7XG4gICAgICAgICAgICBrZXkgPSBrZXkuc2xpY2UoMCwga2V5TGVuZ3RoIC0gMik7XG4gICAgICAgICAgICBpZiAoIXF1ZXJ5UGFyYW1zW2tleV0pIHtcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXNba2V5XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB2YWx1ZSA9IHBhaXJbMV0gPyBkZWNvZGVRdWVyeVBhcmFtUGFydChwYWlyWzFdKSA6ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgcXVlcnlQYXJhbXNba2V5XS5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBxdWVyeVBhcmFtcztcbiAgICB9LFxuXG4gICAgcmVjb2duaXplOiBmdW5jdGlvbiByZWNvZ25pemUocGF0aCkge1xuICAgICAgdmFyIHN0YXRlcyA9IFt0aGlzLnJvb3RTdGF0ZV0sXG4gICAgICAgICAgcGF0aExlbixcbiAgICAgICAgICBpLFxuICAgICAgICAgIGwsXG4gICAgICAgICAgcXVlcnlTdGFydCxcbiAgICAgICAgICBxdWVyeVBhcmFtcyA9IHt9LFxuICAgICAgICAgIGlzU2xhc2hEcm9wcGVkID0gZmFsc2U7XG5cbiAgICAgIHF1ZXJ5U3RhcnQgPSBwYXRoLmluZGV4T2YoJz8nKTtcbiAgICAgIGlmIChxdWVyeVN0YXJ0ICE9PSAtMSkge1xuICAgICAgICB2YXIgcXVlcnlTdHJpbmcgPSBwYXRoLnN1YnN0cihxdWVyeVN0YXJ0ICsgMSwgcGF0aC5sZW5ndGgpO1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgcXVlcnlTdGFydCk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zID0gdGhpcy5wYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nKTtcbiAgICAgIH1cblxuICAgICAgcGF0aCA9IGRlY29kZVVSSShwYXRoKTtcblxuICAgICAgLy8gREVCVUcgR1JPVVAgcGF0aFxuXG4gICAgICBpZiAocGF0aC5jaGFyQXQoMCkgIT09IFwiL1wiKSB7XG4gICAgICAgIHBhdGggPSBcIi9cIiArIHBhdGg7XG4gICAgICB9XG5cbiAgICAgIHBhdGhMZW4gPSBwYXRoLmxlbmd0aDtcbiAgICAgIGlmIChwYXRoTGVuID4gMSAmJiBwYXRoLmNoYXJBdChwYXRoTGVuIC0gMSkgPT09IFwiL1wiKSB7XG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBwYXRoTGVuIC0gMSk7XG4gICAgICAgIGlzU2xhc2hEcm9wcGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgZm9yIChpID0gMCwgbCA9IHBhdGgubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHN0YXRlcyA9IHJlY29nbml6ZUNoYXIoc3RhdGVzLCBwYXRoLmNoYXJBdChpKSk7XG4gICAgICAgIGlmICghc3RhdGVzLmxlbmd0aCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEVORCBERUJVRyBHUk9VUFxuXG4gICAgICB2YXIgc29sdXRpb25zID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsID0gc3RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoc3RhdGVzW2ldLmhhbmRsZXJzKSB7XG4gICAgICAgICAgc29sdXRpb25zLnB1c2goc3RhdGVzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdGF0ZXMgPSBzb3J0U29sdXRpb25zKHNvbHV0aW9ucyk7XG5cbiAgICAgIHZhciBzdGF0ZSA9IHNvbHV0aW9uc1swXTtcblxuICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmhhbmRsZXJzKSB7XG4gICAgICAgIC8vIGlmIGEgdHJhaWxpbmcgc2xhc2ggd2FzIGRyb3BwZWQgYW5kIGEgc3RhciBzZWdtZW50IGlzIHRoZSBsYXN0IHNlZ21lbnRcbiAgICAgICAgLy8gc3BlY2lmaWVkLCBwdXQgdGhlIHRyYWlsaW5nIHNsYXNoIGJhY2tcbiAgICAgICAgaWYgKGlzU2xhc2hEcm9wcGVkICYmIHN0YXRlLnJlZ2V4LnNvdXJjZS5zbGljZSgtNSkgPT09IFwiKC4rKSRcIikge1xuICAgICAgICAgIHBhdGggPSBwYXRoICsgXCIvXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbmRIYW5kbGVyKHN0YXRlLCBwYXRoLCBxdWVyeVBhcmFtcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFJvdXRlUmVjb2duaXplci5wcm90b3R5cGUubWFwID0gbWFwO1xuXG4gIFJvdXRlUmVjb2duaXplci5WRVJTSU9OID0gJzAuMS45JztcblxuICB2YXIgZ2VuUXVlcnkgPSBSb3V0ZVJlY29nbml6ZXIucHJvdG90eXBlLmdlbmVyYXRlUXVlcnlTdHJpbmc7XG5cbiAgLy8gZXhwb3J0IGRlZmF1bHQgZm9yIGhvbGRpbmcgdGhlIFZ1ZSByZWZlcmVuY2VcbiAgdmFyIGV4cG9ydHMkMSA9IHt9O1xuICAvKipcbiAgICogV2FybiBzdHVmZi5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IG1zZ1xuICAgKi9cblxuICBmdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1t2dWUtcm91dGVyXSAnICsgbXNnKTtcbiAgICAgIGlmICghZXhwb3J0cyQxLlZ1ZSB8fCBleHBvcnRzJDEuVnVlLmNvbmZpZy5kZWJ1Zykge1xuICAgICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCd3YXJuaW5nIHN0YWNrIHRyYWNlOicpLnN0YWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSBhIHJlbGF0aXZlIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSByZWxhdGl2ZVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGFwcGVuZFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlc29sdmVQYXRoKGJhc2UsIHJlbGF0aXZlLCBhcHBlbmQpIHtcbiAgICB2YXIgcXVlcnkgPSBiYXNlLm1hdGNoKC8oXFw/LiopJC8pO1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgcXVlcnkgPSBxdWVyeVsxXTtcbiAgICAgIGJhc2UgPSBiYXNlLnNsaWNlKDAsIC1xdWVyeS5sZW5ndGgpO1xuICAgIH1cbiAgICAvLyBhIHF1ZXJ5IVxuICAgIGlmIChyZWxhdGl2ZS5jaGFyQXQoMCkgPT09ICc/Jykge1xuICAgICAgcmV0dXJuIGJhc2UgKyByZWxhdGl2ZTtcbiAgICB9XG4gICAgdmFyIHN0YWNrID0gYmFzZS5zcGxpdCgnLycpO1xuICAgIC8vIHJlbW92ZSB0cmFpbGluZyBzZWdtZW50IGlmOlxuICAgIC8vIC0gbm90IGFwcGVuZGluZ1xuICAgIC8vIC0gYXBwZW5kaW5nIHRvIHRyYWlsaW5nIHNsYXNoIChsYXN0IHNlZ21lbnQgaXMgZW1wdHkpXG4gICAgaWYgKCFhcHBlbmQgfHwgIXN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdKSB7XG4gICAgICBzdGFjay5wb3AoKTtcbiAgICB9XG4gICAgLy8gcmVzb2x2ZSByZWxhdGl2ZSBwYXRoXG4gICAgdmFyIHNlZ21lbnRzID0gcmVsYXRpdmUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzZWdtZW50ID0gc2VnbWVudHNbaV07XG4gICAgICBpZiAoc2VnbWVudCA9PT0gJy4nKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChzZWdtZW50ID09PSAnLi4nKSB7XG4gICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhY2sucHVzaChzZWdtZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZW5zdXJlIGxlYWRpbmcgc2xhc2hcbiAgICBpZiAoc3RhY2tbMF0gIT09ICcnKSB7XG4gICAgICBzdGFjay51bnNoaWZ0KCcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YWNrLmpvaW4oJy8nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JnaXZpbmcgY2hlY2sgZm9yIGEgcHJvbWlzZVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cblxuICBmdW5jdGlvbiBpc1Byb21pc2UocCkge1xuICAgIHJldHVybiBwICYmIHR5cGVvZiBwLnRoZW4gPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICAvKipcbiAgICogUmV0cml2ZSBhIHJvdXRlIGNvbmZpZyBmaWVsZCBmcm9tIGEgY29tcG9uZW50IGluc3RhbmNlXG4gICAqIE9SIGEgY29tcG9uZW50IGNvbnRydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb258VnVlfSBjb21wb25lbnRcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG5cbiAgZnVuY3Rpb24gZ2V0Um91dGVDb25maWcoY29tcG9uZW50LCBuYW1lKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBjb21wb25lbnQgJiYgKGNvbXBvbmVudC4kb3B0aW9ucyB8fCBjb21wb25lbnQub3B0aW9ucyk7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5yb3V0ZSAmJiBvcHRpb25zLnJvdXRlW25hbWVdO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYW4gYXN5bmMgY29tcG9uZW50IGZhY3RvcnkuIEhhdmUgdG8gZG8gYSBkaXJ0eVxuICAgKiBtb2NrIGhlcmUgYmVjYXVzZSBvZiBWdWUgY29yZSdzIGludGVybmFsIEFQSSBkZXBlbmRzIG9uXG4gICAqIGFuIElEIGNoZWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICAgKi9cblxuICB2YXIgcmVzb2x2ZXIgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGhhbmRsZXIsIGNiKSB7XG4gICAgaWYgKCFyZXNvbHZlcikge1xuICAgICAgcmVzb2x2ZXIgPSB7XG4gICAgICAgIHJlc29sdmU6IGV4cG9ydHMkMS5WdWUucHJvdG90eXBlLl9yZXNvbHZlQ29tcG9uZW50LFxuICAgICAgICAkb3B0aW9uczoge1xuICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIF86IGhhbmRsZXIuY29tcG9uZW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlci4kb3B0aW9ucy5jb21wb25lbnRzLl8gPSBoYW5kbGVyLmNvbXBvbmVudDtcbiAgICB9XG4gICAgcmVzb2x2ZXIucmVzb2x2ZSgnXycsIGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gQ29tcG9uZW50O1xuICAgICAgY2IoQ29tcG9uZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXAgdGhlIGR5bmFtaWMgc2VnbWVudHMgaW4gYSBwYXRoIHRvIHBhcmFtcy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcXVlcnlcbiAgICovXG5cbiAgZnVuY3Rpb24gbWFwUGFyYW1zKHBhdGgsIHBhcmFtcywgcXVlcnkpIHtcbiAgICBpZiAocGFyYW1zID09PSB1bmRlZmluZWQpIHBhcmFtcyA9IHt9O1xuXG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvOihbXlxcL10rKS9nLCBmdW5jdGlvbiAoXywga2V5KSB7XG4gICAgICB2YXIgdmFsID0gcGFyYW1zW2tleV07XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghdmFsKSB7XG4gICAgICAgIHdhcm4oJ3BhcmFtIFwiJyArIGtleSArICdcIiBub3QgZm91bmQgd2hlbiBnZW5lcmF0aW5nICcgKyAncGF0aCBmb3IgXCInICsgcGF0aCArICdcIiB3aXRoIHBhcmFtcyAnICsgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsIHx8ICcnO1xuICAgIH0pO1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgcGF0aCArPSBnZW5RdWVyeShxdWVyeSk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgdmFyIGhhc2hSRSA9IC8jLiokLztcblxuICB2YXIgSFRNTDVIaXN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIVE1MNUhpc3RvcnkoX3JlZikge1xuICAgICAgdmFyIHJvb3QgPSBfcmVmLnJvb3Q7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuICAgICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIEhUTUw1SGlzdG9yeSk7XG5cbiAgICAgIGlmIChyb290KSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIHRoZSBzdGFydGluZyBzbGFzaFxuICAgICAgICBpZiAocm9vdC5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICAgIHJvb3QgPSAnLycgKyByb290O1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlbW92ZSB0cmFpbGluZyBzbGFzaFxuICAgICAgICB0aGlzLnJvb3QgPSByb290LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgICAgIHRoaXMucm9vdFJFID0gbmV3IFJlZ0V4cCgnXlxcXFwnICsgdGhpcy5yb290KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucm9vdCA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hhbmdlID0gb25DaGFuZ2U7XG4gICAgICAvLyBjaGVjayBiYXNlIHRhZ1xuICAgICAgdmFyIGJhc2VFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKTtcbiAgICAgIHRoaXMuYmFzZSA9IGJhc2VFbCAmJiBiYXNlRWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgfVxuXG4gICAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB1cmwgPSBkZWNvZGVVUkkobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBpZiAoX3RoaXMucm9vdCkge1xuICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKF90aGlzLnJvb3RSRSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLm9uQ2hhbmdlKHVybCwgZSAmJiBlLnN0YXRlLCBsb2NhdGlvbi5oYXNoKTtcbiAgICAgIH07XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgSFRNTDVIaXN0b3J5LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMubGlzdGVuZXIpO1xuICAgIH07XG5cbiAgICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28ocGF0aCwgcmVwbGFjZSwgYXBwZW5kKSB7XG4gICAgICB2YXIgdXJsID0gdGhpcy5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCk7XG4gICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICBoaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgJycsIHVybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZWNvcmQgc2Nyb2xsIHBvc2l0aW9uIGJ5IHJlcGxhY2luZyBjdXJyZW50IHN0YXRlXG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHtcbiAgICAgICAgICBwb3M6IHtcbiAgICAgICAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgIH1cbiAgICAgICAgfSwgJycsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAvLyB0aGVuIHB1c2ggbmV3IHN0YXRlXG4gICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICAgIH1cbiAgICAgIHZhciBoYXNoTWF0Y2ggPSBwYXRoLm1hdGNoKGhhc2hSRSk7XG4gICAgICB2YXIgaGFzaCA9IGhhc2hNYXRjaCAmJiBoYXNoTWF0Y2hbMF07XG4gICAgICBwYXRoID0gdXJsXG4gICAgICAvLyBzdHJpcCBoYXNoIHNvIGl0IGRvZXNuJ3QgbWVzcyB1cCBwYXJhbXNcbiAgICAgIC5yZXBsYWNlKGhhc2hSRSwgJycpXG4gICAgICAvLyByZW1vdmUgcm9vdCBiZWZvcmUgbWF0Y2hpbmdcbiAgICAgIC5yZXBsYWNlKHRoaXMucm9vdFJFLCAnJyk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHBhdGgsIG51bGwsIGhhc2gpO1xuICAgIH07XG5cbiAgICBIVE1MNUhpc3RvcnkucHJvdG90eXBlLmZvcm1hdFBhdGggPSBmdW5jdGlvbiBmb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLydcbiAgICAgIC8vIGFic29sdXRlIHBhdGhcbiAgICAgID8gdGhpcy5yb290ID8gdGhpcy5yb290ICsgJy8nICsgcGF0aC5yZXBsYWNlKC9eXFwvLywgJycpIDogcGF0aCA6IHJlc29sdmVQYXRoKHRoaXMuYmFzZSB8fCBsb2NhdGlvbi5wYXRobmFtZSwgcGF0aCwgYXBwZW5kKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEhUTUw1SGlzdG9yeTtcbiAgfSkoKTtcblxuICB2YXIgSGFzaEhpc3RvcnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhhc2hIaXN0b3J5KF9yZWYpIHtcbiAgICAgIHZhciBoYXNoYmFuZyA9IF9yZWYuaGFzaGJhbmc7XG4gICAgICB2YXIgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuICAgICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIEhhc2hIaXN0b3J5KTtcblxuICAgICAgdGhpcy5oYXNoYmFuZyA9IGhhc2hiYW5nO1xuICAgICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgIH1cblxuICAgIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhdGggPSBsb2NhdGlvbi5oYXNoO1xuICAgICAgICB2YXIgcmF3ID0gcGF0aC5yZXBsYWNlKC9eIyE/LywgJycpO1xuICAgICAgICAvLyBhbHdheXNcbiAgICAgICAgaWYgKHJhdy5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgICAgIHJhdyA9ICcvJyArIHJhdztcbiAgICAgICAgfVxuICAgICAgICB2YXIgZm9ybWF0dGVkUGF0aCA9IHNlbGYuZm9ybWF0UGF0aChyYXcpO1xuICAgICAgICBpZiAoZm9ybWF0dGVkUGF0aCAhPT0gcGF0aCkge1xuICAgICAgICAgIGxvY2F0aW9uLnJlcGxhY2UoZm9ybWF0dGVkUGF0aCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRldGVybWluZSBxdWVyeVxuICAgICAgICAvLyBub3RlIGl0J3MgcG9zc2libGUgdG8gaGF2ZSBxdWVyaWVzIGluIGJvdGggdGhlIGFjdHVhbCBVUkxcbiAgICAgICAgLy8gYW5kIHRoZSBoYXNoIGZyYWdtZW50IGl0c2VsZi5cbiAgICAgICAgdmFyIHF1ZXJ5ID0gbG9jYXRpb24uc2VhcmNoICYmIHBhdGguaW5kZXhPZignPycpID4gLTEgPyAnJicgKyBsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkgOiBsb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgIHNlbGYub25DaGFuZ2UoZGVjb2RlVVJJKHBhdGgucmVwbGFjZSgvXiMhPy8sICcnKSArIHF1ZXJ5KSk7XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICAgIHRoaXMubGlzdGVuZXIoKTtcbiAgICB9O1xuXG4gICAgSGFzaEhpc3RvcnkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICB9O1xuXG4gICAgSGFzaEhpc3RvcnkucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28ocGF0aCwgcmVwbGFjZSwgYXBwZW5kKSB7XG4gICAgICBwYXRoID0gdGhpcy5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCk7XG4gICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICBsb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9IHBhdGg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEhhc2hIaXN0b3J5LnByb3RvdHlwZS5mb3JtYXRQYXRoID0gZnVuY3Rpb24gZm9ybWF0UGF0aChwYXRoLCBhcHBlbmQpIHtcbiAgICAgIHZhciBpc0Fic29sb3V0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gICAgICB2YXIgcHJlZml4ID0gJyMnICsgKHRoaXMuaGFzaGJhbmcgPyAnIScgOiAnJyk7XG4gICAgICByZXR1cm4gaXNBYnNvbG91dGUgPyBwcmVmaXggKyBwYXRoIDogcHJlZml4ICsgcmVzb2x2ZVBhdGgobG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIyE/LywgJycpLCBwYXRoLCBhcHBlbmQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gSGFzaEhpc3Rvcnk7XG4gIH0pKCk7XG5cbiAgdmFyIEFic3RyYWN0SGlzdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWJzdHJhY3RIaXN0b3J5KF9yZWYpIHtcbiAgICAgIHZhciBvbkNoYW5nZSA9IF9yZWYub25DaGFuZ2U7XG4gICAgICBiYWJlbEhlbHBlcnMuY2xhc3NDYWxsQ2hlY2sodGhpcywgQWJzdHJhY3RIaXN0b3J5KTtcblxuICAgICAgdGhpcy5vbkNoYW5nZSA9IG9uQ2hhbmdlO1xuICAgICAgdGhpcy5jdXJyZW50UGF0aCA9ICcvJztcbiAgICB9XG5cbiAgICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCcvJyk7XG4gICAgfTtcblxuICAgIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAvLyBub29wXG4gICAgfTtcblxuICAgIEFic3RyYWN0SGlzdG9yeS5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbiBnbyhwYXRoLCByZXBsYWNlLCBhcHBlbmQpIHtcbiAgICAgIHBhdGggPSB0aGlzLmN1cnJlbnRQYXRoID0gdGhpcy5mb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCk7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHBhdGgpO1xuICAgIH07XG5cbiAgICBBYnN0cmFjdEhpc3RvcnkucHJvdG90eXBlLmZvcm1hdFBhdGggPSBmdW5jdGlvbiBmb3JtYXRQYXRoKHBhdGgsIGFwcGVuZCkge1xuICAgICAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSAnLycgPyBwYXRoIDogcmVzb2x2ZVBhdGgodGhpcy5jdXJyZW50UGF0aCwgcGF0aCwgYXBwZW5kKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFic3RyYWN0SGlzdG9yeTtcbiAgfSkoKTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHRoZSByZXVzYWJpbGl0eSBvZiBhbiBleGlzdGluZyByb3V0ZXIgdmlldy5cbiAgICpcbiAgICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNhblJldXNlKHZpZXcsIGhhbmRsZXIsIHRyYW5zaXRpb24pIHtcbiAgICB2YXIgY29tcG9uZW50ID0gdmlldy5jaGlsZFZNO1xuICAgIGlmICghY29tcG9uZW50IHx8ICFoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIGltcG9ydGFudDogY2hlY2sgdmlldy5Db21wb25lbnQgaGVyZSBiZWNhdXNlIGl0IG1heVxuICAgIC8vIGhhdmUgYmVlbiBjaGFuZ2VkIGluIGFjdGl2YXRlIGhvb2tcbiAgICBpZiAodmlldy5Db21wb25lbnQgIT09IGhhbmRsZXIuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBjYW5SZXVzZUZuID0gZ2V0Um91dGVDb25maWcoY29tcG9uZW50LCAnY2FuUmV1c2UnKTtcbiAgICByZXR1cm4gdHlwZW9mIGNhblJldXNlRm4gPT09ICdib29sZWFuJyA/IGNhblJldXNlRm4gOiBjYW5SZXVzZUZuID8gY2FuUmV1c2VGbi5jYWxsKGNvbXBvbmVudCwge1xuICAgICAgdG86IHRyYW5zaXRpb24udG8sXG4gICAgICBmcm9tOiB0cmFuc2l0aW9uLmZyb21cbiAgICB9KSA6IHRydWU7IC8vIGRlZmF1bHRzIHRvIHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGNvbXBvbmVudCBjYW4gZGVhY3RpdmF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAgICovXG5cbiAgZnVuY3Rpb24gY2FuRGVhY3RpdmF0ZSh2aWV3LCB0cmFuc2l0aW9uLCBuZXh0KSB7XG4gICAgdmFyIGZyb21Db21wb25lbnQgPSB2aWV3LmNoaWxkVk07XG4gICAgdmFyIGhvb2sgPSBnZXRSb3V0ZUNvbmZpZyhmcm9tQ29tcG9uZW50LCAnY2FuRGVhY3RpdmF0ZScpO1xuICAgIGlmICghaG9vaykge1xuICAgICAgbmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2l0aW9uLmNhbGxIb29rKGhvb2ssIGZyb21Db21wb25lbnQsIG5leHQsIHtcbiAgICAgICAgZXhwZWN0Qm9vbGVhbjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgY29tcG9uZW50IGNhbiBhY3RpdmF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAgICovXG5cbiAgZnVuY3Rpb24gY2FuQWN0aXZhdGUoaGFuZGxlciwgdHJhbnNpdGlvbiwgbmV4dCkge1xuICAgIHJlc29sdmVBc3luY0NvbXBvbmVudChoYW5kbGVyLCBmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gICAgICAvLyBoYXZlIHRvIGNoZWNrIGR1ZSB0byBhc3luYy1uZXNzXG4gICAgICBpZiAodHJhbnNpdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGRldGVybWluZSBpZiB0aGlzIGNvbXBvbmVudCBjYW4gYmUgYWN0aXZhdGVkXG4gICAgICB2YXIgaG9vayA9IGdldFJvdXRlQ29uZmlnKENvbXBvbmVudCwgJ2NhbkFjdGl2YXRlJyk7XG4gICAgICBpZiAoIWhvb2spIHtcbiAgICAgICAgbmV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNpdGlvbi5jYWxsSG9vayhob29rLCBudWxsLCBuZXh0LCB7XG4gICAgICAgICAgZXhwZWN0Qm9vbGVhbjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGRlYWN0aXZhdGUgaG9va3MgZm9yIGV4aXN0aW5nIHJvdXRlci12aWV3cy5cbiAgICpcbiAgICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAgICogQHBhcmFtIHtUcmFuc2l0aW9ufSB0cmFuc2l0aW9uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRcbiAgICovXG5cbiAgZnVuY3Rpb24gZGVhY3RpdmF0ZSh2aWV3LCB0cmFuc2l0aW9uLCBuZXh0KSB7XG4gICAgdmFyIGNvbXBvbmVudCA9IHZpZXcuY2hpbGRWTTtcbiAgICB2YXIgaG9vayA9IGdldFJvdXRlQ29uZmlnKGNvbXBvbmVudCwgJ2RlYWN0aXZhdGUnKTtcbiAgICBpZiAoIWhvb2spIHtcbiAgICAgIG5leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNpdGlvbi5jYWxsSG9va3MoaG9vaywgY29tcG9uZW50LCBuZXh0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWN0aXZhdGUgLyBzd2l0Y2ggY29tcG9uZW50IGZvciBhIHJvdXRlci12aWV3LlxuICAgKlxuICAgKiBAcGFyYW0ge0RpcmVjdGl2ZX0gdmlld1xuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRlcHRoXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICovXG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUodmlldywgdHJhbnNpdGlvbiwgZGVwdGgsIGNiLCByZXVzZSkge1xuICAgIHZhciBoYW5kbGVyID0gdHJhbnNpdGlvbi5hY3RpdmF0ZVF1ZXVlW2RlcHRoXTtcbiAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgIHNhdmVDaGlsZFZpZXcodmlldyk7XG4gICAgICBpZiAodmlldy5fYm91bmQpIHtcbiAgICAgICAgdmlldy5zZXRDb21wb25lbnQobnVsbCk7XG4gICAgICB9XG4gICAgICBjYiAmJiBjYigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBDb21wb25lbnQgPSB2aWV3LkNvbXBvbmVudCA9IGhhbmRsZXIuY29tcG9uZW50O1xuICAgIHZhciBhY3RpdmF0ZUhvb2sgPSBnZXRSb3V0ZUNvbmZpZyhDb21wb25lbnQsICdhY3RpdmF0ZScpO1xuICAgIHZhciBkYXRhSG9vayA9IGdldFJvdXRlQ29uZmlnKENvbXBvbmVudCwgJ2RhdGEnKTtcbiAgICB2YXIgd2FpdEZvckRhdGEgPSBnZXRSb3V0ZUNvbmZpZyhDb21wb25lbnQsICd3YWl0Rm9yRGF0YScpO1xuXG4gICAgdmlldy5kZXB0aCA9IGRlcHRoO1xuICAgIHZpZXcuYWN0aXZhdGVkID0gZmFsc2U7XG5cbiAgICB2YXIgY29tcG9uZW50ID0gdW5kZWZpbmVkO1xuICAgIHZhciBsb2FkaW5nID0gISEoZGF0YUhvb2sgJiYgIXdhaXRGb3JEYXRhKTtcblxuICAgIC8vIFwicmV1c2VcIiBpcyBhIGZsYWcgcGFzc2VkIGRvd24gd2hlbiB0aGUgcGFyZW50IHZpZXcgaXNcbiAgICAvLyBlaXRoZXIgcmV1c2VkIHZpYSBrZWVwLWFsaXZlIG9yIGFzIGEgY2hpbGQgb2YgYSBrZXB0LWFsaXZlIHZpZXcuXG4gICAgLy8gb2YgY291cnNlIHdlIGNhbiBvbmx5IHJldXNlIGlmIHRoZSBjdXJyZW50IGtlcHQtYWxpdmUgaW5zdGFuY2VcbiAgICAvLyBpcyBvZiB0aGUgY29ycmVjdCB0eXBlLlxuICAgIHJldXNlID0gcmV1c2UgJiYgdmlldy5jaGlsZFZNICYmIHZpZXcuY2hpbGRWTS5jb25zdHJ1Y3RvciA9PT0gQ29tcG9uZW50O1xuXG4gICAgaWYgKHJldXNlKSB7XG4gICAgICAvLyBqdXN0IHJldXNlXG4gICAgICBjb21wb25lbnQgPSB2aWV3LmNoaWxkVk07XG4gICAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSBsb2FkaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYXZlQ2hpbGRWaWV3KHZpZXcpO1xuXG4gICAgICAvLyB1bmJ1aWxkIGN1cnJlbnQgY29tcG9uZW50LiB0aGlzIHN0ZXAgYWxzbyBkZXN0cm95c1xuICAgICAgLy8gYW5kIHJlbW92ZXMgYWxsIG5lc3RlZCBjaGlsZCB2aWV3cy5cbiAgICAgIHZpZXcudW5idWlsZCh0cnVlKTtcblxuICAgICAgLy8gYnVpbGQgdGhlIG5ldyBjb21wb25lbnQuIHRoaXMgd2lsbCBhbHNvIGNyZWF0ZSB0aGVcbiAgICAgIC8vIGRpcmVjdCBjaGlsZCB2aWV3IG9mIHRoZSBjdXJyZW50IG9uZS4gaXQgd2lsbCByZWdpc3RlclxuICAgICAgLy8gaXRzZWxmIGFzIHZpZXcuY2hpbGRWaWV3LlxuICAgICAgY29tcG9uZW50ID0gdmlldy5idWlsZCh7XG4gICAgICAgIF9tZXRhOiB7XG4gICAgICAgICAgJGxvYWRpbmdSb3V0ZURhdGE6IGxvYWRpbmdcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICAgICAgICB0aGlzLl9yb3V0ZXJWaWV3ID0gdmlldztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIGhhbmRsZSBrZWVwLWFsaXZlLlxuICAgICAgLy8gd2hlbiBhIGtlcHQtYWxpdmUgY2hpbGQgdm0gaXMgcmVzdG9yZWQsIHdlIG5lZWQgdG9cbiAgICAgIC8vIGFkZCBpdHMgY2FjaGVkIGNoaWxkIHZpZXdzIGludG8gdGhlIHJvdXRlcidzIHZpZXcgbGlzdCxcbiAgICAgIC8vIGFuZCBhbHNvIHByb3Blcmx5IHVwZGF0ZSBjdXJyZW50IHZpZXcncyBjaGlsZCB2aWV3LlxuICAgICAgaWYgKHZpZXcua2VlcEFsaXZlKSB7XG4gICAgICAgIGNvbXBvbmVudC4kbG9hZGluZ1JvdXRlRGF0YSA9IGxvYWRpbmc7XG4gICAgICAgIHZhciBjYWNoZWRDaGlsZFZpZXcgPSBjb21wb25lbnQuX2tlZXBBbGl2ZVJvdXRlclZpZXc7XG4gICAgICAgIGlmIChjYWNoZWRDaGlsZFZpZXcpIHtcbiAgICAgICAgICB2aWV3LmNoaWxkVmlldyA9IGNhY2hlZENoaWxkVmlldztcbiAgICAgICAgICBjb21wb25lbnQuX2tlZXBBbGl2ZVJvdXRlclZpZXcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2xlYW51cCB0aGUgY29tcG9uZW50IGluIGNhc2UgdGhlIHRyYW5zaXRpb24gaXMgYWJvcnRlZFxuICAgIC8vIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIGV2ZXIgaW5zZXJ0ZWQuXG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgY29tcG9uZW50LiRkZXN0cm95KCk7XG4gICAgfTtcblxuICAgIC8vIGFjdHVhbGx5IGluc2VydCB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VyIHRyYW5zaXRpb25cbiAgICB2YXIgaW5zZXJ0ID0gZnVuY3Rpb24gaW5zZXJ0KCkge1xuICAgICAgaWYgKHJldXNlKSB7XG4gICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciByb3V0ZXIgPSB0cmFuc2l0aW9uLnJvdXRlcjtcbiAgICAgIGlmIChyb3V0ZXIuX3JlbmRlcmVkIHx8IHJvdXRlci5fdHJhbnNpdGlvbk9uTG9hZCkge1xuICAgICAgICB2aWV3LnRyYW5zaXRpb24oY29tcG9uZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vIHRyYW5zaXRpb24gb24gZmlyc3QgcmVuZGVyLCBtYW51YWwgdHJhbnNpdGlvblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHZpZXcuc2V0Q3VycmVudCkge1xuICAgICAgICAgIC8vIDAuMTIgY29tcGF0XG4gICAgICAgICAgdmlldy5zZXRDdXJyZW50KGNvbXBvbmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gMS4wXG4gICAgICAgICAgdmlldy5jaGlsZFZNID0gY29tcG9uZW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC4kYmVmb3JlKHZpZXcuYW5jaG9yLCBudWxsLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBjYiAmJiBjYigpO1xuICAgIH07XG5cbiAgICB2YXIgYWZ0ZXJEYXRhID0gZnVuY3Rpb24gYWZ0ZXJEYXRhKCkge1xuICAgICAgLy8gYWN0aXZhdGUgdGhlIGNoaWxkIHZpZXdcbiAgICAgIGlmICh2aWV3LmNoaWxkVmlldykge1xuICAgICAgICBhY3RpdmF0ZSh2aWV3LmNoaWxkVmlldywgdHJhbnNpdGlvbiwgZGVwdGggKyAxLCBudWxsLCByZXVzZSB8fCB2aWV3LmtlZXBBbGl2ZSk7XG4gICAgICB9XG4gICAgICBpbnNlcnQoKTtcbiAgICB9O1xuXG4gICAgLy8gY2FsbGVkIGFmdGVyIGFjdGl2YXRpb24gaG9vayBpcyByZXNvbHZlZFxuICAgIHZhciBhZnRlckFjdGl2YXRlID0gZnVuY3Rpb24gYWZ0ZXJBY3RpdmF0ZSgpIHtcbiAgICAgIHZpZXcuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIGlmIChkYXRhSG9vayAmJiB3YWl0Rm9yRGF0YSkge1xuICAgICAgICAvLyB3YWl0IHVudGlsIGRhdGEgbG9hZGVkIHRvIGluc2VydFxuICAgICAgICBsb2FkRGF0YShjb21wb25lbnQsIHRyYW5zaXRpb24sIGRhdGFIb29rLCBhZnRlckRhdGEsIGNsZWFudXApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbG9hZCBkYXRhIGFuZCBpbnNlcnQgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICBpZiAoZGF0YUhvb2spIHtcbiAgICAgICAgICBsb2FkRGF0YShjb21wb25lbnQsIHRyYW5zaXRpb24sIGRhdGFIb29rKTtcbiAgICAgICAgfVxuICAgICAgICBhZnRlckRhdGEoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGFjdGl2YXRlSG9vaykge1xuICAgICAgdHJhbnNpdGlvbi5jYWxsSG9va3MoYWN0aXZhdGVIb29rLCBjb21wb25lbnQsIGFmdGVyQWN0aXZhdGUsIHtcbiAgICAgICAgY2xlYW51cDogY2xlYW51cCxcbiAgICAgICAgcG9zdEFjdGl2YXRlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWZ0ZXJBY3RpdmF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXVzZSBhIHZpZXcsIGp1c3QgcmVsb2FkIGRhdGEgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiBAcGFyYW0ge0RpcmVjdGl2ZX0gdmlld1xuICAgKiBAcGFyYW0ge1RyYW5zaXRpb259IHRyYW5zaXRpb25cbiAgICovXG5cbiAgZnVuY3Rpb24gcmV1c2UodmlldywgdHJhbnNpdGlvbikge1xuICAgIHZhciBjb21wb25lbnQgPSB2aWV3LmNoaWxkVk07XG4gICAgdmFyIGRhdGFIb29rID0gZ2V0Um91dGVDb25maWcoY29tcG9uZW50LCAnZGF0YScpO1xuICAgIGlmIChkYXRhSG9vaykge1xuICAgICAgbG9hZERhdGEoY29tcG9uZW50LCB0cmFuc2l0aW9uLCBkYXRhSG9vayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFzeW5jaHJvbm91c2x5IGxvYWQgYW5kIGFwcGx5IGRhdGEgdG8gY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gY29tcG9uZW50XG4gICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNsZWFudXBcbiAgICovXG5cbiAgZnVuY3Rpb24gbG9hZERhdGEoY29tcG9uZW50LCB0cmFuc2l0aW9uLCBob29rLCBjYiwgY2xlYW51cCkge1xuICAgIGNvbXBvbmVudC4kbG9hZGluZ1JvdXRlRGF0YSA9IHRydWU7XG4gICAgdHJhbnNpdGlvbi5jYWxsSG9va3MoaG9vaywgY29tcG9uZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb21wb25lbnQuJGxvYWRpbmdSb3V0ZURhdGEgPSBmYWxzZTtcbiAgICAgIGNvbXBvbmVudC4kZW1pdCgncm91dGUtZGF0YS1sb2FkZWQnLCBjb21wb25lbnQpO1xuICAgICAgY2IgJiYgY2IoKTtcbiAgICB9LCB7XG4gICAgICBjbGVhbnVwOiBjbGVhbnVwLFxuICAgICAgcG9zdEFjdGl2YXRlOiB0cnVlLFxuICAgICAgcHJvY2Vzc0RhdGE6IGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpIHtcbiAgICAgICAgLy8gaGFuZGxlIHByb21pc2Ugc3VnYXIgc3ludGF4XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICBpZiAoaXNQbGFpbk9iamVjdChkYXRhKSkge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgdmFyIHZhbCA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIGlmIChpc1Byb21pc2UodmFsKSkge1xuICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHZhbC50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZFZhbCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kc2V0KGtleSwgcmVzb2x2ZWRWYWwpO1xuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb21wb25lbnQuJHNldChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiBwcm9taXNlc1swXS5jb25zdHJ1Y3Rvci5hbGwocHJvbWlzZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB0aGUgY2hpbGQgdmlldyBmb3IgYSBrZXB0LWFsaXZlIHZpZXcgc28gdGhhdFxuICAgKiB3ZSBjYW4gcmVzdG9yZSBpdCB3aGVuIGl0IGlzIHN3aXRjaGVkIGJhY2sgdG8uXG4gICAqXG4gICAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3XG4gICAqL1xuXG4gIGZ1bmN0aW9uIHNhdmVDaGlsZFZpZXcodmlldykge1xuICAgIGlmICh2aWV3LmtlZXBBbGl2ZSAmJiB2aWV3LmNoaWxkVk0gJiYgdmlldy5jaGlsZFZpZXcpIHtcbiAgICAgIHZpZXcuY2hpbGRWTS5fa2VlcEFsaXZlUm91dGVyVmlldyA9IHZpZXcuY2hpbGRWaWV3O1xuICAgIH1cbiAgICB2aWV3LmNoaWxkVmlldyA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgcGxhaW4gb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbFxuICAgKi9cblxuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG4gIH1cblxuICAvKipcbiAgICogQSBSb3V0ZVRyYW5zaXRpb24gb2JqZWN0IG1hbmFnZXMgdGhlIHBpcGVsaW5lIG9mIGFcbiAgICogcm91dGVyLXZpZXcgc3dpdGNoaW5nIHByb2Nlc3MuIFRoaXMgaXMgYWxzbyB0aGUgb2JqZWN0XG4gICAqIHBhc3NlZCBpbnRvIHVzZXIgcm91dGUgaG9va3MuXG4gICAqXG4gICAqIEBwYXJhbSB7Um91dGVyfSByb3V0ZXJcbiAgICogQHBhcmFtIHtSb3V0ZX0gdG9cbiAgICogQHBhcmFtIHtSb3V0ZX0gZnJvbVxuICAgKi9cblxuICB2YXIgUm91dGVUcmFuc2l0aW9uID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSb3V0ZVRyYW5zaXRpb24ocm91dGVyLCB0bywgZnJvbSkge1xuICAgICAgYmFiZWxIZWxwZXJzLmNsYXNzQ2FsbENoZWNrKHRoaXMsIFJvdXRlVHJhbnNpdGlvbik7XG5cbiAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgICAgdGhpcy50byA9IHRvO1xuICAgICAgdGhpcy5mcm9tID0gZnJvbTtcbiAgICAgIHRoaXMubmV4dCA9IG51bGw7XG4gICAgICB0aGlzLmFib3J0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFib3J0IGN1cnJlbnQgdHJhbnNpdGlvbiBhbmQgcmV0dXJuIHRvIHByZXZpb3VzIGxvY2F0aW9uLlxuICAgICAqL1xuXG4gICAgUm91dGVUcmFuc2l0aW9uLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgaWYgKCF0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gaWYgdGhlIHJvb3QgcGF0aCB0aHJvd3MgYW4gZXJyb3IgZHVyaW5nIHZhbGlkYXRpb25cbiAgICAgICAgLy8gb24gaW5pdGlhbCBsb2FkLCBpdCBnZXRzIGNhdWdodCBpbiBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgICB2YXIgYWJvcnRpbmdPbkxvYWQgPSAhdGhpcy5mcm9tLnBhdGggJiYgdGhpcy50by5wYXRoID09PSAnLyc7XG4gICAgICAgIGlmICghYWJvcnRpbmdPbkxvYWQpIHtcbiAgICAgICAgICB0aGlzLnJvdXRlci5yZXBsYWNlKHRoaXMuZnJvbS5wYXRoIHx8ICcvJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWJvcnQgY3VycmVudCB0cmFuc2l0aW9uIGFuZCByZWRpcmVjdCB0byBhIG5ldyBsb2NhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAgICovXG5cbiAgICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QocGF0aCkge1xuICAgICAgaWYgKCF0aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgdGhpcy5hYm9ydGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHBhdGggPSBtYXBQYXJhbXMocGF0aCwgdGhpcy50by5wYXJhbXMsIHRoaXMudG8ucXVlcnkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhdGgucGFyYW1zID0gcGF0aC5wYXJhbXMgfHwgdGhpcy50by5wYXJhbXM7XG4gICAgICAgICAgcGF0aC5xdWVyeSA9IHBhdGgucXVlcnkgfHwgdGhpcy50by5xdWVyeTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvdXRlci5yZXBsYWNlKHBhdGgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIHJvdXRlciB2aWV3IHRyYW5zaXRpb24ncyBwaXBlbGluZSBjYW4gYmUgZGVzY3JpYmVkIGFzXG4gICAgICogZm9sbG93cywgYXNzdW1pbmcgd2UgYXJlIHRyYW5zaXRpb25pbmcgZnJvbSBhbiBleGlzdGluZ1xuICAgICAqIDxyb3V0ZXItdmlldz4gY2hhaW4gW0NvbXBvbmVudCBBLCBDb21wb25lbnQgQl0gdG8gYSBuZXdcbiAgICAgKiBjaGFpbiBbQ29tcG9uZW50IEEsIENvbXBvbmVudCBDXTpcbiAgICAgKlxuICAgICAqICBBICAgIEFcbiAgICAgKiAgfCA9PiB8XG4gICAgICogIEIgICAgQ1xuICAgICAqXG4gICAgICogMS4gUmV1c2FibGl0eSBwaGFzZTpcbiAgICAgKiAgIC0+IGNhblJldXNlKEEsIEEpXG4gICAgICogICAtPiBjYW5SZXVzZShCLCBDKVxuICAgICAqICAgLT4gZGV0ZXJtaW5lIG5ldyBxdWV1ZXM6XG4gICAgICogICAgICAtIGRlYWN0aXZhdGlvbjogW0JdXG4gICAgICogICAgICAtIGFjdGl2YXRpb246IFtDXVxuICAgICAqXG4gICAgICogMi4gVmFsaWRhdGlvbiBwaGFzZTpcbiAgICAgKiAgIC0+IGNhbkRlYWN0aXZhdGUoQilcbiAgICAgKiAgIC0+IGNhbkFjdGl2YXRlKEMpXG4gICAgICpcbiAgICAgKiAzLiBBY3RpdmF0aW9uIHBoYXNlOlxuICAgICAqICAgLT4gZGVhY3RpdmF0ZShCKVxuICAgICAqICAgLT4gYWN0aXZhdGUoQylcbiAgICAgKlxuICAgICAqIEVhY2ggb2YgdGhlc2Ugc3RlcHMgY2FuIGJlIGFzeW5jaHJvbm91cywgYW5kIGFueVxuICAgICAqIHN0ZXAgY2FuIHBvdGVudGlhbGx5IGFib3J0IHRoZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAgICAgKi9cblxuICAgIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChjYikge1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzO1xuXG4gICAgICAvLyBkZXRlcm1pbmUgdGhlIHF1ZXVlIG9mIHZpZXdzIHRvIGRlYWN0aXZhdGVcbiAgICAgIHZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICAgIHZhciB2aWV3ID0gdGhpcy5yb3V0ZXIuX3Jvb3RWaWV3O1xuICAgICAgd2hpbGUgKHZpZXcpIHtcbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnVuc2hpZnQodmlldyk7XG4gICAgICAgIHZpZXcgPSB2aWV3LmNoaWxkVmlldztcbiAgICAgIH1cbiAgICAgIHZhciByZXZlcnNlRGVhY3RpdmF0ZVF1ZXVlID0gZGVhY3RpdmF0ZVF1ZXVlLnNsaWNlKCkucmV2ZXJzZSgpO1xuXG4gICAgICAvLyBkZXRlcm1pbmUgdGhlIHF1ZXVlIG9mIHJvdXRlIGhhbmRsZXJzIHRvIGFjdGl2YXRlXG4gICAgICB2YXIgYWN0aXZhdGVRdWV1ZSA9IHRoaXMuYWN0aXZhdGVRdWV1ZSA9IHRvQXJyYXkodGhpcy50by5tYXRjaGVkKS5tYXAoZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC5oYW5kbGVyO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIDEuIFJldXNhYmlsaXR5IHBoYXNlXG4gICAgICB2YXIgaSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICByZXVzZVF1ZXVlID0gdW5kZWZpbmVkO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHJldmVyc2VEZWFjdGl2YXRlUXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFjYW5SZXVzZShyZXZlcnNlRGVhY3RpdmF0ZVF1ZXVlW2ldLCBhY3RpdmF0ZVF1ZXVlW2ldLCB0cmFuc2l0aW9uKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgcmV1c2VRdWV1ZSA9IHJldmVyc2VEZWFjdGl2YXRlUXVldWUuc2xpY2UoMCwgaSk7XG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZSA9IHJldmVyc2VEZWFjdGl2YXRlUXVldWUuc2xpY2UoaSkucmV2ZXJzZSgpO1xuICAgICAgICBhY3RpdmF0ZVF1ZXVlID0gYWN0aXZhdGVRdWV1ZS5zbGljZShpKTtcbiAgICAgIH1cblxuICAgICAgLy8gMi4gVmFsaWRhdGlvbiBwaGFzZVxuICAgICAgdHJhbnNpdGlvbi5ydW5RdWV1ZShkZWFjdGl2YXRlUXVldWUsIGNhbkRlYWN0aXZhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5ydW5RdWV1ZShhY3RpdmF0ZVF1ZXVlLCBjYW5BY3RpdmF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRyYW5zaXRpb24ucnVuUXVldWUoZGVhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAzLiBBY3RpdmF0aW9uIHBoYXNlXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSByb3V0ZXIgY3VycmVudCByb3V0ZVxuICAgICAgICAgICAgdHJhbnNpdGlvbi5yb3V0ZXIuX29uVHJhbnNpdGlvblZhbGlkYXRlZCh0cmFuc2l0aW9uKTtcblxuICAgICAgICAgICAgLy8gdHJpZ2dlciByZXVzZSBmb3IgYWxsIHJldXNlZCB2aWV3c1xuICAgICAgICAgICAgcmV1c2VRdWV1ZSAmJiByZXVzZVF1ZXVlLmZvckVhY2goZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJldXNlKHZpZXcsIHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIHRoZSByb290IG9mIHRoZSBjaGFpbiB0aGF0IG5lZWRzIHRvIGJlIHJlcGxhY2VkXG4gICAgICAgICAgICAvLyBpcyB0aGUgdG9wLW1vc3Qgbm9uLXJldXNhYmxlIHZpZXcuXG4gICAgICAgICAgICBpZiAoZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICB2YXIgX3ZpZXcgPSBkZWFjdGl2YXRlUXVldWVbZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICB2YXIgZGVwdGggPSByZXVzZVF1ZXVlID8gcmV1c2VRdWV1ZS5sZW5ndGggOiAwO1xuICAgICAgICAgICAgICBhY3RpdmF0ZShfdmlldywgdHJhbnNpdGlvbiwgZGVwdGgsIGNiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFzeW5jaHJvbm91c2x5IGFuZCBzZXF1ZW50aWFsbHkgYXBwbHkgYSBmdW5jdGlvbiB0byBhXG4gICAgICogcXVldWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBxdWV1ZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAgICAgKi9cblxuICAgIFJvdXRlVHJhbnNpdGlvbi5wcm90b3R5cGUucnVuUXVldWUgPSBmdW5jdGlvbiBydW5RdWV1ZShxdWV1ZSwgZm4sIGNiKSB7XG4gICAgICB2YXIgdHJhbnNpdGlvbiA9IHRoaXM7XG4gICAgICBzdGVwKDApO1xuICAgICAgZnVuY3Rpb24gc3RlcChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgY2IoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmbihxdWV1ZVtpbmRleF0sIHRyYW5zaXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0ZXAoaW5kZXggKyAxKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYWxsIGEgdXNlciBwcm92aWRlZCByb3V0ZSB0cmFuc2l0aW9uIGhvb2sgYW5kIGhhbmRsZVxuICAgICAqIHRoZSByZXNwb25zZSAoZS5nLiBpZiB0aGUgdXNlciByZXR1cm5zIGEgcHJvbWlzZSkuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgdXNlciBuZWl0aGVyIGV4cGVjdHMgYW4gYXJndW1lbnQgbm9yIHJldHVybnMgYVxuICAgICAqIHByb21pc2UsIHRoZSBob29rIGlzIGFzc3VtZWQgdG8gYmUgc3luY2hyb25vdXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gICAgICogQHBhcmFtIHsqfSBbY29udGV4dF1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBleHBlY3RCb29sZWFuXG4gICAgICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHBvc3RBY3RpdmVcbiAgICAgKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IHByb2Nlc3NEYXRhXG4gICAgICogICAgICAgICAgICAgICAgIC0ge0Z1bmN0aW9ufSBjbGVhbnVwXG4gICAgICovXG5cbiAgICBSb3V0ZVRyYW5zaXRpb24ucHJvdG90eXBlLmNhbGxIb29rID0gZnVuY3Rpb24gY2FsbEhvb2soaG9vaywgY29udGV4dCwgY2IpIHtcbiAgICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbM107XG5cbiAgICAgIHZhciBfcmVmJGV4cGVjdEJvb2xlYW4gPSBfcmVmLmV4cGVjdEJvb2xlYW47XG4gICAgICB2YXIgZXhwZWN0Qm9vbGVhbiA9IF9yZWYkZXhwZWN0Qm9vbGVhbiA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGV4cGVjdEJvb2xlYW47XG4gICAgICB2YXIgX3JlZiRwb3N0QWN0aXZhdGUgPSBfcmVmLnBvc3RBY3RpdmF0ZTtcbiAgICAgIHZhciBwb3N0QWN0aXZhdGUgPSBfcmVmJHBvc3RBY3RpdmF0ZSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHBvc3RBY3RpdmF0ZTtcbiAgICAgIHZhciBwcm9jZXNzRGF0YSA9IF9yZWYucHJvY2Vzc0RhdGE7XG4gICAgICB2YXIgY2xlYW51cCA9IF9yZWYuY2xlYW51cDtcblxuICAgICAgdmFyIHRyYW5zaXRpb24gPSB0aGlzO1xuICAgICAgdmFyIG5leHRDYWxsZWQgPSBmYWxzZTtcblxuICAgICAgLy8gYWJvcnQgdGhlIHRyYW5zaXRpb25cbiAgICAgIHZhciBhYm9ydCA9IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgICBjbGVhbnVwICYmIGNsZWFudXAoKTtcbiAgICAgICAgdHJhbnNpdGlvbi5hYm9ydCgpO1xuICAgICAgfTtcblxuICAgICAgLy8gaGFuZGxlIGVycm9yc1xuICAgICAgdmFyIG9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yKGVycikge1xuICAgICAgICBwb3N0QWN0aXZhdGUgPyBuZXh0KCkgOiBhYm9ydCgpO1xuICAgICAgICBpZiAoZXJyICYmICF0cmFuc2l0aW9uLnJvdXRlci5fc3VwcHJlc3MpIHtcbiAgICAgICAgICB3YXJuKCdVbmNhdWdodCBlcnJvciBkdXJpbmcgdHJhbnNpdGlvbjogJyk7XG4gICAgICAgICAgdGhyb3cgZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIgOiBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gc2luY2UgcHJvbWlzZSBzd2FsbG93cyBlcnJvcnMsIHdlIGhhdmUgdG9cbiAgICAgIC8vIHRocm93IGl0IGluIHRoZSBuZXh0IHRpY2suLi5cbiAgICAgIHZhciBvblByb21pc2VFcnJvciA9IGZ1bmN0aW9uIG9uUHJvbWlzZUVycm9yKGVycikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gYWR2YW5jZSB0aGUgdHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGVwXG4gICAgICB2YXIgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgIGlmIChuZXh0Q2FsbGVkKSB7XG4gICAgICAgICAgd2FybigndHJhbnNpdGlvbi5uZXh0KCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5leHRDYWxsZWQgPSB0cnVlO1xuICAgICAgICBpZiAodHJhbnNpdGlvbi5hYm9ydGVkKSB7XG4gICAgICAgICAgY2xlYW51cCAmJiBjbGVhbnVwKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNiICYmIGNiKCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgbmV4dFdpdGhCb29sZWFuID0gZnVuY3Rpb24gbmV4dFdpdGhCb29sZWFuKHJlcykge1xuICAgICAgICBpZiAodHlwZW9mIHJlcyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgcmVzID8gbmV4dCgpIDogYWJvcnQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAgIHJlcy50aGVuKGZ1bmN0aW9uIChvaykge1xuICAgICAgICAgICAgb2sgPyBuZXh0KCkgOiBhYm9ydCgpO1xuICAgICAgICAgIH0sIG9uUHJvbWlzZUVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICghaG9vay5sZW5ndGgpIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHZhciBuZXh0V2l0aERhdGEgPSBmdW5jdGlvbiBuZXh0V2l0aERhdGEoZGF0YSkge1xuICAgICAgICB2YXIgcmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlcyA9IHByb2Nlc3NEYXRhKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gb25FcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAgIHJlcy50aGVuKG5leHQsIG9uUHJvbWlzZUVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIGV4cG9zZSBhIGNsb25lIG9mIHRoZSB0cmFuc2l0aW9uIG9iamVjdCwgc28gdGhhdCBlYWNoXG4gICAgICAvLyBob29rIGdldHMgYSBjbGVhbiBjb3B5IGFuZCBwcmV2ZW50IHRoZSB1c2VyIGZyb21cbiAgICAgIC8vIG1lc3Npbmcgd2l0aCB0aGUgaW50ZXJuYWxzLlxuICAgICAgdmFyIGV4cG9zZWQgPSB7XG4gICAgICAgIHRvOiB0cmFuc2l0aW9uLnRvLFxuICAgICAgICBmcm9tOiB0cmFuc2l0aW9uLmZyb20sXG4gICAgICAgIGFib3J0OiBhYm9ydCxcbiAgICAgICAgbmV4dDogcHJvY2Vzc0RhdGEgPyBuZXh0V2l0aERhdGEgOiBuZXh0LFxuICAgICAgICByZWRpcmVjdDogZnVuY3Rpb24gcmVkaXJlY3QoKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi5yZWRpcmVjdC5hcHBseSh0cmFuc2l0aW9uLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICAvLyBhY3R1YWxseSBjYWxsIHRoZSBob29rXG4gICAgICB2YXIgcmVzID0gdW5kZWZpbmVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzID0gaG9vay5jYWxsKGNvbnRleHQsIGV4cG9zZWQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBvbkVycm9yKGVycik7XG4gICAgICB9XG5cbiAgICAgIGlmIChleHBlY3RCb29sZWFuKSB7XG4gICAgICAgIC8vIGJvb2xlYW4gaG9va3NcbiAgICAgICAgbmV4dFdpdGhCb29sZWFuKHJlcyk7XG4gICAgICB9IGVsc2UgaWYgKGlzUHJvbWlzZShyZXMpKSB7XG4gICAgICAgIC8vIHByb21pc2VcbiAgICAgICAgaWYgKHByb2Nlc3NEYXRhKSB7XG4gICAgICAgICAgcmVzLnRoZW4obmV4dFdpdGhEYXRhLCBvblByb21pc2VFcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzLnRoZW4obmV4dCwgb25Qcm9taXNlRXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHByb2Nlc3NEYXRhICYmIGlzUGxhaW5PamJlY3QocmVzKSkge1xuICAgICAgICAvLyBkYXRhIHByb21pc2Ugc3VnYXJcbiAgICAgICAgbmV4dFdpdGhEYXRhKHJlcyk7XG4gICAgICB9IGVsc2UgaWYgKCFob29rLmxlbmd0aCkge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhbGwgYSBzaW5nbGUgaG9vayBvciBhbiBhcnJheSBvZiBhc3luYyBob29rcyBpbiBzZXJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBob29rc1xuICAgICAqIEBwYXJhbSB7Kn0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqL1xuXG4gICAgUm91dGVUcmFuc2l0aW9uLnByb3RvdHlwZS5jYWxsSG9va3MgPSBmdW5jdGlvbiBjYWxsSG9va3MoaG9va3MsIGNvbnRleHQsIGNiLCBvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShob29rcykpIHtcbiAgICAgICAgdGhpcy5ydW5RdWV1ZShob29rcywgZnVuY3Rpb24gKGhvb2ssIF8sIG5leHQpIHtcbiAgICAgICAgICBpZiAoIV90aGlzLmFib3J0ZWQpIHtcbiAgICAgICAgICAgIF90aGlzLmNhbGxIb29rKGhvb2ssIGNvbnRleHQsIG5leHQsIG9wdGlvbnMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWxsSG9vayhob29rcywgY29udGV4dCwgY2IsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUm91dGVUcmFuc2l0aW9uO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGlzUGxhaW5PamJlY3QodmFsKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvQXJyYXkodmFsKSB7XG4gICAgcmV0dXJuIHZhbCA/IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHZhbCkgOiBbXTtcbiAgfVxuXG4gIHZhciBpbnRlcm5hbEtleXNSRSA9IC9eKGNvbXBvbmVudHxzdWJSb3V0ZXMpJC87XG5cbiAgLyoqXG4gICAqIFJvdXRlIENvbnRleHQgT2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAqIEBwYXJhbSB7Um91dGVyfSByb3V0ZXJcbiAgICovXG5cbiAgdmFyIFJvdXRlID0gZnVuY3Rpb24gUm91dGUocGF0aCwgcm91dGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZSk7XG5cbiAgICB2YXIgbWF0Y2hlZCA9IHJvdXRlci5fcmVjb2duaXplci5yZWNvZ25pemUocGF0aCk7XG4gICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgIC8vIGNvcHkgYWxsIGN1c3RvbSBmaWVsZHMgZnJvbSByb3V0ZSBjb25maWdzXG4gICAgICBbXS5mb3JFYWNoLmNhbGwobWF0Y2hlZCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBtYXRjaC5oYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFpbnRlcm5hbEtleXNSRS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgIF90aGlzW2tleV0gPSBtYXRjaC5oYW5kbGVyW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIHNldCBxdWVyeSBhbmQgcGFyYW1zXG4gICAgICB0aGlzLnF1ZXJ5ID0gbWF0Y2hlZC5xdWVyeVBhcmFtcztcbiAgICAgIHRoaXMucGFyYW1zID0gW10ucmVkdWNlLmNhbGwobWF0Y2hlZCwgZnVuY3Rpb24gKHByZXYsIGN1cikge1xuICAgICAgICBpZiAoY3VyLnBhcmFtcykge1xuICAgICAgICAgIGZvciAodmFyIGtleSBpbiBjdXIucGFyYW1zKSB7XG4gICAgICAgICAgICBwcmV2W2tleV0gPSBjdXIucGFyYW1zW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgfSwge30pO1xuICAgIH1cbiAgICAvLyBleHBvc2UgcGF0aCBhbmQgcm91dGVyXG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAvLyBmb3IgaW50ZXJuYWwgdXNlXG4gICAgdGhpcy5tYXRjaGVkID0gbWF0Y2hlZCB8fCByb3V0ZXIuX25vdEZvdW5kSGFuZGxlcjtcbiAgICAvLyBJbXBvcnRhbnQ6IGZyZWV6ZSBzZWxmIHRvIHByZXZlbnQgb2JzZXJ2YXRpb25cbiAgICBPYmplY3QuZnJlZXplKHRoaXMpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFwcGx5T3ZlcnJpZGUgKFZ1ZSkge1xuICAgIHZhciBfVnVlJHV0aWwgPSBWdWUudXRpbDtcbiAgICB2YXIgZXh0ZW5kID0gX1Z1ZSR1dGlsLmV4dGVuZDtcbiAgICB2YXIgaXNBcnJheSA9IF9WdWUkdXRpbC5pc0FycmF5O1xuICAgIHZhciBkZWZpbmVSZWFjdGl2ZSA9IF9WdWUkdXRpbC5kZWZpbmVSZWFjdGl2ZTtcblxuICAgIC8vIG92ZXJyaWRlIFZ1ZSdzIGluaXQgYW5kIGRlc3Ryb3kgcHJvY2VzcyB0byBrZWVwIHRyYWNrIG9mIHJvdXRlciBpbnN0YW5jZXNcbiAgICB2YXIgaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXQ7XG4gICAgVnVlLnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHZhciByb290ID0gb3B0aW9ucy5fcGFyZW50IHx8IG9wdGlvbnMucGFyZW50IHx8IHRoaXM7XG4gICAgICB2YXIgcm91dGVyID0gcm9vdC4kcm91dGVyO1xuICAgICAgdmFyIHJvdXRlID0gcm9vdC4kcm91dGU7XG4gICAgICBpZiAocm91dGVyKSB7XG4gICAgICAgIC8vIGV4cG9zZSByb3V0ZXJcbiAgICAgICAgdGhpcy4kcm91dGVyID0gcm91dGVyO1xuICAgICAgICByb3V0ZXIuX2NoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAodGhpcy5fZGVmaW5lTWV0YSkge1xuICAgICAgICAgIC8vIDAuMTJcbiAgICAgICAgICB0aGlzLl9kZWZpbmVNZXRhKCckcm91dGUnLCByb3V0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gMS4wXG4gICAgICAgICAgZGVmaW5lUmVhY3RpdmUodGhpcywgJyRyb3V0ZScsIHJvdXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW5pdC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICB2YXIgZGVzdHJveSA9IFZ1ZS5wcm90b3R5cGUuX2Rlc3Ryb3k7XG4gICAgVnVlLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghdGhpcy5faXNCZWluZ0Rlc3Ryb3llZCAmJiB0aGlzLiRyb3V0ZXIpIHtcbiAgICAgICAgdGhpcy4kcm91dGVyLl9jaGlsZHJlbi4kcmVtb3ZlKHRoaXMpO1xuICAgICAgfVxuICAgICAgZGVzdHJveS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvLyAxLjAgb25seTogZW5hYmxlIHJvdXRlIG1peGluc1xuICAgIHZhciBzdHJhdHMgPSBWdWUuY29uZmlnLm9wdGlvbk1lcmdlU3RyYXRlZ2llcztcbiAgICB2YXIgaG9va3NUb01lcmdlUkUgPSAvXihkYXRhfGFjdGl2YXRlfGRlYWN0aXZhdGUpJC87XG5cbiAgICBpZiAoc3RyYXRzKSB7XG4gICAgICBzdHJhdHMucm91dGUgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICAgICAgICBpZiAoIWNoaWxkVmFsKSByZXR1cm4gcGFyZW50VmFsO1xuICAgICAgICBpZiAoIXBhcmVudFZhbCkgcmV0dXJuIGNoaWxkVmFsO1xuICAgICAgICB2YXIgcmV0ID0ge307XG4gICAgICAgIGV4dGVuZChyZXQsIHBhcmVudFZhbCk7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjaGlsZFZhbCkge1xuICAgICAgICAgIHZhciBhID0gcmV0W2tleV07XG4gICAgICAgICAgdmFyIGIgPSBjaGlsZFZhbFtrZXldO1xuICAgICAgICAgIC8vIGZvciBkYXRhLCBhY3RpdmF0ZSBhbmQgZGVhY3RpdmF0ZSwgd2UgbmVlZCB0byBtZXJnZSB0aGVtIGludG9cbiAgICAgICAgICAvLyBhcnJheXMgc2ltaWxhciB0byBsaWZlY3ljbGUgaG9va3MuXG4gICAgICAgICAgaWYgKGEgJiYgaG9va3NUb01lcmdlUkUudGVzdChrZXkpKSB7XG4gICAgICAgICAgICByZXRba2V5XSA9IChpc0FycmF5KGEpID8gYSA6IFthXSkuY29uY2F0KGIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXRba2V5XSA9IGI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIFZpZXcgKFZ1ZSkge1xuXG4gICAgdmFyIF8gPSBWdWUudXRpbDtcbiAgICB2YXIgY29tcG9uZW50RGVmID1cbiAgICAvLyAwLjEyXG4gICAgVnVlLmRpcmVjdGl2ZSgnX2NvbXBvbmVudCcpIHx8XG4gICAgLy8gMS4wXG4gICAgVnVlLmludGVybmFsRGlyZWN0aXZlcy5jb21wb25lbnQ7XG4gICAgLy8gPHJvdXRlci12aWV3PiBleHRlbmRzIHRoZSBpbnRlcm5hbCBjb21wb25lbnQgZGlyZWN0aXZlXG4gICAgdmFyIHZpZXdEZWYgPSBfLmV4dGVuZCh7fSwgY29tcG9uZW50RGVmKTtcblxuICAgIC8vIHdpdGggc29tZSBvdmVycmlkZXNcbiAgICBfLmV4dGVuZCh2aWV3RGVmLCB7XG5cbiAgICAgIF9pc1JvdXRlclZpZXc6IHRydWUsXG5cbiAgICAgIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgICAgIHZhciByb3V0ZSA9IHRoaXMudm0uJHJvdXRlO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCFyb3V0ZSkge1xuICAgICAgICAgIHdhcm4oJzxyb3V0ZXItdmlldz4gY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSAnICsgJ3JvdXRlci1lbmFibGVkIGFwcC4nKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gZm9yY2UgZHluYW1pYyBkaXJlY3RpdmUgc28gdi1jb21wb25lbnQgZG9lc24ndFxuICAgICAgICAvLyBhdHRlbXB0IHRvIGJ1aWxkIHJpZ2h0IG5vd1xuICAgICAgICB0aGlzLl9pc0R5bmFtaWNMaXRlcmFsID0gdHJ1ZTtcbiAgICAgICAgLy8gZmluYWxseSwgaW5pdCBieSBkZWxlZ2F0aW5nIHRvIHYtY29tcG9uZW50XG4gICAgICAgIGNvbXBvbmVudERlZi5iaW5kLmNhbGwodGhpcyk7XG5cbiAgICAgICAgLy8gbG9jYXRlIHRoZSBwYXJlbnQgdmlld1xuICAgICAgICB2YXIgcGFyZW50VmlldyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMudm07XG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICBpZiAocGFyZW50Ll9yb3V0ZXJWaWV3KSB7XG4gICAgICAgICAgICBwYXJlbnRWaWV3ID0gcGFyZW50Ll9yb3V0ZXJWaWV3O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRWaWV3KSB7XG4gICAgICAgICAgLy8gcmVnaXN0ZXIgc2VsZiBhcyBhIGNoaWxkIG9mIHRoZSBwYXJlbnQgdmlldyxcbiAgICAgICAgICAvLyBpbnN0ZWFkIG9mIGFjdGl2YXRpbmcgbm93LiBUaGlzIGlzIHNvIHRoYXQgdGhlXG4gICAgICAgICAgLy8gY2hpbGQncyBhY3RpdmF0ZSBob29rIGlzIGNhbGxlZCBhZnRlciB0aGVcbiAgICAgICAgICAvLyBwYXJlbnQncyBoYXMgcmVzb2x2ZWQuXG4gICAgICAgICAgdGhpcy5wYXJlbnRWaWV3ID0gcGFyZW50VmlldztcbiAgICAgICAgICBwYXJlbnRWaWV3LmNoaWxkVmlldyA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyB0aGUgcm9vdCB2aWV3IVxuICAgICAgICAgIHZhciByb3V0ZXIgPSByb3V0ZS5yb3V0ZXI7XG4gICAgICAgICAgcm91dGVyLl9yb290VmlldyA9IHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoYW5kbGUgbGF0ZS1yZW5kZXJlZCB2aWV3XG4gICAgICAgIC8vIHR3byBwb3NzaWJpbGl0aWVzOlxuICAgICAgICAvLyAxLiByb290IHZpZXcgcmVuZGVyZWQgYWZ0ZXIgdHJhbnNpdGlvbiBoYXMgYmVlblxuICAgICAgICAvLyAgICB2YWxpZGF0ZWQ7XG4gICAgICAgIC8vIDIuIGNoaWxkIHZpZXcgcmVuZGVyZWQgYWZ0ZXIgcGFyZW50IHZpZXcgaGFzIGJlZW5cbiAgICAgICAgLy8gICAgYWN0aXZhdGVkLlxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHJvdXRlLnJvdXRlci5fY3VycmVudFRyYW5zaXRpb247XG4gICAgICAgIGlmICghcGFyZW50VmlldyAmJiB0cmFuc2l0aW9uLmRvbmUgfHwgcGFyZW50VmlldyAmJiBwYXJlbnRWaWV3LmFjdGl2YXRlZCkge1xuICAgICAgICAgIHZhciBkZXB0aCA9IHBhcmVudFZpZXcgPyBwYXJlbnRWaWV3LmRlcHRoICsgMSA6IDA7XG4gICAgICAgICAgYWN0aXZhdGUodGhpcywgdHJhbnNpdGlvbiwgZGVwdGgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Vmlldykge1xuICAgICAgICAgIHRoaXMucGFyZW50Vmlldy5jaGlsZFZpZXcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudERlZi51bmJpbmQuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFZ1ZS5lbGVtZW50RGlyZWN0aXZlKCdyb3V0ZXItdmlldycsIHZpZXdEZWYpO1xuICB9XG5cbiAgdmFyIHRyYWlsaW5nU2xhc2hSRSA9IC9cXC8kLztcbiAgdmFyIHJlZ2V4RXNjYXBlUkUgPSAvWy0uKis/XiR7fSgpfFtcXF1cXC9cXFxcXS9nO1xuICB2YXIgcXVlcnlTdHJpbmdSRSA9IC9cXD8uKiQvO1xuXG4gIC8vIGluc3RhbGwgdi1saW5rLCB3aGljaCBwcm92aWRlcyBuYXZpZ2F0aW9uIHN1cHBvcnQgZm9yXG4gIC8vIEhUTUw1IGhpc3RvcnkgbW9kZVxuICBmdW5jdGlvbiBMaW5rIChWdWUpIHtcbiAgICB2YXIgX1Z1ZSR1dGlsID0gVnVlLnV0aWw7XG4gICAgdmFyIF9iaW5kID0gX1Z1ZSR1dGlsLmJpbmQ7XG4gICAgdmFyIGlzT2JqZWN0ID0gX1Z1ZSR1dGlsLmlzT2JqZWN0O1xuICAgIHZhciBhZGRDbGFzcyA9IF9WdWUkdXRpbC5hZGRDbGFzcztcbiAgICB2YXIgcmVtb3ZlQ2xhc3MgPSBfVnVlJHV0aWwucmVtb3ZlQ2xhc3M7XG5cbiAgICBWdWUuZGlyZWN0aXZlKCdsaW5rLWFjdGl2ZScsIHtcbiAgICAgIHByaW9yaXR5OiAxMDAxLFxuICAgICAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAgICAgdGhpcy5lbC5fX3ZfbGlua19hY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgVnVlLmRpcmVjdGl2ZSgnbGluaycsIHtcbiAgICAgIHByaW9yaXR5OiAxMDAwLFxuXG4gICAgICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzLnZtO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKCF2bS4kcm91dGUpIHtcbiAgICAgICAgICB3YXJuKCd2LWxpbmsgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgYSByb3V0ZXItZW5hYmxlZCBhcHAuJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm91dGVyID0gdm0uJHJvdXRlLnJvdXRlcjtcbiAgICAgICAgLy8gdXBkYXRlIHRoaW5ncyB3aGVuIHRoZSByb3V0ZSBjaGFuZ2VzXG4gICAgICAgIHRoaXMudW53YXRjaCA9IHZtLiR3YXRjaCgnJHJvdXRlJywgX2JpbmQodGhpcy5vblJvdXRlVXBkYXRlLCB0aGlzKSk7XG4gICAgICAgIC8vIGNoZWNrIGlmIGFjdGl2ZSBjbGFzc2VzIHNob3VsZCBiZSBhcHBsaWVkIHRvIGEgZGlmZmVyZW50IGVsZW1lbnRcbiAgICAgICAgdGhpcy5hY3RpdmVFbCA9IHRoaXMuZWw7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmVsLnBhcmVudE5vZGU7XG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICBpZiAocGFyZW50Ll9fdl9saW5rX2FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbCA9IHBhcmVudDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBubyBuZWVkIHRvIGhhbmRsZSBjbGljayBpZiBsaW5rIGV4cGVjdHMgdG8gYmUgb3BlbmVkXG4gICAgICAgIC8vIGluIGEgbmV3IHdpbmRvdy90YWIuXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAodGhpcy5lbC50YWdOYW1lID09PSAnQScgJiYgdGhpcy5lbC5nZXRBdHRyaWJ1dGUoJ3RhcmdldCcpID09PSAnX2JsYW5rJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBoYW5kbGUgY2xpY2tcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gX2JpbmQodGhpcy5vbkNsaWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlcik7XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgdGhpcy5hcHBlbmQgPSB0YXJnZXQuYXBwZW5kO1xuICAgICAgICAgIHRoaXMuZXhhY3QgPSB0YXJnZXQuZXhhY3Q7XG4gICAgICAgICAgdGhpcy5wcmV2QWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzO1xuICAgICAgICAgIHRoaXMuYWN0aXZlQ2xhc3MgPSB0YXJnZXQuYWN0aXZlQ2xhc3M7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblJvdXRlVXBkYXRlKHRoaXMudm0uJHJvdXRlKTtcbiAgICAgIH0sXG5cbiAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCB3aXRoIGNvbnRyb2wga2V5c1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5zaGlmdEtleSkgcmV0dXJuO1xuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCB3aGVuIHByZXZlbnREZWZhdWx0IGNhbGxlZFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgICAgICAvLyBkb24ndCByZWRpcmVjdCBvbiByaWdodCBjbGlja1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgLy8gdi1saW5rIHdpdGggZXhwcmVzc2lvbiwganVzdCBnb1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5nbyh0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG5vIGV4cHJlc3Npb24sIGRlbGVnYXRlIGZvciBhbiA8YT4gaW5zaWRlXG4gICAgICAgICAgdmFyIGVsID0gZS50YXJnZXQ7XG4gICAgICAgICAgd2hpbGUgKGVsLnRhZ05hbWUgIT09ICdBJyAmJiBlbCAhPT0gdGhpcy5lbCkge1xuICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWwudGFnTmFtZSA9PT0gJ0EnICYmIHNhbWVPcmlnaW4oZWwpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5nbyh7XG4gICAgICAgICAgICAgIHBhdGg6IGVsLnBhdGhuYW1lLFxuICAgICAgICAgICAgICByZXBsYWNlOiB0YXJnZXQgJiYgdGFyZ2V0LnJlcGxhY2UsXG4gICAgICAgICAgICAgIGFwcGVuZDogdGFyZ2V0ICYmIHRhcmdldC5hcHBlbmRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgb25Sb3V0ZVVwZGF0ZTogZnVuY3Rpb24gb25Sb3V0ZVVwZGF0ZShyb3V0ZSkge1xuICAgICAgICAvLyByb3V0ZXIuX3N0cmluZ2lmeVBhdGggaXMgZGVwZW5kZW50IG9uIGN1cnJlbnQgcm91dGVcbiAgICAgICAgLy8gYW5kIG5lZWRzIHRvIGJlIGNhbGxlZCBhZ2FpbiB3aGVudmVyIHJvdXRlIGNoYW5nZXMuXG4gICAgICAgIHZhciBuZXdQYXRoID0gdGhpcy5yb3V0ZXIuX3N0cmluZ2lmeVBhdGgodGhpcy50YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5wYXRoICE9PSBuZXdQYXRoKSB7XG4gICAgICAgICAgdGhpcy5wYXRoID0gbmV3UGF0aDtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZU1hdGNoKCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVIcmVmKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzKHJvdXRlLnBhdGgpO1xuICAgICAgfSxcblxuICAgICAgdXBkYXRlQWN0aXZlTWF0Y2g6IGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZU1hdGNoKCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVJFID0gdGhpcy5wYXRoICYmICF0aGlzLmV4YWN0ID8gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLnBhdGgucmVwbGFjZSgvXFwvJC8sICcnKS5yZXBsYWNlKHF1ZXJ5U3RyaW5nUkUsICcnKS5yZXBsYWNlKHJlZ2V4RXNjYXBlUkUsICdcXFxcJCYnKSArICcoXFxcXC98JCknKSA6IG51bGw7XG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVIcmVmOiBmdW5jdGlvbiB1cGRhdGVIcmVmKCkge1xuICAgICAgICBpZiAodGhpcy5lbC50YWdOYW1lICE9PSAnQScpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLnBhdGg7XG4gICAgICAgIHZhciByb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgdmFyIGlzQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICAgICAgICAvLyBkbyBub3QgZm9ybWF0IG5vbi1oYXNoIHJlbGF0aXZlIHBhdGhzXG4gICAgICAgIHZhciBocmVmID0gcGF0aCAmJiAocm91dGVyLm1vZGUgPT09ICdoYXNoJyB8fCBpc0Fic29sdXRlKSA/IHJvdXRlci5oaXN0b3J5LmZvcm1hdFBhdGgocGF0aCwgdGhpcy5hcHBlbmQpIDogcGF0aDtcbiAgICAgICAgaWYgKGhyZWYpIHtcbiAgICAgICAgICB0aGlzLmVsLmhyZWYgPSBocmVmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZUNsYXNzZXM6IGZ1bmN0aW9uIHVwZGF0ZUNsYXNzZXMocGF0aCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLmFjdGl2ZUVsO1xuICAgICAgICB2YXIgYWN0aXZlQ2xhc3MgPSB0aGlzLmFjdGl2ZUNsYXNzIHx8IHRoaXMucm91dGVyLl9saW5rQWN0aXZlQ2xhc3M7XG4gICAgICAgIC8vIGNsZWFyIG9sZCBjbGFzc1xuICAgICAgICBpZiAodGhpcy5wcmV2QWN0aXZlQ2xhc3MgIT09IGFjdGl2ZUNsYXNzKSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsIHRoaXMucHJldkFjdGl2ZUNsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZW1vdmUgcXVlcnkgc3RyaW5nIGJlZm9yZSBtYXRjaGluZ1xuICAgICAgICB2YXIgZGVzdCA9IHRoaXMucGF0aC5yZXBsYWNlKHF1ZXJ5U3RyaW5nUkUsICcnKTtcbiAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZShxdWVyeVN0cmluZ1JFLCAnJyk7XG4gICAgICAgIC8vIGFkZCBuZXcgY2xhc3NcbiAgICAgICAgaWYgKHRoaXMuZXhhY3QpIHtcbiAgICAgICAgICBpZiAoZGVzdCA9PT0gcGF0aCB8fFxuICAgICAgICAgIC8vIGFsc28gYWxsb3cgYWRkaXRpb25hbCB0cmFpbGluZyBzbGFzaFxuICAgICAgICAgIGRlc3QuY2hhckF0KGRlc3QubGVuZ3RoIC0gMSkgIT09ICcvJyAmJiBkZXN0ID09PSBwYXRoLnJlcGxhY2UodHJhaWxpbmdTbGFzaFJFLCAnJykpIHtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUNsYXNzKGVsLCBhY3RpdmVDbGFzcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVJFICYmIHRoaXMuYWN0aXZlUkUudGVzdChwYXRoKSkge1xuICAgICAgICAgICAgYWRkQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVtb3ZlQ2xhc3MoZWwsIGFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgICAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVyKTtcbiAgICAgICAgdGhpcy51bndhdGNoICYmIHRoaXMudW53YXRjaCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc2FtZU9yaWdpbihsaW5rKSB7XG4gICAgICByZXR1cm4gbGluay5wcm90b2NvbCA9PT0gbG9jYXRpb24ucHJvdG9jb2wgJiYgbGluay5ob3N0bmFtZSA9PT0gbG9jYXRpb24uaG9zdG5hbWUgJiYgbGluay5wb3J0ID09PSBsb2NhdGlvbi5wb3J0O1xuICAgIH1cbiAgfVxuXG4gIHZhciBoaXN0b3J5QmFja2VuZHMgPSB7XG4gICAgYWJzdHJhY3Q6IEFic3RyYWN0SGlzdG9yeSxcbiAgICBoYXNoOiBIYXNoSGlzdG9yeSxcbiAgICBodG1sNTogSFRNTDVIaXN0b3J5XG4gIH07XG5cbiAgLy8gbGF0ZSBiaW5kIGR1cmluZyBpbnN0YWxsXG4gIHZhciBWdWUgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFJvdXRlciBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuXG4gIHZhciBSb3V0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJvdXRlcigpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIHZhciBfcmVmJGhhc2hiYW5nID0gX3JlZi5oYXNoYmFuZztcbiAgICAgIHZhciBoYXNoYmFuZyA9IF9yZWYkaGFzaGJhbmcgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmJGhhc2hiYW5nO1xuICAgICAgdmFyIF9yZWYkYWJzdHJhY3QgPSBfcmVmLmFic3RyYWN0O1xuICAgICAgdmFyIGFic3RyYWN0ID0gX3JlZiRhYnN0cmFjdCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJGFic3RyYWN0O1xuICAgICAgdmFyIF9yZWYkaGlzdG9yeSA9IF9yZWYuaGlzdG9yeTtcbiAgICAgIHZhciBoaXN0b3J5ID0gX3JlZiRoaXN0b3J5ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkaGlzdG9yeTtcbiAgICAgIHZhciBfcmVmJHNhdmVTY3JvbGxQb3NpdGlvbiA9IF9yZWYuc2F2ZVNjcm9sbFBvc2l0aW9uO1xuICAgICAgdmFyIHNhdmVTY3JvbGxQb3NpdGlvbiA9IF9yZWYkc2F2ZVNjcm9sbFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkc2F2ZVNjcm9sbFBvc2l0aW9uO1xuICAgICAgdmFyIF9yZWYkdHJhbnNpdGlvbk9uTG9hZCA9IF9yZWYudHJhbnNpdGlvbk9uTG9hZDtcbiAgICAgIHZhciB0cmFuc2l0aW9uT25Mb2FkID0gX3JlZiR0cmFuc2l0aW9uT25Mb2FkID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYkdHJhbnNpdGlvbk9uTG9hZDtcbiAgICAgIHZhciBfcmVmJHN1cHByZXNzVHJhbnNpdGlvbkVycm9yID0gX3JlZi5zdXBwcmVzc1RyYW5zaXRpb25FcnJvcjtcbiAgICAgIHZhciBzdXBwcmVzc1RyYW5zaXRpb25FcnJvciA9IF9yZWYkc3VwcHJlc3NUcmFuc2l0aW9uRXJyb3IgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogX3JlZiRzdXBwcmVzc1RyYW5zaXRpb25FcnJvcjtcbiAgICAgIHZhciBfcmVmJHJvb3QgPSBfcmVmLnJvb3Q7XG4gICAgICB2YXIgcm9vdCA9IF9yZWYkcm9vdCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IF9yZWYkcm9vdDtcbiAgICAgIHZhciBfcmVmJGxpbmtBY3RpdmVDbGFzcyA9IF9yZWYubGlua0FjdGl2ZUNsYXNzO1xuICAgICAgdmFyIGxpbmtBY3RpdmVDbGFzcyA9IF9yZWYkbGlua0FjdGl2ZUNsYXNzID09PSB1bmRlZmluZWQgPyAndi1saW5rLWFjdGl2ZScgOiBfcmVmJGxpbmtBY3RpdmVDbGFzcztcbiAgICAgIGJhYmVsSGVscGVycy5jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3V0ZXIpO1xuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghUm91dGVyLmluc3RhbGxlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBpbnN0YWxsIHRoZSBSb3V0ZXIgd2l0aCBWdWUudXNlKCkgYmVmb3JlICcgKyAnY3JlYXRpbmcgYW4gaW5zdGFuY2UuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZ1ZSBpbnN0YW5jZXNcbiAgICAgIHRoaXMuYXBwID0gbnVsbDtcbiAgICAgIHRoaXMuX2NoaWxkcmVuID0gW107XG5cbiAgICAgIC8vIHJvdXRlIHJlY29nbml6ZXJcbiAgICAgIHRoaXMuX3JlY29nbml6ZXIgPSBuZXcgUm91dGVSZWNvZ25pemVyKCk7XG4gICAgICB0aGlzLl9ndWFyZFJlY29nbml6ZXIgPSBuZXcgUm91dGVSZWNvZ25pemVyKCk7XG5cbiAgICAgIC8vIHN0YXRlXG4gICAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9zdGFydENiID0gbnVsbDtcbiAgICAgIHRoaXMuX2N1cnJlbnRSb3V0ZSA9IHt9O1xuICAgICAgdGhpcy5fY3VycmVudFRyYW5zaXRpb24gPSBudWxsO1xuICAgICAgdGhpcy5fcHJldmlvdXNUcmFuc2l0aW9uID0gbnVsbDtcbiAgICAgIHRoaXMuX25vdEZvdW5kSGFuZGxlciA9IG51bGw7XG4gICAgICB0aGlzLl9ub3RGb3VuZFJlZGlyZWN0ID0gbnVsbDtcbiAgICAgIHRoaXMuX2JlZm9yZUVhY2hIb29rcyA9IFtdO1xuICAgICAgdGhpcy5fYWZ0ZXJFYWNoSG9va3MgPSBbXTtcblxuICAgICAgLy8gdHJpZ2dlciB0cmFuc2l0aW9uIG9uIGluaXRpYWwgcmVuZGVyP1xuICAgICAgdGhpcy5fcmVuZGVyZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3RyYW5zaXRpb25PbkxvYWQgPSB0cmFuc2l0aW9uT25Mb2FkO1xuXG4gICAgICAvLyBoaXN0b3J5IG1vZGVcbiAgICAgIHRoaXMuX3Jvb3QgPSByb290O1xuICAgICAgdGhpcy5fYWJzdHJhY3QgPSBhYnN0cmFjdDtcbiAgICAgIHRoaXMuX2hhc2hiYW5nID0gaGFzaGJhbmc7XG5cbiAgICAgIC8vIGNoZWNrIGlmIEhUTUw1IGhpc3RvcnkgaXMgYXZhaWxhYmxlXG4gICAgICB2YXIgaGFzUHVzaFN0YXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlO1xuICAgICAgdGhpcy5faGlzdG9yeSA9IGhpc3RvcnkgJiYgaGFzUHVzaFN0YXRlO1xuICAgICAgdGhpcy5faGlzdG9yeUZhbGxiYWNrID0gaGlzdG9yeSAmJiAhaGFzUHVzaFN0YXRlO1xuXG4gICAgICAvLyBjcmVhdGUgaGlzdG9yeSBvYmplY3RcbiAgICAgIHZhciBpbkJyb3dzZXIgPSBWdWUudXRpbC5pbkJyb3dzZXI7XG4gICAgICB0aGlzLm1vZGUgPSAhaW5Ccm93c2VyIHx8IHRoaXMuX2Fic3RyYWN0ID8gJ2Fic3RyYWN0JyA6IHRoaXMuX2hpc3RvcnkgPyAnaHRtbDUnIDogJ2hhc2gnO1xuXG4gICAgICB2YXIgSGlzdG9yeSA9IGhpc3RvcnlCYWNrZW5kc1t0aGlzLm1vZGVdO1xuICAgICAgdGhpcy5oaXN0b3J5ID0gbmV3IEhpc3Rvcnkoe1xuICAgICAgICByb290OiByb290LFxuICAgICAgICBoYXNoYmFuZzogdGhpcy5faGFzaGJhbmcsXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShwYXRoLCBzdGF0ZSwgYW5jaG9yKSB7XG4gICAgICAgICAgX3RoaXMuX21hdGNoKHBhdGgsIHN0YXRlLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gb3RoZXIgb3B0aW9uc1xuICAgICAgdGhpcy5fc2F2ZVNjcm9sbFBvc2l0aW9uID0gc2F2ZVNjcm9sbFBvc2l0aW9uO1xuICAgICAgdGhpcy5fbGlua0FjdGl2ZUNsYXNzID0gbGlua0FjdGl2ZUNsYXNzO1xuICAgICAgdGhpcy5fc3VwcHJlc3MgPSBzdXBwcmVzc1RyYW5zaXRpb25FcnJvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyBkaXJlY3RseSBwYXNzaW5nIGNvbXBvbmVudHMgdG8gYSByb3V0ZVxuICAgICAqIGRlZmluaXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kbGVyXG4gICAgICovXG5cbiAgICAvLyBBUEkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAqIFJlZ2lzdGVyIGEgbWFwIG9mIHRvcC1sZXZlbCBwYXRocy5cbiAgICAqXG4gICAgKiBAcGFyYW0ge09iamVjdH0gbWFwXG4gICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gbWFwKF9tYXApIHtcbiAgICAgIGZvciAodmFyIHJvdXRlIGluIF9tYXApIHtcbiAgICAgICAgdGhpcy5vbihyb3V0ZSwgX21hcFtyb3V0ZV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgc2luZ2xlIHJvb3QtbGV2ZWwgcGF0aFxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHJvb3RQYXRoXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgICAgKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSBjb21wb25lbnRcbiAgICAgKiAgICAgICAgICAgICAgICAgLSB7T2JqZWN0fSBbc3ViUm91dGVzXVxuICAgICAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBbZm9yY2VSZWZyZXNoXVxuICAgICAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW2JlZm9yZV1cbiAgICAgKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFthZnRlcl1cbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihyb290UGF0aCwgaGFuZGxlcikge1xuICAgICAgaWYgKHJvb3RQYXRoID09PSAnKicpIHtcbiAgICAgICAgdGhpcy5fbm90Rm91bmQoaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRSb3V0ZShyb290UGF0aCwgaGFuZGxlciwgW10pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCByZWRpcmVjdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWFwXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLnJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QobWFwKSB7XG4gICAgICBmb3IgKHZhciBwYXRoIGluIG1hcCkge1xuICAgICAgICB0aGlzLl9hZGRSZWRpcmVjdChwYXRoLCBtYXBbcGF0aF0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCBhbGlhc2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1hcFxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5hbGlhcyA9IGZ1bmN0aW9uIGFsaWFzKG1hcCkge1xuICAgICAgZm9yICh2YXIgcGF0aCBpbiBtYXApIHtcbiAgICAgICAgdGhpcy5fYWRkQWxpYXMocGF0aCwgbWFwW3BhdGhdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZ2xvYmFsIGJlZm9yZSBob29rLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuYmVmb3JlRWFjaCA9IGZ1bmN0aW9uIGJlZm9yZUVhY2goZm4pIHtcbiAgICAgIHRoaXMuX2JlZm9yZUVhY2hIb29rcy5wdXNoKGZuKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgZ2xvYmFsIGFmdGVyIGhvb2suXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5hZnRlckVhY2ggPSBmdW5jdGlvbiBhZnRlckVhY2goZm4pIHtcbiAgICAgIHRoaXMuX2FmdGVyRWFjaEhvb2tzLnB1c2goZm4pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIHRvIGEgZ2l2ZW4gcGF0aC5cbiAgICAgKiBUaGUgcGF0aCBjYW4gYmUgYW4gb2JqZWN0IGRlc2NyaWJpbmcgYSBuYW1lZCBwYXRoIGluXG4gICAgICogdGhlIGZvcm1hdCBvZiB7IG5hbWU6ICcuLi4nLCBwYXJhbXM6IHt9LCBxdWVyeToge319XG4gICAgICogVGhlIHBhdGggaXMgYXNzdW1lZCB0byBiZSBhbHJlYWR5IGRlY29kZWQsIGFuZCB3aWxsXG4gICAgICogYmUgcmVzb2x2ZWQgYWdhaW5zdCByb290IChpZiBwcm92aWRlZClcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gcGF0aFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlcGxhY2VdXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLmdvID0gZnVuY3Rpb24gZ28ocGF0aCkge1xuICAgICAgdmFyIHJlcGxhY2UgPSBmYWxzZTtcbiAgICAgIHZhciBhcHBlbmQgPSBmYWxzZTtcbiAgICAgIGlmIChWdWUudXRpbC5pc09iamVjdChwYXRoKSkge1xuICAgICAgICByZXBsYWNlID0gcGF0aC5yZXBsYWNlO1xuICAgICAgICBhcHBlbmQgPSBwYXRoLmFwcGVuZDtcbiAgICAgIH1cbiAgICAgIHBhdGggPSB0aGlzLl9zdHJpbmdpZnlQYXRoKHBhdGgpO1xuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgdGhpcy5oaXN0b3J5LmdvKHBhdGgsIHJlcGxhY2UsIGFwcGVuZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNob3J0IGhhbmQgZm9yIHJlcGxhY2luZyBjdXJyZW50IHBhdGhcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlKHBhdGgpIHtcbiAgICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcGF0aCA9IHsgcGF0aDogcGF0aCB9O1xuICAgICAgfVxuICAgICAgcGF0aC5yZXBsYWNlID0gdHJ1ZTtcbiAgICAgIHRoaXMuZ28ocGF0aCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0IHRoZSByb3V0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1Z1ZUNvbnN0cnVjdG9yfSBBcHBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xFbGVtZW50fSBjb250YWluZXJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoQXBwLCBjb250YWluZXIsIGNiKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICh0aGlzLl9zdGFydGVkKSB7XG4gICAgICAgIHdhcm4oJ2FscmVhZHkgc3RhcnRlZC4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3RhcnRlZCA9IHRydWU7XG4gICAgICB0aGlzLl9zdGFydENiID0gY2I7XG4gICAgICBpZiAoIXRoaXMuYXBwKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoIUFwcCB8fCAhY29udGFpbmVyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN0YXJ0IHZ1ZS1yb3V0ZXIgd2l0aCBhIGNvbXBvbmVudCBhbmQgYSAnICsgJ3Jvb3QgY29udGFpbmVyLicpO1xuICAgICAgICB9XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgICBpZiAoQXBwIGluc3RhbmNlb2YgVnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHN0YXJ0IHZ1ZS1yb3V0ZXIgd2l0aCBhIGNvbXBvbmVudCwgbm90IGEgJyArICdWdWUgaW5zdGFuY2UuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYXBwQ29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB2YXIgQ3RvciA9IHRoaXMuX2FwcENvbnN0cnVjdG9yID0gdHlwZW9mIEFwcCA9PT0gJ2Z1bmN0aW9uJyA/IEFwcCA6IFZ1ZS5leHRlbmQoQXBwKTtcbiAgICAgICAgLy8gZ2l2ZSBpdCBhIG5hbWUgZm9yIGJldHRlciBkZWJ1Z2dpbmdcbiAgICAgICAgQ3Rvci5vcHRpb25zLm5hbWUgPSBDdG9yLm9wdGlvbnMubmFtZSB8fCAnUm91dGVyQXBwJztcbiAgICAgIH1cblxuICAgICAgLy8gaGFuZGxlIGhpc3RvcnkgZmFsbGJhY2sgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3RcbiAgICAgIC8vIHN1cHBvcnQgSFRNTDUgaGlzdG9yeSBBUElcbiAgICAgIGlmICh0aGlzLl9oaXN0b3J5RmFsbGJhY2spIHtcbiAgICAgICAgdmFyIF9sb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICAgICAgdmFyIF9oaXN0b3J5ID0gbmV3IEhUTUw1SGlzdG9yeSh7IHJvb3Q6IHRoaXMuX3Jvb3QgfSk7XG4gICAgICAgIHZhciBwYXRoID0gX2hpc3Rvcnkucm9vdCA/IF9sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKF9oaXN0b3J5LnJvb3RSRSwgJycpIDogX2xvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAocGF0aCAmJiBwYXRoICE9PSAnLycpIHtcbiAgICAgICAgICBfbG9jYXRpb24uYXNzaWduKChfaGlzdG9yeS5yb290IHx8ICcnKSArICcvJyArIHRoaXMuaGlzdG9yeS5mb3JtYXRQYXRoKHBhdGgpICsgX2xvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaGlzdG9yeS5zdGFydCgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTdG9wIGxpc3RlbmluZyB0byByb3V0ZSBjaGFuZ2VzLlxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuaGlzdG9yeS5zdG9wKCk7XG4gICAgICB0aGlzLl9zdGFydGVkID0gZmFsc2U7XG4gICAgfTtcblxuICAgIC8vIEludGVybmFsIG1ldGhvZHMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICogQWRkIGEgcm91dGUgY29udGFpbmluZyBhIGxpc3Qgb2Ygc2VnbWVudHMgdG8gdGhlIGludGVybmFsXG4gICAgKiByb3V0ZSByZWNvZ25pemVyLiBXaWxsIGJlIGNhbGxlZCByZWN1cnNpdmVseSB0byBhZGQgYWxsXG4gICAgKiBwb3NzaWJsZSBzdWItcm91dGVzLlxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gICAgKiBAcGFyYW0ge09iamVjdH0gaGFuZGxlclxuICAgICogQHBhcmFtIHtBcnJheX0gc2VnbWVudHNcbiAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5fYWRkUm91dGUgPSBmdW5jdGlvbiBfYWRkUm91dGUocGF0aCwgaGFuZGxlciwgc2VnbWVudHMpIHtcbiAgICAgIGd1YXJkQ29tcG9uZW50KHBhdGgsIGhhbmRsZXIpO1xuICAgICAgaGFuZGxlci5wYXRoID0gcGF0aDtcbiAgICAgIGhhbmRsZXIuZnVsbFBhdGggPSAoc2VnbWVudHMucmVkdWNlKGZ1bmN0aW9uIChwYXRoLCBzZWdtZW50KSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgc2VnbWVudC5wYXRoO1xuICAgICAgfSwgJycpICsgcGF0aCkucmVwbGFjZSgnLy8nLCAnLycpO1xuICAgICAgc2VnbWVudHMucHVzaCh7XG4gICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcmVjb2duaXplci5hZGQoc2VnbWVudHMsIHtcbiAgICAgICAgYXM6IGhhbmRsZXIubmFtZVxuICAgICAgfSk7XG4gICAgICAvLyBhZGQgc3ViIHJvdXRlc1xuICAgICAgaWYgKGhhbmRsZXIuc3ViUm91dGVzKSB7XG4gICAgICAgIGZvciAodmFyIHN1YlBhdGggaW4gaGFuZGxlci5zdWJSb3V0ZXMpIHtcbiAgICAgICAgICAvLyByZWN1cnNpdmVseSB3YWxrIGFsbCBzdWIgcm91dGVzXG4gICAgICAgICAgdGhpcy5fYWRkUm91dGUoc3ViUGF0aCwgaGFuZGxlci5zdWJSb3V0ZXNbc3ViUGF0aF0sXG4gICAgICAgICAgLy8gcGFzcyBhIGNvcHkgaW4gcmVjdXJzaW9uIHRvIGF2b2lkIG11dGF0aW5nXG4gICAgICAgICAgLy8gYWNyb3NzIGJyYW5jaGVzXG4gICAgICAgICAgc2VnbWVudHMuc2xpY2UoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBub3RGb3VuZCByb3V0ZSBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhhbmRsZXJcbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuX25vdEZvdW5kID0gZnVuY3Rpb24gX25vdEZvdW5kKGhhbmRsZXIpIHtcbiAgICAgIGd1YXJkQ29tcG9uZW50KCcqJywgaGFuZGxlcik7XG4gICAgICB0aGlzLl9ub3RGb3VuZEhhbmRsZXIgPSBbeyBoYW5kbGVyOiBoYW5kbGVyIH1dO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSByZWRpcmVjdCByZWNvcmQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSByZWRpcmVjdFBhdGhcbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuX2FkZFJlZGlyZWN0ID0gZnVuY3Rpb24gX2FkZFJlZGlyZWN0KHBhdGgsIHJlZGlyZWN0UGF0aCkge1xuICAgICAgaWYgKHBhdGggPT09ICcqJykge1xuICAgICAgICB0aGlzLl9ub3RGb3VuZFJlZGlyZWN0ID0gcmVkaXJlY3RQYXRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWRkR3VhcmQocGF0aCwgcmVkaXJlY3RQYXRoLCB0aGlzLnJlcGxhY2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYW4gYWxpYXMgcmVjb3JkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYWxpYXNQYXRoXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLl9hZGRBbGlhcyA9IGZ1bmN0aW9uIF9hZGRBbGlhcyhwYXRoLCBhbGlhc1BhdGgpIHtcbiAgICAgIHRoaXMuX2FkZEd1YXJkKHBhdGgsIGFsaWFzUGF0aCwgdGhpcy5fbWF0Y2gpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwYXRoIGd1YXJkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWFwcGVkUGF0aFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXJcbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuX2FkZEd1YXJkID0gZnVuY3Rpb24gX2FkZEd1YXJkKHBhdGgsIG1hcHBlZFBhdGgsIF9oYW5kbGVyKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdGhpcy5fZ3VhcmRSZWNvZ25pemVyLmFkZChbe1xuICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKG1hdGNoLCBxdWVyeSkge1xuICAgICAgICAgIHZhciByZWFsUGF0aCA9IG1hcFBhcmFtcyhtYXBwZWRQYXRoLCBtYXRjaC5wYXJhbXMsIHF1ZXJ5KTtcbiAgICAgICAgICBfaGFuZGxlci5jYWxsKF90aGlzMiwgcmVhbFBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIGEgcGF0aCBtYXRjaGVzIGFueSByZWRpcmVjdCByZWNvcmRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSAtIGlmIHRydWUsIHdpbGwgc2tpcCBub3JtYWwgbWF0Y2guXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLl9jaGVja0d1YXJkID0gZnVuY3Rpb24gX2NoZWNrR3VhcmQocGF0aCkge1xuICAgICAgdmFyIG1hdGNoZWQgPSB0aGlzLl9ndWFyZFJlY29nbml6ZXIucmVjb2duaXplKHBhdGgpO1xuICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgbWF0Y2hlZFswXS5oYW5kbGVyKG1hdGNoZWRbMF0sIG1hdGNoZWQucXVlcnlQYXJhbXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fbm90Rm91bmRSZWRpcmVjdCkge1xuICAgICAgICBtYXRjaGVkID0gdGhpcy5fcmVjb2duaXplci5yZWNvZ25pemUocGF0aCk7XG4gICAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICAgIHRoaXMucmVwbGFjZSh0aGlzLl9ub3RGb3VuZFJlZGlyZWN0KTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNYXRjaCBhIFVSTCBwYXRoIGFuZCBzZXQgdGhlIHJvdXRlIGNvbnRleHQgb24gdm0sXG4gICAgICogdHJpZ2dlcmluZyB2aWV3IHVwZGF0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhdGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFthbmNob3JdXG4gICAgICovXG5cbiAgICBSb3V0ZXIucHJvdG90eXBlLl9tYXRjaCA9IGZ1bmN0aW9uIF9tYXRjaChwYXRoLCBzdGF0ZSwgYW5jaG9yKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMuX2NoZWNrR3VhcmQocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VycmVudFJvdXRlID0gdGhpcy5fY3VycmVudFJvdXRlO1xuICAgICAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uID0gdGhpcy5fY3VycmVudFRyYW5zaXRpb247XG5cbiAgICAgIGlmIChjdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICBpZiAoY3VycmVudFRyYW5zaXRpb24udG8ucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgd2UgaGF2ZSBhbiBhY3RpdmUgdHJhbnNpdGlvbiBnb2luZyB0byB0aGUgc2FtZSBwYXRoXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnRSb3V0ZS5wYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgLy8gV2UgYXJlIGdvaW5nIHRvIHRoZSBzYW1lIHBhdGgsIGJ1dCB3ZSBhbHNvIGhhdmUgYW4gb25nb2luZyBidXRcbiAgICAgICAgICAvLyBub3QteWV0LXZhbGlkYXRlZCB0cmFuc2l0aW9uLiBBYm9ydCB0aGF0IHRyYW5zaXRpb24gYW5kIHJlc2V0IHRvXG4gICAgICAgICAgLy8gcHJldiB0cmFuc2l0aW9uLlxuICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRUcmFuc2l0aW9uID0gdGhpcy5fcHJldlRyYW5zaXRpb247XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGdvaW5nIHRvIGEgdG90YWxseSBkaWZmZXJlbnQgcGF0aC4gYWJvcnQgb25nb2luZyB0cmFuc2l0aW9uLlxuICAgICAgICAgIGN1cnJlbnRUcmFuc2l0aW9uLmFib3J0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnN0cnVjdCBuZXcgcm91dGUgYW5kIHRyYW5zaXRpb24gY29udGV4dFxuICAgICAgdmFyIHJvdXRlID0gbmV3IFJvdXRlKHBhdGgsIHRoaXMpO1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSBuZXcgUm91dGVUcmFuc2l0aW9uKHRoaXMsIHJvdXRlLCBjdXJyZW50Um91dGUpO1xuXG4gICAgICAvLyBjdXJyZW50IHRyYW5zaXRpb24gaXMgdXBkYXRlZCByaWdodCBub3cuXG4gICAgICAvLyBob3dldmVyLCBjdXJyZW50IHJvdXRlIHdpbGwgb25seSBiZSB1cGRhdGVkIGFmdGVyIHRoZSB0cmFuc2l0aW9uIGhhc1xuICAgICAgLy8gYmVlbiB2YWxpZGF0ZWQuXG4gICAgICB0aGlzLl9wcmV2VHJhbnNpdGlvbiA9IGN1cnJlbnRUcmFuc2l0aW9uO1xuICAgICAgdGhpcy5fY3VycmVudFRyYW5zaXRpb24gPSB0cmFuc2l0aW9uO1xuXG4gICAgICBpZiAoIXRoaXMuYXBwKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICB2YXIgcm91dGVyID0gX3RoaXMzO1xuICAgICAgICAgIF90aGlzMy5hcHAgPSBuZXcgX3RoaXMzLl9hcHBDb25zdHJ1Y3Rvcih7XG4gICAgICAgICAgICBlbDogX3RoaXMzLl9hcHBDb250YWluZXIsXG4gICAgICAgICAgICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xuICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX21ldGE6IHtcbiAgICAgICAgICAgICAgJHJvdXRlOiByb3V0ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBjaGVjayBnbG9iYWwgYmVmb3JlIGhvb2tcbiAgICAgIHZhciBiZWZvcmVIb29rcyA9IHRoaXMuX2JlZm9yZUVhY2hIb29rcztcbiAgICAgIHZhciBzdGFydFRyYW5zaXRpb24gPSBmdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oKSB7XG4gICAgICAgIHRyYW5zaXRpb24uc3RhcnQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzMy5fcG9zdFRyYW5zaXRpb24ocm91dGUsIHN0YXRlLCBhbmNob3IpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChiZWZvcmVIb29rcy5sZW5ndGgpIHtcbiAgICAgICAgdHJhbnNpdGlvbi5ydW5RdWV1ZShiZWZvcmVIb29rcywgZnVuY3Rpb24gKGhvb2ssIF8sIG5leHQpIHtcbiAgICAgICAgICBpZiAodHJhbnNpdGlvbiA9PT0gX3RoaXMzLl9jdXJyZW50VHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdHJhbnNpdGlvbi5jYWxsSG9vayhob29rLCBudWxsLCBuZXh0LCB7XG4gICAgICAgICAgICAgIGV4cGVjdEJvb2xlYW46IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgc3RhcnRUcmFuc2l0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXJ0VHJhbnNpdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX3JlbmRlcmVkICYmIHRoaXMuX3N0YXJ0Q2IpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRDYi5jYWxsKG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvLyBIQUNLOlxuICAgICAgLy8gc2V0IHJlbmRlcmVkIHRvIHRydWUgYWZ0ZXIgdGhlIHRyYW5zaXRpb24gc3RhcnQsIHNvXG4gICAgICAvLyB0aGF0IGNvbXBvbmVudHMgdGhhdCBhcmUgYWNpdHZhdGVkIHN5bmNocm9ub3VzbHkga25vd1xuICAgICAgLy8gd2hldGhlciBpdCBpcyB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgICB0aGlzLl9yZW5kZXJlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IHRvIHRoZSBuZXcgdHJhbnNpdGlvbi5cbiAgICAgKiBUaGlzIGlzIGNhbGxlZCBieSB0aGUgdHJhbnNpdGlvbiBvYmplY3Qgd2hlbiB0aGVcbiAgICAgKiB2YWxpZGF0aW9uIG9mIGEgcm91dGUgaGFzIHN1Y2NlZWRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJhbnNpdGlvbn0gdHJhbnNpdGlvblxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5fb25UcmFuc2l0aW9uVmFsaWRhdGVkID0gZnVuY3Rpb24gX29uVHJhbnNpdGlvblZhbGlkYXRlZCh0cmFuc2l0aW9uKSB7XG4gICAgICAvLyBzZXQgY3VycmVudCByb3V0ZVxuICAgICAgdmFyIHJvdXRlID0gdGhpcy5fY3VycmVudFJvdXRlID0gdHJhbnNpdGlvbi50bztcbiAgICAgIC8vIHVwZGF0ZSByb3V0ZSBjb250ZXh0IGZvciBhbGwgY2hpbGRyZW5cbiAgICAgIGlmICh0aGlzLmFwcC4kcm91dGUgIT09IHJvdXRlKSB7XG4gICAgICAgIHRoaXMuYXBwLiRyb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIGNoaWxkLiRyb3V0ZSA9IHJvdXRlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGwgZ2xvYmFsIGFmdGVyIGhvb2tcbiAgICAgIGlmICh0aGlzLl9hZnRlckVhY2hIb29rcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fYWZ0ZXJFYWNoSG9va3MuZm9yRWFjaChmdW5jdGlvbiAoaG9vaykge1xuICAgICAgICAgIHJldHVybiBob29rLmNhbGwobnVsbCwge1xuICAgICAgICAgICAgdG86IHRyYW5zaXRpb24udG8sXG4gICAgICAgICAgICBmcm9tOiB0cmFuc2l0aW9uLmZyb21cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50VHJhbnNpdGlvbi5kb25lID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHN0dWZmIGFmdGVyIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSb3V0ZX0gcm91dGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3N0YXRlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbYW5jaG9yXVxuICAgICAqL1xuXG4gICAgUm91dGVyLnByb3RvdHlwZS5fcG9zdFRyYW5zaXRpb24gPSBmdW5jdGlvbiBfcG9zdFRyYW5zaXRpb24ocm91dGUsIHN0YXRlLCBhbmNob3IpIHtcbiAgICAgIC8vIGhhbmRsZSBzY3JvbGwgcG9zaXRpb25zXG4gICAgICAvLyBzYXZlZCBzY3JvbGwgcG9zaXRpb25zIHRha2UgcHJpb3JpdHlcbiAgICAgIC8vIHRoZW4gd2UgY2hlY2sgaWYgdGhlIHBhdGggaGFzIGFuIGFuY2hvclxuICAgICAgdmFyIHBvcyA9IHN0YXRlICYmIHN0YXRlLnBvcztcbiAgICAgIGlmIChwb3MgJiYgdGhpcy5fc2F2ZVNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKHBvcy54LCBwb3MueSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChhbmNob3IpIHtcbiAgICAgICAgVnVlLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhbmNob3Iuc2xpY2UoMSkpO1xuICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5zY3JvbGxYLCBlbC5vZmZzZXRUb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGl6ZSBuYW1lZCByb3V0ZSBvYmplY3QgLyBzdHJpbmcgcGF0aHMgaW50b1xuICAgICAqIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfE51bWJlcn0gcGF0aFxuICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgKi9cblxuICAgIFJvdXRlci5wcm90b3R5cGUuX3N0cmluZ2lmeVBhdGggPSBmdW5jdGlvbiBfc3RyaW5naWZ5UGF0aChwYXRoKSB7XG4gICAgICB2YXIgZnVsbFBhdGggPSAnJztcbiAgICAgIGlmIChwYXRoICYmIHR5cGVvZiBwYXRoID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocGF0aC5uYW1lKSB7XG4gICAgICAgICAgdmFyIGV4dGVuZCA9IFZ1ZS51dGlsLmV4dGVuZDtcbiAgICAgICAgICB2YXIgY3VycmVudFBhcmFtcyA9IHRoaXMuX2N1cnJlbnRUcmFuc2l0aW9uICYmIHRoaXMuX2N1cnJlbnRUcmFuc2l0aW9uLnRvLnBhcmFtcztcbiAgICAgICAgICB2YXIgdGFyZ2V0UGFyYW1zID0gcGF0aC5wYXJhbXMgfHwge307XG4gICAgICAgICAgdmFyIHBhcmFtcyA9IGN1cnJlbnRQYXJhbXMgPyBleHRlbmQoZXh0ZW5kKHt9LCBjdXJyZW50UGFyYW1zKSwgdGFyZ2V0UGFyYW1zKSA6IHRhcmdldFBhcmFtcztcbiAgICAgICAgICBpZiAocGF0aC5xdWVyeSkge1xuICAgICAgICAgICAgcGFyYW1zLnF1ZXJ5UGFyYW1zID0gcGF0aC5xdWVyeTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVsbFBhdGggPSB0aGlzLl9yZWNvZ25pemVyLmdlbmVyYXRlKHBhdGgubmFtZSwgcGFyYW1zKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoLnBhdGgpIHtcbiAgICAgICAgICBmdWxsUGF0aCA9IHBhdGgucGF0aDtcbiAgICAgICAgICBpZiAocGF0aC5xdWVyeSkge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5fcmVjb2duaXplci5nZW5lcmF0ZVF1ZXJ5U3RyaW5nKHBhdGgucXVlcnkpO1xuICAgICAgICAgICAgaWYgKGZ1bGxQYXRoLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGZ1bGxQYXRoICs9ICcmJyArIHF1ZXJ5LnNsaWNlKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZnVsbFBhdGggKz0gcXVlcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmdWxsUGF0aCA9IHBhdGggPyBwYXRoICsgJycgOiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBlbmNvZGVVUkkoZnVsbFBhdGgpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUm91dGVyO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGd1YXJkQ29tcG9uZW50KHBhdGgsIGhhbmRsZXIpIHtcbiAgICB2YXIgY29tcCA9IGhhbmRsZXIuY29tcG9uZW50O1xuICAgIGlmIChWdWUudXRpbC5pc1BsYWluT2JqZWN0KGNvbXApKSB7XG4gICAgICBjb21wID0gaGFuZGxlci5jb21wb25lbnQgPSBWdWUuZXh0ZW5kKGNvbXApO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAodHlwZW9mIGNvbXAgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhhbmRsZXIuY29tcG9uZW50ID0gbnVsbDtcbiAgICAgIHdhcm4oJ2ludmFsaWQgY29tcG9uZW50IGZvciByb3V0ZSBcIicgKyBwYXRoICsgJ1wiLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qIEluc3RhbGxhdGlvbiAqL1xuXG4gIFJvdXRlci5pbnN0YWxsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5zdGFsbGF0aW9uIGludGVyZmFjZS5cbiAgICogSW5zdGFsbCB0aGUgbmVjZXNzYXJ5IGRpcmVjdGl2ZXMuXG4gICAqL1xuXG4gIFJvdXRlci5pbnN0YWxsID0gZnVuY3Rpb24gKGV4dGVybmFsVnVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKFJvdXRlci5pbnN0YWxsZWQpIHtcbiAgICAgIHdhcm4oJ2FscmVhZHkgaW5zdGFsbGVkLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBWdWUgPSBleHRlcm5hbFZ1ZTtcbiAgICBhcHBseU92ZXJyaWRlKFZ1ZSk7XG4gICAgVmlldyhWdWUpO1xuICAgIExpbmsoVnVlKTtcbiAgICBleHBvcnRzJDEuVnVlID0gVnVlO1xuICAgIFJvdXRlci5pbnN0YWxsZWQgPSB0cnVlO1xuICB9O1xuXG4gIC8vIGF1dG8gaW5zdGFsbFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICB3aW5kb3cuVnVlLnVzZShSb3V0ZXIpO1xuICB9XG5cbiAgcmV0dXJuIFJvdXRlcjtcblxufSkpOyIsIi8qIVxuICogVnVlLmpzIHYxLjAuMTdcbiAqIChjKSAyMDE2IEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gc2V0KG9iaiwga2V5LCB2YWwpIHtcbiAgaWYgKGhhc093bihvYmosIGtleSkpIHtcbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG9iai5faXNWdWUpIHtcbiAgICBzZXQob2JqLl9kYXRhLCBrZXksIHZhbCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBvYiA9IG9iai5fX29iX187XG4gIGlmICghb2IpIHtcbiAgICBvYmpba2V5XSA9IHZhbDtcbiAgICByZXR1cm47XG4gIH1cbiAgb2IuY29udmVydChrZXksIHZhbCk7XG4gIG9iLmRlcC5ub3RpZnkoKTtcbiAgaWYgKG9iLnZtcykge1xuICAgIHZhciBpID0gb2Iudm1zLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgdm0gPSBvYi52bXNbaV07XG4gICAgICB2bS5fcHJveHkoa2V5KTtcbiAgICAgIHZtLl9kaWdlc3QoKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuLyoqXG4gKiBEZWxldGUgYSBwcm9wZXJ0eSBhbmQgdHJpZ2dlciBjaGFuZ2UgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBkZWwob2JqLCBrZXkpIHtcbiAgaWYgKCFoYXNPd24ob2JqLCBrZXkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGRlbGV0ZSBvYmpba2V5XTtcbiAgdmFyIG9iID0gb2JqLl9fb2JfXztcbiAgaWYgKCFvYikge1xuICAgIHJldHVybjtcbiAgfVxuICBvYi5kZXAubm90aWZ5KCk7XG4gIGlmIChvYi52bXMpIHtcbiAgICB2YXIgaSA9IG9iLnZtcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFyIHZtID0gb2Iudm1zW2ldO1xuICAgICAgdm0uX3VucHJveHkoa2V5KTtcbiAgICAgIHZtLl9kaWdlc3QoKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbi8qKlxuICogQ2hlY2sgd2hldGhlciB0aGUgb2JqZWN0IGhhcyB0aGUgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBoYXNPd24ob2JqLCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGV4cHJlc3Npb24gaXMgYSBsaXRlcmFsIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxudmFyIGxpdGVyYWxWYWx1ZVJFID0gL15cXHM/KHRydWV8ZmFsc2V8LT9bXFxkXFwuXSt8J1teJ10qJ3xcIlteXCJdKlwiKVxccz8kLztcblxuZnVuY3Rpb24gaXNMaXRlcmFsKGV4cCkge1xuICByZXR1cm4gbGl0ZXJhbFZhbHVlUkUudGVzdChleHApO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIHN0YXJ0cyB3aXRoICQgb3IgX1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNSZXNlcnZlZChzdHIpIHtcbiAgdmFyIGMgPSAoc3RyICsgJycpLmNoYXJDb2RlQXQoMCk7XG4gIHJldHVybiBjID09PSAweDI0IHx8IGMgPT09IDB4NUY7XG59XG5cbi8qKlxuICogR3VhcmQgdGV4dCBvdXRwdXQsIG1ha2Ugc3VyZSB1bmRlZmluZWQgb3V0cHV0c1xuICogZW1wdHkgc3RyaW5nXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIF90b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gKiBDaGVjayBhbmQgY29udmVydCBwb3NzaWJsZSBudW1lcmljIHN0cmluZ3MgdG8gbnVtYmVyc1xuICogYmVmb3JlIHNldHRpbmcgYmFjayB0byBkYXRhXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7KnxOdW1iZXJ9XG4gKi9cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnNlZCA9IE51bWJlcih2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKHBhcnNlZCkgPyB2YWx1ZSA6IHBhcnNlZDtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgc3RyaW5nIGJvb2xlYW4gbGl0ZXJhbHMgaW50byByZWFsIGJvb2xlYW5zLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4geyp8Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiB0b0Jvb2xlYW4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSAndHJ1ZScgPyB0cnVlIDogdmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIFN0cmlwIHF1b3RlcyBmcm9tIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nIHwgZmFsc2V9XG4gKi9cblxuZnVuY3Rpb24gc3RyaXBRdW90ZXMoc3RyKSB7XG4gIHZhciBhID0gc3RyLmNoYXJDb2RlQXQoMCk7XG4gIHZhciBiID0gc3RyLmNoYXJDb2RlQXQoc3RyLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gYSA9PT0gYiAmJiAoYSA9PT0gMHgyMiB8fCBhID09PSAweDI3KSA/IHN0ci5zbGljZSgxLCAtMSkgOiBzdHI7XG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsbWl0ZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG52YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcblxuZnVuY3Rpb24gY2FtZWxpemUoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCB0b1VwcGVyKTtcbn1cblxuZnVuY3Rpb24gdG9VcHBlcihfLCBjKSB7XG4gIHJldHVybiBjID8gYy50b1VwcGVyQ2FzZSgpIDogJyc7XG59XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGh5cGhlbmF0ZVJFID0gLyhbYS16XFxkXSkoW0EtWl0pL2c7XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGh5cGhlbi91bmRlcnNjb3JlL3NsYXNoIGRlbGltaXRlcmVkIG5hbWVzIGludG9cbiAqIGNhbWVsaXplZCBjbGFzc05hbWVzLlxuICpcbiAqIGUuZy4gbXktY29tcG9uZW50ID0+IE15Q29tcG9uZW50XG4gKiAgICAgIHNvbWVfZWxzZSAgICA9PiBTb21lRWxzZVxuICogICAgICBzb21lL2NvbXAgICAgPT4gU29tZUNvbXBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxudmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9cXC9dKShcXHcpL2c7XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5KHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2xhc3NpZnlSRSwgdG9VcHBlcik7XG59XG5cbi8qKlxuICogU2ltcGxlIGJpbmQsIGZhc3RlciB0aGFuIG5hdGl2ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4XG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBiaW5kKGZuLCBjdHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsID8gbCA+IDEgPyBmbi5hcHBseShjdHgsIGFyZ3VtZW50cykgOiBmbi5jYWxsKGN0eCwgYSkgOiBmbi5jYWxsKGN0eCk7XG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKlxuICogQHBhcmFtIHtBcnJheS1saWtlfSBsaXN0XG4gKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSAtIHN0YXJ0IGluZGV4XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuXG5mdW5jdGlvbiB0b0FycmF5KGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogTWl4IHByb3BlcnRpZXMgaW50byB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b1xuICogQHBhcmFtIHtPYmplY3R9IGZyb21cbiAqL1xuXG5mdW5jdGlvbiBleHRlbmQodG8sIGZyb20pIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcm9tKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHRvW2tleXNbaV1dID0gZnJvbVtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gdG87XG59XG5cbi8qKlxuICogUXVpY2sgb2JqZWN0IGNoZWNrIC0gdGhpcyBpcyBwcmltYXJpbHkgdXNlZCB0byB0ZWxsXG4gKiBPYmplY3RzIGZyb20gcHJpbWl0aXZlIHZhbHVlcyB3aGVuIHdlIGtub3cgdGhlIHZhbHVlXG4gKiBpcyBhIEpTT04tY29tcGxpYW50IHR5cGUuXG4gKlxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIE9CSkVDVF9TVFJJTkcgPSAnW29iamVjdCBPYmplY3RdJztcblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gT0JKRUNUX1NUUklORztcbn1cblxuLyoqXG4gKiBBcnJheSB0eXBlIGNoZWNrLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuLyoqXG4gKiBEZWZpbmUgYSBub24tZW51bWVyYWJsZSBwcm9wZXJ0eVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtlbnVtZXJhYmxlXVxuICovXG5cbmZ1bmN0aW9uIGRlZihvYmosIGtleSwgdmFsLCBlbnVtZXJhYmxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIHZhbHVlOiB2YWwsXG4gICAgZW51bWVyYWJsZTogISFlbnVtZXJhYmxlLFxuICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuLyoqXG4gKiBEZWJvdW5jZSBhIGZ1bmN0aW9uIHNvIGl0IG9ubHkgZ2V0cyBjYWxsZWQgYWZ0ZXIgdGhlXG4gKiBpbnB1dCBzdG9wcyBhcnJpdmluZyBhZnRlciB0aGUgZ2l2ZW4gd2FpdCBwZXJpb2QuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICogQHBhcmFtIHtOdW1iZXJ9IHdhaXRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSAtIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBfZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICB2YXIgdGltZW91dCwgYXJncywgY29udGV4dCwgdGltZXN0YW1wLCByZXN1bHQ7XG4gIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgIHZhciBsYXN0ID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcDtcbiAgICBpZiAobGFzdCA8IHdhaXQgJiYgbGFzdCA+PSAwKSB7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCAtIGxhc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgICB9XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgIGlmICghdGltZW91dCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG4vKipcbiAqIE1hbnVhbCBpbmRleE9mIGJlY2F1c2UgaXQncyBzbGlnaHRseSBmYXN0ZXIgdGhhblxuICogbmF0aXZlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICogQHBhcmFtIHsqfSBvYmpcbiAqL1xuXG5mdW5jdGlvbiBpbmRleE9mKGFyciwgb2JqKSB7XG4gIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGlmIChhcnJbaV0gPT09IG9iaikgcmV0dXJuIGk7XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIE1ha2UgYSBjYW5jZWxsYWJsZSB2ZXJzaW9uIG9mIGFuIGFzeW5jIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjYW5jZWxsYWJsZShmbikge1xuICB2YXIgY2IgPSBmdW5jdGlvbiBjYigpIHtcbiAgICBpZiAoIWNiLmNhbmNlbGxlZCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xuICBjYi5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIGNiO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHR3byB2YWx1ZXMgYXJlIGxvb3NlbHkgZXF1YWwgLSB0aGF0IGlzLFxuICogaWYgdGhleSBhcmUgcGxhaW4gb2JqZWN0cywgZG8gdGhleSBoYXZlIHRoZSBzYW1lIHNoYXBlP1xuICpcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGxvb3NlRXF1YWwoYSwgYikge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgcmV0dXJuIGEgPT0gYiB8fCAoaXNPYmplY3QoYSkgJiYgaXNPYmplY3QoYikgPyBKU09OLnN0cmluZ2lmeShhKSA9PT0gSlNPTi5zdHJpbmdpZnkoYikgOiBmYWxzZSk7XG4gIC8qIGVzbGludC1lbmFibGUgZXFlcWVxICovXG59XG5cbnZhciBoYXNQcm90byA9ICgnX19wcm90b19fJyBpbiB7fSk7XG5cbi8vIEJyb3dzZXIgZW52aXJvbm1lbnQgc25pZmZpbmdcbnZhciBpbkJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwod2luZG93KSAhPT0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vLyBVQSBzbmlmZmluZyBmb3Igd29ya2luZyBhcm91bmQgYnJvd3Nlci1zcGVjaWZpYyBxdWlya3NcbnZhciBVQSA9IGluQnJvd3NlciAmJiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gVUEgJiYgVUEuaW5kZXhPZignYW5kcm9pZCcpID4gMDtcblxudmFyIHRyYW5zaXRpb25Qcm9wID0gdW5kZWZpbmVkO1xudmFyIHRyYW5zaXRpb25FbmRFdmVudCA9IHVuZGVmaW5lZDtcbnZhciBhbmltYXRpb25Qcm9wID0gdW5kZWZpbmVkO1xudmFyIGFuaW1hdGlvbkVuZEV2ZW50ID0gdW5kZWZpbmVkO1xuXG4vLyBUcmFuc2l0aW9uIHByb3BlcnR5L2V2ZW50IHNuaWZmaW5nXG5pZiAoaW5Ccm93c2VyICYmICFpc0lFOSkge1xuICB2YXIgaXNXZWJraXRUcmFucyA9IHdpbmRvdy5vbnRyYW5zaXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJiB3aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kICE9PSB1bmRlZmluZWQ7XG4gIHZhciBpc1dlYmtpdEFuaW0gPSB3aW5kb3cub25hbmltYXRpb25lbmQgPT09IHVuZGVmaW5lZCAmJiB3aW5kb3cub253ZWJraXRhbmltYXRpb25lbmQgIT09IHVuZGVmaW5lZDtcbiAgdHJhbnNpdGlvblByb3AgPSBpc1dlYmtpdFRyYW5zID8gJ1dlYmtpdFRyYW5zaXRpb24nIDogJ3RyYW5zaXRpb24nO1xuICB0cmFuc2l0aW9uRW5kRXZlbnQgPSBpc1dlYmtpdFRyYW5zID8gJ3dlYmtpdFRyYW5zaXRpb25FbmQnIDogJ3RyYW5zaXRpb25lbmQnO1xuICBhbmltYXRpb25Qcm9wID0gaXNXZWJraXRBbmltID8gJ1dlYmtpdEFuaW1hdGlvbicgOiAnYW5pbWF0aW9uJztcbiAgYW5pbWF0aW9uRW5kRXZlbnQgPSBpc1dlYmtpdEFuaW0gPyAnd2Via2l0QW5pbWF0aW9uRW5kJyA6ICdhbmltYXRpb25lbmQnO1xufVxuXG4vKipcbiAqIERlZmVyIGEgdGFzayB0byBleGVjdXRlIGl0IGFzeW5jaHJvbm91c2x5LiBJZGVhbGx5IHRoaXNcbiAqIHNob3VsZCBiZSBleGVjdXRlZCBhcyBhIG1pY3JvdGFzaywgc28gd2UgbGV2ZXJhZ2VcbiAqIE11dGF0aW9uT2JzZXJ2ZXIgaWYgaXQncyBhdmFpbGFibGUsIGFuZCBmYWxsYmFjayB0b1xuICogc2V0VGltZW91dCgwKS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IGN0eFxuICovXG5cbnZhciBuZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBjYWxsYmFja3MgPSBbXTtcbiAgdmFyIHBlbmRpbmcgPSBmYWxzZTtcbiAgdmFyIHRpbWVyRnVuYztcbiAgZnVuY3Rpb24gbmV4dFRpY2tIYW5kbGVyKCkge1xuICAgIHBlbmRpbmcgPSBmYWxzZTtcbiAgICB2YXIgY29waWVzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGNhbGxiYWNrcyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb3BpZXNbaV0oKTtcbiAgICB9XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjb3VudGVyID0gMTtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihuZXh0VGlja0hhbmRsZXIpO1xuICAgIHZhciB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvdW50ZXIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGV4dE5vZGUsIHtcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICB9KTtcbiAgICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjb3VudGVyID0gKGNvdW50ZXIgKyAxKSAlIDI7XG4gICAgICB0ZXh0Tm9kZS5kYXRhID0gY291bnRlcjtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIHdlYnBhY2sgYXR0ZW1wdHMgdG8gaW5qZWN0IGEgc2hpbSBmb3Igc2V0SW1tZWRpYXRlXG4gICAgLy8gaWYgaXQgaXMgdXNlZCBhcyBhIGdsb2JhbCwgc28gd2UgaGF2ZSB0byB3b3JrIGFyb3VuZCB0aGF0IHRvXG4gICAgLy8gYXZvaWQgYnVuZGxpbmcgdW5uZWNlc3NhcnkgY29kZS5cbiAgICB2YXIgY29udGV4dCA9IGluQnJvd3NlciA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDoge307XG4gICAgdGltZXJGdW5jID0gY29udGV4dC5zZXRJbW1lZGlhdGUgfHwgc2V0VGltZW91dDtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKGNiLCBjdHgpIHtcbiAgICB2YXIgZnVuYyA9IGN0eCA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiLmNhbGwoY3R4KTtcbiAgICB9IDogY2I7XG4gICAgY2FsbGJhY2tzLnB1c2goZnVuYyk7XG4gICAgaWYgKHBlbmRpbmcpIHJldHVybjtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMobmV4dFRpY2tIYW5kbGVyLCAwKTtcbiAgfTtcbn0pKCk7XG5cbmZ1bmN0aW9uIENhY2hlKGxpbWl0KSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gdW5kZWZpbmVkO1xuICB0aGlzLl9rZXltYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuXG52YXIgcCA9IENhY2hlLnByb3RvdHlwZTtcblxuLyoqXG4gKiBQdXQgPHZhbHVlPiBpbnRvIHRoZSBjYWNoZSBhc3NvY2lhdGVkIHdpdGggPGtleT4uXG4gKiBSZXR1cm5zIHRoZSBlbnRyeSB3aGljaCB3YXMgcmVtb3ZlZCB0byBtYWtlIHJvb20gZm9yXG4gKiB0aGUgbmV3IGVudHJ5LiBPdGhlcndpc2UgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxuICogKGkuZS4gaWYgdGhlcmUgd2FzIGVub3VnaCByb29tIGFscmVhZHkpLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4ge0VudHJ5fHVuZGVmaW5lZH1cbiAqL1xuXG5wLnB1dCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHZhciByZW1vdmVkO1xuICBpZiAodGhpcy5zaXplID09PSB0aGlzLmxpbWl0KSB7XG4gICAgcmVtb3ZlZCA9IHRoaXMuc2hpZnQoKTtcbiAgfVxuXG4gIHZhciBlbnRyeSA9IHRoaXMuZ2V0KGtleSwgdHJ1ZSk7XG4gIGlmICghZW50cnkpIHtcbiAgICBlbnRyeSA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcbiAgICB0aGlzLl9rZXltYXBba2V5XSA9IGVudHJ5O1xuICAgIGlmICh0aGlzLnRhaWwpIHtcbiAgICAgIHRoaXMudGFpbC5uZXdlciA9IGVudHJ5O1xuICAgICAgZW50cnkub2xkZXIgPSB0aGlzLnRhaWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZCA9IGVudHJ5O1xuICAgIH1cbiAgICB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgICB0aGlzLnNpemUrKztcbiAgfVxuICBlbnRyeS52YWx1ZSA9IHZhbHVlO1xuXG4gIHJldHVybiByZW1vdmVkO1xufTtcblxuLyoqXG4gKiBQdXJnZSB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCAob2xkZXN0KSBlbnRyeSBmcm9tIHRoZVxuICogY2FjaGUuIFJldHVybnMgdGhlIHJlbW92ZWQgZW50cnkgb3IgdW5kZWZpbmVkIGlmIHRoZVxuICogY2FjaGUgd2FzIGVtcHR5LlxuICovXG5cbnAuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBlbnRyeSA9IHRoaXMuaGVhZDtcbiAgaWYgKGVudHJ5KSB7XG4gICAgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5ld2VyO1xuICAgIHRoaXMuaGVhZC5vbGRlciA9IHVuZGVmaW5lZDtcbiAgICBlbnRyeS5uZXdlciA9IGVudHJ5Lm9sZGVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2tleW1hcFtlbnRyeS5rZXldID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2l6ZS0tO1xuICB9XG4gIHJldHVybiBlbnRyeTtcbn07XG5cbi8qKlxuICogR2V0IGFuZCByZWdpc3RlciByZWNlbnQgdXNlIG9mIDxrZXk+LiBSZXR1cm5zIHRoZSB2YWx1ZVxuICogYXNzb2NpYXRlZCB3aXRoIDxrZXk+IG9yIHVuZGVmaW5lZCBpZiBub3QgaW4gY2FjaGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHtCb29sZWFufSByZXR1cm5FbnRyeVxuICogQHJldHVybiB7RW50cnl8Kn1cbiAqL1xuXG5wLmdldCA9IGZ1bmN0aW9uIChrZXksIHJldHVybkVudHJ5KSB7XG4gIHZhciBlbnRyeSA9IHRoaXMuX2tleW1hcFtrZXldO1xuICBpZiAoZW50cnkgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICBpZiAoZW50cnkgPT09IHRoaXMudGFpbCkge1xuICAgIHJldHVybiByZXR1cm5FbnRyeSA/IGVudHJ5IDogZW50cnkudmFsdWU7XG4gIH1cbiAgLy8gSEVBRC0tLS0tLS0tLS0tLS0tVEFJTFxuICAvLyAgIDwub2xkZXIgICAubmV3ZXI+XG4gIC8vICA8LS0tIGFkZCBkaXJlY3Rpb24gLS1cbiAgLy8gICBBICBCICBDICA8RD4gIEVcbiAgaWYgKGVudHJ5Lm5ld2VyKSB7XG4gICAgaWYgKGVudHJ5ID09PSB0aGlzLmhlYWQpIHtcbiAgICAgIHRoaXMuaGVhZCA9IGVudHJ5Lm5ld2VyO1xuICAgIH1cbiAgICBlbnRyeS5uZXdlci5vbGRlciA9IGVudHJ5Lm9sZGVyOyAvLyBDIDwtLSBFLlxuICB9XG4gIGlmIChlbnRyeS5vbGRlcikge1xuICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gZW50cnkubmV3ZXI7IC8vIEMuIC0tPiBFXG4gIH1cbiAgZW50cnkubmV3ZXIgPSB1bmRlZmluZWQ7IC8vIEQgLS14XG4gIGVudHJ5Lm9sZGVyID0gdGhpcy50YWlsOyAvLyBELiAtLT4gRVxuICBpZiAodGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsLm5ld2VyID0gZW50cnk7IC8vIEUuIDwtLSBEXG4gIH1cbiAgdGhpcy50YWlsID0gZW50cnk7XG4gIHJldHVybiByZXR1cm5FbnRyeSA/IGVudHJ5IDogZW50cnkudmFsdWU7XG59O1xuXG52YXIgY2FjaGUkMSA9IG5ldyBDYWNoZSgxMDAwKTtcbnZhciBmaWx0ZXJUb2tlblJFID0gL1teXFxzJ1wiXSt8J1teJ10qJ3xcIlteXCJdKlwiL2c7XG52YXIgcmVzZXJ2ZWRBcmdSRSA9IC9eaW4kfF4tP1xcZCsvO1xuXG4vKipcbiAqIFBhcnNlciBzdGF0ZVxuICovXG5cbnZhciBzdHI7XG52YXIgZGlyO1xudmFyIGM7XG52YXIgcHJldjtcbnZhciBpO1xudmFyIGw7XG52YXIgbGFzdEZpbHRlckluZGV4O1xudmFyIGluU2luZ2xlO1xudmFyIGluRG91YmxlO1xudmFyIGN1cmx5O1xudmFyIHNxdWFyZTtcbnZhciBwYXJlbjtcbi8qKlxuICogUHVzaCBhIGZpbHRlciB0byB0aGUgY3VycmVudCBkaXJlY3RpdmUgb2JqZWN0XG4gKi9cblxuZnVuY3Rpb24gcHVzaEZpbHRlcigpIHtcbiAgdmFyIGV4cCA9IHN0ci5zbGljZShsYXN0RmlsdGVySW5kZXgsIGkpLnRyaW0oKTtcbiAgdmFyIGZpbHRlcjtcbiAgaWYgKGV4cCkge1xuICAgIGZpbHRlciA9IHt9O1xuICAgIHZhciB0b2tlbnMgPSBleHAubWF0Y2goZmlsdGVyVG9rZW5SRSk7XG4gICAgZmlsdGVyLm5hbWUgPSB0b2tlbnNbMF07XG4gICAgaWYgKHRva2Vucy5sZW5ndGggPiAxKSB7XG4gICAgICBmaWx0ZXIuYXJncyA9IHRva2Vucy5zbGljZSgxKS5tYXAocHJvY2Vzc0ZpbHRlckFyZyk7XG4gICAgfVxuICB9XG4gIGlmIChmaWx0ZXIpIHtcbiAgICAoZGlyLmZpbHRlcnMgPSBkaXIuZmlsdGVycyB8fCBbXSkucHVzaChmaWx0ZXIpO1xuICB9XG4gIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGFyZ3VtZW50IGlzIGR5bmFtaWMgYW5kIHN0cmlwIHF1b3Rlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJnXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cblxuZnVuY3Rpb24gcHJvY2Vzc0ZpbHRlckFyZyhhcmcpIHtcbiAgaWYgKHJlc2VydmVkQXJnUkUudGVzdChhcmcpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0b051bWJlcihhcmcpLFxuICAgICAgZHluYW1pYzogZmFsc2VcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHZhciBzdHJpcHBlZCA9IHN0cmlwUXVvdGVzKGFyZyk7XG4gICAgdmFyIGR5bmFtaWMgPSBzdHJpcHBlZCA9PT0gYXJnO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZHluYW1pYyA/IGFyZyA6IHN0cmlwcGVkLFxuICAgICAgZHluYW1pYzogZHluYW1pY1xuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhIGRpcmVjdGl2ZSB2YWx1ZSBhbmQgZXh0cmFjdCB0aGUgZXhwcmVzc2lvblxuICogYW5kIGl0cyBmaWx0ZXJzIGludG8gYSBkZXNjcmlwdG9yLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogXCJhICsgMSB8IHVwcGVyY2FzZVwiIHdpbGwgeWllbGQ6XG4gKiB7XG4gKiAgIGV4cHJlc3Npb246ICdhICsgMScsXG4gKiAgIGZpbHRlcnM6IFtcbiAqICAgICB7IG5hbWU6ICd1cHBlcmNhc2UnLCBhcmdzOiBudWxsIH1cbiAqICAgXVxuICogfVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZURpcmVjdGl2ZShzKSB7XG4gIHZhciBoaXQgPSBjYWNoZSQxLmdldChzKTtcbiAgaWYgKGhpdCkge1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICAvLyByZXNldCBwYXJzZXIgc3RhdGVcbiAgc3RyID0gcztcbiAgaW5TaW5nbGUgPSBpbkRvdWJsZSA9IGZhbHNlO1xuICBjdXJseSA9IHNxdWFyZSA9IHBhcmVuID0gMDtcbiAgbGFzdEZpbHRlckluZGV4ID0gMDtcbiAgZGlyID0ge307XG5cbiAgZm9yIChpID0gMCwgbCA9IHN0ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBwcmV2ID0gYztcbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGluU2luZ2xlKSB7XG4gICAgICAvLyBjaGVjayBzaW5nbGUgcXVvdGVcbiAgICAgIGlmIChjID09PSAweDI3ICYmIHByZXYgIT09IDB4NUMpIGluU2luZ2xlID0gIWluU2luZ2xlO1xuICAgIH0gZWxzZSBpZiAoaW5Eb3VibGUpIHtcbiAgICAgIC8vIGNoZWNrIGRvdWJsZSBxdW90ZVxuICAgICAgaWYgKGMgPT09IDB4MjIgJiYgcHJldiAhPT0gMHg1QykgaW5Eb3VibGUgPSAhaW5Eb3VibGU7XG4gICAgfSBlbHNlIGlmIChjID09PSAweDdDICYmIC8vIHBpcGVcbiAgICBzdHIuY2hhckNvZGVBdChpICsgMSkgIT09IDB4N0MgJiYgc3RyLmNoYXJDb2RlQXQoaSAtIDEpICE9PSAweDdDKSB7XG4gICAgICBpZiAoZGlyLmV4cHJlc3Npb24gPT0gbnVsbCkge1xuICAgICAgICAvLyBmaXJzdCBmaWx0ZXIsIGVuZCBvZiBleHByZXNzaW9uXG4gICAgICAgIGxhc3RGaWx0ZXJJbmRleCA9IGkgKyAxO1xuICAgICAgICBkaXIuZXhwcmVzc2lvbiA9IHN0ci5zbGljZSgwLCBpKS50cmltKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBhbHJlYWR5IGhhcyBmaWx0ZXJcbiAgICAgICAgcHVzaEZpbHRlcigpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgY2FzZSAweDIyOlxuICAgICAgICAgIGluRG91YmxlID0gdHJ1ZTticmVhazsgLy8gXCJcbiAgICAgICAgY2FzZSAweDI3OlxuICAgICAgICAgIGluU2luZ2xlID0gdHJ1ZTticmVhazsgLy8gJ1xuICAgICAgICBjYXNlIDB4Mjg6XG4gICAgICAgICAgcGFyZW4rKzticmVhazsgLy8gKFxuICAgICAgICBjYXNlIDB4Mjk6XG4gICAgICAgICAgcGFyZW4tLTticmVhazsgLy8gKVxuICAgICAgICBjYXNlIDB4NUI6XG4gICAgICAgICAgc3F1YXJlKys7YnJlYWs7IC8vIFtcbiAgICAgICAgY2FzZSAweDVEOlxuICAgICAgICAgIHNxdWFyZS0tO2JyZWFrOyAvLyBdXG4gICAgICAgIGNhc2UgMHg3QjpcbiAgICAgICAgICBjdXJseSsrO2JyZWFrOyAvLyB7XG4gICAgICAgIGNhc2UgMHg3RDpcbiAgICAgICAgICBjdXJseS0tO2JyZWFrOyAvLyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpci5leHByZXNzaW9uID09IG51bGwpIHtcbiAgICBkaXIuZXhwcmVzc2lvbiA9IHN0ci5zbGljZSgwLCBpKS50cmltKCk7XG4gIH0gZWxzZSBpZiAobGFzdEZpbHRlckluZGV4ICE9PSAwKSB7XG4gICAgcHVzaEZpbHRlcigpO1xuICB9XG5cbiAgY2FjaGUkMS5wdXQocywgZGlyKTtcbiAgcmV0dXJuIGRpcjtcbn1cblxudmFyIGRpcmVjdGl2ZSA9IE9iamVjdC5mcmVlemUoe1xuICBwYXJzZURpcmVjdGl2ZTogcGFyc2VEaXJlY3RpdmVcbn0pO1xuXG52YXIgcmVnZXhFc2NhcGVSRSA9IC9bLS4qKz9eJHt9KCl8W1xcXVxcL1xcXFxdL2c7XG52YXIgY2FjaGUgPSB1bmRlZmluZWQ7XG52YXIgdGFnUkUgPSB1bmRlZmluZWQ7XG52YXIgaHRtbFJFID0gdW5kZWZpbmVkO1xuLyoqXG4gKiBFc2NhcGUgYSBzdHJpbmcgc28gaXQgY2FuIGJlIHVzZWQgaW4gYSBSZWdFeHBcbiAqIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4RXNjYXBlUkUsICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gY29tcGlsZVJlZ2V4KCkge1xuICB2YXIgb3BlbiA9IGVzY2FwZVJlZ2V4KGNvbmZpZy5kZWxpbWl0ZXJzWzBdKTtcbiAgdmFyIGNsb3NlID0gZXNjYXBlUmVnZXgoY29uZmlnLmRlbGltaXRlcnNbMV0pO1xuICB2YXIgdW5zYWZlT3BlbiA9IGVzY2FwZVJlZ2V4KGNvbmZpZy51bnNhZmVEZWxpbWl0ZXJzWzBdKTtcbiAgdmFyIHVuc2FmZUNsb3NlID0gZXNjYXBlUmVnZXgoY29uZmlnLnVuc2FmZURlbGltaXRlcnNbMV0pO1xuICB0YWdSRSA9IG5ldyBSZWdFeHAodW5zYWZlT3BlbiArICcoLis/KScgKyB1bnNhZmVDbG9zZSArICd8JyArIG9wZW4gKyAnKC4rPyknICsgY2xvc2UsICdnJyk7XG4gIGh0bWxSRSA9IG5ldyBSZWdFeHAoJ14nICsgdW5zYWZlT3BlbiArICcuKicgKyB1bnNhZmVDbG9zZSArICckJyk7XG4gIC8vIHJlc2V0IGNhY2hlXG4gIGNhY2hlID0gbmV3IENhY2hlKDEwMDApO1xufVxuXG4vKipcbiAqIFBhcnNlIGEgdGVtcGxhdGUgdGV4dCBzdHJpbmcgaW50byBhbiBhcnJheSBvZiB0b2tlbnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD4gfCBudWxsfVxuICogICAgICAgICAgICAgICAtIHtTdHJpbmd9IHR5cGVcbiAqICAgICAgICAgICAgICAgLSB7U3RyaW5nfSB2YWx1ZVxuICogICAgICAgICAgICAgICAtIHtCb29sZWFufSBbaHRtbF1cbiAqICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gW29uZVRpbWVdXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VUZXh0KHRleHQpIHtcbiAgaWYgKCFjYWNoZSkge1xuICAgIGNvbXBpbGVSZWdleCgpO1xuICB9XG4gIHZhciBoaXQgPSBjYWNoZS5nZXQodGV4dCk7XG4gIGlmIChoaXQpIHtcbiAgICByZXR1cm4gaGl0O1xuICB9XG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoL1xcbi9nLCAnJyk7XG4gIGlmICghdGFnUkUudGVzdCh0ZXh0KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciB0b2tlbnMgPSBbXTtcbiAgdmFyIGxhc3RJbmRleCA9IHRhZ1JFLmxhc3RJbmRleCA9IDA7XG4gIHZhciBtYXRjaCwgaW5kZXgsIGh0bWwsIHZhbHVlLCBmaXJzdCwgb25lVGltZTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgd2hpbGUgKG1hdGNoID0gdGFnUkUuZXhlYyh0ZXh0KSkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICBpbmRleCA9IG1hdGNoLmluZGV4O1xuICAgIC8vIHB1c2ggdGV4dCB0b2tlblxuICAgIGlmIChpbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgdG9rZW5zLnB1c2goe1xuICAgICAgICB2YWx1ZTogdGV4dC5zbGljZShsYXN0SW5kZXgsIGluZGV4KVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHRhZyB0b2tlblxuICAgIGh0bWwgPSBodG1sUkUudGVzdChtYXRjaFswXSk7XG4gICAgdmFsdWUgPSBodG1sID8gbWF0Y2hbMV0gOiBtYXRjaFsyXTtcbiAgICBmaXJzdCA9IHZhbHVlLmNoYXJDb2RlQXQoMCk7XG4gICAgb25lVGltZSA9IGZpcnN0ID09PSA0MjsgLy8gKlxuICAgIHZhbHVlID0gb25lVGltZSA/IHZhbHVlLnNsaWNlKDEpIDogdmFsdWU7XG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgdGFnOiB0cnVlLFxuICAgICAgdmFsdWU6IHZhbHVlLnRyaW0oKSxcbiAgICAgIGh0bWw6IGh0bWwsXG4gICAgICBvbmVUaW1lOiBvbmVUaW1lXG4gICAgfSk7XG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG4gIH1cbiAgaWYgKGxhc3RJbmRleCA8IHRleHQubGVuZ3RoKSB7XG4gICAgdG9rZW5zLnB1c2goe1xuICAgICAgdmFsdWU6IHRleHQuc2xpY2UobGFzdEluZGV4KVxuICAgIH0pO1xuICB9XG4gIGNhY2hlLnB1dCh0ZXh0LCB0b2tlbnMpO1xuICByZXR1cm4gdG9rZW5zO1xufVxuXG4vKipcbiAqIEZvcm1hdCBhIGxpc3Qgb2YgdG9rZW5zIGludG8gYW4gZXhwcmVzc2lvbi5cbiAqIGUuZy4gdG9rZW5zIHBhcnNlZCBmcm9tICdhIHt7Yn19IGMnIGNhbiBiZSBzZXJpYWxpemVkXG4gKiBpbnRvIG9uZSBzaW5nbGUgZXhwcmVzc2lvbiBhcyAnXCJhIFwiICsgYiArIFwiIGNcIicuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gdG9rZW5zXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHRva2Vuc1RvRXhwKHRva2Vucywgdm0pIHtcbiAgaWYgKHRva2Vucy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICByZXR1cm4gZm9ybWF0VG9rZW4odG9rZW4sIHZtKTtcbiAgICB9KS5qb2luKCcrJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm1hdFRva2VuKHRva2Vuc1swXSwgdm0sIHRydWUpO1xuICB9XG59XG5cbi8qKlxuICogRm9ybWF0IGEgc2luZ2xlIHRva2VuLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0b2tlblxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbmdsZV1cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRUb2tlbih0b2tlbiwgdm0sIHNpbmdsZSkge1xuICByZXR1cm4gdG9rZW4udGFnID8gdG9rZW4ub25lVGltZSAmJiB2bSA/ICdcIicgKyB2bS4kZXZhbCh0b2tlbi52YWx1ZSkgKyAnXCInIDogaW5saW5lRmlsdGVycyh0b2tlbi52YWx1ZSwgc2luZ2xlKSA6ICdcIicgKyB0b2tlbi52YWx1ZSArICdcIic7XG59XG5cbi8qKlxuICogRm9yIGFuIGF0dHJpYnV0ZSB3aXRoIG11bHRpcGxlIGludGVycG9sYXRpb24gdGFncyxcbiAqIGUuZy4gYXR0cj1cInNvbWUte3t0aGluZyB8IGZpbHRlcn19XCIsIGluIG9yZGVyIHRvIGNvbWJpbmVcbiAqIHRoZSB3aG9sZSB0aGluZyBpbnRvIGEgc2luZ2xlIHdhdGNoYWJsZSBleHByZXNzaW9uLCB3ZVxuICogaGF2ZSB0byBpbmxpbmUgdGhvc2UgZmlsdGVycy4gVGhpcyBmdW5jdGlvbiBkb2VzIGV4YWN0bHlcbiAqIHRoYXQuIFRoaXMgaXMgYSBiaXQgaGFja3kgYnV0IGl0IGF2b2lkcyBoZWF2eSBjaGFuZ2VzXG4gKiB0byBkaXJlY3RpdmUgcGFyc2VyIGFuZCB3YXRjaGVyIG1lY2hhbmlzbS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHNpbmdsZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbnZhciBmaWx0ZXJSRSA9IC9bXnxdXFx8W158XS87XG5mdW5jdGlvbiBpbmxpbmVGaWx0ZXJzKGV4cCwgc2luZ2xlKSB7XG4gIGlmICghZmlsdGVyUkUudGVzdChleHApKSB7XG4gICAgcmV0dXJuIHNpbmdsZSA/IGV4cCA6ICcoJyArIGV4cCArICcpJztcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlyID0gcGFyc2VEaXJlY3RpdmUoZXhwKTtcbiAgICBpZiAoIWRpci5maWx0ZXJzKSB7XG4gICAgICByZXR1cm4gJygnICsgZXhwICsgJyknO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ3RoaXMuX2FwcGx5RmlsdGVycygnICsgZGlyLmV4cHJlc3Npb24gKyAvLyB2YWx1ZVxuICAgICAgJyxudWxsLCcgKyAvLyBvbGRWYWx1ZSAobnVsbCBmb3IgcmVhZClcbiAgICAgIEpTT04uc3RyaW5naWZ5KGRpci5maWx0ZXJzKSArIC8vIGZpbHRlciBkZXNjcmlwdG9yc1xuICAgICAgJyxmYWxzZSknOyAvLyB3cml0ZT9cbiAgICB9XG4gIH1cbn1cblxudmFyIHRleHQgPSBPYmplY3QuZnJlZXplKHtcbiAgY29tcGlsZVJlZ2V4OiBjb21waWxlUmVnZXgsXG4gIHBhcnNlVGV4dDogcGFyc2VUZXh0LFxuICB0b2tlbnNUb0V4cDogdG9rZW5zVG9FeHBcbn0pO1xuXG52YXIgZGVsaW1pdGVycyA9IFsne3snLCAnfX0nXTtcbnZhciB1bnNhZmVEZWxpbWl0ZXJzID0gWyd7e3snLCAnfX19J107XG5cbnZhciBjb25maWcgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcHJpbnQgZGVidWcgbWVzc2FnZXMuXG4gICAqIEFsc28gZW5hYmxlcyBzdGFjayB0cmFjZSBmb3Igd2FybmluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBkZWJ1ZzogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gc3VwcHJlc3Mgd2FybmluZ3MuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBzaWxlbnQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVzZSBhc3luYyByZW5kZXJpbmcuXG4gICAqL1xuXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHdhcm4gYWdhaW5zdCBlcnJvcnMgY2F1Z2h0IHdoZW4gZXZhbHVhdGluZ1xuICAgKiBleHByZXNzaW9ucy5cbiAgICovXG5cbiAgd2FybkV4cHJlc3Npb25FcnJvcnM6IHRydWUsXG5cbiAgLyoqXG4gICAqIEludGVybmFsIGZsYWcgdG8gaW5kaWNhdGUgdGhlIGRlbGltaXRlcnMgaGF2ZSBiZWVuXG4gICAqIGNoYW5nZWQuXG4gICAqXG4gICAqIEB0eXBlIHtCb29sZWFufVxuICAgKi9cblxuICBfZGVsaW1pdGVyc0NoYW5nZWQ6IHRydWUsXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgYXNzZXQgdHlwZXMgdGhhdCBhIGNvbXBvbmVudCBjYW4gb3duLlxuICAgKlxuICAgKiBAdHlwZSB7QXJyYXl9XG4gICAqL1xuXG4gIF9hc3NldFR5cGVzOiBbJ2NvbXBvbmVudCcsICdkaXJlY3RpdmUnLCAnZWxlbWVudERpcmVjdGl2ZScsICdmaWx0ZXInLCAndHJhbnNpdGlvbicsICdwYXJ0aWFsJ10sXG5cbiAgLyoqXG4gICAqIHByb3AgYmluZGluZyBtb2Rlc1xuICAgKi9cblxuICBfcHJvcEJpbmRpbmdNb2Rlczoge1xuICAgIE9ORV9XQVk6IDAsXG4gICAgVFdPX1dBWTogMSxcbiAgICBPTkVfVElNRTogMlxuICB9LFxuXG4gIC8qKlxuICAgKiBNYXggY2lyY3VsYXIgdXBkYXRlcyBhbGxvd2VkIGluIGEgYmF0Y2hlciBmbHVzaCBjeWNsZS5cbiAgICovXG5cbiAgX21heFVwZGF0ZUNvdW50OiAxMDBcblxufSwge1xuICBkZWxpbWl0ZXJzOiB7IC8qKlxuICAgICAgICAgICAgICAgICAqIEludGVycG9sYXRpb24gZGVsaW1pdGVycy4gQ2hhbmdpbmcgdGhlc2Ugd291bGQgdHJpZ2dlclxuICAgICAgICAgICAgICAgICAqIHRoZSB0ZXh0IHBhcnNlciB0byByZS1jb21waWxlIHRoZSByZWd1bGFyIGV4cHJlc3Npb25zLlxuICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICogQHR5cGUge0FycmF5PFN0cmluZz59XG4gICAgICAgICAgICAgICAgICovXG5cbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBkZWxpbWl0ZXJzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsKSB7XG4gICAgICBkZWxpbWl0ZXJzID0gdmFsO1xuICAgICAgY29tcGlsZVJlZ2V4KCk7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LFxuICB1bnNhZmVEZWxpbWl0ZXJzOiB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdW5zYWZlRGVsaW1pdGVycztcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbCkge1xuICAgICAgdW5zYWZlRGVsaW1pdGVycyA9IHZhbDtcbiAgICAgIGNvbXBpbGVSZWdleCgpO1xuICAgIH0sXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IHRydWVcbiAgfVxufSk7XG5cbnZhciB3YXJuID0gdW5kZWZpbmVkO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYXNDb25zb2xlID0gdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnO1xuICAgIHdhcm4gPSBmdW5jdGlvbiAobXNnLCBlKSB7XG4gICAgICBpZiAoaGFzQ29uc29sZSAmJiAoIWNvbmZpZy5zaWxlbnQgfHwgY29uZmlnLmRlYnVnKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tWdWUgd2Fybl06ICcgKyBtc2cpO1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCdXYXJuaW5nIFN0YWNrIFRyYWNlJykuc3RhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG59XG5cbi8qKlxuICogQXBwZW5kIHdpdGggdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxuZnVuY3Rpb24gYXBwZW5kV2l0aFRyYW5zaXRpb24oZWwsIHRhcmdldCwgdm0sIGNiKSB7XG4gIGFwcGx5VHJhbnNpdGlvbihlbCwgMSwgZnVuY3Rpb24gKCkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbCk7XG4gIH0sIHZtLCBjYik7XG59XG5cbi8qKlxuICogSW5zZXJ0QmVmb3JlIHdpdGggdHJhbnNpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxuZnVuY3Rpb24gYmVmb3JlV2l0aFRyYW5zaXRpb24oZWwsIHRhcmdldCwgdm0sIGNiKSB7XG4gIGFwcGx5VHJhbnNpdGlvbihlbCwgMSwgZnVuY3Rpb24gKCkge1xuICAgIGJlZm9yZShlbCwgdGFyZ2V0KTtcbiAgfSwgdm0sIGNiKTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgd2l0aCB0cmFuc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZVdpdGhUcmFuc2l0aW9uKGVsLCB2bSwgY2IpIHtcbiAgYXBwbHlUcmFuc2l0aW9uKGVsLCAtMSwgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZShlbCk7XG4gIH0sIHZtLCBjYik7XG59XG5cbi8qKlxuICogQXBwbHkgdHJhbnNpdGlvbnMgd2l0aCBhbiBvcGVyYXRpb24gY2FsbGJhY2suXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtOdW1iZXJ9IGRpcmVjdGlvblxuICogICAgICAgICAgICAgICAgICAxOiBlbnRlclxuICogICAgICAgICAgICAgICAgIC0xOiBsZWF2ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3AgLSB0aGUgYWN0dWFsIERPTSBvcGVyYXRpb25cbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICovXG5cbmZ1bmN0aW9uIGFwcGx5VHJhbnNpdGlvbihlbCwgZGlyZWN0aW9uLCBvcCwgdm0sIGNiKSB7XG4gIHZhciB0cmFuc2l0aW9uID0gZWwuX192X3RyYW5zO1xuICBpZiAoIXRyYW5zaXRpb24gfHxcbiAgLy8gc2tpcCBpZiB0aGVyZSBhcmUgbm8ganMgaG9va3MgYW5kIENTUyB0cmFuc2l0aW9uIGlzXG4gIC8vIG5vdCBzdXBwb3J0ZWRcbiAgIXRyYW5zaXRpb24uaG9va3MgJiYgIXRyYW5zaXRpb25FbmRFdmVudCB8fFxuICAvLyBza2lwIHRyYW5zaXRpb25zIGZvciBpbml0aWFsIGNvbXBpbGVcbiAgIXZtLl9pc0NvbXBpbGVkIHx8XG4gIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBtYW5pcHVsYXRlZCBieSBhIHBhcmVudCBkaXJlY3RpdmVcbiAgLy8gZHVyaW5nIHRoZSBwYXJlbnQncyBjb21waWxhdGlvbiBwaGFzZSwgc2tpcCB0aGVcbiAgLy8gYW5pbWF0aW9uLlxuICB2bS4kcGFyZW50ICYmICF2bS4kcGFyZW50Ll9pc0NvbXBpbGVkKSB7XG4gICAgb3AoKTtcbiAgICBpZiAoY2IpIGNiKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBhY3Rpb24gPSBkaXJlY3Rpb24gPiAwID8gJ2VudGVyJyA6ICdsZWF2ZSc7XG4gIHRyYW5zaXRpb25bYWN0aW9uXShvcCwgY2IpO1xufVxuXG52YXIgdHJhbnNpdGlvbiA9IE9iamVjdC5mcmVlemUoe1xuICBhcHBlbmRXaXRoVHJhbnNpdGlvbjogYXBwZW5kV2l0aFRyYW5zaXRpb24sXG4gIGJlZm9yZVdpdGhUcmFuc2l0aW9uOiBiZWZvcmVXaXRoVHJhbnNpdGlvbixcbiAgcmVtb3ZlV2l0aFRyYW5zaXRpb246IHJlbW92ZVdpdGhUcmFuc2l0aW9uLFxuICBhcHBseVRyYW5zaXRpb246IGFwcGx5VHJhbnNpdGlvblxufSk7XG5cbi8qKlxuICogUXVlcnkgYW4gZWxlbWVudCBzZWxlY3RvciBpZiBpdCdzIG5vdCBhbiBlbGVtZW50IGFscmVhZHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cblxuZnVuY3Rpb24gcXVlcnkoZWwpIHtcbiAgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgc2VsZWN0b3IgPSBlbDtcbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwpO1xuICAgIGlmICghZWwpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignQ2Fubm90IGZpbmQgZWxlbWVudDogJyArIHNlbGVjdG9yKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBpbiB0aGUgZG9jdW1lbnQuXG4gKiBOb3RlOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMgc2hvdWxkIHdvcmsgaGVyZVxuICogYnV0IGFsd2F5cyByZXR1cm5zIGZhbHNlIGZvciBjb21tZW50IG5vZGVzIGluIHBoYW50b21qcyxcbiAqIG1ha2luZyB1bml0IHRlc3RzIGRpZmZpY3VsdC4gVGhpcyBpcyBmaXhlZCBieSBkb2luZyB0aGVcbiAqIGNvbnRhaW5zKCkgY2hlY2sgb24gdGhlIG5vZGUncyBwYXJlbnROb2RlIGluc3RlYWQgb2ZcbiAqIHRoZSBub2RlIGl0c2VsZi5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaW5Eb2Mobm9kZSkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB2YXIgcGFyZW50ID0gbm9kZSAmJiBub2RlLnBhcmVudE5vZGU7XG4gIHJldHVybiBkb2MgPT09IG5vZGUgfHwgZG9jID09PSBwYXJlbnQgfHwgISEocGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gMSAmJiBkb2MuY29udGFpbnMocGFyZW50KSk7XG59XG5cbi8qKlxuICogR2V0IGFuZCByZW1vdmUgYW4gYXR0cmlidXRlIGZyb20gYSBub2RlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IF9hdHRyXG4gKi9cblxuZnVuY3Rpb24gZ2V0QXR0cihub2RlLCBfYXR0cikge1xuICB2YXIgdmFsID0gbm9kZS5nZXRBdHRyaWJ1dGUoX2F0dHIpO1xuICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoX2F0dHIpO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbi8qKlxuICogR2V0IGFuIGF0dHJpYnV0ZSB3aXRoIGNvbG9uIG9yIHYtYmluZDogcHJlZml4LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG5cbmZ1bmN0aW9uIGdldEJpbmRBdHRyKG5vZGUsIG5hbWUpIHtcbiAgdmFyIHZhbCA9IGdldEF0dHIobm9kZSwgJzonICsgbmFtZSk7XG4gIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICB2YWwgPSBnZXRBdHRyKG5vZGUsICd2LWJpbmQ6JyArIG5hbWUpO1xuICB9XG4gIHJldHVybiB2YWw7XG59XG5cbi8qKlxuICogQ2hlY2sgdGhlIHByZXNlbmNlIG9mIGEgYmluZCBhdHRyaWJ1dGUuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBoYXNCaW5kQXR0cihub2RlLCBuYW1lKSB7XG4gIHJldHVybiBub2RlLmhhc0F0dHJpYnV0ZShuYW1lKSB8fCBub2RlLmhhc0F0dHJpYnV0ZSgnOicgKyBuYW1lKSB8fCBub2RlLmhhc0F0dHJpYnV0ZSgndi1iaW5kOicgKyBuYW1lKTtcbn1cblxuLyoqXG4gKiBJbnNlcnQgZWwgYmVmb3JlIHRhcmdldFxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gKi9cblxuZnVuY3Rpb24gYmVmb3JlKGVsLCB0YXJnZXQpIHtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsLCB0YXJnZXQpO1xufVxuXG4vKipcbiAqIEluc2VydCBlbCBhZnRlciB0YXJnZXRcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICovXG5cbmZ1bmN0aW9uIGFmdGVyKGVsLCB0YXJnZXQpIHtcbiAgaWYgKHRhcmdldC5uZXh0U2libGluZykge1xuICAgIGJlZm9yZShlbCwgdGFyZ2V0Lm5leHRTaWJsaW5nKTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZWwgZnJvbSBET01cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKi9cblxuZnVuY3Rpb24gcmVtb3ZlKGVsKSB7XG4gIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xufVxuXG4vKipcbiAqIFByZXBlbmQgZWwgdG8gdGFyZ2V0XG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAqL1xuXG5mdW5jdGlvbiBwcmVwZW5kKGVsLCB0YXJnZXQpIHtcbiAgaWYgKHRhcmdldC5maXJzdENoaWxkKSB7XG4gICAgYmVmb3JlKGVsLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlcGxhY2UgdGFyZ2V0IHdpdGggZWxcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldFxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICovXG5cbmZ1bmN0aW9uIHJlcGxhY2UodGFyZ2V0LCBlbCkge1xuICB2YXIgcGFyZW50ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gIGlmIChwYXJlbnQpIHtcbiAgICBwYXJlbnQucmVwbGFjZUNoaWxkKGVsLCB0YXJnZXQpO1xuICB9XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVyIHNob3J0aGFuZC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFt1c2VDYXB0dXJlXVxuICovXG5cbmZ1bmN0aW9uIG9uKGVsLCBldmVudCwgY2IsIHVzZUNhcHR1cmUpIHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IsIHVzZUNhcHR1cmUpO1xufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lciBzaG9ydGhhbmQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmZ1bmN0aW9uIG9mZihlbCwgZXZlbnQsIGNiKSB7XG4gIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKTtcbn1cblxuLyoqXG4gKiBJbiBJRTksIHNldEF0dHJpYnV0ZSgnY2xhc3MnKSB3aWxsIHJlc3VsdCBpbiBlbXB0eSBjbGFzc1xuICogaWYgdGhlIGVsZW1lbnQgYWxzbyBoYXMgdGhlIDpjbGFzcyBhdHRyaWJ1dGU7IEhvd2V2ZXIgaW5cbiAqIFBoYW50b21KUywgc2V0dGluZyBgY2xhc3NOYW1lYCBkb2VzIG5vdCB3b3JrIG9uIFNWRyBlbGVtZW50cy4uLlxuICogU28gd2UgaGF2ZSB0byBkbyBhIGNvbmRpdGlvbmFsIGNoZWNrIGhlcmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsc1xuICovXG5cbmZ1bmN0aW9uIHNldENsYXNzKGVsLCBjbHMpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc0lFOSAmJiAhL3N2ZyQvLnRlc3QoZWwubmFtZXNwYWNlVVJJKSkge1xuICAgIGVsLmNsYXNzTmFtZSA9IGNscztcbiAgfSBlbHNlIHtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xzKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBjbGFzcyB3aXRoIGNvbXBhdGliaWxpdHkgZm9yIElFICYgU1ZHXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGNsc1xuICovXG5cbmZ1bmN0aW9uIGFkZENsYXNzKGVsLCBjbHMpIHtcbiAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3VyID0gJyAnICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyAnICc7XG4gICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICBzZXRDbGFzcyhlbCwgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3Mgd2l0aCBjb21wYXRpYmlsaXR5IGZvciBJRSAmIFNWR1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbHNcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xzKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGN1ciA9ICcgJyArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgJyAnO1xuICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgIH1cbiAgICBzZXRDbGFzcyhlbCwgY3VyLnRyaW0oKSk7XG4gIH1cbiAgaWYgKCFlbC5jbGFzc05hbWUpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBFeHRyYWN0IHJhdyBjb250ZW50IGluc2lkZSBhbiBlbGVtZW50IGludG8gYSB0ZW1wb3JhcnlcbiAqIGNvbnRhaW5lciBkaXZcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGFzRnJhZ21lbnRcbiAqIEByZXR1cm4ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBleHRyYWN0Q29udGVudChlbCwgYXNGcmFnbWVudCkge1xuICB2YXIgY2hpbGQ7XG4gIHZhciByYXdDb250ZW50O1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzVGVtcGxhdGUoZWwpICYmIGlzRnJhZ21lbnQoZWwuY29udGVudCkpIHtcbiAgICBlbCA9IGVsLmNvbnRlbnQ7XG4gIH1cbiAgaWYgKGVsLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHRyaW1Ob2RlKGVsKTtcbiAgICByYXdDb250ZW50ID0gYXNGcmFnbWVudCA/IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gICAgd2hpbGUgKGNoaWxkID0gZWwuZmlyc3RDaGlsZCkge1xuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgICAgcmF3Q29udGVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgfVxuICB9XG4gIHJldHVybiByYXdDb250ZW50O1xufVxuXG4vKipcbiAqIFRyaW0gcG9zc2libGUgZW1wdHkgaGVhZC90YWlsIHRleHQgYW5kIGNvbW1lbnRcbiAqIG5vZGVzIGluc2lkZSBhIHBhcmVudC5cbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqL1xuXG5mdW5jdGlvbiB0cmltTm9kZShub2RlKSB7XG4gIHZhciBjaGlsZDtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VxdWVuY2VzICovXG4gIHdoaWxlICgoY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQsIGlzVHJpbW1hYmxlKGNoaWxkKSkpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICB3aGlsZSAoKGNoaWxkID0gbm9kZS5sYXN0Q2hpbGQsIGlzVHJpbW1hYmxlKGNoaWxkKSkpIHtcbiAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlcXVlbmNlcyAqL1xufVxuXG5mdW5jdGlvbiBpc1RyaW1tYWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlICYmIChub2RlLm5vZGVUeXBlID09PSAzICYmICFub2RlLmRhdGEudHJpbSgpIHx8IG5vZGUubm9kZVR5cGUgPT09IDgpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGFuIGVsZW1lbnQgaXMgYSB0ZW1wbGF0ZSB0YWcuXG4gKiBOb3RlIGlmIHRoZSB0ZW1wbGF0ZSBhcHBlYXJzIGluc2lkZSBhbiBTVkcgaXRzIHRhZ05hbWVcbiAqIHdpbGwgYmUgaW4gbG93ZXJjYXNlLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqL1xuXG5mdW5jdGlvbiBpc1RlbXBsYXRlKGVsKSB7XG4gIHJldHVybiBlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RlbXBsYXRlJztcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gXCJhbmNob3JcIiBmb3IgcGVyZm9ybWluZyBkb20gaW5zZXJ0aW9uL3JlbW92YWxzLlxuICogVGhpcyBpcyB1c2VkIGluIGEgbnVtYmVyIG9mIHNjZW5hcmlvczpcbiAqIC0gZnJhZ21lbnQgaW5zdGFuY2VcbiAqIC0gdi1odG1sXG4gKiAtIHYtaWZcbiAqIC0gdi1mb3JcbiAqIC0gY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcGVyc2lzdCAtIElFIHRyYXNoZXMgZW1wdHkgdGV4dE5vZGVzIG9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9uZU5vZGUodHJ1ZSksIHNvIGluIGNlcnRhaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VzIHRoZSBhbmNob3IgbmVlZHMgdG8gYmVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbi1lbXB0eSB0byBiZSBwZXJzaXN0ZWQgaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlcy5cbiAqIEByZXR1cm4ge0NvbW1lbnR8VGV4dH1cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVBbmNob3IoY29udGVudCwgcGVyc2lzdCkge1xuICB2YXIgYW5jaG9yID0gY29uZmlnLmRlYnVnID8gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChjb250ZW50KSA6IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBlcnNpc3QgPyAnICcgOiAnJyk7XG4gIGFuY2hvci5fX3ZfYW5jaG9yID0gdHJ1ZTtcbiAgcmV0dXJuIGFuY2hvcjtcbn1cblxuLyoqXG4gKiBGaW5kIGEgY29tcG9uZW50IHJlZiBhdHRyaWJ1dGUgdGhhdCBzdGFydHMgd2l0aCAkLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybiB7U3RyaW5nfHVuZGVmaW5lZH1cbiAqL1xuXG52YXIgcmVmUkUgPSAvXnYtcmVmOi87XG5cbmZ1bmN0aW9uIGZpbmRSZWYobm9kZSkge1xuICBpZiAobm9kZS5oYXNBdHRyaWJ1dGVzKCkpIHtcbiAgICB2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdHRycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBuYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgIGlmIChyZWZSRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBjYW1lbGl6ZShuYW1lLnJlcGxhY2UocmVmUkUsICcnKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogTWFwIGEgZnVuY3Rpb24gdG8gYSByYW5nZSBvZiBub2RlcyAuXG4gKlxuICogQHBhcmFtIHtOb2RlfSBub2RlXG4gKiBAcGFyYW0ge05vZGV9IGVuZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3BcbiAqL1xuXG5mdW5jdGlvbiBtYXBOb2RlUmFuZ2Uobm9kZSwgZW5kLCBvcCkge1xuICB2YXIgbmV4dDtcbiAgd2hpbGUgKG5vZGUgIT09IGVuZCkge1xuICAgIG5leHQgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIG9wKG5vZGUpO1xuICAgIG5vZGUgPSBuZXh0O1xuICB9XG4gIG9wKGVuZCk7XG59XG5cbi8qKlxuICogUmVtb3ZlIGEgcmFuZ2Ugb2Ygbm9kZXMgd2l0aCB0cmFuc2l0aW9uLCBzdG9yZVxuICogdGhlIG5vZGVzIGluIGEgZnJhZ21lbnQgd2l0aCBjb3JyZWN0IG9yZGVyaW5nLFxuICogYW5kIGNhbGwgY2FsbGJhY2sgd2hlbiBkb25lLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gc3RhcnRcbiAqIEBwYXJhbSB7Tm9kZX0gZW5kXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ1xuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVOb2RlUmFuZ2Uoc3RhcnQsIGVuZCwgdm0sIGZyYWcsIGNiKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHZhciByZW1vdmVkID0gMDtcbiAgdmFyIG5vZGVzID0gW107XG4gIG1hcE5vZGVSYW5nZShzdGFydCwgZW5kLCBmdW5jdGlvbiAobm9kZSkge1xuICAgIGlmIChub2RlID09PSBlbmQpIGRvbmUgPSB0cnVlO1xuICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgcmVtb3ZlV2l0aFRyYW5zaXRpb24obm9kZSwgdm0sIG9uUmVtb3ZlZCk7XG4gIH0pO1xuICBmdW5jdGlvbiBvblJlbW92ZWQoKSB7XG4gICAgcmVtb3ZlZCsrO1xuICAgIGlmIChkb25lICYmIHJlbW92ZWQgPj0gbm9kZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZyYWcuYXBwZW5kQ2hpbGQobm9kZXNbaV0pO1xuICAgICAgfVxuICAgICAgY2IgJiYgY2IoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIG5vZGUgaXMgYSBEb2N1bWVudEZyYWdtZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc0ZyYWdtZW50KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMTE7XG59XG5cbi8qKlxuICogR2V0IG91dGVySFRNTCBvZiBlbGVtZW50cywgdGFraW5nIGNhcmVcbiAqIG9mIFNWRyBlbGVtZW50cyBpbiBJRSBhcyB3ZWxsLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBnZXRPdXRlckhUTUwoZWwpIHtcbiAgaWYgKGVsLm91dGVySFRNTCkge1xuICAgIHJldHVybiBlbC5vdXRlckhUTUw7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xuICB9XG59XG5cbnZhciBjb21tb25UYWdSRSA9IC9eKGRpdnxwfHNwYW58aW1nfGF8YnxpfGJyfHVsfG9sfGxpfGgxfGgyfGgzfGg0fGg1fGg2fGNvZGV8cHJlfHRhYmxlfHRofHRkfHRyfGZvcm18bGFiZWx8aW5wdXR8c2VsZWN0fG9wdGlvbnxuYXZ8YXJ0aWNsZXxzZWN0aW9ufGhlYWRlcnxmb290ZXIpJC87XG52YXIgcmVzZXJ2ZWRUYWdSRSA9IC9eKHNsb3R8cGFydGlhbHxjb21wb25lbnQpJC87XG5cbnZhciBpc1Vua25vd25FbGVtZW50ID0gdW5kZWZpbmVkO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgaXNVbmtub3duRWxlbWVudCA9IGZ1bmN0aW9uIChlbCwgdGFnKSB7XG4gICAgaWYgKHRhZy5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjgyMTAzNjQvMTA3MDI0NFxuICAgICAgcmV0dXJuIGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTFVua25vd25FbGVtZW50IHx8IGVsLmNvbnN0cnVjdG9yID09PSB3aW5kb3cuSFRNTEVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoL0hUTUxVbmtub3duRWxlbWVudC8udGVzdChlbC50b1N0cmluZygpKSAmJlxuICAgICAgICAvLyBDaHJvbWUgcmV0dXJucyB1bmtub3duIGZvciBzZXZlcmFsIEhUTUw1IGVsZW1lbnRzLlxuICAgICAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTQwNTI2XG4gICAgICAgICEvXihkYXRhfHRpbWV8cnRjfHJiKSQvLnRlc3QodGFnKVxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZWxlbWVudCBpcyBhIGNvbXBvbmVudCwgaWYgeWVzIHJldHVybiBpdHNcbiAqIGNvbXBvbmVudCBpZC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBjaGVja0NvbXBvbmVudEF0dHIoZWwsIG9wdGlvbnMpIHtcbiAgdmFyIHRhZyA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGhhc0F0dHJzID0gZWwuaGFzQXR0cmlidXRlcygpO1xuICBpZiAoIWNvbW1vblRhZ1JFLnRlc3QodGFnKSAmJiAhcmVzZXJ2ZWRUYWdSRS50ZXN0KHRhZykpIHtcbiAgICBpZiAocmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSkge1xuICAgICAgcmV0dXJuIHsgaWQ6IHRhZyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaXMgPSBoYXNBdHRycyAmJiBnZXRJc0JpbmRpbmcoZWwpO1xuICAgICAgaWYgKGlzKSB7XG4gICAgICAgIHJldHVybiBpcztcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB2YXIgZXhwZWN0ZWRUYWcgPSBvcHRpb25zLl9jb21wb25lbnROYW1lTWFwICYmIG9wdGlvbnMuX2NvbXBvbmVudE5hbWVNYXBbdGFnXTtcbiAgICAgICAgaWYgKGV4cGVjdGVkVGFnKSB7XG4gICAgICAgICAgd2FybignVW5rbm93biBjdXN0b20gZWxlbWVudDogPCcgKyB0YWcgKyAnPiAtICcgKyAnZGlkIHlvdSBtZWFuIDwnICsgZXhwZWN0ZWRUYWcgKyAnPj8gJyArICdIVE1MIGlzIGNhc2UtaW5zZW5zaXRpdmUsIHJlbWVtYmVyIHRvIHVzZSBrZWJhYi1jYXNlIGluIHRlbXBsYXRlcy4nKTtcbiAgICAgICAgfSBlbHNlIGlmIChpc1Vua25vd25FbGVtZW50KGVsLCB0YWcpKSB7XG4gICAgICAgICAgd2FybignVW5rbm93biBjdXN0b20gZWxlbWVudDogPCcgKyB0YWcgKyAnPiAtIGRpZCB5b3UgJyArICdyZWdpc3RlciB0aGUgY29tcG9uZW50IGNvcnJlY3RseT8gRm9yIHJlY3Vyc2l2ZSBjb21wb25lbnRzLCAnICsgJ21ha2Ugc3VyZSB0byBwcm92aWRlIHRoZSBcIm5hbWVcIiBvcHRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaGFzQXR0cnMpIHtcbiAgICByZXR1cm4gZ2V0SXNCaW5kaW5nKGVsKTtcbiAgfVxufVxuXG4vKipcbiAqIEdldCBcImlzXCIgYmluZGluZyBmcm9tIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHJldHVybiB7T2JqZWN0fHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRJc0JpbmRpbmcoZWwpIHtcbiAgLy8gZHluYW1pYyBzeW50YXhcbiAgdmFyIGV4cCA9IGdldEF0dHIoZWwsICdpcycpO1xuICBpZiAoZXhwICE9IG51bGwpIHtcbiAgICByZXR1cm4geyBpZDogZXhwIH07XG4gIH0gZWxzZSB7XG4gICAgZXhwID0gZ2V0QmluZEF0dHIoZWwsICdpcycpO1xuICAgIGlmIChleHAgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHsgaWQ6IGV4cCwgZHluYW1pYzogdHJ1ZSB9O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFNldCBhIHByb3AncyBpbml0aWFsIHZhbHVlIG9uIGEgdm0gYW5kIGl0cyBkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gaW5pdFByb3Aodm0sIHByb3AsIHZhbHVlKSB7XG4gIHZhciBrZXkgPSBwcm9wLnBhdGg7XG4gIHZhbHVlID0gY29lcmNlUHJvcChwcm9wLCB2YWx1ZSk7XG4gIHZtW2tleV0gPSB2bS5fZGF0YVtrZXldID0gYXNzZXJ0UHJvcChwcm9wLCB2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBBc3NlcnQgd2hldGhlciBhIHByb3AgaXMgdmFsaWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHByb3BcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiBhc3NlcnRQcm9wKHByb3AsIHZhbHVlKSB7XG4gIGlmICghcHJvcC5vcHRpb25zLnJlcXVpcmVkICYmICggLy8gbm9uLXJlcXVpcmVkXG4gIHByb3AucmF3ID09PSBudWxsIHx8IC8vIGFic2NlbnRcbiAgdmFsdWUgPT0gbnVsbCkgLy8gbnVsbCBvciB1bmRlZmluZWRcbiAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIHZhciBvcHRpb25zID0gcHJvcC5vcHRpb25zO1xuICB2YXIgdHlwZSA9IG9wdGlvbnMudHlwZTtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gU3RyaW5nKSB7XG4gICAgICBleHBlY3RlZFR5cGUgPSAnc3RyaW5nJztcbiAgICAgIHZhbGlkID0gdHlwZW9mIHZhbHVlID09PSBleHBlY3RlZFR5cGU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBOdW1iZXIpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdudW1iZXInO1xuICAgICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gQm9vbGVhbikge1xuICAgICAgZXhwZWN0ZWRUeXBlID0gJ2Jvb2xlYW4nO1xuICAgICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEZ1bmN0aW9uKSB7XG4gICAgICBleHBlY3RlZFR5cGUgPSAnZnVuY3Rpb24nO1xuICAgICAgdmFsaWQgPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBPYmplY3QpIHtcbiAgICAgIGV4cGVjdGVkVHlwZSA9ICdvYmplY3QnO1xuICAgICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IEFycmF5KSB7XG4gICAgICBleHBlY3RlZFR5cGUgPSAnYXJyYXknO1xuICAgICAgdmFsaWQgPSBpc0FycmF5KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWQgPSB2YWx1ZSBpbnN0YW5jZW9mIHR5cGU7XG4gICAgfVxuICB9XG4gIGlmICghdmFsaWQpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0ludmFsaWQgcHJvcDogdHlwZSBjaGVjayBmYWlsZWQgZm9yICcgKyBwcm9wLnBhdGggKyAnPVwiJyArIHByb3AucmF3ICsgJ1wiLicgKyAnIEV4cGVjdGVkICcgKyBmb3JtYXRUeXBlKGV4cGVjdGVkVHlwZSkgKyAnLCBnb3QgJyArIGZvcm1hdFZhbHVlKHZhbHVlKSArICcuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB2YWxpZGF0b3IgPSBvcHRpb25zLnZhbGlkYXRvcjtcbiAgaWYgKHZhbGlkYXRvcikge1xuICAgIGlmICghdmFsaWRhdG9yKHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciAnICsgcHJvcC5wYXRoICsgJz1cIicgKyBwcm9wLnJhdyArICdcIicpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBGb3JjZSBwYXJzaW5nIHZhbHVlIHdpdGggY29lcmNlIG9wdGlvbi5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7Kn1cbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2VQcm9wKHByb3AsIHZhbHVlKSB7XG4gIHZhciBjb2VyY2UgPSBwcm9wLm9wdGlvbnMuY29lcmNlO1xuICBpZiAoIWNvZXJjZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICAvLyBjb2VyY2UgaXMgYSBmdW5jdGlvblxuICByZXR1cm4gY29lcmNlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VHlwZSh2YWwpIHtcbiAgcmV0dXJuIHZhbCA/IHZhbC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbC5zbGljZSgxKSA6ICdjdXN0b20gdHlwZSc7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKHZhbCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkuc2xpY2UoOCwgLTEpO1xufVxuXG4vKipcbiAqIE9wdGlvbiBvdmVyd3JpdGluZyBzdHJhdGVnaWVzIGFyZSBmdW5jdGlvbnMgdGhhdCBoYW5kbGVcbiAqIGhvdyB0byBtZXJnZSBhIHBhcmVudCBvcHRpb24gdmFsdWUgYW5kIGEgY2hpbGQgb3B0aW9uXG4gKiB2YWx1ZSBpbnRvIHRoZSBmaW5hbCB2YWx1ZS5cbiAqXG4gKiBBbGwgc3RyYXRlZ3kgZnVuY3Rpb25zIGZvbGxvdyB0aGUgc2FtZSBzaWduYXR1cmU6XG4gKlxuICogQHBhcmFtIHsqfSBwYXJlbnRWYWxcbiAqIEBwYXJhbSB7Kn0gY2hpbGRWYWxcbiAqIEBwYXJhbSB7VnVlfSBbdm1dXG4gKi9cblxudmFyIHN0cmF0cyA9IGNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5cbmZ1bmN0aW9uIG1lcmdlRGF0YSh0bywgZnJvbSkge1xuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcbiAgZm9yIChrZXkgaW4gZnJvbSkge1xuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh0b1ZhbCkgJiYgaXNPYmplY3QoZnJvbVZhbCkpIHtcbiAgICAgIG1lcmdlRGF0YSh0b1ZhbCwgZnJvbVZhbCk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBEYXRhXG4gKi9cblxuc3RyYXRzLmRhdGEgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCwgdm0pIHtcbiAgaWYgKCF2bSkge1xuICAgIC8vIGluIGEgVnVlLmV4dGVuZCBtZXJnZSwgYm90aCBzaG91bGQgYmUgZnVuY3Rpb25zXG4gICAgaWYgKCFjaGlsZFZhbCkge1xuICAgICAgcmV0dXJuIHBhcmVudFZhbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgKyAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICsgJ2RlZmluaXRpb25zLicpO1xuICAgICAgcmV0dXJuIHBhcmVudFZhbDtcbiAgICB9XG4gICAgaWYgKCFwYXJlbnRWYWwpIHtcbiAgICAgIHJldHVybiBjaGlsZFZhbDtcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4oKSB7XG4gICAgICByZXR1cm4gbWVyZ2VEYXRhKGNoaWxkVmFsLmNhbGwodGhpcyksIHBhcmVudFZhbC5jYWxsKHRoaXMpKTtcbiAgICB9O1xuICB9IGVsc2UgaWYgKHBhcmVudFZhbCB8fCBjaGlsZFZhbCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWRJbnN0YW5jZURhdGFGbigpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh2bSkgOiBjaGlsZFZhbDtcbiAgICAgIHZhciBkZWZhdWx0RGF0YSA9IHR5cGVvZiBwYXJlbnRWYWwgPT09ICdmdW5jdGlvbicgPyBwYXJlbnRWYWwuY2FsbCh2bSkgOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoaW5zdGFuY2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBtZXJnZURhdGEoaW5zdGFuY2VEYXRhLCBkZWZhdWx0RGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVmYXVsdERhdGE7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBFbFxuICovXG5cbnN0cmF0cy5lbCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSkge1xuICBpZiAoIXZtICYmIGNoaWxkVmFsICYmIHR5cGVvZiBjaGlsZFZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignVGhlIFwiZWxcIiBvcHRpb24gc2hvdWxkIGJlIGEgZnVuY3Rpb24gJyArICd0aGF0IHJldHVybnMgYSBwZXItaW5zdGFuY2UgdmFsdWUgaW4gY29tcG9uZW50ICcgKyAnZGVmaW5pdGlvbnMuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciByZXQgPSBjaGlsZFZhbCB8fCBwYXJlbnRWYWw7XG4gIC8vIGludm9rZSB0aGUgZWxlbWVudCBmYWN0b3J5IGlmIHRoaXMgaXMgaW5zdGFuY2UgbWVyZ2VcbiAgcmV0dXJuIHZtICYmIHR5cGVvZiByZXQgPT09ICdmdW5jdGlvbicgPyByZXQuY2FsbCh2bSkgOiByZXQ7XG59O1xuXG4vKipcbiAqIEhvb2tzIGFuZCBwYXJhbSBhdHRyaWJ1dGVzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5cbnN0cmF0cy5pbml0ID0gc3RyYXRzLmNyZWF0ZWQgPSBzdHJhdHMucmVhZHkgPSBzdHJhdHMuYXR0YWNoZWQgPSBzdHJhdHMuZGV0YWNoZWQgPSBzdHJhdHMuYmVmb3JlQ29tcGlsZSA9IHN0cmF0cy5jb21waWxlZCA9IHN0cmF0cy5iZWZvcmVEZXN0cm95ID0gc3RyYXRzLmRlc3Ryb3llZCA9IHN0cmF0cy5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA/IHBhcmVudFZhbCA/IHBhcmVudFZhbC5jb25jYXQoY2hpbGRWYWwpIDogaXNBcnJheShjaGlsZFZhbCkgPyBjaGlsZFZhbCA6IFtjaGlsZFZhbF0gOiBwYXJlbnRWYWw7XG59O1xuXG4vKipcbiAqIDAuMTEgZGVwcmVjYXRpb24gd2FybmluZ1xuICovXG5cbnN0cmF0cy5wYXJhbUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignXCJwYXJhbUF0dHJpYnV0ZXNcIiBvcHRpb24gaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiAwLjEyLiAnICsgJ1VzZSBcInByb3BzXCIgaW5zdGVhZC4nKTtcbn07XG5cbi8qKlxuICogQXNzZXRzXG4gKlxuICogV2hlbiBhIHZtIGlzIHByZXNlbnQgKGluc3RhbmNlIGNyZWF0aW9uKSwgd2UgbmVlZCB0byBkb1xuICogYSB0aHJlZS13YXkgbWVyZ2UgYmV0d2VlbiBjb25zdHJ1Y3RvciBvcHRpb25zLCBpbnN0YW5jZVxuICogb3B0aW9ucyBhbmQgcGFyZW50IG9wdGlvbnMuXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VBc3NldHMocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwpO1xuICByZXR1cm4gY2hpbGRWYWwgPyBleHRlbmQocmVzLCBndWFyZEFycmF5QXNzZXRzKGNoaWxkVmFsKSkgOiByZXM7XG59XG5cbmNvbmZpZy5fYXNzZXRUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogRXZlbnRzICYgV2F0Y2hlcnMuXG4gKlxuICogRXZlbnRzICYgd2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cblxuc3RyYXRzLndhdGNoID0gc3RyYXRzLmV2ZW50cyA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIGlmICghY2hpbGRWYWwpIHJldHVybiBwYXJlbnRWYWw7XG4gIGlmICghcGFyZW50VmFsKSByZXR1cm4gY2hpbGRWYWw7XG4gIHZhciByZXQgPSB7fTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgZm9yICh2YXIga2V5IGluIGNoaWxkVmFsKSB7XG4gICAgdmFyIHBhcmVudCA9IHJldFtrZXldO1xuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleV07XG4gICAgaWYgKHBhcmVudCAmJiAhaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBbcGFyZW50XTtcbiAgICB9XG4gICAgcmV0W2tleV0gPSBwYXJlbnQgPyBwYXJlbnQuY29uY2F0KGNoaWxkKSA6IFtjaGlsZF07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuXG5zdHJhdHMucHJvcHMgPSBzdHJhdHMubWV0aG9kcyA9IHN0cmF0cy5jb21wdXRlZCA9IGZ1bmN0aW9uIChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIGlmICghY2hpbGRWYWwpIHJldHVybiBwYXJlbnRWYWw7XG4gIGlmICghcGFyZW50VmFsKSByZXR1cm4gY2hpbGRWYWw7XG4gIHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBleHRlbmQocmV0LCBjaGlsZFZhbCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cblxudmFyIGRlZmF1bHRTdHJhdCA9IGZ1bmN0aW9uIGRlZmF1bHRTdHJhdChwYXJlbnRWYWwsIGNoaWxkVmFsKSB7XG4gIHJldHVybiBjaGlsZFZhbCA9PT0gdW5kZWZpbmVkID8gcGFyZW50VmFsIDogY2hpbGRWYWw7XG59O1xuXG4vKipcbiAqIE1ha2Ugc3VyZSBjb21wb25lbnQgb3B0aW9ucyBnZXQgY29udmVydGVkIHRvIGFjdHVhbFxuICogY29uc3RydWN0b3JzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gZ3VhcmRDb21wb25lbnRzKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuY29tcG9uZW50cykge1xuICAgIHZhciBjb21wb25lbnRzID0gb3B0aW9ucy5jb21wb25lbnRzID0gZ3VhcmRBcnJheUFzc2V0cyhvcHRpb25zLmNvbXBvbmVudHMpO1xuICAgIHZhciBpZHMgPSBPYmplY3Qua2V5cyhjb21wb25lbnRzKTtcbiAgICB2YXIgZGVmO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFwID0gb3B0aW9ucy5fY29tcG9uZW50TmFtZU1hcCA9IHt9O1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGlkcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBpZHNbaV07XG4gICAgICBpZiAoY29tbW9uVGFnUkUudGVzdChrZXkpIHx8IHJlc2VydmVkVGFnUkUudGVzdChrZXkpKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICsgJ2lkOiAnICsga2V5KTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyByZWNvcmQgYSBhbGwgbG93ZXJjYXNlIDwtPiBrZWJhYi1jYXNlIG1hcHBpbmcgZm9yXG4gICAgICAvLyBwb3NzaWJsZSBjdXN0b20gZWxlbWVudCBjYXNlIGVycm9yIHdhcm5pbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIG1hcFtrZXkucmVwbGFjZSgvLS9nLCAnJykudG9Mb3dlckNhc2UoKV0gPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIH1cbiAgICAgIGRlZiA9IGNvbXBvbmVudHNba2V5XTtcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KGRlZikpIHtcbiAgICAgICAgY29tcG9uZW50c1trZXldID0gVnVlLmV4dGVuZChkZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGd1YXJkUHJvcHMob3B0aW9ucykge1xuICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICB2YXIgaSwgdmFsO1xuICBpZiAoaXNBcnJheShwcm9wcykpIHtcbiAgICBvcHRpb25zLnByb3BzID0ge307XG4gICAgaSA9IHByb3BzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YWwgPSBwcm9wc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICBvcHRpb25zLnByb3BzW3ZhbF0gPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh2YWwubmFtZSkge1xuICAgICAgICBvcHRpb25zLnByb3BzW3ZhbC5uYW1lXSA9IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChwcm9wcykpIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdmFsID0gcHJvcHNba2V5c1tpXV07XG4gICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9wc1trZXlzW2ldXSA9IHsgdHlwZTogdmFsIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogR3VhcmQgYW4gQXJyYXktZm9ybWF0IGFzc2V0cyBvcHRpb24gYW5kIGNvbnZlcnRlZCBpdFxuICogaW50byB0aGUga2V5LXZhbHVlIE9iamVjdCBmb3JtYXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGFzc2V0c1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGd1YXJkQXJyYXlBc3NldHMoYXNzZXRzKSB7XG4gIGlmIChpc0FycmF5KGFzc2V0cykpIHtcbiAgICB2YXIgcmVzID0ge307XG4gICAgdmFyIGkgPSBhc3NldHMubGVuZ3RoO1xuICAgIHZhciBhc3NldDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhc3NldCA9IGFzc2V0c1tpXTtcbiAgICAgIHZhciBpZCA9IHR5cGVvZiBhc3NldCA9PT0gJ2Z1bmN0aW9uJyA/IGFzc2V0Lm9wdGlvbnMgJiYgYXNzZXQub3B0aW9ucy5uYW1lIHx8IGFzc2V0LmlkIDogYXNzZXQubmFtZSB8fCBhc3NldC5pZDtcbiAgICAgIGlmICghaWQpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdBcnJheS1zeW50YXggYXNzZXRzIG11c3QgcHJvdmlkZSBhIFwibmFtZVwiIG9yIFwiaWRcIiBmaWVsZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1tpZF0gPSBhc3NldDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuICByZXR1cm4gYXNzZXRzO1xufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmVudFxuICogQHBhcmFtIHtPYmplY3R9IGNoaWxkXG4gKiBAcGFyYW0ge1Z1ZX0gW3ZtXSAtIGlmIHZtIGlzIHByZXNlbnQsIGluZGljYXRlcyB0aGlzIGlzXG4gKiAgICAgICAgICAgICAgICAgICAgIGFuIGluc3RhbnRpYXRpb24gbWVyZ2UuXG4gKi9cblxuZnVuY3Rpb24gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQsIHZtKSB7XG4gIGd1YXJkQ29tcG9uZW50cyhjaGlsZCk7XG4gIGd1YXJkUHJvcHMoY2hpbGQpO1xuICB2YXIgb3B0aW9ucyA9IHt9O1xuICB2YXIga2V5O1xuICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZC5taXhpbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBwYXJlbnQgPSBtZXJnZU9wdGlvbnMocGFyZW50LCBjaGlsZC5taXhpbnNbaV0sIHZtKTtcbiAgICB9XG4gIH1cbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpO1xuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQoa2V5KSB7XG4gICAgdmFyIHN0cmF0ID0gc3RyYXRzW2tleV0gfHwgZGVmYXVsdFN0cmF0O1xuICAgIG9wdGlvbnNba2V5XSA9IHN0cmF0KHBhcmVudFtrZXldLCBjaGlsZFtrZXldLCB2bSwga2V5KTtcbiAgfVxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEByZXR1cm4ge09iamVjdHxGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlQXNzZXQob3B0aW9ucywgdHlwZSwgaWQpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2YgaWQgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICB2YXIgY2FtZWxpemVkSWQ7XG4gIHJldHVybiBhc3NldHNbaWRdIHx8XG4gIC8vIGNhbWVsQ2FzZSBJRFxuICBhc3NldHNbY2FtZWxpemVkSWQgPSBjYW1lbGl6ZShpZCldIHx8XG4gIC8vIFBhc2NhbCBDYXNlIElEXG4gIGFzc2V0c1tjYW1lbGl6ZWRJZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhbWVsaXplZElkLnNsaWNlKDEpXTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgYXNzZXQgZXhpc3RzXG4gKi9cblxuZnVuY3Rpb24gYXNzZXJ0QXNzZXQodmFsLCB0eXBlLCBpZCkge1xuICBpZiAoIXZhbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUgKyAnOiAnICsgaWQpO1xuICB9XG59XG5cbnZhciB1aWQkMSA9IDA7XG5cbi8qKlxuICogQSBkZXAgaXMgYW4gb2JzZXJ2YWJsZSB0aGF0IGNhbiBoYXZlIG11bHRpcGxlXG4gKiBkaXJlY3RpdmVzIHN1YnNjcmliaW5nIHRvIGl0LlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBEZXAoKSB7XG4gIHRoaXMuaWQgPSB1aWQkMSsrO1xuICB0aGlzLnN1YnMgPSBbXTtcbn1cblxuLy8gdGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gdGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvbmx5IG9uZVxuLy8gd2F0Y2hlciBiZWluZyBldmFsdWF0ZWQgYXQgYW55IHRpbWUuXG5EZXAudGFyZ2V0ID0gbnVsbDtcblxuLyoqXG4gKiBBZGQgYSBkaXJlY3RpdmUgc3Vic2NyaWJlci5cbiAqXG4gKiBAcGFyYW0ge0RpcmVjdGl2ZX0gc3ViXG4gKi9cblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiAoc3ViKSB7XG4gIHRoaXMuc3Vicy5wdXNoKHN1Yik7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhIGRpcmVjdGl2ZSBzdWJzY3JpYmVyLlxuICpcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSBzdWJcbiAqL1xuXG5EZXAucHJvdG90eXBlLnJlbW92ZVN1YiA9IGZ1bmN0aW9uIChzdWIpIHtcbiAgdGhpcy5zdWJzLiRyZW1vdmUoc3ViKTtcbn07XG5cbi8qKlxuICogQWRkIHNlbGYgYXMgYSBkZXBlbmRlbmN5IHRvIHRoZSB0YXJnZXQgd2F0Y2hlci5cbiAqL1xuXG5EZXAucHJvdG90eXBlLmRlcGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldC5hZGREZXAodGhpcyk7XG59O1xuXG4vKipcbiAqIE5vdGlmeSBhbGwgc3Vic2NyaWJlcnMgb2YgYSBuZXcgdmFsdWUuXG4gKi9cblxuRGVwLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIHN0YWJsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0b0FycmF5KHRoaXMuc3Vicyk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gc3Vicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBzdWJzW2ldLnVwZGF0ZSgpO1xuICB9XG59O1xuXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbnZhciBhcnJheU1ldGhvZHMgPSBPYmplY3QuY3JlYXRlKGFycmF5UHJvdG8pXG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cblxuO1sncHVzaCcsICdwb3AnLCAnc2hpZnQnLCAndW5zaGlmdCcsICdzcGxpY2UnLCAnc29ydCcsICdyZXZlcnNlJ10uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gIC8vIGNhY2hlIG9yaWdpbmFsIG1ldGhvZFxuICB2YXIgb3JpZ2luYWwgPSBhcnJheVByb3RvW21ldGhvZF07XG4gIGRlZihhcnJheU1ldGhvZHMsIG1ldGhvZCwgZnVuY3Rpb24gbXV0YXRvcigpIHtcbiAgICAvLyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50czpcbiAgICAvLyBodHRwOi8vanNwZXJmLmNvbS9jbG9zdXJlLXdpdGgtYXJndW1lbnRzXG4gICAgdmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGkpO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3M7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzcGxpY2UnOlxuICAgICAgICBpbnNlcnRlZCA9IGFyZ3Muc2xpY2UoMik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoaW5zZXJ0ZWQpIG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7XG4gICAgLy8gbm90aWZ5IGNoYW5nZVxuICAgIG9iLmRlcC5ub3RpZnkoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIFN3YXAgdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHdpdGggYSBuZXcgdmFsdWVcbiAqIGFuZCBlbWl0cyBjb3JyZXNwb25kaW5nIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEByZXR1cm4geyp9IC0gcmVwbGFjZWQgZWxlbWVudFxuICovXG5cbmRlZihhcnJheVByb3RvLCAnJHNldCcsIGZ1bmN0aW9uICRzZXQoaW5kZXgsIHZhbCkge1xuICBpZiAoaW5kZXggPj0gdGhpcy5sZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IE51bWJlcihpbmRleCkgKyAxO1xuICB9XG4gIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSwgdmFsKVswXTtcbn0pO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0byByZW1vdmUgdGhlIGVsZW1lbnQgYXQgZ2l2ZW4gaW5kZXguXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmRlZihhcnJheVByb3RvLCAnJHJlbW92ZScsIGZ1bmN0aW9uICRyZW1vdmUoaXRlbSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCF0aGlzLmxlbmd0aCkgcmV0dXJuO1xuICB2YXIgaW5kZXggPSBpbmRleE9mKHRoaXMsIGl0ZW0pO1xuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIHJldHVybiB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn0pO1xuXG52YXIgYXJyYXlLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYXJyYXlNZXRob2RzKTtcblxuLyoqXG4gKiBPYnNlcnZlciBjbGFzcyB0aGF0IGFyZSBhdHRhY2hlZCB0byBlYWNoIG9ic2VydmVkXG4gKiBvYmplY3QuIE9uY2UgYXR0YWNoZWQsIHRoZSBvYnNlcnZlciBjb252ZXJ0cyB0YXJnZXRcbiAqIG9iamVjdCdzIHByb3BlcnR5IGtleXMgaW50byBnZXR0ZXIvc2V0dGVycyB0aGF0XG4gKiBjb2xsZWN0IGRlcGVuZGVuY2llcyBhbmQgZGlzcGF0Y2hlcyB1cGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSB2YWx1ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuZnVuY3Rpb24gT2JzZXJ2ZXIodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHZhciBhdWdtZW50ID0gaGFzUHJvdG8gPyBwcm90b0F1Z21lbnQgOiBjb3B5QXVnbWVudDtcbiAgICBhdWdtZW50KHZhbHVlLCBhcnJheU1ldGhvZHMsIGFycmF5S2V5cyk7XG4gICAgdGhpcy5vYnNlcnZlQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud2Fsayh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gSW5zdGFuY2UgbWV0aG9kc1xuXG4vKipcbiAqIFdhbGsgdGhyb3VnaCBlYWNoIHByb3BlcnR5IGFuZCBjb252ZXJ0IHRoZW0gaW50b1xuICogZ2V0dGVyL3NldHRlcnMuIFRoaXMgbWV0aG9kIHNob3VsZCBvbmx5IGJlIGNhbGxlZCB3aGVuXG4gKiB2YWx1ZSB0eXBlIGlzIE9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLndhbGsgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRoaXMuY29udmVydChrZXlzW2ldLCBvYmpba2V5c1tpXV0pO1xuICB9XG59O1xuXG4vKipcbiAqIE9ic2VydmUgYSBsaXN0IG9mIEFycmF5IGl0ZW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gKi9cblxuT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmVBcnJheSA9IGZ1bmN0aW9uIChpdGVtcykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGl0ZW1zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG9ic2VydmUoaXRlbXNbaV0pO1xuICB9XG59O1xuXG4vKipcbiAqIENvbnZlcnQgYSBwcm9wZXJ0eSBpbnRvIGdldHRlci9zZXR0ZXIgc28gd2UgY2FuIGVtaXRcbiAqIHRoZSBldmVudHMgd2hlbiB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQvY2hhbmdlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbk9ic2VydmVyLnByb3RvdHlwZS5jb252ZXJ0ID0gZnVuY3Rpb24gKGtleSwgdmFsKSB7XG4gIGRlZmluZVJlYWN0aXZlKHRoaXMudmFsdWUsIGtleSwgdmFsKTtcbn07XG5cbi8qKlxuICogQWRkIGFuIG93bmVyIHZtLCBzbyB0aGF0IHdoZW4gJHNldC8kZGVsZXRlIG11dGF0aW9uc1xuICogaGFwcGVuIHdlIGNhbiBub3RpZnkgb3duZXIgdm1zIHRvIHByb3h5IHRoZSBrZXlzIGFuZFxuICogZGlnZXN0IHRoZSB3YXRjaGVycy4gVGhpcyBpcyBvbmx5IGNhbGxlZCB3aGVuIHRoZSBvYmplY3RcbiAqIGlzIG9ic2VydmVkIGFzIGFuIGluc3RhbmNlJ3Mgcm9vdCAkZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUuYWRkVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgKHRoaXMudm1zIHx8ICh0aGlzLnZtcyA9IFtdKSkucHVzaCh2bSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBvd25lciB2bS4gVGhpcyBpcyBjYWxsZWQgd2hlbiB0aGUgb2JqZWN0IGlzXG4gKiBzd2FwcGVkIG91dCBhcyBhbiBpbnN0YW5jZSdzICRkYXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5PYnNlcnZlci5wcm90b3R5cGUucmVtb3ZlVm0gPSBmdW5jdGlvbiAodm0pIHtcbiAgdGhpcy52bXMuJHJlbW92ZSh2bSk7XG59O1xuXG4vLyBoZWxwZXJzXG5cbi8qKlxuICogQXVnbWVudCBhbiB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGludGVyY2VwdGluZ1xuICogdGhlIHByb3RvdHlwZSBjaGFpbiB1c2luZyBfX3Byb3RvX19cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gdGFyZ2V0XG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqL1xuXG5mdW5jdGlvbiBwcm90b0F1Z21lbnQodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYW4gdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBkZWZpbmluZ1xuICogaGlkZGVuIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IHRhcmdldFxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvXG4gKi9cblxuZnVuY3Rpb24gY29weUF1Z21lbnQodGFyZ2V0LCBzcmMsIGtleXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBrZXlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGRlZih0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9XG59XG5cbi8qKlxuICogQXR0ZW1wdCB0byBjcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgZm9yIGEgdmFsdWUsXG4gKiByZXR1cm5zIHRoZSBuZXcgb2JzZXJ2ZXIgaWYgc3VjY2Vzc2Z1bGx5IG9ic2VydmVkLFxuICogb3IgdGhlIGV4aXN0aW5nIG9ic2VydmVyIGlmIHRoZSB2YWx1ZSBhbHJlYWR5IGhhcyBvbmUuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtWdWV9IFt2bV1cbiAqIEByZXR1cm4ge09ic2VydmVyfHVuZGVmaW5lZH1cbiAqIEBzdGF0aWNcbiAqL1xuXG5mdW5jdGlvbiBvYnNlcnZlKHZhbHVlLCB2bSkge1xuICBpZiAoIXZhbHVlIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG9iO1xuICBpZiAoaGFzT3duKHZhbHVlLCAnX19vYl9fJykgJiYgdmFsdWUuX19vYl9fIGluc3RhbmNlb2YgT2JzZXJ2ZXIpIHtcbiAgICBvYiA9IHZhbHVlLl9fb2JfXztcbiAgfSBlbHNlIGlmICgoaXNBcnJheSh2YWx1ZSkgfHwgaXNQbGFpbk9iamVjdCh2YWx1ZSkpICYmIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmICF2YWx1ZS5faXNWdWUpIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKG9iICYmIHZtKSB7XG4gICAgb2IuYWRkVm0odm0pO1xuICB9XG4gIHJldHVybiBvYjtcbn1cblxuLyoqXG4gKiBEZWZpbmUgYSByZWFjdGl2ZSBwcm9wZXJ0eSBvbiBhbiBPYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHBhcmFtIHsqfSB2YWxcbiAqL1xuXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZShvYmosIGtleSwgdmFsKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gY2F0ZXIgZm9yIHByZS1kZWZpbmVkIGdldHRlci9zZXR0ZXJzXG4gIHZhciBnZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5nZXQ7XG4gIHZhciBzZXR0ZXIgPSBwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5zZXQ7XG5cbiAgdmFyIGNoaWxkT2IgPSBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKERlcC50YXJnZXQpIHtcbiAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgIGZvciAodmFyIGUsIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlID0gdmFsdWVbaV07XG4gICAgICAgICAgICBlICYmIGUuX19vYl9fICYmIGUuX19vYl9fLmRlcC5kZXBlbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gcmVhY3RpdmVTZXR0ZXIobmV3VmFsKSB7XG4gICAgICB2YXIgdmFsdWUgPSBnZXR0ZXIgPyBnZXR0ZXIuY2FsbChvYmopIDogdmFsO1xuICAgICAgaWYgKG5ld1ZhbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHNldHRlcikge1xuICAgICAgICBzZXR0ZXIuY2FsbChvYmosIG5ld1ZhbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBuZXdWYWw7XG4gICAgICB9XG4gICAgICBjaGlsZE9iID0gb2JzZXJ2ZShuZXdWYWwpO1xuICAgICAgZGVwLm5vdGlmeSgpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuXG52YXIgdXRpbCA9IE9iamVjdC5mcmVlemUoe1xuXHRkZWZpbmVSZWFjdGl2ZTogZGVmaW5lUmVhY3RpdmUsXG5cdHNldDogc2V0LFxuXHRkZWw6IGRlbCxcblx0aGFzT3duOiBoYXNPd24sXG5cdGlzTGl0ZXJhbDogaXNMaXRlcmFsLFxuXHRpc1Jlc2VydmVkOiBpc1Jlc2VydmVkLFxuXHRfdG9TdHJpbmc6IF90b1N0cmluZyxcblx0dG9OdW1iZXI6IHRvTnVtYmVyLFxuXHR0b0Jvb2xlYW46IHRvQm9vbGVhbixcblx0c3RyaXBRdW90ZXM6IHN0cmlwUXVvdGVzLFxuXHRjYW1lbGl6ZTogY2FtZWxpemUsXG5cdGh5cGhlbmF0ZTogaHlwaGVuYXRlLFxuXHRjbGFzc2lmeTogY2xhc3NpZnksXG5cdGJpbmQ6IGJpbmQsXG5cdHRvQXJyYXk6IHRvQXJyYXksXG5cdGV4dGVuZDogZXh0ZW5kLFxuXHRpc09iamVjdDogaXNPYmplY3QsXG5cdGlzUGxhaW5PYmplY3Q6IGlzUGxhaW5PYmplY3QsXG5cdGRlZjogZGVmLFxuXHRkZWJvdW5jZTogX2RlYm91bmNlLFxuXHRpbmRleE9mOiBpbmRleE9mLFxuXHRjYW5jZWxsYWJsZTogY2FuY2VsbGFibGUsXG5cdGxvb3NlRXF1YWw6IGxvb3NlRXF1YWwsXG5cdGlzQXJyYXk6IGlzQXJyYXksXG5cdGhhc1Byb3RvOiBoYXNQcm90byxcblx0aW5Ccm93c2VyOiBpbkJyb3dzZXIsXG5cdGRldnRvb2xzOiBkZXZ0b29scyxcblx0aXNJRTk6IGlzSUU5LFxuXHRpc0FuZHJvaWQ6IGlzQW5kcm9pZCxcblx0Z2V0IHRyYW5zaXRpb25Qcm9wICgpIHsgcmV0dXJuIHRyYW5zaXRpb25Qcm9wOyB9LFxuXHRnZXQgdHJhbnNpdGlvbkVuZEV2ZW50ICgpIHsgcmV0dXJuIHRyYW5zaXRpb25FbmRFdmVudDsgfSxcblx0Z2V0IGFuaW1hdGlvblByb3AgKCkgeyByZXR1cm4gYW5pbWF0aW9uUHJvcDsgfSxcblx0Z2V0IGFuaW1hdGlvbkVuZEV2ZW50ICgpIHsgcmV0dXJuIGFuaW1hdGlvbkVuZEV2ZW50OyB9LFxuXHRuZXh0VGljazogbmV4dFRpY2ssXG5cdHF1ZXJ5OiBxdWVyeSxcblx0aW5Eb2M6IGluRG9jLFxuXHRnZXRBdHRyOiBnZXRBdHRyLFxuXHRnZXRCaW5kQXR0cjogZ2V0QmluZEF0dHIsXG5cdGhhc0JpbmRBdHRyOiBoYXNCaW5kQXR0cixcblx0YmVmb3JlOiBiZWZvcmUsXG5cdGFmdGVyOiBhZnRlcixcblx0cmVtb3ZlOiByZW1vdmUsXG5cdHByZXBlbmQ6IHByZXBlbmQsXG5cdHJlcGxhY2U6IHJlcGxhY2UsXG5cdG9uOiBvbixcblx0b2ZmOiBvZmYsXG5cdHNldENsYXNzOiBzZXRDbGFzcyxcblx0YWRkQ2xhc3M6IGFkZENsYXNzLFxuXHRyZW1vdmVDbGFzczogcmVtb3ZlQ2xhc3MsXG5cdGV4dHJhY3RDb250ZW50OiBleHRyYWN0Q29udGVudCxcblx0dHJpbU5vZGU6IHRyaW1Ob2RlLFxuXHRpc1RlbXBsYXRlOiBpc1RlbXBsYXRlLFxuXHRjcmVhdGVBbmNob3I6IGNyZWF0ZUFuY2hvcixcblx0ZmluZFJlZjogZmluZFJlZixcblx0bWFwTm9kZVJhbmdlOiBtYXBOb2RlUmFuZ2UsXG5cdHJlbW92ZU5vZGVSYW5nZTogcmVtb3ZlTm9kZVJhbmdlLFxuXHRpc0ZyYWdtZW50OiBpc0ZyYWdtZW50LFxuXHRnZXRPdXRlckhUTUw6IGdldE91dGVySFRNTCxcblx0bWVyZ2VPcHRpb25zOiBtZXJnZU9wdGlvbnMsXG5cdHJlc29sdmVBc3NldDogcmVzb2x2ZUFzc2V0LFxuXHRhc3NlcnRBc3NldDogYXNzZXJ0QXNzZXQsXG5cdGNoZWNrQ29tcG9uZW50QXR0cjogY2hlY2tDb21wb25lbnRBdHRyLFxuXHRpbml0UHJvcDogaW5pdFByb3AsXG5cdGFzc2VydFByb3A6IGFzc2VydFByb3AsXG5cdGNvZXJjZVByb3A6IGNvZXJjZVByb3AsXG5cdGNvbW1vblRhZ1JFOiBjb21tb25UYWdSRSxcblx0cmVzZXJ2ZWRUYWdSRTogcmVzZXJ2ZWRUYWdSRSxcblx0Z2V0IHdhcm4gKCkgeyByZXR1cm4gd2FybjsgfVxufSk7XG5cbnZhciB1aWQgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWl4aW4gKFZ1ZSkge1xuICAvKipcbiAgICogVGhlIG1haW4gaW5pdCBzZXF1ZW5jZS4gVGhpcyBpcyBjYWxsZWQgZm9yIGV2ZXJ5XG4gICAqIGluc3RhbmNlLCBpbmNsdWRpbmcgb25lcyB0aGF0IGFyZSBjcmVhdGVkIGZyb20gZXh0ZW5kZWRcbiAgICogY29uc3RydWN0b3JzLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoaXMgb3B0aW9ucyBvYmplY3Qgc2hvdWxkIGJlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIHJlc3VsdCBvZiBtZXJnaW5nIGNsYXNzXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gdG8gdGhlIGNvbnN0cnVjdG9yLlxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHRoaXMuJGVsID0gbnVsbDtcbiAgICB0aGlzLiRwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgICB0aGlzLiRyb290ID0gdGhpcy4kcGFyZW50ID8gdGhpcy4kcGFyZW50LiRyb290IDogdGhpcztcbiAgICB0aGlzLiRjaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuJHJlZnMgPSB7fTsgLy8gY2hpbGQgdm0gcmVmZXJlbmNlc1xuICAgIHRoaXMuJGVscyA9IHt9OyAvLyBlbGVtZW50IHJlZmVyZW5jZXNcbiAgICB0aGlzLl93YXRjaGVycyA9IFtdOyAvLyBhbGwgd2F0Y2hlcnMgYXMgYW4gYXJyYXlcbiAgICB0aGlzLl9kaXJlY3RpdmVzID0gW107IC8vIGFsbCBkaXJlY3RpdmVzXG5cbiAgICAvLyBhIHVpZFxuICAgIHRoaXMuX3VpZCA9IHVpZCsrO1xuXG4gICAgLy8gYSBmbGFnIHRvIGF2b2lkIHRoaXMgYmVpbmcgb2JzZXJ2ZWRcbiAgICB0aGlzLl9pc1Z1ZSA9IHRydWU7XG5cbiAgICAvLyBldmVudHMgYm9va2tlZXBpbmdcbiAgICB0aGlzLl9ldmVudHMgPSB7fTsgLy8gcmVnaXN0ZXJlZCBjYWxsYmFja3NcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IHt9OyAvLyBmb3IgJGJyb2FkY2FzdCBvcHRpbWl6YXRpb25cblxuICAgIC8vIGZyYWdtZW50IGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICB0aGlzLl9pc0ZyYWdtZW50ID0gZmFsc2U7XG4gICAgdGhpcy5fZnJhZ21lbnQgPSAvLyBAdHlwZSB7RG9jdW1lbnRGcmFnbWVudH1cbiAgICB0aGlzLl9mcmFnbWVudFN0YXJ0ID0gLy8gQHR5cGUge1RleHR8Q29tbWVudH1cbiAgICB0aGlzLl9mcmFnbWVudEVuZCA9IG51bGw7IC8vIEB0eXBlIHtUZXh0fENvbW1lbnR9XG5cbiAgICAvLyBsaWZlY3ljbGUgc3RhdGVcbiAgICB0aGlzLl9pc0NvbXBpbGVkID0gdGhpcy5faXNEZXN0cm95ZWQgPSB0aGlzLl9pc1JlYWR5ID0gdGhpcy5faXNBdHRhY2hlZCA9IHRoaXMuX2lzQmVpbmdEZXN0cm95ZWQgPSB0aGlzLl92Rm9yUmVtb3ZpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl91bmxpbmtGbiA9IG51bGw7XG5cbiAgICAvLyBjb250ZXh0OlxuICAgIC8vIGlmIHRoaXMgaXMgYSB0cmFuc2NsdWRlZCBjb21wb25lbnQsIGNvbnRleHRcbiAgICAvLyB3aWxsIGJlIHRoZSBjb21tb24gcGFyZW50IHZtIG9mIHRoaXMgaW5zdGFuY2VcbiAgICAvLyBhbmQgaXRzIGhvc3QuXG4gICAgdGhpcy5fY29udGV4dCA9IG9wdGlvbnMuX2NvbnRleHQgfHwgdGhpcy4kcGFyZW50O1xuXG4gICAgLy8gc2NvcGU6XG4gICAgLy8gaWYgdGhpcyBpcyBpbnNpZGUgYW4gaW5saW5lIHYtZm9yLCB0aGUgc2NvcGVcbiAgICAvLyB3aWxsIGJlIHRoZSBpbnRlcm1lZGlhdGUgc2NvcGUgY3JlYXRlZCBmb3IgdGhpc1xuICAgIC8vIHJlcGVhdCBmcmFnbWVudC4gdGhpcyBpcyB1c2VkIGZvciBsaW5raW5nIHByb3BzXG4gICAgLy8gYW5kIGNvbnRhaW5lciBkaXJlY3RpdmVzLlxuICAgIHRoaXMuX3Njb3BlID0gb3B0aW9ucy5fc2NvcGU7XG5cbiAgICAvLyBmcmFnbWVudDpcbiAgICAvLyBpZiB0aGlzIGluc3RhbmNlIGlzIGNvbXBpbGVkIGluc2lkZSBhIEZyYWdtZW50LCBpdFxuICAgIC8vIG5lZWRzIHRvIHJlaWdzdGVyIGl0c2VsZiBhcyBhIGNoaWxkIG9mIHRoYXQgZnJhZ21lbnRcbiAgICAvLyBmb3IgYXR0YWNoL2RldGFjaCB0byB3b3JrIHByb3Blcmx5LlxuICAgIHRoaXMuX2ZyYWcgPSBvcHRpb25zLl9mcmFnO1xuICAgIGlmICh0aGlzLl9mcmFnKSB7XG4gICAgICB0aGlzLl9mcmFnLmNoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgLy8gcHVzaCBzZWxmIGludG8gcGFyZW50IC8gdHJhbnNjbHVzaW9uIGhvc3RcbiAgICBpZiAodGhpcy4kcGFyZW50KSB7XG4gICAgICB0aGlzLiRwYXJlbnQuJGNoaWxkcmVuLnB1c2godGhpcyk7XG4gICAgfVxuXG4gICAgLy8gc2F2ZSByYXcgY29uc3RydWN0b3IgZGF0YSBiZWZvcmUgbWVyZ2VcbiAgICAvLyBzbyB0aGF0IHdlIGtub3cgd2hpY2ggcHJvcGVydGllcyBhcmUgcHJvdmlkZWQgYXRcbiAgICAvLyBpbnN0YW50aWF0aW9uLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aGlzLl9ydW50aW1lRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICB9XG5cbiAgICAvLyBtZXJnZSBvcHRpb25zLlxuICAgIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zID0gbWVyZ2VPcHRpb25zKHRoaXMuY29uc3RydWN0b3Iub3B0aW9ucywgb3B0aW9ucywgdGhpcyk7XG5cbiAgICAvLyBzZXQgcmVmXG4gICAgdGhpcy5fdXBkYXRlUmVmKCk7XG5cbiAgICAvLyBpbml0aWFsaXplIGRhdGEgYXMgZW1wdHkgb2JqZWN0LlxuICAgIC8vIGl0IHdpbGwgYmUgZmlsbGVkIHVwIGluIF9pbml0U2NvcGUoKS5cbiAgICB0aGlzLl9kYXRhID0ge307XG5cbiAgICAvLyBjYWxsIGluaXQgaG9va1xuICAgIHRoaXMuX2NhbGxIb29rKCdpbml0Jyk7XG5cbiAgICAvLyBpbml0aWFsaXplIGRhdGEgb2JzZXJ2YXRpb24gYW5kIHNjb3BlIGluaGVyaXRhbmNlLlxuICAgIHRoaXMuX2luaXRTdGF0ZSgpO1xuXG4gICAgLy8gc2V0dXAgZXZlbnQgc3lzdGVtIGFuZCBvcHRpb24gZXZlbnRzLlxuICAgIHRoaXMuX2luaXRFdmVudHMoKTtcblxuICAgIC8vIGNhbGwgY3JlYXRlZCBob29rXG4gICAgdGhpcy5fY2FsbEhvb2soJ2NyZWF0ZWQnKTtcblxuICAgIC8vIGlmIGBlbGAgb3B0aW9uIGlzIHBhc3NlZCwgc3RhcnQgY29tcGlsYXRpb24uXG4gICAgaWYgKG9wdGlvbnMuZWwpIHtcbiAgICAgIHRoaXMuJG1vdW50KG9wdGlvbnMuZWwpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHBhdGhDYWNoZSA9IG5ldyBDYWNoZSgxMDAwKTtcblxuLy8gYWN0aW9uc1xudmFyIEFQUEVORCA9IDA7XG52YXIgUFVTSCA9IDE7XG52YXIgSU5DX1NVQl9QQVRIX0RFUFRIID0gMjtcbnZhciBQVVNIX1NVQl9QQVRIID0gMztcblxuLy8gc3RhdGVzXG52YXIgQkVGT1JFX1BBVEggPSAwO1xudmFyIElOX1BBVEggPSAxO1xudmFyIEJFRk9SRV9JREVOVCA9IDI7XG52YXIgSU5fSURFTlQgPSAzO1xudmFyIElOX1NVQl9QQVRIID0gNDtcbnZhciBJTl9TSU5HTEVfUVVPVEUgPSA1O1xudmFyIElOX0RPVUJMRV9RVU9URSA9IDY7XG52YXIgQUZURVJfUEFUSCA9IDc7XG52YXIgRVJST1IgPSA4O1xuXG52YXIgcGF0aFN0YXRlTWFjaGluZSA9IFtdO1xuXG5wYXRoU3RhdGVNYWNoaW5lW0JFRk9SRV9QQVRIXSA9IHtcbiAgJ3dzJzogW0JFRk9SRV9QQVRIXSxcbiAgJ2lkZW50JzogW0lOX0lERU5ULCBBUFBFTkRdLFxuICAnWyc6IFtJTl9TVUJfUEFUSF0sXG4gICdlb2YnOiBbQUZURVJfUEFUSF1cbn07XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fUEFUSF0gPSB7XG4gICd3cyc6IFtJTl9QQVRIXSxcbiAgJy4nOiBbQkVGT1JFX0lERU5UXSxcbiAgJ1snOiBbSU5fU1VCX1BBVEhdLFxuICAnZW9mJzogW0FGVEVSX1BBVEhdXG59O1xuXG5wYXRoU3RhdGVNYWNoaW5lW0JFRk9SRV9JREVOVF0gPSB7XG4gICd3cyc6IFtCRUZPUkVfSURFTlRdLFxuICAnaWRlbnQnOiBbSU5fSURFTlQsIEFQUEVORF1cbn07XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fSURFTlRdID0ge1xuICAnaWRlbnQnOiBbSU5fSURFTlQsIEFQUEVORF0sXG4gICcwJzogW0lOX0lERU5ULCBBUFBFTkRdLFxuICAnbnVtYmVyJzogW0lOX0lERU5ULCBBUFBFTkRdLFxuICAnd3MnOiBbSU5fUEFUSCwgUFVTSF0sXG4gICcuJzogW0JFRk9SRV9JREVOVCwgUFVTSF0sXG4gICdbJzogW0lOX1NVQl9QQVRILCBQVVNIXSxcbiAgJ2VvZic6IFtBRlRFUl9QQVRILCBQVVNIXVxufTtcblxucGF0aFN0YXRlTWFjaGluZVtJTl9TVUJfUEFUSF0gPSB7XG4gIFwiJ1wiOiBbSU5fU0lOR0xFX1FVT1RFLCBBUFBFTkRdLFxuICAnXCInOiBbSU5fRE9VQkxFX1FVT1RFLCBBUFBFTkRdLFxuICAnWyc6IFtJTl9TVUJfUEFUSCwgSU5DX1NVQl9QQVRIX0RFUFRIXSxcbiAgJ10nOiBbSU5fUEFUSCwgUFVTSF9TVUJfUEFUSF0sXG4gICdlb2YnOiBFUlJPUixcbiAgJ2Vsc2UnOiBbSU5fU1VCX1BBVEgsIEFQUEVORF1cbn07XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fU0lOR0xFX1FVT1RFXSA9IHtcbiAgXCInXCI6IFtJTl9TVUJfUEFUSCwgQVBQRU5EXSxcbiAgJ2VvZic6IEVSUk9SLFxuICAnZWxzZSc6IFtJTl9TSU5HTEVfUVVPVEUsIEFQUEVORF1cbn07XG5cbnBhdGhTdGF0ZU1hY2hpbmVbSU5fRE9VQkxFX1FVT1RFXSA9IHtcbiAgJ1wiJzogW0lOX1NVQl9QQVRILCBBUFBFTkRdLFxuICAnZW9mJzogRVJST1IsXG4gICdlbHNlJzogW0lOX0RPVUJMRV9RVU9URSwgQVBQRU5EXVxufTtcblxuLyoqXG4gKiBEZXRlcm1pbmUgdGhlIHR5cGUgb2YgYSBjaGFyYWN0ZXIgaW4gYSBrZXlwYXRoLlxuICpcbiAqIEBwYXJhbSB7Q2hhcn0gY2hcbiAqIEByZXR1cm4ge1N0cmluZ30gdHlwZVxuICovXG5cbmZ1bmN0aW9uIGdldFBhdGhDaGFyVHlwZShjaCkge1xuICBpZiAoY2ggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnZW9mJztcbiAgfVxuXG4gIHZhciBjb2RlID0gY2guY2hhckNvZGVBdCgwKTtcblxuICBzd2l0Y2ggKGNvZGUpIHtcbiAgICBjYXNlIDB4NUI6IC8vIFtcbiAgICBjYXNlIDB4NUQ6IC8vIF1cbiAgICBjYXNlIDB4MkU6IC8vIC5cbiAgICBjYXNlIDB4MjI6IC8vIFwiXG4gICAgY2FzZSAweDI3OiAvLyAnXG4gICAgY2FzZSAweDMwOlxuICAgICAgLy8gMFxuICAgICAgcmV0dXJuIGNoO1xuXG4gICAgY2FzZSAweDVGOiAvLyBfXG4gICAgY2FzZSAweDI0OlxuICAgICAgLy8gJFxuICAgICAgcmV0dXJuICdpZGVudCc7XG5cbiAgICBjYXNlIDB4MjA6IC8vIFNwYWNlXG4gICAgY2FzZSAweDA5OiAvLyBUYWJcbiAgICBjYXNlIDB4MEE6IC8vIE5ld2xpbmVcbiAgICBjYXNlIDB4MEQ6IC8vIFJldHVyblxuICAgIGNhc2UgMHhBMDogLy8gTm8tYnJlYWsgc3BhY2VcbiAgICBjYXNlIDB4RkVGRjogLy8gQnl0ZSBPcmRlciBNYXJrXG4gICAgY2FzZSAweDIwMjg6IC8vIExpbmUgU2VwYXJhdG9yXG4gICAgY2FzZSAweDIwMjk6XG4gICAgICAvLyBQYXJhZ3JhcGggU2VwYXJhdG9yXG4gICAgICByZXR1cm4gJ3dzJztcbiAgfVxuXG4gIC8vIGEteiwgQS1aXG4gIGlmIChjb2RlID49IDB4NjEgJiYgY29kZSA8PSAweDdBIHx8IGNvZGUgPj0gMHg0MSAmJiBjb2RlIDw9IDB4NUEpIHtcbiAgICByZXR1cm4gJ2lkZW50JztcbiAgfVxuXG4gIC8vIDEtOVxuICBpZiAoY29kZSA+PSAweDMxICYmIGNvZGUgPD0gMHgzOSkge1xuICAgIHJldHVybiAnbnVtYmVyJztcbiAgfVxuXG4gIHJldHVybiAnZWxzZSc7XG59XG5cbi8qKlxuICogRm9ybWF0IGEgc3ViUGF0aCwgcmV0dXJuIGl0cyBwbGFpbiBmb3JtIGlmIGl0IGlzXG4gKiBhIGxpdGVyYWwgc3RyaW5nIG9yIG51bWJlci4gT3RoZXJ3aXNlIHByZXBlbmQgdGhlXG4gKiBkeW5hbWljIGluZGljYXRvciAoKikuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHBhdGhcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRTdWJQYXRoKHBhdGgpIHtcbiAgdmFyIHRyaW1tZWQgPSBwYXRoLnRyaW0oKTtcbiAgLy8gaW52YWxpZCBsZWFkaW5nIDBcbiAgaWYgKHBhdGguY2hhckF0KDApID09PSAnMCcgJiYgaXNOYU4ocGF0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGlzTGl0ZXJhbCh0cmltbWVkKSA/IHN0cmlwUXVvdGVzKHRyaW1tZWQpIDogJyonICsgdHJpbW1lZDtcbn1cblxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBwYXRoIGludG8gYW4gYXJyYXkgb2Ygc2VnbWVudHNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7QXJyYXl8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHBhdGgpIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBtb2RlID0gQkVGT1JFX1BBVEg7XG4gIHZhciBzdWJQYXRoRGVwdGggPSAwO1xuICB2YXIgYywgbmV3Q2hhciwga2V5LCB0eXBlLCB0cmFuc2l0aW9uLCBhY3Rpb24sIHR5cGVNYXA7XG5cbiAgdmFyIGFjdGlvbnMgPSBbXTtcblxuICBhY3Rpb25zW1BVU0hdID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICBrZXkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xuXG4gIGFjdGlvbnNbQVBQRU5EXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9IG5ld0NoYXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSArPSBuZXdDaGFyO1xuICAgIH1cbiAgfTtcblxuICBhY3Rpb25zW0lOQ19TVUJfUEFUSF9ERVBUSF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgYWN0aW9uc1tBUFBFTkRdKCk7XG4gICAgc3ViUGF0aERlcHRoKys7XG4gIH07XG5cbiAgYWN0aW9uc1tQVVNIX1NVQl9QQVRIXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc3ViUGF0aERlcHRoID4gMCkge1xuICAgICAgc3ViUGF0aERlcHRoLS07XG4gICAgICBtb2RlID0gSU5fU1VCX1BBVEg7XG4gICAgICBhY3Rpb25zW0FQUEVORF0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViUGF0aERlcHRoID0gMDtcbiAgICAgIGtleSA9IGZvcm1hdFN1YlBhdGgoa2V5KTtcbiAgICAgIGlmIChrZXkgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbnNbUFVTSF0oKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbWF5YmVVbmVzY2FwZVF1b3RlKCkge1xuICAgIHZhciBuZXh0Q2hhciA9IHBhdGhbaW5kZXggKyAxXTtcbiAgICBpZiAobW9kZSA9PT0gSU5fU0lOR0xFX1FVT1RFICYmIG5leHRDaGFyID09PSBcIidcIiB8fCBtb2RlID09PSBJTl9ET1VCTEVfUVVPVEUgJiYgbmV4dENoYXIgPT09ICdcIicpIHtcbiAgICAgIGluZGV4Kys7XG4gICAgICBuZXdDaGFyID0gJ1xcXFwnICsgbmV4dENoYXI7XG4gICAgICBhY3Rpb25zW0FQUEVORF0oKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChtb2RlICE9IG51bGwpIHtcbiAgICBpbmRleCsrO1xuICAgIGMgPSBwYXRoW2luZGV4XTtcblxuICAgIGlmIChjID09PSAnXFxcXCcgJiYgbWF5YmVVbmVzY2FwZVF1b3RlKCkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHR5cGUgPSBnZXRQYXRoQ2hhclR5cGUoYyk7XG4gICAgdHlwZU1hcCA9IHBhdGhTdGF0ZU1hY2hpbmVbbW9kZV07XG4gICAgdHJhbnNpdGlvbiA9IHR5cGVNYXBbdHlwZV0gfHwgdHlwZU1hcFsnZWxzZSddIHx8IEVSUk9SO1xuXG4gICAgaWYgKHRyYW5zaXRpb24gPT09IEVSUk9SKSB7XG4gICAgICByZXR1cm47IC8vIHBhcnNlIGVycm9yXG4gICAgfVxuXG4gICAgbW9kZSA9IHRyYW5zaXRpb25bMF07XG4gICAgYWN0aW9uID0gYWN0aW9uc1t0cmFuc2l0aW9uWzFdXTtcbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBuZXdDaGFyID0gdHJhbnNpdGlvblsyXTtcbiAgICAgIG5ld0NoYXIgPSBuZXdDaGFyID09PSB1bmRlZmluZWQgPyBjIDogbmV3Q2hhcjtcbiAgICAgIGlmIChhY3Rpb24oKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSBBRlRFUl9QQVRIKSB7XG4gICAgICBrZXlzLnJhdyA9IHBhdGg7XG4gICAgICByZXR1cm4ga2V5cztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFeHRlcm5hbCBwYXJzZSB0aGF0IGNoZWNrIGZvciBhIGNhY2hlIGhpdCBmaXJzdFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJuIHtBcnJheXx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIGhpdCA9IHBhdGhDYWNoZS5nZXQocGF0aCk7XG4gIGlmICghaGl0KSB7XG4gICAgaGl0ID0gcGFyc2UocGF0aCk7XG4gICAgaWYgKGhpdCkge1xuICAgICAgcGF0aENhY2hlLnB1dChwYXRoLCBoaXQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaGl0O1xufVxuXG4vKipcbiAqIEdldCBmcm9tIGFuIG9iamVjdCBmcm9tIGEgcGF0aCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICovXG5cbmZ1bmN0aW9uIGdldFBhdGgob2JqLCBwYXRoKSB7XG4gIHJldHVybiBwYXJzZUV4cHJlc3Npb24ocGF0aCkuZ2V0KG9iaik7XG59XG5cbi8qKlxuICogV2FybiBhZ2FpbnN0IHNldHRpbmcgbm9uLWV4aXN0ZW50IHJvb3QgcGF0aCBvbiBhIHZtLlxuICovXG5cbnZhciB3YXJuTm9uRXhpc3RlbnQ7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuTm9uRXhpc3RlbnQgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIHdhcm4oJ1lvdSBhcmUgc2V0dGluZyBhIG5vbi1leGlzdGVudCBwYXRoIFwiJyArIHBhdGgucmF3ICsgJ1wiICcgKyAnb24gYSB2bSBpbnN0YW5jZS4gQ29uc2lkZXIgcHJlLWluaXRpYWxpemluZyB0aGUgcHJvcGVydHkgJyArICd3aXRoIHRoZSBcImRhdGFcIiBvcHRpb24gZm9yIG1vcmUgcmVsaWFibGUgcmVhY3Rpdml0eSAnICsgJ2FuZCBiZXR0ZXIgcGVyZm9ybWFuY2UuJyk7XG4gIH07XG59XG5cbi8qKlxuICogU2V0IG9uIGFuIG9iamVjdCBmcm9tIGEgcGF0aFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7U3RyaW5nIHwgQXJyYXl9IHBhdGhcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKi9cblxuZnVuY3Rpb24gc2V0UGF0aChvYmosIHBhdGgsIHZhbCkge1xuICB2YXIgb3JpZ2luYWwgPSBvYmo7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHtcbiAgICBwYXRoID0gcGFyc2UocGF0aCk7XG4gIH1cbiAgaWYgKCFwYXRoIHx8ICFpc09iamVjdChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0LCBrZXk7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsYXN0ID0gb2JqO1xuICAgIGtleSA9IHBhdGhbaV07XG4gICAgaWYgKGtleS5jaGFyQXQoMCkgPT09ICcqJykge1xuICAgICAga2V5ID0gcGFyc2VFeHByZXNzaW9uKGtleS5zbGljZSgxKSkuZ2V0LmNhbGwob3JpZ2luYWwsIG9yaWdpbmFsKTtcbiAgICB9XG4gICAgaWYgKGkgPCBsIC0gMSkge1xuICAgICAgb2JqID0gb2JqW2tleV07XG4gICAgICBpZiAoIWlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgb2JqID0ge307XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGxhc3QuX2lzVnVlKSB7XG4gICAgICAgICAgd2Fybk5vbkV4aXN0ZW50KHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIHNldChsYXN0LCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgb2JqLiRzZXQoa2V5LCB2YWwpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgb2JqLl9pc1Z1ZSkge1xuICAgICAgICAgIHdhcm5Ob25FeGlzdGVudChwYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBzZXQob2JqLCBrZXksIHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgcGF0aCA9IE9iamVjdC5mcmVlemUoe1xuICBwYXJzZVBhdGg6IHBhcnNlUGF0aCxcbiAgZ2V0UGF0aDogZ2V0UGF0aCxcbiAgc2V0UGF0aDogc2V0UGF0aFxufSk7XG5cbnZhciBleHByZXNzaW9uQ2FjaGUgPSBuZXcgQ2FjaGUoMTAwMCk7XG5cbnZhciBhbGxvd2VkS2V5d29yZHMgPSAnTWF0aCxEYXRlLHRoaXMsdHJ1ZSxmYWxzZSxudWxsLHVuZGVmaW5lZCxJbmZpbml0eSxOYU4sJyArICdpc05hTixpc0Zpbml0ZSxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSwnICsgJ2VuY29kZVVSSUNvbXBvbmVudCxwYXJzZUludCxwYXJzZUZsb2F0JztcbnZhciBhbGxvd2VkS2V5d29yZHNSRSA9IG5ldyBSZWdFeHAoJ14oJyArIGFsbG93ZWRLZXl3b3Jkcy5yZXBsYWNlKC8sL2csICdcXFxcYnwnKSArICdcXFxcYiknKTtcblxuLy8ga2V5d29yZHMgdGhhdCBkb24ndCBtYWtlIHNlbnNlIGluc2lkZSBleHByZXNzaW9uc1xudmFyIGltcHJvcGVyS2V5d29yZHMgPSAnYnJlYWssY2FzZSxjbGFzcyxjYXRjaCxjb25zdCxjb250aW51ZSxkZWJ1Z2dlcixkZWZhdWx0LCcgKyAnZGVsZXRlLGRvLGVsc2UsZXhwb3J0LGV4dGVuZHMsZmluYWxseSxmb3IsZnVuY3Rpb24saWYsJyArICdpbXBvcnQsaW4saW5zdGFuY2VvZixsZXQscmV0dXJuLHN1cGVyLHN3aXRjaCx0aHJvdyx0cnksJyArICd2YXIsd2hpbGUsd2l0aCx5aWVsZCxlbnVtLGF3YWl0LGltcGxlbWVudHMscGFja2FnZSwnICsgJ3Byb2N0ZWN0ZWQsc3RhdGljLGludGVyZmFjZSxwcml2YXRlLHB1YmxpYyc7XG52YXIgaW1wcm9wZXJLZXl3b3Jkc1JFID0gbmV3IFJlZ0V4cCgnXignICsgaW1wcm9wZXJLZXl3b3Jkcy5yZXBsYWNlKC8sL2csICdcXFxcYnwnKSArICdcXFxcYiknKTtcblxudmFyIHdzUkUgPSAvXFxzL2c7XG52YXIgbmV3bGluZVJFID0gL1xcbi9nO1xudmFyIHNhdmVSRSA9IC9bXFx7LF1cXHMqW1xcd1xcJF9dK1xccyo6fCgnKD86W14nXFxcXF18XFxcXC4pKid8XCIoPzpbXlwiXFxcXF18XFxcXC4pKlwifGAoPzpbXmBcXFxcXXxcXFxcLikqXFwkXFx7fFxcfSg/OlteYFxcXFxdfFxcXFwuKSpgfGAoPzpbXmBcXFxcXXxcXFxcLikqYCl8bmV3IHx0eXBlb2YgfHZvaWQgL2c7XG52YXIgcmVzdG9yZVJFID0gL1wiKFxcZCspXCIvZztcbnZhciBwYXRoVGVzdFJFID0gL15bQS1aYS16XyRdW1xcdyRdKig/OlxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXFxdfFxcW1wiLio/XCJcXF18XFxbXFxkK1xcXXxcXFtbQS1aYS16XyRdW1xcdyRdKlxcXSkqJC87XG52YXIgaWRlbnRSRSA9IC9bXlxcdyRcXC5dKD86W0EtWmEtel8kXVtcXHckXSopL2c7XG52YXIgYm9vbGVhbkxpdGVyYWxSRSA9IC9eKD86dHJ1ZXxmYWxzZSkkLztcblxuLyoqXG4gKiBTYXZlIC8gUmV3cml0ZSAvIFJlc3RvcmVcbiAqXG4gKiBXaGVuIHJld3JpdGluZyBwYXRocyBmb3VuZCBpbiBhbiBleHByZXNzaW9uLCBpdCBpc1xuICogcG9zc2libGUgZm9yIHRoZSBzYW1lIGxldHRlciBzZXF1ZW5jZXMgdG8gYmUgZm91bmQgaW5cbiAqIHN0cmluZ3MgYW5kIE9iamVjdCBsaXRlcmFsIHByb3BlcnR5IGtleXMuIFRoZXJlZm9yZSB3ZVxuICogcmVtb3ZlIGFuZCBzdG9yZSB0aGVzZSBwYXJ0cyBpbiBhIHRlbXBvcmFyeSBhcnJheSwgYW5kXG4gKiByZXN0b3JlIHRoZW0gYWZ0ZXIgdGhlIHBhdGggcmV3cml0ZS5cbiAqL1xuXG52YXIgc2F2ZWQgPSBbXTtcblxuLyoqXG4gKiBTYXZlIHJlcGxhY2VyXG4gKlxuICogVGhlIHNhdmUgcmVnZXggY2FuIG1hdGNoIHR3byBwb3NzaWJsZSBjYXNlczpcbiAqIDEuIEFuIG9wZW5pbmcgb2JqZWN0IGxpdGVyYWxcbiAqIDIuIEEgc3RyaW5nXG4gKiBJZiBtYXRjaGVkIGFzIGEgcGxhaW4gc3RyaW5nLCB3ZSBuZWVkIHRvIGVzY2FwZSBpdHNcbiAqIG5ld2xpbmVzLCBzaW5jZSB0aGUgc3RyaW5nIG5lZWRzIHRvIGJlIHByZXNlcnZlZCB3aGVuXG4gKiBnZW5lcmF0aW5nIHRoZSBmdW5jdGlvbiBib2R5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpc1N0cmluZyAtIHN0ciBpZiBtYXRjaGVkIGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IC0gcGxhY2Vob2xkZXIgd2l0aCBpbmRleFxuICovXG5cbmZ1bmN0aW9uIHNhdmUoc3RyLCBpc1N0cmluZykge1xuICB2YXIgaSA9IHNhdmVkLmxlbmd0aDtcbiAgc2F2ZWRbaV0gPSBpc1N0cmluZyA/IHN0ci5yZXBsYWNlKG5ld2xpbmVSRSwgJ1xcXFxuJykgOiBzdHI7XG4gIHJldHVybiAnXCInICsgaSArICdcIic7XG59XG5cbi8qKlxuICogUGF0aCByZXdyaXRlIHJlcGxhY2VyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJhd1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIHJld3JpdGUocmF3KSB7XG4gIHZhciBjID0gcmF3LmNoYXJBdCgwKTtcbiAgdmFyIHBhdGggPSByYXcuc2xpY2UoMSk7XG4gIGlmIChhbGxvd2VkS2V5d29yZHNSRS50ZXN0KHBhdGgpKSB7XG4gICAgcmV0dXJuIHJhdztcbiAgfSBlbHNlIHtcbiAgICBwYXRoID0gcGF0aC5pbmRleE9mKCdcIicpID4gLTEgPyBwYXRoLnJlcGxhY2UocmVzdG9yZVJFLCByZXN0b3JlKSA6IHBhdGg7XG4gICAgcmV0dXJuIGMgKyAnc2NvcGUuJyArIHBhdGg7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXN0b3JlIHJlcGxhY2VyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHBhcmFtIHtTdHJpbmd9IGkgLSBtYXRjaGVkIHNhdmUgaW5kZXhcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiByZXN0b3JlKHN0ciwgaSkge1xuICByZXR1cm4gc2F2ZWRbaV07XG59XG5cbi8qKlxuICogUmV3cml0ZSBhbiBleHByZXNzaW9uLCBwcmVmaXhpbmcgYWxsIHBhdGggYWNjZXNzb3JzIHdpdGhcbiAqIGBzY29wZS5gIGFuZCBnZW5lcmF0ZSBnZXR0ZXIvc2V0dGVyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlR2V0dGVyKGV4cCkge1xuICBpZiAoaW1wcm9wZXJLZXl3b3Jkc1JFLnRlc3QoZXhwKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignQXZvaWQgdXNpbmcgcmVzZXJ2ZWQga2V5d29yZHMgaW4gZXhwcmVzc2lvbjogJyArIGV4cCk7XG4gIH1cbiAgLy8gcmVzZXQgc3RhdGVcbiAgc2F2ZWQubGVuZ3RoID0gMDtcbiAgLy8gc2F2ZSBzdHJpbmdzIGFuZCBvYmplY3QgbGl0ZXJhbCBrZXlzXG4gIHZhciBib2R5ID0gZXhwLnJlcGxhY2Uoc2F2ZVJFLCBzYXZlKS5yZXBsYWNlKHdzUkUsICcnKTtcbiAgLy8gcmV3cml0ZSBhbGwgcGF0aHNcbiAgLy8gcGFkIDEgc3BhY2UgaGVyZSBiZWNhdWUgdGhlIHJlZ2V4IG1hdGNoZXMgMSBleHRyYSBjaGFyXG4gIGJvZHkgPSAoJyAnICsgYm9keSkucmVwbGFjZShpZGVudFJFLCByZXdyaXRlKS5yZXBsYWNlKHJlc3RvcmVSRSwgcmVzdG9yZSk7XG4gIHJldHVybiBtYWtlR2V0dGVyRm4oYm9keSk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBnZXR0ZXIgZnVuY3Rpb24uIFJlcXVpcmVzIGV2YWwuXG4gKlxuICogV2UgaXNvbGF0ZSB0aGUgdHJ5L2NhdGNoIHNvIGl0IGRvZXNuJ3QgYWZmZWN0IHRoZVxuICogb3B0aW1pemF0aW9uIG9mIHRoZSBwYXJzZSBmdW5jdGlvbiB3aGVuIGl0IGlzIG5vdCBjYWxsZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGJvZHlcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBtYWtlR2V0dGVyRm4oYm9keSkge1xuICB0cnkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbignc2NvcGUnLCAncmV0dXJuICcgKyBib2R5ICsgJzsnKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldy1mdW5jICovXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ0ludmFsaWQgZXhwcmVzc2lvbi4gJyArICdHZW5lcmF0ZWQgZnVuY3Rpb24gYm9keTogJyArIGJvZHkpO1xuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBhIHNldHRlciBmdW5jdGlvbiBmb3IgdGhlIGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV4cFxuICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVTZXR0ZXIoZXhwKSB7XG4gIHZhciBwYXRoID0gcGFyc2VQYXRoKGV4cCk7XG4gIGlmIChwYXRoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzY29wZSwgdmFsKSB7XG4gICAgICBzZXRQYXRoKHNjb3BlLCBwYXRoLCB2YWwpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJbnZhbGlkIHNldHRlciBleHByZXNzaW9uOiAnICsgZXhwKTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIGFuIGV4cHJlc3Npb24gaW50byByZS13cml0dGVuIGdldHRlci9zZXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gbmVlZFNldFxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VFeHByZXNzaW9uKGV4cCwgbmVlZFNldCkge1xuICBleHAgPSBleHAudHJpbSgpO1xuICAvLyB0cnkgY2FjaGVcbiAgdmFyIGhpdCA9IGV4cHJlc3Npb25DYWNoZS5nZXQoZXhwKTtcbiAgaWYgKGhpdCkge1xuICAgIGlmIChuZWVkU2V0ICYmICFoaXQuc2V0KSB7XG4gICAgICBoaXQuc2V0ID0gY29tcGlsZVNldHRlcihoaXQuZXhwKTtcbiAgICB9XG4gICAgcmV0dXJuIGhpdDtcbiAgfVxuICB2YXIgcmVzID0geyBleHA6IGV4cCB9O1xuICByZXMuZ2V0ID0gaXNTaW1wbGVQYXRoKGV4cCkgJiYgZXhwLmluZGV4T2YoJ1snKSA8IDBcbiAgLy8gb3B0aW1pemVkIHN1cGVyIHNpbXBsZSBnZXR0ZXJcbiAgPyBtYWtlR2V0dGVyRm4oJ3Njb3BlLicgKyBleHApXG4gIC8vIGR5bmFtaWMgZ2V0dGVyXG4gIDogY29tcGlsZUdldHRlcihleHApO1xuICBpZiAobmVlZFNldCkge1xuICAgIHJlcy5zZXQgPSBjb21waWxlU2V0dGVyKGV4cCk7XG4gIH1cbiAgZXhwcmVzc2lvbkNhY2hlLnB1dChleHAsIHJlcyk7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZXhwcmVzc2lvbiBpcyBhIHNpbXBsZSBwYXRoLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gaXNTaW1wbGVQYXRoKGV4cCkge1xuICByZXR1cm4gcGF0aFRlc3RSRS50ZXN0KGV4cCkgJiZcbiAgLy8gZG9uJ3QgdHJlYXQgdHJ1ZS9mYWxzZSBhcyBwYXRoc1xuICAhYm9vbGVhbkxpdGVyYWxSRS50ZXN0KGV4cCkgJiZcbiAgLy8gTWF0aCBjb25zdGFudHMgZS5nLiBNYXRoLlBJLCBNYXRoLkUgZXRjLlxuICBleHAuc2xpY2UoMCwgNSkgIT09ICdNYXRoLic7XG59XG5cbnZhciBleHByZXNzaW9uID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHBhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHByZXNzaW9uLFxuICBpc1NpbXBsZVBhdGg6IGlzU2ltcGxlUGF0aFxufSk7XG5cbi8vIHdlIGhhdmUgdHdvIHNlcGFyYXRlIHF1ZXVlczogb25lIGZvciBkaXJlY3RpdmUgdXBkYXRlc1xuLy8gYW5kIG9uZSBmb3IgdXNlciB3YXRjaGVyIHJlZ2lzdGVyZWQgdmlhICR3YXRjaCgpLlxuLy8gd2Ugd2FudCB0byBndWFyYW50ZWUgZGlyZWN0aXZlIHVwZGF0ZXMgdG8gYmUgY2FsbGVkXG4vLyBiZWZvcmUgdXNlciB3YXRjaGVycyBzbyB0aGF0IHdoZW4gdXNlciB3YXRjaGVycyBhcmVcbi8vIHRyaWdnZXJlZCwgdGhlIERPTSB3b3VsZCBoYXZlIGFscmVhZHkgYmVlbiBpbiB1cGRhdGVkXG4vLyBzdGF0ZS5cbnZhciBxdWV1ZSA9IFtdO1xudmFyIHVzZXJRdWV1ZSA9IFtdO1xudmFyIGhhcyA9IHt9O1xudmFyIGNpcmN1bGFyID0ge307XG52YXIgd2FpdGluZyA9IGZhbHNlO1xudmFyIGludGVybmFsUXVldWVEZXBsZXRlZCA9IGZhbHNlO1xuXG4vKipcbiAqIFJlc2V0IHRoZSBiYXRjaGVyJ3Mgc3RhdGUuXG4gKi9cblxuZnVuY3Rpb24gcmVzZXRCYXRjaGVyU3RhdGUoKSB7XG4gIHF1ZXVlID0gW107XG4gIHVzZXJRdWV1ZSA9IFtdO1xuICBoYXMgPSB7fTtcbiAgY2lyY3VsYXIgPSB7fTtcbiAgd2FpdGluZyA9IGludGVybmFsUXVldWVEZXBsZXRlZCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEZsdXNoIGJvdGggcXVldWVzIGFuZCBydW4gdGhlIHdhdGNoZXJzLlxuICovXG5cbmZ1bmN0aW9uIGZsdXNoQmF0Y2hlclF1ZXVlKCkge1xuICBydW5CYXRjaGVyUXVldWUocXVldWUpO1xuICBpbnRlcm5hbFF1ZXVlRGVwbGV0ZWQgPSB0cnVlO1xuICBydW5CYXRjaGVyUXVldWUodXNlclF1ZXVlKTtcbiAgLy8gZGV2IHRvb2wgaG9va1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGRldnRvb2xzKSB7XG4gICAgZGV2dG9vbHMuZW1pdCgnZmx1c2gnKTtcbiAgfVxuICByZXNldEJhdGNoZXJTdGF0ZSgpO1xufVxuXG4vKipcbiAqIFJ1biB0aGUgd2F0Y2hlcnMgaW4gYSBzaW5nbGUgcXVldWUuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcXVldWVcbiAqL1xuXG5mdW5jdGlvbiBydW5CYXRjaGVyUXVldWUocXVldWUpIHtcbiAgLy8gZG8gbm90IGNhY2hlIGxlbmd0aCBiZWNhdXNlIG1vcmUgd2F0Y2hlcnMgbWlnaHQgYmUgcHVzaGVkXG4gIC8vIGFzIHdlIHJ1biBleGlzdGluZyB3YXRjaGVyc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHdhdGNoZXIgPSBxdWV1ZVtpXTtcbiAgICB2YXIgaWQgPSB3YXRjaGVyLmlkO1xuICAgIGhhc1tpZF0gPSBudWxsO1xuICAgIHdhdGNoZXIucnVuKCk7XG4gICAgLy8gaW4gZGV2IGJ1aWxkLCBjaGVjayBhbmQgc3RvcCBjaXJjdWxhciB1cGRhdGVzLlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGhhc1tpZF0gIT0gbnVsbCkge1xuICAgICAgY2lyY3VsYXJbaWRdID0gKGNpcmN1bGFyW2lkXSB8fCAwKSArIDE7XG4gICAgICBpZiAoY2lyY3VsYXJbaWRdID4gY29uZmlnLl9tYXhVcGRhdGVDb3VudCkge1xuICAgICAgICBxdWV1ZS5zcGxpY2UoaGFzW2lkXSwgMSk7XG4gICAgICAgIHdhcm4oJ1lvdSBtYXkgaGF2ZSBhbiBpbmZpbml0ZSB1cGRhdGUgbG9vcCBmb3Igd2F0Y2hlciAnICsgJ3dpdGggZXhwcmVzc2lvbjogJyArIHdhdGNoZXIuZXhwcmVzc2lvbik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUHVzaCBhIHdhdGNoZXIgaW50byB0aGUgd2F0Y2hlciBxdWV1ZS5cbiAqIEpvYnMgd2l0aCBkdXBsaWNhdGUgSURzIHdpbGwgYmUgc2tpcHBlZCB1bmxlc3MgaXQnc1xuICogcHVzaGVkIHdoZW4gdGhlIHF1ZXVlIGlzIGJlaW5nIGZsdXNoZWQuXG4gKlxuICogQHBhcmFtIHtXYXRjaGVyfSB3YXRjaGVyXG4gKiAgIHByb3BlcnRpZXM6XG4gKiAgIC0ge051bWJlcn0gaWRcbiAqICAgLSB7RnVuY3Rpb259IHJ1blxuICovXG5cbmZ1bmN0aW9uIHB1c2hXYXRjaGVyKHdhdGNoZXIpIHtcbiAgdmFyIGlkID0gd2F0Y2hlci5pZDtcbiAgaWYgKGhhc1tpZF0gPT0gbnVsbCkge1xuICAgIC8vIGlmIGFuIGludGVybmFsIHdhdGNoZXIgaXMgcHVzaGVkLCBidXQgdGhlIGludGVybmFsXG4gICAgLy8gcXVldWUgaXMgYWxyZWFkeSBkZXBsZXRlZCwgd2UgcnVuIGl0IGltbWVkaWF0ZWx5LlxuICAgIGlmIChpbnRlcm5hbFF1ZXVlRGVwbGV0ZWQgJiYgIXdhdGNoZXIudXNlcikge1xuICAgICAgd2F0Y2hlci5ydW4oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gcHVzaCB3YXRjaGVyIGludG8gYXBwcm9wcmlhdGUgcXVldWVcbiAgICB2YXIgcSA9IHdhdGNoZXIudXNlciA/IHVzZXJRdWV1ZSA6IHF1ZXVlO1xuICAgIGhhc1tpZF0gPSBxLmxlbmd0aDtcbiAgICBxLnB1c2god2F0Y2hlcik7XG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICAgIG5leHRUaWNrKGZsdXNoQmF0Y2hlclF1ZXVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHVpZCQyID0gMDtcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7U3RyaW5nfSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheX0gZmlsdGVyc1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IHR3b1dheVxuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGRlZXBcbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSB1c2VyXG4gKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gc3luY1xuICogICAgICAgICAgICAgICAgIC0ge0Jvb2xlYW59IGxhenlcbiAqICAgICAgICAgICAgICAgICAtIHtGdW5jdGlvbn0gW3ByZVByb2Nlc3NdXG4gKiAgICAgICAgICAgICAgICAgLSB7RnVuY3Rpb259IFtwb3N0UHJvY2Vzc11cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBXYXRjaGVyKHZtLCBleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAvLyBtaXggaW4gb3B0aW9uc1xuICBpZiAob3B0aW9ucykge1xuICAgIGV4dGVuZCh0aGlzLCBvcHRpb25zKTtcbiAgfVxuICB2YXIgaXNGbiA9IHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nO1xuICB0aGlzLnZtID0gdm07XG4gIHZtLl93YXRjaGVycy5wdXNoKHRoaXMpO1xuICB0aGlzLmV4cHJlc3Npb24gPSBpc0ZuID8gZXhwT3JGbi50b1N0cmluZygpIDogZXhwT3JGbjtcbiAgdGhpcy5jYiA9IGNiO1xuICB0aGlzLmlkID0gKyt1aWQkMjsgLy8gdWlkIGZvciBiYXRjaGluZ1xuICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gIHRoaXMuZGlydHkgPSB0aGlzLmxhenk7IC8vIGZvciBsYXp5IHdhdGNoZXJzXG4gIHRoaXMuZGVwcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMubmV3RGVwcyA9IG51bGw7XG4gIHRoaXMucHJldkVycm9yID0gbnVsbDsgLy8gZm9yIGFzeW5jIGVycm9yIHN0YWNrc1xuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXIvc2V0dGVyXG4gIGlmIChpc0ZuKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuO1xuICAgIHRoaXMuc2V0dGVyID0gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIHZhciByZXMgPSBwYXJzZUV4cHJlc3Npb24oZXhwT3JGbiwgdGhpcy50d29XYXkpO1xuICAgIHRoaXMuZ2V0dGVyID0gcmVzLmdldDtcbiAgICB0aGlzLnNldHRlciA9IHJlcy5zZXQ7XG4gIH1cbiAgdGhpcy52YWx1ZSA9IHRoaXMubGF6eSA/IHVuZGVmaW5lZCA6IHRoaXMuZ2V0KCk7XG4gIC8vIHN0YXRlIGZvciBhdm9pZGluZyBmYWxzZSB0cmlnZ2VycyBmb3IgZGVlcCBhbmQgQXJyYXlcbiAgLy8gd2F0Y2hlcnMgZHVyaW5nIHZtLl9kaWdlc3QoKVxuICB0aGlzLnF1ZXVlZCA9IHRoaXMuc2hhbGxvdyA9IGZhbHNlO1xufVxuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtEZXB9IGRlcFxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIChkZXApIHtcbiAgdmFyIGlkID0gZGVwLmlkO1xuICBpZiAoIXRoaXMubmV3RGVwc1tpZF0pIHtcbiAgICB0aGlzLm5ld0RlcHNbaWRdID0gZGVwO1xuICAgIGlmICghdGhpcy5kZXBzW2lkXSkge1xuICAgICAgdGhpcy5kZXBzW2lkXSA9IGRlcDtcbiAgICAgIGRlcC5hZGRTdWIodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuYmVmb3JlR2V0KCk7XG4gIHZhciBzY29wZSA9IHRoaXMuc2NvcGUgfHwgdGhpcy52bTtcbiAgdmFyIHZhbHVlO1xuICB0cnkge1xuICAgIHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbChzY29wZSwgc2NvcGUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29uZmlnLndhcm5FeHByZXNzaW9uRXJyb3JzKSB7XG4gICAgICB3YXJuKCdFcnJvciB3aGVuIGV2YWx1YXRpbmcgZXhwcmVzc2lvbiBcIicgKyB0aGlzLmV4cHJlc3Npb24gKyAnXCIuICcgKyAoY29uZmlnLmRlYnVnID8gJycgOiAnVHVybiBvbiBkZWJ1ZyBtb2RlIHRvIHNlZSBzdGFjayB0cmFjZS4nKSwgZSk7XG4gICAgfVxuICB9XG4gIC8vIFwidG91Y2hcIiBldmVyeSBwcm9wZXJ0eSBzbyB0aGV5IGFyZSBhbGwgdHJhY2tlZCBhc1xuICAvLyBkZXBlbmRlbmNpZXMgZm9yIGRlZXAgd2F0Y2hpbmdcbiAgaWYgKHRoaXMuZGVlcCkge1xuICAgIHRyYXZlcnNlKHZhbHVlKTtcbiAgfVxuICBpZiAodGhpcy5wcmVQcm9jZXNzKSB7XG4gICAgdmFsdWUgPSB0aGlzLnByZVByb2Nlc3ModmFsdWUpO1xuICB9XG4gIGlmICh0aGlzLmZpbHRlcnMpIHtcbiAgICB2YWx1ZSA9IHNjb3BlLl9hcHBseUZpbHRlcnModmFsdWUsIG51bGwsIHRoaXMuZmlsdGVycywgZmFsc2UpO1xuICB9XG4gIGlmICh0aGlzLnBvc3RQcm9jZXNzKSB7XG4gICAgdmFsdWUgPSB0aGlzLnBvc3RQcm9jZXNzKHZhbHVlKTtcbiAgfVxuICB0aGlzLmFmdGVyR2V0KCk7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlIHdpdGggdGhlIHNldHRlci5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBzY29wZSA9IHRoaXMuc2NvcGUgfHwgdGhpcy52bTtcbiAgaWYgKHRoaXMuZmlsdGVycykge1xuICAgIHZhbHVlID0gc2NvcGUuX2FwcGx5RmlsdGVycyh2YWx1ZSwgdGhpcy52YWx1ZSwgdGhpcy5maWx0ZXJzLCB0cnVlKTtcbiAgfVxuICB0cnkge1xuICAgIHRoaXMuc2V0dGVyLmNhbGwoc2NvcGUsIHNjb3BlLCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcud2FybkV4cHJlc3Npb25FcnJvcnMpIHtcbiAgICAgIHdhcm4oJ0Vycm9yIHdoZW4gZXZhbHVhdGluZyBzZXR0ZXIgXCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiJywgZSk7XG4gICAgfVxuICB9XG4gIC8vIHR3by13YXkgc3luYyBmb3Igdi1mb3IgYWxpYXNcbiAgdmFyIGZvckNvbnRleHQgPSBzY29wZS4kZm9yQ29udGV4dDtcbiAgaWYgKGZvckNvbnRleHQgJiYgZm9yQ29udGV4dC5hbGlhcyA9PT0gdGhpcy5leHByZXNzaW9uKSB7XG4gICAgaWYgKGZvckNvbnRleHQuZmlsdGVycykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJdCBzZWVtcyB5b3UgYXJlIHVzaW5nIHR3by13YXkgYmluZGluZyBvbiAnICsgJ2Egdi1mb3IgYWxpYXMgKCcgKyB0aGlzLmV4cHJlc3Npb24gKyAnKSwgYW5kIHRoZSAnICsgJ3YtZm9yIGhhcyBmaWx0ZXJzLiBUaGlzIHdpbGwgbm90IHdvcmsgcHJvcGVybHkuICcgKyAnRWl0aGVyIHJlbW92ZSB0aGUgZmlsdGVycyBvciB1c2UgYW4gYXJyYXkgb2YgJyArICdvYmplY3RzIGFuZCBiaW5kIHRvIG9iamVjdCBwcm9wZXJ0aWVzIGluc3RlYWQuJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvckNvbnRleHQuX3dpdGhMb2NrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzY29wZS4ka2V5KSB7XG4gICAgICAgIC8vIG9yaWdpbmFsIGlzIGFuIG9iamVjdFxuICAgICAgICBmb3JDb250ZXh0LnJhd1ZhbHVlW3Njb3BlLiRrZXldID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3JDb250ZXh0LnJhd1ZhbHVlLiRzZXQoc2NvcGUuJGluZGV4LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogUHJlcGFyZSBmb3IgZGVwZW5kZW5jeSBjb2xsZWN0aW9uLlxuICovXG5cbldhdGNoZXIucHJvdG90eXBlLmJlZm9yZUdldCA9IGZ1bmN0aW9uICgpIHtcbiAgRGVwLnRhcmdldCA9IHRoaXM7XG4gIHRoaXMubmV3RGVwcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIGZvciBkZXBlbmRlbmN5IGNvbGxlY3Rpb24uXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuYWZ0ZXJHZXQgPSBmdW5jdGlvbiAoKSB7XG4gIERlcC50YXJnZXQgPSBudWxsO1xuICB2YXIgaWRzID0gT2JqZWN0LmtleXModGhpcy5kZXBzKTtcbiAgdmFyIGkgPSBpZHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGlkID0gaWRzW2ldO1xuICAgIGlmICghdGhpcy5uZXdEZXBzW2lkXSkge1xuICAgICAgdGhpcy5kZXBzW2lkXS5yZW1vdmVTdWIodGhpcyk7XG4gICAgfVxuICB9XG4gIHRoaXMuZGVwcyA9IHRoaXMubmV3RGVwcztcbn07XG5cbi8qKlxuICogU3Vic2NyaWJlciBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCB3aGVuIGEgZGVwZW5kZW5jeSBjaGFuZ2VzLlxuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hhbGxvd1xuICovXG5cbldhdGNoZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChzaGFsbG93KSB7XG4gIGlmICh0aGlzLmxhenkpIHtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgfSBlbHNlIGlmICh0aGlzLnN5bmMgfHwgIWNvbmZpZy5hc3luYykge1xuICAgIHRoaXMucnVuKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgcXVldWVkLCBvbmx5IG92ZXJ3cml0ZSBzaGFsbG93IHdpdGggbm9uLXNoYWxsb3csXG4gICAgLy8gYnV0IG5vdCB0aGUgb3RoZXIgd2F5IGFyb3VuZC5cbiAgICB0aGlzLnNoYWxsb3cgPSB0aGlzLnF1ZXVlZCA/IHNoYWxsb3cgPyB0aGlzLnNoYWxsb3cgOiBmYWxzZSA6ICEhc2hhbGxvdztcbiAgICB0aGlzLnF1ZXVlZCA9IHRydWU7XG4gICAgLy8gcmVjb3JkIGJlZm9yZS1wdXNoIGVycm9yIHN0YWNrIGluIGRlYnVnIG1vZGVcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcpIHtcbiAgICAgIHRoaXMucHJldkVycm9yID0gbmV3IEVycm9yKCdbdnVlXSBhc3luYyBzdGFjayB0cmFjZScpO1xuICAgIH1cbiAgICBwdXNoV2F0Y2hlcih0aGlzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCYXRjaGVyIGpvYiBpbnRlcmZhY2UuXG4gKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgYmF0Y2hlci5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgIHZhciB2YWx1ZSA9IHRoaXMuZ2V0KCk7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlIHx8XG4gICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgLy8gd2hlbiB0aGUgdmFsdWUgaXMgdGhlIHNhbWUsIGJlY2F1c2UgdGhlIHZhbHVlIG1heVxuICAgIC8vIGhhdmUgbXV0YXRlZDsgYnV0IG9ubHkgZG8gc28gaWYgdGhpcyBpcyBhXG4gICAgLy8gbm9uLXNoYWxsb3cgdXBkYXRlIChjYXVzZWQgYnkgYSB2bSBkaWdlc3QpLlxuICAgIChpc09iamVjdCh2YWx1ZSkgfHwgdGhpcy5kZWVwKSAmJiAhdGhpcy5zaGFsbG93KSB7XG4gICAgICAvLyBzZXQgbmV3IHZhbHVlXG4gICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gaW4gZGVidWcgKyBhc3luYyBtb2RlLCB3aGVuIGEgd2F0Y2hlciBjYWxsYmFja3NcbiAgICAgIC8vIHRocm93cywgd2UgYWxzbyB0aHJvdyB0aGUgc2F2ZWQgYmVmb3JlLXB1c2ggZXJyb3JcbiAgICAgIC8vIHNvIHRoZSBmdWxsIGNyb3NzLXRpY2sgc3RhY2sgdHJhY2UgaXMgYXZhaWxhYmxlLlxuICAgICAgdmFyIHByZXZFcnJvciA9IHRoaXMucHJldkVycm9yO1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcuZGVidWcgJiYgcHJldkVycm9yKSB7XG4gICAgICAgIHRoaXMucHJldkVycm9yID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IHByZXZFcnJvcjtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5xdWV1ZWQgPSB0aGlzLnNoYWxsb3cgPSBmYWxzZTtcbiAgfVxufTtcblxuLyoqXG4gKiBFdmFsdWF0ZSB0aGUgdmFsdWUgb2YgdGhlIHdhdGNoZXIuXG4gKiBUaGlzIG9ubHkgZ2V0cyBjYWxsZWQgZm9yIGxhenkgd2F0Y2hlcnMuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIGF2b2lkIG92ZXJ3cml0aW5nIGFub3RoZXIgd2F0Y2hlciB0aGF0IGlzIGJlaW5nXG4gIC8vIGNvbGxlY3RlZC5cbiAgdmFyIGN1cnJlbnQgPSBEZXAudGFyZ2V0O1xuICB0aGlzLnZhbHVlID0gdGhpcy5nZXQoKTtcbiAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICBEZXAudGFyZ2V0ID0gY3VycmVudDtcbn07XG5cbi8qKlxuICogRGVwZW5kIG9uIGFsbCBkZXBzIGNvbGxlY3RlZCBieSB0aGlzIHdhdGNoZXIuXG4gKi9cblxuV2F0Y2hlci5wcm90b3R5cGUuZGVwZW5kID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGVwSWRzID0gT2JqZWN0LmtleXModGhpcy5kZXBzKTtcbiAgdmFyIGkgPSBkZXBJZHMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdGhpcy5kZXBzW2RlcElkc1tpXV0uZGVwZW5kKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJjcmliZXIgbGlzdC5cbiAqL1xuXG5XYXRjaGVyLnByb3RvdHlwZS50ZWFyZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSB2bSdzIHdhdGNoZXIgbGlzdFxuICAgIC8vIHRoaXMgaXMgYSBzb21ld2hhdCBleHBlbnNpdmUgb3BlcmF0aW9uIHNvIHdlIHNraXAgaXRcbiAgICAvLyBpZiB0aGUgdm0gaXMgYmVpbmcgZGVzdHJveWVkIG9yIGlzIHBlcmZvcm1pbmcgYSB2LWZvclxuICAgIC8vIHJlLXJlbmRlciAodGhlIHdhdGNoZXIgbGlzdCBpcyB0aGVuIGZpbHRlcmVkIGJ5IHYtZm9yKS5cbiAgICBpZiAoIXRoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWQgJiYgIXRoaXMudm0uX3ZGb3JSZW1vdmluZykge1xuICAgICAgdGhpcy52bS5fd2F0Y2hlcnMuJHJlbW92ZSh0aGlzKTtcbiAgICB9XG4gICAgdmFyIGRlcElkcyA9IE9iamVjdC5rZXlzKHRoaXMuZGVwcyk7XG4gICAgdmFyIGkgPSBkZXBJZHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMuZGVwc1tkZXBJZHNbaV1dLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnZtID0gdGhpcy5jYiA9IHRoaXMudmFsdWUgPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIFJlY3J1c2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmZ1bmN0aW9uIHRyYXZlcnNlKHZhbCkge1xuICB2YXIgaSwga2V5cztcbiAgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgIGkgPSB2YWwubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHRyYXZlcnNlKHZhbFtpXSk7XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGtleXMgPSBPYmplY3Qua2V5cyh2YWwpO1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB0cmF2ZXJzZSh2YWxba2V5c1tpXV0pO1xuICB9XG59XG5cbnZhciB0ZXh0JDEgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB0aGlzLmF0dHIgPSB0aGlzLmVsLm5vZGVUeXBlID09PSAzID8gJ2RhdGEnIDogJ3RleHRDb250ZW50JztcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZWxbdGhpcy5hdHRyXSA9IF90b1N0cmluZyh2YWx1ZSk7XG4gIH1cbn07XG5cbnZhciB0ZW1wbGF0ZUNhY2hlID0gbmV3IENhY2hlKDEwMDApO1xudmFyIGlkU2VsZWN0b3JDYWNoZSA9IG5ldyBDYWNoZSgxMDAwKTtcblxudmFyIG1hcCA9IHtcbiAgZWZhdWx0OiBbMCwgJycsICcnXSxcbiAgbGVnZW5kOiBbMSwgJzxmaWVsZHNldD4nLCAnPC9maWVsZHNldD4nXSxcbiAgdHI6IFsyLCAnPHRhYmxlPjx0Ym9keT4nLCAnPC90Ym9keT48L3RhYmxlPiddLFxuICBjb2w6IFsyLCAnPHRhYmxlPjx0Ym9keT48L3Rib2R5Pjxjb2xncm91cD4nLCAnPC9jb2xncm91cD48L3RhYmxlPiddXG59O1xuXG5tYXAudGQgPSBtYXAudGggPSBbMywgJzx0YWJsZT48dGJvZHk+PHRyPicsICc8L3RyPjwvdGJvZHk+PC90YWJsZT4nXTtcblxubWFwLm9wdGlvbiA9IG1hcC5vcHRncm91cCA9IFsxLCAnPHNlbGVjdCBtdWx0aXBsZT1cIm11bHRpcGxlXCI+JywgJzwvc2VsZWN0PiddO1xuXG5tYXAudGhlYWQgPSBtYXAudGJvZHkgPSBtYXAuY29sZ3JvdXAgPSBtYXAuY2FwdGlvbiA9IG1hcC50Zm9vdCA9IFsxLCAnPHRhYmxlPicsICc8L3RhYmxlPiddO1xuXG5tYXAuZyA9IG1hcC5kZWZzID0gbWFwLnN5bWJvbCA9IG1hcC51c2UgPSBtYXAuaW1hZ2UgPSBtYXAudGV4dCA9IG1hcC5jaXJjbGUgPSBtYXAuZWxsaXBzZSA9IG1hcC5saW5lID0gbWFwLnBhdGggPSBtYXAucG9seWdvbiA9IG1hcC5wb2x5bGluZSA9IG1hcC5yZWN0ID0gWzEsICc8c3ZnICcgKyAneG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICcgKyAneG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgJyArICd4bWxuczpldj1cImh0dHA6Ly93d3cudzMub3JnLzIwMDEveG1sLWV2ZW50c1wiJyArICd2ZXJzaW9uPVwiMS4xXCI+JywgJzwvc3ZnPiddO1xuXG4vKipcbiAqIENoZWNrIGlmIGEgbm9kZSBpcyBhIHN1cHBvcnRlZCB0ZW1wbGF0ZSBub2RlIHdpdGggYVxuICogRG9jdW1lbnRGcmFnbWVudCBjb250ZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBpc1JlYWxUZW1wbGF0ZShub2RlKSB7XG4gIHJldHVybiBpc1RlbXBsYXRlKG5vZGUpICYmIGlzRnJhZ21lbnQobm9kZS5jb250ZW50KTtcbn1cblxudmFyIHRhZ1JFJDEgPSAvPChbXFx3Ol0rKS87XG52YXIgZW50aXR5UkUgPSAvJiM/XFx3Kz87LztcblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIHRlbXBsYXRlIHRvIGEgRG9jdW1lbnRGcmFnbWVudC5cbiAqIERldGVybWluZXMgY29ycmVjdCB3cmFwcGluZyBieSB0YWcgdHlwZXMuIFdyYXBwaW5nXG4gKiBzdHJhdGVneSBmb3VuZCBpbiBqUXVlcnkgJiBjb21wb25lbnQvZG9taWZ5LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZW1wbGF0ZVN0cmluZ1xuICogQHBhcmFtIHtCb29sZWFufSByYXdcbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gc3RyaW5nVG9GcmFnbWVudCh0ZW1wbGF0ZVN0cmluZywgcmF3KSB7XG4gIC8vIHRyeSBhIGNhY2hlIGhpdCBmaXJzdFxuICB2YXIgY2FjaGVLZXkgPSByYXcgPyB0ZW1wbGF0ZVN0cmluZyA6IHRlbXBsYXRlU3RyaW5nLnRyaW0oKTtcbiAgdmFyIGhpdCA9IHRlbXBsYXRlQ2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgaWYgKGhpdCkge1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgdmFyIHRhZ01hdGNoID0gdGVtcGxhdGVTdHJpbmcubWF0Y2godGFnUkUkMSk7XG4gIHZhciBlbnRpdHlNYXRjaCA9IGVudGl0eVJFLnRlc3QodGVtcGxhdGVTdHJpbmcpO1xuXG4gIGlmICghdGFnTWF0Y2ggJiYgIWVudGl0eU1hdGNoKSB7XG4gICAgLy8gdGV4dCBvbmx5LCByZXR1cm4gYSBzaW5nbGUgdGV4dCBub2RlLlxuICAgIGZyYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGVtcGxhdGVTdHJpbmcpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gdGFnTWF0Y2ggJiYgdGFnTWF0Y2hbMV07XG4gICAgdmFyIHdyYXAgPSBtYXBbdGFnXSB8fCBtYXAuZWZhdWx0O1xuICAgIHZhciBkZXB0aCA9IHdyYXBbMF07XG4gICAgdmFyIHByZWZpeCA9IHdyYXBbMV07XG4gICAgdmFyIHN1ZmZpeCA9IHdyYXBbMl07XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5vZGUuaW5uZXJIVE1MID0gcHJlZml4ICsgdGVtcGxhdGVTdHJpbmcgKyBzdWZmaXg7XG4gICAgd2hpbGUgKGRlcHRoLS0pIHtcbiAgICAgIG5vZGUgPSBub2RlLmxhc3RDaGlsZDtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGQ7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICB3aGlsZSAoY2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICAgIGZyYWcuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgfVxuICBpZiAoIXJhdykge1xuICAgIHRyaW1Ob2RlKGZyYWcpO1xuICB9XG4gIHRlbXBsYXRlQ2FjaGUucHV0KGNhY2hlS2V5LCBmcmFnKTtcbiAgcmV0dXJuIGZyYWc7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHRlbXBsYXRlIG5vZGUgdG8gYSBEb2N1bWVudEZyYWdtZW50LlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBub2RlVG9GcmFnbWVudChub2RlKSB7XG4gIC8vIGlmIGl0cyBhIHRlbXBsYXRlIHRhZyBhbmQgdGhlIGJyb3dzZXIgc3VwcG9ydHMgaXQsXG4gIC8vIGl0cyBjb250ZW50IGlzIGFscmVhZHkgYSBkb2N1bWVudCBmcmFnbWVudC5cbiAgaWYgKGlzUmVhbFRlbXBsYXRlKG5vZGUpKSB7XG4gICAgdHJpbU5vZGUobm9kZS5jb250ZW50KTtcbiAgICByZXR1cm4gbm9kZS5jb250ZW50O1xuICB9XG4gIC8vIHNjcmlwdCB0ZW1wbGF0ZVxuICBpZiAobm9kZS50YWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgIHJldHVybiBzdHJpbmdUb0ZyYWdtZW50KG5vZGUudGV4dENvbnRlbnQpO1xuICB9XG4gIC8vIG5vcm1hbCBub2RlLCBjbG9uZSBpdCB0byBhdm9pZCBtdXRhdGluZyB0aGUgb3JpZ2luYWxcbiAgdmFyIGNsb25lZE5vZGUgPSBjbG9uZU5vZGUobm9kZSk7XG4gIHZhciBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICB2YXIgY2hpbGQ7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmQtYXNzaWduICovXG4gIHdoaWxlIChjaGlsZCA9IGNsb25lZE5vZGUuZmlyc3RDaGlsZCkge1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICBmcmFnLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgfVxuICB0cmltTm9kZShmcmFnKTtcbiAgcmV0dXJuIGZyYWc7XG59XG5cbi8vIFRlc3QgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgU2FmYXJpIHRlbXBsYXRlIGNsb25pbmcgYnVnXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93dWcuY2dpP2lkPTEzNzc1NVxudmFyIGhhc0Jyb2tlblRlbXBsYXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKGluQnJvd3Nlcikge1xuICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYS5pbm5lckhUTUwgPSAnPHRlbXBsYXRlPjE8L3RlbXBsYXRlPic7XG4gICAgcmV0dXJuICFhLmNsb25lTm9kZSh0cnVlKS5maXJzdENoaWxkLmlubmVySFRNTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pKCk7XG5cbi8vIFRlc3QgZm9yIElFMTAvMTEgdGV4dGFyZWEgcGxhY2Vob2xkZXIgY2xvbmUgYnVnXG52YXIgaGFzVGV4dGFyZWFDbG9uZUJ1ZyA9IChmdW5jdGlvbiAoKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gIGlmIChpbkJyb3dzZXIpIHtcbiAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdC5wbGFjZWhvbGRlciA9ICd0JztcbiAgICByZXR1cm4gdC5jbG9uZU5vZGUodHJ1ZSkudmFsdWUgPT09ICd0JztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0pKCk7XG5cbi8qKlxuICogMS4gRGVhbCB3aXRoIFNhZmFyaSBjbG9uaW5nIG5lc3RlZCA8dGVtcGxhdGU+IGJ1ZyBieVxuICogICAgbWFudWFsbHkgY2xvbmluZyBhbGwgdGVtcGxhdGUgaW5zdGFuY2VzLlxuICogMi4gRGVhbCB3aXRoIElFMTAvMTEgdGV4dGFyZWEgcGxhY2Vob2xkZXIgYnVnIGJ5IHNldHRpbmdcbiAqICAgIHRoZSBjb3JyZWN0IHZhbHVlIGFmdGVyIGNsb25pbmcuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IG5vZGVcbiAqIEByZXR1cm4ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBjbG9uZU5vZGUobm9kZSkge1xuICBpZiAoIW5vZGUucXVlcnlTZWxlY3RvckFsbCkge1xuICAgIHJldHVybiBub2RlLmNsb25lTm9kZSgpO1xuICB9XG4gIHZhciByZXMgPSBub2RlLmNsb25lTm9kZSh0cnVlKTtcbiAgdmFyIGksIG9yaWdpbmFsLCBjbG9uZWQ7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoaGFzQnJva2VuVGVtcGxhdGUpIHtcbiAgICB2YXIgdGVtcENsb25lID0gcmVzO1xuICAgIGlmIChpc1JlYWxUZW1wbGF0ZShub2RlKSkge1xuICAgICAgbm9kZSA9IG5vZGUuY29udGVudDtcbiAgICAgIHRlbXBDbG9uZSA9IHJlcy5jb250ZW50O1xuICAgIH1cbiAgICBvcmlnaW5hbCA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgndGVtcGxhdGUnKTtcbiAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICBjbG9uZWQgPSB0ZW1wQ2xvbmUucXVlcnlTZWxlY3RvckFsbCgndGVtcGxhdGUnKTtcbiAgICAgIGkgPSBjbG9uZWQubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjbG9uZWRbaV0ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmVOb2RlKG9yaWdpbmFsW2ldKSwgY2xvbmVkW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChoYXNUZXh0YXJlYUNsb25lQnVnKSB7XG4gICAgaWYgKG5vZGUudGFnTmFtZSA9PT0gJ1RFWFRBUkVBJykge1xuICAgICAgcmVzLnZhbHVlID0gbm9kZS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JpZ2luYWwgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJyk7XG4gICAgICBpZiAob3JpZ2luYWwubGVuZ3RoKSB7XG4gICAgICAgIGNsb25lZCA9IHJlcy5xdWVyeVNlbGVjdG9yQWxsKCd0ZXh0YXJlYScpO1xuICAgICAgICBpID0gY2xvbmVkLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgIGNsb25lZFtpXS52YWx1ZSA9IG9yaWdpbmFsW2ldLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogUHJvY2VzcyB0aGUgdGVtcGxhdGUgb3B0aW9uIGFuZCBub3JtYWxpemVzIGl0IGludG8gYVxuICogYSBEb2N1bWVudEZyYWdtZW50IHRoYXQgY2FuIGJlIHVzZWQgYXMgYSBwYXJ0aWFsIG9yIGFcbiAqIGluc3RhbmNlIHRlbXBsYXRlLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGVtcGxhdGVcbiAqICAgICAgICBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTpcbiAqICAgICAgICAtIERvY3VtZW50RnJhZ21lbnQgb2JqZWN0XG4gKiAgICAgICAgLSBOb2RlIG9iamVjdCBvZiB0eXBlIFRlbXBsYXRlXG4gKiAgICAgICAgLSBpZCBzZWxlY3RvcjogJyNzb21lLXRlbXBsYXRlLWlkJ1xuICogICAgICAgIC0gdGVtcGxhdGUgc3RyaW5nOiAnPGRpdj48c3Bhbj57e21zZ319PC9zcGFuPjwvZGl2PidcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc2hvdWxkQ2xvbmVcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcmF3XG4gKiAgICAgICAgaW5saW5lIEhUTUwgaW50ZXJwb2xhdGlvbi4gRG8gbm90IGNoZWNrIGZvciBpZFxuICogICAgICAgIHNlbGVjdG9yIGFuZCBrZWVwIHdoaXRlc3BhY2UgaW4gdGhlIHN0cmluZy5cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR8dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlVGVtcGxhdGUodGVtcGxhdGUsIHNob3VsZENsb25lLCByYXcpIHtcbiAgdmFyIG5vZGUsIGZyYWc7XG5cbiAgLy8gaWYgdGhlIHRlbXBsYXRlIGlzIGFscmVhZHkgYSBkb2N1bWVudCBmcmFnbWVudCxcbiAgLy8gZG8gbm90aGluZ1xuICBpZiAoaXNGcmFnbWVudCh0ZW1wbGF0ZSkpIHtcbiAgICB0cmltTm9kZSh0ZW1wbGF0ZSk7XG4gICAgcmV0dXJuIHNob3VsZENsb25lID8gY2xvbmVOb2RlKHRlbXBsYXRlKSA6IHRlbXBsYXRlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBpZCBzZWxlY3RvclxuICAgIGlmICghcmF3ICYmIHRlbXBsYXRlLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAvLyBpZCBzZWxlY3RvciBjYW4gYmUgY2FjaGVkIHRvb1xuICAgICAgZnJhZyA9IGlkU2VsZWN0b3JDYWNoZS5nZXQodGVtcGxhdGUpO1xuICAgICAgaWYgKCFmcmFnKSB7XG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0ZW1wbGF0ZS5zbGljZSgxKSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgZnJhZyA9IG5vZGVUb0ZyYWdtZW50KG5vZGUpO1xuICAgICAgICAgIC8vIHNhdmUgc2VsZWN0b3IgdG8gY2FjaGVcbiAgICAgICAgICBpZFNlbGVjdG9yQ2FjaGUucHV0KHRlbXBsYXRlLCBmcmFnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3JtYWwgc3RyaW5nIHRlbXBsYXRlXG4gICAgICBmcmFnID0gc3RyaW5nVG9GcmFnbWVudCh0ZW1wbGF0ZSwgcmF3KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodGVtcGxhdGUubm9kZVR5cGUpIHtcbiAgICAvLyBhIGRpcmVjdCBub2RlXG4gICAgZnJhZyA9IG5vZGVUb0ZyYWdtZW50KHRlbXBsYXRlKTtcbiAgfVxuXG4gIHJldHVybiBmcmFnICYmIHNob3VsZENsb25lID8gY2xvbmVOb2RlKGZyYWcpIDogZnJhZztcbn1cblxudmFyIHRlbXBsYXRlID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGNsb25lTm9kZTogY2xvbmVOb2RlLFxuICBwYXJzZVRlbXBsYXRlOiBwYXJzZVRlbXBsYXRlXG59KTtcblxudmFyIGh0bWwgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAvLyBhIGNvbW1lbnQgbm9kZSBtZWFucyB0aGlzIGlzIGEgYmluZGluZyBmb3JcbiAgICAvLyB7e3sgaW5saW5lIHVuZXNjYXBlZCBodG1sIH19fVxuICAgIGlmICh0aGlzLmVsLm5vZGVUeXBlID09PSA4KSB7XG4gICAgICAvLyBob2xkIG5vZGVzXG4gICAgICB0aGlzLm5vZGVzID0gW107XG4gICAgICAvLyByZXBsYWNlIHRoZSBwbGFjZWhvbGRlciB3aXRoIHByb3BlciBhbmNob3JcbiAgICAgIHRoaXMuYW5jaG9yID0gY3JlYXRlQW5jaG9yKCd2LWh0bWwnKTtcbiAgICAgIHJlcGxhY2UodGhpcy5lbCwgdGhpcy5hbmNob3IpO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHZhbHVlID0gX3RvU3RyaW5nKHZhbHVlKTtcbiAgICBpZiAodGhpcy5ub2Rlcykge1xuICAgICAgdGhpcy5zd2FwKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgc3dhcDogZnVuY3Rpb24gc3dhcCh2YWx1ZSkge1xuICAgIC8vIHJlbW92ZSBvbGQgbm9kZXNcbiAgICB2YXIgaSA9IHRoaXMubm9kZXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHJlbW92ZSh0aGlzLm5vZGVzW2ldKTtcbiAgICB9XG4gICAgLy8gY29udmVydCBuZXcgdmFsdWUgdG8gYSBmcmFnbWVudFxuICAgIC8vIGRvIG5vdCBhdHRlbXB0IHRvIHJldHJpZXZlIGZyb20gaWQgc2VsZWN0b3JcbiAgICB2YXIgZnJhZyA9IHBhcnNlVGVtcGxhdGUodmFsdWUsIHRydWUsIHRydWUpO1xuICAgIC8vIHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlc2Ugbm9kZXMgc28gd2UgY2FuIHJlbW92ZSBsYXRlclxuICAgIHRoaXMubm9kZXMgPSB0b0FycmF5KGZyYWcuY2hpbGROb2Rlcyk7XG4gICAgYmVmb3JlKGZyYWcsIHRoaXMuYW5jaG9yKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBYnN0cmFjdGlvbiBmb3IgYSBwYXJ0aWFsbHktY29tcGlsZWQgZnJhZ21lbnQuXG4gKiBDYW4gb3B0aW9uYWxseSBjb21waWxlIGNvbnRlbnQgd2l0aCBhIGNoaWxkIHNjb3BlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGxpbmtlclxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqIEBwYXJhbSB7VnVlfSBbaG9zdF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gKi9cbmZ1bmN0aW9uIEZyYWdtZW50KGxpbmtlciwgdm0sIGZyYWcsIGhvc3QsIHNjb3BlLCBwYXJlbnRGcmFnKSB7XG4gIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgdGhpcy5jaGlsZEZyYWdzID0gW107XG4gIHRoaXMudm0gPSB2bTtcbiAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICB0aGlzLmluc2VydGVkID0gZmFsc2U7XG4gIHRoaXMucGFyZW50RnJhZyA9IHBhcmVudEZyYWc7XG4gIGlmIChwYXJlbnRGcmFnKSB7XG4gICAgcGFyZW50RnJhZy5jaGlsZEZyYWdzLnB1c2godGhpcyk7XG4gIH1cbiAgdGhpcy51bmxpbmsgPSBsaW5rZXIodm0sIGZyYWcsIGhvc3QsIHNjb3BlLCB0aGlzKTtcbiAgdmFyIHNpbmdsZSA9IHRoaXMuc2luZ2xlID0gZnJhZy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSAmJlxuICAvLyBkbyBub3QgZ28gc2luZ2xlIG1vZGUgaWYgdGhlIG9ubHkgbm9kZSBpcyBhbiBhbmNob3JcbiAgIWZyYWcuY2hpbGROb2Rlc1swXS5fX3ZfYW5jaG9yO1xuICBpZiAoc2luZ2xlKSB7XG4gICAgdGhpcy5ub2RlID0gZnJhZy5jaGlsZE5vZGVzWzBdO1xuICAgIHRoaXMuYmVmb3JlID0gc2luZ2xlQmVmb3JlO1xuICAgIHRoaXMucmVtb3ZlID0gc2luZ2xlUmVtb3ZlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMubm9kZSA9IGNyZWF0ZUFuY2hvcignZnJhZ21lbnQtc3RhcnQnKTtcbiAgICB0aGlzLmVuZCA9IGNyZWF0ZUFuY2hvcignZnJhZ21lbnQtZW5kJyk7XG4gICAgdGhpcy5mcmFnID0gZnJhZztcbiAgICBwcmVwZW5kKHRoaXMubm9kZSwgZnJhZyk7XG4gICAgZnJhZy5hcHBlbmRDaGlsZCh0aGlzLmVuZCk7XG4gICAgdGhpcy5iZWZvcmUgPSBtdWx0aUJlZm9yZTtcbiAgICB0aGlzLnJlbW92ZSA9IG11bHRpUmVtb3ZlO1xuICB9XG4gIHRoaXMubm9kZS5fX3ZfZnJhZyA9IHRoaXM7XG59XG5cbi8qKlxuICogQ2FsbCBhdHRhY2gvZGV0YWNoIGZvciBhbGwgY29tcG9uZW50cyBjb250YWluZWQgd2l0aGluXG4gKiB0aGlzIGZyYWdtZW50LiBBbHNvIGRvIHNvIHJlY3Vyc2l2ZWx5IGZvciBhbGwgY2hpbGRcbiAqIGZyYWdtZW50cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBob29rXG4gKi9cblxuRnJhZ21lbnQucHJvdG90eXBlLmNhbGxIb29rID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgdmFyIGksIGw7XG4gIGZvciAoaSA9IDAsIGwgPSB0aGlzLmNoaWxkRnJhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdGhpcy5jaGlsZEZyYWdzW2ldLmNhbGxIb29rKGhvb2spO1xuICB9XG4gIGZvciAoaSA9IDAsIGwgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGhvb2sodGhpcy5jaGlsZHJlbltpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogSW5zZXJ0IGZyYWdtZW50IGJlZm9yZSB0YXJnZXQsIHNpbmdsZSBub2RlIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtCb29sZWFufSB3aXRoVHJhbnNpdGlvblxuICovXG5cbmZ1bmN0aW9uIHNpbmdsZUJlZm9yZSh0YXJnZXQsIHdpdGhUcmFuc2l0aW9uKSB7XG4gIHRoaXMuaW5zZXJ0ZWQgPSB0cnVlO1xuICB2YXIgbWV0aG9kID0gd2l0aFRyYW5zaXRpb24gIT09IGZhbHNlID8gYmVmb3JlV2l0aFRyYW5zaXRpb24gOiBiZWZvcmU7XG4gIG1ldGhvZCh0aGlzLm5vZGUsIHRhcmdldCwgdGhpcy52bSk7XG4gIGlmIChpbkRvYyh0aGlzLm5vZGUpKSB7XG4gICAgdGhpcy5jYWxsSG9vayhhdHRhY2gpO1xuICB9XG59XG5cbi8qKlxuICogUmVtb3ZlIGZyYWdtZW50LCBzaW5nbGUgbm9kZSB2ZXJzaW9uXG4gKi9cblxuZnVuY3Rpb24gc2luZ2xlUmVtb3ZlKCkge1xuICB0aGlzLmluc2VydGVkID0gZmFsc2U7XG4gIHZhciBzaG91bGRDYWxsUmVtb3ZlID0gaW5Eb2ModGhpcy5ub2RlKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLmJlZm9yZVJlbW92ZSgpO1xuICByZW1vdmVXaXRoVHJhbnNpdGlvbih0aGlzLm5vZGUsIHRoaXMudm0sIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoc2hvdWxkQ2FsbFJlbW92ZSkge1xuICAgICAgc2VsZi5jYWxsSG9vayhkZXRhY2gpO1xuICAgIH1cbiAgICBzZWxmLmRlc3Ryb3koKTtcbiAgfSk7XG59XG5cbi8qKlxuICogSW5zZXJ0IGZyYWdtZW50IGJlZm9yZSB0YXJnZXQsIG11bHRpLW5vZGVzIHZlcnNpb25cbiAqXG4gKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICogQHBhcmFtIHtCb29sZWFufSB3aXRoVHJhbnNpdGlvblxuICovXG5cbmZ1bmN0aW9uIG11bHRpQmVmb3JlKHRhcmdldCwgd2l0aFRyYW5zaXRpb24pIHtcbiAgdGhpcy5pbnNlcnRlZCA9IHRydWU7XG4gIHZhciB2bSA9IHRoaXMudm07XG4gIHZhciBtZXRob2QgPSB3aXRoVHJhbnNpdGlvbiAhPT0gZmFsc2UgPyBiZWZvcmVXaXRoVHJhbnNpdGlvbiA6IGJlZm9yZTtcbiAgbWFwTm9kZVJhbmdlKHRoaXMubm9kZSwgdGhpcy5lbmQsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgbWV0aG9kKG5vZGUsIHRhcmdldCwgdm0pO1xuICB9KTtcbiAgaWYgKGluRG9jKHRoaXMubm9kZSkpIHtcbiAgICB0aGlzLmNhbGxIb29rKGF0dGFjaCk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgZnJhZ21lbnQsIG11bHRpLW5vZGVzIHZlcnNpb25cbiAqL1xuXG5mdW5jdGlvbiBtdWx0aVJlbW92ZSgpIHtcbiAgdGhpcy5pbnNlcnRlZCA9IGZhbHNlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzaG91bGRDYWxsUmVtb3ZlID0gaW5Eb2ModGhpcy5ub2RlKTtcbiAgdGhpcy5iZWZvcmVSZW1vdmUoKTtcbiAgcmVtb3ZlTm9kZVJhbmdlKHRoaXMubm9kZSwgdGhpcy5lbmQsIHRoaXMudm0sIHRoaXMuZnJhZywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChzaG91bGRDYWxsUmVtb3ZlKSB7XG4gICAgICBzZWxmLmNhbGxIb29rKGRldGFjaCk7XG4gICAgfVxuICAgIHNlbGYuZGVzdHJveSgpO1xuICB9KTtcbn1cblxuLyoqXG4gKiBQcmVwYXJlIHRoZSBmcmFnbWVudCBmb3IgcmVtb3ZhbC5cbiAqL1xuXG5GcmFnbWVudC5wcm90b3R5cGUuYmVmb3JlUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgbDtcbiAgZm9yIChpID0gMCwgbCA9IHRoaXMuY2hpbGRGcmFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAvLyBjYWxsIHRoZSBzYW1lIG1ldGhvZCByZWN1cnNpdmVseSBvbiBjaGlsZFxuICAgIC8vIGZyYWdtZW50cywgZGVwdGgtZmlyc3RcbiAgICB0aGlzLmNoaWxkRnJhZ3NbaV0uYmVmb3JlUmVtb3ZlKGZhbHNlKTtcbiAgfVxuICBmb3IgKGkgPSAwLCBsID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAvLyBDYWxsIGRlc3Ryb3kgZm9yIGFsbCBjb250YWluZWQgaW5zdGFuY2VzLFxuICAgIC8vIHdpdGggcmVtb3ZlOmZhbHNlIGFuZCBkZWZlcjp0cnVlLlxuICAgIC8vIERlZmVyIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHdlIG5lZWQgdG9cbiAgICAvLyBrZWVwIHRoZSBjaGlsZHJlbiB0byBjYWxsIGRldGFjaCBob29rc1xuICAgIC8vIG9uIHRoZW0uXG4gICAgdGhpcy5jaGlsZHJlbltpXS4kZGVzdHJveShmYWxzZSwgdHJ1ZSk7XG4gIH1cbiAgdmFyIGRpcnMgPSB0aGlzLnVubGluay5kaXJzO1xuICBmb3IgKGkgPSAwLCBsID0gZGlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAvLyBkaXNhYmxlIHRoZSB3YXRjaGVycyBvbiBhbGwgdGhlIGRpcmVjdGl2ZXNcbiAgICAvLyBzbyB0aGF0IHRoZSByZW5kZXJlZCBjb250ZW50IHN0YXlzIHRoZSBzYW1lXG4gICAgLy8gZHVyaW5nIHJlbW92YWwuXG4gICAgZGlyc1tpXS5fd2F0Y2hlciAmJiBkaXJzW2ldLl93YXRjaGVyLnRlYXJkb3duKCk7XG4gIH1cbn07XG5cbi8qKlxuICogRGVzdHJveSB0aGUgZnJhZ21lbnQuXG4gKi9cblxuRnJhZ21lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBhcmVudEZyYWcpIHtcbiAgICB0aGlzLnBhcmVudEZyYWcuY2hpbGRGcmFncy4kcmVtb3ZlKHRoaXMpO1xuICB9XG4gIHRoaXMubm9kZS5fX3ZfZnJhZyA9IG51bGw7XG4gIHRoaXMudW5saW5rKCk7XG59O1xuXG4vKipcbiAqIENhbGwgYXR0YWNoIGhvb2sgZm9yIGEgVnVlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSBjaGlsZFxuICovXG5cbmZ1bmN0aW9uIGF0dGFjaChjaGlsZCkge1xuICBpZiAoIWNoaWxkLl9pc0F0dGFjaGVkKSB7XG4gICAgY2hpbGQuX2NhbGxIb29rKCdhdHRhY2hlZCcpO1xuICB9XG59XG5cbi8qKlxuICogQ2FsbCBkZXRhY2ggaG9vayBmb3IgYSBWdWUgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtWdWV9IGNoaWxkXG4gKi9cblxuZnVuY3Rpb24gZGV0YWNoKGNoaWxkKSB7XG4gIGlmIChjaGlsZC5faXNBdHRhY2hlZCkge1xuICAgIGNoaWxkLl9jYWxsSG9vaygnZGV0YWNoZWQnKTtcbiAgfVxufVxuXG52YXIgbGlua2VyQ2FjaGUgPSBuZXcgQ2FjaGUoNTAwMCk7XG5cbi8qKlxuICogQSBmYWN0b3J5IHRoYXQgY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhXG4gKiBmcmFnbWVudC4gQ2FjaGVzIHRoZSBjb21waWxlZCBsaW5rZXIgaWYgcG9zc2libGUuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfSBlbFxuICovXG5mdW5jdGlvbiBGcmFnbWVudEZhY3Rvcnkodm0sIGVsKSB7XG4gIHRoaXMudm0gPSB2bTtcbiAgdmFyIHRlbXBsYXRlO1xuICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgZWwgPT09ICdzdHJpbmcnO1xuICBpZiAoaXNTdHJpbmcgfHwgaXNUZW1wbGF0ZShlbCkpIHtcbiAgICB0ZW1wbGF0ZSA9IHBhcnNlVGVtcGxhdGUoZWwsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHRlbXBsYXRlLmFwcGVuZENoaWxkKGVsKTtcbiAgfVxuICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gIC8vIGxpbmtlciBjYW4gYmUgY2FjaGVkLCBidXQgb25seSBmb3IgY29tcG9uZW50c1xuICB2YXIgbGlua2VyO1xuICB2YXIgY2lkID0gdm0uY29uc3RydWN0b3IuY2lkO1xuICBpZiAoY2lkID4gMCkge1xuICAgIHZhciBjYWNoZUlkID0gY2lkICsgKGlzU3RyaW5nID8gZWwgOiBnZXRPdXRlckhUTUwoZWwpKTtcbiAgICBsaW5rZXIgPSBsaW5rZXJDYWNoZS5nZXQoY2FjaGVJZCk7XG4gICAgaWYgKCFsaW5rZXIpIHtcbiAgICAgIGxpbmtlciA9IGNvbXBpbGUodGVtcGxhdGUsIHZtLiRvcHRpb25zLCB0cnVlKTtcbiAgICAgIGxpbmtlckNhY2hlLnB1dChjYWNoZUlkLCBsaW5rZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsaW5rZXIgPSBjb21waWxlKHRlbXBsYXRlLCB2bS4kb3B0aW9ucywgdHJ1ZSk7XG4gIH1cbiAgdGhpcy5saW5rZXIgPSBsaW5rZXI7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZnJhZ21lbnQgaW5zdGFuY2Ugd2l0aCBnaXZlbiBob3N0IGFuZCBzY29wZS5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gaG9zdFxuICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gKiBAcGFyYW0ge0ZyYWdtZW50fSBwYXJlbnRGcmFnXG4gKi9cblxuRnJhZ21lbnRGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoaG9zdCwgc2NvcGUsIHBhcmVudEZyYWcpIHtcbiAgdmFyIGZyYWcgPSBjbG9uZU5vZGUodGhpcy50ZW1wbGF0ZSk7XG4gIHJldHVybiBuZXcgRnJhZ21lbnQodGhpcy5saW5rZXIsIHRoaXMudm0sIGZyYWcsIGhvc3QsIHNjb3BlLCBwYXJlbnRGcmFnKTtcbn07XG5cbnZhciBPTiA9IDcwMDtcbnZhciBNT0RFTCA9IDgwMDtcbnZhciBCSU5EID0gODUwO1xudmFyIFRSQU5TSVRJT04gPSAxMTAwO1xudmFyIEVMID0gMTUwMDtcbnZhciBDT01QT05FTlQgPSAxNTAwO1xudmFyIFBBUlRJQUwgPSAxNzUwO1xudmFyIEZPUiA9IDIwMDA7XG52YXIgSUYgPSAyMDAwO1xudmFyIFNMT1QgPSAyMTAwO1xuXG52YXIgdWlkJDMgPSAwO1xuXG52YXIgdkZvciA9IHtcblxuICBwcmlvcml0eTogRk9SLFxuXG4gIHBhcmFtczogWyd0cmFjay1ieScsICdzdGFnZ2VyJywgJ2VudGVyLXN0YWdnZXInLCAnbGVhdmUtc3RhZ2dlciddLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgLy8gc3VwcG9ydCBcIml0ZW0gaW4vb2YgaXRlbXNcIiBzeW50YXhcbiAgICB2YXIgaW5NYXRjaCA9IHRoaXMuZXhwcmVzc2lvbi5tYXRjaCgvKC4qKSAoPzppbnxvZikgKC4qKS8pO1xuICAgIGlmIChpbk1hdGNoKSB7XG4gICAgICB2YXIgaXRNYXRjaCA9IGluTWF0Y2hbMV0ubWF0Y2goL1xcKCguKiksKC4qKVxcKS8pO1xuICAgICAgaWYgKGl0TWF0Y2gpIHtcbiAgICAgICAgdGhpcy5pdGVyYXRvciA9IGl0TWF0Y2hbMV0udHJpbSgpO1xuICAgICAgICB0aGlzLmFsaWFzID0gaXRNYXRjaFsyXS50cmltKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFsaWFzID0gaW5NYXRjaFsxXS50cmltKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmV4cHJlc3Npb24gPSBpbk1hdGNoWzJdO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5hbGlhcykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdBbGlhcyBpcyByZXF1aXJlZCBpbiB2LWZvci4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyB1aWQgYXMgYSBjYWNoZSBpZGVudGlmaWVyXG4gICAgdGhpcy5pZCA9ICdfX3YtZm9yX18nICsgKyt1aWQkMztcblxuICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYW4gb3B0aW9uIGxpc3QsXG4gICAgLy8gc28gdGhhdCB3ZSBrbm93IGlmIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSA8c2VsZWN0PidzXG4gICAgLy8gdi1tb2RlbCB3aGVuIHRoZSBvcHRpb24gbGlzdCBoYXMgY2hhbmdlZC5cbiAgICAvLyBiZWNhdXNlIHYtbW9kZWwgaGFzIGEgbG93ZXIgcHJpb3JpdHkgdGhhbiB2LWZvcixcbiAgICAvLyB0aGUgdi1tb2RlbCBpcyBub3QgYm91bmQgaGVyZSB5ZXQsIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZXRyaXZlIGl0IGluIHRoZSBhY3R1YWwgdXBkYXRlTW9kZWwoKSBmdW5jdGlvbi5cbiAgICB2YXIgdGFnID0gdGhpcy5lbC50YWdOYW1lO1xuICAgIHRoaXMuaXNPcHRpb24gPSAodGFnID09PSAnT1BUSU9OJyB8fCB0YWcgPT09ICdPUFRHUk9VUCcpICYmIHRoaXMuZWwucGFyZW50Tm9kZS50YWdOYW1lID09PSAnU0VMRUNUJztcblxuICAgIC8vIHNldHVwIGFuY2hvciBub2Rlc1xuICAgIHRoaXMuc3RhcnQgPSBjcmVhdGVBbmNob3IoJ3YtZm9yLXN0YXJ0Jyk7XG4gICAgdGhpcy5lbmQgPSBjcmVhdGVBbmNob3IoJ3YtZm9yLWVuZCcpO1xuICAgIHJlcGxhY2UodGhpcy5lbCwgdGhpcy5lbmQpO1xuICAgIGJlZm9yZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCk7XG5cbiAgICAvLyBjYWNoZVxuICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgLy8gZnJhZ21lbnQgZmFjdG9yeVxuICAgIHRoaXMuZmFjdG9yeSA9IG5ldyBGcmFnbWVudEZhY3RvcnkodGhpcy52bSwgdGhpcy5lbCk7XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZGF0YSkge1xuICAgIHRoaXMuZGlmZihkYXRhKTtcbiAgICB0aGlzLnVwZGF0ZVJlZigpO1xuICAgIHRoaXMudXBkYXRlTW9kZWwoKTtcbiAgfSxcblxuICAvKipcbiAgICogRGlmZiwgYmFzZWQgb24gbmV3IGRhdGEgYW5kIG9sZCBkYXRhLCBkZXRlcm1pbmUgdGhlXG4gICAqIG1pbmltdW0gYW1vdW50IG9mIERPTSBtYW5pcHVsYXRpb25zIG5lZWRlZCB0byBtYWtlIHRoZVxuICAgKiBET00gcmVmbGVjdCB0aGUgbmV3IGRhdGEgQXJyYXkuXG4gICAqXG4gICAqIFRoZSBhbGdvcml0aG0gZGlmZnMgdGhlIG5ldyBkYXRhIEFycmF5IGJ5IHN0b3JpbmcgYVxuICAgKiBoaWRkZW4gcmVmZXJlbmNlIHRvIGFuIG93bmVyIHZtIGluc3RhbmNlIG9uIHByZXZpb3VzbHlcbiAgICogc2VlbiBkYXRhLiBUaGlzIGFsbG93cyB1cyB0byBhY2hpZXZlIE8obikgd2hpY2ggaXNcbiAgICogYmV0dGVyIHRoYW4gYSBsZXZlbnNodGVpbiBkaXN0YW5jZSBiYXNlZCBhbGdvcml0aG0sXG4gICAqIHdoaWNoIGlzIE8obSAqIG4pLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhXG4gICAqL1xuXG4gIGRpZmY6IGZ1bmN0aW9uIGRpZmYoZGF0YSkge1xuICAgIC8vIGNoZWNrIGlmIHRoZSBBcnJheSB3YXMgY29udmVydGVkIGZyb20gYW4gT2JqZWN0XG4gICAgdmFyIGl0ZW0gPSBkYXRhWzBdO1xuICAgIHZhciBjb252ZXJ0ZWRGcm9tT2JqZWN0ID0gdGhpcy5mcm9tT2JqZWN0ID0gaXNPYmplY3QoaXRlbSkgJiYgaGFzT3duKGl0ZW0sICcka2V5JykgJiYgaGFzT3duKGl0ZW0sICckdmFsdWUnKTtcblxuICAgIHZhciB0cmFja0J5S2V5ID0gdGhpcy5wYXJhbXMudHJhY2tCeTtcbiAgICB2YXIgb2xkRnJhZ3MgPSB0aGlzLmZyYWdzO1xuICAgIHZhciBmcmFncyA9IHRoaXMuZnJhZ3MgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXM7XG4gICAgdmFyIGl0ZXJhdG9yID0gdGhpcy5pdGVyYXRvcjtcbiAgICB2YXIgc3RhcnQgPSB0aGlzLnN0YXJ0O1xuICAgIHZhciBlbmQgPSB0aGlzLmVuZDtcbiAgICB2YXIgaW5Eb2N1bWVudCA9IGluRG9jKHN0YXJ0KTtcbiAgICB2YXIgaW5pdCA9ICFvbGRGcmFncztcbiAgICB2YXIgaSwgbCwgZnJhZywga2V5LCB2YWx1ZSwgcHJpbWl0aXZlO1xuXG4gICAgLy8gRmlyc3QgcGFzcywgZ28gdGhyb3VnaCB0aGUgbmV3IEFycmF5IGFuZCBmaWxsIHVwXG4gICAgLy8gdGhlIG5ldyBmcmFncyBhcnJheS4gSWYgYSBwaWVjZSBvZiBkYXRhIGhhcyBhIGNhY2hlZFxuICAgIC8vIGluc3RhbmNlIGZvciBpdCwgd2UgcmV1c2UgaXQuIE90aGVyd2lzZSBidWlsZCBhIG5ld1xuICAgIC8vIGluc3RhbmNlLlxuICAgIGZvciAoaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaXRlbSA9IGRhdGFbaV07XG4gICAgICBrZXkgPSBjb252ZXJ0ZWRGcm9tT2JqZWN0ID8gaXRlbS4ka2V5IDogbnVsbDtcbiAgICAgIHZhbHVlID0gY29udmVydGVkRnJvbU9iamVjdCA/IGl0ZW0uJHZhbHVlIDogaXRlbTtcbiAgICAgIHByaW1pdGl2ZSA9ICFpc09iamVjdCh2YWx1ZSk7XG4gICAgICBmcmFnID0gIWluaXQgJiYgdGhpcy5nZXRDYWNoZWRGcmFnKHZhbHVlLCBpLCBrZXkpO1xuICAgICAgaWYgKGZyYWcpIHtcbiAgICAgICAgLy8gcmV1c2FibGUgZnJhZ21lbnRcbiAgICAgICAgZnJhZy5yZXVzZWQgPSB0cnVlO1xuICAgICAgICAvLyB1cGRhdGUgJGluZGV4XG4gICAgICAgIGZyYWcuc2NvcGUuJGluZGV4ID0gaTtcbiAgICAgICAgLy8gdXBkYXRlICRrZXlcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIGZyYWcuc2NvcGUuJGtleSA9IGtleTtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cGRhdGUgaXRlcmF0b3JcbiAgICAgICAgaWYgKGl0ZXJhdG9yKSB7XG4gICAgICAgICAgZnJhZy5zY29wZVtpdGVyYXRvcl0gPSBrZXkgIT09IG51bGwgPyBrZXkgOiBpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBkYXRhIGZvciB0cmFjay1ieSwgb2JqZWN0IHJlcGVhdCAmXG4gICAgICAgIC8vIHByaW1pdGl2ZSB2YWx1ZXMuXG4gICAgICAgIGlmICh0cmFja0J5S2V5IHx8IGNvbnZlcnRlZEZyb21PYmplY3QgfHwgcHJpbWl0aXZlKSB7XG4gICAgICAgICAgZnJhZy5zY29wZVthbGlhc10gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbmV3IGlzbnRhbmNlXG4gICAgICAgIGZyYWcgPSB0aGlzLmNyZWF0ZSh2YWx1ZSwgYWxpYXMsIGksIGtleSk7XG4gICAgICAgIGZyYWcuZnJlc2ggPSAhaW5pdDtcbiAgICAgIH1cbiAgICAgIGZyYWdzW2ldID0gZnJhZztcbiAgICAgIGlmIChpbml0KSB7XG4gICAgICAgIGZyYWcuYmVmb3JlKGVuZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gd2UncmUgZG9uZSBmb3IgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgIGlmIChpbml0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU2Vjb25kIHBhc3MsIGdvIHRocm91Z2ggdGhlIG9sZCBmcmFnbWVudHMgYW5kXG4gICAgLy8gZGVzdHJveSB0aG9zZSB3aG8gYXJlIG5vdCByZXVzZWQgKGFuZCByZW1vdmUgdGhlbVxuICAgIC8vIGZyb20gY2FjaGUpXG4gICAgdmFyIHJlbW92YWxJbmRleCA9IDA7XG4gICAgdmFyIHRvdGFsUmVtb3ZlZCA9IG9sZEZyYWdzLmxlbmd0aCAtIGZyYWdzLmxlbmd0aDtcbiAgICAvLyB3aGVuIHJlbW92aW5nIGEgbGFyZ2UgbnVtYmVyIG9mIGZyYWdtZW50cywgd2F0Y2hlciByZW1vdmFsXG4gICAgLy8gdHVybnMgb3V0IHRvIGJlIGEgcGVyZiBib3R0bGVuZWNrLCBzbyB3ZSBiYXRjaCB0aGUgd2F0Y2hlclxuICAgIC8vIHJlbW92YWxzIGludG8gYSBzaW5nbGUgZmlsdGVyIGNhbGwhXG4gICAgdGhpcy52bS5fdkZvclJlbW92aW5nID0gdHJ1ZTtcbiAgICBmb3IgKGkgPSAwLCBsID0gb2xkRnJhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmcmFnID0gb2xkRnJhZ3NbaV07XG4gICAgICBpZiAoIWZyYWcucmV1c2VkKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlQ2FjaGVkRnJhZyhmcmFnKTtcbiAgICAgICAgdGhpcy5yZW1vdmUoZnJhZywgcmVtb3ZhbEluZGV4KyssIHRvdGFsUmVtb3ZlZCwgaW5Eb2N1bWVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudm0uX3ZGb3JSZW1vdmluZyA9IGZhbHNlO1xuICAgIGlmIChyZW1vdmFsSW5kZXgpIHtcbiAgICAgIHRoaXMudm0uX3dhdGNoZXJzID0gdGhpcy52bS5fd2F0Y2hlcnMuZmlsdGVyKGZ1bmN0aW9uICh3KSB7XG4gICAgICAgIHJldHVybiB3LmFjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZpbmFsIHBhc3MsIG1vdmUvaW5zZXJ0IG5ldyBmcmFnbWVudHMgaW50byB0aGVcbiAgICAvLyByaWdodCBwbGFjZS5cbiAgICB2YXIgdGFyZ2V0UHJldiwgcHJldkVsLCBjdXJyZW50UHJldjtcbiAgICB2YXIgaW5zZXJ0aW9uSW5kZXggPSAwO1xuICAgIGZvciAoaSA9IDAsIGwgPSBmcmFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZyYWcgPSBmcmFnc1tpXTtcbiAgICAgIC8vIHRoaXMgaXMgdGhlIGZyYWcgdGhhdCB3ZSBzaG91bGQgYmUgYWZ0ZXJcbiAgICAgIHRhcmdldFByZXYgPSBmcmFnc1tpIC0gMV07XG4gICAgICBwcmV2RWwgPSB0YXJnZXRQcmV2ID8gdGFyZ2V0UHJldi5zdGFnZ2VyQ2IgPyB0YXJnZXRQcmV2LnN0YWdnZXJBbmNob3IgOiB0YXJnZXRQcmV2LmVuZCB8fCB0YXJnZXRQcmV2Lm5vZGUgOiBzdGFydDtcbiAgICAgIGlmIChmcmFnLnJldXNlZCAmJiAhZnJhZy5zdGFnZ2VyQ2IpIHtcbiAgICAgICAgY3VycmVudFByZXYgPSBmaW5kUHJldkZyYWcoZnJhZywgc3RhcnQsIHRoaXMuaWQpO1xuICAgICAgICBpZiAoY3VycmVudFByZXYgIT09IHRhcmdldFByZXYgJiYgKCFjdXJyZW50UHJldiB8fFxuICAgICAgICAvLyBvcHRpbWl6YXRpb24gZm9yIG1vdmluZyBhIHNpbmdsZSBpdGVtLlxuICAgICAgICAvLyB0aGFua3MgdG8gc3VnZ2VzdGlvbnMgYnkgQGxpdm9yYXMgaW4gIzE4MDdcbiAgICAgICAgZmluZFByZXZGcmFnKGN1cnJlbnRQcmV2LCBzdGFydCwgdGhpcy5pZCkgIT09IHRhcmdldFByZXYpKSB7XG4gICAgICAgICAgdGhpcy5tb3ZlKGZyYWcsIHByZXZFbCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5ldyBpbnN0YW5jZSwgb3Igc3RpbGwgaW4gc3RhZ2dlci5cbiAgICAgICAgLy8gaW5zZXJ0IHdpdGggdXBkYXRlZCBzdGFnZ2VyIGluZGV4LlxuICAgICAgICB0aGlzLmluc2VydChmcmFnLCBpbnNlcnRpb25JbmRleCsrLCBwcmV2RWwsIGluRG9jdW1lbnQpO1xuICAgICAgfVxuICAgICAgZnJhZy5yZXVzZWQgPSBmcmFnLmZyZXNoID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgZnJhZ21lbnQgaW5zdGFuY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFsaWFzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV1cbiAgICogQHJldHVybiB7RnJhZ21lbnR9XG4gICAqL1xuXG4gIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKHZhbHVlLCBhbGlhcywgaW5kZXgsIGtleSkge1xuICAgIHZhciBob3N0ID0gdGhpcy5faG9zdDtcbiAgICAvLyBjcmVhdGUgaXRlcmF0aW9uIHNjb3BlXG4gICAgdmFyIHBhcmVudFNjb3BlID0gdGhpcy5fc2NvcGUgfHwgdGhpcy52bTtcbiAgICB2YXIgc2NvcGUgPSBPYmplY3QuY3JlYXRlKHBhcmVudFNjb3BlKTtcbiAgICAvLyByZWYgaG9sZGVyIGZvciB0aGUgc2NvcGVcbiAgICBzY29wZS4kcmVmcyA9IE9iamVjdC5jcmVhdGUocGFyZW50U2NvcGUuJHJlZnMpO1xuICAgIHNjb3BlLiRlbHMgPSBPYmplY3QuY3JlYXRlKHBhcmVudFNjb3BlLiRlbHMpO1xuICAgIC8vIG1ha2Ugc3VyZSBwb2ludCAkcGFyZW50IHRvIHBhcmVudCBzY29wZVxuICAgIHNjb3BlLiRwYXJlbnQgPSBwYXJlbnRTY29wZTtcbiAgICAvLyBmb3IgdHdvLXdheSBiaW5kaW5nIG9uIGFsaWFzXG4gICAgc2NvcGUuJGZvckNvbnRleHQgPSB0aGlzO1xuICAgIC8vIGRlZmluZSBzY29wZSBwcm9wZXJ0aWVzXG4gICAgZGVmaW5lUmVhY3RpdmUoc2NvcGUsIGFsaWFzLCB2YWx1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUoc2NvcGUsICckaW5kZXgnLCBpbmRleCk7XG4gICAgaWYgKGtleSkge1xuICAgICAgZGVmaW5lUmVhY3RpdmUoc2NvcGUsICcka2V5Jywga2V5KTtcbiAgICB9IGVsc2UgaWYgKHNjb3BlLiRrZXkpIHtcbiAgICAgIC8vIGF2b2lkIGFjY2lkZW50YWwgZmFsbGJhY2tcbiAgICAgIGRlZihzY29wZSwgJyRrZXknLCBudWxsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXRlcmF0b3IpIHtcbiAgICAgIGRlZmluZVJlYWN0aXZlKHNjb3BlLCB0aGlzLml0ZXJhdG9yLCBrZXkgIT09IG51bGwgPyBrZXkgOiBpbmRleCk7XG4gICAgfVxuICAgIHZhciBmcmFnID0gdGhpcy5mYWN0b3J5LmNyZWF0ZShob3N0LCBzY29wZSwgdGhpcy5fZnJhZyk7XG4gICAgZnJhZy5mb3JJZCA9IHRoaXMuaWQ7XG4gICAgdGhpcy5jYWNoZUZyYWcodmFsdWUsIGZyYWcsIGluZGV4LCBrZXkpO1xuICAgIHJldHVybiBmcmFnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIHYtcmVmIG9uIG93bmVyIHZtLlxuICAgKi9cblxuICB1cGRhdGVSZWY6IGZ1bmN0aW9uIHVwZGF0ZVJlZigpIHtcbiAgICB2YXIgcmVmID0gdGhpcy5kZXNjcmlwdG9yLnJlZjtcbiAgICBpZiAoIXJlZikgcmV0dXJuO1xuICAgIHZhciBoYXNoID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiRyZWZzO1xuICAgIHZhciByZWZzO1xuICAgIGlmICghdGhpcy5mcm9tT2JqZWN0KSB7XG4gICAgICByZWZzID0gdGhpcy5mcmFncy5tYXAoZmluZFZtRnJvbUZyYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWZzID0ge307XG4gICAgICB0aGlzLmZyYWdzLmZvckVhY2goZnVuY3Rpb24gKGZyYWcpIHtcbiAgICAgICAgcmVmc1tmcmFnLnNjb3BlLiRrZXldID0gZmluZFZtRnJvbUZyYWcoZnJhZyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaGFzaFtyZWZdID0gcmVmcztcbiAgfSxcblxuICAvKipcbiAgICogRm9yIG9wdGlvbiBsaXN0cywgdXBkYXRlIHRoZSBjb250YWluaW5nIHYtbW9kZWwgb25cbiAgICogcGFyZW50IDxzZWxlY3Q+LlxuICAgKi9cblxuICB1cGRhdGVNb2RlbDogZnVuY3Rpb24gdXBkYXRlTW9kZWwoKSB7XG4gICAgaWYgKHRoaXMuaXNPcHRpb24pIHtcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnN0YXJ0LnBhcmVudE5vZGU7XG4gICAgICB2YXIgbW9kZWwgPSBwYXJlbnQgJiYgcGFyZW50Ll9fdl9tb2RlbDtcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBtb2RlbC5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5zZXJ0IGEgZnJhZ21lbnQuIEhhbmRsZXMgc3RhZ2dlcmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtOb2RlfSBwcmV2RWxcbiAgICogQHBhcmFtIHtCb29sZWFufSBpbkRvY3VtZW50XG4gICAqL1xuXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0KGZyYWcsIGluZGV4LCBwcmV2RWwsIGluRG9jdW1lbnQpIHtcbiAgICBpZiAoZnJhZy5zdGFnZ2VyQ2IpIHtcbiAgICAgIGZyYWcuc3RhZ2dlckNiLmNhbmNlbCgpO1xuICAgICAgZnJhZy5zdGFnZ2VyQ2IgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgc3RhZ2dlckFtb3VudCA9IHRoaXMuZ2V0U3RhZ2dlcihmcmFnLCBpbmRleCwgbnVsbCwgJ2VudGVyJyk7XG4gICAgaWYgKGluRG9jdW1lbnQgJiYgc3RhZ2dlckFtb3VudCkge1xuICAgICAgLy8gY3JlYXRlIGFuIGFuY2hvciBhbmQgaW5zZXJ0IGl0IHN5bmNocm9ub3VzbHksXG4gICAgICAvLyBzbyB0aGF0IHdlIGNhbiByZXNvbHZlIHRoZSBjb3JyZWN0IG9yZGVyIHdpdGhvdXRcbiAgICAgIC8vIHdvcnJ5aW5nIGFib3V0IHNvbWUgZWxlbWVudHMgbm90IGluc2VydGVkIHlldFxuICAgICAgdmFyIGFuY2hvciA9IGZyYWcuc3RhZ2dlckFuY2hvcjtcbiAgICAgIGlmICghYW5jaG9yKSB7XG4gICAgICAgIGFuY2hvciA9IGZyYWcuc3RhZ2dlckFuY2hvciA9IGNyZWF0ZUFuY2hvcignc3RhZ2dlci1hbmNob3InKTtcbiAgICAgICAgYW5jaG9yLl9fdl9mcmFnID0gZnJhZztcbiAgICAgIH1cbiAgICAgIGFmdGVyKGFuY2hvciwgcHJldkVsKTtcbiAgICAgIHZhciBvcCA9IGZyYWcuc3RhZ2dlckNiID0gY2FuY2VsbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBmcmFnLnN0YWdnZXJDYiA9IG51bGw7XG4gICAgICAgIGZyYWcuYmVmb3JlKGFuY2hvcik7XG4gICAgICAgIHJlbW92ZShhbmNob3IpO1xuICAgICAgfSk7XG4gICAgICBzZXRUaW1lb3V0KG9wLCBzdGFnZ2VyQW1vdW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJhZy5iZWZvcmUocHJldkVsLm5leHRTaWJsaW5nKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGZyYWdtZW50LiBIYW5kbGVzIHN0YWdnZXJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGluRG9jdW1lbnRcbiAgICovXG5cbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoZnJhZywgaW5kZXgsIHRvdGFsLCBpbkRvY3VtZW50KSB7XG4gICAgaWYgKGZyYWcuc3RhZ2dlckNiKSB7XG4gICAgICBmcmFnLnN0YWdnZXJDYi5jYW5jZWwoKTtcbiAgICAgIGZyYWcuc3RhZ2dlckNiID0gbnVsbDtcbiAgICAgIC8vIGl0J3Mgbm90IHBvc3NpYmxlIGZvciB0aGUgc2FtZSBmcmFnIHRvIGJlIHJlbW92ZWRcbiAgICAgIC8vIHR3aWNlLCBzbyBpZiB3ZSBoYXZlIGEgcGVuZGluZyBzdGFnZ2VyIGNhbGxiYWNrLFxuICAgICAgLy8gaXQgbWVhbnMgdGhpcyBmcmFnIGlzIHF1ZXVlZCBmb3IgZW50ZXIgYnV0IHJlbW92ZWRcbiAgICAgIC8vIGJlZm9yZSBpdHMgdHJhbnNpdGlvbiBzdGFydGVkLiBTaW5jZSBpdCBpcyBhbHJlYWR5XG4gICAgICAvLyBkZXN0cm95ZWQsIHdlIGNhbiBqdXN0IGxlYXZlIGl0IGluIGRldGFjaGVkIHN0YXRlLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3RhZ2dlckFtb3VudCA9IHRoaXMuZ2V0U3RhZ2dlcihmcmFnLCBpbmRleCwgdG90YWwsICdsZWF2ZScpO1xuICAgIGlmIChpbkRvY3VtZW50ICYmIHN0YWdnZXJBbW91bnQpIHtcbiAgICAgIHZhciBvcCA9IGZyYWcuc3RhZ2dlckNiID0gY2FuY2VsbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBmcmFnLnN0YWdnZXJDYiA9IG51bGw7XG4gICAgICAgIGZyYWcucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIHNldFRpbWVvdXQob3AsIHN0YWdnZXJBbW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogTW92ZSBhIGZyYWdtZW50IHRvIGEgbmV3IHBvc2l0aW9uLlxuICAgKiBGb3JjZSBubyB0cmFuc2l0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZyYWdtZW50fSBmcmFnXG4gICAqIEBwYXJhbSB7Tm9kZX0gcHJldkVsXG4gICAqL1xuXG4gIG1vdmU6IGZ1bmN0aW9uIG1vdmUoZnJhZywgcHJldkVsKSB7XG4gICAgLy8gZml4IGEgY29tbW9uIGlzc3VlIHdpdGggU29ydGFibGU6XG4gICAgLy8gaWYgcHJldkVsIGRvZXNuJ3QgaGF2ZSBuZXh0U2libGluZywgdGhpcyBtZWFucyBpdCdzXG4gICAgLy8gYmVlbiBkcmFnZ2VkIGFmdGVyIHRoZSBlbmQgYW5jaG9yLiBKdXN0IHJlLXBvc2l0aW9uXG4gICAgLy8gdGhlIGVuZCBhbmNob3IgdG8gdGhlIGVuZCBvZiB0aGUgY29udGFpbmVyLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghcHJldkVsLm5leHRTaWJsaW5nKSB7XG4gICAgICB0aGlzLmVuZC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMuZW5kKTtcbiAgICB9XG4gICAgZnJhZy5iZWZvcmUocHJldkVsLm5leHRTaWJsaW5nLCBmYWxzZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhY2hlIGEgZnJhZ21lbnQgdXNpbmcgdHJhY2stYnkgb3IgdGhlIG9iamVjdCBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldXG4gICAqL1xuXG4gIGNhY2hlRnJhZzogZnVuY3Rpb24gY2FjaGVGcmFnKHZhbHVlLCBmcmFnLCBpbmRleCwga2V5KSB7XG4gICAgdmFyIHRyYWNrQnlLZXkgPSB0aGlzLnBhcmFtcy50cmFja0J5O1xuICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG4gICAgdmFyIHByaW1pdGl2ZSA9ICFpc09iamVjdCh2YWx1ZSk7XG4gICAgdmFyIGlkO1xuICAgIGlmIChrZXkgfHwgdHJhY2tCeUtleSB8fCBwcmltaXRpdmUpIHtcbiAgICAgIGlkID0gdHJhY2tCeUtleSA/IHRyYWNrQnlLZXkgPT09ICckaW5kZXgnID8gaW5kZXggOiB2YWx1ZVt0cmFja0J5S2V5XSA6IGtleSB8fCB2YWx1ZTtcbiAgICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICAgIGNhY2hlW2lkXSA9IGZyYWc7XG4gICAgICB9IGVsc2UgaWYgKHRyYWNrQnlLZXkgIT09ICckaW5kZXgnKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy53YXJuRHVwbGljYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSB0aGlzLmlkO1xuICAgICAgaWYgKGhhc093bih2YWx1ZSwgaWQpKSB7XG4gICAgICAgIGlmICh2YWx1ZVtpZF0gPT09IG51bGwpIHtcbiAgICAgICAgICB2YWx1ZVtpZF0gPSBmcmFnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy53YXJuRHVwbGljYXRlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmKHZhbHVlLCBpZCwgZnJhZyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZyYWcucmF3ID0gdmFsdWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBhIGNhY2hlZCBmcmFnbWVudCBmcm9tIHRoZSB2YWx1ZS9pbmRleC9rZXlcbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgKiBAcmV0dXJuIHtGcmFnbWVudH1cbiAgICovXG5cbiAgZ2V0Q2FjaGVkRnJhZzogZnVuY3Rpb24gZ2V0Q2FjaGVkRnJhZyh2YWx1ZSwgaW5kZXgsIGtleSkge1xuICAgIHZhciB0cmFja0J5S2V5ID0gdGhpcy5wYXJhbXMudHJhY2tCeTtcbiAgICB2YXIgcHJpbWl0aXZlID0gIWlzT2JqZWN0KHZhbHVlKTtcbiAgICB2YXIgZnJhZztcbiAgICBpZiAoa2V5IHx8IHRyYWNrQnlLZXkgfHwgcHJpbWl0aXZlKSB7XG4gICAgICB2YXIgaWQgPSB0cmFja0J5S2V5ID8gdHJhY2tCeUtleSA9PT0gJyRpbmRleCcgPyBpbmRleCA6IHZhbHVlW3RyYWNrQnlLZXldIDoga2V5IHx8IHZhbHVlO1xuICAgICAgZnJhZyA9IHRoaXMuY2FjaGVbaWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICBmcmFnID0gdmFsdWVbdGhpcy5pZF07XG4gICAgfVxuICAgIGlmIChmcmFnICYmIChmcmFnLnJldXNlZCB8fCBmcmFnLmZyZXNoKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLndhcm5EdXBsaWNhdGUodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZztcbiAgfSxcblxuICAvKipcbiAgICogRGVsZXRlIGEgZnJhZ21lbnQgZnJvbSBjYWNoZS5cbiAgICpcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gZnJhZ1xuICAgKi9cblxuICBkZWxldGVDYWNoZWRGcmFnOiBmdW5jdGlvbiBkZWxldGVDYWNoZWRGcmFnKGZyYWcpIHtcbiAgICB2YXIgdmFsdWUgPSBmcmFnLnJhdztcbiAgICB2YXIgdHJhY2tCeUtleSA9IHRoaXMucGFyYW1zLnRyYWNrQnk7XG4gICAgdmFyIHNjb3BlID0gZnJhZy5zY29wZTtcbiAgICB2YXIgaW5kZXggPSBzY29wZS4kaW5kZXg7XG4gICAgLy8gZml4ICM5NDg6IGF2b2lkIGFjY2lkZW50YWxseSBmYWxsIHRocm91Z2ggdG9cbiAgICAvLyBhIHBhcmVudCByZXBlYXRlciB3aGljaCBoYXBwZW5zIHRvIGhhdmUgJGtleS5cbiAgICB2YXIga2V5ID0gaGFzT3duKHNjb3BlLCAnJGtleScpICYmIHNjb3BlLiRrZXk7XG4gICAgdmFyIHByaW1pdGl2ZSA9ICFpc09iamVjdCh2YWx1ZSk7XG4gICAgaWYgKHRyYWNrQnlLZXkgfHwga2V5IHx8IHByaW1pdGl2ZSkge1xuICAgICAgdmFyIGlkID0gdHJhY2tCeUtleSA/IHRyYWNrQnlLZXkgPT09ICckaW5kZXgnID8gaW5kZXggOiB2YWx1ZVt0cmFja0J5S2V5XSA6IGtleSB8fCB2YWx1ZTtcbiAgICAgIHRoaXMuY2FjaGVbaWRdID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWVbdGhpcy5pZF0gPSBudWxsO1xuICAgICAgZnJhZy5yYXcgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2V0IHRoZSBzdGFnZ2VyIGFtb3VudCBmb3IgYW4gaW5zZXJ0aW9uL3JlbW92YWwuXG4gICAqXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB0b3RhbFxuICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgKi9cblxuICBnZXRTdGFnZ2VyOiBmdW5jdGlvbiBnZXRTdGFnZ2VyKGZyYWcsIGluZGV4LCB0b3RhbCwgdHlwZSkge1xuICAgIHR5cGUgPSB0eXBlICsgJ1N0YWdnZXInO1xuICAgIHZhciB0cmFucyA9IGZyYWcubm9kZS5fX3ZfdHJhbnM7XG4gICAgdmFyIGhvb2tzID0gdHJhbnMgJiYgdHJhbnMuaG9va3M7XG4gICAgdmFyIGhvb2sgPSBob29rcyAmJiAoaG9va3NbdHlwZV0gfHwgaG9va3Muc3RhZ2dlcik7XG4gICAgcmV0dXJuIGhvb2sgPyBob29rLmNhbGwoZnJhZywgaW5kZXgsIHRvdGFsKSA6IGluZGV4ICogcGFyc2VJbnQodGhpcy5wYXJhbXNbdHlwZV0gfHwgdGhpcy5wYXJhbXMuc3RhZ2dlciwgMTApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBQcmUtcHJvY2VzcyB0aGUgdmFsdWUgYmVmb3JlIHBpcGluZyBpdCB0aHJvdWdoIHRoZVxuICAgKiBmaWx0ZXJzLiBUaGlzIGlzIHBhc3NlZCB0byBhbmQgY2FsbGVkIGJ5IHRoZSB3YXRjaGVyLlxuICAgKi9cblxuICBfcHJlUHJvY2VzczogZnVuY3Rpb24gX3ByZVByb2Nlc3ModmFsdWUpIHtcbiAgICAvLyByZWdhcmRsZXNzIG9mIHR5cGUsIHN0b3JlIHRoZSB1bi1maWx0ZXJlZCByYXcgdmFsdWUuXG4gICAgdGhpcy5yYXdWYWx1ZSA9IHZhbHVlO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogUG9zdC1wcm9jZXNzIHRoZSB2YWx1ZSBhZnRlciBpdCBoYXMgYmVlbiBwaXBlZCB0aHJvdWdoXG4gICAqIHRoZSBmaWx0ZXJzLiBUaGlzIGlzIHBhc3NlZCB0byBhbmQgY2FsbGVkIGJ5IHRoZSB3YXRjaGVyLlxuICAgKlxuICAgKiBJdCBpcyBuZWNlc3NhcnkgZm9yIHRoaXMgdG8gYmUgY2FsbGVkIGR1cmluZyB0aGVcbiAgICogd2F0aGNlcidzIGRlcGVuZGVuY3kgY29sbGVjdGlvbiBwaGFzZSBiZWNhdXNlIHdlIHdhbnRcbiAgICogdGhlIHYtZm9yIHRvIHVwZGF0ZSB3aGVuIHRoZSBzb3VyY2UgT2JqZWN0IGlzIG11dGF0ZWQuXG4gICAqL1xuXG4gIF9wb3N0UHJvY2VzczogZnVuY3Rpb24gX3Bvc3RQcm9jZXNzKHZhbHVlKSB7XG4gICAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgLy8gY29udmVydCBwbGFpbiBvYmplY3QgdG8gYXJyYXkuXG4gICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICAgIHZhciBpID0ga2V5cy5sZW5ndGg7XG4gICAgICB2YXIgcmVzID0gbmV3IEFycmF5KGkpO1xuICAgICAgdmFyIGtleTtcbiAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmVzW2ldID0ge1xuICAgICAgICAgICRrZXk6IGtleSxcbiAgICAgICAgICAkdmFsdWU6IHZhbHVlW2tleV1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmICFpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSByYW5nZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsdWUgfHwgW107XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIGlmICh0aGlzLmRlc2NyaXB0b3IucmVmKSB7XG4gICAgICAodGhpcy5fc2NvcGUgfHwgdGhpcy52bSkuJHJlZnNbdGhpcy5kZXNjcmlwdG9yLnJlZl0gPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFncykge1xuICAgICAgdmFyIGkgPSB0aGlzLmZyYWdzLmxlbmd0aDtcbiAgICAgIHZhciBmcmFnO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBmcmFnID0gdGhpcy5mcmFnc1tpXTtcbiAgICAgICAgdGhpcy5kZWxldGVDYWNoZWRGcmFnKGZyYWcpO1xuICAgICAgICBmcmFnLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogSGVscGVyIHRvIGZpbmQgdGhlIHByZXZpb3VzIGVsZW1lbnQgdGhhdCBpcyBhIGZyYWdtZW50XG4gKiBhbmNob3IuIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgYSBkZXN0cm95ZWQgZnJhZydzXG4gKiBlbGVtZW50IGNvdWxkIHN0aWxsIGJlIGxpbmdlcmluZyBpbiB0aGUgRE9NIGJlZm9yZSBpdHNcbiAqIGxlYXZpbmcgdHJhbnNpdGlvbiBmaW5pc2hlcywgYnV0IGl0cyBpbnNlcnRlZCBmbGFnXG4gKiBzaG91bGQgaGF2ZSBiZWVuIHNldCB0byBmYWxzZSBzbyB3ZSBjYW4gc2tpcCB0aGVtLlxuICpcbiAqIElmIHRoaXMgaXMgYSBibG9jayByZXBlYXQsIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIG9ubHlcbiAqIHJldHVybiBmcmFnIHRoYXQgaXMgYm91bmQgdG8gdGhpcyB2LWZvci4gKHNlZSAjOTI5KVxuICpcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAqIEBwYXJhbSB7Q29tbWVudHxUZXh0fSBhbmNob3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybiB7RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gZmluZFByZXZGcmFnKGZyYWcsIGFuY2hvciwgaWQpIHtcbiAgdmFyIGVsID0gZnJhZy5ub2RlLnByZXZpb3VzU2libGluZztcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICghZWwpIHJldHVybjtcbiAgZnJhZyA9IGVsLl9fdl9mcmFnO1xuICB3aGlsZSAoKCFmcmFnIHx8IGZyYWcuZm9ySWQgIT09IGlkIHx8ICFmcmFnLmluc2VydGVkKSAmJiBlbCAhPT0gYW5jaG9yKSB7XG4gICAgZWwgPSBlbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGZyYWcgPSBlbC5fX3ZfZnJhZztcbiAgfVxuICByZXR1cm4gZnJhZztcbn1cblxuLyoqXG4gKiBGaW5kIGEgdm0gZnJvbSBhIGZyYWdtZW50LlxuICpcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IGZyYWdcbiAqIEByZXR1cm4ge1Z1ZXx1bmRlZmluZWR9XG4gKi9cblxuZnVuY3Rpb24gZmluZFZtRnJvbUZyYWcoZnJhZykge1xuICB2YXIgbm9kZSA9IGZyYWcubm9kZTtcbiAgLy8gaGFuZGxlIG11bHRpLW5vZGUgZnJhZ1xuICBpZiAoZnJhZy5lbmQpIHtcbiAgICB3aGlsZSAoIW5vZGUuX192dWVfXyAmJiBub2RlICE9PSBmcmFnLmVuZCAmJiBub2RlLm5leHRTaWJsaW5nKSB7XG4gICAgICBub2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5vZGUuX192dWVfXztcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByYW5nZSBhcnJheSBmcm9tIGdpdmVuIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gcmFuZ2Uobikge1xuICB2YXIgaSA9IC0xO1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KE1hdGguZmxvb3IobikpO1xuICB3aGlsZSAoKytpIDwgbikge1xuICAgIHJldFtpXSA9IGk7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdkZvci53YXJuRHVwbGljYXRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgd2FybignRHVwbGljYXRlIHZhbHVlIGZvdW5kIGluIHYtZm9yPVwiJyArIHRoaXMuZGVzY3JpcHRvci5yYXcgKyAnXCI6ICcgKyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgKyAnLiBVc2UgdHJhY2stYnk9XCIkaW5kZXhcIiBpZiAnICsgJ3lvdSBhcmUgZXhwZWN0aW5nIGR1cGxpY2F0ZSB2YWx1ZXMuJyk7XG4gIH07XG59XG5cbnZhciB2SWYgPSB7XG5cbiAgcHJpb3JpdHk6IElGLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBpZiAoIWVsLl9fdnVlX18pIHtcbiAgICAgIC8vIGNoZWNrIGVsc2UgYmxvY2tcbiAgICAgIHZhciBuZXh0ID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKG5leHQgJiYgZ2V0QXR0cihuZXh0LCAndi1lbHNlJykgIT09IG51bGwpIHtcbiAgICAgICAgcmVtb3ZlKG5leHQpO1xuICAgICAgICB0aGlzLmVsc2VGYWN0b3J5ID0gbmV3IEZyYWdtZW50RmFjdG9yeShuZXh0Ll9jb250ZXh0IHx8IHRoaXMudm0sIG5leHQpO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgbWFpbiBibG9ja1xuICAgICAgdGhpcy5hbmNob3IgPSBjcmVhdGVBbmNob3IoJ3YtaWYnKTtcbiAgICAgIHJlcGxhY2UoZWwsIHRoaXMuYW5jaG9yKTtcbiAgICAgIHRoaXMuZmFjdG9yeSA9IG5ldyBGcmFnbWVudEZhY3RvcnkodGhpcy52bSwgZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ3YtaWY9XCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiIGNhbm5vdCBiZSAnICsgJ3VzZWQgb24gYW4gaW5zdGFuY2Ugcm9vdCBlbGVtZW50LicpO1xuICAgICAgdGhpcy5pbnZhbGlkID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUodmFsdWUpIHtcbiAgICBpZiAodGhpcy5pbnZhbGlkKSByZXR1cm47XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIXRoaXMuZnJhZykge1xuICAgICAgICB0aGlzLmluc2VydCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH1cbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydCgpIHtcbiAgICBpZiAodGhpcy5lbHNlRnJhZykge1xuICAgICAgdGhpcy5lbHNlRnJhZy5yZW1vdmUoKTtcbiAgICAgIHRoaXMuZWxzZUZyYWcgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmZyYWcgPSB0aGlzLmZhY3RvcnkuY3JlYXRlKHRoaXMuX2hvc3QsIHRoaXMuX3Njb3BlLCB0aGlzLl9mcmFnKTtcbiAgICB0aGlzLmZyYWcuYmVmb3JlKHRoaXMuYW5jaG9yKTtcbiAgfSxcblxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICBpZiAodGhpcy5mcmFnKSB7XG4gICAgICB0aGlzLmZyYWcucmVtb3ZlKCk7XG4gICAgICB0aGlzLmZyYWcgPSBudWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbHNlRmFjdG9yeSAmJiAhdGhpcy5lbHNlRnJhZykge1xuICAgICAgdGhpcy5lbHNlRnJhZyA9IHRoaXMuZWxzZUZhY3RvcnkuY3JlYXRlKHRoaXMuX2hvc3QsIHRoaXMuX3Njb3BlLCB0aGlzLl9mcmFnKTtcbiAgICAgIHRoaXMuZWxzZUZyYWcuYmVmb3JlKHRoaXMuYW5jaG9yKTtcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgaWYgKHRoaXMuZnJhZykge1xuICAgICAgdGhpcy5mcmFnLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxzZUZyYWcpIHtcbiAgICAgIHRoaXMuZWxzZUZyYWcuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNob3cgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAvLyBjaGVjayBlbHNlIGJsb2NrXG4gICAgdmFyIG5leHQgPSB0aGlzLmVsLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAobmV4dCAmJiBnZXRBdHRyKG5leHQsICd2LWVsc2UnKSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5lbHNlRWwgPSBuZXh0O1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuYXBwbHkodGhpcy5lbCwgdmFsdWUpO1xuICAgIGlmICh0aGlzLmVsc2VFbCkge1xuICAgICAgdGhpcy5hcHBseSh0aGlzLmVsc2VFbCwgIXZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KGVsLCB2YWx1ZSkge1xuICAgIGlmIChpbkRvYyhlbCkpIHtcbiAgICAgIGFwcGx5VHJhbnNpdGlvbihlbCwgdmFsdWUgPyAxIDogLTEsIHRvZ2dsZSwgdGhpcy52bSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZ2dsZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gdmFsdWUgPyAnJyA6ICdub25lJztcbiAgICB9XG4gIH1cbn07XG5cbnZhciB0ZXh0JDIgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICB2YXIgaXNSYW5nZSA9IGVsLnR5cGUgPT09ICdyYW5nZSc7XG4gICAgdmFyIGxhenkgPSB0aGlzLnBhcmFtcy5sYXp5O1xuICAgIHZhciBudW1iZXIgPSB0aGlzLnBhcmFtcy5udW1iZXI7XG4gICAgdmFyIGRlYm91bmNlID0gdGhpcy5wYXJhbXMuZGVib3VuY2U7XG5cbiAgICAvLyBoYW5kbGUgY29tcG9zaXRpb24gZXZlbnRzLlxuICAgIC8vICAgaHR0cDovL2Jsb2cuZXZhbnlvdS5tZS8yMDE0LzAxLzAzL2NvbXBvc2l0aW9uLWV2ZW50L1xuICAgIC8vIHNraXAgdGhpcyBmb3IgQW5kcm9pZCBiZWNhdXNlIGl0IGhhbmRsZXMgY29tcG9zaXRpb25cbiAgICAvLyBldmVudHMgcXVpdGUgZGlmZmVyZW50bHkuIEFuZHJvaWQgZG9lc24ndCB0cmlnZ2VyXG4gICAgLy8gY29tcG9zaXRpb24gZXZlbnRzIGZvciBsYW5ndWFnZSBpbnB1dCBtZXRob2RzIGUuZy5cbiAgICAvLyBDaGluZXNlLCBidXQgaW5zdGVhZCB0cmlnZ2VycyB0aGVtIGZvciBzcGVsbGluZ1xuICAgIC8vIHN1Z2dlc3Rpb25zLi4uIChzZWUgRGlzY3Vzc2lvbi8jMTYyKVxuICAgIHZhciBjb21wb3NpbmcgPSBmYWxzZTtcbiAgICBpZiAoIWlzQW5kcm9pZCAmJiAhaXNSYW5nZSkge1xuICAgICAgdGhpcy5vbignY29tcG9zaXRpb25zdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29tcG9zaW5nID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbignY29tcG9zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbXBvc2luZyA9IGZhbHNlO1xuICAgICAgICAvLyBpbiBJRTExIHRoZSBcImNvbXBvc2l0aW9uZW5kXCIgZXZlbnQgZmlyZXMgQUZURVJcbiAgICAgICAgLy8gdGhlIFwiaW5wdXRcIiBldmVudCwgc28gdGhlIGlucHV0IGhhbmRsZXIgaXMgYmxvY2tlZFxuICAgICAgICAvLyBhdCB0aGUgZW5kLi4uIGhhdmUgdG8gY2FsbCBpdCBoZXJlLlxuICAgICAgICAvL1xuICAgICAgICAvLyAjMTMyNzogaW4gbGF6eSBtb2RlIHRoaXMgaXMgdW5lY2Vzc2FyeS5cbiAgICAgICAgaWYgKCFsYXp5KSB7XG4gICAgICAgICAgc2VsZi5saXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwcmV2ZW50IG1lc3Npbmcgd2l0aCB0aGUgaW5wdXQgd2hlbiB1c2VyIGlzIHR5cGluZyxcbiAgICAvLyBhbmQgZm9yY2UgdXBkYXRlIG9uIGJsdXIuXG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XG4gICAgaWYgKCFpc1JhbmdlICYmICFsYXp5KSB7XG4gICAgICB0aGlzLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5mb2N1c2VkID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBOb3cgYXR0YWNoIHRoZSBtYWluIGxpc3RlbmVyXG4gICAgdGhpcy5saXN0ZW5lciA9IHRoaXMucmF3TGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY29tcG9zaW5nIHx8ICFzZWxmLl9ib3VuZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdmFsID0gbnVtYmVyIHx8IGlzUmFuZ2UgPyB0b051bWJlcihlbC52YWx1ZSkgOiBlbC52YWx1ZTtcbiAgICAgIHNlbGYuc2V0KHZhbCk7XG4gICAgICAvLyBmb3JjZSB1cGRhdGUgb24gbmV4dCB0aWNrIHRvIGF2b2lkIGxvY2sgJiBzYW1lIHZhbHVlXG4gICAgICAvLyBhbHNvIG9ubHkgdXBkYXRlIHdoZW4gdXNlciBpcyBub3QgdHlwaW5nXG4gICAgICBuZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLl9ib3VuZCAmJiAhc2VsZi5mb2N1c2VkKSB7XG4gICAgICAgICAgc2VsZi51cGRhdGUoc2VsZi5fd2F0Y2hlci52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBhcHBseSBkZWJvdW5jZVxuICAgIGlmIChkZWJvdW5jZSkge1xuICAgICAgdGhpcy5saXN0ZW5lciA9IF9kZWJvdW5jZSh0aGlzLmxpc3RlbmVyLCBkZWJvdW5jZSk7XG4gICAgfVxuXG4gICAgLy8gU3VwcG9ydCBqUXVlcnkgZXZlbnRzLCBzaW5jZSBqUXVlcnkudHJpZ2dlcigpIGRvZXNuJ3RcbiAgICAvLyB0cmlnZ2VyIG5hdGl2ZSBldmVudHMgaW4gc29tZSBjYXNlcyBhbmQgc29tZSBwbHVnaW5zXG4gICAgLy8gcmVseSBvbiAkLnRyaWdnZXIoKVxuICAgIC8vXG4gICAgLy8gV2Ugd2FudCB0byBtYWtlIHN1cmUgaWYgYSBsaXN0ZW5lciBpcyBhdHRhY2hlZCB1c2luZ1xuICAgIC8vIGpRdWVyeSwgaXQgaXMgYWxzbyByZW1vdmVkIHdpdGggalF1ZXJ5LCB0aGF0J3Mgd2h5XG4gICAgLy8gd2UgZG8gdGhlIGNoZWNrIGZvciBlYWNoIGRpcmVjdGl2ZSBpbnN0YW5jZSBhbmRcbiAgICAvLyBzdG9yZSB0aGF0IGNoZWNrIHJlc3VsdCBvbiBpdHNlbGYuIFRoaXMgYWxzbyBhbGxvd3NcbiAgICAvLyBlYXNpZXIgdGVzdCBjb3ZlcmFnZSBjb250cm9sIGJ5IHVuc2V0dGluZyB0aGUgZ2xvYmFsXG4gICAgLy8galF1ZXJ5IHZhcmlhYmxlIGluIHRlc3RzLlxuICAgIHRoaXMuaGFzalF1ZXJ5ID0gdHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAodGhpcy5oYXNqUXVlcnkpIHtcbiAgICAgIHZhciBtZXRob2QgPSBqUXVlcnkuZm4ub24gPyAnb24nIDogJ2JpbmQnO1xuICAgICAgalF1ZXJ5KGVsKVttZXRob2RdKCdjaGFuZ2UnLCB0aGlzLnJhd0xpc3RlbmVyKTtcbiAgICAgIGlmICghbGF6eSkge1xuICAgICAgICBqUXVlcnkoZWwpW21ldGhvZF0oJ2lucHV0JywgdGhpcy5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub24oJ2NoYW5nZScsIHRoaXMucmF3TGlzdGVuZXIpO1xuICAgICAgaWYgKCFsYXp5KSB7XG4gICAgICAgIHRoaXMub24oJ2lucHV0JywgdGhpcy5saXN0ZW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSUU5IGRvZXNuJ3QgZmlyZSBpbnB1dCBldmVudCBvbiBiYWNrc3BhY2UvZGVsL2N1dFxuICAgIGlmICghbGF6eSAmJiBpc0lFOSkge1xuICAgICAgdGhpcy5vbignY3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXh0VGljayhzZWxmLmxpc3RlbmVyKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSA0NiB8fCBlLmtleUNvZGUgPT09IDgpIHtcbiAgICAgICAgICBzZWxmLmxpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHNldCBpbml0aWFsIHZhbHVlIGlmIHByZXNlbnRcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCd2YWx1ZScpIHx8IGVsLnRhZ05hbWUgPT09ICdURVhUQVJFQScgJiYgZWwudmFsdWUudHJpbSgpKSB7XG4gICAgICB0aGlzLmFmdGVyQmluZCA9IHRoaXMubGlzdGVuZXI7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHZhbHVlKSB7XG4gICAgdGhpcy5lbC52YWx1ZSA9IF90b1N0cmluZyh2YWx1ZSk7XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICBpZiAodGhpcy5oYXNqUXVlcnkpIHtcbiAgICAgIHZhciBtZXRob2QgPSBqUXVlcnkuZm4ub2ZmID8gJ29mZicgOiAndW5iaW5kJztcbiAgICAgIGpRdWVyeShlbClbbWV0aG9kXSgnY2hhbmdlJywgdGhpcy5saXN0ZW5lcik7XG4gICAgICBqUXVlcnkoZWwpW21ldGhvZF0oJ2lucHV0JywgdGhpcy5saXN0ZW5lcik7XG4gICAgfVxuICB9XG59O1xuXG52YXIgcmFkaW8gPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcblxuICAgIHRoaXMuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyB2YWx1ZSBvdmVyd3JpdGUgdmlhIHYtYmluZDp2YWx1ZVxuICAgICAgaWYgKGVsLmhhc093blByb3BlcnR5KCdfdmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWwuX3ZhbHVlO1xuICAgICAgfVxuICAgICAgdmFyIHZhbCA9IGVsLnZhbHVlO1xuICAgICAgaWYgKHNlbGYucGFyYW1zLm51bWJlcikge1xuICAgICAgICB2YWwgPSB0b051bWJlcih2YWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9O1xuXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuc2V0KHNlbGYuZ2V0VmFsdWUoKSk7XG4gICAgfTtcbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcblxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2NoZWNrZWQnKSkge1xuICAgICAgdGhpcy5hZnRlckJpbmQgPSB0aGlzLmxpc3RlbmVyO1xuICAgIH1cbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuZWwuY2hlY2tlZCA9IGxvb3NlRXF1YWwodmFsdWUsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gIH1cbn07XG5cbnZhciBzZWxlY3QgPSB7XG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcblxuICAgIC8vIG1ldGhvZCB0byBmb3JjZSB1cGRhdGUgRE9NIHVzaW5nIGxhdGVzdCB2YWx1ZS5cbiAgICB0aGlzLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuX3dhdGNoZXIpIHtcbiAgICAgICAgc2VsZi51cGRhdGUoc2VsZi5fd2F0Y2hlci5nZXQoKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIGNoZWNrIGlmIHRoaXMgaXMgYSBtdWx0aXBsZSBzZWxlY3RcbiAgICB2YXIgbXVsdGlwbGUgPSB0aGlzLm11bHRpcGxlID0gZWwuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpO1xuXG4gICAgLy8gYXR0YWNoIGxpc3RlbmVyXG4gICAgdGhpcy5saXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKGVsLCBtdWx0aXBsZSk7XG4gICAgICB2YWx1ZSA9IHNlbGYucGFyYW1zLm51bWJlciA/IGlzQXJyYXkodmFsdWUpID8gdmFsdWUubWFwKHRvTnVtYmVyKSA6IHRvTnVtYmVyKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgc2VsZi5zZXQodmFsdWUpO1xuICAgIH07XG4gICAgdGhpcy5vbignY2hhbmdlJywgdGhpcy5saXN0ZW5lcik7XG5cbiAgICAvLyBpZiBoYXMgaW5pdGlhbCB2YWx1ZSwgc2V0IGFmdGVyQmluZFxuICAgIHZhciBpbml0VmFsdWUgPSBnZXRWYWx1ZShlbCwgbXVsdGlwbGUsIHRydWUpO1xuICAgIGlmIChtdWx0aXBsZSAmJiBpbml0VmFsdWUubGVuZ3RoIHx8ICFtdWx0aXBsZSAmJiBpbml0VmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kID0gdGhpcy5saXN0ZW5lcjtcbiAgICB9XG5cbiAgICAvLyBBbGwgbWFqb3IgYnJvd3NlcnMgZXhjZXB0IEZpcmVmb3ggcmVzZXRzXG4gICAgLy8gc2VsZWN0ZWRJbmRleCB3aXRoIHZhbHVlIC0xIHRvIDAgd2hlbiB0aGUgZWxlbWVudFxuICAgIC8vIGlzIGFwcGVuZGVkIHRvIGEgbmV3IHBhcmVudCwgdGhlcmVmb3JlIHdlIGhhdmUgdG9cbiAgICAvLyBmb3JjZSBhIERPTSB1cGRhdGUgd2hlbmV2ZXIgdGhhdCBoYXBwZW5zLi4uXG4gICAgdGhpcy52bS4kb24oJ2hvb2s6YXR0YWNoZWQnLCB0aGlzLmZvcmNlVXBkYXRlKTtcbiAgfSxcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgZWwuc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgIHZhciBtdWx0aSA9IHRoaXMubXVsdGlwbGUgJiYgaXNBcnJheSh2YWx1ZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBlbC5vcHRpb25zO1xuICAgIHZhciBpID0gb3B0aW9ucy5sZW5ndGg7XG4gICAgdmFyIG9wLCB2YWw7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgb3AgPSBvcHRpb25zW2ldO1xuICAgICAgdmFsID0gb3AuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpID8gb3AuX3ZhbHVlIDogb3AudmFsdWU7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cbiAgICAgIG9wLnNlbGVjdGVkID0gbXVsdGkgPyBpbmRleE9mJDEodmFsdWUsIHZhbCkgPiAtMSA6IGxvb3NlRXF1YWwodmFsdWUsIHZhbCk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIHRoaXMudm0uJG9mZignaG9vazphdHRhY2hlZCcsIHRoaXMuZm9yY2VVcGRhdGUpO1xuICB9XG59O1xuXG4vKipcbiAqIEdldCBzZWxlY3QgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge1NlbGVjdEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG11bHRpXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGluaXRcbiAqIEByZXR1cm4ge0FycmF5fCp9XG4gKi9cblxuZnVuY3Rpb24gZ2V0VmFsdWUoZWwsIG11bHRpLCBpbml0KSB7XG4gIHZhciByZXMgPSBtdWx0aSA/IFtdIDogbnVsbDtcbiAgdmFyIG9wLCB2YWwsIHNlbGVjdGVkO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGVsLm9wdGlvbnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb3AgPSBlbC5vcHRpb25zW2ldO1xuICAgIHNlbGVjdGVkID0gaW5pdCA/IG9wLmhhc0F0dHJpYnV0ZSgnc2VsZWN0ZWQnKSA6IG9wLnNlbGVjdGVkO1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgdmFsID0gb3AuaGFzT3duUHJvcGVydHkoJ192YWx1ZScpID8gb3AuX3ZhbHVlIDogb3AudmFsdWU7XG4gICAgICBpZiAobXVsdGkpIHtcbiAgICAgICAgcmVzLnB1c2godmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogTmF0aXZlIEFycmF5LmluZGV4T2YgdXNlcyBzdHJpY3QgZXF1YWwsIGJ1dCBpbiB0aGlzXG4gKiBjYXNlIHdlIG5lZWQgdG8gbWF0Y2ggc3RyaW5nL251bWJlcnMgd2l0aCBjdXN0b20gZXF1YWwuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyXG4gKiBAcGFyYW0geyp9IHZhbFxuICovXG5cbmZ1bmN0aW9uIGluZGV4T2YkMShhcnIsIHZhbCkge1xuICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAobG9vc2VFcXVhbChhcnJbaV0sIHZhbCkpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbnZhciBjaGVja2JveCA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuXG4gICAgdGhpcy5nZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBlbC5oYXNPd25Qcm9wZXJ0eSgnX3ZhbHVlJykgPyBlbC5fdmFsdWUgOiBzZWxmLnBhcmFtcy5udW1iZXIgPyB0b051bWJlcihlbC52YWx1ZSkgOiBlbC52YWx1ZTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0Qm9vbGVhblZhbHVlKCkge1xuICAgICAgdmFyIHZhbCA9IGVsLmNoZWNrZWQ7XG4gICAgICBpZiAodmFsICYmIGVsLmhhc093blByb3BlcnR5KCdfdHJ1ZVZhbHVlJykpIHtcbiAgICAgICAgcmV0dXJuIGVsLl90cnVlVmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoIXZhbCAmJiBlbC5oYXNPd25Qcm9wZXJ0eSgnX2ZhbHNlVmFsdWUnKSkge1xuICAgICAgICByZXR1cm4gZWwuX2ZhbHNlVmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdmFsO1xuICAgIH1cblxuICAgIHRoaXMubGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbW9kZWwgPSBzZWxmLl93YXRjaGVyLnZhbHVlO1xuICAgICAgaWYgKGlzQXJyYXkobW9kZWwpKSB7XG4gICAgICAgIHZhciB2YWwgPSBzZWxmLmdldFZhbHVlKCk7XG4gICAgICAgIGlmIChlbC5jaGVja2VkKSB7XG4gICAgICAgICAgaWYgKGluZGV4T2YobW9kZWwsIHZhbCkgPCAwKSB7XG4gICAgICAgICAgICBtb2RlbC5wdXNoKHZhbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZGVsLiRyZW1vdmUodmFsKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zZXQoZ2V0Qm9vbGVhblZhbHVlKCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm9uKCdjaGFuZ2UnLCB0aGlzLmxpc3RlbmVyKTtcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdjaGVja2VkJykpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kID0gdGhpcy5saXN0ZW5lcjtcbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUodmFsdWUpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgZWwuY2hlY2tlZCA9IGluZGV4T2YodmFsdWUsIHRoaXMuZ2V0VmFsdWUoKSkgPiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGVsLmhhc093blByb3BlcnR5KCdfdHJ1ZVZhbHVlJykpIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IGxvb3NlRXF1YWwodmFsdWUsIGVsLl90cnVlVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuY2hlY2tlZCA9ICEhdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgaGFuZGxlcnMgPSB7XG4gIHRleHQ6IHRleHQkMixcbiAgcmFkaW86IHJhZGlvLFxuICBzZWxlY3Q6IHNlbGVjdCxcbiAgY2hlY2tib3g6IGNoZWNrYm94XG59O1xuXG52YXIgbW9kZWwgPSB7XG5cbiAgcHJpb3JpdHk6IE1PREVMLFxuICB0d29XYXk6IHRydWUsXG4gIGhhbmRsZXJzOiBoYW5kbGVycyxcbiAgcGFyYW1zOiBbJ2xhenknLCAnbnVtYmVyJywgJ2RlYm91bmNlJ10sXG5cbiAgLyoqXG4gICAqIFBvc3NpYmxlIGVsZW1lbnRzOlxuICAgKiAgIDxzZWxlY3Q+XG4gICAqICAgPHRleHRhcmVhPlxuICAgKiAgIDxpbnB1dCB0eXBlPVwiKlwiPlxuICAgKiAgICAgLSB0ZXh0XG4gICAqICAgICAtIGNoZWNrYm94XG4gICAqICAgICAtIHJhZGlvXG4gICAqICAgICAtIG51bWJlclxuICAgKi9cblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIC8vIGZyaWVuZGx5IHdhcm5pbmcuLi5cbiAgICB0aGlzLmNoZWNrRmlsdGVycygpO1xuICAgIGlmICh0aGlzLmhhc1JlYWQgJiYgIXRoaXMuaGFzV3JpdGUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignSXQgc2VlbXMgeW91IGFyZSB1c2luZyBhIHJlYWQtb25seSBmaWx0ZXIgd2l0aCAnICsgJ3YtbW9kZWwuIFlvdSBtaWdodCB3YW50IHRvIHVzZSBhIHR3by13YXkgZmlsdGVyICcgKyAndG8gZW5zdXJlIGNvcnJlY3QgYmVoYXZpb3IuJyk7XG4gICAgfVxuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgdmFyIHRhZyA9IGVsLnRhZ05hbWU7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKHRhZyA9PT0gJ0lOUFVUJykge1xuICAgICAgaGFuZGxlciA9IGhhbmRsZXJzW2VsLnR5cGVdIHx8IGhhbmRsZXJzLnRleHQ7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdTRUxFQ1QnKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnMuc2VsZWN0O1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICBoYW5kbGVyID0gaGFuZGxlcnMudGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCd2LW1vZGVsIGRvZXMgbm90IHN1cHBvcnQgZWxlbWVudCB0eXBlOiAnICsgdGFnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWwuX192X21vZGVsID0gdGhpcztcbiAgICBoYW5kbGVyLmJpbmQuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IGhhbmRsZXIudXBkYXRlO1xuICAgIHRoaXMuX3VuYmluZCA9IGhhbmRsZXIudW5iaW5kO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayByZWFkL3dyaXRlIGZpbHRlciBzdGF0cy5cbiAgICovXG5cbiAgY2hlY2tGaWx0ZXJzOiBmdW5jdGlvbiBjaGVja0ZpbHRlcnMoKSB7XG4gICAgdmFyIGZpbHRlcnMgPSB0aGlzLmZpbHRlcnM7XG4gICAgaWYgKCFmaWx0ZXJzKSByZXR1cm47XG4gICAgdmFyIGkgPSBmaWx0ZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2YXIgZmlsdGVyID0gcmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICdmaWx0ZXJzJywgZmlsdGVyc1tpXS5uYW1lKTtcbiAgICAgIGlmICh0eXBlb2YgZmlsdGVyID09PSAnZnVuY3Rpb24nIHx8IGZpbHRlci5yZWFkKSB7XG4gICAgICAgIHRoaXMuaGFzUmVhZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoZmlsdGVyLndyaXRlKSB7XG4gICAgICAgIHRoaXMuaGFzV3JpdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICB0aGlzLmVsLl9fdl9tb2RlbCA9IG51bGw7XG4gICAgdGhpcy5fdW5iaW5kICYmIHRoaXMuX3VuYmluZCgpO1xuICB9XG59O1xuXG4vLyBrZXlDb2RlIGFsaWFzZXNcbnZhciBrZXlDb2RlcyA9IHtcbiAgZXNjOiAyNyxcbiAgdGFiOiA5LFxuICBlbnRlcjogMTMsXG4gIHNwYWNlOiAzMixcbiAgJ2RlbGV0ZSc6IFs4LCA0Nl0sXG4gIHVwOiAzOCxcbiAgbGVmdDogMzcsXG4gIHJpZ2h0OiAzOSxcbiAgZG93bjogNDBcbn07XG5cbmZ1bmN0aW9uIGtleUZpbHRlcihoYW5kbGVyLCBrZXlzKSB7XG4gIHZhciBjb2RlcyA9IGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hhckNvZGUgPSBrZXkuY2hhckNvZGVBdCgwKTtcbiAgICBpZiAoY2hhckNvZGUgPiA0NyAmJiBjaGFyQ29kZSA8IDU4KSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoa2V5LCAxMCk7XG4gICAgfVxuICAgIGlmIChrZXkubGVuZ3RoID09PSAxKSB7XG4gICAgICBjaGFyQ29kZSA9IGtleS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoY2hhckNvZGUgPiA2NCAmJiBjaGFyQ29kZSA8IDkxKSB7XG4gICAgICAgIHJldHVybiBjaGFyQ29kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGtleUNvZGVzW2tleV07XG4gIH0pO1xuICBjb2RlcyA9IFtdLmNvbmNhdC5hcHBseShbXSwgY29kZXMpO1xuICByZXR1cm4gZnVuY3Rpb24ga2V5SGFuZGxlcihlKSB7XG4gICAgaWYgKGNvZGVzLmluZGV4T2YoZS5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RvcEZpbHRlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzdG9wSGFuZGxlcihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICByZXR1cm4gaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcmV2ZW50RmlsdGVyKGhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2VsZkZpbHRlcihoYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzZWxmSGFuZGxlcihlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIHJldHVybiBoYW5kbGVyLmNhbGwodGhpcywgZSk7XG4gICAgfVxuICB9O1xufVxuXG52YXIgb24kMSA9IHtcblxuICBwcmlvcml0eTogT04sXG4gIGFjY2VwdFN0YXRlbWVudDogdHJ1ZSxcbiAga2V5Q29kZXM6IGtleUNvZGVzLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgLy8gZGVhbCB3aXRoIGlmcmFtZXNcbiAgICBpZiAodGhpcy5lbC50YWdOYW1lID09PSAnSUZSQU1FJyAmJiB0aGlzLmFyZyAhPT0gJ2xvYWQnKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLmlmcmFtZUJpbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uKHNlbGYuZWwuY29udGVudFdpbmRvdywgc2VsZi5hcmcsIHNlbGYuaGFuZGxlciwgc2VsZi5tb2RpZmllcnMuY2FwdHVyZSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5vbignbG9hZCcsIHRoaXMuaWZyYW1lQmluZCk7XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKGhhbmRsZXIpIHtcbiAgICAvLyBzdHViIGEgbm9vcCBmb3Igdi1vbiB3aXRoIG5vIHZhbHVlLFxuICAgIC8vIGUuZy4gQG1vdXNlZG93bi5wcmV2ZW50XG4gICAgaWYgKCF0aGlzLmRlc2NyaXB0b3IucmF3KSB7XG4gICAgICBoYW5kbGVyID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ3Ytb246JyArIHRoaXMuYXJnICsgJz1cIicgKyB0aGlzLmV4cHJlc3Npb24gKyAnXCIgZXhwZWN0cyBhIGZ1bmN0aW9uIHZhbHVlLCAnICsgJ2dvdCAnICsgaGFuZGxlcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgbW9kaWZpZXJzXG4gICAgaWYgKHRoaXMubW9kaWZpZXJzLnN0b3ApIHtcbiAgICAgIGhhbmRsZXIgPSBzdG9wRmlsdGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2RpZmllcnMucHJldmVudCkge1xuICAgICAgaGFuZGxlciA9IHByZXZlbnRGaWx0ZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLm1vZGlmaWVycy5zZWxmKSB7XG4gICAgICBoYW5kbGVyID0gc2VsZkZpbHRlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgLy8ga2V5IGZpbHRlclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tb2RpZmllcnMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5ICE9PSAnc3RvcCcgJiYga2V5ICE9PSAncHJldmVudCc7XG4gICAgfSk7XG4gICAgaWYgKGtleXMubGVuZ3RoKSB7XG4gICAgICBoYW5kbGVyID0ga2V5RmlsdGVyKGhhbmRsZXIsIGtleXMpO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgaWYgKHRoaXMuaWZyYW1lQmluZCkge1xuICAgICAgdGhpcy5pZnJhbWVCaW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uKHRoaXMuZWwsIHRoaXMuYXJnLCB0aGlzLmhhbmRsZXIsIHRoaXMubW9kaWZpZXJzLmNhcHR1cmUpO1xuICAgIH1cbiAgfSxcblxuICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdmFyIGVsID0gdGhpcy5pZnJhbWVCaW5kID8gdGhpcy5lbC5jb250ZW50V2luZG93IDogdGhpcy5lbDtcbiAgICBpZiAodGhpcy5oYW5kbGVyKSB7XG4gICAgICBvZmYoZWwsIHRoaXMuYXJnLCB0aGlzLmhhbmRsZXIpO1xuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cbn07XG5cbnZhciBwcmVmaXhlcyA9IFsnLXdlYmtpdC0nLCAnLW1vei0nLCAnLW1zLSddO1xudmFyIGNhbWVsUHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnbXMnXTtcbnZhciBpbXBvcnRhbnRSRSA9IC8haW1wb3J0YW50Oz8kLztcbnZhciBwcm9wQ2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG52YXIgdGVzdEVsID0gbnVsbDtcblxudmFyIHN0eWxlID0ge1xuXG4gIGRlZXA6IHRydWUsXG5cbiAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5lbC5zdHlsZS5jc3NUZXh0ID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5oYW5kbGVPYmplY3QodmFsdWUucmVkdWNlKGV4dGVuZCwge30pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVPYmplY3QodmFsdWUgfHwge30pO1xuICAgIH1cbiAgfSxcblxuICBoYW5kbGVPYmplY3Q6IGZ1bmN0aW9uIGhhbmRsZU9iamVjdCh2YWx1ZSkge1xuICAgIC8vIGNhY2hlIG9iamVjdCBzdHlsZXMgc28gdGhhdCBvbmx5IGNoYW5nZWQgcHJvcHNcbiAgICAvLyBhcmUgYWN0dWFsbHkgdXBkYXRlZC5cbiAgICB2YXIgY2FjaGUgPSB0aGlzLmNhY2hlIHx8ICh0aGlzLmNhY2hlID0ge30pO1xuICAgIHZhciBuYW1lLCB2YWw7XG4gICAgZm9yIChuYW1lIGluIGNhY2hlKSB7XG4gICAgICBpZiAoIShuYW1lIGluIHZhbHVlKSkge1xuICAgICAgICB0aGlzLmhhbmRsZVNpbmdsZShuYW1lLCBudWxsKTtcbiAgICAgICAgZGVsZXRlIGNhY2hlW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKG5hbWUgaW4gdmFsdWUpIHtcbiAgICAgIHZhbCA9IHZhbHVlW25hbWVdO1xuICAgICAgaWYgKHZhbCAhPT0gY2FjaGVbbmFtZV0pIHtcbiAgICAgICAgY2FjaGVbbmFtZV0gPSB2YWw7XG4gICAgICAgIHRoaXMuaGFuZGxlU2luZ2xlKG5hbWUsIHZhbCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGhhbmRsZVNpbmdsZTogZnVuY3Rpb24gaGFuZGxlU2luZ2xlKHByb3AsIHZhbHVlKSB7XG4gICAgcHJvcCA9IG5vcm1hbGl6ZShwcm9wKTtcbiAgICBpZiAoIXByb3ApIHJldHVybjsgLy8gdW5zdXBwb3J0ZWQgcHJvcFxuICAgIC8vIGNhc3QgcG9zc2libGUgbnVtYmVycy9ib29sZWFucyBpbnRvIHN0cmluZ3NcbiAgICBpZiAodmFsdWUgIT0gbnVsbCkgdmFsdWUgKz0gJyc7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YXIgaXNJbXBvcnRhbnQgPSBpbXBvcnRhbnRSRS50ZXN0KHZhbHVlKSA/ICdpbXBvcnRhbnQnIDogJyc7XG4gICAgICBpZiAoaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKGltcG9ydGFudFJFLCAnJykudHJpbSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5lbC5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCB2YWx1ZSwgaXNJbXBvcnRhbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgIH1cbiAgfVxuXG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhIENTUyBwcm9wZXJ0eSBuYW1lLlxuICogLSBjYWNoZSByZXN1bHRcbiAqIC0gYXV0byBwcmVmaXhcbiAqIC0gY2FtZWxDYXNlIC0+IGRhc2gtY2FzZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplKHByb3ApIHtcbiAgaWYgKHByb3BDYWNoZVtwcm9wXSkge1xuICAgIHJldHVybiBwcm9wQ2FjaGVbcHJvcF07XG4gIH1cbiAgdmFyIHJlcyA9IHByZWZpeChwcm9wKTtcbiAgcHJvcENhY2hlW3Byb3BdID0gcHJvcENhY2hlW3Jlc10gPSByZXM7XG4gIHJldHVybiByZXM7XG59XG5cbi8qKlxuICogQXV0byBkZXRlY3QgdGhlIGFwcHJvcHJpYXRlIHByZWZpeCBmb3IgYSBDU1MgcHJvcGVydHkuXG4gKiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wYXVsaXJpc2gvNTIzNjkyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBwcmVmaXgocHJvcCkge1xuICBwcm9wID0gaHlwaGVuYXRlKHByb3ApO1xuICB2YXIgY2FtZWwgPSBjYW1lbGl6ZShwcm9wKTtcbiAgdmFyIHVwcGVyID0gY2FtZWwuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjYW1lbC5zbGljZSgxKTtcbiAgaWYgKCF0ZXN0RWwpIHtcbiAgICB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgfVxuICB2YXIgaSA9IHByZWZpeGVzLmxlbmd0aDtcbiAgdmFyIHByZWZpeGVkO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcHJlZml4ZWQgPSBjYW1lbFByZWZpeGVzW2ldICsgdXBwZXI7XG4gICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbC5zdHlsZSkge1xuICAgICAgcmV0dXJuIHByZWZpeGVzW2ldICsgcHJvcDtcbiAgICB9XG4gIH1cbiAgaWYgKGNhbWVsIGluIHRlc3RFbC5zdHlsZSkge1xuICAgIHJldHVybiBwcm9wO1xuICB9XG59XG5cbi8vIHhsaW5rXG52YXIgeGxpbmtOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbnZhciB4bGlua1JFID0gL154bGluazovO1xuXG4vLyBjaGVjayBmb3IgYXR0cmlidXRlcyB0aGF0IHByb2hpYml0IGludGVycG9sYXRpb25zXG52YXIgZGlzYWxsb3dlZEludGVycEF0dHJSRSA9IC9edi18Xjp8XkB8Xig/OmlzfHRyYW5zaXRpb258dHJhbnNpdGlvbi1tb2RlfGRlYm91bmNlfHRyYWNrLWJ5fHN0YWdnZXJ8ZW50ZXItc3RhZ2dlcnxsZWF2ZS1zdGFnZ2VyKSQvO1xuLy8gdGhlc2UgYXR0cmlidXRlcyBzaG91bGQgYWxzbyBzZXQgdGhlaXIgY29ycmVzcG9uZGluZyBwcm9wZXJ0aWVzXG4vLyBiZWNhdXNlIHRoZXkgb25seSBhZmZlY3QgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGVsZW1lbnRcbnZhciBhdHRyV2l0aFByb3BzUkUgPSAvXig/OnZhbHVlfGNoZWNrZWR8c2VsZWN0ZWR8bXV0ZWQpJC87XG4vLyB0aGVzZSBhdHRyaWJ1dGVzIGV4cGVjdCBlbnVtcmF0ZWQgdmFsdWVzIG9mIFwidHJ1ZVwiIG9yIFwiZmFsc2VcIlxuLy8gYnV0IGFyZSBub3QgYm9vbGVhbiBhdHRyaWJ1dGVzXG52YXIgZW51bWVyYXRlZEF0dHJSRSA9IC9eKD86ZHJhZ2dhYmxlfGNvbnRlbnRlZGl0YWJsZXxzcGVsbGNoZWNrKSQvO1xuXG4vLyB0aGVzZSBhdHRyaWJ1dGVzIHNob3VsZCBzZXQgYSBoaWRkZW4gcHJvcGVydHkgZm9yXG4vLyBiaW5kaW5nIHYtbW9kZWwgdG8gb2JqZWN0IHZhbHVlc1xudmFyIG1vZGVsUHJvcHMgPSB7XG4gIHZhbHVlOiAnX3ZhbHVlJyxcbiAgJ3RydWUtdmFsdWUnOiAnX3RydWVWYWx1ZScsXG4gICdmYWxzZS12YWx1ZSc6ICdfZmFsc2VWYWx1ZSdcbn07XG5cbnZhciBiaW5kJDEgPSB7XG5cbiAgcHJpb3JpdHk6IEJJTkQsXG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICB2YXIgYXR0ciA9IHRoaXMuYXJnO1xuICAgIHZhciB0YWcgPSB0aGlzLmVsLnRhZ05hbWU7XG4gICAgLy8gc2hvdWxkIGJlIGRlZXAgd2F0Y2ggb24gb2JqZWN0IG1vZGVcbiAgICBpZiAoIWF0dHIpIHtcbiAgICAgIHRoaXMuZGVlcCA9IHRydWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSBpbnRlcnBvbGF0aW9uIGJpbmRpbmdzXG4gICAgdmFyIGRlc2NyaXB0b3IgPSB0aGlzLmRlc2NyaXB0b3I7XG4gICAgdmFyIHRva2VucyA9IGRlc2NyaXB0b3IuaW50ZXJwO1xuICAgIGlmICh0b2tlbnMpIHtcbiAgICAgIC8vIGhhbmRsZSBpbnRlcnBvbGF0aW9ucyB3aXRoIG9uZS10aW1lIHRva2Vuc1xuICAgICAgaWYgKGRlc2NyaXB0b3IuaGFzT25lVGltZSkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSB0b2tlbnNUb0V4cCh0b2tlbnMsIHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pO1xuICAgICAgfVxuXG4gICAgICAvLyBvbmx5IGFsbG93IGJpbmRpbmcgb24gbmF0aXZlIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChkaXNhbGxvd2VkSW50ZXJwQXR0clJFLnRlc3QoYXR0cikgfHwgYXR0ciA9PT0gJ25hbWUnICYmICh0YWcgPT09ICdQQVJUSUFMJyB8fCB0YWcgPT09ICdTTE9UJykpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKGF0dHIgKyAnPVwiJyArIGRlc2NyaXB0b3IucmF3ICsgJ1wiOiAnICsgJ2F0dHJpYnV0ZSBpbnRlcnBvbGF0aW9uIGlzIG5vdCBhbGxvd2VkIGluIFZ1ZS5qcyAnICsgJ2RpcmVjdGl2ZXMgYW5kIHNwZWNpYWwgYXR0cmlidXRlcy4nKTtcbiAgICAgICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIHRoaXMuaW52YWxpZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIHJhdyA9IGF0dHIgKyAnPVwiJyArIGRlc2NyaXB0b3IucmF3ICsgJ1wiOiAnO1xuICAgICAgICAvLyB3YXJuIHNyY1xuICAgICAgICBpZiAoYXR0ciA9PT0gJ3NyYycpIHtcbiAgICAgICAgICB3YXJuKHJhdyArICdpbnRlcnBvbGF0aW9uIGluIFwic3JjXCIgYXR0cmlidXRlIHdpbGwgY2F1c2UgJyArICdhIDQwNCByZXF1ZXN0LiBVc2Ugdi1iaW5kOnNyYyBpbnN0ZWFkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2FybiBzdHlsZVxuICAgICAgICBpZiAoYXR0ciA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgIHdhcm4ocmF3ICsgJ2ludGVycG9sYXRpb24gaW4gXCJzdHlsZVwiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlICcgKyAndGhlIGF0dHJpYnV0ZSB0byBiZSBkaXNjYXJkZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIuICcgKyAnVXNlIHYtYmluZDpzdHlsZSBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgYXR0ciA9IHRoaXMuYXJnO1xuICAgIGlmICh0aGlzLmFyZykge1xuICAgICAgdGhpcy5oYW5kbGVTaW5nbGUoYXR0ciwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZU9iamVjdCh2YWx1ZSB8fCB7fSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIHNoYXJlIG9iamVjdCBoYW5kbGVyIHdpdGggdi1iaW5kOmNsYXNzXG4gIGhhbmRsZU9iamVjdDogc3R5bGUuaGFuZGxlT2JqZWN0LFxuXG4gIGhhbmRsZVNpbmdsZTogZnVuY3Rpb24gaGFuZGxlU2luZ2xlKGF0dHIsIHZhbHVlKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbDtcbiAgICB2YXIgaW50ZXJwID0gdGhpcy5kZXNjcmlwdG9yLmludGVycDtcbiAgICBpZiAodGhpcy5tb2RpZmllcnMuY2FtZWwpIHtcbiAgICAgIGF0dHIgPSBjYW1lbGl6ZShhdHRyKTtcbiAgICB9XG4gICAgaWYgKCFpbnRlcnAgJiYgYXR0cldpdGhQcm9wc1JFLnRlc3QoYXR0cikgJiYgYXR0ciBpbiBlbCkge1xuICAgICAgZWxbYXR0cl0gPSBhdHRyID09PSAndmFsdWUnID8gdmFsdWUgPT0gbnVsbCAvLyBJRTkgd2lsbCBzZXQgaW5wdXQudmFsdWUgdG8gXCJudWxsXCIgZm9yIG51bGwuLi5cbiAgICAgID8gJycgOiB2YWx1ZSA6IHZhbHVlO1xuICAgIH1cbiAgICAvLyBzZXQgbW9kZWwgcHJvcHNcbiAgICB2YXIgbW9kZWxQcm9wID0gbW9kZWxQcm9wc1thdHRyXTtcbiAgICBpZiAoIWludGVycCAmJiBtb2RlbFByb3ApIHtcbiAgICAgIGVsW21vZGVsUHJvcF0gPSB2YWx1ZTtcbiAgICAgIC8vIHVwZGF0ZSB2LW1vZGVsIGlmIHByZXNlbnRcbiAgICAgIHZhciBtb2RlbCA9IGVsLl9fdl9tb2RlbDtcbiAgICAgIGlmIChtb2RlbCkge1xuICAgICAgICBtb2RlbC5saXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBkbyBub3Qgc2V0IHZhbHVlIGF0dHJpYnV0ZSBmb3IgdGV4dGFyZWFcbiAgICBpZiAoYXR0ciA9PT0gJ3ZhbHVlJyAmJiBlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHVwZGF0ZSBhdHRyaWJ1dGVcbiAgICBpZiAoZW51bWVyYXRlZEF0dHJSRS50ZXN0KGF0dHIpKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9IG51bGwgJiYgdmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICBpZiAoYXR0ciA9PT0gJ2NsYXNzJykge1xuICAgICAgICAvLyBoYW5kbGUgZWRnZSBjYXNlICMxOTYwOlxuICAgICAgICAvLyBjbGFzcyBpbnRlcnBvbGF0aW9uIHNob3VsZCBub3Qgb3ZlcndyaXRlIFZ1ZSB0cmFuc2l0aW9uIGNsYXNzXG4gICAgICAgIGlmIChlbC5fX3ZfdHJhbnMpIHtcbiAgICAgICAgICB2YWx1ZSArPSAnICcgKyBlbC5fX3ZfdHJhbnMuaWQgKyAnLXRyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIHNldENsYXNzKGVsLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKHhsaW5rUkUudGVzdChhdHRyKSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGVOUyh4bGlua05TLCBhdHRyLCB2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKGF0dHIsIHZhbHVlID09PSB0cnVlID8gJycgOiB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBlbCA9IHtcblxuICBwcmlvcml0eTogRUwsXG5cbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIXRoaXMuYXJnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpZCA9IHRoaXMuaWQgPSBjYW1lbGl6ZSh0aGlzLmFyZyk7XG4gICAgdmFyIHJlZnMgPSAodGhpcy5fc2NvcGUgfHwgdGhpcy52bSkuJGVscztcbiAgICBpZiAoaGFzT3duKHJlZnMsIGlkKSkge1xuICAgICAgcmVmc1tpZF0gPSB0aGlzLmVsO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZShyZWZzLCBpZCwgdGhpcy5lbCk7XG4gICAgfVxuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIHZhciByZWZzID0gKHRoaXMuX3Njb3BlIHx8IHRoaXMudm0pLiRlbHM7XG4gICAgaWYgKHJlZnNbdGhpcy5pZF0gPT09IHRoaXMuZWwpIHtcbiAgICAgIHJlZnNbdGhpcy5pZF0gPSBudWxsO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHJlZiA9IHtcbiAgYmluZDogZnVuY3Rpb24gYmluZCgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ3YtcmVmOicgKyB0aGlzLmFyZyArICcgbXVzdCBiZSB1c2VkIG9uIGEgY2hpbGQgJyArICdjb21wb25lbnQuIEZvdW5kIG9uIDwnICsgdGhpcy5lbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgKyAnPi4nKTtcbiAgfVxufTtcblxudmFyIGNsb2FrID0ge1xuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgdGhpcy52bS4kb25jZSgncHJlLWhvb2s6Y29tcGlsZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ3YtY2xvYWsnKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gbXVzdCBleHBvcnQgcGxhaW4gb2JqZWN0XG52YXIgZGlyZWN0aXZlcyA9IHtcbiAgdGV4dDogdGV4dCQxLFxuICBodG1sOiBodG1sLFxuICAnZm9yJzogdkZvcixcbiAgJ2lmJzogdklmLFxuICBzaG93OiBzaG93LFxuICBtb2RlbDogbW9kZWwsXG4gIG9uOiBvbiQxLFxuICBiaW5kOiBiaW5kJDEsXG4gIGVsOiBlbCxcbiAgcmVmOiByZWYsXG4gIGNsb2FrOiBjbG9ha1xufTtcblxudmFyIHZDbGFzcyA9IHtcblxuICBkZWVwOiB0cnVlLFxuXG4gIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuaGFuZGxlT2JqZWN0KHN0cmluZ1RvT2JqZWN0KHZhbHVlKSk7XG4gICAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHZhbHVlKSkge1xuICAgICAgdGhpcy5oYW5kbGVPYmplY3QodmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuaGFuZGxlQXJyYXkodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB9XG4gIH0sXG5cbiAgaGFuZGxlT2JqZWN0OiBmdW5jdGlvbiBoYW5kbGVPYmplY3QodmFsdWUpIHtcbiAgICB0aGlzLmNsZWFudXAodmFsdWUpO1xuICAgIHZhciBrZXlzID0gdGhpcy5wcmV2S2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMuZWwsIGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCBrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBoYW5kbGVBcnJheTogZnVuY3Rpb24gaGFuZGxlQXJyYXkodmFsdWUpIHtcbiAgICB0aGlzLmNsZWFudXAodmFsdWUpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdmFsdWUubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVbaV0pIHtcbiAgICAgICAgYWRkQ2xhc3ModGhpcy5lbCwgdmFsdWVbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByZXZLZXlzID0gdmFsdWUuc2xpY2UoKTtcbiAgfSxcblxuICBjbGVhbnVwOiBmdW5jdGlvbiBjbGVhbnVwKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMucHJldktleXMpIHtcbiAgICAgIHZhciBpID0gdGhpcy5wcmV2S2V5cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLnByZXZLZXlzW2ldO1xuICAgICAgICBpZiAoa2V5ICYmICghdmFsdWUgfHwgIWNvbnRhaW5zKHZhbHVlLCBrZXkpKSkge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0cmluZ1RvT2JqZWN0KHZhbHVlKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGtleXMgPSB2YWx1ZS50cmltKCkuc3BsaXQoL1xccysvKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHJlc1trZXlzW2ldXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gY29udGFpbnModmFsdWUsIGtleSkge1xuICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZS5pbmRleE9mKGtleSkgPiAtMSA6IGhhc093bih2YWx1ZSwga2V5KTtcbn1cblxudmFyIGNvbXBvbmVudCA9IHtcblxuICBwcmlvcml0eTogQ09NUE9ORU5ULFxuXG4gIHBhcmFtczogWydrZWVwLWFsaXZlJywgJ3RyYW5zaXRpb24tbW9kZScsICdpbmxpbmUtdGVtcGxhdGUnXSxcblxuICAvKipcbiAgICogU2V0dXAuIFR3byBwb3NzaWJsZSB1c2FnZXM6XG4gICAqXG4gICAqIC0gc3RhdGljOlxuICAgKiAgIDxjb21wPiBvciA8ZGl2IHYtY29tcG9uZW50PVwiY29tcFwiPlxuICAgKlxuICAgKiAtIGR5bmFtaWM6XG4gICAqICAgPGNvbXBvbmVudCA6aXM9XCJ2aWV3XCI+XG4gICAqL1xuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgaWYgKCF0aGlzLmVsLl9fdnVlX18pIHtcbiAgICAgIC8vIGtlZXAtYWxpdmUgY2FjaGVcbiAgICAgIHRoaXMua2VlcEFsaXZlID0gdGhpcy5wYXJhbXMua2VlcEFsaXZlO1xuICAgICAgaWYgKHRoaXMua2VlcEFsaXZlKSB7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGlubGluZS10ZW1wbGF0ZVxuICAgICAgaWYgKHRoaXMucGFyYW1zLmlubGluZVRlbXBsYXRlKSB7XG4gICAgICAgIC8vIGV4dHJhY3QgaW5saW5lIHRlbXBsYXRlIGFzIGEgRG9jdW1lbnRGcmFnbWVudFxuICAgICAgICB0aGlzLmlubGluZVRlbXBsYXRlID0gZXh0cmFjdENvbnRlbnQodGhpcy5lbCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICAvLyBjb21wb25lbnQgcmVzb2x1dGlvbiByZWxhdGVkIHN0YXRlXG4gICAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYiA9IHRoaXMuQ29tcG9uZW50ID0gbnVsbDtcbiAgICAgIC8vIHRyYW5zaXRpb24gcmVsYXRlZCBzdGF0ZVxuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbHMgPSAwO1xuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbENiID0gbnVsbDtcbiAgICAgIC8vIGNyZWF0ZSBhIHJlZiBhbmNob3JcbiAgICAgIHRoaXMuYW5jaG9yID0gY3JlYXRlQW5jaG9yKCd2LWNvbXBvbmVudCcpO1xuICAgICAgcmVwbGFjZSh0aGlzLmVsLCB0aGlzLmFuY2hvcik7XG4gICAgICAvLyByZW1vdmUgaXMgYXR0cmlidXRlLlxuICAgICAgLy8gdGhpcyBpcyByZW1vdmVkIGR1cmluZyBjb21waWxhdGlvbiwgYnV0IGJlY2F1c2UgY29tcGlsYXRpb24gaXNcbiAgICAgIC8vIGNhY2hlZCwgd2hlbiB0aGUgY29tcG9uZW50IGlzIHVzZWQgZWxzZXdoZXJlIHRoaXMgYXR0cmlidXRlXG4gICAgICAvLyB3aWxsIHJlbWFpbiBhdCBsaW5rIHRpbWUuXG4gICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnaXMnKTtcbiAgICAgIC8vIHJlbW92ZSByZWYsIHNhbWUgYXMgYWJvdmVcbiAgICAgIGlmICh0aGlzLmRlc2NyaXB0b3IucmVmKSB7XG4gICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCd2LXJlZjonICsgaHlwaGVuYXRlKHRoaXMuZGVzY3JpcHRvci5yZWYpKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIHN0YXRpYywgYnVpbGQgcmlnaHQgbm93LlxuICAgICAgaWYgKHRoaXMubGl0ZXJhbCkge1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudCh0aGlzLmV4cHJlc3Npb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJ2Nhbm5vdCBtb3VudCBjb21wb25lbnQgXCInICsgdGhpcy5leHByZXNzaW9uICsgJ1wiICcgKyAnb24gYWxyZWFkeSBtb3VudGVkIGVsZW1lbnQ6ICcgKyB0aGlzLmVsKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFB1YmxpYyB1cGRhdGUsIGNhbGxlZCBieSB0aGUgd2F0Y2hlciBpbiB0aGUgZHluYW1pY1xuICAgKiBsaXRlcmFsIHNjZW5hcmlvLCBlLmcuIDxjb21wb25lbnQgOmlzPVwidmlld1wiPlxuICAgKi9cblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5saXRlcmFsKSB7XG4gICAgICB0aGlzLnNldENvbXBvbmVudCh2YWx1ZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTd2l0Y2ggZHluYW1pYyBjb21wb25lbnRzLiBNYXkgcmVzb2x2ZSB0aGUgY29tcG9uZW50XG4gICAqIGFzeW5jaHJvbm91c2x5LCBhbmQgcGVyZm9ybSB0cmFuc2l0aW9uIGJhc2VkIG9uXG4gICAqIHNwZWNpZmllZCB0cmFuc2l0aW9uIG1vZGUuIEFjY2VwdHMgYSBmZXcgYWRkaXRpb25hbFxuICAgKiBhcmd1bWVudHMgc3BlY2lmaWNhbGx5IGZvciB2dWUtcm91dGVyLlxuICAgKlxuICAgKiBUaGUgY2FsbGJhY2sgaXMgY2FsbGVkIHdoZW4gdGhlIGZ1bGwgdHJhbnNpdGlvbiBpc1xuICAgKiBmaW5pc2hlZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICovXG5cbiAgc2V0Q29tcG9uZW50OiBmdW5jdGlvbiBzZXRDb21wb25lbnQodmFsdWUsIGNiKSB7XG4gICAgdGhpcy5pbnZhbGlkYXRlUGVuZGluZygpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIC8vIGp1c3QgcmVtb3ZlIGN1cnJlbnRcbiAgICAgIHRoaXMudW5idWlsZCh0cnVlKTtcbiAgICAgIHRoaXMucmVtb3ZlKHRoaXMuY2hpbGRWTSwgY2IpO1xuICAgICAgdGhpcy5jaGlsZFZNID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdGhpcy5yZXNvbHZlQ29tcG9uZW50KHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYubW91bnRDb21wb25lbnQoY2IpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gdXNlIHdoZW4gY3JlYXRpbmdcbiAgICogdGhlIGNoaWxkIHZtLlxuICAgKi9cblxuICByZXNvbHZlQ29tcG9uZW50OiBmdW5jdGlvbiByZXNvbHZlQ29tcG9uZW50KGlkLCBjYikge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB0aGlzLnBlbmRpbmdDb21wb25lbnRDYiA9IGNhbmNlbGxhYmxlKGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICAgIHNlbGYuQ29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5vcHRpb25zLm5hbWUgfHwgaWQ7XG4gICAgICBzZWxmLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbiAgICAgIGNiKCk7XG4gICAgfSk7XG4gICAgdGhpcy52bS5fcmVzb2x2ZUNvbXBvbmVudChpZCwgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q2IpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIGN1cnJlbnQgY29uc3RydWN0b3IgYW5kXG4gICAqIHJlcGxhY2UgdGhlIGV4aXN0aW5nIGluc3RhbmNlLiBUaGlzIG1ldGhvZCBkb2Vzbid0IGNhcmVcbiAgICogd2hldGhlciB0aGUgbmV3IGNvbXBvbmVudCBhbmQgdGhlIG9sZCBvbmUgYXJlIGFjdHVhbGx5XG4gICAqIHRoZSBzYW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIG1vdW50Q29tcG9uZW50OiBmdW5jdGlvbiBtb3VudENvbXBvbmVudChjYikge1xuICAgIC8vIGFjdHVhbCBtb3VudFxuICAgIHRoaXMudW5idWlsZCh0cnVlKTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGFjdGl2YXRlSG9va3MgPSB0aGlzLkNvbXBvbmVudC5vcHRpb25zLmFjdGl2YXRlO1xuICAgIHZhciBjYWNoZWQgPSB0aGlzLmdldENhY2hlZCgpO1xuICAgIHZhciBuZXdDb21wb25lbnQgPSB0aGlzLmJ1aWxkKCk7XG4gICAgaWYgKGFjdGl2YXRlSG9va3MgJiYgIWNhY2hlZCkge1xuICAgICAgdGhpcy53YWl0aW5nRm9yID0gbmV3Q29tcG9uZW50O1xuICAgICAgY2FsbEFjdGl2YXRlSG9va3MoYWN0aXZhdGVIb29rcywgbmV3Q29tcG9uZW50LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLndhaXRpbmdGb3IgIT09IG5ld0NvbXBvbmVudCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLndhaXRpbmdGb3IgPSBudWxsO1xuICAgICAgICBzZWxmLnRyYW5zaXRpb24obmV3Q29tcG9uZW50LCBjYik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdXBkYXRlIHJlZiBmb3Iga2VwdC1hbGl2ZSBjb21wb25lbnRcbiAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgbmV3Q29tcG9uZW50Ll91cGRhdGVSZWYoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhbnNpdGlvbihuZXdDb21wb25lbnQsIGNiKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlIGNvbXBvbmVudCBjaGFuZ2VzIG9yIHVuYmluZHMgYmVmb3JlIGFuIGFzeW5jXG4gICAqIGNvbnN0cnVjdG9yIGlzIHJlc29sdmVkLCB3ZSBuZWVkIHRvIGludmFsaWRhdGUgaXRzXG4gICAqIHBlbmRpbmcgY2FsbGJhY2suXG4gICAqL1xuXG4gIGludmFsaWRhdGVQZW5kaW5nOiBmdW5jdGlvbiBpbnZhbGlkYXRlUGVuZGluZygpIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nQ29tcG9uZW50Q2IpIHtcbiAgICAgIHRoaXMucGVuZGluZ0NvbXBvbmVudENiLmNhbmNlbCgpO1xuICAgICAgdGhpcy5wZW5kaW5nQ29tcG9uZW50Q2IgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5zdGFudGlhdGUvaW5zZXJ0IGEgbmV3IGNoaWxkIHZtLlxuICAgKiBJZiBrZWVwIGFsaXZlIGFuZCBoYXMgY2FjaGVkIGluc3RhbmNlLCBpbnNlcnQgdGhhdFxuICAgKiBpbnN0YW5jZTsgb3RoZXJ3aXNlIGJ1aWxkIGEgbmV3IG9uZSBhbmQgY2FjaGUgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbZXh0cmFPcHRpb25zXVxuICAgKiBAcmV0dXJuIHtWdWV9IC0gdGhlIGNyZWF0ZWQgaW5zdGFuY2VcbiAgICovXG5cbiAgYnVpbGQ6IGZ1bmN0aW9uIGJ1aWxkKGV4dHJhT3B0aW9ucykge1xuICAgIHZhciBjYWNoZWQgPSB0aGlzLmdldENhY2hlZCgpO1xuICAgIGlmIChjYWNoZWQpIHtcbiAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLkNvbXBvbmVudCkge1xuICAgICAgLy8gZGVmYXVsdCBvcHRpb25zXG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgbmFtZTogdGhpcy5Db21wb25lbnROYW1lLFxuICAgICAgICBlbDogY2xvbmVOb2RlKHRoaXMuZWwpLFxuICAgICAgICB0ZW1wbGF0ZTogdGhpcy5pbmxpbmVUZW1wbGF0ZSxcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGFkZCB0aGUgY2hpbGQgd2l0aCBjb3JyZWN0IHBhcmVudFxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgdHJhbnNjbHVkZWQgY29tcG9uZW50LCBpdHMgcGFyZW50XG4gICAgICAgIC8vIHNob3VsZCBiZSB0aGUgdHJhbnNjbHVzaW9uIGhvc3QuXG4gICAgICAgIHBhcmVudDogdGhpcy5faG9zdCB8fCB0aGlzLnZtLFxuICAgICAgICAvLyBpZiBubyBpbmxpbmUtdGVtcGxhdGUsIHRoZW4gdGhlIGNvbXBpbGVkXG4gICAgICAgIC8vIGxpbmtlciBjYW4gYmUgY2FjaGVkIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gICAgICAgIF9saW5rZXJDYWNoYWJsZTogIXRoaXMuaW5saW5lVGVtcGxhdGUsXG4gICAgICAgIF9yZWY6IHRoaXMuZGVzY3JpcHRvci5yZWYsXG4gICAgICAgIF9hc0NvbXBvbmVudDogdHJ1ZSxcbiAgICAgICAgX2lzUm91dGVyVmlldzogdGhpcy5faXNSb3V0ZXJWaWV3LFxuICAgICAgICAvLyBpZiB0aGlzIGlzIGEgdHJhbnNjbHVkZWQgY29tcG9uZW50LCBjb250ZXh0XG4gICAgICAgIC8vIHdpbGwgYmUgdGhlIGNvbW1vbiBwYXJlbnQgdm0gb2YgdGhpcyBpbnN0YW5jZVxuICAgICAgICAvLyBhbmQgaXRzIGhvc3QuXG4gICAgICAgIF9jb250ZXh0OiB0aGlzLnZtLFxuICAgICAgICAvLyBpZiB0aGlzIGlzIGluc2lkZSBhbiBpbmxpbmUgdi1mb3IsIHRoZSBzY29wZVxuICAgICAgICAvLyB3aWxsIGJlIHRoZSBpbnRlcm1lZGlhdGUgc2NvcGUgY3JlYXRlZCBmb3IgdGhpc1xuICAgICAgICAvLyByZXBlYXQgZnJhZ21lbnQuIHRoaXMgaXMgdXNlZCBmb3IgbGlua2luZyBwcm9wc1xuICAgICAgICAvLyBhbmQgY29udGFpbmVyIGRpcmVjdGl2ZXMuXG4gICAgICAgIF9zY29wZTogdGhpcy5fc2NvcGUsXG4gICAgICAgIC8vIHBhc3MgaW4gdGhlIG93bmVyIGZyYWdtZW50IG9mIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAvLyB0aGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IHRoZSBmcmFnbWVudCBjYW4ga2VlcFxuICAgICAgICAvLyB0cmFjayBvZiBpdHMgY29udGFpbmVkIGNvbXBvbmVudHMgaW4gb3JkZXIgdG9cbiAgICAgICAgLy8gY2FsbCBhdHRhY2gvZGV0YWNoIGhvb2tzIGZvciB0aGVtLlxuICAgICAgICBfZnJhZzogdGhpcy5fZnJhZ1xuICAgICAgfTtcbiAgICAgIC8vIGV4dHJhIG9wdGlvbnNcbiAgICAgIC8vIGluIDEuMC4wIHRoaXMgaXMgdXNlZCBieSB2dWUtcm91dGVyIG9ubHlcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGV4dHJhT3B0aW9ucykge1xuICAgICAgICBleHRlbmQob3B0aW9ucywgZXh0cmFPcHRpb25zKTtcbiAgICAgIH1cbiAgICAgIHZhciBjaGlsZCA9IG5ldyB0aGlzLkNvbXBvbmVudChvcHRpb25zKTtcbiAgICAgIGlmICh0aGlzLmtlZXBBbGl2ZSkge1xuICAgICAgICB0aGlzLmNhY2hlW3RoaXMuQ29tcG9uZW50LmNpZF0gPSBjaGlsZDtcbiAgICAgIH1cbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdGhpcy5lbC5oYXNBdHRyaWJ1dGUoJ3RyYW5zaXRpb24nKSAmJiBjaGlsZC5faXNGcmFnbWVudCkge1xuICAgICAgICB3YXJuKCdUcmFuc2l0aW9ucyB3aWxsIG5vdCB3b3JrIG9uIGEgZnJhZ21lbnQgaW5zdGFuY2UuICcgKyAnVGVtcGxhdGU6ICcgKyBjaGlsZC4kb3B0aW9ucy50ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUcnkgdG8gZ2V0IGEgY2FjaGVkIGluc3RhbmNlIG9mIHRoZSBjdXJyZW50IGNvbXBvbmVudC5cbiAgICpcbiAgICogQHJldHVybiB7VnVlfHVuZGVmaW5lZH1cbiAgICovXG5cbiAgZ2V0Q2FjaGVkOiBmdW5jdGlvbiBnZXRDYWNoZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMua2VlcEFsaXZlICYmIHRoaXMuY2FjaGVbdGhpcy5Db21wb25lbnQuY2lkXTtcbiAgfSxcblxuICAvKipcbiAgICogVGVhcmRvd24gdGhlIGN1cnJlbnQgY2hpbGQsIGJ1dCBkZWZlcnMgY2xlYW51cCBzb1xuICAgKiB0aGF0IHdlIGNhbiBzZXBhcmF0ZSB0aGUgZGVzdHJveSBhbmQgcmVtb3ZhbCBzdGVwcy5cbiAgICpcbiAgICogQHBhcmFtIHtCb29sZWFufSBkZWZlclxuICAgKi9cblxuICB1bmJ1aWxkOiBmdW5jdGlvbiB1bmJ1aWxkKGRlZmVyKSB7XG4gICAgaWYgKHRoaXMud2FpdGluZ0Zvcikge1xuICAgICAgdGhpcy53YWl0aW5nRm9yLiRkZXN0cm95KCk7XG4gICAgICB0aGlzLndhaXRpbmdGb3IgPSBudWxsO1xuICAgIH1cbiAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkVk07XG4gICAgaWYgKCFjaGlsZCB8fCB0aGlzLmtlZXBBbGl2ZSkge1xuICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgIC8vIHJlbW92ZSByZWZcbiAgICAgICAgY2hpbGQuX3VwZGF0ZVJlZih0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhlIHNvbGUgcHVycG9zZSBvZiBgZGVmZXJDbGVhbnVwYCBpcyBzbyB0aGF0IHdlIGNhblxuICAgIC8vIFwiZGVhY3RpdmF0ZVwiIHRoZSB2bSByaWdodCBub3cgYW5kIHBlcmZvcm0gRE9NIHJlbW92YWxcbiAgICAvLyBsYXRlci5cbiAgICBjaGlsZC4kZGVzdHJveShmYWxzZSwgZGVmZXIpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgY3VycmVudCBkZXN0cm95ZWQgY2hpbGQgYW5kIG1hbnVhbGx5IGRvXG4gICAqIHRoZSBjbGVhbnVwIGFmdGVyIHJlbW92YWwuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNiXG4gICAqL1xuXG4gIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGNoaWxkLCBjYikge1xuICAgIHZhciBrZWVwQWxpdmUgPSB0aGlzLmtlZXBBbGl2ZTtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIC8vIHdlIG1heSBoYXZlIGEgY29tcG9uZW50IHN3aXRjaCB3aGVuIGEgcHJldmlvdXNcbiAgICAgIC8vIGNvbXBvbmVudCBpcyBzdGlsbCBiZWluZyB0cmFuc2l0aW9uZWQgb3V0LlxuICAgICAgLy8gd2Ugd2FudCB0byB0cmlnZ2VyIG9ubHkgb25lIGxhc3Rlc3QgaW5zZXJ0aW9uIGNiXG4gICAgICAvLyB3aGVuIHRoZSBleGlzdGluZyB0cmFuc2l0aW9uIGZpbmlzaGVzLiAoIzExMTkpXG4gICAgICB0aGlzLnBlbmRpbmdSZW1vdmFscysrO1xuICAgICAgdGhpcy5wZW5kaW5nUmVtb3ZhbENiID0gY2I7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICBjaGlsZC4kcmVtb3ZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5wZW5kaW5nUmVtb3ZhbHMtLTtcbiAgICAgICAgaWYgKCFrZWVwQWxpdmUpIGNoaWxkLl9jbGVhbnVwKCk7XG4gICAgICAgIGlmICghc2VsZi5wZW5kaW5nUmVtb3ZhbHMgJiYgc2VsZi5wZW5kaW5nUmVtb3ZhbENiKSB7XG4gICAgICAgICAgc2VsZi5wZW5kaW5nUmVtb3ZhbENiKCk7XG4gICAgICAgICAgc2VsZi5wZW5kaW5nUmVtb3ZhbENiID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChjYikge1xuICAgICAgY2IoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFjdHVhbGx5IHN3YXAgdGhlIGNvbXBvbmVudHMsIGRlcGVuZGluZyBvbiB0aGVcbiAgICogdHJhbnNpdGlvbiBtb2RlLiBEZWZhdWx0cyB0byBzaW11bHRhbmVvdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKi9cblxuICB0cmFuc2l0aW9uOiBmdW5jdGlvbiB0cmFuc2l0aW9uKHRhcmdldCwgY2IpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLmNoaWxkVk07XG4gICAgLy8gZm9yIGRldnRvb2wgaW5zcGVjdGlvblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoY3VycmVudCkgY3VycmVudC5faW5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGFyZ2V0Ll9pbmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmNoaWxkVk0gPSB0YXJnZXQ7XG4gICAgc3dpdGNoIChzZWxmLnBhcmFtcy50cmFuc2l0aW9uTW9kZSkge1xuICAgICAgY2FzZSAnaW4tb3V0JzpcbiAgICAgICAgdGFyZ2V0LiRiZWZvcmUoc2VsZi5hbmNob3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnJlbW92ZShjdXJyZW50LCBjYik7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ291dC1pbic6XG4gICAgICAgIHNlbGYucmVtb3ZlKGN1cnJlbnQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0YXJnZXQuJGJlZm9yZShzZWxmLmFuY2hvciwgY2IpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZWxmLnJlbW92ZShjdXJyZW50KTtcbiAgICAgICAgdGFyZ2V0LiRiZWZvcmUoc2VsZi5hbmNob3IsIGNiKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVuYmluZC5cbiAgICovXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgdGhpcy5pbnZhbGlkYXRlUGVuZGluZygpO1xuICAgIC8vIERvIG5vdCBkZWZlciBjbGVhbnVwIHdoZW4gdW5iaW5kaW5nXG4gICAgdGhpcy51bmJ1aWxkKCk7XG4gICAgLy8gZGVzdHJveSBhbGwga2VlcC1hbGl2ZSBjYWNoZWQgaW5zdGFuY2VzXG4gICAgaWYgKHRoaXMuY2FjaGUpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICAgIHRoaXMuY2FjaGVba2V5XS4kZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5jYWNoZSA9IG51bGw7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIENhbGwgYWN0aXZhdGUgaG9va3MgaW4gb3JkZXIgKGFzeW5jaHJvbm91cylcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBob29rc1xuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYlxuICovXG5cbmZ1bmN0aW9uIGNhbGxBY3RpdmF0ZUhvb2tzKGhvb2tzLCB2bSwgY2IpIHtcbiAgdmFyIHRvdGFsID0gaG9va3MubGVuZ3RoO1xuICB2YXIgY2FsbGVkID0gMDtcbiAgaG9va3NbMF0uY2FsbCh2bSwgbmV4dCk7XG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKCsrY2FsbGVkID49IHRvdGFsKSB7XG4gICAgICBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBob29rc1tjYWxsZWRdLmNhbGwodm0sIG5leHQpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgYmluZGluZ01vZGVzID0gY29uZmlnLl9wcm9wQmluZGluZ01vZGVzO1xuXG52YXIgcHJvcERlZiA9IHtcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHZhciBjaGlsZCA9IHRoaXMudm07XG4gICAgdmFyIHBhcmVudCA9IGNoaWxkLl9jb250ZXh0O1xuICAgIC8vIHBhc3NlZCBpbiBmcm9tIGNvbXBpbGVyIGRpcmVjdGx5XG4gICAgdmFyIHByb3AgPSB0aGlzLmRlc2NyaXB0b3IucHJvcDtcbiAgICB2YXIgY2hpbGRLZXkgPSBwcm9wLnBhdGg7XG4gICAgdmFyIHBhcmVudEtleSA9IHByb3AucGFyZW50UGF0aDtcbiAgICB2YXIgdHdvV2F5ID0gcHJvcC5tb2RlID09PSBiaW5kaW5nTW9kZXMuVFdPX1dBWTtcblxuICAgIHZhciBwYXJlbnRXYXRjaGVyID0gdGhpcy5wYXJlbnRXYXRjaGVyID0gbmV3IFdhdGNoZXIocGFyZW50LCBwYXJlbnRLZXksIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHZhbCA9IGNvZXJjZVByb3AocHJvcCwgdmFsKTtcbiAgICAgIGlmIChhc3NlcnRQcm9wKHByb3AsIHZhbCkpIHtcbiAgICAgICAgY2hpbGRbY2hpbGRLZXldID0gdmFsO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIHR3b1dheTogdHdvV2F5LFxuICAgICAgZmlsdGVyczogcHJvcC5maWx0ZXJzLFxuICAgICAgLy8gaW1wb3J0YW50OiBwcm9wcyBuZWVkIHRvIGJlIG9ic2VydmVkIG9uIHRoZVxuICAgICAgLy8gdi1mb3Igc2NvcGUgaWYgcHJlc2VudFxuICAgICAgc2NvcGU6IHRoaXMuX3Njb3BlXG4gICAgfSk7XG5cbiAgICAvLyBzZXQgdGhlIGNoaWxkIGluaXRpYWwgdmFsdWUuXG4gICAgaW5pdFByb3AoY2hpbGQsIHByb3AsIHBhcmVudFdhdGNoZXIudmFsdWUpO1xuXG4gICAgLy8gc2V0dXAgdHdvLXdheSBiaW5kaW5nXG4gICAgaWYgKHR3b1dheSkge1xuICAgICAgLy8gaW1wb3J0YW50OiBkZWZlciB0aGUgY2hpbGQgd2F0Y2hlciBjcmVhdGlvbiB1bnRpbFxuICAgICAgLy8gdGhlIGNyZWF0ZWQgaG9vayAoYWZ0ZXIgZGF0YSBvYnNlcnZhdGlvbilcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIGNoaWxkLiRvbmNlKCdwcmUtaG9vazpjcmVhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLmNoaWxkV2F0Y2hlciA9IG5ldyBXYXRjaGVyKGNoaWxkLCBjaGlsZEtleSwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHBhcmVudFdhdGNoZXIuc2V0KHZhbCk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAvLyBlbnN1cmUgc3luYyB1cHdhcmQgYmVmb3JlIHBhcmVudCBzeW5jIGRvd24uXG4gICAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgaW4gY2FzZXMgZS5nLiB0aGUgY2hpbGRcbiAgICAgICAgICAvLyBtdXRhdGVzIGEgcHJvcCBhcnJheSwgdGhlbiByZXBsYWNlcyBpdC4gKCMxNjgzKVxuICAgICAgICAgIHN5bmM6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgdGhpcy5wYXJlbnRXYXRjaGVyLnRlYXJkb3duKCk7XG4gICAgaWYgKHRoaXMuY2hpbGRXYXRjaGVyKSB7XG4gICAgICB0aGlzLmNoaWxkV2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHF1ZXVlJDEgPSBbXTtcbnZhciBxdWV1ZWQgPSBmYWxzZTtcblxuLyoqXG4gKiBQdXNoIGEgam9iIGludG8gdGhlIHF1ZXVlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGpvYlxuICovXG5cbmZ1bmN0aW9uIHB1c2hKb2Ioam9iKSB7XG4gIHF1ZXVlJDEucHVzaChqb2IpO1xuICBpZiAoIXF1ZXVlZCkge1xuICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgbmV4dFRpY2soZmx1c2gpO1xuICB9XG59XG5cbi8qKlxuICogRmx1c2ggdGhlIHF1ZXVlLCBhbmQgZG8gb25lIGZvcmNlZCByZWZsb3cgYmVmb3JlXG4gKiB0cmlnZ2VyaW5nIHRyYW5zaXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIGZsdXNoKCkge1xuICAvLyBGb3JjZSBsYXlvdXRcbiAgdmFyIGYgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlJDEubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZSQxW2ldKCk7XG4gIH1cbiAgcXVldWUkMSA9IFtdO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgLy8gZHVtbXkgcmV0dXJuLCBzbyBqcyBsaW50ZXJzIGRvbid0IGNvbXBsYWluIGFib3V0XG4gIC8vIHVudXNlZCB2YXJpYWJsZSBmXG4gIHJldHVybiBmO1xufVxuXG52YXIgVFlQRV9UUkFOU0lUSU9OID0gJ3RyYW5zaXRpb24nO1xudmFyIFRZUEVfQU5JTUFUSU9OID0gJ2FuaW1hdGlvbic7XG52YXIgdHJhbnNEdXJhdGlvblByb3AgPSB0cmFuc2l0aW9uUHJvcCArICdEdXJhdGlvbic7XG52YXIgYW5pbUR1cmF0aW9uUHJvcCA9IGFuaW1hdGlvblByb3AgKyAnRHVyYXRpb24nO1xuXG4vKipcbiAqIEEgVHJhbnNpdGlvbiBvYmplY3QgdGhhdCBlbmNhcHN1bGF0ZXMgdGhlIHN0YXRlIGFuZCBsb2dpY1xuICogb2YgdGhlIHRyYW5zaXRpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gKiBAcGFyYW0ge09iamVjdH0gaG9va3NcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICovXG5mdW5jdGlvbiBUcmFuc2l0aW9uKGVsLCBpZCwgaG9va3MsIHZtKSB7XG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy5lbCA9IGVsO1xuICB0aGlzLmVudGVyQ2xhc3MgPSBob29rcyAmJiBob29rcy5lbnRlckNsYXNzIHx8IGlkICsgJy1lbnRlcic7XG4gIHRoaXMubGVhdmVDbGFzcyA9IGhvb2tzICYmIGhvb2tzLmxlYXZlQ2xhc3MgfHwgaWQgKyAnLWxlYXZlJztcbiAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICB0aGlzLnZtID0gdm07XG4gIC8vIGFzeW5jIHN0YXRlXG4gIHRoaXMucGVuZGluZ0Nzc0V2ZW50ID0gdGhpcy5wZW5kaW5nQ3NzQ2IgPSB0aGlzLmNhbmNlbCA9IHRoaXMucGVuZGluZ0pzQ2IgPSB0aGlzLm9wID0gdGhpcy5jYiA9IG51bGw7XG4gIHRoaXMuanVzdEVudGVyZWQgPSBmYWxzZTtcbiAgdGhpcy5lbnRlcmVkID0gdGhpcy5sZWZ0ID0gZmFsc2U7XG4gIHRoaXMudHlwZUNhY2hlID0ge307XG4gIC8vIGNoZWNrIGNzcyB0cmFuc2l0aW9uIHR5cGVcbiAgdGhpcy50eXBlID0gaG9va3MgJiYgaG9va3MudHlwZTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHRoaXMudHlwZSAmJiB0aGlzLnR5cGUgIT09IFRZUEVfVFJBTlNJVElPTiAmJiB0aGlzLnR5cGUgIT09IFRZUEVfQU5JTUFUSU9OKSB7XG4gICAgICB3YXJuKCdpbnZhbGlkIENTUyB0cmFuc2l0aW9uIHR5cGUgZm9yIHRyYW5zaXRpb249XCInICsgdGhpcy5pZCArICdcIjogJyArIHRoaXMudHlwZSk7XG4gICAgfVxuICB9XG4gIC8vIGJpbmRcbiAgdmFyIHNlbGYgPSB0aGlzO1snZW50ZXJOZXh0VGljaycsICdlbnRlckRvbmUnLCAnbGVhdmVOZXh0VGljaycsICdsZWF2ZURvbmUnXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgc2VsZlttXSA9IGJpbmQoc2VsZlttXSwgc2VsZik7XG4gIH0pO1xufVxuXG52YXIgcCQxID0gVHJhbnNpdGlvbi5wcm90b3R5cGU7XG5cbi8qKlxuICogU3RhcnQgYW4gZW50ZXJpbmcgdHJhbnNpdGlvbi5cbiAqXG4gKiAxLiBlbnRlciB0cmFuc2l0aW9uIHRyaWdnZXJlZFxuICogMi4gY2FsbCBiZWZvcmVFbnRlciBob29rXG4gKiAzLiBhZGQgZW50ZXIgY2xhc3NcbiAqIDQuIGluc2VydC9zaG93IGVsZW1lbnRcbiAqIDUuIGNhbGwgZW50ZXIgaG9vayAod2l0aCBwb3NzaWJsZSBleHBsaWNpdCBqcyBjYWxsYmFjaylcbiAqIDYuIHJlZmxvd1xuICogNy4gYmFzZWQgb24gdHJhbnNpdGlvbiB0eXBlOlxuICogICAgLSB0cmFuc2l0aW9uOlxuICogICAgICAgIHJlbW92ZSBjbGFzcyBub3csIHdhaXQgZm9yIHRyYW5zaXRpb25lbmQsXG4gKiAgICAgICAgdGhlbiBkb25lIGlmIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2suXG4gKiAgICAtIGFuaW1hdGlvbjpcbiAqICAgICAgICB3YWl0IGZvciBhbmltYXRpb25lbmQsIHJlbW92ZSBjbGFzcyxcbiAqICAgICAgICB0aGVuIGRvbmUgaWYgdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFjay5cbiAqICAgIC0gbm8gY3NzIHRyYW5zaXRpb246XG4gKiAgICAgICAgZG9uZSBub3cgaWYgdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFjay5cbiAqIDguIHdhaXQgZm9yIGVpdGhlciBkb25lIG9yIGpzIGNhbGxiYWNrLCB0aGVuIGNhbGxcbiAqICAgIGFmdGVyRW50ZXIgaG9vay5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcCAtIGluc2VydC9zaG93IHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gKi9cblxucCQxLmVudGVyID0gZnVuY3Rpb24gKG9wLCBjYikge1xuICB0aGlzLmNhbmNlbFBlbmRpbmcoKTtcbiAgdGhpcy5jYWxsSG9vaygnYmVmb3JlRW50ZXInKTtcbiAgdGhpcy5jYiA9IGNiO1xuICBhZGRDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpO1xuICBvcCgpO1xuICB0aGlzLmVudGVyZWQgPSBmYWxzZTtcbiAgdGhpcy5jYWxsSG9va1dpdGhDYignZW50ZXInKTtcbiAgaWYgKHRoaXMuZW50ZXJlZCkge1xuICAgIHJldHVybjsgLy8gdXNlciBjYWxsZWQgZG9uZSBzeW5jaHJvbm91c2x5LlxuICB9XG4gIHRoaXMuY2FuY2VsID0gdGhpcy5ob29rcyAmJiB0aGlzLmhvb2tzLmVudGVyQ2FuY2VsbGVkO1xuICBwdXNoSm9iKHRoaXMuZW50ZXJOZXh0VGljayk7XG59O1xuXG4vKipcbiAqIFRoZSBcIm5leHRUaWNrXCIgcGhhc2Ugb2YgYW4gZW50ZXJpbmcgdHJhbnNpdGlvbiwgd2hpY2ggaXNcbiAqIHRvIGJlIHB1c2hlZCBpbnRvIGEgcXVldWUgYW5kIGV4ZWN1dGVkIGFmdGVyIGEgcmVmbG93IHNvXG4gKiB0aGF0IHJlbW92aW5nIHRoZSBjbGFzcyBjYW4gdHJpZ2dlciBhIENTUyB0cmFuc2l0aW9uLlxuICovXG5cbnAkMS5lbnRlck5leHRUaWNrID0gZnVuY3Rpb24gKCkge1xuICAvLyBJbXBvcnRhbnQgaGFjazpcbiAgLy8gaW4gQ2hyb21lLCBpZiBhIGp1c3QtZW50ZXJlZCBlbGVtZW50IGlzIGFwcGxpZWQgdGhlXG4gIC8vIGxlYXZlIGNsYXNzIHdoaWxlIGl0cyBpbnRlcnBvbGF0ZWQgcHJvcGVydHkgc3RpbGwgaGFzXG4gIC8vIGEgdmVyeSBzbWFsbCB2YWx1ZSAod2l0aGluIG9uZSBmcmFtZSksIENocm9tZSB3aWxsXG4gIC8vIHNraXAgdGhlIGxlYXZlIHRyYW5zaXRpb24gZW50aXJlbHkgYW5kIG5vdCBmaXJpbmcgdGhlXG4gIC8vIHRyYW5zdGlvbmVuZCBldmVudC4gVGhlcmVmb3JlIHdlIG5lZWQgdG8gcHJvdGVjdGVkXG4gIC8vIGFnYWluc3Qgc3VjaCBjYXNlcyB1c2luZyBhIG9uZS1mcmFtZSB0aW1lb3V0LlxuICB0aGlzLmp1c3RFbnRlcmVkID0gdHJ1ZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLmp1c3RFbnRlcmVkID0gZmFsc2U7XG4gIH0sIDE3KTtcblxuICB2YXIgZW50ZXJEb25lID0gdGhpcy5lbnRlckRvbmU7XG4gIHZhciB0eXBlID0gdGhpcy5nZXRDc3NUcmFuc2l0aW9uVHlwZSh0aGlzLmVudGVyQ2xhc3MpO1xuICBpZiAoIXRoaXMucGVuZGluZ0pzQ2IpIHtcbiAgICBpZiAodHlwZSA9PT0gVFlQRV9UUkFOU0lUSU9OKSB7XG4gICAgICAvLyB0cmlnZ2VyIHRyYW5zaXRpb24gYnkgcmVtb3ZpbmcgZW50ZXIgY2xhc3Mgbm93XG4gICAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpO1xuICAgICAgdGhpcy5zZXR1cENzc0NiKHRyYW5zaXRpb25FbmRFdmVudCwgZW50ZXJEb25lKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFRZUEVfQU5JTUFUSU9OKSB7XG4gICAgICB0aGlzLnNldHVwQ3NzQ2IoYW5pbWF0aW9uRW5kRXZlbnQsIGVudGVyRG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyRG9uZSgpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlID09PSBUWVBFX1RSQU5TSVRJT04pIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpO1xuICB9XG59O1xuXG4vKipcbiAqIFRoZSBcImNsZWFudXBcIiBwaGFzZSBvZiBhbiBlbnRlcmluZyB0cmFuc2l0aW9uLlxuICovXG5cbnAkMS5lbnRlckRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW50ZXJlZCA9IHRydWU7XG4gIHRoaXMuY2FuY2VsID0gdGhpcy5wZW5kaW5nSnNDYiA9IG51bGw7XG4gIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMuZW50ZXJDbGFzcyk7XG4gIHRoaXMuY2FsbEhvb2soJ2FmdGVyRW50ZXInKTtcbiAgaWYgKHRoaXMuY2IpIHRoaXMuY2IoKTtcbn07XG5cbi8qKlxuICogU3RhcnQgYSBsZWF2aW5nIHRyYW5zaXRpb24uXG4gKlxuICogMS4gbGVhdmUgdHJhbnNpdGlvbiB0cmlnZ2VyZWQuXG4gKiAyLiBjYWxsIGJlZm9yZUxlYXZlIGhvb2tcbiAqIDMuIGFkZCBsZWF2ZSBjbGFzcyAodHJpZ2dlciBjc3MgdHJhbnNpdGlvbilcbiAqIDQuIGNhbGwgbGVhdmUgaG9vayAod2l0aCBwb3NzaWJsZSBleHBsaWNpdCBqcyBjYWxsYmFjaylcbiAqIDUuIHJlZmxvdyBpZiBubyBleHBsaWNpdCBqcyBjYWxsYmFjayBpcyBwcm92aWRlZFxuICogNi4gYmFzZWQgb24gdHJhbnNpdGlvbiB0eXBlOlxuICogICAgLSB0cmFuc2l0aW9uIG9yIGFuaW1hdGlvbjpcbiAqICAgICAgICB3YWl0IGZvciBlbmQgZXZlbnQsIHJlbW92ZSBjbGFzcywgdGhlbiBkb25lIGlmXG4gKiAgICAgICAgdGhlcmUncyBubyBleHBsaWNpdCBqcyBjYWxsYmFjay5cbiAqICAgIC0gbm8gY3NzIHRyYW5zaXRpb246XG4gKiAgICAgICAgZG9uZSBpZiB0aGVyZSdzIG5vIGV4cGxpY2l0IGpzIGNhbGxiYWNrLlxuICogNy4gd2FpdCBmb3IgZWl0aGVyIGRvbmUgb3IganMgY2FsbGJhY2ssIHRoZW4gY2FsbFxuICogICAgYWZ0ZXJMZWF2ZSBob29rLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9wIC0gcmVtb3ZlL2hpZGUgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAqL1xuXG5wJDEubGVhdmUgPSBmdW5jdGlvbiAob3AsIGNiKSB7XG4gIHRoaXMuY2FuY2VsUGVuZGluZygpO1xuICB0aGlzLmNhbGxIb29rKCdiZWZvcmVMZWF2ZScpO1xuICB0aGlzLm9wID0gb3A7XG4gIHRoaXMuY2IgPSBjYjtcbiAgYWRkQ2xhc3ModGhpcy5lbCwgdGhpcy5sZWF2ZUNsYXNzKTtcbiAgdGhpcy5sZWZ0ID0gZmFsc2U7XG4gIHRoaXMuY2FsbEhvb2tXaXRoQ2IoJ2xlYXZlJyk7XG4gIGlmICh0aGlzLmxlZnQpIHtcbiAgICByZXR1cm47IC8vIHVzZXIgY2FsbGVkIGRvbmUgc3luY2hyb25vdXNseS5cbiAgfVxuICB0aGlzLmNhbmNlbCA9IHRoaXMuaG9va3MgJiYgdGhpcy5ob29rcy5sZWF2ZUNhbmNlbGxlZDtcbiAgLy8gb25seSBuZWVkIHRvIGhhbmRsZSBsZWF2ZURvbmUgaWZcbiAgLy8gMS4gdGhlIHRyYW5zaXRpb24gaXMgYWxyZWFkeSBkb25lIChzeW5jaHJvbm91c2x5IGNhbGxlZFxuICAvLyAgICBieSB0aGUgdXNlciwgd2hpY2ggY2F1c2VzIHRoaXMub3Agc2V0IHRvIG51bGwpXG4gIC8vIDIuIHRoZXJlJ3Mgbm8gZXhwbGljaXQganMgY2FsbGJhY2tcbiAgaWYgKHRoaXMub3AgJiYgIXRoaXMucGVuZGluZ0pzQ2IpIHtcbiAgICAvLyBpZiBhIENTUyB0cmFuc2l0aW9uIGxlYXZlcyBpbW1lZGlhdGVseSBhZnRlciBlbnRlcixcbiAgICAvLyB0aGUgdHJhbnNpdGlvbmVuZCBldmVudCBuZXZlciBmaXJlcy4gdGhlcmVmb3JlIHdlXG4gICAgLy8gZGV0ZWN0IHN1Y2ggY2FzZXMgYW5kIGVuZCB0aGUgbGVhdmUgaW1tZWRpYXRlbHkuXG4gICAgaWYgKHRoaXMuanVzdEVudGVyZWQpIHtcbiAgICAgIHRoaXMubGVhdmVEb25lKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB1c2hKb2IodGhpcy5sZWF2ZU5leHRUaWNrKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVGhlIFwibmV4dFRpY2tcIiBwaGFzZSBvZiBhIGxlYXZpbmcgdHJhbnNpdGlvbi5cbiAqL1xuXG5wJDEubGVhdmVOZXh0VGljayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHR5cGUgPSB0aGlzLmdldENzc1RyYW5zaXRpb25UeXBlKHRoaXMubGVhdmVDbGFzcyk7XG4gIGlmICh0eXBlKSB7XG4gICAgdmFyIGV2ZW50ID0gdHlwZSA9PT0gVFlQRV9UUkFOU0lUSU9OID8gdHJhbnNpdGlvbkVuZEV2ZW50IDogYW5pbWF0aW9uRW5kRXZlbnQ7XG4gICAgdGhpcy5zZXR1cENzc0NiKGV2ZW50LCB0aGlzLmxlYXZlRG9uZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5sZWF2ZURvbmUoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgXCJjbGVhbnVwXCIgcGhhc2Ugb2YgYSBsZWF2aW5nIHRyYW5zaXRpb24uXG4gKi9cblxucCQxLmxlYXZlRG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5sZWZ0ID0gdHJ1ZTtcbiAgdGhpcy5jYW5jZWwgPSB0aGlzLnBlbmRpbmdKc0NiID0gbnVsbDtcbiAgdGhpcy5vcCgpO1xuICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmxlYXZlQ2xhc3MpO1xuICB0aGlzLmNhbGxIb29rKCdhZnRlckxlYXZlJyk7XG4gIGlmICh0aGlzLmNiKSB0aGlzLmNiKCk7XG4gIHRoaXMub3AgPSBudWxsO1xufTtcblxuLyoqXG4gKiBDYW5jZWwgYW55IHBlbmRpbmcgY2FsbGJhY2tzIGZyb20gYSBwcmV2aW91c2x5IHJ1bm5pbmdcbiAqIGJ1dCBub3QgZmluaXNoZWQgdHJhbnNpdGlvbi5cbiAqL1xuXG5wJDEuY2FuY2VsUGVuZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcCA9IHRoaXMuY2IgPSBudWxsO1xuICB2YXIgaGFzUGVuZGluZyA9IGZhbHNlO1xuICBpZiAodGhpcy5wZW5kaW5nQ3NzQ2IpIHtcbiAgICBoYXNQZW5kaW5nID0gdHJ1ZTtcbiAgICBvZmYodGhpcy5lbCwgdGhpcy5wZW5kaW5nQ3NzRXZlbnQsIHRoaXMucGVuZGluZ0Nzc0NiKTtcbiAgICB0aGlzLnBlbmRpbmdDc3NFdmVudCA9IHRoaXMucGVuZGluZ0Nzc0NiID0gbnVsbDtcbiAgfVxuICBpZiAodGhpcy5wZW5kaW5nSnNDYikge1xuICAgIGhhc1BlbmRpbmcgPSB0cnVlO1xuICAgIHRoaXMucGVuZGluZ0pzQ2IuY2FuY2VsKCk7XG4gICAgdGhpcy5wZW5kaW5nSnNDYiA9IG51bGw7XG4gIH1cbiAgaWYgKGhhc1BlbmRpbmcpIHtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsLCB0aGlzLmVudGVyQ2xhc3MpO1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWwsIHRoaXMubGVhdmVDbGFzcyk7XG4gIH1cbiAgaWYgKHRoaXMuY2FuY2VsKSB7XG4gICAgdGhpcy5jYW5jZWwuY2FsbCh0aGlzLnZtLCB0aGlzLmVsKTtcbiAgICB0aGlzLmNhbmNlbCA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbCBhIHVzZXItcHJvdmlkZWQgc3luY2hyb25vdXMgaG9vayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5cbnAkMS5jYWxsSG9vayA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGlmICh0aGlzLmhvb2tzICYmIHRoaXMuaG9va3NbdHlwZV0pIHtcbiAgICB0aGlzLmhvb2tzW3R5cGVdLmNhbGwodGhpcy52bSwgdGhpcy5lbCk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbCBhIHVzZXItcHJvdmlkZWQsIHBvdGVudGlhbGx5LWFzeW5jIGhvb2sgZnVuY3Rpb24uXG4gKiBXZSBjaGVjayBmb3IgdGhlIGxlbmd0aCBvZiBhcmd1bWVudHMgdG8gc2VlIGlmIHRoZSBob29rXG4gKiBleHBlY3RzIGEgYGRvbmVgIGNhbGxiYWNrLiBJZiB0cnVlLCB0aGUgdHJhbnNpdGlvbidzIGVuZFxuICogd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHdoZW4gdGhlIHVzZXIgY2FsbHMgdGhhdCBjYWxsYmFjaztcbiAqIG90aGVyd2lzZSwgdGhlIGVuZCBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBDU1MgdHJhbnNpdGlvbiBvclxuICogYW5pbWF0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cblxucCQxLmNhbGxIb29rV2l0aENiID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgdmFyIGhvb2sgPSB0aGlzLmhvb2tzICYmIHRoaXMuaG9va3NbdHlwZV07XG4gIGlmIChob29rKSB7XG4gICAgaWYgKGhvb2subGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5wZW5kaW5nSnNDYiA9IGNhbmNlbGxhYmxlKHRoaXNbdHlwZSArICdEb25lJ10pO1xuICAgIH1cbiAgICBob29rLmNhbGwodGhpcy52bSwgdGhpcy5lbCwgdGhpcy5wZW5kaW5nSnNDYik7XG4gIH1cbn07XG5cbi8qKlxuICogR2V0IGFuIGVsZW1lbnQncyB0cmFuc2l0aW9uIHR5cGUgYmFzZWQgb24gdGhlXG4gKiBjYWxjdWxhdGVkIHN0eWxlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblxucCQxLmdldENzc1RyYW5zaXRpb25UeXBlID0gZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKCF0cmFuc2l0aW9uRW5kRXZlbnQgfHxcbiAgLy8gc2tpcCBDU1MgdHJhbnNpdGlvbnMgaWYgcGFnZSBpcyBub3QgdmlzaWJsZSAtXG4gIC8vIHRoaXMgc29sdmVzIHRoZSBpc3N1ZSBvZiB0cmFuc2l0aW9uZW5kIGV2ZW50cyBub3RcbiAgLy8gZmlyaW5nIHVudGlsIHRoZSBwYWdlIGlzIHZpc2libGUgYWdhaW4uXG4gIC8vIHBhZ2VWaXNpYmlsaXR5IEFQSSBpcyBzdXBwb3J0ZWQgaW4gSUUxMCssIHNhbWUgYXNcbiAgLy8gQ1NTIHRyYW5zaXRpb25zLlxuICBkb2N1bWVudC5oaWRkZW4gfHxcbiAgLy8gZXhwbGljaXQganMtb25seSB0cmFuc2l0aW9uXG4gIHRoaXMuaG9va3MgJiYgdGhpcy5ob29rcy5jc3MgPT09IGZhbHNlIHx8XG4gIC8vIGVsZW1lbnQgaXMgaGlkZGVuXG4gIGlzSGlkZGVuKHRoaXMuZWwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciB0eXBlID0gdGhpcy50eXBlIHx8IHRoaXMudHlwZUNhY2hlW2NsYXNzTmFtZV07XG4gIGlmICh0eXBlKSByZXR1cm4gdHlwZTtcbiAgdmFyIGlubGluZVN0eWxlcyA9IHRoaXMuZWwuc3R5bGU7XG4gIHZhciBjb21wdXRlZFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwpO1xuICB2YXIgdHJhbnNEdXJhdGlvbiA9IGlubGluZVN0eWxlc1t0cmFuc0R1cmF0aW9uUHJvcF0gfHwgY29tcHV0ZWRTdHlsZXNbdHJhbnNEdXJhdGlvblByb3BdO1xuICBpZiAodHJhbnNEdXJhdGlvbiAmJiB0cmFuc0R1cmF0aW9uICE9PSAnMHMnKSB7XG4gICAgdHlwZSA9IFRZUEVfVFJBTlNJVElPTjtcbiAgfSBlbHNlIHtcbiAgICB2YXIgYW5pbUR1cmF0aW9uID0gaW5saW5lU3R5bGVzW2FuaW1EdXJhdGlvblByb3BdIHx8IGNvbXB1dGVkU3R5bGVzW2FuaW1EdXJhdGlvblByb3BdO1xuICAgIGlmIChhbmltRHVyYXRpb24gJiYgYW5pbUR1cmF0aW9uICE9PSAnMHMnKSB7XG4gICAgICB0eXBlID0gVFlQRV9BTklNQVRJT047XG4gICAgfVxuICB9XG4gIGlmICh0eXBlKSB7XG4gICAgdGhpcy50eXBlQ2FjaGVbY2xhc3NOYW1lXSA9IHR5cGU7XG4gIH1cbiAgcmV0dXJuIHR5cGU7XG59O1xuXG4vKipcbiAqIFNldHVwIGEgQ1NTIHRyYW5zaXRpb25lbmQvYW5pbWF0aW9uZW5kIGNhbGxiYWNrLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAqL1xuXG5wJDEuc2V0dXBDc3NDYiA9IGZ1bmN0aW9uIChldmVudCwgY2IpIHtcbiAgdGhpcy5wZW5kaW5nQ3NzRXZlbnQgPSBldmVudDtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgZWwgPSB0aGlzLmVsO1xuICB2YXIgb25FbmQgPSB0aGlzLnBlbmRpbmdDc3NDYiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBlbCkge1xuICAgICAgb2ZmKGVsLCBldmVudCwgb25FbmQpO1xuICAgICAgc2VsZi5wZW5kaW5nQ3NzRXZlbnQgPSBzZWxmLnBlbmRpbmdDc3NDYiA9IG51bGw7XG4gICAgICBpZiAoIXNlbGYucGVuZGluZ0pzQ2IgJiYgY2IpIHtcbiAgICAgICAgY2IoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIG9uKGVsLCBldmVudCwgb25FbmQpO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGhpZGRlbiAtIGluIHRoYXQgY2FzZSB3ZSBjYW4ganVzdFxuICogc2tpcCB0aGUgdHJhbnNpdGlvbiBhbGx0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbmZ1bmN0aW9uIGlzSGlkZGVuKGVsKSB7XG4gIGlmICgvc3ZnJC8udGVzdChlbC5uYW1lc3BhY2VVUkkpKSB7XG4gICAgLy8gU1ZHIGVsZW1lbnRzIGRvIG5vdCBoYXZlIG9mZnNldChXaWR0aHxIZWlnaHQpXG4gICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayB0aGUgY2xpZW50IHJlY3RcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAhKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAhKGVsLm9mZnNldFdpZHRoIHx8IGVsLm9mZnNldEhlaWdodCB8fCBlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG4gIH1cbn1cblxudmFyIHRyYW5zaXRpb24kMSA9IHtcblxuICBwcmlvcml0eTogVFJBTlNJVElPTixcblxuICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShpZCwgb2xkSWQpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIC8vIHJlc29sdmUgb24gb3duZXIgdm1cbiAgICB2YXIgaG9va3MgPSByZXNvbHZlQXNzZXQodGhpcy52bS4kb3B0aW9ucywgJ3RyYW5zaXRpb25zJywgaWQpO1xuICAgIGlkID0gaWQgfHwgJ3YnO1xuICAgIGVsLl9fdl90cmFucyA9IG5ldyBUcmFuc2l0aW9uKGVsLCBpZCwgaG9va3MsIHRoaXMudm0pO1xuICAgIGlmIChvbGRJZCkge1xuICAgICAgcmVtb3ZlQ2xhc3MoZWwsIG9sZElkICsgJy10cmFuc2l0aW9uJyk7XG4gICAgfVxuICAgIGFkZENsYXNzKGVsLCBpZCArICctdHJhbnNpdGlvbicpO1xuICB9XG59O1xuXG52YXIgaW50ZXJuYWxEaXJlY3RpdmVzID0ge1xuICBzdHlsZTogc3R5bGUsXG4gICdjbGFzcyc6IHZDbGFzcyxcbiAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gIHByb3A6IHByb3BEZWYsXG4gIHRyYW5zaXRpb246IHRyYW5zaXRpb24kMVxufTtcblxudmFyIHByb3BCaW5kaW5nTW9kZXMgPSBjb25maWcuX3Byb3BCaW5kaW5nTW9kZXM7XG52YXIgZW1wdHkgPSB7fTtcblxuLy8gcmVnZXhlc1xudmFyIGlkZW50UkUkMSA9IC9eWyRfYS16QS1aXStbXFx3JF0qJC87XG52YXIgc2V0dGFibGVQYXRoUkUgPSAvXltBLVphLXpfJF1bXFx3JF0qKFxcLltBLVphLXpfJF1bXFx3JF0qfFxcW1teXFxbXFxdXStcXF0pKiQvO1xuXG4vKipcbiAqIENvbXBpbGUgcHJvcHMgb24gYSByb290IGVsZW1lbnQgYW5kIHJldHVyblxuICogYSBwcm9wcyBsaW5rIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBlbFxuICogQHBhcmFtIHtBcnJheX0gcHJvcE9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBwcm9wc0xpbmtGblxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVQcm9wcyhlbCwgcHJvcE9wdGlvbnMpIHtcbiAgdmFyIHByb3BzID0gW107XG4gIHZhciBuYW1lcyA9IE9iamVjdC5rZXlzKHByb3BPcHRpb25zKTtcbiAgdmFyIGkgPSBuYW1lcy5sZW5ndGg7XG4gIHZhciBvcHRpb25zLCBuYW1lLCBhdHRyLCB2YWx1ZSwgcGF0aCwgcGFyc2VkLCBwcm9wO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgbmFtZSA9IG5hbWVzW2ldO1xuICAgIG9wdGlvbnMgPSBwcm9wT3B0aW9uc1tuYW1lXSB8fCBlbXB0eTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIG5hbWUgPT09ICckZGF0YScpIHtcbiAgICAgIHdhcm4oJ0RvIG5vdCB1c2UgJGRhdGEgYXMgcHJvcC4nKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHByb3BzIGNvdWxkIGNvbnRhaW4gZGFzaGVzLCB3aGljaCB3aWxsIGJlXG4gICAgLy8gaW50ZXJwcmV0ZWQgYXMgbWludXMgY2FsY3VsYXRpb25zIGJ5IHRoZSBwYXJzZXJcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGNhbWVsaXplIHRoZSBwYXRoIGhlcmVcbiAgICBwYXRoID0gY2FtZWxpemUobmFtZSk7XG4gICAgaWYgKCFpZGVudFJFJDEudGVzdChwYXRoKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdJbnZhbGlkIHByb3Aga2V5OiBcIicgKyBuYW1lICsgJ1wiLiBQcm9wIGtleXMgJyArICdtdXN0IGJlIHZhbGlkIGlkZW50aWZpZXJzLicpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcHJvcCA9IHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgIG1vZGU6IHByb3BCaW5kaW5nTW9kZXMuT05FX1dBWSxcbiAgICAgIHJhdzogbnVsbFxuICAgIH07XG5cbiAgICBhdHRyID0gaHlwaGVuYXRlKG5hbWUpO1xuICAgIC8vIGZpcnN0IGNoZWNrIGR5bmFtaWMgdmVyc2lvblxuICAgIGlmICgodmFsdWUgPSBnZXRCaW5kQXR0cihlbCwgYXR0cikpID09PSBudWxsKSB7XG4gICAgICBpZiAoKHZhbHVlID0gZ2V0QmluZEF0dHIoZWwsIGF0dHIgKyAnLnN5bmMnKSkgIT09IG51bGwpIHtcbiAgICAgICAgcHJvcC5tb2RlID0gcHJvcEJpbmRpbmdNb2Rlcy5UV09fV0FZO1xuICAgICAgfSBlbHNlIGlmICgodmFsdWUgPSBnZXRCaW5kQXR0cihlbCwgYXR0ciArICcub25jZScpKSAhPT0gbnVsbCkge1xuICAgICAgICBwcm9wLm1vZGUgPSBwcm9wQmluZGluZ01vZGVzLk9ORV9USU1FO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgIC8vIGhhcyBkeW5hbWljIGJpbmRpbmchXG4gICAgICBwcm9wLnJhdyA9IHZhbHVlO1xuICAgICAgcGFyc2VkID0gcGFyc2VEaXJlY3RpdmUodmFsdWUpO1xuICAgICAgdmFsdWUgPSBwYXJzZWQuZXhwcmVzc2lvbjtcbiAgICAgIHByb3AuZmlsdGVycyA9IHBhcnNlZC5maWx0ZXJzO1xuICAgICAgLy8gY2hlY2sgYmluZGluZyB0eXBlXG4gICAgICBpZiAoaXNMaXRlcmFsKHZhbHVlKSAmJiAhcGFyc2VkLmZpbHRlcnMpIHtcbiAgICAgICAgLy8gZm9yIGV4cHJlc3Npb25zIGNvbnRhaW5pbmcgbGl0ZXJhbCBudW1iZXJzIGFuZFxuICAgICAgICAvLyBib29sZWFucywgdGhlcmUncyBubyBuZWVkIHRvIHNldHVwIGEgcHJvcCBiaW5kaW5nLFxuICAgICAgICAvLyBzbyB3ZSBjYW4gb3B0aW1pemUgdGhlbSBhcyBhIG9uZS10aW1lIHNldC5cbiAgICAgICAgcHJvcC5vcHRpbWl6ZWRMaXRlcmFsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3AuZHluYW1pYyA9IHRydWU7XG4gICAgICAgIC8vIGNoZWNrIG5vbi1zZXR0YWJsZSBwYXRoIGZvciB0d28td2F5IGJpbmRpbmdzXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHByb3AubW9kZSA9PT0gcHJvcEJpbmRpbmdNb2Rlcy5UV09fV0FZICYmICFzZXR0YWJsZVBhdGhSRS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgIHByb3AubW9kZSA9IHByb3BCaW5kaW5nTW9kZXMuT05FX1dBWTtcbiAgICAgICAgICB3YXJuKCdDYW5ub3QgYmluZCB0d28td2F5IHByb3Agd2l0aCBub24tc2V0dGFibGUgJyArICdwYXJlbnQgcGF0aDogJyArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHJvcC5wYXJlbnRQYXRoID0gdmFsdWU7XG5cbiAgICAgIC8vIHdhcm4gcmVxdWlyZWQgdHdvLXdheVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgb3B0aW9ucy50d29XYXkgJiYgcHJvcC5tb2RlICE9PSBwcm9wQmluZGluZ01vZGVzLlRXT19XQVkpIHtcbiAgICAgICAgd2FybignUHJvcCBcIicgKyBuYW1lICsgJ1wiIGV4cGVjdHMgYSB0d28td2F5IGJpbmRpbmcgdHlwZS4nKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCh2YWx1ZSA9IGdldEF0dHIoZWwsIGF0dHIpKSAhPT0gbnVsbCkge1xuICAgICAgLy8gaGFzIGxpdGVyYWwgYmluZGluZyFcbiAgICAgIHByb3AucmF3ID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBjaGVjayBwb3NzaWJsZSBjYW1lbENhc2UgcHJvcCB1c2FnZVxuICAgICAgdmFyIGxvd2VyQ2FzZU5hbWUgPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YWx1ZSA9IC9bQS1aXFwtXS8udGVzdChuYW1lKSAmJiAoZWwuZ2V0QXR0cmlidXRlKGxvd2VyQ2FzZU5hbWUpIHx8IGVsLmdldEF0dHJpYnV0ZSgnOicgKyBsb3dlckNhc2VOYW1lKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3YtYmluZDonICsgbG93ZXJDYXNlTmFtZSkgfHwgZWwuZ2V0QXR0cmlidXRlKCc6JyArIGxvd2VyQ2FzZU5hbWUgKyAnLm9uY2UnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3YtYmluZDonICsgbG93ZXJDYXNlTmFtZSArICcub25jZScpIHx8IGVsLmdldEF0dHJpYnV0ZSgnOicgKyBsb3dlckNhc2VOYW1lICsgJy5zeW5jJykgfHwgZWwuZ2V0QXR0cmlidXRlKCd2LWJpbmQ6JyArIGxvd2VyQ2FzZU5hbWUgKyAnLnN5bmMnKSk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgd2FybignUG9zc2libGUgdXNhZ2UgZXJyb3IgZm9yIHByb3AgYCcgKyBsb3dlckNhc2VOYW1lICsgJ2AgLSAnICsgJ2RpZCB5b3UgbWVhbiBgJyArIGF0dHIgKyAnYD8gSFRNTCBpcyBjYXNlLWluc2Vuc2l0aXZlLCByZW1lbWJlciB0byB1c2UgJyArICdrZWJhYi1jYXNlIGZvciBwcm9wcyBpbiB0ZW1wbGF0ZXMuJyk7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvbnMucmVxdWlyZWQpIHtcbiAgICAgICAgLy8gd2FybiBtaXNzaW5nIHJlcXVpcmVkXG4gICAgICAgIHdhcm4oJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogJyArIG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBwdXNoIHByb3BcbiAgICBwcm9wcy5wdXNoKHByb3ApO1xuICB9XG4gIHJldHVybiBtYWtlUHJvcHNMaW5rRm4ocHJvcHMpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgZnVuY3Rpb24gdGhhdCBhcHBsaWVzIHByb3BzIHRvIGEgdm0uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBwcm9wc0xpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VQcm9wc0xpbmtGbihwcm9wcykge1xuICByZXR1cm4gZnVuY3Rpb24gcHJvcHNMaW5rRm4odm0sIHNjb3BlKSB7XG4gICAgLy8gc3RvcmUgcmVzb2x2ZWQgcHJvcHMgaW5mb1xuICAgIHZtLl9wcm9wcyA9IHt9O1xuICAgIHZhciBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHZhciBwcm9wLCBwYXRoLCBvcHRpb25zLCB2YWx1ZSwgcmF3O1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHByb3AgPSBwcm9wc1tpXTtcbiAgICAgIHJhdyA9IHByb3AucmF3O1xuICAgICAgcGF0aCA9IHByb3AucGF0aDtcbiAgICAgIG9wdGlvbnMgPSBwcm9wLm9wdGlvbnM7XG4gICAgICB2bS5fcHJvcHNbcGF0aF0gPSBwcm9wO1xuICAgICAgaWYgKHJhdyA9PT0gbnVsbCkge1xuICAgICAgICAvLyBpbml0aWFsaXplIGFic2VudCBwcm9wXG4gICAgICAgIGluaXRQcm9wKHZtLCBwcm9wLCBnZXREZWZhdWx0KHZtLCBvcHRpb25zKSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3AuZHluYW1pYykge1xuICAgICAgICAvLyBkeW5hbWljIHByb3BcbiAgICAgICAgaWYgKHByb3AubW9kZSA9PT0gcHJvcEJpbmRpbmdNb2Rlcy5PTkVfVElNRSkge1xuICAgICAgICAgIC8vIG9uZSB0aW1lIGJpbmRpbmdcbiAgICAgICAgICB2YWx1ZSA9IChzY29wZSB8fCB2bS5fY29udGV4dCB8fCB2bSkuJGdldChwcm9wLnBhcmVudFBhdGgpO1xuICAgICAgICAgIGluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHZtLl9jb250ZXh0KSB7XG4gICAgICAgICAgICAvLyBkeW5hbWljIGJpbmRpbmdcbiAgICAgICAgICAgIHZtLl9iaW5kRGlyKHtcbiAgICAgICAgICAgICAgbmFtZTogJ3Byb3AnLFxuICAgICAgICAgICAgICBkZWY6IHByb3BEZWYsXG4gICAgICAgICAgICAgIHByb3A6IHByb3BcbiAgICAgICAgICAgIH0sIG51bGwsIG51bGwsIHNjb3BlKTsgLy8gZWwsIGhvc3QsIHNjb3BlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gcm9vdCBpbnN0YW5jZVxuICAgICAgICAgICAgICBpbml0UHJvcCh2bSwgcHJvcCwgdm0uJGdldChwcm9wLnBhcmVudFBhdGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwcm9wLm9wdGltaXplZExpdGVyYWwpIHtcbiAgICAgICAgLy8gb3B0aW1pemVkIGxpdGVyYWwsIGNhc3QgaXQgYW5kIGp1c3Qgc2V0IG9uY2VcbiAgICAgICAgdmFyIHN0cmlwcGVkID0gc3RyaXBRdW90ZXMocmF3KTtcbiAgICAgICAgdmFsdWUgPSBzdHJpcHBlZCA9PT0gcmF3ID8gdG9Cb29sZWFuKHRvTnVtYmVyKHJhdykpIDogc3RyaXBwZWQ7XG4gICAgICAgIGluaXRQcm9wKHZtLCBwcm9wLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBzdHJpbmcgbGl0ZXJhbCwgYnV0IHdlIG5lZWQgdG8gY2F0ZXIgZm9yXG4gICAgICAgIC8vIEJvb2xlYW4gcHJvcHMgd2l0aCBubyB2YWx1ZVxuICAgICAgICB2YWx1ZSA9IG9wdGlvbnMudHlwZSA9PT0gQm9vbGVhbiAmJiByYXcgPT09ICcnID8gdHJ1ZSA6IHJhdztcbiAgICAgICAgaW5pdFByb3Aodm0sIHByb3AsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBkZWZhdWx0IHZhbHVlIG9mIGEgcHJvcC5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cbmZ1bmN0aW9uIGdldERlZmF1bHQodm0sIG9wdGlvbnMpIHtcbiAgLy8gbm8gZGVmYXVsdCwgcmV0dXJuIHVuZGVmaW5lZFxuICBpZiAoIWhhc093bihvcHRpb25zLCAnZGVmYXVsdCcpKSB7XG4gICAgLy8gYWJzZW50IGJvb2xlYW4gdmFsdWUgZGVmYXVsdHMgdG8gZmFsc2VcbiAgICByZXR1cm4gb3B0aW9ucy50eXBlID09PSBCb29sZWFuID8gZmFsc2UgOiB1bmRlZmluZWQ7XG4gIH1cbiAgdmFyIGRlZiA9IG9wdGlvbnNbJ2RlZmF1bHQnXTtcbiAgLy8gd2FybiBhZ2FpbnN0IG5vbi1mYWN0b3J5IGRlZmF1bHRzIGZvciBPYmplY3QgJiBBcnJheVxuICBpZiAoaXNPYmplY3QoZGVmKSkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignT2JqZWN0L0FycmF5IGFzIGRlZmF1bHQgcHJvcCB2YWx1ZXMgd2lsbCBiZSBzaGFyZWQgJyArICdhY3Jvc3MgbXVsdGlwbGUgaW5zdGFuY2VzLiBVc2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgKyAndG8gcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGluc3RlYWQuJyk7XG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgcmV0dXJuIHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucy50eXBlICE9PSBGdW5jdGlvbiA/IGRlZi5jYWxsKHZtKSA6IGRlZjtcbn1cblxuLy8gc3BlY2lhbCBiaW5kaW5nIHByZWZpeGVzXG52YXIgYmluZFJFID0gL152LWJpbmQ6fF46LztcbnZhciBvblJFID0gL152LW9uOnxeQC87XG52YXIgZGlyQXR0clJFID0gL152LShbXjpdKykoPzokfDooLiopJCkvO1xudmFyIG1vZGlmaWVyUkUgPSAvXFwuW15cXC5dKy9nO1xudmFyIHRyYW5zaXRpb25SRSA9IC9eKHYtYmluZDp8Oik/dHJhbnNpdGlvbiQvO1xuXG4vLyB0ZXJtaW5hbCBkaXJlY3RpdmVzXG52YXIgdGVybWluYWxEaXJlY3RpdmVzID0gWydmb3InLCAnaWYnXTtcblxuLy8gZGVmYXVsdCBkaXJlY3RpdmUgcHJpb3JpdHlcbnZhciBERUZBVUxUX1BSSU9SSVRZID0gMTAwMDtcblxuLyoqXG4gKiBDb21waWxlIGEgdGVtcGxhdGUgYW5kIHJldHVybiBhIHJldXNhYmxlIGNvbXBvc2l0ZSBsaW5rXG4gKiBmdW5jdGlvbiwgd2hpY2ggcmVjdXJzaXZlbHkgY29udGFpbnMgbW9yZSBsaW5rIGZ1bmN0aW9uc1xuICogaW5zaWRlLiBUaGlzIHRvcCBsZXZlbCBjb21waWxlIGZ1bmN0aW9uIHdvdWxkIG5vcm1hbGx5XG4gKiBiZSBjYWxsZWQgb24gaW5zdGFuY2Ugcm9vdCBub2RlcywgYnV0IGNhbiBhbHNvIGJlIHVzZWRcbiAqIGZvciBwYXJ0aWFsIGNvbXBpbGF0aW9uIGlmIHRoZSBwYXJ0aWFsIGFyZ3VtZW50IGlzIHRydWUuXG4gKlxuICogVGhlIHJldHVybmVkIGNvbXBvc2l0ZSBsaW5rIGZ1bmN0aW9uLCB3aGVuIGNhbGxlZCwgd2lsbFxuICogcmV0dXJuIGFuIHVubGluayBmdW5jdGlvbiB0aGF0IHRlYXJzZG93biBhbGwgZGlyZWN0aXZlc1xuICogY3JlYXRlZCBkdXJpbmcgdGhlIGxpbmtpbmcgcGhhc2UuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBwYXJ0aWFsXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlKGVsLCBvcHRpb25zLCBwYXJ0aWFsKSB7XG4gIC8vIGxpbmsgZnVuY3Rpb24gZm9yIHRoZSBub2RlIGl0c2VsZi5cbiAgdmFyIG5vZGVMaW5rRm4gPSBwYXJ0aWFsIHx8ICFvcHRpb25zLl9hc0NvbXBvbmVudCA/IGNvbXBpbGVOb2RlKGVsLCBvcHRpb25zKSA6IG51bGw7XG4gIC8vIGxpbmsgZnVuY3Rpb24gZm9yIHRoZSBjaGlsZE5vZGVzXG4gIHZhciBjaGlsZExpbmtGbiA9ICEobm9kZUxpbmtGbiAmJiBub2RlTGlua0ZuLnRlcm1pbmFsKSAmJiBlbC50YWdOYW1lICE9PSAnU0NSSVBUJyAmJiBlbC5oYXNDaGlsZE5vZGVzKCkgPyBjb21waWxlTm9kZUxpc3QoZWwuY2hpbGROb2Rlcywgb3B0aW9ucykgOiBudWxsO1xuXG4gIC8qKlxuICAgKiBBIGNvbXBvc2l0ZSBsaW5rZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGEgYWxyZWFkeVxuICAgKiBjb21waWxlZCBwaWVjZSBvZiBET00sIHdoaWNoIGluc3RhbnRpYXRlcyBhbGwgZGlyZWN0aXZlXG4gICAqIGluc3RhbmNlcy5cbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSBlbFxuICAgKiBAcGFyYW0ge1Z1ZX0gW2hvc3RdIC0gaG9zdCB2bSBvZiB0cmFuc2NsdWRlZCBjb250ZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIC0gdi1mb3Igc2NvcGVcbiAgICogQHBhcmFtIHtGcmFnbWVudH0gW2ZyYWddIC0gbGluayBjb250ZXh0IGZyYWdtZW50XG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAgICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXBvc2l0ZUxpbmtGbih2bSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgLy8gY2FjaGUgY2hpbGROb2RlcyBiZWZvcmUgbGlua2luZyBwYXJlbnQsIGZpeCAjNjU3XG4gICAgdmFyIGNoaWxkTm9kZXMgPSB0b0FycmF5KGVsLmNoaWxkTm9kZXMpO1xuICAgIC8vIGxpbmtcbiAgICB2YXIgZGlycyA9IGxpbmtBbmRDYXB0dXJlKGZ1bmN0aW9uIGNvbXBvc2l0ZUxpbmtDYXB0dXJlcigpIHtcbiAgICAgIGlmIChub2RlTGlua0ZuKSBub2RlTGlua0ZuKHZtLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpO1xuICAgICAgaWYgKGNoaWxkTGlua0ZuKSBjaGlsZExpbmtGbih2bSwgY2hpbGROb2RlcywgaG9zdCwgc2NvcGUsIGZyYWcpO1xuICAgIH0sIHZtKTtcbiAgICByZXR1cm4gbWFrZVVubGlua0ZuKHZtLCBkaXJzKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBBcHBseSBhIGxpbmtlciB0byBhIHZtL2VsZW1lbnQgcGFpciBhbmQgY2FwdHVyZSB0aGVcbiAqIGRpcmVjdGl2ZXMgY3JlYXRlZCBkdXJpbmcgdGhlIHByb2Nlc3MuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gbGlua2VyXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5mdW5jdGlvbiBsaW5rQW5kQ2FwdHVyZShsaW5rZXIsIHZtKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIHJlc2V0IGRpcmVjdGl2ZXMgYmVmb3JlIGV2ZXJ5IGNhcHR1cmUgaW4gcHJvZHVjdGlvblxuICAgIC8vIG1vZGUsIHNvIHRoYXQgd2hlbiB1bmxpbmtpbmcgd2UgZG9uJ3QgbmVlZCB0byBzcGxpY2VcbiAgICAvLyB0aGVtIG91dCAod2hpY2ggdHVybnMgb3V0IHRvIGJlIGEgcGVyZiBoaXQpLlxuICAgIC8vIHRoZXkgYXJlIGtlcHQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIHRoZXkgYXJlXG4gICAgLy8gdXNlZnVsIGZvciBWdWUncyBvd24gdGVzdHMuXG4gICAgdm0uX2RpcmVjdGl2ZXMgPSBbXTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEaXJDb3VudCA9IHZtLl9kaXJlY3RpdmVzLmxlbmd0aDtcbiAgbGlua2VyKCk7XG4gIHZhciBkaXJzID0gdm0uX2RpcmVjdGl2ZXMuc2xpY2Uob3JpZ2luYWxEaXJDb3VudCk7XG4gIGRpcnMuc29ydChkaXJlY3RpdmVDb21wYXJhdG9yKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBkaXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRpcnNbaV0uX2JpbmQoKTtcbiAgfVxuICByZXR1cm4gZGlycztcbn1cblxuLyoqXG4gKiBEaXJlY3RpdmUgcHJpb3JpdHkgc29ydCBjb21wYXJhdG9yXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKi9cblxuZnVuY3Rpb24gZGlyZWN0aXZlQ29tcGFyYXRvcihhLCBiKSB7XG4gIGEgPSBhLmRlc2NyaXB0b3IuZGVmLnByaW9yaXR5IHx8IERFRkFVTFRfUFJJT1JJVFk7XG4gIGIgPSBiLmRlc2NyaXB0b3IuZGVmLnByaW9yaXR5IHx8IERFRkFVTFRfUFJJT1JJVFk7XG4gIHJldHVybiBhID4gYiA/IC0xIDogYSA9PT0gYiA/IDAgOiAxO1xufVxuXG4vKipcbiAqIExpbmtlciBmdW5jdGlvbnMgcmV0dXJuIGFuIHVubGluayBmdW5jdGlvbiB0aGF0XG4gKiB0ZWFyc2Rvd24gYWxsIGRpcmVjdGl2ZXMgaW5zdGFuY2VzIGdlbmVyYXRlZCBkdXJpbmdcbiAqIHRoZSBwcm9jZXNzLlxuICpcbiAqIFdlIGNyZWF0ZSB1bmxpbmsgZnVuY3Rpb25zIHdpdGggb25seSB0aGUgbmVjZXNzYXJ5XG4gKiBpbmZvcm1hdGlvbiB0byBhdm9pZCByZXRhaW5pbmcgYWRkaXRpb25hbCBjbG9zdXJlcy5cbiAqXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7QXJyYXl9IGRpcnNcbiAqIEBwYXJhbSB7VnVlfSBbY29udGV4dF1cbiAqIEBwYXJhbSB7QXJyYXl9IFtjb250ZXh0RGlyc11cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIG1ha2VVbmxpbmtGbih2bSwgZGlycywgY29udGV4dCwgY29udGV4dERpcnMpIHtcbiAgZnVuY3Rpb24gdW5saW5rKGRlc3Ryb3lpbmcpIHtcbiAgICB0ZWFyZG93bkRpcnModm0sIGRpcnMsIGRlc3Ryb3lpbmcpO1xuICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHREaXJzKSB7XG4gICAgICB0ZWFyZG93bkRpcnMoY29udGV4dCwgY29udGV4dERpcnMpO1xuICAgIH1cbiAgfVxuICAvLyBleHBvc2UgbGlua2VkIGRpcmVjdGl2ZXNcbiAgdW5saW5rLmRpcnMgPSBkaXJzO1xuICByZXR1cm4gdW5saW5rO1xufVxuXG4vKipcbiAqIFRlYXJkb3duIHBhcnRpYWwgbGlua2VkIGRpcmVjdGl2ZXMuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge0FycmF5fSBkaXJzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRlc3Ryb3lpbmdcbiAqL1xuXG5mdW5jdGlvbiB0ZWFyZG93bkRpcnModm0sIGRpcnMsIGRlc3Ryb3lpbmcpIHtcbiAgdmFyIGkgPSBkaXJzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIGRpcnNbaV0uX3RlYXJkb3duKCk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWRlc3Ryb3lpbmcpIHtcbiAgICAgIHZtLl9kaXJlY3RpdmVzLiRyZW1vdmUoZGlyc1tpXSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ29tcGlsZSBsaW5rIHByb3BzIG9uIGFuIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZUFuZExpbmtQcm9wcyh2bSwgZWwsIHByb3BzLCBzY29wZSkge1xuICB2YXIgcHJvcHNMaW5rRm4gPSBjb21waWxlUHJvcHMoZWwsIHByb3BzKTtcbiAgdmFyIHByb3BEaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgIHByb3BzTGlua0ZuKHZtLCBzY29wZSk7XG4gIH0sIHZtKTtcbiAgcmV0dXJuIG1ha2VVbmxpbmtGbih2bSwgcHJvcERpcnMpO1xufVxuXG4vKipcbiAqIENvbXBpbGUgdGhlIHJvb3QgZWxlbWVudCBvZiBhbiBpbnN0YW5jZS5cbiAqXG4gKiAxLiBhdHRycyBvbiBjb250ZXh0IGNvbnRhaW5lciAoY29udGV4dCBzY29wZSlcbiAqIDIuIGF0dHJzIG9uIHRoZSBjb21wb25lbnQgdGVtcGxhdGUgcm9vdCBub2RlLCBpZlxuICogICAgcmVwbGFjZTp0cnVlIChjaGlsZCBzY29wZSlcbiAqXG4gKiBJZiB0aGlzIGlzIGEgZnJhZ21lbnQgaW5zdGFuY2UsIHdlIG9ubHkgbmVlZCB0byBjb21waWxlIDEuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0T3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZVJvb3QoZWwsIG9wdGlvbnMsIGNvbnRleHRPcHRpb25zKSB7XG4gIHZhciBjb250YWluZXJBdHRycyA9IG9wdGlvbnMuX2NvbnRhaW5lckF0dHJzO1xuICB2YXIgcmVwbGFjZXJBdHRycyA9IG9wdGlvbnMuX3JlcGxhY2VyQXR0cnM7XG4gIHZhciBjb250ZXh0TGlua0ZuLCByZXBsYWNlckxpbmtGbjtcblxuICAvLyBvbmx5IG5lZWQgdG8gY29tcGlsZSBvdGhlciBhdHRyaWJ1dGVzIGZvclxuICAvLyBub24tZnJhZ21lbnQgaW5zdGFuY2VzXG4gIGlmIChlbC5ub2RlVHlwZSAhPT0gMTEpIHtcbiAgICAvLyBmb3IgY29tcG9uZW50cywgY29udGFpbmVyIGFuZCByZXBsYWNlciBuZWVkIHRvIGJlXG4gICAgLy8gY29tcGlsZWQgc2VwYXJhdGVseSBhbmQgbGlua2VkIGluIGRpZmZlcmVudCBzY29wZXMuXG4gICAgaWYgKG9wdGlvbnMuX2FzQ29tcG9uZW50KSB7XG4gICAgICAvLyAyLiBjb250YWluZXIgYXR0cmlidXRlc1xuICAgICAgaWYgKGNvbnRhaW5lckF0dHJzICYmIGNvbnRleHRPcHRpb25zKSB7XG4gICAgICAgIGNvbnRleHRMaW5rRm4gPSBjb21waWxlRGlyZWN0aXZlcyhjb250YWluZXJBdHRycywgY29udGV4dE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgaWYgKHJlcGxhY2VyQXR0cnMpIHtcbiAgICAgICAgLy8gMy4gcmVwbGFjZXIgYXR0cmlidXRlc1xuICAgICAgICByZXBsYWNlckxpbmtGbiA9IGNvbXBpbGVEaXJlY3RpdmVzKHJlcGxhY2VyQXR0cnMsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub24tY29tcG9uZW50LCBqdXN0IGNvbXBpbGUgYXMgYSBub3JtYWwgZWxlbWVudC5cbiAgICAgIHJlcGxhY2VyTGlua0ZuID0gY29tcGlsZURpcmVjdGl2ZXMoZWwuYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgY29udGFpbmVyQXR0cnMpIHtcbiAgICAvLyB3YXJuIGNvbnRhaW5lciBkaXJlY3RpdmVzIGZvciBmcmFnbWVudCBpbnN0YW5jZXNcbiAgICB2YXIgbmFtZXMgPSBjb250YWluZXJBdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgIC8vIGFsbG93IHZ1ZS1sb2FkZXIvdnVlaWZ5IHNjb3BlZCBjc3MgYXR0cmlidXRlc1xuICAgICAgcmV0dXJuIGF0dHIubmFtZS5pbmRleE9mKCdfdi0nKSA8IDAgJiZcbiAgICAgIC8vIGFsbG93IGV2ZW50IGxpc3RlbmVyc1xuICAgICAgIW9uUkUudGVzdChhdHRyLm5hbWUpICYmXG4gICAgICAvLyBhbGxvdyBzbG90c1xuICAgICAgYXR0ci5uYW1lICE9PSAnc2xvdCc7XG4gICAgfSkubWFwKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICByZXR1cm4gJ1wiJyArIGF0dHIubmFtZSArICdcIic7XG4gICAgfSk7XG4gICAgaWYgKG5hbWVzLmxlbmd0aCkge1xuICAgICAgdmFyIHBsdXJhbCA9IG5hbWVzLmxlbmd0aCA+IDE7XG4gICAgICB3YXJuKCdBdHRyaWJ1dGUnICsgKHBsdXJhbCA/ICdzICcgOiAnICcpICsgbmFtZXMuam9pbignLCAnKSArIChwbHVyYWwgPyAnIGFyZScgOiAnIGlzJykgKyAnIGlnbm9yZWQgb24gY29tcG9uZW50ICcgKyAnPCcgKyBvcHRpb25zLmVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSArICc+IGJlY2F1c2UgJyArICd0aGUgY29tcG9uZW50IGlzIGEgZnJhZ21lbnQgaW5zdGFuY2U6ICcgKyAnaHR0cDovL3Z1ZWpzLm9yZy9ndWlkZS9jb21wb25lbnRzLmh0bWwjRnJhZ21lbnRfSW5zdGFuY2UnKTtcbiAgICB9XG4gIH1cblxuICBvcHRpb25zLl9jb250YWluZXJBdHRycyA9IG9wdGlvbnMuX3JlcGxhY2VyQXR0cnMgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24gcm9vdExpbmtGbih2bSwgZWwsIHNjb3BlKSB7XG4gICAgLy8gbGluayBjb250ZXh0IHNjb3BlIGRpcnNcbiAgICB2YXIgY29udGV4dCA9IHZtLl9jb250ZXh0O1xuICAgIHZhciBjb250ZXh0RGlycztcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0TGlua0ZuKSB7XG4gICAgICBjb250ZXh0RGlycyA9IGxpbmtBbmRDYXB0dXJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGV4dExpbmtGbihjb250ZXh0LCBlbCwgbnVsbCwgc2NvcGUpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgLy8gbGluayBzZWxmXG4gICAgdmFyIHNlbGZEaXJzID0gbGlua0FuZENhcHR1cmUoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHJlcGxhY2VyTGlua0ZuKSByZXBsYWNlckxpbmtGbih2bSwgZWwpO1xuICAgIH0sIHZtKTtcblxuICAgIC8vIHJldHVybiB0aGUgdW5saW5rIGZ1bmN0aW9uIHRoYXQgdGVhcnNkb3duIGNvbnRleHRcbiAgICAvLyBjb250YWluZXIgZGlyZWN0aXZlcy5cbiAgICByZXR1cm4gbWFrZVVubGlua0ZuKHZtLCBzZWxmRGlycywgY29udGV4dCwgY29udGV4dERpcnMpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSBub2RlIGFuZCByZXR1cm4gYSBub2RlTGlua0ZuIGJhc2VkIG9uIHRoZVxuICogbm9kZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9XG4gKi9cblxuZnVuY3Rpb24gY29tcGlsZU5vZGUobm9kZSwgb3B0aW9ucykge1xuICB2YXIgdHlwZSA9IG5vZGUubm9kZVR5cGU7XG4gIGlmICh0eXBlID09PSAxICYmIG5vZGUudGFnTmFtZSAhPT0gJ1NDUklQVCcpIHtcbiAgICByZXR1cm4gY29tcGlsZUVsZW1lbnQobm9kZSwgb3B0aW9ucyk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gMyAmJiBub2RlLmRhdGEudHJpbSgpKSB7XG4gICAgcmV0dXJuIGNvbXBpbGVUZXh0Tm9kZShub2RlLCBvcHRpb25zKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIENvbXBpbGUgYW4gZWxlbWVudCBhbmQgcmV0dXJuIGEgbm9kZUxpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258bnVsbH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlRWxlbWVudChlbCwgb3B0aW9ucykge1xuICAvLyBwcmVwcm9jZXNzIHRleHRhcmVhcy5cbiAgLy8gdGV4dGFyZWEgdHJlYXRzIGl0cyB0ZXh0IGNvbnRlbnQgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gIC8vIGp1c3QgYmluZCBpdCBhcyBhbiBhdHRyIGRpcmVjdGl2ZSBmb3IgdmFsdWUuXG4gIGlmIChlbC50YWdOYW1lID09PSAnVEVYVEFSRUEnKSB7XG4gICAgdmFyIHRva2VucyA9IHBhcnNlVGV4dChlbC52YWx1ZSk7XG4gICAgaWYgKHRva2Vucykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCc6dmFsdWUnLCB0b2tlbnNUb0V4cCh0b2tlbnMpKTtcbiAgICAgIGVsLnZhbHVlID0gJyc7XG4gICAgfVxuICB9XG4gIHZhciBsaW5rRm47XG4gIHZhciBoYXNBdHRycyA9IGVsLmhhc0F0dHJpYnV0ZXMoKTtcbiAgLy8gY2hlY2sgdGVybWluYWwgZGlyZWN0aXZlcyAoZm9yICYgaWYpXG4gIGlmIChoYXNBdHRycykge1xuICAgIGxpbmtGbiA9IGNoZWNrVGVybWluYWxEaXJlY3RpdmVzKGVsLCBvcHRpb25zKTtcbiAgfVxuICAvLyBjaGVjayBlbGVtZW50IGRpcmVjdGl2ZXNcbiAgaWYgKCFsaW5rRm4pIHtcbiAgICBsaW5rRm4gPSBjaGVja0VsZW1lbnREaXJlY3RpdmVzKGVsLCBvcHRpb25zKTtcbiAgfVxuICAvLyBjaGVjayBjb21wb25lbnRcbiAgaWYgKCFsaW5rRm4pIHtcbiAgICBsaW5rRm4gPSBjaGVja0NvbXBvbmVudChlbCwgb3B0aW9ucyk7XG4gIH1cbiAgLy8gbm9ybWFsIGRpcmVjdGl2ZXNcbiAgaWYgKCFsaW5rRm4gJiYgaGFzQXR0cnMpIHtcbiAgICBsaW5rRm4gPSBjb21waWxlRGlyZWN0aXZlcyhlbC5hdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgfVxuICByZXR1cm4gbGlua0ZuO1xufVxuXG4vKipcbiAqIENvbXBpbGUgYSB0ZXh0Tm9kZSBhbmQgcmV0dXJuIGEgbm9kZUxpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge1RleHROb2RlfSBub2RlXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258bnVsbH0gdGV4dE5vZGVMaW5rRm5cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlVGV4dE5vZGUobm9kZSwgb3B0aW9ucykge1xuICAvLyBza2lwIG1hcmtlZCB0ZXh0IG5vZGVzXG4gIGlmIChub2RlLl9za2lwKSB7XG4gICAgcmV0dXJuIHJlbW92ZVRleHQ7XG4gIH1cblxuICB2YXIgdG9rZW5zID0gcGFyc2VUZXh0KG5vZGUud2hvbGVUZXh0KTtcbiAgaWYgKCF0b2tlbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIG1hcmsgYWRqYWNlbnQgdGV4dCBub2RlcyBhcyBza2lwcGVkLFxuICAvLyBiZWNhdXNlIHdlIGFyZSB1c2luZyBub2RlLndob2xlVGV4dCB0byBjb21waWxlXG4gIC8vIGFsbCBhZGphY2VudCB0ZXh0IG5vZGVzIHRvZ2V0aGVyLiBUaGlzIGZpeGVzXG4gIC8vIGlzc3VlcyBpbiBJRSB3aGVyZSBzb21ldGltZXMgaXQgc3BsaXRzIHVwIGEgc2luZ2xlXG4gIC8vIHRleHQgbm9kZSBpbnRvIG11bHRpcGxlIG9uZXMuXG4gIHZhciBuZXh0ID0gbm9kZS5uZXh0U2libGluZztcbiAgd2hpbGUgKG5leHQgJiYgbmV4dC5ub2RlVHlwZSA9PT0gMykge1xuICAgIG5leHQuX3NraXAgPSB0cnVlO1xuICAgIG5leHQgPSBuZXh0Lm5leHRTaWJsaW5nO1xuICB9XG5cbiAgdmFyIGZyYWcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHZhciBlbCwgdG9rZW47XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgIGVsID0gdG9rZW4udGFnID8gcHJvY2Vzc1RleHRUb2tlbih0b2tlbiwgb3B0aW9ucykgOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2tlbi52YWx1ZSk7XG4gICAgZnJhZy5hcHBlbmRDaGlsZChlbCk7XG4gIH1cbiAgcmV0dXJuIG1ha2VUZXh0Tm9kZUxpbmtGbih0b2tlbnMsIGZyYWcsIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIExpbmtlciBmb3IgYW4gc2tpcHBlZCB0ZXh0IG5vZGUuXG4gKlxuICogQHBhcmFtIHtWdWV9IHZtXG4gKiBAcGFyYW0ge1RleHR9IG5vZGVcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVUZXh0KHZtLCBub2RlKSB7XG4gIHJlbW92ZShub2RlKTtcbn1cblxuLyoqXG4gKiBQcm9jZXNzIGEgc2luZ2xlIHRleHQgdG9rZW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHRva2VuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7Tm9kZX1cbiAqL1xuXG5mdW5jdGlvbiBwcm9jZXNzVGV4dFRva2VuKHRva2VuLCBvcHRpb25zKSB7XG4gIHZhciBlbDtcbiAgaWYgKHRva2VuLm9uZVRpbWUpIHtcbiAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRva2VuLnZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodG9rZW4uaHRtbCkge1xuICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCd2LWh0bWwnKTtcbiAgICAgIHNldFRva2VuVHlwZSgnaHRtbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJRSB3aWxsIGNsZWFuIHVwIGVtcHR5IHRleHROb2RlcyBkdXJpbmdcbiAgICAgIC8vIGZyYWcuY2xvbmVOb2RlKHRydWUpLCBzbyB3ZSBoYXZlIHRvIGdpdmUgaXRcbiAgICAgIC8vIHNvbWV0aGluZyBoZXJlLi4uXG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcgJyk7XG4gICAgICBzZXRUb2tlblR5cGUoJ3RleHQnKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2V0VG9rZW5UeXBlKHR5cGUpIHtcbiAgICBpZiAodG9rZW4uZGVzY3JpcHRvcikgcmV0dXJuO1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZURpcmVjdGl2ZSh0b2tlbi52YWx1ZSk7XG4gICAgdG9rZW4uZGVzY3JpcHRvciA9IHtcbiAgICAgIG5hbWU6IHR5cGUsXG4gICAgICBkZWY6IGRpcmVjdGl2ZXNbdHlwZV0sXG4gICAgICBleHByZXNzaW9uOiBwYXJzZWQuZXhwcmVzc2lvbixcbiAgICAgIGZpbHRlcnM6IHBhcnNlZC5maWx0ZXJzXG4gICAgfTtcbiAgfVxuICByZXR1cm4gZWw7XG59XG5cbi8qKlxuICogQnVpbGQgYSBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyBhIHRleHROb2RlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gdG9rZW5zXG4gKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IGZyYWdcbiAqL1xuXG5mdW5jdGlvbiBtYWtlVGV4dE5vZGVMaW5rRm4odG9rZW5zLCBmcmFnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0ZXh0Tm9kZUxpbmtGbih2bSwgZWwsIGhvc3QsIHNjb3BlKSB7XG4gICAgdmFyIGZyYWdDbG9uZSA9IGZyYWcuY2xvbmVOb2RlKHRydWUpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gdG9BcnJheShmcmFnQ2xvbmUuY2hpbGROb2Rlcyk7XG4gICAgdmFyIHRva2VuLCB2YWx1ZSwgbm9kZTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRva2Vucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgdmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgICAgIGlmICh0b2tlbi50YWcpIHtcbiAgICAgICAgbm9kZSA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmICh0b2tlbi5vbmVUaW1lKSB7XG4gICAgICAgICAgdmFsdWUgPSAoc2NvcGUgfHwgdm0pLiRldmFsKHZhbHVlKTtcbiAgICAgICAgICBpZiAodG9rZW4uaHRtbCkge1xuICAgICAgICAgICAgcmVwbGFjZShub2RlLCBwYXJzZVRlbXBsYXRlKHZhbHVlLCB0cnVlKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IHZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2bS5fYmluZERpcih0b2tlbi5kZXNjcmlwdG9yLCBub2RlLCBob3N0LCBzY29wZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVwbGFjZShlbCwgZnJhZ0Nsb25lKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGEgbm9kZSBsaXN0IGFuZCByZXR1cm4gYSBjaGlsZExpbmtGbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVMaXN0fSBub2RlTGlzdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufHVuZGVmaW5lZH1cbiAqL1xuXG5mdW5jdGlvbiBjb21waWxlTm9kZUxpc3Qobm9kZUxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGxpbmtGbnMgPSBbXTtcbiAgdmFyIG5vZGVMaW5rRm4sIGNoaWxkTGlua0ZuLCBub2RlO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVMaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIG5vZGUgPSBub2RlTGlzdFtpXTtcbiAgICBub2RlTGlua0ZuID0gY29tcGlsZU5vZGUobm9kZSwgb3B0aW9ucyk7XG4gICAgY2hpbGRMaW5rRm4gPSAhKG5vZGVMaW5rRm4gJiYgbm9kZUxpbmtGbi50ZXJtaW5hbCkgJiYgbm9kZS50YWdOYW1lICE9PSAnU0NSSVBUJyAmJiBub2RlLmhhc0NoaWxkTm9kZXMoKSA/IGNvbXBpbGVOb2RlTGlzdChub2RlLmNoaWxkTm9kZXMsIG9wdGlvbnMpIDogbnVsbDtcbiAgICBsaW5rRm5zLnB1c2gobm9kZUxpbmtGbiwgY2hpbGRMaW5rRm4pO1xuICB9XG4gIHJldHVybiBsaW5rRm5zLmxlbmd0aCA/IG1ha2VDaGlsZExpbmtGbihsaW5rRm5zKSA6IG51bGw7XG59XG5cbi8qKlxuICogTWFrZSBhIGNoaWxkIGxpbmsgZnVuY3Rpb24gZm9yIGEgbm9kZSdzIGNoaWxkTm9kZXMuXG4gKlxuICogQHBhcmFtIHtBcnJheTxGdW5jdGlvbj59IGxpbmtGbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBjaGlsZExpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VDaGlsZExpbmtGbihsaW5rRm5zKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjaGlsZExpbmtGbih2bSwgbm9kZXMsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgdmFyIG5vZGUsIG5vZGVMaW5rRm4sIGNoaWxkcmVuTGlua0ZuO1xuICAgIGZvciAodmFyIGkgPSAwLCBuID0gMCwgbCA9IGxpbmtGbnMubGVuZ3RoOyBpIDwgbDsgbisrKSB7XG4gICAgICBub2RlID0gbm9kZXNbbl07XG4gICAgICBub2RlTGlua0ZuID0gbGlua0Zuc1tpKytdO1xuICAgICAgY2hpbGRyZW5MaW5rRm4gPSBsaW5rRm5zW2krK107XG4gICAgICAvLyBjYWNoZSBjaGlsZE5vZGVzIGJlZm9yZSBsaW5raW5nIHBhcmVudCwgZml4ICM2NTdcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gdG9BcnJheShub2RlLmNoaWxkTm9kZXMpO1xuICAgICAgaWYgKG5vZGVMaW5rRm4pIHtcbiAgICAgICAgbm9kZUxpbmtGbih2bSwgbm9kZSwgaG9zdCwgc2NvcGUsIGZyYWcpO1xuICAgICAgfVxuICAgICAgaWYgKGNoaWxkcmVuTGlua0ZuKSB7XG4gICAgICAgIGNoaWxkcmVuTGlua0ZuKHZtLCBjaGlsZE5vZGVzLCBob3N0LCBzY29wZSwgZnJhZyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrIGZvciBlbGVtZW50IGRpcmVjdGl2ZXMgKGN1c3RvbSBlbGVtZW50cyB0aGF0IHNob3VsZFxuICogYmUgcmVzb3ZsZWQgYXMgdGVybWluYWwgZGlyZWN0aXZlcykuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBjaGVja0VsZW1lbnREaXJlY3RpdmVzKGVsLCBvcHRpb25zKSB7XG4gIHZhciB0YWcgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChjb21tb25UYWdSRS50ZXN0KHRhZykpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGRlZiA9IHJlc29sdmVBc3NldChvcHRpb25zLCAnZWxlbWVudERpcmVjdGl2ZXMnLCB0YWcpO1xuICBpZiAoZGVmKSB7XG4gICAgcmV0dXJuIG1ha2VUZXJtaW5hbE5vZGVMaW5rRm4oZWwsIHRhZywgJycsIG9wdGlvbnMsIGRlZik7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbGVtZW50IGlzIGEgY29tcG9uZW50LiBJZiB5ZXMsIHJldHVyblxuICogYSBjb21wb25lbnQgbGluayBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb258dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIGNoZWNrQ29tcG9uZW50KGVsLCBvcHRpb25zKSB7XG4gIHZhciBjb21wb25lbnQgPSBjaGVja0NvbXBvbmVudEF0dHIoZWwsIG9wdGlvbnMpO1xuICBpZiAoY29tcG9uZW50KSB7XG4gICAgdmFyIHJlZiA9IGZpbmRSZWYoZWwpO1xuICAgIHZhciBkZXNjcmlwdG9yID0ge1xuICAgICAgbmFtZTogJ2NvbXBvbmVudCcsXG4gICAgICByZWY6IHJlZixcbiAgICAgIGV4cHJlc3Npb246IGNvbXBvbmVudC5pZCxcbiAgICAgIGRlZjogaW50ZXJuYWxEaXJlY3RpdmVzLmNvbXBvbmVudCxcbiAgICAgIG1vZGlmaWVyczoge1xuICAgICAgICBsaXRlcmFsOiAhY29tcG9uZW50LmR5bmFtaWNcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjb21wb25lbnRMaW5rRm4gPSBmdW5jdGlvbiBjb21wb25lbnRMaW5rRm4odm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWFjdGl2ZSgoc2NvcGUgfHwgdm0pLiRyZWZzLCByZWYsIG51bGwpO1xuICAgICAgfVxuICAgICAgdm0uX2JpbmREaXIoZGVzY3JpcHRvciwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKTtcbiAgICB9O1xuICAgIGNvbXBvbmVudExpbmtGbi50ZXJtaW5hbCA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudExpbmtGbjtcbiAgfVxufVxuXG4vKipcbiAqIENoZWNrIGFuIGVsZW1lbnQgZm9yIHRlcm1pbmFsIGRpcmVjdGl2ZXMgaW4gZml4ZWQgb3JkZXIuXG4gKiBJZiBpdCBmaW5kcyBvbmUsIHJldHVybiBhIHRlcm1pbmFsIGxpbmsgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSB0ZXJtaW5hbExpbmtGblxuICovXG5cbmZ1bmN0aW9uIGNoZWNrVGVybWluYWxEaXJlY3RpdmVzKGVsLCBvcHRpb25zKSB7XG4gIC8vIHNraXAgdi1wcmVcbiAgaWYgKGdldEF0dHIoZWwsICd2LXByZScpICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHNraXA7XG4gIH1cbiAgLy8gc2tpcCB2LWVsc2UgYmxvY2ssIGJ1dCBvbmx5IGlmIGZvbGxvd2luZyB2LWlmXG4gIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ3YtZWxzZScpKSB7XG4gICAgdmFyIHByZXYgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChwcmV2ICYmIHByZXYuaGFzQXR0cmlidXRlKCd2LWlmJykpIHtcbiAgICAgIHJldHVybiBza2lwO1xuICAgIH1cbiAgfVxuICB2YXIgdmFsdWUsIGRpck5hbWU7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdGVybWluYWxEaXJlY3RpdmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGRpck5hbWUgPSB0ZXJtaW5hbERpcmVjdGl2ZXNbaV07XG4gICAgdmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3YtJyArIGRpck5hbWUpO1xuICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gbWFrZVRlcm1pbmFsTm9kZUxpbmtGbihlbCwgZGlyTmFtZSwgdmFsdWUsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBza2lwKCkge31cbnNraXAudGVybWluYWwgPSB0cnVlO1xuXG4vKipcbiAqIEJ1aWxkIGEgbm9kZSBsaW5rIGZ1bmN0aW9uIGZvciBhIHRlcm1pbmFsIGRpcmVjdGl2ZS5cbiAqIEEgdGVybWluYWwgbGluayBmdW5jdGlvbiB0ZXJtaW5hdGVzIHRoZSBjdXJyZW50XG4gKiBjb21waWxhdGlvbiByZWN1cnNpb24gYW5kIGhhbmRsZXMgY29tcGlsYXRpb24gb2YgdGhlXG4gKiBzdWJ0cmVlIGluIHRoZSBkaXJlY3RpdmUuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtTdHJpbmd9IGRpck5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmXVxuICogQHJldHVybiB7RnVuY3Rpb259IHRlcm1pbmFsTGlua0ZuXG4gKi9cblxuZnVuY3Rpb24gbWFrZVRlcm1pbmFsTm9kZUxpbmtGbihlbCwgZGlyTmFtZSwgdmFsdWUsIG9wdGlvbnMsIGRlZikge1xuICB2YXIgcGFyc2VkID0gcGFyc2VEaXJlY3RpdmUodmFsdWUpO1xuICB2YXIgZGVzY3JpcHRvciA9IHtcbiAgICBuYW1lOiBkaXJOYW1lLFxuICAgIGV4cHJlc3Npb246IHBhcnNlZC5leHByZXNzaW9uLFxuICAgIGZpbHRlcnM6IHBhcnNlZC5maWx0ZXJzLFxuICAgIHJhdzogdmFsdWUsXG4gICAgLy8gZWl0aGVyIGFuIGVsZW1lbnQgZGlyZWN0aXZlLCBvciBpZi9mb3JcbiAgICAvLyAjMjM2NiBvciBjdXN0b20gdGVybWluYWwgZGlyZWN0aXZlXG4gICAgZGVmOiBkZWYgfHwgcmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdkaXJlY3RpdmVzJywgZGlyTmFtZSlcbiAgfTtcbiAgLy8gY2hlY2sgcmVmIGZvciB2LWZvciBhbmQgcm91dGVyLXZpZXdcbiAgaWYgKGRpck5hbWUgPT09ICdmb3InIHx8IGRpck5hbWUgPT09ICdyb3V0ZXItdmlldycpIHtcbiAgICBkZXNjcmlwdG9yLnJlZiA9IGZpbmRSZWYoZWwpO1xuICB9XG4gIHZhciBmbiA9IGZ1bmN0aW9uIHRlcm1pbmFsTm9kZUxpbmtGbih2bSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgaWYgKGRlc2NyaXB0b3IucmVmKSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSgoc2NvcGUgfHwgdm0pLiRyZWZzLCBkZXNjcmlwdG9yLnJlZiwgbnVsbCk7XG4gICAgfVxuICAgIHZtLl9iaW5kRGlyKGRlc2NyaXB0b3IsIGVsLCBob3N0LCBzY29wZSwgZnJhZyk7XG4gIH07XG4gIGZuLnRlcm1pbmFsID0gdHJ1ZTtcbiAgcmV0dXJuIGZuO1xufVxuXG4vKipcbiAqIENvbXBpbGUgdGhlIGRpcmVjdGl2ZXMgb24gYW4gZWxlbWVudCBhbmQgcmV0dXJuIGEgbGlua2VyLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8TmFtZWROb2RlTWFwfSBhdHRyc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIGNvbXBpbGVEaXJlY3RpdmVzKGF0dHJzLCBvcHRpb25zKSB7XG4gIHZhciBpID0gYXR0cnMubGVuZ3RoO1xuICB2YXIgZGlycyA9IFtdO1xuICB2YXIgYXR0ciwgbmFtZSwgdmFsdWUsIHJhd05hbWUsIHJhd1ZhbHVlLCBkaXJOYW1lLCBhcmcsIG1vZGlmaWVycywgZGlyRGVmLCB0b2tlbnMsIG1hdGNoZWQ7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBhdHRyID0gYXR0cnNbaV07XG4gICAgbmFtZSA9IHJhd05hbWUgPSBhdHRyLm5hbWU7XG4gICAgdmFsdWUgPSByYXdWYWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgdG9rZW5zID0gcGFyc2VUZXh0KHZhbHVlKTtcbiAgICAvLyByZXNldCBhcmdcbiAgICBhcmcgPSBudWxsO1xuICAgIC8vIGNoZWNrIG1vZGlmaWVyc1xuICAgIG1vZGlmaWVycyA9IHBhcnNlTW9kaWZpZXJzKG5hbWUpO1xuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UobW9kaWZpZXJSRSwgJycpO1xuXG4gICAgLy8gYXR0cmlidXRlIGludGVycG9sYXRpb25zXG4gICAgaWYgKHRva2Vucykge1xuICAgICAgdmFsdWUgPSB0b2tlbnNUb0V4cCh0b2tlbnMpO1xuICAgICAgYXJnID0gbmFtZTtcbiAgICAgIHB1c2hEaXIoJ2JpbmQnLCBkaXJlY3RpdmVzLmJpbmQsIHRva2Vucyk7XG4gICAgICAvLyB3YXJuIGFnYWluc3QgbWl4aW5nIG11c3RhY2hlcyB3aXRoIHYtYmluZFxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdjbGFzcycgJiYgQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChhdHRycywgZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICByZXR1cm4gYXR0ci5uYW1lID09PSAnOmNsYXNzJyB8fCBhdHRyLm5hbWUgPT09ICd2LWJpbmQ6Y2xhc3MnO1xuICAgICAgICB9KSkge1xuICAgICAgICAgIHdhcm4oJ2NsYXNzPVwiJyArIHJhd1ZhbHVlICsgJ1wiOiBEbyBub3QgbWl4IG11c3RhY2hlIGludGVycG9sYXRpb24gJyArICdhbmQgdi1iaW5kIGZvciBcImNsYXNzXCIgb24gdGhlIHNhbWUgZWxlbWVudC4gVXNlIG9uZSBvciB0aGUgb3RoZXIuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2VcblxuICAgICAgLy8gc3BlY2lhbCBhdHRyaWJ1dGU6IHRyYW5zaXRpb25cbiAgICAgIGlmICh0cmFuc2l0aW9uUkUudGVzdChuYW1lKSkge1xuICAgICAgICBtb2RpZmllcnMubGl0ZXJhbCA9ICFiaW5kUkUudGVzdChuYW1lKTtcbiAgICAgICAgcHVzaERpcigndHJhbnNpdGlvbicsIGludGVybmFsRGlyZWN0aXZlcy50cmFuc2l0aW9uKTtcbiAgICAgIH0gZWxzZVxuXG4gICAgICAgIC8vIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIGlmIChvblJFLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICBhcmcgPSBuYW1lLnJlcGxhY2Uob25SRSwgJycpO1xuICAgICAgICAgIHB1c2hEaXIoJ29uJywgZGlyZWN0aXZlcy5vbik7XG4gICAgICAgIH0gZWxzZVxuXG4gICAgICAgICAgLy8gYXR0cmlidXRlIGJpbmRpbmdzXG4gICAgICAgICAgaWYgKGJpbmRSRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICBkaXJOYW1lID0gbmFtZS5yZXBsYWNlKGJpbmRSRSwgJycpO1xuICAgICAgICAgICAgaWYgKGRpck5hbWUgPT09ICdzdHlsZScgfHwgZGlyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgICBwdXNoRGlyKGRpck5hbWUsIGludGVybmFsRGlyZWN0aXZlc1tkaXJOYW1lXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcmcgPSBkaXJOYW1lO1xuICAgICAgICAgICAgICBwdXNoRGlyKCdiaW5kJywgZGlyZWN0aXZlcy5iaW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2VcblxuICAgICAgICAgICAgLy8gbm9ybWFsIGRpcmVjdGl2ZXNcbiAgICAgICAgICAgIGlmIChtYXRjaGVkID0gbmFtZS5tYXRjaChkaXJBdHRyUkUpKSB7XG4gICAgICAgICAgICAgIGRpck5hbWUgPSBtYXRjaGVkWzFdO1xuICAgICAgICAgICAgICBhcmcgPSBtYXRjaGVkWzJdO1xuXG4gICAgICAgICAgICAgIC8vIHNraXAgdi1lbHNlICh3aGVuIHVzZWQgd2l0aCB2LXNob3cpXG4gICAgICAgICAgICAgIGlmIChkaXJOYW1lID09PSAnZWxzZScpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRpckRlZiA9IHJlc29sdmVBc3NldChvcHRpb25zLCAnZGlyZWN0aXZlcycsIGRpck5hbWUpO1xuXG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0QXNzZXQoZGlyRGVmLCAnZGlyZWN0aXZlJywgZGlyTmFtZSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoZGlyRGVmKSB7XG4gICAgICAgICAgICAgICAgcHVzaERpcihkaXJOYW1lLCBkaXJEZWYpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHVzaCBhIGRpcmVjdGl2ZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGRpck5hbWVcbiAgICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IGRlZlxuICAgKiBAcGFyYW0ge0FycmF5fSBbaW50ZXJwVG9rZW5zXVxuICAgKi9cblxuICBmdW5jdGlvbiBwdXNoRGlyKGRpck5hbWUsIGRlZiwgaW50ZXJwVG9rZW5zKSB7XG4gICAgdmFyIGhhc09uZVRpbWVUb2tlbiA9IGludGVycFRva2VucyAmJiBoYXNPbmVUaW1lKGludGVycFRva2Vucyk7XG4gICAgdmFyIHBhcnNlZCA9ICFoYXNPbmVUaW1lVG9rZW4gJiYgcGFyc2VEaXJlY3RpdmUodmFsdWUpO1xuICAgIGRpcnMucHVzaCh7XG4gICAgICBuYW1lOiBkaXJOYW1lLFxuICAgICAgYXR0cjogcmF3TmFtZSxcbiAgICAgIHJhdzogcmF3VmFsdWUsXG4gICAgICBkZWY6IGRlZixcbiAgICAgIGFyZzogYXJnLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMsXG4gICAgICAvLyBjb252ZXJzaW9uIGZyb20gaW50ZXJwb2xhdGlvbiBzdHJpbmdzIHdpdGggb25lLXRpbWUgdG9rZW5cbiAgICAgIC8vIHRvIGV4cHJlc3Npb24gaXMgZGlmZmVyZWQgdW50aWwgZGlyZWN0aXZlIGJpbmQgdGltZSBzbyB0aGF0IHdlXG4gICAgICAvLyBoYXZlIGFjY2VzcyB0byB0aGUgYWN0dWFsIHZtIGNvbnRleHQgZm9yIG9uZS10aW1lIGJpbmRpbmdzLlxuICAgICAgZXhwcmVzc2lvbjogcGFyc2VkICYmIHBhcnNlZC5leHByZXNzaW9uLFxuICAgICAgZmlsdGVyczogcGFyc2VkICYmIHBhcnNlZC5maWx0ZXJzLFxuICAgICAgaW50ZXJwOiBpbnRlcnBUb2tlbnMsXG4gICAgICBoYXNPbmVUaW1lOiBoYXNPbmVUaW1lVG9rZW5cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChkaXJzLmxlbmd0aCkge1xuICAgIHJldHVybiBtYWtlTm9kZUxpbmtGbihkaXJzKTtcbiAgfVxufVxuXG4vKipcbiAqIFBhcnNlIG1vZGlmaWVycyBmcm9tIGRpcmVjdGl2ZSBhdHRyaWJ1dGUgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlTW9kaWZpZXJzKG5hbWUpIHtcbiAgdmFyIHJlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBtYXRjaCA9IG5hbWUubWF0Y2gobW9kaWZpZXJSRSk7XG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBpID0gbWF0Y2gubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHJlc1ttYXRjaFtpXS5zbGljZSgxKV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgbGluayBmdW5jdGlvbiBmb3IgYWxsIGRpcmVjdGl2ZXMgb24gYSBzaW5nbGUgbm9kZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBkaXJlY3RpdmVzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gZGlyZWN0aXZlc0xpbmtGblxuICovXG5cbmZ1bmN0aW9uIG1ha2VOb2RlTGlua0ZuKGRpcmVjdGl2ZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIG5vZGVMaW5rRm4odm0sIGVsLCBob3N0LCBzY29wZSwgZnJhZykge1xuICAgIC8vIHJldmVyc2UgYXBwbHkgYmVjYXVzZSBpdCdzIHNvcnRlZCBsb3cgdG8gaGlnaFxuICAgIHZhciBpID0gZGlyZWN0aXZlcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdm0uX2JpbmREaXIoZGlyZWN0aXZlc1tpXSwgZWwsIGhvc3QsIHNjb3BlLCBmcmFnKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gaW50ZXJwb2xhdGlvbiBzdHJpbmcgY29udGFpbnMgb25lLXRpbWUgdG9rZW5zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHRva2Vuc1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5mdW5jdGlvbiBoYXNPbmVUaW1lKHRva2Vucykge1xuICB2YXIgaSA9IHRva2Vucy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAodG9rZW5zW2ldLm9uZVRpbWUpIHJldHVybiB0cnVlO1xuICB9XG59XG5cbnZhciBzcGVjaWFsQ2hhclJFID0gL1teXFx3XFwtOlxcLl0vO1xuXG4vKipcbiAqIFByb2Nlc3MgYW4gZWxlbWVudCBvciBhIERvY3VtZW50RnJhZ21lbnQgYmFzZWQgb24gYVxuICogaW5zdGFuY2Ugb3B0aW9uIG9iamVjdC4gVGhpcyBhbGxvd3MgdXMgdG8gdHJhbnNjbHVkZVxuICogYSB0ZW1wbGF0ZSBub2RlL2ZyYWdtZW50IGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgY3JlYXRlZCxcbiAqIHNvIHRoZSBwcm9jZXNzZWQgZnJhZ21lbnQgY2FuIHRoZW4gYmUgY2xvbmVkIGFuZCByZXVzZWRcbiAqIGluIHYtZm9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZnVuY3Rpb24gdHJhbnNjbHVkZShlbCwgb3B0aW9ucykge1xuICAvLyBleHRyYWN0IGNvbnRhaW5lciBhdHRyaWJ1dGVzIHRvIHBhc3MgdGhlbSBkb3duXG4gIC8vIHRvIGNvbXBpbGVyLCBiZWNhdXNlIHRoZXkgbmVlZCB0byBiZSBjb21waWxlZCBpblxuICAvLyBwYXJlbnQgc2NvcGUuIHdlIGFyZSBtdXRhdGluZyB0aGUgb3B0aW9ucyBvYmplY3QgaGVyZVxuICAvLyBhc3N1bWluZyB0aGUgc2FtZSBvYmplY3Qgd2lsbCBiZSB1c2VkIGZvciBjb21waWxlXG4gIC8vIHJpZ2h0IGFmdGVyIHRoaXMuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucy5fY29udGFpbmVyQXR0cnMgPSBleHRyYWN0QXR0cnMoZWwpO1xuICB9XG4gIC8vIGZvciB0ZW1wbGF0ZSB0YWdzLCB3aGF0IHdlIHdhbnQgaXMgaXRzIGNvbnRlbnQgYXNcbiAgLy8gYSBkb2N1bWVudEZyYWdtZW50IChmb3IgZnJhZ21lbnQgaW5zdGFuY2VzKVxuICBpZiAoaXNUZW1wbGF0ZShlbCkpIHtcbiAgICBlbCA9IHBhcnNlVGVtcGxhdGUoZWwpO1xuICB9XG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMuX2FzQ29tcG9uZW50ICYmICFvcHRpb25zLnRlbXBsYXRlKSB7XG4gICAgICBvcHRpb25zLnRlbXBsYXRlID0gJzxzbG90Pjwvc2xvdD4nO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy50ZW1wbGF0ZSkge1xuICAgICAgb3B0aW9ucy5fY29udGVudCA9IGV4dHJhY3RDb250ZW50KGVsKTtcbiAgICAgIGVsID0gdHJhbnNjbHVkZVRlbXBsYXRlKGVsLCBvcHRpb25zKTtcbiAgICB9XG4gIH1cbiAgaWYgKGlzRnJhZ21lbnQoZWwpKSB7XG4gICAgLy8gYW5jaG9ycyBmb3IgZnJhZ21lbnQgaW5zdGFuY2VcbiAgICAvLyBwYXNzaW5nIGluIGBwZXJzaXN0OiB0cnVlYCB0byBhdm9pZCB0aGVtIGJlaW5nXG4gICAgLy8gZGlzY2FyZGVkIGJ5IElFIGR1cmluZyB0ZW1wbGF0ZSBjbG9uaW5nXG4gICAgcHJlcGVuZChjcmVhdGVBbmNob3IoJ3Ytc3RhcnQnLCB0cnVlKSwgZWwpO1xuICAgIGVsLmFwcGVuZENoaWxkKGNyZWF0ZUFuY2hvcigndi1lbmQnLCB0cnVlKSk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuXG4vKipcbiAqIFByb2Nlc3MgdGhlIHRlbXBsYXRlIG9wdGlvbi5cbiAqIElmIHRoZSByZXBsYWNlIG9wdGlvbiBpcyB0cnVlIHRoaXMgd2lsbCBzd2FwIHRoZSAkZWwuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0VsZW1lbnR8RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2NsdWRlVGVtcGxhdGUoZWwsIG9wdGlvbnMpIHtcbiAgdmFyIHRlbXBsYXRlID0gb3B0aW9ucy50ZW1wbGF0ZTtcbiAgdmFyIGZyYWcgPSBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlLCB0cnVlKTtcbiAgaWYgKGZyYWcpIHtcbiAgICB2YXIgcmVwbGFjZXIgPSBmcmFnLmZpcnN0Q2hpbGQ7XG4gICAgdmFyIHRhZyA9IHJlcGxhY2VyLnRhZ05hbWUgJiYgcmVwbGFjZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChvcHRpb25zLnJlcGxhY2UpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKGVsID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignWW91IGFyZSBtb3VudGluZyBhbiBpbnN0YW5jZSB3aXRoIGEgdGVtcGxhdGUgdG8gJyArICc8Ym9keT4uIFRoaXMgd2lsbCByZXBsYWNlIDxib2R5PiBlbnRpcmVseS4gWW91ICcgKyAnc2hvdWxkIHByb2JhYmx5IHVzZSBgcmVwbGFjZTogZmFsc2VgIGhlcmUuJyk7XG4gICAgICB9XG4gICAgICAvLyB0aGVyZSBhcmUgbWFueSBjYXNlcyB3aGVyZSB0aGUgaW5zdGFuY2UgbXVzdFxuICAgICAgLy8gYmVjb21lIGEgZnJhZ21lbnQgaW5zdGFuY2U6IGJhc2ljYWxseSBhbnl0aGluZyB0aGF0XG4gICAgICAvLyBjYW4gY3JlYXRlIG1vcmUgdGhhbiAxIHJvb3Qgbm9kZXMuXG4gICAgICBpZiAoXG4gICAgICAvLyBtdWx0aS1jaGlsZHJlbiB0ZW1wbGF0ZVxuICAgICAgZnJhZy5jaGlsZE5vZGVzLmxlbmd0aCA+IDEgfHxcbiAgICAgIC8vIG5vbi1lbGVtZW50IHRlbXBsYXRlXG4gICAgICByZXBsYWNlci5ub2RlVHlwZSAhPT0gMSB8fFxuICAgICAgLy8gc2luZ2xlIG5lc3RlZCBjb21wb25lbnRcbiAgICAgIHRhZyA9PT0gJ2NvbXBvbmVudCcgfHwgcmVzb2x2ZUFzc2V0KG9wdGlvbnMsICdjb21wb25lbnRzJywgdGFnKSB8fCBoYXNCaW5kQXR0cihyZXBsYWNlciwgJ2lzJykgfHxcbiAgICAgIC8vIGVsZW1lbnQgZGlyZWN0aXZlXG4gICAgICByZXNvbHZlQXNzZXQob3B0aW9ucywgJ2VsZW1lbnREaXJlY3RpdmVzJywgdGFnKSB8fFxuICAgICAgLy8gZm9yIGJsb2NrXG4gICAgICByZXBsYWNlci5oYXNBdHRyaWJ1dGUoJ3YtZm9yJykgfHxcbiAgICAgIC8vIGlmIGJsb2NrXG4gICAgICByZXBsYWNlci5oYXNBdHRyaWJ1dGUoJ3YtaWYnKSkge1xuICAgICAgICByZXR1cm4gZnJhZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMuX3JlcGxhY2VyQXR0cnMgPSBleHRyYWN0QXR0cnMocmVwbGFjZXIpO1xuICAgICAgICBtZXJnZUF0dHJzKGVsLCByZXBsYWNlcik7XG4gICAgICAgIHJldHVybiByZXBsYWNlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWwuYXBwZW5kQ2hpbGQoZnJhZyk7XG4gICAgICByZXR1cm4gZWw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignSW52YWxpZCB0ZW1wbGF0ZSBvcHRpb246ICcgKyB0ZW1wbGF0ZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gZXh0cmFjdCBhIGNvbXBvbmVudCBjb250YWluZXIncyBhdHRyaWJ1dGVzXG4gKiBpbnRvIGEgcGxhaW4gb2JqZWN0IGFycmF5LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5cbmZ1bmN0aW9uIGV4dHJhY3RBdHRycyhlbCkge1xuICBpZiAoZWwubm9kZVR5cGUgPT09IDEgJiYgZWwuaGFzQXR0cmlidXRlcygpKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoZWwuYXR0cmlidXRlcyk7XG4gIH1cbn1cblxuLyoqXG4gKiBNZXJnZSB0aGUgYXR0cmlidXRlcyBvZiB0d28gZWxlbWVudHMsIGFuZCBtYWtlIHN1cmVcbiAqIHRoZSBjbGFzcyBuYW1lcyBhcmUgbWVyZ2VkIHByb3Blcmx5LlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZnJvbVxuICogQHBhcmFtIHtFbGVtZW50fSB0b1xuICovXG5cbmZ1bmN0aW9uIG1lcmdlQXR0cnMoZnJvbSwgdG8pIHtcbiAgdmFyIGF0dHJzID0gZnJvbS5hdHRyaWJ1dGVzO1xuICB2YXIgaSA9IGF0dHJzLmxlbmd0aDtcbiAgdmFyIG5hbWUsIHZhbHVlO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgbmFtZSA9IGF0dHJzW2ldLm5hbWU7XG4gICAgdmFsdWUgPSBhdHRyc1tpXS52YWx1ZTtcbiAgICBpZiAoIXRvLmhhc0F0dHJpYnV0ZShuYW1lKSAmJiAhc3BlY2lhbENoYXJSRS50ZXN0KG5hbWUpKSB7XG4gICAgICB0by5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2NsYXNzJyAmJiAhcGFyc2VUZXh0KHZhbHVlKSkge1xuICAgICAgdmFsdWUuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgICAgYWRkQ2xhc3ModG8sIGNscyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTY2FuIGFuZCBkZXRlcm1pbmUgc2xvdCBjb250ZW50IGRpc3RyaWJ1dGlvbi5cbiAqIFdlIGRvIHRoaXMgZHVyaW5nIHRyYW5zY2x1c2lvbiBpbnN0ZWFkIGF0IGNvbXBpbGUgdGltZSBzbyB0aGF0XG4gKiB0aGUgZGlzdHJpYnV0aW9uIGlzIGRlY291cGxlZCBmcm9tIHRoZSBjb21waWxhdGlvbiBvcmRlciBvZlxuICogdGhlIHNsb3RzLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBjb250ZW50XG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqL1xuXG5mdW5jdGlvbiBzY2FuU2xvdHModGVtcGxhdGUsIGNvbnRlbnQsIHZtKSB7XG4gIGlmICghY29udGVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY29udGVudHMgPSB2bS5fc2xvdENvbnRlbnRzID0ge307XG4gIHZhciBzbG90cyA9IHRlbXBsYXRlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Nsb3QnKTtcbiAgaWYgKHNsb3RzLmxlbmd0aCkge1xuICAgIHZhciBoYXNEZWZhdWx0LCBzbG90LCBuYW1lO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gc2xvdHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBzbG90ID0gc2xvdHNbaV07XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgICAgaWYgKG5hbWUgPSBzbG90LmdldEF0dHJpYnV0ZSgnbmFtZScpKSB7XG4gICAgICAgIHNlbGVjdChzbG90LCBuYW1lKTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAobmFtZSA9IGdldEJpbmRBdHRyKHNsb3QsICduYW1lJykpKSB7XG4gICAgICAgIHdhcm4oJzxzbG90IDpuYW1lPVwiJyArIG5hbWUgKyAnXCI+OiBzbG90IG5hbWVzIGNhbm5vdCBiZSBkeW5hbWljLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVmYXVsdCBzbG90XG4gICAgICAgIGhhc0RlZmF1bHQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuICAgIH1cbiAgICBpZiAoaGFzRGVmYXVsdCkge1xuICAgICAgY29udGVudHNbJ2RlZmF1bHQnXSA9IGV4dHJhY3RGcmFnbWVudChjb250ZW50LmNoaWxkTm9kZXMsIGNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdChzbG90LCBuYW1lKSB7XG4gICAgLy8gbmFtZWQgc2xvdFxuICAgIHZhciBzZWxlY3RvciA9ICdbc2xvdD1cIicgKyBuYW1lICsgJ1wiXSc7XG4gICAgdmFyIG5vZGVzID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBpZiAobm9kZXMubGVuZ3RoKSB7XG4gICAgICBjb250ZW50c1tuYW1lXSA9IGV4dHJhY3RGcmFnbWVudChub2RlcywgY29udGVudCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXh0cmFjdCBxdWFsaWZpZWQgY29udGVudCBub2RlcyBmcm9tIGEgbm9kZSBsaXN0LlxuICpcbiAqIEBwYXJhbSB7Tm9kZUxpc3R9IG5vZGVzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHBhcmVudFxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5mdW5jdGlvbiBleHRyYWN0RnJhZ21lbnQobm9kZXMsIHBhcmVudCkge1xuICB2YXIgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgbm9kZXMgPSB0b0FycmF5KG5vZGVzKTtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IHBhcmVudCkge1xuICAgICAgaWYgKGlzVGVtcGxhdGUobm9kZSkgJiYgIW5vZGUuaGFzQXR0cmlidXRlKCd2LWlmJykgJiYgIW5vZGUuaGFzQXR0cmlidXRlKCd2LWZvcicpKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgbm9kZSA9IHBhcnNlVGVtcGxhdGUobm9kZSk7XG4gICAgICB9XG4gICAgICBmcmFnLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZnJhZztcbn1cblxuXG5cbnZhciBjb21waWxlciA9IE9iamVjdC5mcmVlemUoe1xuXHRjb21waWxlOiBjb21waWxlLFxuXHRjb21waWxlQW5kTGlua1Byb3BzOiBjb21waWxlQW5kTGlua1Byb3BzLFxuXHRjb21waWxlUm9vdDogY29tcGlsZVJvb3QsXG5cdHRlcm1pbmFsRGlyZWN0aXZlczogdGVybWluYWxEaXJlY3RpdmVzLFxuXHR0cmFuc2NsdWRlOiB0cmFuc2NsdWRlLFxuXHRzY2FuU2xvdHM6IHNjYW5TbG90c1xufSk7XG5cbmZ1bmN0aW9uIHN0YXRlTWl4aW4gKFZ1ZSkge1xuICAvKipcbiAgICogQWNjZXNzb3IgZm9yIGAkZGF0YWAgcHJvcGVydHksIHNpbmNlIHNldHRpbmcgJGRhdGFcbiAgICogcmVxdWlyZXMgb2JzZXJ2aW5nIHRoZSBuZXcgb2JqZWN0IGFuZCB1cGRhdGluZ1xuICAgKiBwcm94aWVkIHByb3BlcnRpZXMuXG4gICAqL1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJGRhdGEnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld0RhdGEpIHtcbiAgICAgIGlmIChuZXdEYXRhICE9PSB0aGlzLl9kYXRhKSB7XG4gICAgICAgIHRoaXMuX3NldERhdGEobmV3RGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogU2V0dXAgdGhlIHNjb3BlIG9mIGFuIGluc3RhbmNlLCB3aGljaCBjb250YWluczpcbiAgICogLSBvYnNlcnZlZCBkYXRhXG4gICAqIC0gY29tcHV0ZWQgcHJvcGVydGllc1xuICAgKiAtIHVzZXIgbWV0aG9kc1xuICAgKiAtIG1ldGEgcHJvcGVydGllc1xuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9pbml0U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faW5pdFByb3BzKCk7XG4gICAgdGhpcy5faW5pdE1ldGEoKTtcbiAgICB0aGlzLl9pbml0TWV0aG9kcygpO1xuICAgIHRoaXMuX2luaXREYXRhKCk7XG4gICAgdGhpcy5faW5pdENvbXB1dGVkKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgcHJvcHMuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRQcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnM7XG4gICAgdmFyIGVsID0gb3B0aW9ucy5lbDtcbiAgICB2YXIgcHJvcHMgPSBvcHRpb25zLnByb3BzO1xuICAgIGlmIChwcm9wcyAmJiAhZWwpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignUHJvcHMgd2lsbCBub3QgYmUgY29tcGlsZWQgaWYgbm8gYGVsYCBvcHRpb24gaXMgJyArICdwcm92aWRlZCBhdCBpbnN0YW50aWF0aW9uLicpO1xuICAgIH1cbiAgICAvLyBtYWtlIHN1cmUgdG8gY29udmVydCBzdHJpbmcgc2VsZWN0b3JzIGludG8gZWxlbWVudCBub3dcbiAgICBlbCA9IG9wdGlvbnMuZWwgPSBxdWVyeShlbCk7XG4gICAgdGhpcy5fcHJvcHNVbmxpbmtGbiA9IGVsICYmIGVsLm5vZGVUeXBlID09PSAxICYmIHByb3BzXG4gICAgLy8gcHJvcHMgbXVzdCBiZSBsaW5rZWQgaW4gcHJvcGVyIHNjb3BlIGlmIGluc2lkZSB2LWZvclxuICAgID8gY29tcGlsZUFuZExpbmtQcm9wcyh0aGlzLCBlbCwgcHJvcHMsIHRoaXMuX3Njb3BlKSA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIGRhdGEuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wc0RhdGEgPSB0aGlzLl9kYXRhO1xuICAgIHZhciBvcHRpb25zRGF0YUZuID0gdGhpcy4kb3B0aW9ucy5kYXRhO1xuICAgIHZhciBvcHRpb25zRGF0YSA9IG9wdGlvbnNEYXRhRm4gJiYgb3B0aW9uc0RhdGFGbigpO1xuICAgIHZhciBydW50aW1lRGF0YTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcnVudGltZURhdGEgPSAodHlwZW9mIHRoaXMuX3J1bnRpbWVEYXRhID09PSAnZnVuY3Rpb24nID8gdGhpcy5fcnVudGltZURhdGEoKSA6IHRoaXMuX3J1bnRpbWVEYXRhKSB8fCB7fTtcbiAgICAgIHRoaXMuX3J1bnRpbWVEYXRhID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnNEYXRhKSB7XG4gICAgICB0aGlzLl9kYXRhID0gb3B0aW9uc0RhdGE7XG4gICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzRGF0YSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBoYXNPd24ob3B0aW9uc0RhdGEsIHByb3ApICYmICFoYXNPd24ocnVudGltZURhdGEsIHByb3ApKSB7XG4gICAgICAgICAgd2FybignRGF0YSBmaWVsZCBcIicgKyBwcm9wICsgJ1wiIGlzIGFscmVhZHkgZGVmaW5lZCAnICsgJ2FzIGEgcHJvcC4gVXNlIHByb3AgZGVmYXVsdCB2YWx1ZSBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9wcm9wc1twcm9wXS5yYXcgIT09IG51bGwgfHwgIWhhc093bihvcHRpb25zRGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICBzZXQob3B0aW9uc0RhdGEsIHByb3AsIHByb3BzRGF0YVtwcm9wXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuICAgIC8vIHByb3h5IGRhdGEgb24gaW5zdGFuY2VcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICAgIHZhciBpLCBrZXk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGtleSA9IGtleXNbaV07XG4gICAgICB0aGlzLl9wcm94eShrZXkpO1xuICAgIH1cbiAgICAvLyBvYnNlcnZlIGRhdGFcbiAgICBvYnNlcnZlKGRhdGEsIHRoaXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTd2FwIHRoZSBpbnN0YW5jZSdzICRkYXRhLiBDYWxsZWQgaW4gJGRhdGEncyBzZXR0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdEYXRhXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX3NldERhdGEgPSBmdW5jdGlvbiAobmV3RGF0YSkge1xuICAgIG5ld0RhdGEgPSBuZXdEYXRhIHx8IHt9O1xuICAgIHZhciBvbGREYXRhID0gdGhpcy5fZGF0YTtcbiAgICB0aGlzLl9kYXRhID0gbmV3RGF0YTtcbiAgICB2YXIga2V5cywga2V5LCBpO1xuICAgIC8vIHVucHJveHkga2V5cyBub3QgcHJlc2VudCBpbiBuZXcgZGF0YVxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhvbGREYXRhKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgIGlmICghKGtleSBpbiBuZXdEYXRhKSkge1xuICAgICAgICB0aGlzLl91bnByb3h5KGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHByb3h5IGtleXMgbm90IGFscmVhZHkgcHJveGllZCxcbiAgICAvLyBhbmQgdHJpZ2dlciBjaGFuZ2UgZm9yIGNoYW5nZWQgdmFsdWVzXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKG5ld0RhdGEpO1xuICAgIGkgPSBrZXlzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFoYXNPd24odGhpcywga2V5KSkge1xuICAgICAgICAvLyBuZXcgcHJvcGVydHlcbiAgICAgICAgdGhpcy5fcHJveHkoa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgb2xkRGF0YS5fX29iX18ucmVtb3ZlVm0odGhpcyk7XG4gICAgb2JzZXJ2ZShuZXdEYXRhLCB0aGlzKTtcbiAgICB0aGlzLl9kaWdlc3QoKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJveHkgYSBwcm9wZXJ0eSwgc28gdGhhdFxuICAgKiB2bS5wcm9wID09PSB2bS5fZGF0YS5wcm9wXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fcHJveHkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgIC8vIG5lZWQgdG8gc3RvcmUgcmVmIHRvIHNlbGYgaGVyZVxuICAgICAgLy8gYmVjYXVzZSB0aGVzZSBnZXR0ZXIvc2V0dGVycyBtaWdodFxuICAgICAgLy8gYmUgY2FsbGVkIGJ5IGNoaWxkIHNjb3BlcyB2aWFcbiAgICAgIC8vIHByb3RvdHlwZSBpbmhlcml0YW5jZS5cbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBrZXksIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIHByb3h5R2V0dGVyKCkge1xuICAgICAgICAgIHJldHVybiBzZWxmLl9kYXRhW2tleV07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gcHJveHlTZXR0ZXIodmFsKSB7XG4gICAgICAgICAgc2VsZi5fZGF0YVtrZXldID0gdmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVucHJveHkgYSBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl91bnByb3h5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaXNSZXNlcnZlZChrZXkpKSB7XG4gICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogRm9yY2UgdXBkYXRlIG9uIGV2ZXJ5IHdhdGNoZXIgaW4gc2NvcGUuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2RpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMuX3dhdGNoZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdGhpcy5fd2F0Y2hlcnNbaV0udXBkYXRlKHRydWUpOyAvLyBzaGFsbG93IHVwZGF0ZXNcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHVwIGNvbXB1dGVkIHByb3BlcnRpZXMuIFRoZXkgYXJlIGVzc2VudGlhbGx5XG4gICAqIHNwZWNpYWwgZ2V0dGVyL3NldHRlcnNcbiAgICovXG5cbiAgZnVuY3Rpb24gbm9vcCgpIHt9XG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRDb21wdXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSB0aGlzLiRvcHRpb25zLmNvbXB1dGVkO1xuICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgICAgIHZhciB1c2VyRGVmID0gY29tcHV0ZWRba2V5XTtcbiAgICAgICAgdmFyIGRlZiA9IHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIHVzZXJEZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkZWYuZ2V0ID0gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYsIHRoaXMpO1xuICAgICAgICAgIGRlZi5zZXQgPSBub29wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZi5nZXQgPSB1c2VyRGVmLmdldCA/IHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlID8gbWFrZUNvbXB1dGVkR2V0dGVyKHVzZXJEZWYuZ2V0LCB0aGlzKSA6IGJpbmQodXNlckRlZi5nZXQsIHRoaXMpIDogbm9vcDtcbiAgICAgICAgICBkZWYuc2V0ID0gdXNlckRlZi5zZXQgPyBiaW5kKHVzZXJEZWYuc2V0LCB0aGlzKSA6IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGtleSwgZGVmKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUNvbXB1dGVkR2V0dGVyKGdldHRlciwgb3duZXIpIHtcbiAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKG93bmVyLCBnZXR0ZXIsIG51bGwsIHtcbiAgICAgIGxhenk6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY29tcHV0ZWRHZXR0ZXIoKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLnRhcmdldCkge1xuICAgICAgICB3YXRjaGVyLmRlcGVuZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHdhdGNoZXIudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCBpbnN0YW5jZSBtZXRob2RzLiBNZXRob2RzIG11c3QgYmUgYm91bmQgdG8gdGhlXG4gICAqIGluc3RhbmNlIHNpbmNlIHRoZXkgbWlnaHQgYmUgcGFzc2VkIGRvd24gYXMgYSBwcm9wIHRvXG4gICAqIGNoaWxkIGNvbXBvbmVudHMuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRNZXRob2RzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZXRob2RzID0gdGhpcy4kb3B0aW9ucy5tZXRob2RzO1xuICAgIGlmIChtZXRob2RzKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kcykge1xuICAgICAgICB0aGlzW2tleV0gPSBiaW5kKG1ldGhvZHNba2V5XSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG1ldGEgaW5mb3JtYXRpb24gbGlrZSAkaW5kZXgsICRrZXkgJiAkdmFsdWUuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2luaXRNZXRhID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtZXRhcyA9IHRoaXMuJG9wdGlvbnMuX21ldGE7XG4gICAgaWYgKG1ldGFzKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbWV0YXMpIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUodGhpcywga2V5LCBtZXRhc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciBldmVudFJFID0gL152LW9uOnxeQC87XG5cbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcbiAgLyoqXG4gICAqIFNldHVwIHRoZSBpbnN0YW5jZSdzIG9wdGlvbiBldmVudHMgJiB3YXRjaGVycy5cbiAgICogSWYgdGhlIHZhbHVlIGlzIGEgc3RyaW5nLCB3ZSBwdWxsIGl0IGZyb20gdGhlXG4gICAqIGluc3RhbmNlJ3MgbWV0aG9kcyBieSBuYW1lLlxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9pbml0RXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcbiAgICBpZiAob3B0aW9ucy5fYXNDb21wb25lbnQpIHtcbiAgICAgIHJlZ2lzdGVyQ29tcG9uZW50RXZlbnRzKHRoaXMsIG9wdGlvbnMuZWwpO1xuICAgIH1cbiAgICByZWdpc3RlckNhbGxiYWNrcyh0aGlzLCAnJG9uJywgb3B0aW9ucy5ldmVudHMpO1xuICAgIHJlZ2lzdGVyQ2FsbGJhY2tzKHRoaXMsICckd2F0Y2gnLCBvcHRpb25zLndhdGNoKTtcbiAgfTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgdi1vbiBldmVudHMgb24gYSBjaGlsZCBjb21wb25lbnRcbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICovXG5cbiAgZnVuY3Rpb24gcmVnaXN0ZXJDb21wb25lbnRFdmVudHModm0sIGVsKSB7XG4gICAgdmFyIGF0dHJzID0gZWwuYXR0cmlidXRlcztcbiAgICB2YXIgbmFtZSwgaGFuZGxlcjtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGF0dHJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgbmFtZSA9IGF0dHJzW2ldLm5hbWU7XG4gICAgICBpZiAoZXZlbnRSRS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnJlcGxhY2UoZXZlbnRSRSwgJycpO1xuICAgICAgICBoYW5kbGVyID0gKHZtLl9zY29wZSB8fCB2bS5fY29udGV4dCkuJGV2YWwoYXR0cnNbaV0udmFsdWUsIHRydWUpO1xuICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBoYW5kbGVyLl9mcm9tUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICB2bS4kb24obmFtZS5yZXBsYWNlKGV2ZW50UkUpLCBoYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgd2Fybigndi1vbjonICsgbmFtZSArICc9XCInICsgYXR0cnNbaV0udmFsdWUgKyAnXCInICsgKHZtLiRvcHRpb25zLm5hbWUgPyAnIG9uIGNvbXBvbmVudCA8JyArIHZtLiRvcHRpb25zLm5hbWUgKyAnPicgOiAnJykgKyAnIGV4cGVjdHMgYSBmdW5jdGlvbiB2YWx1ZSwgZ290ICcgKyBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBjYWxsYmFja3MgZm9yIG9wdGlvbiBldmVudHMgYW5kIHdhdGNoZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFzaFxuICAgKi9cblxuICBmdW5jdGlvbiByZWdpc3RlckNhbGxiYWNrcyh2bSwgYWN0aW9uLCBoYXNoKSB7XG4gICAgaWYgKCFoYXNoKSByZXR1cm47XG4gICAgdmFyIGhhbmRsZXJzLCBrZXksIGksIGo7XG4gICAgZm9yIChrZXkgaW4gaGFzaCkge1xuICAgICAgaGFuZGxlcnMgPSBoYXNoW2tleV07XG4gICAgICBpZiAoaXNBcnJheShoYW5kbGVycykpIHtcbiAgICAgICAgZm9yIChpID0gMCwgaiA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgIHJlZ2lzdGVyKHZtLCBhY3Rpb24sIGtleSwgaGFuZGxlcnNbaV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWdpc3Rlcih2bSwgYWN0aW9uLCBrZXksIGhhbmRsZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGVscGVyIHRvIHJlZ2lzdGVyIGFuIGV2ZW50L3dhdGNoIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfE9iamVjdH0gaGFuZGxlclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyKHZtLCBhY3Rpb24sIGtleSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIGhhbmRsZXI7XG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZtW2FjdGlvbl0oa2V5LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICB2YXIgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XG4gICAgICB2YXIgbWV0aG9kID0gbWV0aG9kcyAmJiBtZXRob2RzW2hhbmRsZXJdO1xuICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICB2bVthY3Rpb25dKGtleSwgbWV0aG9kLCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybignVW5rbm93biBtZXRob2Q6IFwiJyArIGhhbmRsZXIgKyAnXCIgd2hlbiAnICsgJ3JlZ2lzdGVyaW5nIGNhbGxiYWNrIGZvciAnICsgYWN0aW9uICsgJzogXCInICsga2V5ICsgJ1wiLicpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaGFuZGxlciAmJiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVnaXN0ZXIodm0sIGFjdGlvbiwga2V5LCBoYW5kbGVyLmhhbmRsZXIsIGhhbmRsZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXR1cCByZWN1cnNpdmUgYXR0YWNoZWQvZGV0YWNoZWQgY2FsbHNcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5faW5pdERPTUhvb2tzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJG9uKCdob29rOmF0dGFjaGVkJywgb25BdHRhY2hlZCk7XG4gICAgdGhpcy4kb24oJ2hvb2s6ZGV0YWNoZWQnLCBvbkRldGFjaGVkKTtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gcmVjdXJzaXZlbHkgY2FsbCBhdHRhY2hlZCBob29rIG9uIGNoaWxkcmVuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIG9uQXR0YWNoZWQoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGNoaWxkcmVuLmZvckVhY2goY2FsbEF0dGFjaCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdG9yIHRvIGNhbGwgYXR0YWNoZWQgaG9va1xuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gY2hpbGRcbiAgICovXG5cbiAgZnVuY3Rpb24gY2FsbEF0dGFjaChjaGlsZCkge1xuICAgIGlmICghY2hpbGQuX2lzQXR0YWNoZWQgJiYgaW5Eb2MoY2hpbGQuJGVsKSkge1xuICAgICAgY2hpbGQuX2NhbGxIb29rKCdhdHRhY2hlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byByZWN1cnNpdmVseSBjYWxsIGRldGFjaGVkIGhvb2sgb24gY2hpbGRyZW5cbiAgICovXG5cbiAgZnVuY3Rpb24gb25EZXRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5faXNBdHRhY2hlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kY2hpbGRyZW4uZm9yRWFjaChjYWxsRGV0YWNoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0b3IgdG8gY2FsbCBkZXRhY2hlZCBob29rXG4gICAqXG4gICAqIEBwYXJhbSB7VnVlfSBjaGlsZFxuICAgKi9cblxuICBmdW5jdGlvbiBjYWxsRGV0YWNoKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLl9pc0F0dGFjaGVkICYmICFpbkRvYyhjaGlsZC4kZWwpKSB7XG4gICAgICBjaGlsZC5fY2FsbEhvb2soJ2RldGFjaGVkJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgYWxsIGhhbmRsZXJzIGZvciBhIGhvb2tcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGhvb2tcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fY2FsbEhvb2sgPSBmdW5jdGlvbiAoaG9vaykge1xuICAgIHRoaXMuJGVtaXQoJ3ByZS1ob29rOicgKyBob29rKTtcbiAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLiRvcHRpb25zW2hvb2tdO1xuICAgIGlmIChoYW5kbGVycykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgaGFuZGxlcnNbaV0uY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy4kZW1pdCgnaG9vazonICsgaG9vayk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIEEgZGlyZWN0aXZlIGxpbmtzIGEgRE9NIGVsZW1lbnQgd2l0aCBhIHBpZWNlIG9mIGRhdGEsXG4gKiB3aGljaCBpcyB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpbmcgYW4gZXhwcmVzc2lvbi5cbiAqIEl0IHJlZ2lzdGVycyBhIHdhdGNoZXIgd2l0aCB0aGUgZXhwcmVzc2lvbiBhbmQgY2FsbHNcbiAqIHRoZSBET00gdXBkYXRlIGZ1bmN0aW9uIHdoZW4gYSBjaGFuZ2UgaXMgdHJpZ2dlcmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge05vZGV9IGVsXG4gKiBAcGFyYW0ge1Z1ZX0gdm1cbiAqIEBwYXJhbSB7T2JqZWN0fSBkZXNjcmlwdG9yXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSBuYW1lXG4gKiAgICAgICAgICAgICAgICAgLSB7T2JqZWN0fSBkZWZcbiAqICAgICAgICAgICAgICAgICAtIHtTdHJpbmd9IGV4cHJlc3Npb25cbiAqICAgICAgICAgICAgICAgICAtIHtBcnJheTxPYmplY3Q+fSBbZmlsdGVyc11cbiAqICAgICAgICAgICAgICAgICAtIHtCb29sZWFufSBsaXRlcmFsXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSBhdHRyXG4gKiAgICAgICAgICAgICAgICAgLSB7U3RyaW5nfSByYXdcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWYgLSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvYmplY3RcbiAqIEBwYXJhbSB7VnVlfSBbaG9zdF0gLSB0cmFuc2NsdXNpb24gaG9zdCBjb21wb25lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIC0gdi1mb3Igc2NvcGVcbiAqIEBwYXJhbSB7RnJhZ21lbnR9IFtmcmFnXSAtIG93bmVyIGZyYWdtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gRGlyZWN0aXZlKGRlc2NyaXB0b3IsIHZtLCBlbCwgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgdGhpcy52bSA9IHZtO1xuICB0aGlzLmVsID0gZWw7XG4gIC8vIGNvcHkgZGVzY3JpcHRvciBwcm9wZXJ0aWVzXG4gIHRoaXMuZGVzY3JpcHRvciA9IGRlc2NyaXB0b3I7XG4gIHRoaXMubmFtZSA9IGRlc2NyaXB0b3IubmFtZTtcbiAgdGhpcy5leHByZXNzaW9uID0gZGVzY3JpcHRvci5leHByZXNzaW9uO1xuICB0aGlzLmFyZyA9IGRlc2NyaXB0b3IuYXJnO1xuICB0aGlzLm1vZGlmaWVycyA9IGRlc2NyaXB0b3IubW9kaWZpZXJzO1xuICB0aGlzLmZpbHRlcnMgPSBkZXNjcmlwdG9yLmZpbHRlcnM7XG4gIHRoaXMubGl0ZXJhbCA9IHRoaXMubW9kaWZpZXJzICYmIHRoaXMubW9kaWZpZXJzLmxpdGVyYWw7XG4gIC8vIHByaXZhdGVcbiAgdGhpcy5fbG9ja2VkID0gZmFsc2U7XG4gIHRoaXMuX2JvdW5kID0gZmFsc2U7XG4gIHRoaXMuX2xpc3RlbmVycyA9IG51bGw7XG4gIC8vIGxpbmsgY29udGV4dFxuICB0aGlzLl9ob3N0ID0gaG9zdDtcbiAgdGhpcy5fc2NvcGUgPSBzY29wZTtcbiAgdGhpcy5fZnJhZyA9IGZyYWc7XG4gIC8vIHN0b3JlIGRpcmVjdGl2ZXMgb24gbm9kZSBpbiBkZXYgbW9kZVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLmVsKSB7XG4gICAgdGhpcy5lbC5fdnVlX2RpcmVjdGl2ZXMgPSB0aGlzLmVsLl92dWVfZGlyZWN0aXZlcyB8fCBbXTtcbiAgICB0aGlzLmVsLl92dWVfZGlyZWN0aXZlcy5wdXNoKHRoaXMpO1xuICB9XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgZGlyZWN0aXZlLCBtaXhpbiBkZWZpbml0aW9uIHByb3BlcnRpZXMsXG4gKiBzZXR1cCB0aGUgd2F0Y2hlciwgY2FsbCBkZWZpbml0aW9uIGJpbmQoKSBhbmQgdXBkYXRlKClcbiAqIGlmIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZlxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX2JpbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBuYW1lID0gdGhpcy5uYW1lO1xuICB2YXIgZGVzY3JpcHRvciA9IHRoaXMuZGVzY3JpcHRvcjtcblxuICAvLyByZW1vdmUgYXR0cmlidXRlXG4gIGlmICgobmFtZSAhPT0gJ2Nsb2FrJyB8fCB0aGlzLnZtLl9pc0NvbXBpbGVkKSAmJiB0aGlzLmVsICYmIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKSB7XG4gICAgdmFyIGF0dHIgPSBkZXNjcmlwdG9yLmF0dHIgfHwgJ3YtJyArIG5hbWU7XG4gICAgdGhpcy5lbC5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gIH1cblxuICAvLyBjb3B5IGRlZiBwcm9wZXJ0aWVzXG4gIHZhciBkZWYgPSBkZXNjcmlwdG9yLmRlZjtcbiAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLnVwZGF0ZSA9IGRlZjtcbiAgfSBlbHNlIHtcbiAgICBleHRlbmQodGhpcywgZGVmKTtcbiAgfVxuXG4gIC8vIHNldHVwIGRpcmVjdGl2ZSBwYXJhbXNcbiAgdGhpcy5fc2V0dXBQYXJhbXMoKTtcblxuICAvLyBpbml0aWFsIGJpbmRcbiAgaWYgKHRoaXMuYmluZCkge1xuICAgIHRoaXMuYmluZCgpO1xuICB9XG4gIHRoaXMuX2JvdW5kID0gdHJ1ZTtcblxuICBpZiAodGhpcy5saXRlcmFsKSB7XG4gICAgdGhpcy51cGRhdGUgJiYgdGhpcy51cGRhdGUoZGVzY3JpcHRvci5yYXcpO1xuICB9IGVsc2UgaWYgKCh0aGlzLmV4cHJlc3Npb24gfHwgdGhpcy5tb2RpZmllcnMpICYmICh0aGlzLnVwZGF0ZSB8fCB0aGlzLnR3b1dheSkgJiYgIXRoaXMuX2NoZWNrU3RhdGVtZW50KCkpIHtcbiAgICAvLyB3cmFwcGVkIHVwZGF0ZXIgZm9yIGNvbnRleHRcbiAgICB2YXIgZGlyID0gdGhpcztcbiAgICBpZiAodGhpcy51cGRhdGUpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2YWwsIG9sZFZhbCkge1xuICAgICAgICBpZiAoIWRpci5fbG9ja2VkKSB7XG4gICAgICAgICAgZGlyLnVwZGF0ZSh2YWwsIG9sZFZhbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3VwZGF0ZSA9IG5vb3A7XG4gICAgfVxuICAgIHZhciBwcmVQcm9jZXNzID0gdGhpcy5fcHJlUHJvY2VzcyA/IGJpbmQodGhpcy5fcHJlUHJvY2VzcywgdGhpcykgOiBudWxsO1xuICAgIHZhciBwb3N0UHJvY2VzcyA9IHRoaXMuX3Bvc3RQcm9jZXNzID8gYmluZCh0aGlzLl9wb3N0UHJvY2VzcywgdGhpcykgOiBudWxsO1xuICAgIHZhciB3YXRjaGVyID0gdGhpcy5fd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHRoaXMudm0sIHRoaXMuZXhwcmVzc2lvbiwgdGhpcy5fdXBkYXRlLCAvLyBjYWxsYmFja1xuICAgIHtcbiAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcbiAgICAgIHR3b1dheTogdGhpcy50d29XYXksXG4gICAgICBkZWVwOiB0aGlzLmRlZXAsXG4gICAgICBwcmVQcm9jZXNzOiBwcmVQcm9jZXNzLFxuICAgICAgcG9zdFByb2Nlc3M6IHBvc3RQcm9jZXNzLFxuICAgICAgc2NvcGU6IHRoaXMuX3Njb3BlXG4gICAgfSk7XG4gICAgLy8gdi1tb2RlbCB3aXRoIGluaXRhbCBpbmxpbmUgdmFsdWUgbmVlZCB0byBzeW5jIGJhY2sgdG9cbiAgICAvLyBtb2RlbCBpbnN0ZWFkIG9mIHVwZGF0ZSB0byBET00gb24gaW5pdC4gVGhleSB3b3VsZFxuICAgIC8vIHNldCB0aGUgYWZ0ZXJCaW5kIGhvb2sgdG8gaW5kaWNhdGUgdGhhdC5cbiAgICBpZiAodGhpcy5hZnRlckJpbmQpIHtcbiAgICAgIHRoaXMuYWZ0ZXJCaW5kKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGUod2F0Y2hlci52YWx1ZSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldHVwIGFsbCBwYXJhbSBhdHRyaWJ1dGVzLCBlLmcuIHRyYWNrLWJ5LFxuICogdHJhbnNpdGlvbi1tb2RlLCBldGMuLi5cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl9zZXR1cFBhcmFtcyA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLnBhcmFtcykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcGFyYW1zID0gdGhpcy5wYXJhbXM7XG4gIC8vIHN3YXAgdGhlIHBhcmFtcyBhcnJheSB3aXRoIGEgZnJlc2ggb2JqZWN0LlxuICB0aGlzLnBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBpID0gcGFyYW1zLmxlbmd0aDtcbiAgdmFyIGtleSwgdmFsLCBtYXBwZWRLZXk7XG4gIHdoaWxlIChpLS0pIHtcbiAgICBrZXkgPSBwYXJhbXNbaV07XG4gICAgbWFwcGVkS2V5ID0gY2FtZWxpemUoa2V5KTtcbiAgICB2YWwgPSBnZXRCaW5kQXR0cih0aGlzLmVsLCBrZXkpO1xuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgLy8gZHluYW1pY1xuICAgICAgdGhpcy5fc2V0dXBQYXJhbVdhdGNoZXIobWFwcGVkS2V5LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdGF0aWNcbiAgICAgIHZhbCA9IGdldEF0dHIodGhpcy5lbCwga2V5KTtcbiAgICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnBhcmFtc1ttYXBwZWRLZXldID0gdmFsID09PSAnJyA/IHRydWUgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNldHVwIGEgd2F0Y2hlciBmb3IgYSBkeW5hbWljIHBhcmFtLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHByZXNzaW9uXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5fc2V0dXBQYXJhbVdhdGNoZXIgPSBmdW5jdGlvbiAoa2V5LCBleHByZXNzaW9uKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICB2YXIgdW53YXRjaCA9ICh0aGlzLl9zY29wZSB8fCB0aGlzLnZtKS4kd2F0Y2goZXhwcmVzc2lvbiwgZnVuY3Rpb24gKHZhbCwgb2xkVmFsKSB7XG4gICAgc2VsZi5wYXJhbXNba2V5XSA9IHZhbDtcbiAgICAvLyBzaW5jZSB3ZSBhcmUgaW4gaW1tZWRpYXRlIG1vZGUsXG4gICAgLy8gb25seSBjYWxsIHRoZSBwYXJhbSBjaGFuZ2UgY2FsbGJhY2tzIGlmIHRoaXMgaXMgbm90IHRoZSBmaXJzdCB1cGRhdGUuXG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgdmFyIGNiID0gc2VsZi5wYXJhbVdhdGNoZXJzICYmIHNlbGYucGFyYW1XYXRjaGVyc1trZXldO1xuICAgICAgaWYgKGNiKSB7XG4gICAgICAgIGNiLmNhbGwoc2VsZiwgdmFsLCBvbGRWYWwpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICB1c2VyOiBmYWxzZVxuICB9KTsodGhpcy5fcGFyYW1VbndhdGNoRm5zIHx8ICh0aGlzLl9wYXJhbVVud2F0Y2hGbnMgPSBbXSkpLnB1c2godW53YXRjaCk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBkaXJlY3RpdmUgaXMgYSBmdW5jdGlvbiBjYWxsZXJcbiAqIGFuZCBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIGNhbGxhYmxlIG9uZS4gSWYgYm90aCB0cnVlLFxuICogd2Ugd3JhcCB1cCB0aGUgZXhwcmVzc2lvbiBhbmQgdXNlIGl0IGFzIHRoZSBldmVudFxuICogaGFuZGxlci5cbiAqXG4gKiBlLmcuIG9uLWNsaWNrPVwiYSsrXCJcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5cbkRpcmVjdGl2ZS5wcm90b3R5cGUuX2NoZWNrU3RhdGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMuZXhwcmVzc2lvbjtcbiAgaWYgKGV4cHJlc3Npb24gJiYgdGhpcy5hY2NlcHRTdGF0ZW1lbnQgJiYgIWlzU2ltcGxlUGF0aChleHByZXNzaW9uKSkge1xuICAgIHZhciBmbiA9IHBhcnNlRXhwcmVzc2lvbihleHByZXNzaW9uKS5nZXQ7XG4gICAgdmFyIHNjb3BlID0gdGhpcy5fc2NvcGUgfHwgdGhpcy52bTtcbiAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uIGhhbmRsZXIoZSkge1xuICAgICAgc2NvcGUuJGV2ZW50ID0gZTtcbiAgICAgIGZuLmNhbGwoc2NvcGUsIHNjb3BlKTtcbiAgICAgIHNjb3BlLiRldmVudCA9IG51bGw7XG4gICAgfTtcbiAgICBpZiAodGhpcy5maWx0ZXJzKSB7XG4gICAgICBoYW5kbGVyID0gc2NvcGUuX2FwcGx5RmlsdGVycyhoYW5kbGVyLCBudWxsLCB0aGlzLmZpbHRlcnMpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZShoYW5kbGVyKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUgd2l0aCB0aGUgc2V0dGVyLlxuICogVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIGluIHR3by13YXkgZGlyZWN0aXZlc1xuICogZS5nLiB2LW1vZGVsLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwdWJsaWNcbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAodGhpcy50d29XYXkpIHtcbiAgICB0aGlzLl93aXRoTG9jayhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLl93YXRjaGVyLnNldCh2YWx1ZSk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oJ0RpcmVjdGl2ZS5zZXQoKSBjYW4gb25seSBiZSB1c2VkIGluc2lkZSB0d29XYXknICsgJ2RpcmVjdGl2ZXMuJyk7XG4gIH1cbn07XG5cbi8qKlxuICogRXhlY3V0ZSBhIGZ1bmN0aW9uIHdoaWxlIHByZXZlbnRpbmcgdGhhdCBmdW5jdGlvbiBmcm9tXG4gKiB0cmlnZ2VyaW5nIHVwZGF0ZXMgb24gdGhpcyBkaXJlY3RpdmUgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuXG5EaXJlY3RpdmUucHJvdG90eXBlLl93aXRoTG9jayA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYuX2xvY2tlZCA9IHRydWU7XG4gIGZuLmNhbGwoc2VsZik7XG4gIG5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9sb2NrZWQgPSBmYWxzZTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCB0aGF0IGF0dGFjaGVzIGEgRE9NIGV2ZW50IGxpc3RlbmVyXG4gKiB0byB0aGUgZGlyZWN0aXZlIGVsZW1lbnQgYW5kIGF1dG9tZXRpY2FsbHkgdGVhcnMgaXQgZG93blxuICogZHVyaW5nIHVuYmluZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW3VzZUNhcHR1cmVdXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgaGFuZGxlciwgdXNlQ2FwdHVyZSkge1xuICBvbih0aGlzLmVsLCBldmVudCwgaGFuZGxlciwgdXNlQ2FwdHVyZSk7KHRoaXMuX2xpc3RlbmVycyB8fCAodGhpcy5fbGlzdGVuZXJzID0gW10pKS5wdXNoKFtldmVudCwgaGFuZGxlcl0pO1xufTtcblxuLyoqXG4gKiBUZWFyZG93biB0aGUgd2F0Y2hlciBhbmQgY2FsbCB1bmJpbmQuXG4gKi9cblxuRGlyZWN0aXZlLnByb3RvdHlwZS5fdGVhcmRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLl9ib3VuZCkge1xuICAgIHRoaXMuX2JvdW5kID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudW5iaW5kKSB7XG4gICAgICB0aGlzLnVuYmluZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fd2F0Y2hlcikge1xuICAgICAgdGhpcy5fd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH1cbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xuICAgIHZhciBpO1xuICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgIGkgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBvZmYodGhpcy5lbCwgbGlzdGVuZXJzW2ldWzBdLCBsaXN0ZW5lcnNbaV1bMV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdW53YXRjaEZucyA9IHRoaXMuX3BhcmFtVW53YXRjaEZucztcbiAgICBpZiAodW53YXRjaEZucykge1xuICAgICAgaSA9IHVud2F0Y2hGbnMubGVuZ3RoO1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB1bndhdGNoRm5zW2ldKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuZWwpIHtcbiAgICAgIHRoaXMuZWwuX3Z1ZV9kaXJlY3RpdmVzLiRyZW1vdmUodGhpcyk7XG4gICAgfVxuICAgIHRoaXMudm0gPSB0aGlzLmVsID0gdGhpcy5fd2F0Y2hlciA9IHRoaXMuX2xpc3RlbmVycyA9IG51bGw7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGxpZmVjeWNsZU1peGluIChWdWUpIHtcbiAgLyoqXG4gICAqIFVwZGF0ZSB2LXJlZiBmb3IgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IHJlbW92ZVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl91cGRhdGVSZWYgPSBmdW5jdGlvbiAocmVtb3ZlKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMuJG9wdGlvbnMuX3JlZjtcbiAgICBpZiAocmVmKSB7XG4gICAgICB2YXIgcmVmcyA9ICh0aGlzLl9zY29wZSB8fCB0aGlzLl9jb250ZXh0KS4kcmVmcztcbiAgICAgIGlmIChyZW1vdmUpIHtcbiAgICAgICAgaWYgKHJlZnNbcmVmXSA9PT0gdGhpcykge1xuICAgICAgICAgIHJlZnNbcmVmXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZnNbcmVmXSA9IHRoaXM7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUcmFuc2NsdWRlLCBjb21waWxlIGFuZCBsaW5rIGVsZW1lbnQuXG4gICAqXG4gICAqIElmIGEgcHJlLWNvbXBpbGVkIGxpbmtlciBpcyBhdmFpbGFibGUsIHRoYXQgbWVhbnMgdGhlXG4gICAqIHBhc3NlZCBpbiBlbGVtZW50IHdpbGwgYmUgcHJlLXRyYW5zY2x1ZGVkIGFuZCBjb21waWxlZFxuICAgKiBhcyB3ZWxsIC0gYWxsIHdlIG5lZWQgdG8gZG8gaXMgdG8gY2FsbCB0aGUgbGlua2VyLlxuICAgKlxuICAgKiBPdGhlcndpc2Ugd2UgbmVlZCB0byBjYWxsIHRyYW5zY2x1ZGUvY29tcGlsZS9saW5rIGhlcmUuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fY29tcGlsZSA9IGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciBvcHRpb25zID0gdGhpcy4kb3B0aW9ucztcblxuICAgIC8vIHRyYW5zY2x1ZGUgYW5kIGluaXQgZWxlbWVudFxuICAgIC8vIHRyYW5zY2x1ZGUgY2FuIHBvdGVudGlhbGx5IHJlcGxhY2Ugb3JpZ2luYWxcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGtlZXAgcmVmZXJlbmNlOyB0aGlzIHN0ZXAgYWxzbyBpbmplY3RzXG4gICAgLy8gdGhlIHRlbXBsYXRlIGFuZCBjYWNoZXMgdGhlIG9yaWdpbmFsIGF0dHJpYnV0ZXNcbiAgICAvLyBvbiB0aGUgY29udGFpbmVyIG5vZGUgYW5kIHJlcGxhY2VyIG5vZGUuXG4gICAgdmFyIG9yaWdpbmFsID0gZWw7XG4gICAgZWwgPSB0cmFuc2NsdWRlKGVsLCBvcHRpb25zKTtcbiAgICB0aGlzLl9pbml0RWxlbWVudChlbCk7XG5cbiAgICAvLyBoYW5kbGUgdi1wcmUgb24gcm9vdCBub2RlICgjMjAyNilcbiAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEgJiYgZ2V0QXR0cihlbCwgJ3YtcHJlJykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyByb290IGlzIGFsd2F5cyBjb21waWxlZCBwZXItaW5zdGFuY2UsIGJlY2F1c2VcbiAgICAvLyBjb250YWluZXIgYXR0cnMgYW5kIHByb3BzIGNhbiBiZSBkaWZmZXJlbnQgZXZlcnkgdGltZS5cbiAgICB2YXIgY29udGV4dE9wdGlvbnMgPSB0aGlzLl9jb250ZXh0ICYmIHRoaXMuX2NvbnRleHQuJG9wdGlvbnM7XG4gICAgdmFyIHJvb3RMaW5rZXIgPSBjb21waWxlUm9vdChlbCwgb3B0aW9ucywgY29udGV4dE9wdGlvbnMpO1xuXG4gICAgLy8gc2NhbiBmb3Igc2xvdCBkaXN0cmlidXRpb24gYmVmb3JlIGNvbXBpbGluZyB0aGUgY29udGVudFxuICAgIC8vIHNvIHRoYXQgaXQncyBkZWNvdXBlbGQgZnJvbSBzbG90L2RpcmVjdGl2ZSBjb21waWxhdGlvbiBvcmRlclxuICAgIHNjYW5TbG90cyhlbCwgb3B0aW9ucy5fY29udGVudCwgdGhpcyk7XG5cbiAgICAvLyBjb21waWxlIGFuZCBsaW5rIHRoZSByZXN0XG4gICAgdmFyIGNvbnRlbnRMaW5rRm47XG4gICAgdmFyIGN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNvbXBvbmVudCBjb21waWxhdGlvbiBjYW4gYmUgY2FjaGVkXG4gICAgLy8gYXMgbG9uZyBhcyBpdCdzIG5vdCB1c2luZyBpbmxpbmUtdGVtcGxhdGVcbiAgICBpZiAob3B0aW9ucy5fbGlua2VyQ2FjaGFibGUpIHtcbiAgICAgIGNvbnRlbnRMaW5rRm4gPSBjdG9yLmxpbmtlcjtcbiAgICAgIGlmICghY29udGVudExpbmtGbikge1xuICAgICAgICBjb250ZW50TGlua0ZuID0gY3Rvci5saW5rZXIgPSBjb21waWxlKGVsLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsaW5rIHBoYXNlXG4gICAgLy8gbWFrZSBzdXJlIHRvIGxpbmsgcm9vdCB3aXRoIHByb3Agc2NvcGUhXG4gICAgdmFyIHJvb3RVbmxpbmtGbiA9IHJvb3RMaW5rZXIodGhpcywgZWwsIHRoaXMuX3Njb3BlKTtcbiAgICB2YXIgY29udGVudFVubGlua0ZuID0gY29udGVudExpbmtGbiA/IGNvbnRlbnRMaW5rRm4odGhpcywgZWwpIDogY29tcGlsZShlbCwgb3B0aW9ucykodGhpcywgZWwpO1xuXG4gICAgLy8gcmVnaXN0ZXIgY29tcG9zaXRlIHVubGluayBmdW5jdGlvblxuICAgIC8vIHRvIGJlIGNhbGxlZCBkdXJpbmcgaW5zdGFuY2UgZGVzdHJ1Y3Rpb25cbiAgICB0aGlzLl91bmxpbmtGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJvb3RVbmxpbmtGbigpO1xuICAgICAgLy8gcGFzc2luZyBkZXN0cm95aW5nOiB0cnVlIHRvIGF2b2lkIHNlYXJjaGluZyBhbmRcbiAgICAgIC8vIHNwbGljaW5nIHRoZSBkaXJlY3RpdmVzXG4gICAgICBjb250ZW50VW5saW5rRm4odHJ1ZSk7XG4gICAgfTtcblxuICAgIC8vIGZpbmFsbHkgcmVwbGFjZSBvcmlnaW5hbFxuICAgIGlmIChvcHRpb25zLnJlcGxhY2UpIHtcbiAgICAgIHJlcGxhY2Uob3JpZ2luYWwsIGVsKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc0NvbXBpbGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9jYWxsSG9vaygnY29tcGlsZWQnKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBpbnN0YW5jZSBlbGVtZW50LiBDYWxsZWQgaW4gdGhlIHB1YmxpY1xuICAgKiAkbW91bnQoKSBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gZWxcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5faW5pdEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoaXNGcmFnbWVudChlbCkpIHtcbiAgICAgIHRoaXMuX2lzRnJhZ21lbnQgPSB0cnVlO1xuICAgICAgdGhpcy4kZWwgPSB0aGlzLl9mcmFnbWVudFN0YXJ0ID0gZWwuZmlyc3RDaGlsZDtcbiAgICAgIHRoaXMuX2ZyYWdtZW50RW5kID0gZWwubGFzdENoaWxkO1xuICAgICAgLy8gc2V0IHBlcnNpc3RlZCB0ZXh0IGFuY2hvcnMgdG8gZW1wdHlcbiAgICAgIGlmICh0aGlzLl9mcmFnbWVudFN0YXJ0Lm5vZGVUeXBlID09PSAzKSB7XG4gICAgICAgIHRoaXMuX2ZyYWdtZW50U3RhcnQuZGF0YSA9IHRoaXMuX2ZyYWdtZW50RW5kLmRhdGEgPSAnJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ZyYWdtZW50ID0gZWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGVsID0gZWw7XG4gICAgfVxuICAgIHRoaXMuJGVsLl9fdnVlX18gPSB0aGlzO1xuICAgIHRoaXMuX2NhbGxIb29rKCdiZWZvcmVDb21waWxlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhbmQgYmluZCBhIGRpcmVjdGl2ZSB0byBhbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIGRpcmVjdGl2ZSBuYW1lXG4gICAqIEBwYXJhbSB7Tm9kZX0gbm9kZSAgIC0gdGFyZ2V0IG5vZGVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlc2MgLSBwYXJzZWQgZGlyZWN0aXZlIGRlc2NyaXB0b3JcbiAgICogQHBhcmFtIHtPYmplY3R9IGRlZiAgLSBkaXJlY3RpdmUgZGVmaW5pdGlvbiBvYmplY3RcbiAgICogQHBhcmFtIHtWdWV9IFtob3N0XSAtIHRyYW5zY2x1c2lvbiBob3N0IGNvbXBvbmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSAtIHYtZm9yIHNjb3BlXG4gICAqIEBwYXJhbSB7RnJhZ21lbnR9IFtmcmFnXSAtIG93bmVyIGZyYWdtZW50XG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2JpbmREaXIgPSBmdW5jdGlvbiAoZGVzY3JpcHRvciwgbm9kZSwgaG9zdCwgc2NvcGUsIGZyYWcpIHtcbiAgICB0aGlzLl9kaXJlY3RpdmVzLnB1c2gobmV3IERpcmVjdGl2ZShkZXNjcmlwdG9yLCB0aGlzLCBub2RlLCBob3N0LCBzY29wZSwgZnJhZykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZWFyZG93biBhbiBpbnN0YW5jZSwgdW5vYnNlcnZlcyB0aGUgZGF0YSwgdW5iaW5kIGFsbCB0aGVcbiAgICogZGlyZWN0aXZlcywgdHVybiBvZmYgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnMsIGV0Yy5cbiAgICpcbiAgICogQHBhcmFtIHtCb29sZWFufSByZW1vdmUgLSB3aGV0aGVyIHRvIHJlbW92ZSB0aGUgRE9NIG5vZGUuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVmZXJDbGVhbnVwIC0gaWYgdHJ1ZSwgZGVmZXIgY2xlYW51cCB0b1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGNhbGxlZCBsYXRlclxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKHJlbW92ZSwgZGVmZXJDbGVhbnVwKSB7XG4gICAgaWYgKHRoaXMuX2lzQmVpbmdEZXN0cm95ZWQpIHtcbiAgICAgIGlmICghZGVmZXJDbGVhbnVwKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGVzdHJveVJlYWR5O1xuICAgIHZhciBwZW5kaW5nUmVtb3ZhbDtcblxuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAvLyBDbGVhbnVwIHNob3VsZCBiZSBjYWxsZWQgZWl0aGVyIHN5bmNocm9ub3VzbHkgb3IgYXN5bmNocm9ub3lzbHkgYXNcbiAgICAvLyBjYWxsYmFjayBvZiB0aGlzLiRyZW1vdmUoKSwgb3IgaWYgcmVtb3ZlIGFuZCBkZWZlckNsZWFudXAgYXJlIGZhbHNlLlxuICAgIC8vIEluIGFueSBjYXNlIGl0IHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgYWxsIG90aGVyIHJlbW92aW5nLCB1bmJpbmRpbmcgYW5kXG4gICAgLy8gdHVybmluZyBvZiBpcyBkb25lXG4gICAgdmFyIGNsZWFudXBJZlBvc3NpYmxlID0gZnVuY3Rpb24gY2xlYW51cElmUG9zc2libGUoKSB7XG4gICAgICBpZiAoZGVzdHJveVJlYWR5ICYmICFwZW5kaW5nUmVtb3ZhbCAmJiAhZGVmZXJDbGVhbnVwKSB7XG4gICAgICAgIHNlbGYuX2NsZWFudXAoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gcmVtb3ZlIERPTSBlbGVtZW50XG4gICAgaWYgKHJlbW92ZSAmJiB0aGlzLiRlbCkge1xuICAgICAgcGVuZGluZ1JlbW92YWwgPSB0cnVlO1xuICAgICAgdGhpcy4kcmVtb3ZlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGVuZGluZ1JlbW92YWwgPSBmYWxzZTtcbiAgICAgICAgY2xlYW51cElmUG9zc2libGUoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2NhbGxIb29rKCdiZWZvcmVEZXN0cm95Jyk7XG4gICAgdGhpcy5faXNCZWluZ0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgdmFyIGk7XG4gICAgLy8gcmVtb3ZlIHNlbGYgZnJvbSBwYXJlbnQuIG9ubHkgbmVjZXNzYXJ5XG4gICAgLy8gaWYgcGFyZW50IGlzIG5vdCBiZWluZyBkZXN0cm95ZWQgYXMgd2VsbC5cbiAgICB2YXIgcGFyZW50ID0gdGhpcy4kcGFyZW50O1xuICAgIGlmIChwYXJlbnQgJiYgIXBhcmVudC5faXNCZWluZ0Rlc3Ryb3llZCkge1xuICAgICAgcGFyZW50LiRjaGlsZHJlbi4kcmVtb3ZlKHRoaXMpO1xuICAgICAgLy8gdW5yZWdpc3RlciByZWYgKHJlbW92ZTogdHJ1ZSlcbiAgICAgIHRoaXMuX3VwZGF0ZVJlZih0cnVlKTtcbiAgICB9XG4gICAgLy8gZGVzdHJveSBhbGwgY2hpbGRyZW4uXG4gICAgaSA9IHRoaXMuJGNoaWxkcmVuLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB0aGlzLiRjaGlsZHJlbltpXS4kZGVzdHJveSgpO1xuICAgIH1cbiAgICAvLyB0ZWFyZG93biBwcm9wc1xuICAgIGlmICh0aGlzLl9wcm9wc1VubGlua0ZuKSB7XG4gICAgICB0aGlzLl9wcm9wc1VubGlua0ZuKCk7XG4gICAgfVxuICAgIC8vIHRlYXJkb3duIGFsbCBkaXJlY3RpdmVzLiB0aGlzIGFsc28gdGVhcnNkb3duIGFsbFxuICAgIC8vIGRpcmVjdGl2ZS1vd25lZCB3YXRjaGVycy5cbiAgICBpZiAodGhpcy5fdW5saW5rRm4pIHtcbiAgICAgIHRoaXMuX3VubGlua0ZuKCk7XG4gICAgfVxuICAgIGkgPSB0aGlzLl93YXRjaGVycy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlZmVyZW5jZSB0byBzZWxmIG9uICRlbFxuICAgIGlmICh0aGlzLiRlbCkge1xuICAgICAgdGhpcy4kZWwuX192dWVfXyA9IG51bGw7XG4gICAgfVxuXG4gICAgZGVzdHJveVJlYWR5ID0gdHJ1ZTtcbiAgICBjbGVhbnVwSWZQb3NzaWJsZSgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDbGVhbiB1cCB0byBlbnN1cmUgZ2FyYmFnZSBjb2xsZWN0aW9uLlxuICAgKiBUaGlzIGlzIGNhbGxlZCBhZnRlciB0aGUgbGVhdmUgdHJhbnNpdGlvbiBpZiB0aGVyZVxuICAgKiBpcyBhbnkuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuX2NsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX2lzRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gb3duZXIgZnJhZ21lbnRcbiAgICAvLyBkbyBpdCBpbiBjbGVhbnVwIHNvIHRoYXQgd2UgY2FuIGNhbGwgJGRlc3Ryb3kgd2l0aFxuICAgIC8vIGRlZmVyIHJpZ2h0IHdoZW4gYSBmcmFnbWVudCBpcyBhYm91dCB0byBiZSByZW1vdmVkLlxuICAgIGlmICh0aGlzLl9mcmFnKSB7XG4gICAgICB0aGlzLl9mcmFnLmNoaWxkcmVuLiRyZW1vdmUodGhpcyk7XG4gICAgfVxuICAgIC8vIHJlbW92ZSByZWZlcmVuY2UgZnJvbSBkYXRhIG9iXG4gICAgLy8gZnJvemVuIG9iamVjdCBtYXkgbm90IGhhdmUgb2JzZXJ2ZXIuXG4gICAgaWYgKHRoaXMuX2RhdGEuX19vYl9fKSB7XG4gICAgICB0aGlzLl9kYXRhLl9fb2JfXy5yZW1vdmVWbSh0aGlzKTtcbiAgICB9XG4gICAgLy8gQ2xlYW4gdXAgcmVmZXJlbmNlcyB0byBwcml2YXRlIHByb3BlcnRpZXMgYW5kIG90aGVyXG4gICAgLy8gaW5zdGFuY2VzLiBwcmVzZXJ2ZSByZWZlcmVuY2UgdG8gX2RhdGEgc28gdGhhdCBwcm94eVxuICAgIC8vIGFjY2Vzc29ycyBzdGlsbCB3b3JrLiBUaGUgb25seSBwb3RlbnRpYWwgc2lkZSBlZmZlY3RcbiAgICAvLyBoZXJlIGlzIHRoYXQgbXV0YXRpbmcgdGhlIGluc3RhbmNlIGFmdGVyIGl0J3MgZGVzdHJveWVkXG4gICAgLy8gbWF5IGFmZmVjdCB0aGUgc3RhdGUgb2Ygb3RoZXIgY29tcG9uZW50cyB0aGF0IGFyZSBzdGlsbFxuICAgIC8vIG9ic2VydmluZyB0aGUgc2FtZSBvYmplY3QsIGJ1dCB0aGF0IHNlZW1zIHRvIGJlIGFcbiAgICAvLyByZWFzb25hYmxlIHJlc3BvbnNpYmlsaXR5IGZvciB0aGUgdXNlciByYXRoZXIgdGhhblxuICAgIC8vIGFsd2F5cyB0aHJvd2luZyBhbiBlcnJvciBvbiB0aGVtLlxuICAgIHRoaXMuJGVsID0gdGhpcy4kcGFyZW50ID0gdGhpcy4kcm9vdCA9IHRoaXMuJGNoaWxkcmVuID0gdGhpcy5fd2F0Y2hlcnMgPSB0aGlzLl9jb250ZXh0ID0gdGhpcy5fc2NvcGUgPSB0aGlzLl9kaXJlY3RpdmVzID0gbnVsbDtcbiAgICAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cbiAgICB0aGlzLl9pc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5fY2FsbEhvb2soJ2Rlc3Ryb3llZCcpO1xuICAgIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXG4gICAgdGhpcy4kb2ZmKCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1pc2NNaXhpbiAoVnVlKSB7XG4gIC8qKlxuICAgKiBBcHBseSBhIGxpc3Qgb2YgZmlsdGVyIChkZXNjcmlwdG9ycykgdG8gYSB2YWx1ZS5cbiAgICogVXNpbmcgcGxhaW4gZm9yIGxvb3BzIGhlcmUgYmVjYXVzZSB0aGlzIHdpbGwgYmUgY2FsbGVkIGluXG4gICAqIHRoZSBnZXR0ZXIgb2YgYW55IHdhdGNoZXIgd2l0aCBmaWx0ZXJzIHNvIGl0IGlzIHZlcnlcbiAgICogcGVyZm9ybWFuY2Ugc2Vuc2l0aXZlLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7Kn0gW29sZFZhbHVlXVxuICAgKiBAcGFyYW0ge0FycmF5fSBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gd3JpdGVcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fYXBwbHlGaWx0ZXJzID0gZnVuY3Rpb24gKHZhbHVlLCBvbGRWYWx1ZSwgZmlsdGVycywgd3JpdGUpIHtcbiAgICB2YXIgZmlsdGVyLCBmbiwgYXJncywgYXJnLCBvZmZzZXQsIGksIGwsIGosIGs7XG4gICAgZm9yIChpID0gMCwgbCA9IGZpbHRlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmaWx0ZXIgPSBmaWx0ZXJzW2ldO1xuICAgICAgZm4gPSByZXNvbHZlQXNzZXQodGhpcy4kb3B0aW9ucywgJ2ZpbHRlcnMnLCBmaWx0ZXIubmFtZSk7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBhc3NlcnRBc3NldChmbiwgJ2ZpbHRlcicsIGZpbHRlci5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmICghZm4pIGNvbnRpbnVlO1xuICAgICAgZm4gPSB3cml0ZSA/IGZuLndyaXRlIDogZm4ucmVhZCB8fCBmbjtcbiAgICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xuICAgICAgYXJncyA9IHdyaXRlID8gW3ZhbHVlLCBvbGRWYWx1ZV0gOiBbdmFsdWVdO1xuICAgICAgb2Zmc2V0ID0gd3JpdGUgPyAyIDogMTtcbiAgICAgIGlmIChmaWx0ZXIuYXJncykge1xuICAgICAgICBmb3IgKGogPSAwLCBrID0gZmlsdGVyLmFyZ3MubGVuZ3RoOyBqIDwgazsgaisrKSB7XG4gICAgICAgICAgYXJnID0gZmlsdGVyLmFyZ3Nbal07XG4gICAgICAgICAgYXJnc1tqICsgb2Zmc2V0XSA9IGFyZy5keW5hbWljID8gdGhpcy4kZ2V0KGFyZy52YWx1ZSkgOiBhcmcudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhbHVlID0gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogUmVzb2x2ZSBhIGNvbXBvbmVudCwgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGNvbXBvbmVudFxuICAgKiBpcyBkZWZpbmVkIG5vcm1hbGx5IG9yIHVzaW5nIGFuIGFzeW5jIGZhY3RvcnkgZnVuY3Rpb24uXG4gICAqIFJlc29sdmVzIHN5bmNocm9ub3VzbHkgaWYgYWxyZWFkeSByZXNvbHZlZCwgb3RoZXJ3aXNlXG4gICAqIHJlc29sdmVzIGFzeW5jaHJvbm91c2x5IGFuZCBjYWNoZXMgdGhlIHJlc29sdmVkXG4gICAqIGNvbnN0cnVjdG9yIG9uIHRoZSBmYWN0b3J5LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS5fcmVzb2x2ZUNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCwgY2IpIHtcbiAgICB2YXIgZmFjdG9yeSA9IHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnY29tcG9uZW50cycsIGlkKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0QXNzZXQoZmFjdG9yeSwgJ2NvbXBvbmVudCcsIGlkKTtcbiAgICB9XG4gICAgaWYgKCFmYWN0b3J5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5XG4gICAgaWYgKCFmYWN0b3J5Lm9wdGlvbnMpIHtcbiAgICAgIGlmIChmYWN0b3J5LnJlc29sdmVkKSB7XG4gICAgICAgIC8vIGNhY2hlZFxuICAgICAgICBjYihmYWN0b3J5LnJlc29sdmVkKTtcbiAgICAgIH0gZWxzZSBpZiAoZmFjdG9yeS5yZXF1ZXN0ZWQpIHtcbiAgICAgICAgLy8gcG9vbCBjYWxsYmFja3NcbiAgICAgICAgZmFjdG9yeS5wZW5kaW5nQ2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeS5yZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgICB2YXIgY2JzID0gZmFjdG9yeS5wZW5kaW5nQ2FsbGJhY2tzID0gW2NiXTtcbiAgICAgICAgZmFjdG9yeS5jYWxsKHRoaXMsIGZ1bmN0aW9uIHJlc29sdmUocmVzKSB7XG4gICAgICAgICAgaWYgKGlzUGxhaW5PYmplY3QocmVzKSkge1xuICAgICAgICAgICAgcmVzID0gVnVlLmV4dGVuZChyZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjYWNoZSByZXNvbHZlZFxuICAgICAgICAgIGZhY3RvcnkucmVzb2x2ZWQgPSByZXM7XG4gICAgICAgICAgLy8gaW52b2tlIGNhbGxiYWNrc1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY2JzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY2JzW2ldKHJlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKCdGYWlsZWQgdG8gcmVzb2x2ZSBhc3luYyBjb21wb25lbnQ6ICcgKyBpZCArICcuICcgKyAocmVhc29uID8gJ1xcblJlYXNvbjogJyArIHJlYXNvbiA6ICcnKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBub3JtYWwgY29tcG9uZW50XG4gICAgICBjYihmYWN0b3J5KTtcbiAgICB9XG4gIH07XG59XG5cbnZhciBmaWx0ZXJSRSQxID0gL1tefF1cXHxbXnxdLztcblxuZnVuY3Rpb24gZGF0YUFQSSAoVnVlKSB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIHZhbHVlIGZyb20gYW4gZXhwcmVzc2lvbiBvbiB0aGlzIHZtLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXhwXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2FzU3RhdGVtZW50XVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRnZXQgPSBmdW5jdGlvbiAoZXhwLCBhc1N0YXRlbWVudCkge1xuICAgIHZhciByZXMgPSBwYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICBpZiAocmVzKSB7XG4gICAgICBpZiAoYXNTdGF0ZW1lbnQgJiYgIWlzU2ltcGxlUGF0aChleHApKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0YXRlbWVudEhhbmRsZXIoKSB7XG4gICAgICAgICAgc2VsZi4kYXJndW1lbnRzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZ2V0LmNhbGwoc2VsZiwgc2VsZik7XG4gICAgICAgICAgc2VsZi4kYXJndW1lbnRzID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gcmVzLmdldC5jYWxsKHRoaXMsIHRoaXMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2V0IHRoZSB2YWx1ZSBmcm9tIGFuIGV4cHJlc3Npb24gb24gdGhpcyB2bS5cbiAgICogVGhlIGV4cHJlc3Npb24gbXVzdCBiZSBhIHZhbGlkIGxlZnQtaGFuZFxuICAgKiBleHByZXNzaW9uIGluIGFuIGFzc2lnbm1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBleHBcbiAgICogQHBhcmFtIHsqfSB2YWxcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kc2V0ID0gZnVuY3Rpb24gKGV4cCwgdmFsKSB7XG4gICAgdmFyIHJlcyA9IHBhcnNlRXhwcmVzc2lvbihleHAsIHRydWUpO1xuICAgIGlmIChyZXMgJiYgcmVzLnNldCkge1xuICAgICAgcmVzLnNldC5jYWxsKHRoaXMsIHRoaXMsIHZhbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZWxldGUgYSBwcm9wZXJ0eSBvbiB0aGUgVk1cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRkZWxldGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgZGVsKHRoaXMuX2RhdGEsIGtleSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdhdGNoIGFuIGV4cHJlc3Npb24sIHRyaWdnZXIgY2FsbGJhY2sgd2hlbiBpdHNcbiAgICogdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IGV4cE9yRm5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2JcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gZGVlcFxuICAgKiAgICAgICAgICAgICAgICAgLSB7Qm9vbGVhbn0gaW1tZWRpYXRlXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAtIHVud2F0Y2hGblxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiR3YXRjaCA9IGZ1bmN0aW9uIChleHBPckZuLCBjYiwgb3B0aW9ucykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHBhcnNlZDtcbiAgICBpZiAodHlwZW9mIGV4cE9yRm4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJzZWQgPSBwYXJzZURpcmVjdGl2ZShleHBPckZuKTtcbiAgICAgIGV4cE9yRm4gPSBwYXJzZWQuZXhwcmVzc2lvbjtcbiAgICB9XG4gICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih2bSwgZXhwT3JGbiwgY2IsIHtcbiAgICAgIGRlZXA6IG9wdGlvbnMgJiYgb3B0aW9ucy5kZWVwLFxuICAgICAgc3luYzogb3B0aW9ucyAmJiBvcHRpb25zLnN5bmMsXG4gICAgICBmaWx0ZXJzOiBwYXJzZWQgJiYgcGFyc2VkLmZpbHRlcnMsXG4gICAgICB1c2VyOiAhb3B0aW9ucyB8fCBvcHRpb25zLnVzZXIgIT09IGZhbHNlXG4gICAgfSk7XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICAgIGNiLmNhbGwodm0sIHdhdGNoZXIudmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuKCkge1xuICAgICAgd2F0Y2hlci50ZWFyZG93bigpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEV2YWx1YXRlIGEgdGV4dCBkaXJlY3RpdmUsIGluY2x1ZGluZyBmaWx0ZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gdGV4dFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFthc1N0YXRlbWVudF1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRldmFsID0gZnVuY3Rpb24gKHRleHQsIGFzU3RhdGVtZW50KSB7XG4gICAgLy8gY2hlY2sgZm9yIGZpbHRlcnMuXG4gICAgaWYgKGZpbHRlclJFJDEudGVzdCh0ZXh0KSkge1xuICAgICAgdmFyIGRpciA9IHBhcnNlRGlyZWN0aXZlKHRleHQpO1xuICAgICAgLy8gdGhlIGZpbHRlciByZWdleCBjaGVjayBtaWdodCBnaXZlIGZhbHNlIHBvc2l0aXZlXG4gICAgICAvLyBmb3IgcGlwZXMgaW5zaWRlIHN0cmluZ3MsIHNvIGl0J3MgcG9zc2libGUgdGhhdFxuICAgICAgLy8gd2UgZG9uJ3QgZ2V0IGFueSBmaWx0ZXJzIGhlcmVcbiAgICAgIHZhciB2YWwgPSB0aGlzLiRnZXQoZGlyLmV4cHJlc3Npb24sIGFzU3RhdGVtZW50KTtcbiAgICAgIHJldHVybiBkaXIuZmlsdGVycyA/IHRoaXMuX2FwcGx5RmlsdGVycyh2YWwsIG51bGwsIGRpci5maWx0ZXJzKSA6IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbm8gZmlsdGVyXG4gICAgICByZXR1cm4gdGhpcy4kZ2V0KHRleHQsIGFzU3RhdGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEludGVycG9sYXRlIGEgcGllY2Ugb2YgdGVtcGxhdGUgdGV4dC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRpbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgdmFyIHRva2VucyA9IHBhcnNlVGV4dCh0ZXh0KTtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmICh0b2tlbnMpIHtcbiAgICAgIGlmICh0b2tlbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB2bS4kZXZhbCh0b2tlbnNbMF0udmFsdWUpICsgJyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW4udGFnID8gdm0uJGV2YWwodG9rZW4udmFsdWUpIDogdG9rZW4udmFsdWU7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIExvZyBpbnN0YW5jZSBkYXRhIGFzIGEgcGxhaW4gSlMgb2JqZWN0XG4gICAqIHNvIHRoYXQgaXQgaXMgZWFzaWVyIHRvIGluc3BlY3QgaW4gY29uc29sZS5cbiAgICogVGhpcyBtZXRob2QgYXNzdW1lcyBjb25zb2xlIGlzIGF2YWlsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtwYXRoXVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRsb2cgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIHZhciBkYXRhID0gcGF0aCA/IGdldFBhdGgodGhpcy5fZGF0YSwgcGF0aCkgOiB0aGlzLl9kYXRhO1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBkYXRhID0gY2xlYW4oZGF0YSk7XG4gICAgfVxuICAgIC8vIGluY2x1ZGUgY29tcHV0ZWQgZmllbGRzXG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy4kb3B0aW9ucy5jb21wdXRlZCkge1xuICAgICAgICBkYXRhW2tleV0gPSBjbGVhbih0aGlzW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfTtcblxuICAvKipcbiAgICogXCJjbGVhblwiIGEgZ2V0dGVyL3NldHRlciBjb252ZXJ0ZWQgb2JqZWN0IGludG8gYSBwbGFpblxuICAgKiBvYmplY3QgY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IC0gb2JqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG5cbiAgZnVuY3Rpb24gY2xlYW4ob2JqKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9tQVBJIChWdWUpIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG9uLWluc3RhbmNlIG5leHRUaWNrLiBUaGUgY2FsbGJhY2sgaXNcbiAgICogYXV0by1ib3VuZCB0byB0aGUgaW5zdGFuY2UsIGFuZCB0aGlzIGF2b2lkcyBjb21wb25lbnRcbiAgICogbW9kdWxlcyBoYXZpbmcgdG8gcmVseSBvbiB0aGUgZ2xvYmFsIFZ1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBuZXh0VGljayhmbiwgdGhpcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBpbnN0YW5jZSB0byB0YXJnZXRcbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSB0YXJnZXRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt3aXRoVHJhbnNpdGlvbl0gLSBkZWZhdWx0cyB0byB0cnVlXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGFwcGVuZFRvID0gZnVuY3Rpb24gKHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uKSB7XG4gICAgcmV0dXJuIGluc2VydCh0aGlzLCB0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbiwgYXBwZW5kLCBhcHBlbmRXaXRoVHJhbnNpdGlvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByZXBlbmQgaW5zdGFuY2UgdG8gdGFyZ2V0XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRwcmVwZW5kVG8gPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgICB0YXJnZXQgPSBxdWVyeSh0YXJnZXQpO1xuICAgIGlmICh0YXJnZXQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLiRiZWZvcmUodGFyZ2V0LmZpcnN0Q2hpbGQsIGNiLCB3aXRoVHJhbnNpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGFwcGVuZFRvKHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEluc2VydCBpbnN0YW5jZSBiZWZvcmUgdGFyZ2V0XG4gICAqXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRiZWZvcmUgPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgICByZXR1cm4gaW5zZXJ0KHRoaXMsIHRhcmdldCwgY2IsIHdpdGhUcmFuc2l0aW9uLCBiZWZvcmVXaXRoQ2IsIGJlZm9yZVdpdGhUcmFuc2l0aW9uKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5zZXJ0IGluc3RhbmNlIGFmdGVyIHRhcmdldFxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3dpdGhUcmFuc2l0aW9uXSAtIGRlZmF1bHRzIHRvIHRydWVcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kYWZ0ZXIgPSBmdW5jdGlvbiAodGFyZ2V0LCBjYiwgd2l0aFRyYW5zaXRpb24pIHtcbiAgICB0YXJnZXQgPSBxdWVyeSh0YXJnZXQpO1xuICAgIGlmICh0YXJnZXQubmV4dFNpYmxpbmcpIHtcbiAgICAgIHRoaXMuJGJlZm9yZSh0YXJnZXQubmV4dFNpYmxpbmcsIGNiLCB3aXRoVHJhbnNpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJGFwcGVuZFRvKHRhcmdldC5wYXJlbnROb2RlLCBjYiwgd2l0aFRyYW5zaXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlIGluc3RhbmNlIGZyb20gRE9NXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dIC0gZGVmYXVsdHMgdG8gdHJ1ZVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRyZW1vdmUgPSBmdW5jdGlvbiAoY2IsIHdpdGhUcmFuc2l0aW9uKSB7XG4gICAgaWYgKCF0aGlzLiRlbC5wYXJlbnROb2RlKSB7XG4gICAgICByZXR1cm4gY2IgJiYgY2IoKTtcbiAgICB9XG4gICAgdmFyIGluRG9jdW1lbnQgPSB0aGlzLl9pc0F0dGFjaGVkICYmIGluRG9jKHRoaXMuJGVsKTtcbiAgICAvLyBpZiB3ZSBhcmUgbm90IGluIGRvY3VtZW50LCBubyBuZWVkIHRvIGNoZWNrXG4gICAgLy8gZm9yIHRyYW5zaXRpb25zXG4gICAgaWYgKCFpbkRvY3VtZW50KSB3aXRoVHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcmVhbENiID0gZnVuY3Rpb24gcmVhbENiKCkge1xuICAgICAgaWYgKGluRG9jdW1lbnQpIHNlbGYuX2NhbGxIb29rKCdkZXRhY2hlZCcpO1xuICAgICAgaWYgKGNiKSBjYigpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuX2lzRnJhZ21lbnQpIHtcbiAgICAgIHJlbW92ZU5vZGVSYW5nZSh0aGlzLl9mcmFnbWVudFN0YXJ0LCB0aGlzLl9mcmFnbWVudEVuZCwgdGhpcywgdGhpcy5fZnJhZ21lbnQsIHJlYWxDYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvcCA9IHdpdGhUcmFuc2l0aW9uID09PSBmYWxzZSA/IHJlbW92ZVdpdGhDYiA6IHJlbW92ZVdpdGhUcmFuc2l0aW9uO1xuICAgICAgb3AodGhpcy4kZWwsIHRoaXMsIHJlYWxDYik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaGFyZWQgRE9NIGluc2VydGlvbiBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtWdWV9IHZtXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYl1cbiAgICogQHBhcmFtIHtCb29sZWFufSBbd2l0aFRyYW5zaXRpb25dXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG9wMSAtIG9wIGZvciBub24tdHJhbnNpdGlvbiBpbnNlcnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb3AyIC0gb3AgZm9yIHRyYW5zaXRpb24gaW5zZXJ0XG4gICAqIEByZXR1cm4gdm1cbiAgICovXG5cbiAgZnVuY3Rpb24gaW5zZXJ0KHZtLCB0YXJnZXQsIGNiLCB3aXRoVHJhbnNpdGlvbiwgb3AxLCBvcDIpIHtcbiAgICB0YXJnZXQgPSBxdWVyeSh0YXJnZXQpO1xuICAgIHZhciB0YXJnZXRJc0RldGFjaGVkID0gIWluRG9jKHRhcmdldCk7XG4gICAgdmFyIG9wID0gd2l0aFRyYW5zaXRpb24gPT09IGZhbHNlIHx8IHRhcmdldElzRGV0YWNoZWQgPyBvcDEgOiBvcDI7XG4gICAgdmFyIHNob3VsZENhbGxIb29rID0gIXRhcmdldElzRGV0YWNoZWQgJiYgIXZtLl9pc0F0dGFjaGVkICYmICFpbkRvYyh2bS4kZWwpO1xuICAgIGlmICh2bS5faXNGcmFnbWVudCkge1xuICAgICAgbWFwTm9kZVJhbmdlKHZtLl9mcmFnbWVudFN0YXJ0LCB2bS5fZnJhZ21lbnRFbmQsIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIG9wKG5vZGUsIHRhcmdldCwgdm0pO1xuICAgICAgfSk7XG4gICAgICBjYiAmJiBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcCh2bS4kZWwsIHRhcmdldCwgdm0sIGNiKTtcbiAgICB9XG4gICAgaWYgKHNob3VsZENhbGxIb29rKSB7XG4gICAgICB2bS5fY2FsbEhvb2soJ2F0dGFjaGVkJyk7XG4gICAgfVxuICAgIHJldHVybiB2bTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBmb3Igc2VsZWN0b3JzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfEVsZW1lbnR9IGVsXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHF1ZXJ5KGVsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGVuZCBvcGVyYXRpb24gdGhhdCB0YWtlcyBhIGNhbGxiYWNrLlxuICAgKlxuICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAqIEBwYXJhbSB7Tm9kZX0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7VnVlfSB2bSAtIHVudXNlZFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2JdXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGFwcGVuZChlbCwgdGFyZ2V0LCB2bSwgY2IpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIGlmIChjYikgY2IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRCZWZvcmUgb3BlcmF0aW9uIHRoYXQgdGFrZXMgYSBjYWxsYmFjay5cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgKiBAcGFyYW0ge05vZGV9IHRhcmdldFxuICAgKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKi9cblxuICBmdW5jdGlvbiBiZWZvcmVXaXRoQ2IoZWwsIHRhcmdldCwgdm0sIGNiKSB7XG4gICAgYmVmb3JlKGVsLCB0YXJnZXQpO1xuICAgIGlmIChjYikgY2IoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgb3BlcmF0aW9uIHRoYXQgdGFrZXMgYSBjYWxsYmFjay5cbiAgICpcbiAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgKiBAcGFyYW0ge1Z1ZX0gdm0gLSB1bnVzZWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NiXVxuICAgKi9cblxuICBmdW5jdGlvbiByZW1vdmVXaXRoQ2IoZWwsIHZtLCBjYikge1xuICAgIHJlbW92ZShlbCk7XG4gICAgaWYgKGNiKSBjYigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50c0FQSSAoVnVlKSB7XG4gIC8qKlxuICAgKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kb24gPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgKHRoaXMuX2V2ZW50c1tldmVudF0gfHwgKHRoaXMuX2V2ZW50c1tldmVudF0gPSBbXSkpLnB1c2goZm4pO1xuICAgIG1vZGlmeUxpc3RlbmVyQ291bnQodGhpcywgZXZlbnQsIDEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAgICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9uY2UgPSBmdW5jdGlvbiAoZXZlbnQsIGZuKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIG9uKCkge1xuICAgICAgc2VsZi4kb2ZmKGV2ZW50LCBvbik7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBvbi5mbiA9IGZuO1xuICAgIHRoaXMuJG9uKGV2ZW50LCBvbik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gICAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kb2ZmID0gZnVuY3Rpb24gKGV2ZW50LCBmbikge1xuICAgIHZhciBjYnM7XG4gICAgLy8gYWxsXG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy4kcGFyZW50KSB7XG4gICAgICAgIGZvciAoZXZlbnQgaW4gdGhpcy5fZXZlbnRzKSB7XG4gICAgICAgICAgY2JzID0gdGhpcy5fZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgICBpZiAoY2JzKSB7XG4gICAgICAgICAgICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAtY2JzLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBldmVudFxuICAgIGNicyA9IHRoaXMuX2V2ZW50c1tldmVudF07XG4gICAgaWYgKCFjYnMpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgbW9kaWZ5TGlzdGVuZXJDb3VudCh0aGlzLCBldmVudCwgLWNicy5sZW5ndGgpO1xuICAgICAgdGhpcy5fZXZlbnRzW2V2ZW50XSA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8gc3BlY2lmaWMgaGFuZGxlclxuICAgIHZhciBjYjtcbiAgICB2YXIgaSA9IGNicy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgY2IgPSBjYnNbaV07XG4gICAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgICBtb2RpZnlMaXN0ZW5lckNvdW50KHRoaXMsIGV2ZW50LCAtMSk7XG4gICAgICAgIGNicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogVHJpZ2dlciBhbiBldmVudCBvbiBzZWxmLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGV2ZW50XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IHNob3VsZFByb3BhZ2F0ZVxuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRlbWl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIGlzU291cmNlID0gdHlwZW9mIGV2ZW50ID09PSAnc3RyaW5nJztcbiAgICBldmVudCA9IGlzU291cmNlID8gZXZlbnQgOiBldmVudC5uYW1lO1xuICAgIHZhciBjYnMgPSB0aGlzLl9ldmVudHNbZXZlbnRdO1xuICAgIHZhciBzaG91bGRQcm9wYWdhdGUgPSBpc1NvdXJjZSB8fCAhY2JzO1xuICAgIGlmIChjYnMpIHtcbiAgICAgIGNicyA9IGNicy5sZW5ndGggPiAxID8gdG9BcnJheShjYnMpIDogY2JzO1xuICAgICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGhhY2t5IHNvbHV0aW9uIHRvIHRoZSBxdWVzdGlvbiByYWlzZWRcbiAgICAgIC8vIGluICMyMTAyOiBmb3IgYW4gaW5saW5lIGNvbXBvbmVudCBsaXN0ZW5lciBsaWtlIDxjb21wIEB0ZXN0PVwiZG9UaGlzXCI+LFxuICAgICAgLy8gdGhlIHByb3BhZ2F0aW9uIGhhbmRsaW5nIGlzIHNvbWV3aGF0IGJyb2tlbi4gVGhlcmVmb3JlIHdlXG4gICAgICAvLyBuZWVkIHRvIHRyZWF0IHRoZXNlIGlubGluZSBjYWxsYmFja3MgZGlmZmVyZW50bHkuXG4gICAgICB2YXIgaGFzUGFyZW50Q2JzID0gaXNTb3VyY2UgJiYgY2JzLnNvbWUoZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYi5fZnJvbVBhcmVudDtcbiAgICAgIH0pO1xuICAgICAgaWYgKGhhc1BhcmVudENicykge1xuICAgICAgICBzaG91bGRQcm9wYWdhdGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjYnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBjYiA9IGNic1tpXTtcbiAgICAgICAgdmFyIHJlcyA9IGNiLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICBpZiAocmVzID09PSB0cnVlICYmICghaGFzUGFyZW50Q2JzIHx8IGNiLl9mcm9tUGFyZW50KSkge1xuICAgICAgICAgIHNob3VsZFByb3BhZ2F0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNob3VsZFByb3BhZ2F0ZTtcbiAgfTtcblxuICAvKipcbiAgICogUmVjdXJzaXZlbHkgYnJvYWRjYXN0IGFuIGV2ZW50IHRvIGFsbCBjaGlsZHJlbiBpbnN0YW5jZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gZXZlbnRcbiAgICogQHBhcmFtIHsuLi4qfSBhZGRpdGlvbmFsIGFyZ3VtZW50c1xuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRicm9hZGNhc3QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgaXNTb3VyY2UgPSB0eXBlb2YgZXZlbnQgPT09ICdzdHJpbmcnO1xuICAgIGV2ZW50ID0gaXNTb3VyY2UgPyBldmVudCA6IGV2ZW50Lm5hbWU7XG4gICAgLy8gaWYgbm8gY2hpbGQgaGFzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgZXZlbnQsXG4gICAgLy8gdGhlbiB0aGVyZSdzIG5vIG5lZWQgdG8gYnJvYWRjYXN0LlxuICAgIGlmICghdGhpcy5fZXZlbnRzQ291bnRbZXZlbnRdKSByZXR1cm47XG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy4kY2hpbGRyZW47XG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gICAgaWYgKGlzU291cmNlKSB7XG4gICAgICAvLyB1c2Ugb2JqZWN0IGV2ZW50IHRvIGluZGljYXRlIG5vbi1zb3VyY2UgZW1pdFxuICAgICAgLy8gb24gY2hpbGRyZW5cbiAgICAgIGFyZ3NbMF0gPSB7IG5hbWU6IGV2ZW50LCBzb3VyY2U6IHRoaXMgfTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgdmFyIHNob3VsZFByb3BhZ2F0ZSA9IGNoaWxkLiRlbWl0LmFwcGx5KGNoaWxkLCBhcmdzKTtcbiAgICAgIGlmIChzaG91bGRQcm9wYWdhdGUpIHtcbiAgICAgICAgY2hpbGQuJGJyb2FkY2FzdC5hcHBseShjaGlsZCwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZWN1cnNpdmVseSBwcm9wYWdhdGUgYW4gZXZlbnQgdXAgdGhlIHBhcmVudCBjaGFpbi5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7Li4uKn0gYWRkaXRpb25hbCBhcmd1bWVudHNcbiAgICovXG5cbiAgVnVlLnByb3RvdHlwZS4kZGlzcGF0Y2ggPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgc2hvdWxkUHJvcGFnYXRlID0gdGhpcy4kZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICghc2hvdWxkUHJvcGFnYXRlKSByZXR1cm47XG4gICAgdmFyIHBhcmVudCA9IHRoaXMuJHBhcmVudDtcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAvLyB1c2Ugb2JqZWN0IGV2ZW50IHRvIGluZGljYXRlIG5vbi1zb3VyY2UgZW1pdFxuICAgIC8vIG9uIHBhcmVudHNcbiAgICBhcmdzWzBdID0geyBuYW1lOiBldmVudCwgc291cmNlOiB0aGlzIH07XG4gICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgc2hvdWxkUHJvcGFnYXRlID0gcGFyZW50LiRlbWl0LmFwcGx5KHBhcmVudCwgYXJncyk7XG4gICAgICBwYXJlbnQgPSBzaG91bGRQcm9wYWdhdGUgPyBwYXJlbnQuJHBhcmVudCA6IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNb2RpZnkgdGhlIGxpc3RlbmVyIGNvdW50cyBvbiBhbGwgcGFyZW50cy5cbiAgICogVGhpcyBib29ra2VlcGluZyBhbGxvd3MgJGJyb2FkY2FzdCB0byByZXR1cm4gZWFybHkgd2hlblxuICAgKiBubyBjaGlsZCBoYXMgbGlzdGVuZWQgdG8gYSBjZXJ0YWluIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1Z1ZX0gdm1cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFxuICAgKi9cblxuICB2YXIgaG9va1JFID0gL15ob29rOi87XG4gIGZ1bmN0aW9uIG1vZGlmeUxpc3RlbmVyQ291bnQodm0sIGV2ZW50LCBjb3VudCkge1xuICAgIHZhciBwYXJlbnQgPSB2bS4kcGFyZW50O1xuICAgIC8vIGhvb2tzIGRvIG5vdCBnZXQgYnJvYWRjYXN0ZWQgc28gbm8gbmVlZFxuICAgIC8vIHRvIGRvIGJvb2trZWVwaW5nIGZvciB0aGVtXG4gICAgaWYgKCFwYXJlbnQgfHwgIWNvdW50IHx8IGhvb2tSRS50ZXN0KGV2ZW50KSkgcmV0dXJuO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIHBhcmVudC5fZXZlbnRzQ291bnRbZXZlbnRdID0gKHBhcmVudC5fZXZlbnRzQ291bnRbZXZlbnRdIHx8IDApICsgY291bnQ7XG4gICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlmZWN5Y2xlQVBJIChWdWUpIHtcbiAgLyoqXG4gICAqIFNldCBpbnN0YW5jZSB0YXJnZXQgZWxlbWVudCBhbmQga2ljayBvZmYgdGhlIGNvbXBpbGF0aW9uXG4gICAqIHByb2Nlc3MuIFRoZSBwYXNzZWQgaW4gYGVsYCBjYW4gYmUgYSBzZWxlY3RvciBzdHJpbmcsIGFuXG4gICAqIGV4aXN0aW5nIEVsZW1lbnQsIG9yIGEgRG9jdW1lbnRGcmFnbWVudCAoZm9yIGJsb2NrXG4gICAqIGluc3RhbmNlcykuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudHxEb2N1bWVudEZyYWdtZW50fHN0cmluZ30gZWxcbiAgICogQHB1YmxpY1xuICAgKi9cblxuICBWdWUucHJvdG90eXBlLiRtb3VudCA9IGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICh0aGlzLl9pc0NvbXBpbGVkKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oJyRtb3VudCgpIHNob3VsZCBiZSBjYWxsZWQgb25seSBvbmNlLicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbCA9IHF1ZXJ5KGVsKTtcbiAgICBpZiAoIWVsKSB7XG4gICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIH1cbiAgICB0aGlzLl9jb21waWxlKGVsKTtcbiAgICB0aGlzLl9pbml0RE9NSG9va3MoKTtcbiAgICBpZiAoaW5Eb2ModGhpcy4kZWwpKSB7XG4gICAgICB0aGlzLl9jYWxsSG9vaygnYXR0YWNoZWQnKTtcbiAgICAgIHJlYWR5LmNhbGwodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJG9uY2UoJ2hvb2s6YXR0YWNoZWQnLCByZWFkeSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYXJrIGFuIGluc3RhbmNlIGFzIHJlYWR5LlxuICAgKi9cblxuICBmdW5jdGlvbiByZWFkeSgpIHtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLl9pc1JlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLl9jYWxsSG9vaygncmVhZHknKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZWFyZG93biB0aGUgaW5zdGFuY2UsIHNpbXBseSBkZWxlZ2F0ZSB0byB0aGUgaW50ZXJuYWxcbiAgICogX2Rlc3Ryb3kuXG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGRlc3Ryb3kgPSBmdW5jdGlvbiAocmVtb3ZlLCBkZWZlckNsZWFudXApIHtcbiAgICB0aGlzLl9kZXN0cm95KHJlbW92ZSwgZGVmZXJDbGVhbnVwKTtcbiAgfTtcblxuICAvKipcbiAgICogUGFydGlhbGx5IGNvbXBpbGUgYSBwaWVjZSBvZiBET00gYW5kIHJldHVybiBhXG4gICAqIGRlY29tcGlsZSBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fERvY3VtZW50RnJhZ21lbnR9IGVsXG4gICAqIEBwYXJhbSB7VnVlfSBbaG9zdF1cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGNvbXBpbGUgPSBmdW5jdGlvbiAoZWwsIGhvc3QsIHNjb3BlLCBmcmFnKSB7XG4gICAgcmV0dXJuIGNvbXBpbGUoZWwsIHRoaXMuJG9wdGlvbnMsIHRydWUpKHRoaXMsIGVsLCBob3N0LCBzY29wZSwgZnJhZyk7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIGV4cG9zZWQgVnVlIGNvbnN0cnVjdG9yLlxuICpcbiAqIEFQSSBjb252ZW50aW9uczpcbiAqIC0gcHVibGljIEFQSSBtZXRob2RzL3Byb3BlcnRpZXMgYXJlIHByZWZpeGVkIHdpdGggYCRgXG4gKiAtIGludGVybmFsIG1ldGhvZHMvcHJvcGVydGllcyBhcmUgcHJlZml4ZWQgd2l0aCBgX2BcbiAqIC0gbm9uLXByZWZpeGVkIHByb3BlcnRpZXMgYXJlIGFzc3VtZWQgdG8gYmUgcHJveGllZCB1c2VyXG4gKiAgIGRhdGEuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gVnVlKG9wdGlvbnMpIHtcbiAgdGhpcy5faW5pdChvcHRpb25zKTtcbn1cblxuLy8gaW5zdGFsbCBpbnRlcm5hbHNcbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5taXNjTWl4aW4oVnVlKTtcblxuLy8gaW5zdGFsbCBpbnN0YW5jZSBBUElzXG5kYXRhQVBJKFZ1ZSk7XG5kb21BUEkoVnVlKTtcbmV2ZW50c0FQSShWdWUpO1xubGlmZWN5Y2xlQVBJKFZ1ZSk7XG5cbnZhciBzbG90ID0ge1xuXG4gIHByaW9yaXR5OiBTTE9ULFxuICBwYXJhbXM6IFsnbmFtZSddLFxuXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoKSB7XG4gICAgLy8gdGhpcyB3YXMgcmVzb2x2ZWQgZHVyaW5nIGNvbXBvbmVudCB0cmFuc2NsdXNpb25cbiAgICB2YXIgbmFtZSA9IHRoaXMucGFyYW1zLm5hbWUgfHwgJ2RlZmF1bHQnO1xuICAgIHZhciBjb250ZW50ID0gdGhpcy52bS5fc2xvdENvbnRlbnRzICYmIHRoaXMudm0uX3Nsb3RDb250ZW50c1tuYW1lXTtcbiAgICBpZiAoIWNvbnRlbnQgfHwgIWNvbnRlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICB0aGlzLmZhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcGlsZShjb250ZW50LmNsb25lTm9kZSh0cnVlKSwgdGhpcy52bS5fY29udGV4dCwgdGhpcy52bSk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBpbGU6IGZ1bmN0aW9uIGNvbXBpbGUoY29udGVudCwgY29udGV4dCwgaG9zdCkge1xuICAgIGlmIChjb250ZW50ICYmIGNvbnRleHQpIHtcbiAgICAgIGlmICh0aGlzLmVsLmhhc0NoaWxkTm9kZXMoKSAmJiBjb250ZW50LmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIGNvbnRlbnQuY2hpbGROb2Rlc1swXS5ub2RlVHlwZSA9PT0gMSAmJiBjb250ZW50LmNoaWxkTm9kZXNbMF0uaGFzQXR0cmlidXRlKCd2LWlmJykpIHtcbiAgICAgICAgLy8gaWYgdGhlIGluc2VydGVkIHNsb3QgaGFzIHYtaWZcbiAgICAgICAgLy8gaW5qZWN0IGZhbGxiYWNrIGNvbnRlbnQgYXMgdGhlIHYtZWxzZVxuICAgICAgICB2YXIgZWxzZUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgZWxzZUJsb2NrLnNldEF0dHJpYnV0ZSgndi1lbHNlJywgJycpO1xuICAgICAgICBlbHNlQmxvY2suaW5uZXJIVE1MID0gdGhpcy5lbC5pbm5lckhUTUw7XG4gICAgICAgIC8vIHRoZSBlbHNlIGJsb2NrIHNob3VsZCBiZSBjb21waWxlZCBpbiBjaGlsZCBzY29wZVxuICAgICAgICBlbHNlQmxvY2suX2NvbnRleHQgPSB0aGlzLnZtO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGVsc2VCbG9jayk7XG4gICAgICB9XG4gICAgICB2YXIgc2NvcGUgPSBob3N0ID8gaG9zdC5fc2NvcGUgOiB0aGlzLl9zY29wZTtcbiAgICAgIHRoaXMudW5saW5rID0gY29udGV4dC4kY29tcGlsZShjb250ZW50LCBob3N0LCBzY29wZSwgdGhpcy5fZnJhZyk7XG4gICAgfVxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICByZXBsYWNlKHRoaXMuZWwsIGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUodGhpcy5lbCk7XG4gICAgfVxuICB9LFxuXG4gIGZhbGxiYWNrOiBmdW5jdGlvbiBmYWxsYmFjaygpIHtcbiAgICB0aGlzLmNvbXBpbGUoZXh0cmFjdENvbnRlbnQodGhpcy5lbCwgdHJ1ZSksIHRoaXMudm0pO1xuICB9LFxuXG4gIHVuYmluZDogZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIGlmICh0aGlzLnVubGluaykge1xuICAgICAgdGhpcy51bmxpbmsoKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBwYXJ0aWFsID0ge1xuXG4gIHByaW9yaXR5OiBQQVJUSUFMLFxuXG4gIHBhcmFtczogWyduYW1lJ10sXG5cbiAgLy8gd2F0Y2ggY2hhbmdlcyB0byBuYW1lIGZvciBkeW5hbWljIHBhcnRpYWxzXG4gIHBhcmFtV2F0Y2hlcnM6IHtcbiAgICBuYW1lOiBmdW5jdGlvbiBuYW1lKHZhbHVlKSB7XG4gICAgICB2SWYucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnNlcnQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBiaW5kOiBmdW5jdGlvbiBiaW5kKCkge1xuICAgIHRoaXMuYW5jaG9yID0gY3JlYXRlQW5jaG9yKCd2LXBhcnRpYWwnKTtcbiAgICByZXBsYWNlKHRoaXMuZWwsIHRoaXMuYW5jaG9yKTtcbiAgICB0aGlzLmluc2VydCh0aGlzLnBhcmFtcy5uYW1lKTtcbiAgfSxcblxuICBpbnNlcnQ6IGZ1bmN0aW9uIGluc2VydChpZCkge1xuICAgIHZhciBwYXJ0aWFsID0gcmVzb2x2ZUFzc2V0KHRoaXMudm0uJG9wdGlvbnMsICdwYXJ0aWFscycsIGlkKTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgYXNzZXJ0QXNzZXQocGFydGlhbCwgJ3BhcnRpYWwnLCBpZCk7XG4gICAgfVxuICAgIGlmIChwYXJ0aWFsKSB7XG4gICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgRnJhZ21lbnRGYWN0b3J5KHRoaXMudm0sIHBhcnRpYWwpO1xuICAgICAgdklmLmluc2VydC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZCgpIHtcbiAgICBpZiAodGhpcy5mcmFnKSB7XG4gICAgICB0aGlzLmZyYWcuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGVsZW1lbnREaXJlY3RpdmVzID0ge1xuICBzbG90OiBzbG90LFxuICBwYXJ0aWFsOiBwYXJ0aWFsXG59O1xuXG52YXIgY29udmVydEFycmF5ID0gdkZvci5fcG9zdFByb2Nlc3M7XG5cbi8qKlxuICogTGltaXQgZmlsdGVyIGZvciBhcnJheXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCAoRGVjaW1hbCBleHBlY3RlZClcbiAqL1xuXG5mdW5jdGlvbiBsaW1pdEJ5KGFyciwgbiwgb2Zmc2V0KSB7XG4gIG9mZnNldCA9IG9mZnNldCA/IHBhcnNlSW50KG9mZnNldCwgMTApIDogMDtcbiAgbiA9IHRvTnVtYmVyKG4pO1xuICByZXR1cm4gdHlwZW9mIG4gPT09ICdudW1iZXInID8gYXJyLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbikgOiBhcnI7XG59XG5cbi8qKlxuICogRmlsdGVyIGZpbHRlciBmb3IgYXJyYXlzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHNlYXJjaFxuICogQHBhcmFtIHtTdHJpbmd9IFtkZWxpbWl0ZXJdXG4gKiBAcGFyYW0ge1N0cmluZ30gLi4uZGF0YUtleXNcbiAqL1xuXG5mdW5jdGlvbiBmaWx0ZXJCeShhcnIsIHNlYXJjaCwgZGVsaW1pdGVyKSB7XG4gIGFyciA9IGNvbnZlcnRBcnJheShhcnIpO1xuICBpZiAoc2VhcmNoID09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGFyci5maWx0ZXIoc2VhcmNoKTtcbiAgfVxuICAvLyBjYXN0IHRvIGxvd2VyY2FzZSBzdHJpbmdcbiAgc2VhcmNoID0gKCcnICsgc2VhcmNoKS50b0xvd2VyQ2FzZSgpO1xuICAvLyBhbGxvdyBvcHRpb25hbCBgaW5gIGRlbGltaXRlclxuICAvLyBiZWNhdXNlIHdoeSBub3RcbiAgdmFyIG4gPSBkZWxpbWl0ZXIgPT09ICdpbicgPyAzIDogMjtcbiAgLy8gZXh0cmFjdCBhbmQgZmxhdHRlbiBrZXlzXG4gIHZhciBrZXlzID0gdG9BcnJheShhcmd1bWVudHMsIG4pLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VyKSB7XG4gICAgcmV0dXJuIHByZXYuY29uY2F0KGN1cik7XG4gIH0sIFtdKTtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaXRlbSwga2V5LCB2YWwsIGo7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGl0ZW0gPSBhcnJbaV07XG4gICAgdmFsID0gaXRlbSAmJiBpdGVtLiR2YWx1ZSB8fCBpdGVtO1xuICAgIGogPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAoaikge1xuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoa2V5ID09PSAnJGtleScgJiYgY29udGFpbnMkMShpdGVtLiRrZXksIHNlYXJjaCkgfHwgY29udGFpbnMkMShnZXRQYXRoKHZhbCwga2V5KSwgc2VhcmNoKSkge1xuICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjb250YWlucyQxKGl0ZW0sIHNlYXJjaCkpIHtcbiAgICAgIHJlcy5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG4vKipcbiAqIEZpbHRlciBmaWx0ZXIgZm9yIGFycmF5c1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzb3J0S2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gcmV2ZXJzZVxuICovXG5cbmZ1bmN0aW9uIG9yZGVyQnkoYXJyLCBzb3J0S2V5LCByZXZlcnNlKSB7XG4gIGFyciA9IGNvbnZlcnRBcnJheShhcnIpO1xuICBpZiAoIXNvcnRLZXkpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIHZhciBvcmRlciA9IHJldmVyc2UgJiYgcmV2ZXJzZSA8IDAgPyAtMSA6IDE7XG4gIC8vIHNvcnQgb24gYSBjb3B5IHRvIGF2b2lkIG11dGF0aW5nIG9yaWdpbmFsIGFycmF5XG4gIHJldHVybiBhcnIuc2xpY2UoKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKHNvcnRLZXkgIT09ICcka2V5Jykge1xuICAgICAgaWYgKGlzT2JqZWN0KGEpICYmICckdmFsdWUnIGluIGEpIGEgPSBhLiR2YWx1ZTtcbiAgICAgIGlmIChpc09iamVjdChiKSAmJiAnJHZhbHVlJyBpbiBiKSBiID0gYi4kdmFsdWU7XG4gICAgfVxuICAgIGEgPSBpc09iamVjdChhKSA/IGdldFBhdGgoYSwgc29ydEtleSkgOiBhO1xuICAgIGIgPSBpc09iamVjdChiKSA/IGdldFBhdGgoYiwgc29ydEtleSkgOiBiO1xuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gb3JkZXIgOiAtb3JkZXI7XG4gIH0pO1xufVxuXG4vKipcbiAqIFN0cmluZyBjb250YWluIGhlbHBlclxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VhcmNoXG4gKi9cblxuZnVuY3Rpb24gY29udGFpbnMkMSh2YWwsIHNlYXJjaCkge1xuICB2YXIgaTtcbiAgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICBpID0ga2V5cy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGNvbnRhaW5zJDEodmFsW2tleXNbaV1dLCBzZWFyY2gpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbCkpIHtcbiAgICBpID0gdmFsLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoY29udGFpbnMkMSh2YWxbaV0sIHNlYXJjaCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gpID4gLTE7XG4gIH1cbn1cblxudmFyIGRpZ2l0c1JFID0gLyhcXGR7M30pKD89XFxkKS9nO1xuXG4vLyBhc3NldCBjb2xsZWN0aW9ucyBtdXN0IGJlIGEgcGxhaW4gb2JqZWN0LlxudmFyIGZpbHRlcnMgPSB7XG5cbiAgb3JkZXJCeTogb3JkZXJCeSxcbiAgZmlsdGVyQnk6IGZpbHRlckJ5LFxuICBsaW1pdEJ5OiBsaW1pdEJ5LFxuXG4gIC8qKlxuICAgKiBTdHJpbmdpZnkgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRlbnRcbiAgICovXG5cbiAganNvbjoge1xuICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQodmFsdWUsIGluZGVudCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCBOdW1iZXIoaW5kZW50KSB8fCAyKTtcbiAgICB9LFxuICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiAnYWJjJyA9PiAnQWJjJ1xuICAgKi9cblxuICBjYXBpdGFsaXplOiBmdW5jdGlvbiBjYXBpdGFsaXplKHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkgcmV0dXJuICcnO1xuICAgIHZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zbGljZSgxKTtcbiAgfSxcblxuICAvKipcbiAgICogJ2FiYycgPT4gJ0FCQydcbiAgICovXG5cbiAgdXBwZXJjYXNlOiBmdW5jdGlvbiB1cHBlcmNhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyB2YWx1ZS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgfSxcblxuICAvKipcbiAgICogJ0FiQycgPT4gJ2FiYydcbiAgICovXG5cbiAgbG93ZXJjYXNlOiBmdW5jdGlvbiBsb3dlcmNhc2UodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgfHwgdmFsdWUgPT09IDAgPyB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgfSxcblxuICAvKipcbiAgICogMTIzNDUgPT4gJDEyLDM0NS4wMFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc2lnblxuICAgKi9cblxuICBjdXJyZW5jeTogZnVuY3Rpb24gY3VycmVuY3kodmFsdWUsIF9jdXJyZW5jeSkge1xuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkgfHwgIXZhbHVlICYmIHZhbHVlICE9PSAwKSByZXR1cm4gJyc7XG4gICAgX2N1cnJlbmN5ID0gX2N1cnJlbmN5ICE9IG51bGwgPyBfY3VycmVuY3kgOiAnJCc7XG4gICAgdmFyIHN0cmluZ2lmaWVkID0gTWF0aC5hYnModmFsdWUpLnRvRml4ZWQoMik7XG4gICAgdmFyIF9pbnQgPSBzdHJpbmdpZmllZC5zbGljZSgwLCAtMyk7XG4gICAgdmFyIGkgPSBfaW50Lmxlbmd0aCAlIDM7XG4gICAgdmFyIGhlYWQgPSBpID4gMCA/IF9pbnQuc2xpY2UoMCwgaSkgKyAoX2ludC5sZW5ndGggPiAzID8gJywnIDogJycpIDogJyc7XG4gICAgdmFyIF9mbG9hdCA9IHN0cmluZ2lmaWVkLnNsaWNlKC0zKTtcbiAgICB2YXIgc2lnbiA9IHZhbHVlIDwgMCA/ICctJyA6ICcnO1xuICAgIHJldHVybiBzaWduICsgX2N1cnJlbmN5ICsgaGVhZCArIF9pbnQuc2xpY2UoaSkucmVwbGFjZShkaWdpdHNSRSwgJyQxLCcpICsgX2Zsb2F0O1xuICB9LFxuXG4gIC8qKlxuICAgKiAnaXRlbScgPT4gJ2l0ZW1zJ1xuICAgKlxuICAgKiBAcGFyYW1zXG4gICAqICBhbiBhcnJheSBvZiBzdHJpbmdzIGNvcnJlc3BvbmRpbmcgdG9cbiAgICogIHRoZSBzaW5nbGUsIGRvdWJsZSwgdHJpcGxlIC4uLiBmb3JtcyBvZiB0aGUgd29yZCB0b1xuICAgKiAgYmUgcGx1cmFsaXplZC4gV2hlbiB0aGUgbnVtYmVyIHRvIGJlIHBsdXJhbGl6ZWRcbiAgICogIGV4Y2VlZHMgdGhlIGxlbmd0aCBvZiB0aGUgYXJncywgaXQgd2lsbCB1c2UgdGhlIGxhc3RcbiAgICogIGVudHJ5IGluIHRoZSBhcnJheS5cbiAgICpcbiAgICogIGUuZy4gWydzaW5nbGUnLCAnZG91YmxlJywgJ3RyaXBsZScsICdtdWx0aXBsZSddXG4gICAqL1xuXG4gIHBsdXJhbGl6ZTogZnVuY3Rpb24gcGx1cmFsaXplKHZhbHVlKSB7XG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgcmV0dXJuIGFyZ3MubGVuZ3RoID4gMSA/IGFyZ3NbdmFsdWUgJSAxMCAtIDFdIHx8IGFyZ3NbYXJncy5sZW5ndGggLSAxXSA6IGFyZ3NbMF0gKyAodmFsdWUgPT09IDEgPyAnJyA6ICdzJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlYm91bmNlIGEgaGFuZGxlciBmdW5jdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlclxuICAgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgPSAzMDBcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuXG4gIGRlYm91bmNlOiBmdW5jdGlvbiBkZWJvdW5jZShoYW5kbGVyLCBkZWxheSkge1xuICAgIGlmICghaGFuZGxlcikgcmV0dXJuO1xuICAgIGlmICghZGVsYXkpIHtcbiAgICAgIGRlbGF5ID0gMzAwO1xuICAgIH1cbiAgICByZXR1cm4gX2RlYm91bmNlKGhhbmRsZXIsIGRlbGF5KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaW5zdGFsbEdsb2JhbEFQSSAoVnVlKSB7XG4gIC8qKlxuICAgKiBWdWUgYW5kIGV2ZXJ5IGNvbnN0cnVjdG9yIHRoYXQgZXh0ZW5kcyBWdWUgaGFzIGFuXG4gICAqIGFzc29jaWF0ZWQgb3B0aW9ucyBvYmplY3QsIHdoaWNoIGNhbiBiZSBhY2Nlc3NlZCBkdXJpbmdcbiAgICogY29tcGlsYXRpb24gc3RlcHMgYXMgYHRoaXMuY29uc3RydWN0b3Iub3B0aW9uc2AuXG4gICAqXG4gICAqIFRoZXNlIGNhbiBiZSBzZWVuIGFzIHRoZSBkZWZhdWx0IG9wdGlvbnMgb2YgZXZlcnlcbiAgICogVnVlIGluc3RhbmNlLlxuICAgKi9cblxuICBWdWUub3B0aW9ucyA9IHtcbiAgICBkaXJlY3RpdmVzOiBkaXJlY3RpdmVzLFxuICAgIGVsZW1lbnREaXJlY3RpdmVzOiBlbGVtZW50RGlyZWN0aXZlcyxcbiAgICBmaWx0ZXJzOiBmaWx0ZXJzLFxuICAgIHRyYW5zaXRpb25zOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBwYXJ0aWFsczoge30sXG4gICAgcmVwbGFjZTogdHJ1ZVxuICB9O1xuXG4gIC8qKlxuICAgKiBFeHBvc2UgdXNlZnVsIGludGVybmFsc1xuICAgKi9cblxuICBWdWUudXRpbCA9IHV0aWw7XG4gIFZ1ZS5jb25maWcgPSBjb25maWc7XG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZVsnZGVsZXRlJ10gPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8qKlxuICAgKiBUaGUgZm9sbG93aW5nIGFyZSBleHBvc2VkIGZvciBhZHZhbmNlZCB1c2FnZSAvIHBsdWdpbnNcbiAgICovXG5cbiAgVnVlLmNvbXBpbGVyID0gY29tcGlsZXI7XG4gIFZ1ZS5GcmFnbWVudEZhY3RvcnkgPSBGcmFnbWVudEZhY3Rvcnk7XG4gIFZ1ZS5pbnRlcm5hbERpcmVjdGl2ZXMgPSBpbnRlcm5hbERpcmVjdGl2ZXM7XG4gIFZ1ZS5wYXJzZXJzID0ge1xuICAgIHBhdGg6IHBhdGgsXG4gICAgdGV4dDogdGV4dCxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gICAgZXhwcmVzc2lvbjogZXhwcmVzc2lvblxuICB9O1xuXG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG5cbiAgVnVlLmNpZCA9IDA7XG4gIHZhciBjaWQgPSAxO1xuXG4gIC8qKlxuICAgKiBDbGFzcyBpbmhlcml0YW5jZVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZXh0ZW5kT3B0aW9uc1xuICAgKi9cblxuICBWdWUuZXh0ZW5kID0gZnVuY3Rpb24gKGV4dGVuZE9wdGlvbnMpIHtcbiAgICBleHRlbmRPcHRpb25zID0gZXh0ZW5kT3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgU3VwZXIgPSB0aGlzO1xuICAgIHZhciBpc0ZpcnN0RXh0ZW5kID0gU3VwZXIuY2lkID09PSAwO1xuICAgIGlmIChpc0ZpcnN0RXh0ZW5kICYmIGV4dGVuZE9wdGlvbnMuX0N0b3IpIHtcbiAgICAgIHJldHVybiBleHRlbmRPcHRpb25zLl9DdG9yO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IGV4dGVuZE9wdGlvbnMubmFtZSB8fCBTdXBlci5vcHRpb25zLm5hbWU7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICghL15bYS16QS1aXVtcXHctXSokLy50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHdhcm4oJ0ludmFsaWQgY29tcG9uZW50IG5hbWU6IFwiJyArIG5hbWUgKyAnXCIuIENvbXBvbmVudCBuYW1lcyAnICsgJ2NhbiBvbmx5IGNvbnRhaW4gYWxwaGFudW1lcmljIGNoYXJhY2F0ZXJzIGFuZCB0aGUgaHlwaGVuLicpO1xuICAgICAgICBuYW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIFN1YiA9IGNyZWF0ZUNsYXNzKG5hbWUgfHwgJ1Z1ZUNvbXBvbmVudCcpO1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoU3VwZXIub3B0aW9ucywgZXh0ZW5kT3B0aW9ucyk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG4gICAgLy8gYWxsb3cgZnVydGhlciBleHRlbnNpb25cbiAgICBTdWIuZXh0ZW5kID0gU3VwZXIuZXh0ZW5kO1xuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgY29uZmlnLl9hc3NldFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIFN1Ylt0eXBlXSA9IFN1cGVyW3R5cGVdO1xuICAgIH0pO1xuICAgIC8vIGVuYWJsZSByZWN1cnNpdmUgc2VsZi1sb29rdXBcbiAgICBpZiAobmFtZSkge1xuICAgICAgU3ViLm9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IFN1YjtcbiAgICB9XG4gICAgLy8gY2FjaGUgY29uc3RydWN0b3JcbiAgICBpZiAoaXNGaXJzdEV4dGVuZCkge1xuICAgICAgZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IFN1YjtcbiAgICB9XG4gICAgcmV0dXJuIFN1YjtcbiAgfTtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBzdWItY2xhc3MgY29uc3RydWN0b3Igd2l0aCB0aGVcbiAgICogZ2l2ZW4gbmFtZS4gVGhpcyBnaXZlcyB1cyBtdWNoIG5pY2VyIG91dHB1dCB3aGVuXG4gICAqIGxvZ2dpbmcgaW5zdGFuY2VzIGluIHRoZSBjb25zb2xlLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xhc3MobmFtZSkge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldy1mdW5jICovXG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbigncmV0dXJuIGZ1bmN0aW9uICcgKyBjbGFzc2lmeShuYW1lKSArICcgKG9wdGlvbnMpIHsgdGhpcy5faW5pdChvcHRpb25zKSB9JykoKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLW5ldy1mdW5jICovXG4gIH1cblxuICAvKipcbiAgICogUGx1Z2luIHN5c3RlbVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGx1Z2luXG4gICAqL1xuXG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKHBsdWdpbi5pbnN0YWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsdWdpbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgcGx1Z2luLmluc3RhbGxlZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgZ2xvYmFsIG1peGluIGJ5IG1lcmdpbmcgaXQgaW50byB0aGUgZGVmYXVsdFxuICAgKiBvcHRpb25zLlxuICAgKi9cblxuICBWdWUubWl4aW4gPSBmdW5jdGlvbiAobWl4aW4pIHtcbiAgICBWdWUub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhWdWUub3B0aW9ucywgbWl4aW4pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGUgYXNzZXQgcmVnaXN0cmF0aW9uIG1ldGhvZHMgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIHNpZ25hdHVyZTpcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAqIEBwYXJhbSB7Kn0gZGVmaW5pdGlvblxuICAgKi9cblxuICBjb25maWcuX2Fzc2V0VHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChpZCwgZGVmaW5pdGlvbikge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdjb21wb25lbnQnICYmIChjb21tb25UYWdSRS50ZXN0KGlkKSB8fCByZXNlcnZlZFRhZ1JFLnRlc3QoaWQpKSkge1xuICAgICAgICAgICAgd2FybignRG8gbm90IHVzZSBidWlsdC1pbiBvciByZXNlcnZlZCBIVE1MIGVsZW1lbnRzIGFzIGNvbXBvbmVudCAnICsgJ2lkOiAnICsgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NvbXBvbmVudCcgJiYgaXNQbGFpbk9iamVjdChkZWZpbml0aW9uKSkge1xuICAgICAgICAgIGRlZmluaXRpb24ubmFtZSA9IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSBWdWUuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuICAvLyBleHBvc2UgaW50ZXJuYWwgdHJhbnNpdGlvbiBBUElcbiAgZXh0ZW5kKFZ1ZS50cmFuc2l0aW9uLCB0cmFuc2l0aW9uKTtcbn1cblxuaW5zdGFsbEdsb2JhbEFQSShWdWUpO1xuXG5WdWUudmVyc2lvbiA9ICcxLjAuMTcnO1xuXG4vLyBkZXZ0b29scyBnbG9iYWwgaG9va1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChkZXZ0b29scykge1xuICBkZXZ0b29scy5lbWl0KCdpbml0JywgVnVlKTtcbn0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpbkJyb3dzZXIgJiYgL0Nocm9tZVxcL1xcZCsvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gIGNvbnNvbGUubG9nKCdEb3dubG9hZCB0aGUgVnVlIERldnRvb2xzIGZvciBhIGJldHRlciBkZXZlbG9wbWVudCBleHBlcmllbmNlOlxcbicgKyAnaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS1kZXZ0b29scycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgc2V0VGltZW91dChkcmFpblF1ZXVlLCAwKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBWdWUgLy8gbGF0ZSBiaW5kXG52YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKVxudmFyIHNoaW1tZWQgPSBmYWxzZVxudmFyIGlzQnJvd3NlcmlmeSA9IGZhbHNlXG5cbi8qKlxuICogRGV0ZXJtaW5lIGNvbXBhdGliaWxpdHkgYW5kIGFwcGx5IHBhdGNoLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHZ1ZVxuICogQHBhcmFtIHtCb29sZWFufSBicm93c2VyaWZ5XG4gKi9cblxuZXhwb3J0cy5pbnN0YWxsID0gZnVuY3Rpb24gKHZ1ZSwgYnJvd3NlcmlmeSkge1xuICBpZiAoc2hpbW1lZCkgcmV0dXJuXG4gIHNoaW1tZWQgPSB0cnVlXG5cbiAgVnVlID0gdnVlXG4gIGlzQnJvd3NlcmlmeSA9IGJyb3dzZXJpZnlcblxuICBleHBvcnRzLmNvbXBhdGlibGUgPSAhIVZ1ZS5pbnRlcm5hbERpcmVjdGl2ZXNcbiAgaWYgKCFleHBvcnRzLmNvbXBhdGlibGUpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAnW0hNUl0gdnVlLWxvYWRlciBob3QgcmVsb2FkIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoICcgK1xuICAgICAgJ1Z1ZS5qcyAxLjAuMCsuJ1xuICAgIClcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHBhdGNoIHZpZXcgZGlyZWN0aXZlXG4gIHBhdGNoVmlldyhWdWUuaW50ZXJuYWxEaXJlY3RpdmVzLmNvbXBvbmVudClcbiAgY29uc29sZS5sb2coJ1tITVJdIFZ1ZSBjb21wb25lbnQgaG90IHJlbG9hZCBzaGltIGFwcGxpZWQuJylcbiAgLy8gc2hpbSByb3V0ZXItdmlldyBpZiBwcmVzZW50XG4gIHZhciByb3V0ZXJWaWV3ID0gVnVlLmVsZW1lbnREaXJlY3RpdmUoJ3JvdXRlci12aWV3JylcbiAgaWYgKHJvdXRlclZpZXcpIHtcbiAgICBwYXRjaFZpZXcocm91dGVyVmlldylcbiAgICBjb25zb2xlLmxvZygnW0hNUl0gdnVlLXJvdXRlciA8cm91dGVyLXZpZXc+IGhvdCByZWxvYWQgc2hpbSBhcHBsaWVkLicpXG4gIH1cbn1cblxuLyoqXG4gKiBTaGltIHRoZSB2aWV3IGRpcmVjdGl2ZSAoY29tcG9uZW50IG9yIHJvdXRlci12aWV3KS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gVmlld1xuICovXG5cbmZ1bmN0aW9uIHBhdGNoVmlldyAoVmlldykge1xuICB2YXIgdW5idWlsZCA9IFZpZXcudW5idWlsZFxuICBWaWV3LnVuYnVpbGQgPSBmdW5jdGlvbiAoZGVmZXIpIHtcbiAgICBpZiAoIXRoaXMuaG90VXBkYXRpbmcpIHtcbiAgICAgIHZhciBwcmV2Q29tcG9uZW50ID0gdGhpcy5jaGlsZFZNICYmIHRoaXMuY2hpbGRWTS5jb25zdHJ1Y3RvclxuICAgICAgcmVtb3ZlVmlldyhwcmV2Q29tcG9uZW50LCB0aGlzKVxuICAgICAgLy8gZGVmZXIgPSB0cnVlIG1lYW5zIHdlIGFyZSB0cmFuc2l0aW9uaW5nIHRvIGEgbmV3XG4gICAgICAvLyBDb21wb25lbnQuIFJlZ2lzdGVyIHRoaXMgbmV3IGNvbXBvbmVudCB0byB0aGUgbGlzdC5cbiAgICAgIGlmIChkZWZlcikge1xuICAgICAgICBhZGRWaWV3KHRoaXMuQ29tcG9uZW50LCB0aGlzKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBjYWxsIG9yaWdpbmFsXG4gICAgcmV0dXJuIHVuYnVpbGQuY2FsbCh0aGlzLCBkZWZlcilcbiAgfVxufVxuXG4vKipcbiAqIEFkZCBhIGNvbXBvbmVudCB2aWV3IHRvIGEgQ29tcG9uZW50J3MgaG90IGxpc3RcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBDb21wb25lbnRcbiAqIEBwYXJhbSB7RGlyZWN0aXZlfSB2aWV3IC0gdmlldyBkaXJlY3RpdmUgaW5zdGFuY2VcbiAqL1xuXG5mdW5jdGlvbiBhZGRWaWV3IChDb21wb25lbnQsIHZpZXcpIHtcbiAgdmFyIGlkID0gQ29tcG9uZW50ICYmIENvbXBvbmVudC5vcHRpb25zLmhvdElEXG4gIGlmIChpZCkge1xuICAgIGlmICghbWFwW2lkXSkge1xuICAgICAgbWFwW2lkXSA9IHtcbiAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQsXG4gICAgICAgIHZpZXdzOiBbXSxcbiAgICAgICAgaW5zdGFuY2VzOiBbXVxuICAgICAgfVxuICAgIH1cbiAgICBtYXBbaWRdLnZpZXdzLnB1c2godmlldylcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBhIGNvbXBvbmVudCB2aWV3IGZyb20gYSBDb21wb25lbnQncyBob3QgbGlzdFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudFxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXcgLSB2aWV3IGRpcmVjdGl2ZSBpbnN0YW5jZVxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZVZpZXcgKENvbXBvbmVudCwgdmlldykge1xuICB2YXIgaWQgPSBDb21wb25lbnQgJiYgQ29tcG9uZW50Lm9wdGlvbnMuaG90SURcbiAgaWYgKGlkKSB7XG4gICAgbWFwW2lkXS52aWV3cy4kcmVtb3ZlKHZpZXcpXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgYSByZWNvcmQgZm9yIGEgaG90IG1vZHVsZSwgd2hpY2gga2VlcHMgdHJhY2sgb2YgaXRzIGNvbnN0cnVjb3RyLFxuICogaW5zdG5hY2VzIGFuZCB2aWV3cyAoY29tcG9uZW50IGRpcmVjdGl2ZXMgb3Igcm91dGVyLXZpZXdzKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZXhwb3J0cy5jcmVhdGVSZWNvcmQgPSBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMub3B0aW9uc1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5lbCAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMuZGF0YSAhPT0gJ29iamVjdCcpIHtcbiAgICBtYWtlT3B0aW9uc0hvdChpZCwgb3B0aW9ucylcbiAgICBtYXBbaWRdID0ge1xuICAgICAgQ29tcG9uZW50OiBudWxsLFxuICAgICAgdmlld3M6IFtdLFxuICAgICAgaW5zdGFuY2VzOiBbXVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIE1ha2UgYSBDb21wb25lbnQgb3B0aW9ucyBvYmplY3QgaG90LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBtYWtlT3B0aW9uc0hvdCAoaWQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucy5ob3RJRCA9IGlkXG4gIGluamVjdEhvb2sob3B0aW9ucywgJ2NyZWF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgICBpZiAoIXJlY29yZC5Db21wb25lbnQpIHtcbiAgICAgIHJlY29yZC5Db21wb25lbnQgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgfVxuICAgIHJlY29yZC5pbnN0YW5jZXMucHVzaCh0aGlzKVxuICB9KVxuICBpbmplY3RIb29rKG9wdGlvbnMsICdiZWZvcmVEZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgIG1hcFtpZF0uaW5zdGFuY2VzLiRyZW1vdmUodGhpcylcbiAgfSlcbn1cblxuLyoqXG4gKiBJbmplY3QgYSBob29rIHRvIGEgaG90IHJlbG9hZGFibGUgY29tcG9uZW50IHNvIHRoYXRcbiAqIHdlIGNhbiBrZWVwIHRyYWNrIG9mIGl0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gaG9va1xuICovXG5cbmZ1bmN0aW9uIGluamVjdEhvb2sgKG9wdGlvbnMsIG5hbWUsIGhvb2spIHtcbiAgdmFyIGV4aXN0aW5nID0gb3B0aW9uc1tuYW1lXVxuICBvcHRpb25zW25hbWVdID0gZXhpc3RpbmdcbiAgICA/IEFycmF5LmlzQXJyYXkoZXhpc3RpbmcpXG4gICAgICA/IGV4aXN0aW5nLmNvbmNhdChob29rKVxuICAgICAgOiBbZXhpc3RpbmcsIGhvb2tdXG4gICAgOiBbaG9va11cbn1cblxuLyoqXG4gKiBVcGRhdGUgYSBob3QgY29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHBhcmFtIHtPYmplY3R8bnVsbH0gbmV3T3B0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gbmV3VGVtcGxhdGVcbiAqL1xuXG5leHBvcnRzLnVwZGF0ZSA9IGZ1bmN0aW9uIChpZCwgbmV3T3B0aW9ucywgbmV3VGVtcGxhdGUpIHtcbiAgdmFyIHJlY29yZCA9IG1hcFtpZF1cbiAgLy8gZm9yY2UgZnVsbC1yZWxvYWQgaWYgYW4gaW5zdGFuY2Ugb2YgdGhlIGNvbXBvbmVudCBpcyBhY3RpdmUgYnV0IGlzIG5vdFxuICAvLyBtYW5hZ2VkIGJ5IGEgdmlld1xuICBpZiAoIXJlY29yZCB8fCAocmVjb3JkLmluc3RhbmNlcy5sZW5ndGggJiYgIXJlY29yZC52aWV3cy5sZW5ndGgpKSB7XG4gICAgY29uc29sZS5sb2coJ1tITVJdIFJvb3Qgb3IgbWFudWFsbHktbW91bnRlZCBpbnN0YW5jZSBtb2RpZmllZC4gRnVsbCByZWxvYWQgbWF5IGJlIHJlcXVpcmVkLicpXG4gICAgaWYgKCFpc0Jyb3dzZXJpZnkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBicm93c2VyaWZ5LWhtciBzb21laG93IHNlbmRzIGluY29tcGxldGUgYnVuZGxlIGlmIHdlIHJlbG9hZCBoZXJlXG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgaWYgKCFpc0Jyb3dzZXJpZnkpIHtcbiAgICAvLyBicm93c2VyaWZ5LWhtciBhbHJlYWR5IGxvZ3MgdGhpc1xuICAgIGNvbnNvbGUubG9nKCdbSE1SXSBVcGRhdGluZyBjb21wb25lbnQ6ICcgKyBmb3JtYXQoaWQpKVxuICB9XG4gIHZhciBDb21wb25lbnQgPSByZWNvcmQuQ29tcG9uZW50XG4gIC8vIHVwZGF0ZSBjb25zdHJ1Y3RvclxuICBpZiAobmV3T3B0aW9ucykge1xuICAgIC8vIGluIGNhc2UgdGhlIHVzZXIgZXhwb3J0cyBhIGNvbnN0cnVjdG9yXG4gICAgQ29tcG9uZW50ID0gcmVjb3JkLkNvbXBvbmVudCA9IHR5cGVvZiBuZXdPcHRpb25zID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG5ld09wdGlvbnNcbiAgICAgIDogVnVlLmV4dGVuZChuZXdPcHRpb25zKVxuICAgIG1ha2VPcHRpb25zSG90KGlkLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBpZiAobmV3VGVtcGxhdGUpIHtcbiAgICBDb21wb25lbnQub3B0aW9ucy50ZW1wbGF0ZSA9IG5ld1RlbXBsYXRlXG4gIH1cbiAgLy8gaGFuZGxlIHJlY3Vyc2l2ZSBsb29rdXBcbiAgaWYgKENvbXBvbmVudC5vcHRpb25zLm5hbWUpIHtcbiAgICBDb21wb25lbnQub3B0aW9ucy5jb21wb25lbnRzW0NvbXBvbmVudC5vcHRpb25zLm5hbWVdID0gQ29tcG9uZW50XG4gIH1cbiAgLy8gcmVzZXQgY29uc3RydWN0b3IgY2FjaGVkIGxpbmtlclxuICBDb21wb25lbnQubGlua2VyID0gbnVsbFxuICAvLyByZWxvYWQgYWxsIHZpZXdzXG4gIHJlY29yZC52aWV3cy5mb3JFYWNoKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgdXBkYXRlVmlldyh2aWV3LCBDb21wb25lbnQpXG4gIH0pXG4gIC8vIGZsdXNoIGRldnRvb2xzXG4gIGlmICh3aW5kb3cuX19WVUVfREVWVE9PTFNfR0xPQkFMX0hPT0tfXykge1xuICAgIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fLmVtaXQoJ2ZsdXNoJylcbiAgfVxufVxuXG4vKipcbiAqIFVwZGF0ZSBhIGNvbXBvbmVudCB2aWV3IGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtEaXJlY3RpdmV9IHZpZXdcbiAqIEBwYXJhbSB7RnVuY3Rpb259IENvbXBvbmVudFxuICovXG5cbmZ1bmN0aW9uIHVwZGF0ZVZpZXcgKHZpZXcsIENvbXBvbmVudCkge1xuICBpZiAoIXZpZXcuX2JvdW5kKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmlldy5Db21wb25lbnQgPSBDb21wb25lbnRcbiAgdmlldy5ob3RVcGRhdGluZyA9IHRydWVcbiAgLy8gZGlzYWJsZSB0cmFuc2l0aW9uc1xuICB2aWV3LnZtLl9pc0NvbXBpbGVkID0gZmFsc2VcbiAgLy8gc2F2ZSBzdGF0ZVxuICB2YXIgc3RhdGUgPSBleHRyYWN0U3RhdGUodmlldy5jaGlsZFZNKVxuICAvLyByZW1vdW50LCBtYWtlIHN1cmUgdG8gZGlzYWJsZSBrZWVwLWFsaXZlXG4gIHZhciBrZWVwQWxpdmUgPSB2aWV3LmtlZXBBbGl2ZVxuICB2aWV3LmtlZXBBbGl2ZSA9IGZhbHNlXG4gIHZpZXcubW91bnRDb21wb25lbnQoKVxuICB2aWV3LmtlZXBBbGl2ZSA9IGtlZXBBbGl2ZVxuICAvLyByZXN0b3JlIHN0YXRlXG4gIHJlc3RvcmVTdGF0ZSh2aWV3LmNoaWxkVk0sIHN0YXRlLCB0cnVlKVxuICAvLyByZS1lYW5ibGUgdHJhbnNpdGlvbnNcbiAgdmlldy52bS5faXNDb21waWxlZCA9IHRydWVcbiAgdmlldy5ob3RVcGRhdGluZyA9IGZhbHNlXG59XG5cbi8qKlxuICogRXh0cmFjdCBzdGF0ZSBmcm9tIGEgVnVlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGV4dHJhY3RTdGF0ZSAodm0pIHtcbiAgcmV0dXJuIHtcbiAgICBjaWQ6IHZtLmNvbnN0cnVjdG9yLmNpZCxcbiAgICBkYXRhOiB2bS4kZGF0YSxcbiAgICBjaGlsZHJlbjogdm0uJGNoaWxkcmVuLm1hcChleHRyYWN0U3RhdGUpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXN0b3JlIHN0YXRlIHRvIGEgcmVsb2FkZWQgVnVlIGluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7VnVlfSB2bVxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKi9cblxuZnVuY3Rpb24gcmVzdG9yZVN0YXRlICh2bSwgc3RhdGUsIGlzUm9vdCkge1xuICB2YXIgb2xkQXN5bmNDb25maWdcbiAgaWYgKGlzUm9vdCkge1xuICAgIC8vIHNldCBWdWUgaW50byBzeW5jIG1vZGUgZHVyaW5nIHN0YXRlIHJlaHlkcmF0aW9uXG4gICAgb2xkQXN5bmNDb25maWcgPSBWdWUuY29uZmlnLmFzeW5jXG4gICAgVnVlLmNvbmZpZy5hc3luYyA9IGZhbHNlXG4gIH1cbiAgLy8gYWN0dWFsIHJlc3RvcmVcbiAgaWYgKGlzUm9vdCB8fCAhdm0uX3Byb3BzKSB7XG4gICAgdm0uJGRhdGEgPSBzdGF0ZS5kYXRhXG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMoc3RhdGUuZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBpZiAoIXZtLl9wcm9wc1trZXldKSB7XG4gICAgICAgIC8vIGZvciBub24tcm9vdCwgb25seSByZXN0b3JlIG5vbi1wcm9wcyBmaWVsZHNcbiAgICAgICAgdm0uJGRhdGFba2V5XSA9IHN0YXRlLmRhdGFba2V5XVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgLy8gdmVyaWZ5IGNoaWxkIGNvbnNpc3RlbmN5XG4gIHZhciBoYXNTYW1lQ2hpbGRyZW4gPSB2bS4kY2hpbGRyZW4uZXZlcnkoZnVuY3Rpb24gKGMsIGkpIHtcbiAgICByZXR1cm4gc3RhdGUuY2hpbGRyZW5baV0gJiYgc3RhdGUuY2hpbGRyZW5baV0uY2lkID09PSBjLmNvbnN0cnVjdG9yLmNpZFxuICB9KVxuICBpZiAoaGFzU2FtZUNoaWxkcmVuKSB7XG4gICAgLy8gcmVoeWRyYXRlIGNoaWxkcmVuXG4gICAgdm0uJGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGMsIGkpIHtcbiAgICAgIHJlc3RvcmVTdGF0ZShjLCBzdGF0ZS5jaGlsZHJlbltpXSlcbiAgICB9KVxuICB9XG4gIGlmIChpc1Jvb3QpIHtcbiAgICBWdWUuY29uZmlnLmFzeW5jID0gb2xkQXN5bmNDb25maWdcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXQgKGlkKSB7XG4gIHJldHVybiBpZC5tYXRjaCgvW15cXC9dK1xcLnZ1ZSQvKVswXVxufVxuIl19
