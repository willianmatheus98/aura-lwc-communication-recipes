import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(event) {
        this.startCounter = (event.target.value) ? parseInt(event.target.value) : 0;
    }

    handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
    }
}