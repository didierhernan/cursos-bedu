import React from 'react'

const Herobox = ({className, name, heroName, children, ...props}) => {
    return (
        <div className={className}>
            <h1> Mi nombre es : {name} y yo soy {heroName} </h1>
            {children}
        </div>
    )
}

export default Herobox
