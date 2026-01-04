import { r as registerInstance, h } from './core-a69618da.js';

const FormulaWidgetPlaceholder = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("as-placeholder", null, h("div", { slot: 'header' }, h("slot", null)), h("as-placeholder-bar", { width: '80px', height: '32px' }))
        ];
    }
    static get style() { return "as-formula-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}as-placeholder-bar{margin-bottom:12px}"; }
};

export { FormulaWidgetPlaceholder as as_formula_widget_placeholder };
