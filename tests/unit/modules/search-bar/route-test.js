import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | search-bar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:search-bar');
    assert.ok(route);
  });
});
