import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chart-circle', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:chart-circle');
    assert.ok(route);
  });
});
