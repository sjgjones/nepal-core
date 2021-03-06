export interface AlDynamicFormControlElementOptions {
    label: string;
    value: string;
    disabled?: boolean;
}

export interface AlDynamicFormControlInputResponderOptions {
    type?: 'input' | 'textarea';
    buttonLabel?: string;
    options?: {
        group: string;
        options: {
            label: string;
            description?: string;
            value: string;
        }[];
    }[];
}

export interface AlDynamicFormControlElement {
    updateNotAllowed?: boolean;
    type: string;
    property: string;
    label?: string;
    secret?: string;
    description?: string;
    descriptionOnUpdate?: string;
    defaultValue?: string | string[] | boolean | object;
    validationPattern?: string;
    optional?: boolean;
    options?: AlDynamicFormControlElementOptions[];
    editorOptions?: any;
    responderOptions?: AlDynamicFormControlInputResponderOptions;
    placeholder?: string;
    aboveDescription?: string;
    belowDescription?: string;
    patternError?: string;
    requiredError?: string;
    dataType?: string;
    joinExpresion?: string;
    splitExpresion?: RegExp | string;
}
