import React from 'react';

export const Row = (props) =>{
    return (<div className={`row${props.justification?` justify-content-${props.justification}`:""}`}>
        {props.children}
    </div>)
}

export const Col = (props) =>{
    return (
        <div className={`col${props.mobile?` col-sm-${props.mobile}`:''}${props.tablet?` col-md-${props.tablet}`:''}${props.desktop?` col-lg-${props.desktop}`:''}${props.className?` ${props.className}`:""}`}>
            {props.children}
        </div>
    )
}