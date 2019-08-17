import Controller from '@ember/controller';

export default Controller.extend({
    base: '2019.01.01',
    step: '3M',
    stepY: '2Y',
    phase: 0,
    phaseY:0,
    actions: {
        increasePhase() {
            this.set('phase', this.incrementProperty('phase'))
        },
        decreasePhase() {
            this.set('phase',this.decrementProperty('phase'))
        },
        increasePhaseY() {
            this.set('phaseY', this.incrementProperty('phaseY'))
        }
    }
});
