import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | theme-colors', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:theme-colors');
    assert.ok(controller);
  });
});
