import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | empty-state-no-button', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:empty-state-no-button');
    assert.ok(route);
  });
});
