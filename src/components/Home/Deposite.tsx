import ImgComponent from "../Props/ImgComponent"
type DepositProps = {
    company: string,
    desc: string,
    amount: number,
    src: string
}
const Deposite = ({ company, desc, amount, src }: DepositProps) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-3">
                <div>
                    <ImgComponent width={30} src={src} />
                </div>
                <div>
                    <p className="fw-semibold">{company}</p>
                    <p style={{fontSize: "13px"}}>{desc}</p>
                </div>
            </div>
            <p className={`fw-semibold ${amount > 0 ? "text-success" : "text-danger"}`} style={{ fontSize: "17px" }}>{amount > 0 ? "+" : ""}${amount}</p>
        </div>
    )
}

export default Deposite
