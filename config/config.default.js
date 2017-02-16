/**
 * @file default vagrant watcher config
 * @author AlphaTr <alphatr@alphatr.com>
 */

'use strict';

const path = require('path');

/**
 * watcher options
 * @member Config#watcher
 * @property {string} type - event source type
 */
exports.watcher = {
  eventSources: {
    vagrant: path.join(__dirname, '../lib/vagrant'),
  },
};
