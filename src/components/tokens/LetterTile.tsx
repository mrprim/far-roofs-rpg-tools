import { FC } from "react"
import Tile from "./Tile"
import { TokenProps } from "./type";

const LetterTile: FC<TokenProps> = ({ value, ...rest }) =>
  <Tile {...rest}>
    <span className="text-5xl">
      {value}
    </span>
  </Tile>

export default LetterTile;