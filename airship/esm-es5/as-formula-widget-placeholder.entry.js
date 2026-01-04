import { r as registerInstance, h } from './core-a69618da.js';
var FormulaWidgetPlaceholder = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
    }
    class_1.prototype.render = function () {
        return [
            h("as-placeholder", null, h("div", { slot: 'header' }, h("slot", null)), h("as-placeholder-bar", { width: '80px', height: '32px' }))
        ];
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return "as-formula-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}as-placeholder-bar{margin-bottom:12px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { FormulaWidgetPlaceholder as as_formula_widget_placeholder };
