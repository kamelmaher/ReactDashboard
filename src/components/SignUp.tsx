import Card from "./Home/Card"
import logo from "../../img/logo.png"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div className="row justify-content-center">
            <div className="col-md-5 col-lg-6">
                <Card>
                    <div className="pt-4">
                        <div className="d-flex align-items-center justify-content-center gap-2 text-center">
                            <img src={logo} alt="" width={50} />
                            <h3 className="fw-semibold">Materio</h3>
                        </div>
                        <div className="mt-4 text-center">
                            <h4 className="fw-semibold mb-2">Adventure starts here 🚀</h4>
                            <span className="fw-light ">Make your app management easy and fun!</span>
                        </div>
                        <form className="mt-4" onSubmit={(e) => {
                            e.preventDefault();
                            navigate("/login", { replace: true })
                        }}>
                            <div className="mb-3">
                                <label className="form-label mb-2">User Name:</label>
                                <input type="text" className="form-control p-2" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-2">Email:</label>
                                <input type="text" className="form-control p-2" />
                            </div>
                            <div>
                                <label className="form-label mb-2">Password:</label>
                                <input type="text" className="form-control p-2" />
                            </div>
                            <div className=" form-check mt-3">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label fs-6" htmlFor="exampleCheck1">
                                    I agree to <span style={{ color: "#804bdf", fontSize: "15px", cursor: "pointer" }}>privacy policy & terms</span>
                                </label>
                            </div>
                            <div className="d-flex">
                                <Button className="login" variant="contained" type="submit">SignUp</Button>
                            </div>
                            <div className="text-center mt-3">
                                Already have an account?<NavLink to={"/login"} style={{ color: "#804bdf", fontSize: "15px", cursor: "pointer" }}>   Sign in</NavLink>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SignUp
