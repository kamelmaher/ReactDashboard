import IconComponent from "../Props/IconComponents"
type StatisticProps = {
    text: string,
    price: number,
    icon: React.ReactNode,
    color: string
}
const Statistic = ({ color, text, price, icon }: StatisticProps) => {
    return (
        <div className="col-sm-3 p-2 d-flex gap-2 mb-3">
            <div className="sales-icon" style={{ background: color, width: "fit-content", borderRadius: "6px" }}>
                <IconComponent icon={icon} />
            </div>
            <div>
                <p style={{ fontSize: "13px" }}>{text}</p>
                <p className="fw-bold ">${price}K</p>
            </div>
        </div>
    )
}

export default Statistic
