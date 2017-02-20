# egg-watcher-chokidar

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-watcher-chokidar.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-watcher-chokidar
[travis-image]: https://img.shields.io/travis/eggjs/egg-watcher-chokidar.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-watcher-chokidar
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-watcher-chokidar.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-watcher-chokidar?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-watcher-chokidar.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-watcher-chokidar
[snyk-image]: https://snyk.io/test/npm/egg-watcher-chokidar/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-watcher-chokidar
[download-image]: https://img.shields.io/npm/dm/egg-watcher-chokidar.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-watcher-chokidar

if you use some network file systems or other virtualization software, an use default watcher can't detected file change. you can use this plugin;

## Install

```bash
$ npm i egg-watcher-chokidar --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.watcherChokidar = {
  enable: true,
  package: 'egg-watcher-chokidar',
};
```

if you just want use it in `local` evniroment, you just add this config to `${app_root}/config/plugin.local.js` file

## Configuration

This plugin used [`chokidar`](https://github.com/paulmillr/chokidar) and you can pass `chokidar` options as following.

```js
// {app_root}/config/config.default.js
exports.watcherChokidar = {
  usePolling: true,
  alwaysStat: true,
};
```

see [https://github.com/paulmillr/chokidar#api](https://github.com/paulmillr/chokidar#api) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
