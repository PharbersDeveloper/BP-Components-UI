import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chart-radar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:chart-radar');
    assert.ok(route);
  });
});
