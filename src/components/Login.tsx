import Card from "./Home/Card"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "@mui/material"
// images
import logo from "../../img/logo.png"

import MainStyle from "./MainStyle"
const Login = () => {
    // Style 
    const style = MainStyle()

    const navigate = useNavigate();
    return (
            <div className="row justify-content-center" style={{ color: style.color }}>
                <div className="col-lg-5 col-md-7">
                    <Card>
                        <div className="p-3 pt-4">
                            <div className="d-flex align-items-center justify-content-center gap-2 text-center">
                                <img src={logo} alt="" width={50} />
                                <h3 className="fw-semibold">Materio</h3>
                            </div>
                            <div className="mt-4 text-center">
                                <h4 className="fw-semibold mb-2">Welcome to Materio! 👋🏻</h4>
                                <span className="fw-light ">Please sign-in to your account and start the adventure</span>
                            </div>
                            <form className="mt-4" onSubmit={(e) => {
                                e.preventDefault();
                                navigate("/", { replace: true })
                            }}>
                                <div className="mb-3">
                                    <label className="form-label mb-2">Email:</label>
                                    <input type="text" className="form-control p-2" />
                                </div>
                                <div>
                                    <label className="form-label mb-2">Password:</label>
                                    <input type="text" className="form-control p-2" />
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-2">
                                    <div className=" form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label fs-6" htmlFor="exampleCheck1">Remember Me</label>
                                    </div>
                                    <p style={{ color: "#804bdf", fontSize: "15px", cursor: "pointer" }}>Forget Password ?</p>
                                </div>
                                <div className="d-flex">
                                    <Button className="login" variant="contained" type="submit">Login</Button>
                                </div>
                                <div className="text-center mt-3">
                                    New on our platform? <NavLink to={"/signup"} style={{ color: "#804bdf", fontSize: "15px", cursor: "pointer" }}>Create an account</NavLink>
                                </div>
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
    )
}

export default Login
