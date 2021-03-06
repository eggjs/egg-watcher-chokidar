'use strict';

const Base = require('sdk-base');
const debug = require('debug')('egg-watcher-chokidar');
const chokidar = require('chokidar');

/**
 * Class watcher event source for chokidar
 * @extends Base
 */
class ChokidarEventSource extends Base {
  /**
   * @param {Object} options - watcher options
   */
  constructor(options = {}) {
    super();

    this.options = options;
    this._handler = null;
    this.ready(true);
  }

  /**
   * add file or directory to watch
   * @param {String} path - watch file or directory
   */
  watch(path) {
    debug('start watch path: %s', path);
    if (this._handler) {
      this._handler.add(path);
    } else {
      this._handler = chokidar.watch(path, this.options)
        .on('add', this._onWatchChange.bind(this, 'add'))
        .on('change', this._onWatchChange.bind(this, 'change'))
        .on('error', this.emit.bind(this, 'error'))
        .on('all', (event, path) => debug('chokidar %s %s', event, path));
    }
  }

  /**
   * remove file or directory from watcher
   * @param {String} path - unwatch file or directory
   */
  unwatch(path) {
    debug('remove watch path: %s', path);
    if (!path || !this._handler) return;

    this._handler.unwatch(path);
  }

  /**
   * watch event call
   * @param {String} event - event type: add or change
   * @param {String} path - changed file path
   * @param {fs.Stats} stat - file stat object
   */
  _onWatchChange(event, path, stat) {
    this.emit('change', { path, event, stat });
  }
}

module.exports = ChokidarEventSource;
