import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | empty-state-primary', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:empty-state-primary');
    assert.ok(route);
  });
});
