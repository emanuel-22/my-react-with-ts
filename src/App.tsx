import Button from './components/Button'
import Counter from './components/Counter'
import './App.css'

// con any estamos diciendo que puede ser cualquier cosa
function greet(name: string): string {
  return `Hola ${name}`
}


function App() {

  const handleClick = ()=> alert("Ya estoy clickeado")
  // return <Button onClick={handleClick} label="Click me"/>
  // return <Button onClick={handleClick} label={1}/> // si pongo true me sale error
  console.log(greet("Ema"))
  
  return(
    <>
      <Button onClick={handleClick} label="Click me"/> 
      <Counter/> 
    </>
  ) 
}

export default App
