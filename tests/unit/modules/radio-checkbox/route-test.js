import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | radio-checkbox', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:radio-checkbox');
    assert.ok(route);
  });
});
