type ButtonProps = {
  onClick: () => void; //queremos que se ejecute la funcion pero no que se retorne algo como tal
  label: string | number; // me puede llegar un string o un numero
}

const Button = ({onClick, label}: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>
}

export default Button;