'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-894cddb9.js');

const FormulaWidgetPlaceholder = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return [
            core.h("as-placeholder", null, core.h("div", { slot: 'header' }, core.h("slot", null)), core.h("as-placeholder-bar", { width: '80px', height: '32px' }))
        ];
    }
    static get style() { return "as-formula-widget-placeholder{background-color:var(--as--color--ui-01,$color-ui-01)}as-placeholder-bar{margin-bottom:12px}"; }
};

exports.as_formula_widget_placeholder = FormulaWidgetPlaceholder;
