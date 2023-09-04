import avatar from "../../../img/avatarImg.png"
import { useForm } from "react-hook-form"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
//icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MainStyle from "../MainStyle";
import { useState } from "react";
const Security = () => {

    // Zod And Validation 
    const [pass , setPass] = useState(false)
    const schema = z.object({
        oldPass: z.string().min(6, { message: "password should be 7 char at least" }),
        newPass: z.string().min(6, { message: "password should be 7 char at least" }),
        confirmPass: z.string(),
    }).refine((data) => data.newPass == data.confirmPass, {
        message: "Passwords don't match",
        path: ["confirmPass"],
    }).refine((data) => data.newPass != data.oldPass, {
        message: "Passwords are Same!",
        path: ["oldPass"]
    })
    type FormData = z.infer<typeof schema>
    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

    // Style
    const style = MainStyle()
    
    // Eye Icon 
    const [show, setShow] = useState<boolean[]>([false, false, false]);

    return (
        <form className="row security-form" style={{ color: style.color }} onSubmit={handleSubmit(data => {
            console.log(data)
            reset()
            setPass(true);
        }
        )}>
            {/* Fisrt Column  Form Inputs */}

            <div className="col-md-6 mb-5">
            
                {/* Old Pass Input */}
                <div className="mb-3 input">
                    <div className="d-flex">
                        <input type={show[0] ? "text" : "password"} {...register("oldPass", { required: true })} placeholder="Current Password" />
                        <div className="hide-pass" onClick={() => {
                            setShow([!show[0], show[1], show[2]])
                        }}>
                            {show[0] ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                        </div>
                    </div>
                    {errors.oldPass?.message == "Passwords are Same!" && <span className="text-danger">{errors.oldPass.message}</span>}
                    {errors.oldPass?.message == "password should be 7 char at least" && <span className="text-danger">{errors.oldPass.message}</span>}
                </div>
            
                {/* New And Confirm Pass Inputs */}
                <div>
                    <div className="input mb-3">
                        <div className="d-flex">
                            <input type={show[1] ? "text" : "password"} {...register("newPass")} placeholder="New Password" />
                            <div className="hide-pass" onClick={() => {
                                setShow([show[0], !show[1], show[2]])
                            }}>
                                {show[1] ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </div>
                        </div>
                        {errors.newPass?.message && <span className="text-danger">{errors.newPass.message}</span>}
                    </div>
                    <div className="input">
                        <div className="d-flex">
                            <input type={show[2] ? "text" : "password"} {...register("confirmPass", { required: true })} placeholder="Confrim New Password" />
                            <div className="hide-pass" onClick={() => {
                                setShow([show[0], show[1], !show[2]])
                            }}>
                                {show[2] ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
                            </div>
                        </div>
                    </div>
                    {errors.confirmPass?.message == "Passwords don't match" && <span className="text-danger">{errors.confirmPass.message}</span>}
                </div>
            </div>

            {/* Second Column Img */}
            <div className="col-md-6 text-center">
                <img src={avatar} alt="" className="rounded" width={200} />
            </div>
            {/* Password Changed Succefully */}
            {pass && 
            <div className="alert alert-success p-2" role="alert">
                Password Changed Succefully!
            </div>
            }

            <div className="account-btn mt-3">
                <button className="me-3 rounded">Save Changes</button>
                <button className="btn btn-outline-secondary">Reset</button>
            </div>
        </form>
    )
}

export default Security
