'use strict';

const path = require('path');

/**
 * watcher options
 * @member Config#watcher
 * @property {String} type - event source type
 */
exports.watcher = {
  eventSources: {
    chokidar: path.join(__dirname, '../lib/chokidar'),
  },
};

exports.watcherChokidar = {
  usePolling: true,
  alwaysStat: true,
};
