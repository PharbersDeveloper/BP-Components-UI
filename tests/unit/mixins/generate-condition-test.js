import EmberObject from '@ember/object';
import GenerateConditionMixin from 'bp-components-ui/mixins/generate-condition';
import { module, test } from 'qunit';

module('Unit | Mixin | generate-condition', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let GenerateConditionObject = EmberObject.extend(GenerateConditionMixin);
    let subject = GenerateConditionObject.create();
    assert.ok(subject);
  });
});
