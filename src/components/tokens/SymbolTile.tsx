import { FC } from "react"
import Tile from "./Tile"
import { TokenProps } from "./type";

const SymbolTile: FC<TokenProps> = ({ value, ...rest }) =>
  <Tile {...rest}>
    <span className="text-4xl font-dicier">
      {value}
    </span>
  </Tile>

export default SymbolTile;