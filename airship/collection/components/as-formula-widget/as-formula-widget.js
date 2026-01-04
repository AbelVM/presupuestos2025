import { h } from "@stencil/core";
import readableNumber from '../../utils/readable-number';
import contentFragment from '../common/content.fragment';
/**
 * Formula Widget
 *
 * @export
 * @class FormulaWidget
 */
export class FormulaWidget {
    constructor() {
        /**
         * If this property receives a function, it will be used to format the numbers (eg. for adding $ or €).
         *
         * @type {function (value: number)}
         * @memberof RangeSlider
         */
        this.valueFormatter = this.defaultFormatter;
        /**
         * If truthy, it'll render the heading and component's description. Default value is `true`.
         *
         * @type {boolean}
         * @memberof FormulaWidget
         */
        this.showHeader = true;
        /**
         * Boolean property to control the widget loading state. If true, a spinner is shown.
         */
        this.isLoading = false;
        /**
         * Text shown in the header subtitle when there's an error
         */
        this.error = '';
        /**
         * Extended error description, only shown when error is present
         */
        this.errorDescription = '';
        /**
         * Message shown in header when no data is available
         */
        this.noDataHeaderMessage = 'NO DATA AVAILABLE';
        /**
         * Message shown in body when no data is available
         */
        this.noDataBodyMessage = 'There is no data to display.';
        this._firstDataSupplied = false;
    }
    onDataChange() {
        if (!this._firstDataSupplied) {
            this._firstDataSupplied = Number.isFinite(this.value);
        }
    }
    componentWillLoad() {
        this._firstDataSupplied = Number.isFinite(this.value);
    }
    /**
     * Default formatting function. Makes the value a readable number and
     * converts it into a string. Useful to compose with your own formatting
     * function.
     *
     * @memberof FormulaWidget
     */
    defaultFormatter(value) {
        return `${readableNumber(value)}`;
    }
    render() {
        if (this._isLoading()) {
            return (h("as-formula-widget-placeholder", null, this._renderHeader()));
        }
        return [
            this._renderHeader(),
            this._renderContent(),
        ];
    }
    _renderHeader() {
        if (!this.showHeader) {
            return;
        }
        return h("as-widget-header", { header: this.heading, subheader: this.description, "is-empty": this._isEmpty(), "is-loading": this._isLoading(), error: this.error, "no-data-message": this.noDataHeaderMessage });
    }
    _renderContent() {
        return contentFragment(false, this.error, this._isEmpty(), this.heading, this.errorDescription, this.noDataBodyMessage, this._renderValue());
    }
    _renderValue() {
        return (h("div", { class: 'as-title as-font--medium' }, this.valueFormatter(this.value)));
    }
    _isLoading() {
        return (!this._firstDataSupplied || this.isLoading) && !this.error;
    }
    _isEmpty() {
        return !Number.isFinite(this.value);
    }
    static get is() { return "as-formula-widget"; }
    static get originalStyleUrls() { return {
        "$": ["./as-formula-widget.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-formula-widget.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{number}",
                        "name": "type"
                    }, {
                        "text": "FormulaWidget",
                        "name": "memberof"
                    }],
                "text": "Numeric value to display in the widget."
            },
            "attribute": "value",
            "reflect": false
        },
        "description": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "FormulaWidget",
                        "name": "memberof"
                    }],
                "text": "Description text of the widget"
            },
            "attribute": "description",
            "reflect": false
        },
        "valueFormatter": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "(value: number) => string",
                "resolved": "(value: number) => string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{function (value: number)}",
                        "name": "type"
                    }, {
                        "text": "RangeSlider",
                        "name": "memberof"
                    }],
                "text": "If this property receives a function, it will be used to format the numbers (eg. for adding $ or \u20AC)."
            },
            "defaultValue": "this.defaultFormatter"
        },
        "heading": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{string}",
                        "name": "type"
                    }, {
                        "text": "FormulaWidget",
                        "name": "memberof"
                    }],
                "text": "Heading text of the widget"
            },
            "attribute": "heading",
            "reflect": false
        },
        "showHeader": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{boolean}",
                        "name": "type"
                    }, {
                        "text": "FormulaWidget",
                        "name": "memberof"
                    }],
                "text": "If truthy, it'll render the heading and component's description. Default value is `true`."
            },
            "attribute": "show-header",
            "reflect": false,
            "defaultValue": "true"
        },
        "isLoading": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Boolean property to control the widget loading state. If true, a spinner is shown."
            },
            "attribute": "is-loading",
            "reflect": false,
            "defaultValue": "false"
        },
        "error": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Text shown in the header subtitle when there's an error"
            },
            "attribute": "error",
            "reflect": false,
            "defaultValue": "''"
        },
        "errorDescription": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Extended error description, only shown when error is present"
            },
            "attribute": "error-description",
            "reflect": false,
            "defaultValue": "''"
        },
        "noDataHeaderMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Message shown in header when no data is available"
            },
            "attribute": "no-data-header-message",
            "reflect": false,
            "defaultValue": "'NO DATA AVAILABLE'"
        },
        "noDataBodyMessage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Message shown in body when no data is available"
            },
            "attribute": "no-data-body-message",
            "reflect": false,
            "defaultValue": "'There is no data to display.'"
        }
    }; }
    static get states() { return {
        "_firstDataSupplied": {}
    }; }
    static get watchers() { return [{
            "propName": "value",
            "methodName": "onDataChange"
        }]; }
}
