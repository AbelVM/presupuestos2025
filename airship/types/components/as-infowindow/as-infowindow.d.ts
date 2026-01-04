export declare class Infowindow {
    src: string;
    /**
     * Width of the content. This should be a valid
     * width CSS value.
     *
     * @type {string}
     * @memberof Infowindow
     */
    width: string;
    /**
     * Height of the content. This should be a valid
     * height CSS value.
     *
     * @type {string}
     * @memberof Infowindow
     */
    height: string;
    private element;
    render(): any;
    componentDidLoad(): void;
    private _renderStandarInfowindow;
    private _renderImageInfoWindow;
    private _setupHook;
}
