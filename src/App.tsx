import './App.css'
import Button from "./components/Button.tsx"
import Chess from "./chess/chess.ts"

function App() {
    const chess = new Chess(3)
    console.log(chess.test)

    return (
        <div className="App">
            <Button onClick={() => console.log('bruh')}>bruh</Button>
        </div>
    )
}

export default App
