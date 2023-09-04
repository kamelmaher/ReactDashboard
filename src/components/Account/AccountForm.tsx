import { useAppDispatch, useAppSelector } from "../../store/store"
import MainStyle from "../MainStyle"
import { UserState, changeUser } from "../../store/UserSlice";
import { useEffect, useState } from "react";

const AccountForm = () => {
    const [newUser, setNewUser] = useState<UserState>({
        name: "",
        userName: "",
        company: "",
        status: "",
        role: "",
        email: "",
    } as UserState);
    const dispatch = useAppDispatch();
    const dark = useAppSelector(state => state.theme.dark)
    useEffect(() => {
        const data = localStorage.getItem("user");
        if (data) {
            const ParserdData = JSON.parse(data);
            setNewUser(ParserdData)
        }
    }, [])
    const style = MainStyle();
    return (
        <form className="m-auto mt-5 account-form" style={{ color: style.color }} onSubmit={(e => {
            e.preventDefault();
        })}>
            <div className="row mb-md-4 mb-3 gap-3 gap-md-5">
                <div className="col-md-5">
                    <label>UserName</label>
                    <input type="text" className={`form-control ${dark ? "dark" : ""}`} value={newUser.userName} onChange={(e) => {
                        setNewUser({ ...newUser, userName: e.target.value })
                    }} />
                </div>
                <div className="col-md-5">
                    <label>Name:</label>
                    <input type="text" className={`form-control ${dark ? "dark" : ""}`} value={newUser.name} onChange={(e) => {
                        setNewUser({ ...newUser, name: e.target.value })
                    }} />
                </div>
            </div>
            <div className="row mb-md-4 mb-3 gap-3 gap-md-5">
                <div className="col-md-5">
                    <label>Email</label>
                    <input type="text" className={`form-control ${dark ? "dark" : ""}`} value={newUser.email} onChange={(e) => {
                        setNewUser({ ...newUser, email: e.target.value })
                    }} />
                </div>
                <div className="col-md-5">
                    <label>Role</label>
                    <select className={`form-select ${dark ? "dark" : ""}`} value={newUser.role} onChange={(e) => {
                        setNewUser({ ...newUser, role: e.target.value })
                    }}>
                        <option className={`${dark ? "dark" : ""}`} value="Admin">Admin</option>
                        <option className={`${dark ? "dark" : ""}`} value="Author">Author</option>
                        <option className={`${dark ? "dark" : ""}`} value="Editor">Editor</option>
                        <option className={`${dark ? "dark" : ""}`} value="Subscriber">Subscriber</option>
                    </select>
                </div>
            </div>
            <div className="row mb-md-4 mb-3 gap-3 gap-md-5">
                <div className="col-md-5">
                    <label>Status</label>
                    <select className={`form-select ${dark ? "dark" : ""}`} value={newUser.status} onChange={(e) => {
                        setNewUser({ ...newUser, status: e.target.value })
                    }}>
                        <option className={`${dark ? "dark" : ""}`} value="Active">Active</option>
                        <option className={`${dark ? "dark" : ""}`} value="Inactive">Inactive</option>
                        <option className={`${dark ? "dark" : ""}`} value="Pending">Pending</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <label>Company</label>
                    <input type="text" className={`form-control ${dark ? "dark" : ""}`} value={newUser.company} onChange={(e) => {
                        setNewUser({ ...newUser, company: e.target.value ? e.target.value : "" })
                    }} />
                </div>
            </div>
            <div className="account-btn mt-3">
                <button className="me-3 rounded" onClick={() => {
                    dispatch(changeUser(newUser));
                }}>Save Changes</button>
                <button className="btn btn-outline-secondary" onClick={() => {
                    setNewUser({
                        name: "",
                        userName: "",
                        company: "",
                        status: "",
                        role: "",
                        email: "",
                    })
                    dispatch(changeUser({
                        name: "",
                        userName: "",
                        company: "",
                        status: "",
                        role: "",
                        email: "",
                    }))
                }}>Reset</button>
            </div>
        </form>
    )
}

export default AccountForm
