'use strict';

const fs = require('fs');
const mm = require('egg-mock');
const utils = require('./utils');
const assert = require('assert');
const sleep = require('mz-modules/sleep');

const file_path1 = utils.getFilePath('apps/watcher-chokidar-app/tmp.txt');
const file_path2 = utils.getFilePath('apps/watcher-chokidar-app/tmp/tmp.txt');
const file_path1_agent = utils.getFilePath('apps/watcher-chokidar-app/tmp-agent.txt');

describe('test/chokidar.test.js', () => {
  let app;

  before(done => {
    app = mm.cluster({
      baseDir: 'apps/watcher-chokidar-app',
    });
    return app.ready(done);
  });

  after(() => app.close());
  afterEach(mm.restore);

  it('should app watcher work', async () => {
    let count = 0;

    await app.httpRequest()
      .get('/app-watch')
      .expect(200)
      .expect('app watch success');


    await sleep(100);
    fs.writeFileSync(file_path1, 'aaa');
    await sleep(100);

    let res = await app.httpRequest()
      .get('/app-msg')
      .expect(200);

    let lastCount = count;
    count = parseInt(res.text);
    assert(count > lastCount);

    fs.writeFileSync(file_path2, 'aaa');
    await sleep(100);

    res = await app.httpRequest()
      .get('/app-msg')
      .expect(200);

    lastCount = count;
    count = parseInt(res.text);
    assert(count > lastCount);
  });

  it('should agent watcher work', async () => {
    let count = 0;

    await app.httpRequest()
      .get('/agent-watch')
      .expect(200)
      .expect('agent watch success');

    await sleep(100);
    fs.writeFileSync(file_path1_agent, 'bbb');
    await sleep(100);

    const res = await app.httpRequest()
      .get('/agent-msg')
      .expect(200);

    const lastCount = count;
    count = parseInt(res.text);
    assert(count > lastCount);
  });
});
