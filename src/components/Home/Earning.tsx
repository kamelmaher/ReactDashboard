import ImgComponent from "../Props/ImgComponent"
type EarningProps = {
    name: string , 
    amount: number,
    img: string
}
const Earning = ({name , amount , img}:EarningProps) => {
    return (
        <div className="d-flex align-items-center justify-content-between  mb-3">
            <div className="d-flex align-items-center gap-2">
                <div>
                    <ImgComponent width={20} src={img} />
                </div>
                <div>
                    <p>{name}</p>
                    <span style={{ fontSize: "10px" }}>Vuejs, React & HTML</span>
                </div>
            </div>
            <div>
                <p>{amount}</p>
                <p className="loader"></p>
            </div>
        </div>
    )
}

export default Earning
