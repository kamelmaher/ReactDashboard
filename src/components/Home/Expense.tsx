import IconComponent from '../Props/IconComponents';
// Icons
import MoreVertIcon from '@mui/icons-material/MoreVert';

export type ExpenseProps = {
    text: string,
    price: number,
    total: number,
    icon: React.ReactNode
    color: string
}
const Expense = ({ text, price, total, icon, color }: ExpenseProps) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div style={{
                    background: color,
                    width: "40px",
                    height: "40px",
                    textAlign: "center",
                    lineHeight: "40px",
                    borderRadius: "50%",
                    color: "white"
                }}>
                    <IconComponent icon={icon} />
                </div>
                <MoreVertIcon />
            </div>
            <p className='fw-semibold mb-3'>{text}</p>
            <p className='fs-5 d-flex align-items-center gap-2'>${price}k <span className={total > 0 ? 'text-success fw-semibold' : "text-danger fw-semibold"} style={{ fontSize: "12px" }}>{total}%</span></p>
            <span  style={{ fontSize: "12px" }}>Weekly Profit</span>
        </div>
    )
}

export default Expense
