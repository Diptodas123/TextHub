import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container my-3`} role="alert">
            <strong>{capitalize(props.alert.type)}: {props.alert.msg}</strong>
        </div>
    )
}

export default Alert;