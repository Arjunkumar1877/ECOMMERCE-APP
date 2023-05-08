import React from 'react'

const CustomInput = (props) => {
    const {type, name, placeholder, classsname} = props


    return (
        <div>
            <input type={type} name={name} placeholder={placeholder} className={`form-control ${classsname}`} />
        </div>
    )
}

export default CustomInput

