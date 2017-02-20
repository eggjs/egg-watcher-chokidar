'use strict';

const utils = require('../../../../utils');
const file_path1 = utils.getFilePath('apps/watcher-chokidar-app/tmp.txt');
const dir_path = utils.getFilePath('apps/watcher-chokidar-app/tmp');

module.exports = function(app) {
  let fileChangeCount = 0;

  function callback() {
    fileChangeCount++;
  }

  app.get('/app-watch', function* () {
    app.watcher.watch([ file_path1, dir_path ], callback);
    this.body = 'app watch success';
  });

  app.get('/app-unwatch', function* () {
    app.watcher.unwatch([ file_path1, dir_path ], callback);
    this.body = 'app unwatch success';
  });

  app.get('/app-msg', function* () {
    this.body = fileChangeCount;
  });

  app.get('/agent-watch', function* () {
    app.messenger.broadcast('agent-watch');
    this.body = yield new Promise(function(resolve) {
      app.messenger.on('agent-watch-success', function(msg) {
        resolve(msg);
      });
    });
  });

  app.get('/agent-unwatch', function* () {
    app.messenger.broadcast('agent-unwatch');
    this.body = yield new Promise(function(resolve) {
      app.messenger.on('agent-unwatch-success', function(msg) {
        resolve(msg);
      });
    });
  });

  app.get('/agent-msg', function* () {
    app.messenger.broadcast('i-want-agent-file-changed-count');
    this.body = yield new Promise(function(resolve) {
      app.messenger.on('agent-file-changed-count', function(msg) {
        resolve(msg);
      });
    });
  });
};
