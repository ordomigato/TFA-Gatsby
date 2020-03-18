import React from 'react'

import './CoolButton.scss'

const CoolButton = ({text, type}) => {
    return (
        <div className="button-container">
            <button className="cool-button" type={type}>
                {text}
            </button>
        </div>
    )
}

export default CoolButton