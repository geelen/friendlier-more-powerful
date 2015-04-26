System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "npm:caniuse-api@1.3.1/features": "./caniuse-features.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.1.13",
    "babel-runtime": "npm:babel-runtime@5.1.13",
    "core-js": "npm:core-js@0.9.3",
    "cssnext": "npm:cssnext@1.3.0",
    "json": "github:systemjs/plugin-json@master",
    "jsx": "github:geelen/plugin-live-jsx@master",
    "plugin-postcss": "github:geelen/plugin-postcss@master",
    "react": "npm:react@0.13.2",
    "github:geelen/plugin-live-jsx@master": {
      "pascal-case": "npm:pascal-case@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "react": "npm:react@0.13.2",
      "react-hot-api": "github:gaearon/react-hot-api@0.4.3",
      "react-tools": "npm:react-tools@0.13.2"
    },
    "github:geelen/plugin-postcss@master": {
      "postcss": "npm:postcss@4.1.6"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.2.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.0": {
      "events-browserify": "npm:events-browserify@0.0.1"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:amdefine@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.0",
      "micromatch": "npm:micromatch@2.1.6",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:arr-diff@1.0.1": {
      "array-slice": "npm:array-slice@0.2.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:asn1.js@1.0.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.6.16": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:autoprefixer-core@5.1.11": {
      "browserslist": "npm:browserslist@0.2.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000145",
      "num2fraction": "npm:num2fraction@1.1.0",
      "postcss": "npm:postcss@4.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:binary-extensions@1.3.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.0": {
      "expand-range": "npm:expand-range@1.8.1",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.0"
    },
    "npm:browserify-aes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserslist@0.2.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000145",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:buffer@3.2.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:camel-case@1.1.1": {
      "sentence-case": "npm:sentence-case@1.1.2",
      "upper-case": "npm:upper-case@1.1.2"
    },
    "npm:caniuse-api@1.3.1": {
      "browserslist": "npm:browserslist@0.2.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000145",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lodash.memoize": "npm:lodash.memoize@2.4.1",
      "lodash.uniq": "npm:lodash.uniq@2.4.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "shelljs": "npm:shelljs@0.3.0"
    },
    "npm:chokidar@1.0.1": {
      "anymatch": "npm:anymatch@1.3.0",
      "arrify": "npm:arrify@1.0.0",
      "async-each": "npm:async-each@0.1.6",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@0.3.5",
      "glob-parent": "npm:glob-parent@1.2.0",
      "is-binary-path": "npm:is-binary-path@1.0.0",
      "is-glob": "npm:is-glob@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readdirp": "npm:readdirp@1.3.0"
    },
    "npm:clone@0.1.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:color-convert@0.5.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:color-name@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:color-string@0.2.4": {
      "color-name": "npm:color-name@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:color-string@0.3.0": {
      "color-name": "npm:color-name@1.0.0"
    },
    "npm:color@0.7.3": {
      "color-convert": "npm:color-convert@0.5.2",
      "color-string": "npm:color-string@0.2.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:colors@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commander@2.5.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commoner@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "commander": "npm:commander@2.5.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.2.2",
      "graceful-fs": "npm:graceful-fs@3.0.6",
      "iconv-lite": "npm:iconv-lite@0.4.8",
      "install": "npm:install@0.1.8",
      "mkdirp": "npm:mkdirp@0.5.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "q": "npm:q@1.1.2",
      "recast": "npm:recast@0.9.18",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@1.0.1"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.0",
      "sha.js": "npm:sha.js@2.4.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.1",
      "create-ecdh": "npm:create-ecdh@2.0.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.1",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:css-color-function@1.2.1": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "color": "npm:color@0.7.3",
      "debug": "npm:debug@0.7.4",
      "rgb": "npm:rgb@0.1.0"
    },
    "npm:cssnext@1.3.0": {
      "autoprefixer-core": "npm:autoprefixer-core@5.1.11",
      "caniuse-api": "npm:caniuse-api@1.3.1",
      "chokidar": "npm:chokidar@1.0.1",
      "colors": "npm:colors@1.0.3",
      "commander": "npm:commander@2.5.1",
      "csswring": "npm:csswring@3.0.3",
      "exit": "npm:exit@0.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "object-assign": "npm:object-assign@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pixrem": "npm:pixrem@1.2.4",
      "pleeease-filters": "npm:pleeease-filters@1.0.0",
      "postcss": "npm:postcss@4.0.6",
      "postcss-calc": "npm:postcss-calc@4.0.1",
      "postcss-color-function": "npm:postcss-color-function@1.2.0",
      "postcss-color-gray": "npm:postcss-color-gray@2.0.0",
      "postcss-color-hex-alpha": "npm:postcss-color-hex-alpha@1.2.0",
      "postcss-color-hwb": "npm:postcss-color-hwb@1.1.0",
      "postcss-color-rebeccapurple": "npm:postcss-color-rebeccapurple@1.1.0",
      "postcss-color-rgba-fallback": "npm:postcss-color-rgba-fallback@1.1.1",
      "postcss-custom-media": "npm:postcss-custom-media@1.3.0",
      "postcss-custom-properties": "npm:postcss-custom-properties@3.3.0",
      "postcss-custom-selectors": "npm:postcss-custom-selectors@1.1.0",
      "postcss-font-variant": "npm:postcss-font-variant@1.1.0",
      "postcss-import": "npm:postcss-import@5.2.2",
      "postcss-media-minmax": "npm:postcss-media-minmax@1.1.0",
      "postcss-pseudoelements": "npm:postcss-pseudoelements@2.1.1",
      "postcss-url": "npm:postcss-url@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "read-file-stdin": "npm:read-file-stdin@0.2.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "to-slug-case": "npm:to-slug-case@0.1.2",
      "to-space-case": "npm:to-space-case@0.1.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "write-file-stdout": "npm:write-file-stdout@0.0.2"
    },
    "npm:csswring@3.0.3": {
      "fs-extra": "npm:fs-extra@0.18.2",
      "minimist": "npm:minimist@1.1.1",
      "onecolor": "npm:onecolor@2.4.2",
      "postcss": "npm:postcss@4.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@2.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:diffie-hellman@3.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@1.1.5",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:directory-encoder@0.6.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-extra": "npm:fs-extra@0.8.1",
      "handlebars": "npm:handlebars@1.1.2",
      "img-stats": "npm:img-stats@0.4.2",
      "lodash": "npm:lodash@2.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:elliptic@1.0.1": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.7"
    },
    "npm:es6-promise@2.1.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:esprima-fb@10001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:events-browserify@0.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:exit@0.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:expand-range@1.8.1": {
      "fill-range": "npm:fill-range@2.2.2"
    },
    "npm:fill-range@2.2.2": {
      "is-number": "npm:is-number@1.1.2",
      "isobject": "npm:isobject@1.0.0",
      "randomatic": "npm:randomatic@1.1.0",
      "repeat-element": "npm:repeat-element@1.1.0",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:for-own@0.1.3": {
      "for-in": "npm:for-in@0.1.4"
    },
    "npm:fs-extra@0.18.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@3.0.6",
      "jsonfile": "npm:jsonfile@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "rimraf": "npm:rimraf@2.2.8"
    },
    "npm:fs-extra@0.8.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsonfile": "npm:jsonfile@1.1.1",
      "mkdirp": "npm:mkdirp@0.3.5",
      "ncp": "npm:ncp@0.4.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rimraf": "npm:rimraf@2.2.8"
    },
    "npm:fsevents@0.3.5": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@1.5.3",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gather-stream@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob-base@0.2.0": {
      "glob-parent": "npm:glob-parent@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@1.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@4.2.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@1.0.0",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@4.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.4",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@5.0.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.4",
      "once": "npm:once@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@2.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@3.0.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:handlebars@1.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "uglify-js": "npm:uglify-js@2.3.6"
    },
    "npm:hash.js@1.0.2": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:iconv-lite@0.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:img-stats@0.4.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "xmldom": "npm:xmldom@0.1.16"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:install@0.1.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:is-binary-path@1.0.0": {
      "binary-extensions": "npm:binary-extensions@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-equal-shallow@0.1.2": {
      "is-primitive": "npm:is-primitive@1.0.0"
    },
    "npm:js-base64@2.1.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jsonfile@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:jsonfile@2.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:kind-of@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:lodash._basebind@2.4.1": {
      "lodash._basecreate": "npm:lodash._basecreate@2.4.1",
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash._basecreate@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1",
      "lodash.noop": "npm:lodash.noop@2.4.1"
    },
    "npm:lodash._basecreatecallback@2.4.1": {
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash.bind": "npm:lodash.bind@2.4.1",
      "lodash.identity": "npm:lodash.identity@2.4.1",
      "lodash.support": "npm:lodash.support@2.4.1"
    },
    "npm:lodash._basecreatewrapper@2.4.1": {
      "lodash._basecreate": "npm:lodash._basecreate@2.4.1",
      "lodash._setbinddata": "npm:lodash._setbinddata@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash._baseisequal@2.4.1": {
      "lodash._getarray": "npm:lodash._getarray@2.4.1",
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1",
      "lodash._releasearray": "npm:lodash._releasearray@2.4.1",
      "lodash.forin": "npm:lodash.forin@2.4.1",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash._baseuniq@2.4.1": {
      "lodash._baseindexof": "npm:lodash._baseindexof@2.4.1",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@2.4.1",
      "lodash._createcache": "npm:lodash._createcache@2.4.1",
      "lodash._getarray": "npm:lodash._getarray@2.4.1",
      "lodash._largearraysize": "npm:lodash._largearraysize@2.4.1",
      "lodash._releasearray": "npm:lodash._releasearray@2.4.1",
      "lodash._releaseobject": "npm:lodash._releaseobject@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._cacheindexof@2.4.1": {
      "lodash._baseindexof": "npm:lodash._baseindexof@2.4.1",
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2"
    },
    "npm:lodash._cachepush@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2"
    },
    "npm:lodash._createcache@2.4.1": {
      "lodash._cachepush": "npm:lodash._cachepush@2.4.1",
      "lodash._getobject": "npm:lodash._getobject@2.4.1",
      "lodash._releaseobject": "npm:lodash._releaseobject@2.4.1"
    },
    "npm:lodash._createwrapper@2.4.1": {
      "lodash._basebind": "npm:lodash._basebind@2.4.1",
      "lodash._basecreatewrapper": "npm:lodash._basecreatewrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash._getarray@2.4.1": {
      "lodash._arraypool": "npm:lodash._arraypool@2.4.1"
    },
    "npm:lodash._getobject@2.4.1": {
      "lodash._objectpool": "npm:lodash._objectpool@2.4.1"
    },
    "npm:lodash._releasearray@2.4.1": {
      "lodash._arraypool": "npm:lodash._arraypool@2.4.1",
      "lodash._maxpoolsize": "npm:lodash._maxpoolsize@2.4.1"
    },
    "npm:lodash._releaseobject@2.4.1": {
      "lodash._maxpoolsize": "npm:lodash._maxpoolsize@2.4.1",
      "lodash._objectpool": "npm:lodash._objectpool@2.4.1"
    },
    "npm:lodash._setbinddata@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash.noop": "npm:lodash.noop@2.4.1"
    },
    "npm:lodash._shimkeys@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.bind@2.4.1": {
      "lodash._createwrapper": "npm:lodash._createwrapper@2.4.1",
      "lodash._slice": "npm:lodash._slice@2.4.1"
    },
    "npm:lodash.createcallback@2.4.3": {
      "lodash._basecreatecallback": "npm:lodash._basecreatecallback@2.4.1",
      "lodash._baseisequal": "npm:lodash._baseisequal@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1",
      "lodash.property": "npm:lodash.property@2.4.1"
    },
    "npm:lodash.forin@2.4.1": {
      "lodash._basecreatecallback": "npm:lodash._basecreatecallback@2.4.1",
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.isobject@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.keys@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash._shimkeys": "npm:lodash._shimkeys@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash.memoize@2.4.1": {
      "lodash._keyprefix": "npm:lodash._keyprefix@2.4.2",
      "lodash.isfunction": "npm:lodash.isfunction@2.4.1"
    },
    "npm:lodash.support@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1"
    },
    "npm:lodash.uniq@2.4.1": {
      "lodash._baseuniq": "npm:lodash._baseuniq@2.4.1",
      "lodash.createcallback": "npm:lodash.createcallback@2.4.3",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash@2.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:micromatch@2.1.6": {
      "arr-diff": "npm:arr-diff@1.0.1",
      "braces": "npm:braces@1.8.0",
      "debug": "npm:debug@2.1.3",
      "expand-brackets": "npm:expand-brackets@0.1.1",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-glob": "npm:is-glob@1.1.3",
      "kind-of": "npm:kind-of@1.1.0",
      "object.omit": "npm:object.omit@0.2.1",
      "parse-glob": "npm:parse-glob@3.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "regex-cache": "npm:regex-cache@0.4.2"
    },
    "npm:miller-rabin@1.1.5": {
      "bn.js": "npm:bn.js@1.3.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.6.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:minimatch@1.0.0": {
      "lru-cache": "npm:lru-cache@2.6.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.0"
    },
    "npm:minimatch@2.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:mkdirp@0.3.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:mkdirp@0.5.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:nan@1.5.3": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:ncp@0.4.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:object.omit@0.2.1": {
      "for-own": "npm:for-own@0.1.3",
      "isobject": "npm:isobject@0.2.0"
    },
    "npm:once@1.3.1": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@3.0.0": {
      "asn1.js": "npm:asn1.js@1.0.4",
      "browserify-aes": "npm:browserify-aes@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@3.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-glob@3.0.2": {
      "glob-base": "npm:glob-base@0.2.0",
      "is-dotfile": "npm:is-dotfile@1.0.0",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@1.1.3"
    },
    "npm:pascal-case@1.1.0": {
      "camel-case": "npm:camel-case@1.1.1",
      "upper-case-first": "npm:upper-case-first@1.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pbkdf2-compat@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pixrem@1.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "postcss": "npm:postcss@4.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "reduce-css-calc": "npm:reduce-css-calc@1.2.0"
    },
    "npm:pleeease-filters@1.0.0": {
      "onecolor": "npm:onecolor@2.4.2",
      "postcss": "npm:postcss@4.0.6"
    },
    "npm:postcss-calc@4.0.1": {
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "reduce-css-calc": "npm:reduce-css-calc@1.2.0"
    },
    "npm:postcss-color-function@1.2.0": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "css-color-function": "npm:css-color-function@1.2.1",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1"
    },
    "npm:postcss-color-gray@2.0.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:postcss-color-hex-alpha@1.2.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1"
    },
    "npm:postcss-color-hwb@1.1.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:postcss-color-rebeccapurple@1.1.0": {
      "color": "npm:color@0.7.3",
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1"
    },
    "npm:postcss-color-rgba-fallback@1.1.1": {
      "color-string": "npm:color-string@0.3.0",
      "postcss": "npm:postcss@4.0.6"
    },
    "npm:postcss-custom-media@1.3.0": {
      "postcss-message-helpers": "npm:postcss-message-helpers@1.1.1"
    },
    "npm:postcss-custom-properties@3.3.0": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "object-assign": "npm:object-assign@2.0.0",
      "postcss": "npm:postcss@4.1.6",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0"
    },
    "npm:postcss-import@5.2.2": {
      "clone": "npm:clone@0.1.19",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.0.6",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@1.1.6",
      "string-hash": "npm:string-hash@1.1.0"
    },
    "npm:postcss-url@3.0.0": {
      "directory-encoder": "npm:directory-encoder@0.6.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.8",
      "mime": "npm:mime@1.3.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "reduce-function-call": "npm:reduce-function-call@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:postcss@4.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.2.0"
    },
    "npm:postcss@4.1.6": {
      "es6-promise": "npm:es6-promise@2.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:public-encrypt@2.0.0": {
      "bn.js": "npm:bn.js@1.3.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:q@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randomatic@1.1.0": {
      "is-number": "npm:is-number@1.1.2",
      "kind-of": "npm:kind-of@1.1.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react-tools@0.13.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commoner": "npm:commoner@0.10.1",
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:react@0.13.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:read-file-stdin@0.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gather-stream": "npm:gather-stream@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readdirp@1.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@2.0.3",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:recast@0.9.18": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.6.16",
      "esprima-fb": "npm:esprima-fb@10001.1.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:reduce-css-calc@1.2.0": {
      "balanced-match": "npm:balanced-match@0.1.0",
      "reduce-function-call": "npm:reduce-function-call@1.0.1"
    },
    "npm:reduce-function-call@1.0.1": {
      "balanced-match": "npm:balanced-match@0.1.0"
    },
    "npm:regex-cache@0.4.2": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.2",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:rimraf@2.2.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rimraf@2.3.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@4.5.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ripemd160@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sentence-case@1.1.2": {
      "lower-case": "npm:lower-case@1.1.2"
    },
    "npm:sha.js@2.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:shelljs@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.2.0": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.4.2": {
      "amdefine": "npm:amdefine@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string-hash@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through@2.3.7": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.0": {
      "process": "npm:process@0.10.1"
    },
    "npm:to-slug-case@0.1.2": {
      "to-space-case": "npm:to-space-case@0.1.2"
    },
    "npm:to-space-case@0.1.2": {
      "to-no-case": "npm:to-no-case@0.1.1"
    },
    "npm:to-space-case@0.1.3": {
      "to-no-case": "npm:to-no-case@0.1.2"
    },
    "npm:uglify-js@2.3.6": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:upper-case-first@1.1.1": {
      "upper-case": "npm:upper-case@1.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:write-file-stdout@0.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:xmldom@0.1.16": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

["npm:autoprefixer-core@5.1.11", "npm:caniuse-api@1.3.1", "npm:browserslist@0.2.0"].forEach(function (dep) {
  System.map[dep]["caniuse-db/data"] = "npm:caniuse-db@1.0.30000145/data.json!";
  ["ambient-light", "apng", "atob-btoa", "audio-api", "audio", "audiotracks",
    "autofocus", "background-attachment", "background-img-opts", "battery-status",
    "blobbuilder", "bloburls", "border-image", "border-radius", "broadcastchannel",
    "calc", "canvas-blending", "canvas-text", "canvas", "channel-messaging",
    "classlist", "clipboard", "contenteditable", "contentsecuritypolicy", "cors",
    "cryptography", "css-animation", "css-appearance", "css-at-counter-style",
    "css-background-offsets", "css-backgroundblendmode", "css-boxdecorationbreak",
    "css-boxshadow", "css-canvas", "css-clip-path", "css-counters", "css-crisp-edges",
    "css-deviceadaptation", "css-exclusions", "css-featurequeries", "css-filters",
    "css-fixed", "css-font-stretch", "css-gencontent", "css-gradients", "css-grid",
    "css-hyphens", "css-image-orientation", "css-image-set", "css-logical-props", "css-masks",
    "css-media-interaction", "css-media-resolution", "css-mediaqueries", "css-mixblendmode",
    "css-opacity", "css-placeholder", "css-reflections", "css-regions", "css-repeating-gradients",
    "css-resize", "css-sel2", "css-sel3", "css-selection", "css-shapes", "css-snappoints",
    "css-sticky", "css-supports-api", "css-table", "css-text-align-last", "css-textshadow",
    "css-touch-action", "css-transitions", "css-variables", "css3-boxsizing", "css3-colors",
    "css3-cursors-newer", "css3-cursors", "css3-tabsize", "currentcolor", "custom-elements",
    "datalist", "dataset", "datauri", "details", "deviceorientation",
    "dialog", "domcontentloaded", "download", "dragndrop", "eot", "eventsource",
    "fetch", "fileapi", "filereader", "filesystem", "flexbox", "font-feature",
    "font-kerning", "font-loading", "font-size-adjust", "font-smooth",
    "font-unicode-range", "fontface", "form-validation", "forms", "fullscreen",
    "gamepad", "geolocation", "getcomputedstyle", "getelementsbyclassname", "getrandomvalues",
    "hashchange", "hidden", "high-resolution-time", "history", "html5semantic",
    "iframe-sandbox", "iframe-seamless", "ime", "imports", "indexeddb", "inline-block",
    "input-color", "input-datetime", "input-file-multiple", "input-minlength", "input-number",
    "input-pattern", "input-placeholder", "input-range", "internationalization", "intrinsic-width",
    "jpegxr", "json", "kerning-pairs-ligatures", "link-icon-png", "link-icon-svg", "matchesselector",
    "matchmedia", "mathml", "media-attribute", "menu", "midi",
    "minmaxwh", "mpeg4", "multibackgrounds", "multicolumn", "mutationobserver", "namevalue-storage",
    "nav-timing", "notifications", "object-fit", "object-observe", "offline-apps", "ogv",
    "online-status", "opus", "outline", "pagevisibility", "permissions-api", "picture",
    "png-alpha",
    "pointer-events",
    "pointer",
    "progressmeter",
    "promises",
    "proximity",
    "queryselector",
    "referrer-policy",
    "registerprotocolhandler",
    "rellist",
    "rem",
    "requestanimationframe",
    "resource-timing",
    "rtcpeerconnection",
    "ruby",
    "screen-orientation",
    "script-async",
    "script-defer",
    "serviceworkers",
    "shadowdom",
    "sharedworkers",
    "spdy",
    "speech-synthesis",
    "spellcheck-attribute",
    "sql-storage",
    "srcset",
    "stream",
    "stricttransportsecurity",
    "style-scoped",
    "svg-css",
    "svg-filters",
    "svg-fonts",
    "svg-fragment",
    "svg-html",
    "svg-html5",
    "svg-img",
    "svg-smil",
    "svg",
    "template",
    "testfeat",
    "text-decoration",
    "text-emphasis",
    "text-overflow",
    "text-size-adjust",
    "text-stroke",
    "touch",
    "transforms2d",
    "transforms3d",
    "ttf",
    "typedarrays",
    "use-strict",
    "user-select-none",
    "user-timing",
    "vibration",
    "video",
    "videotracks",
    "viewport-units",
    "wai-aria",
    "web-animation",
    "web-speech",
    "webgl",
    "webm",
    "webp",
    "websockets",
    "webvtt",
    "webworkers",
    "will-change",
    "woff",
    "woff2",
    "word-break",
    "wordwrap",
    "x-doc-messaging",
    "xhr2",
    "xhtml",
    "xhtmlsmil",
    "xml-serializer",
    "border-radius", "css-boxshadow", "css-animation", "css-transitions", "transforms2d",
    "transforms3d", "css-gradients", "css3-boxsizing", "css-filters", "multicolumn", "user-select-none",
    "flexbox", "calc", "background-img-opts", "font-feature", "border-image", "css-selection", "css-placeholder",
    "css-hyphens", "fullscreen", "css3-tabsize", "intrinsic-width", "css3-cursors-newer", "css-sticky", "pointer",
    "text-decoration", "text-size-adjust", "css-masks", "css-boxdecorationbreak", "object-fit", "css-shapes",
    "text-overflow", "text-emphasis", "css-deviceadaptation", "css-media-resolution", "css-text-align-last",
    "css-crisp-edges", "css-logical-props"].forEach(function (json) {
      System.map[dep]["caniuse-db/features-json/" + json] = "npm:caniuse-db@1.0.30000145/features-json/" + json + ".json!"
    })
})
//System.map["npm:caniuse-api@1.3.1"]["features"] = "./features"
