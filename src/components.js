import React, {
    Component
} from 'react';
import {
    register
} from 'web-react-components';
import {
    initializeIcons
} from 'office-ui-fabric-react/lib/Icons';
import * as Buttons from 'office-ui-fabric-react/lib/Button';
import * as TextFields from 'office-ui-fabric-react/lib/TextField';
import * as Ratings from 'office-ui-fabric-react/lib/Rating';

initializeIcons();

// Buttons.DefaultButton
register(
    Buttons.DefaultButton,
    'oui-default-button',
    [
        '!!primary',
        'text',
        'onClick()'
    ], 
    { }, 
    {
        useShadowDOM: false
    }
);
// ----------

// TextFields.TextField
const ouiTextField = ({ label, value, onChange }) => (
    <TextFields.TextField label={label} value={value} onChange={onChange} />
);

register(
    ouiTextField, 
    'oui-text-field', 
    [
        'label', 
        'value', 
        'onChange()'
    ], 
    { },
    { 
        useShadowDOM: false
    }
);
// ----------

// Ratings.Rating
register(
    Ratings.Rating, 
    'oui-rating', 
    [
        'min', 
        'max', 
        'size', 
        'rating', 
        'onChanged()', 
        'onFocus()', 
        'onBlur()'
    ],
    { },
    { 
        useShadowDOM: false 
    }
);
// ----------