import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
type SalesProps = {
    country: string,
    price: number,
    total: number,
    spend: number,
    color: string
}
const Sales = ({country , price , total , spend , color}:SalesProps) => {
    return (
        <div className=" mb-4 d-flex justify-content-between">
            <div className="d-flex align-items-center gap-2">
                <div style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    textAlign: "center",
                    lineHeight: "45px",
                    background: color,
                    color: "white",
                    fontWeight: "bold"
                }}>{country}</div>
                <div>
                    <p className="fw-bold">${price}k <span className={total > 0 ? "text-success" : "text-danger"} style={{ fontSize: "13px" }}><ArrowDropUpIcon />{total}%</span></p>
                    <span style={{ fontSize: "12px" }}>{country}</span>
                </div>
            </div>
            <div>
                <p className="fw-bold">{spend}k</p>
                <p >Sales</p>
            </div>
        </div>
    )
}

export default Sales
