import React from "react";
import PropTypes from 'prop-types'

export default function Alerts(props) {

const capitalizeFirstLetter=(word)=>{
    let wordLower=word.toLowerCase();
    return word.charAt(0).toUpperCase()+wordLower.slice(1);
};

  return (
    <div style={{height: '50px'}}>
      {/* //The syntax below checks whether the alert object that we receive is not null and then only render the corresponding html */}
      {props.alert!==null && <div className={`alert alert-${props.alert.alertType}`} role="alert">
        <strong>{capitalizeFirstLetter(props.alert.alertType)}: </strong>{props.alert.alertMessage}
      </div>}
    </div>

  );
}

Alerts.propTypes={
    alert:PropTypes.object
}

Alerts.defaultProps={
    alert:null
}