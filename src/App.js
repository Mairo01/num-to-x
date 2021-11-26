import React, { useState } from "react";
import Field from './Field';

function App(props) {
  const [gameResult, setGameResult] = useState()
  const [pickedValue, setPickedValue] = useState(0)
  const [isPickPhase, setIsPickPhase] = useState(false)
  const [fields, setFields] = useState(props.fields)
  const [time, setTime] = useState(props.time)

  const fieldList = fields.map(field => (
    <Field
      id = {field.id}
      value = {field.value}
      key = {field.id}
      isPickPhase = {isPickPhase}
      displayedValue = {field.displayedValue}
      displayValue = {displayValue}
      checkWin = {checkWin}
      isDisabled = {field.isDisabled}
    />
  ))

  function startGame() {
    hideValues()
    setGameResult()
    setPickedValue(0)
    setIsPickPhase(!isPickPhase)

    if (!isPickPhase) {
      setTimeout(() => {
        setIsPickPhase(isPickPhase)
      }, time)
    }
  }

  function displayValue(id) {
    const newFields = fields.map(field => {
      if (field.id === id) {
        return {...field, displayedValue: field.value, isDisabled: true}
      }
      return field
    })
    
    setFields(newFields)
  }

  function hideValues() {
    const newFields = fields.map(field => {
      return {...field, displayedValue: "", isDisabled: false}
    })

    setFields(fisherYatesShuffle(newFields))
  }

  function checkWin(value) {
    const correctValue = pickedValue + 1
    
    if (correctValue !== value) {
      return setGameResult("You Lost")
    }
    if (correctValue === fields.length) {
      return setGameResult("You Won")
    }

    setPickedValue(value)
  }

  function changeTime(newTime) {
    if (newTime >= 200 && newTime <= 3000) {
      localStorage.setItem('time', newTime)
      setTime(newTime)
    }
  }

  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor( Math.random() * (i + 1) );
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr
  }

  return(
    <>
    <div className="play">
      <div className="play-difficulty">
        <p className="play-difficulty-modifier" onClick={() => changeTime(time - 100)}>−</p>
        <p className="play-difficulty-display">{time + "ms"}</p>
        <p className="play-difficulty-modifier" onClick={() => changeTime(time + 100)}>+</p>
      </div>
      <button className="play-btn" onClick={() => startGame()}>
        Play
      </button>
      
    </div>
    <div className="board">
        {fieldList}
    </div>
    <div className="result">
      <p className="result-text">{gameResult}</p>
    </div>
    </>
  )
}

export default App;