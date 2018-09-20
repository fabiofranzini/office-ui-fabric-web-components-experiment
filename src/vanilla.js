import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import * as TextFields from 'office-ui-fabric-react/lib/TextField';

class ouiVanillaTextField extends HTMLElement {

    static get observedAttributes() {
        return ['label', 'value'];
    }

    constructor() {
        super();
        // Events
        this.onChange = new CustomEvent('onChange', {
            bubbles: true
        });
        // **********

        // Component
        this.__component = <TextFields.TextField label={this.label} value={this.value} onChange = {(e) => e.target.dispatchEvent(this.onChange)}/>

        // *********

        // Event Listener
        this.addEventListener('onChange', function (e) {
            this.value = e.target.value;
        }, false);
        // *********
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            this[name] = newValue;
            this.render();
        }
    }

    connectedCallback() {
        this.render()
    }

    disconnectedCallback() {
        ReactDOM.unmountComponentAtNode(this);
    }

    render() {
        ReactDOM.render(this.__component, this);
    }

    // Properties
    get value() {
        return this.getAttribute('value');
    }

    set value(val) {
        // Reflect the value of the open property as an HTML attribute.
        if (val) {
            this.setAttribute('value', val);
        } else {
            this.removeAttribute('value', '');
        }

        this.render();
    }
    // **********
}

customElements.define('oui-vanilla-text-field', ouiVanillaTextField);