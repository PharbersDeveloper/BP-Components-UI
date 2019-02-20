import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dropdown', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dropdown');
    assert.ok(route);
  });
});
