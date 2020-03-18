import React from 'react'

import './CoolButton.scss'

const CoolButton = ({text}) => {
    return (
        <div className="button-container">
            <button className="cool-button">
                {text}
            </button>
        </div>
    )
}

export default CoolButton