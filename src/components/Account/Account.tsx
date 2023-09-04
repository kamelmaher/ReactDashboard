import logo from "../../../img/avatarImg.png"
import AccountForm from "./AccountForm"
const Account = () => {
    return (
        <div>
            <div className="row gap-4">
                <div className="col-md-6">
                    <img src={logo} alt="" className="rounded" width={120}/>
                </div>
                <div className="d-flex col-md-6 flex-column justify-content-around">
                    <div className="account-btn">
                        <button className="rounded me-3">Upload New Photo</button>
                        <button className="btn btn-outline-danger">Reset</button>
                    </div>
                    <p style={{fontSize: "15px"}}>Allowed PNG or JPEG. Max size of 800K.</p>
                </div>
            </div>
            <AccountForm />
        </div>
    )
}

export default Account
