import React, { useState, useEffect } from 'react'

export function App() {
  const [display, setDisplay] = useState(0)

  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)

  const [total, setTotal] = useState(0)

  function handleNumClick(event) {
    setDisplay(event.target.value)
  }

  function handleAllClear() {
    setDisplay(0)
    setFirstNum(0)
    setSecondNum(0)
    setTotal(0)
  }

  return (
    <main>
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button className="button fn" onClick={handleAllClear}>
            AC
          </button>
          <button className="button fn">&plusmn;</button>
          <button className="button fn">%</button>
          <button className="button op">&divide;</button>
          <button className="button" value={7} onClick={handleNumClick}>
            7
          </button>
          <button className="button" value={8} onClick={handleNumClick}>
            8
          </button>
          <button className="button" value={9} onClick={handleNumClick}>
            9
          </button>
          <button className="button op">*</button>
          <button className="button" value={4} onClick={handleNumClick}>
            4
          </button>
          <button className="button" value={5} onClick={handleNumClick}>
            5
          </button>
          <button className="button" value={6} onClick={handleNumClick}>
            6
          </button>
          <button className="button op">-</button>
          <button className="button" value={1} onClick={handleNumClick}>
            1
          </button>
          <button className="button" value={2} onClick={handleNumClick}>
            2
          </button>
          <button className="button" value={3} onClick={handleNumClick}>
            3
          </button>
          <button className="button op">+</button>
          <button className="button x2" value={0} onClick={handleNumClick}>
            0
          </button>
          <button className="button">.</button>
          <button className="button op">=</button>
        </div>
      </div>
    </main>
  )
}
