import { r as registerInstance, h } from './core-a69618da.js';
import { c as contentFragment } from './content.fragment-e220039c.js';
import { r as readableNumber } from './readable-number-b11b551f.js';
var FormulaWidget = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
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
    class_1.prototype.onDataChange = function () {
        if (!this._firstDataSupplied) {
            this._firstDataSupplied = Number.isFinite(this.value);
        }
    };
    class_1.prototype.componentWillLoad = function () {
        this._firstDataSupplied = Number.isFinite(this.value);
    };
    /**
     * Default formatting function. Makes the value a readable number and
     * converts it into a string. Useful to compose with your own formatting
     * function.
     *
     * @memberof FormulaWidget
     */
    class_1.prototype.defaultFormatter = function (value) {
        return "" + readableNumber(value);
    };
    class_1.prototype.render = function () {
        if (this._isLoading()) {
            return (h("as-formula-widget-placeholder", null, this._renderHeader()));
        }
        return [
            this._renderHeader(),
            this._renderContent(),
        ];
    };
    class_1.prototype._renderHeader = function () {
        if (!this.showHeader) {
            return;
        }
        return h("as-widget-header", { header: this.heading, subheader: this.description, "is-empty": this._isEmpty(), "is-loading": this._isLoading(), error: this.error, "no-data-message": this.noDataHeaderMessage });
    };
    class_1.prototype._renderContent = function () {
        return contentFragment(false, this.error, this._isEmpty(), this.heading, this.errorDescription, this.noDataBodyMessage, this._renderValue());
    };
    class_1.prototype._renderValue = function () {
        return (h("div", { class: 'as-title as-font--medium' }, this.valueFormatter(this.value)));
    };
    class_1.prototype._isLoading = function () {
        return (!this._firstDataSupplied || this.isLoading) && !this.error;
    };
    class_1.prototype._isEmpty = function () {
        return !Number.isFinite(this.value);
    };
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "value": ["onDataChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-formula-widget{--as--formula-widget--background-color:var(--as--color--ui-01,#fff);--as--formula-widget--description--color:var(--as--color--type-02,#747474);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:228px;height:100%;overflow-y:auto;background:var(--as--formula-widget--background-color)}as-formula-widget .content{min-height:100px}as-formula-widget as-widget-header{padding-top:6px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { FormulaWidget as as_formula_widget };
