import React from 'react';

export default (props) =>{

    return (
        <div className='from-group'>
            <label>{props.label}</label>
            <input type="text" className='form-control' {...props}/>
        </div>
    )
}