import { useAppSelector } from "../store/store"
const MainStyle = () => {
    const dark = useAppSelector(state => state.theme.dark)
    const style = {
        background: dark ? "#28243d" : "#f4f5fa",
        color: dark ? "#e7e3fcde" : "#3a3541de",
        boxShadow: "#1311201a 0px 2px 10px 0px"
    }
    return style
}

export default MainStyle;


