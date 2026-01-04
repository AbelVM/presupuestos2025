/**
 * Formula Widget
 *
 * @export
 * @class FormulaWidget
 */
export declare class FormulaWidget {
    /**
     * Numeric value to display in the widget.
     *
     * @type {number}
     * @memberof FormulaWidget
     */
    value: number;
    /**
     * Description text of the widget
     *
     * @type {string}
     * @memberof FormulaWidget
     */
    description: string;
    /**
     * If this property receives a function, it will be used to format the numbers (eg. for adding $ or €).
     *
     * @type {function (value: number)}
     * @memberof RangeSlider
     */
    valueFormatter: (value: number) => string;
    /**
     * Heading text of the widget
     *
     * @type {string}
     * @memberof FormulaWidget
     */
    heading: string;
    /**
     * If truthy, it'll render the heading and component's description. Default value is `true`.
     *
     * @type {boolean}
     * @memberof FormulaWidget
     */
    showHeader: boolean;
    /**
     * Boolean property to control the widget loading state. If true, a spinner is shown.
     */
    isLoading: boolean;
    /**
     * Text shown in the header subtitle when there's an error
     */
    error: string;
    /**
     * Extended error description, only shown when error is present
     */
    errorDescription: string;
    /**
     * Message shown in header when no data is available
     */
    noDataHeaderMessage: string;
    /**
     * Message shown in body when no data is available
     */
    noDataBodyMessage: string;
    private _firstDataSupplied;
    onDataChange(): void;
    componentWillLoad(): void;
    /**
     * Default formatting function. Makes the value a readable number and
     * converts it into a string. Useful to compose with your own formatting
     * function.
     *
     * @memberof FormulaWidget
     */
    defaultFormatter(value: number): string;
    render(): any;
    private _renderHeader;
    private _renderContent;
    private _renderValue;
    private _isLoading;
    private _isEmpty;
}
