/**
 * @description       : 
 * @author            : Sourabh Bhattacharjee
 * @group             : 
 * @last modified on  : 08-15-2023
 * @last modified by  : Sourabh Bhattacharjee 
 * Modifications Log
 * Ver   Date         Author                  Modification
 * 1.0   08-15-2023   Sourabh Bhattacharjee   Initial Version
**/
import { LightningElement, track, api } from 'lwc';

export default class SpinnerWithText extends LightningElement {
    @api helpText = 'Please wait while loading...';
    @api size = 'medium';
    @api variant = 'base';
    @api hasRendered = false;
    @api showSpinner = false;
    @track spinnerClass;

    connectedCallback() {
        if (this.hasRendered == false) {
            this.hasRendered = true;
            if (this.size == 'small') {
                this.spinnerClass = 'spinner-small';
            } else if (this.size == 'medium') {
                this.spinnerClass = 'spinner-medium';
            } else if (this.size == 'large') {
                this.spinnerClass = 'spinner-large';
            }
        }
    }
}