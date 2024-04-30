import './App.css'
import Button from "./components"
import { useState } from "react"

function App() {
    const [str, setStr] = useState<string>("a")

    return (
        <div className="App">
            <Button onClick={() => setStr(str + "a")}>add 'a'</Button>
            <label>{str}</label>
        </div>
    )
}

export default App
