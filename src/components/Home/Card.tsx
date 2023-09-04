import React from "react"
import MainStyle from "../MainStyle"
import { useAppSelector } from "../../store/store"

type CardProps = {
    children: React.ReactNode
}
const Card = ({children}:CardProps) => {
    const style = MainStyle()
    const dark = useAppSelector(state => state.theme.dark)
    return (
        <div style={{ ...style, background: dark ? "#312d4b" : "white"}} className="card-item p-3 " >
            {children}
        </div>
    )
}

export default Card
