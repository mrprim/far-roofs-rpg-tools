import { FC } from "react"
import Tile from "./Tile"
import { TokenProps } from "./type";

const POINTS = {
  "a": 1,
  "b": 3,
  "c": 3,
  "d": 2,
  "e": 1,
  "f": 4,
  "g": 2,
  "h": 4,
  "i": 1,
  "j": 8,
  "k": 5,
  "l": 1,
  "m": 3,
  "n": 1,
  "o": 1,
  "p": 3,
  "q": 10,
  "r": 1,
  "s": 1,
  "t": 1,
  "u": 1,
  "v": 4,
  "w": 4,
  "x": 8,
  "y": 4,
  "z": 10,
} as const;

const ScrabbleTile: FC<TokenProps> = ({ value, ...rest }) => {
  const points = POINTS[value?.toLowerCase()];

  return (
    <Tile {...rest}>
      <span className="text-5xl">
        {value === 'BLANK' ? '' : value}
      </span>
      {points && (
        <div className="absolute bottom-1 right-2 align-right text-2xl">
          {points}
        </div>
      )}
    </Tile>
  )
}

export default ScrabbleTile;