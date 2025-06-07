import { useReducer } from "react";

type State = { count: number }
type Action = { type: "increment" | "decrement" }
//type Action = { type: string } // En caso de poner asi puedo poner asi podria poner incrementtt y no es valido


const reducer = (state: State, action: Action): State => {
  switch(action.type){
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;   
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={()=> dispatch({type: "increment"})}>Increment</button>
      <button onClick={()=> dispatch({type: "decrement"})}>Decrement</button>
    </div>
  )
}

export default Counter;