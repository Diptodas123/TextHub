import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:"55px"}}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
                    <strong>{capitalize(props.alert.type)}: {props.alert.msg}</strong>
                </div>
            }
        </div>
    )
}

export default Alert;