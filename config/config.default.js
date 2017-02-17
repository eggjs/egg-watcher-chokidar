'use strict';

const path = require('path');

/**
 * watcher options
 * @member Config#watcher
 * @property {String} type - event source type
 */
exports.watcher = {
  eventSources: {
    vagrant: path.join(__dirname, '../lib/vagrant'),
  },
};
