/**
 * @file vagrant watcher config in unittest environment
 * @author AlphaTr <alphatr@alphatr.com>
 */

'use strict';

exports.watcher = {
  type: 'vagrant',
  vagrant: {
    usePolling: true,
    alwaysStat: true,
  },
};
