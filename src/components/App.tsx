import { FC, useState } from "react"
import Token from "./tokens/Token"
import { scrabble } from '@mrprim/tile-bag'

const bag = scrabble();

const App: FC = () => {
  const [state, setState] = useState<string[]>([]);


  return (
    <div className="min-h-screen bg-tan text-black flex items-center justify-between flex-col">
      <Token type="letter" value="+" onClick={() => {
        const drawn = bag.drawOne();

        setState((s) => [...s, drawn].filter(x => !!x))
      }} />
      <div className="flex row flex-wrap gap-2 justify-center">
        {state.map((s, i) => <Token key={i} type='scrabble' value={s} />)}
      </div>
    </div>
  )
}

export default App
