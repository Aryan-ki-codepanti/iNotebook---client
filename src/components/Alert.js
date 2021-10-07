import React from 'react'

export default function Alert(props) {

    const capitalize = (word)=>{
        if (word === "danger"){
            return "Error";
        }
        return  `${word[0].toUpperCase()}${word.toLowerCase().slice(1,)}`;
    }
    return (

        <div style={{height: "50px"}}>
            {props.alert &&
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
            </div>}
        </div>
    )
}
