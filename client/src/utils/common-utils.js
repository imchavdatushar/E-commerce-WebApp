

import React from 'react';

function addEllipsis(text) {
    if(text.length > 50) {
        return text.substring(0, 50) + '...';
    }
}

export default addEllipsis;
