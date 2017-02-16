# egg-watcher-vagrant

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-watcher-vagrant.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-watcher-vagrant
[travis-image]: https://img.shields.io/travis/eggjs/egg-watcher-vagrant.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-watcher-vagrant
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-watcher-vagrant.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-watcher-vagrant?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-watcher-vagrant.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-watcher-vagrant
[snyk-image]: https://snyk.io/test/npm/egg-watcher-vagrant/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-watcher-vagrant
[download-image]: https://img.shields.io/npm/dm/egg-watcher-vagrant.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-watcher-vagrant

<!--
Description here.
-->

## Install

```bash
$ npm i egg-watcher-vagrant --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.watcher-vagrant = {
  enable: true,
  package: 'egg-watcher-vagrant',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.watcher-vagrant = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
