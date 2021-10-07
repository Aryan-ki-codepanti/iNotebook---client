import AlertContext from "./alertContext";
import React , { useState } from "react";

const AlertState = (props) => {

    const [alert , setAlert] = useState(null);

	const showAlert = (message , type)=>{
        setAlert(prev => ({
            message: message,
            type: type
        }));

        setTimeout(()=>{
            setAlert(prev => null)
        },1500);
    };

    

    return (<AlertContext.Provider value={{alert , setAlert , showAlert}}>
        {props.children}
    </AlertContext.Provider>)
};

export default AlertState;

