import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        changeRadar(axisName) {
            this.set('axisName',axisName)
        }
    }
});
