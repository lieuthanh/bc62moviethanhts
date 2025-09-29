import { FormEvent, use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserLogin } from "./duck/actions";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";

export default function AuthenPage() {
    const dispatch: any = useDispatch();
    const { loading, data, error } = useSelector((state: RootState) => state.userReducer);
    const navigate = useNavigate();
    const [values, setValues] = useState({ taikhoan: "", matkhau: "" });
    const handleOnChange = (event: any) => {
        const { value, name } = event.target;
        setValues({ ...values, [name]: value });
    };
    const onsubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(actFetchUserLogin(values));
    }
    useEffect(() => {
        if (data) {
            if (data.maLoaiNguoiDung === "QuanTri") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }
        }
    }, [data])

    return (
        <div className="d-flex align-items-center justify-content-center">
            <h3>Đăng nhập</h3>
            <form onSubmit={onsubmit}>
                <input type="text" placeholder="Taikhoan" name="taikhoan" onChange={handleOnChange} />
                <input type="password" placeholder="Matkhau" name="matkhau" onChange={handleOnChange} />
                <button disabled={loading} className="btn btn-success" type="submit">{
                    loading && (
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )}Dang nhap</button>
            </form>
        </div>
    )
}
