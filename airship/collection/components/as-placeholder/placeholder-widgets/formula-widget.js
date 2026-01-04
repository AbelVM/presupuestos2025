import { h } from "@stencil/core";
export class FormulaWidgetPlaceholder {
    render() {
        return [
            h("as-placeholder", null,
                h("div", { slot: 'header' },
                    h("slot", null)),
                h("as-placeholder-bar", { width: '80px', height: '32px' }))
        ];
    }
    static get is() { return "as-formula-widget-placeholder"; }
    static get styles() { return "as-formula-widget-placeholder {\n      background-color: var(--as--color--ui-01, $color-ui-01);\n    }\n\n    as-placeholder-bar {\n      margin-bottom: 12px;\n    }"; }
}
