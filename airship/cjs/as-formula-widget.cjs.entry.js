'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');
const content_fragment = require('./content.fragment-1307ce73.js');
const readableNumber = require('./readable-number-3954c8a2.js');

const FormulaWidget = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        return `${readableNumber.readableNumber(value)}`;
    }
    render() {
        if (this._isLoading()) {
            return (core.h("as-formula-widget-placeholder", null, this._renderHeader()));
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
        return core.h("as-widget-header", { header: this.heading, subheader: this.description, "is-empty": this._isEmpty(), "is-loading": this._isLoading(), error: this.error, "no-data-message": this.noDataHeaderMessage });
    }
    _renderContent() {
        return content_fragment.contentFragment(false, this.error, this._isEmpty(), this.heading, this.errorDescription, this.noDataBodyMessage, this._renderValue());
    }
    _renderValue() {
        return (core.h("div", { class: 'as-title as-font--medium' }, this.valueFormatter(this.value)));
    }
    _isLoading() {
        return (!this._firstDataSupplied || this.isLoading) && !this.error;
    }
    _isEmpty() {
        return !Number.isFinite(this.value);
    }
    static get watchers() { return {
        "value": ["onDataChange"]
    }; }
    static get style() { return "as-formula-widget{--as--formula-widget--background-color:var(--as--color--ui-01,#fff);--as--formula-widget--description--color:var(--as--color--type-02,#747474);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:228px;height:100%;overflow-y:auto;background:var(--as--formula-widget--background-color)}as-formula-widget .content{min-height:100px}as-formula-widget as-widget-header{padding-top:6px}"; }
};

exports.as_formula_widget = FormulaWidget;
