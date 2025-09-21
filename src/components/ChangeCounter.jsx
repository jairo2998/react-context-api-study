//alterando contexto
import { useContext } from "react";
import {CounterContext} from "../context/CounterContext";

import React from 'react'

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h1>ChangeCounter</h1>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
    </div>
  )
}

export default ChangeCounter