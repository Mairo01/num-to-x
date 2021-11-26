import React from "react";

export default function Field(props) {
  const memorizeTemplate = (
    <button className={`field field-${props.id}`}>
      {props.value}
    </button>
  )

  const pickTemplate = (
    <button 
      disabled={props.isDisabled}
      className={`field ${props.id}`}
      onClick={() => { 
        props.displayValue(props.id); 
        props.checkWin(props.value)
      }}
    >
      {props.displayedValue}
    </button>
  )

  return(
    props.isPickPhase ? memorizeTemplate : pickTemplate
  )
}