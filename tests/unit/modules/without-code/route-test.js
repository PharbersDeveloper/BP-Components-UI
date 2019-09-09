import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | without-code', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:without-code');
    assert.ok(route);
  });
});
