import { h } from "@stencil/core";
export class Infowindow {
    render() {
        const styleWidth = this.width
            ? { width: this.width }
            : undefined;
        const styleHeight = this.height
            ? { height: this.height }
            : undefined;
        const style = Object.assign({}, styleWidth, styleHeight);
        return this.element.childElementCount === 0 && this.src
            ? this._renderImageInfoWindow(style)
            : this._renderStandarInfowindow(style);
    }
    componentDidLoad() {
        if (this.src) {
            this._setupHook();
        }
    }
    _renderStandarInfowindow(style = {}) {
        return (h("div", { class: 'as-infowindow', style: style },
            this.src && h("img", { src: this.src }),
            h("div", { class: 'as-infowindow__content' },
                h("slot", null)),
            h("div", { class: 'as-infowindow__hook' })));
    }
    _renderImageInfoWindow(style = {}) {
        return (h("div", { class: 'as-infowindow', style: style },
            h("div", { class: 'as-infowindow__media' },
                h("img", { src: this.src })),
            h("div", { class: 'as-infowindow__imageHook' },
                h("div", { class: 'as-infowindow__imageHook--inner' },
                    h("img", { src: this.src, style: style })))));
    }
    _setupHook() {
        const imageElement = this.element.querySelector('.as-infowindow__media img');
        if (!imageElement) {
            return;
        }
        imageElement.onload = () => {
            const imageHeight = imageElement.offsetHeight;
            const media = this.element.querySelector('.as-infowindow__media');
            const hook = this.element.querySelector('.as-infowindow__imageHook img');
            const offset = imageHeight - 18;
            media.style.height = `${offset}px`;
            hook.style.marginTop = `-${offset}px`;
        };
    }
    static get is() { return "as-infowindow"; }
    static get originalStyleUrls() { return {
        "$": ["./as-infowindow.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["as-infowindow.css"]
    }; }
    static get properties() { return {
        "src": {
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
                "text": ""
            },
            "attribute": "src",
            "reflect": false
        },
        "width": {
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
                        "text": "Infowindow",
                        "name": "memberof"
                    }],
                "text": "Width of the content. This should be a valid\nwidth CSS value."
            },
            "attribute": "width",
            "reflect": false
        },
        "height": {
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
                        "text": "Infowindow",
                        "name": "memberof"
                    }],
                "text": "Height of the content. This should be a valid\nheight CSS value."
            },
            "attribute": "height",
            "reflect": false
        }
    }; }
    static get elementRef() { return "element"; }
}
