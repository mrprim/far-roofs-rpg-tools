import { FC } from "react";
import { TokenProps } from "./type";

type Props = Omit<TokenProps, "value"> & {
  children?: React.ReactNode
};

const Tile: FC<Props> = ({ bgClass = 'bg-dark-tan', onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className={`
        ${bgClass}
        size-24
        border-solid
        border-black 
        border-4
        rounded-lg
        flex
        justify-center
        items-center
        font-serif
        relative
      `}
    >
      {children}
    </div>

  )
}

export default Tile