import React from 'react';
import { useState } from 'react';

function Button() {
    const [showAnotherButton, setShowAnotherButton] = useState(false);

    return (
        <div>
            <button
                data-testid='button'
                onClick={() => setShowAnotherButton(true)}
            >
                CLICK HERE!
            </button>
            {showAnotherButton && (
                <button data-testid='button'>
                    CLICK HERE!
                </button>
            )}
        </div>
    )
}

export default Button;
