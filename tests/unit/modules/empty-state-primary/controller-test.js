import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | empty-state-primary', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:empty-state-primary');
    assert.ok(controller);
  });
});
