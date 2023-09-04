import MainStyle from "../MainStyle"

const Info = () => {
    // Style
    const style = MainStyle()
    return (
        <div className="p-2 info" style={{color: style.color}}>
            {/* text Area */}
            <div className="mb-5">
                <label className="pb-1">Bio</label>
                <textarea className="form-control" id="floatingTextarea"  rows={3}></textarea>
            </div>

            {/* First Two Inputs */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="pe-md-4">
                        <label htmlFor="">Date Birth</label>
                        <input type="text" className="form-control p-2" />
                    </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                    <label htmlFor="">Phone</label>
                        <input type="number" className="form-control p-2" />
                </div>
            </div>

            {/* Second Two Inputs */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="pe-md-4">
                        <label htmlFor="">Website</label>
                        <input type="text" className="form-control p-2" />
                    </div>          
                </div>
                <div className="col-md-6 mb-4 mb-md-0">
                    <label htmlFor="">Country</label>
                    <select className="form-select p-2">
                        <option value="USA">USA</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Egypt">Egypt</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Saudi">Saudi</option>
                    </select>
                </div>
            </div>

            {/* Last Two Inputs */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="pe-md-4">
                        <label htmlFor="">Language</label>
                        <select className="form-select p-2">
                            <option value="Endlish">English</option>
                            <option value="Palestine">Palestine</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Saudi">Saudi</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center mb-4 mb-md-0">
                    <label htmlFor="" className="mb-2">Gender</label>
                    <div className="d-flex gap-3">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                Other
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="account-btn m-auto mt-3 ">
                <button className="me-3 rounded">Save Changes</button>
                <button className="btn btn-outline-secondary">Reset</button>
            </div>
        </div>
    )
}

export default Info
