import { FC } from "react"
import LetterTile from "./LetterTile"
import SymbolTile from "./SymbolTile"
import Tile from "./Tile"
import ScrabbleTile from "./ScrabbleTile"
import { TokenProps } from "./type"

type Props = {
  type: 'letter' | 'symbol' | 'scrabble',
} & TokenProps;


const Token: FC<Props> = ({ type, ...tileProps }) => {
  switch (type) {
    case 'letter':
      return <LetterTile {...tileProps} />
    case 'symbol':
      return <SymbolTile {...tileProps} />
    case 'scrabble':
      return <ScrabbleTile {...tileProps} />
    default:
      return <Tile {...tileProps} />
  }
}

export default Token;
