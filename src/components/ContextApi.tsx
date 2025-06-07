import { useContext, createContext, useState } from "react";

type ThemeContextType = {
  theme:  "light" | "dark";
  toggleTheme: ()=> void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

function ThemeProvider({children}: {children: React.ReactNode }) {

  const [theme, setTheme] = useState("light")

  const toggleTheme = ()=>{
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton(){
  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#FFF" : "#333",
        color: theme==="light" ? "#000" : "#FFF"
      }}
    >
      Cambiar tema
    </button>
  )
}