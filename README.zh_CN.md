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

如果在 Samba 等网络文件系统或者 Docker，Vagrant 等虚拟机环境中；默认的 watcher 不能在文件更改后重新加载，那么就需要添加这个插件

## 安装

```bash
$ npm i egg-watcher-chokidar --save
```

## 使用

```js
// {app_root}/config/plugin.js
exports.watcherChokidar = {
  enable: true,
  package: 'egg-watcher-chokidar',
};
```

如果只是在 `local` 环境中使用，那么也可以将配置添加到 `${app_root}/config/plugin.local.js` 文件

## 配置

这个插件使用 [`chokidar`](https://github.com/paulmillr/chokidar) 来监听文件改变，可以传入 `chokidar` 的配置选项.

```js
// {app_root}/config/config.default.js
exports.watcherChokidar = {
  usePolling: true,
  alwaysStat: true,
};
```

查看 [https://github.com/paulmillr/chokidar#api](https://github.com/paulmillr/chokidar#api) 更详细信息

## 提问交流

请到 [egg issue](https://github.com/eggjs/egg/issues) 提问交流。

## License

[MIT](LICENSE)
