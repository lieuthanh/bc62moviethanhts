import { FormEvent, use, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchUserLogin } from "./duck/actions";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
    taikhoan: yup.string().required("Vui lòng nhập tài khoản"),
    matkhau: yup.string().required("Vui lòng nhập mật khẩu"),
});

export default function AuthenPage() {
    const dispatch: any = useDispatch();
    const { loading, data, error } = useSelector((state: RootState) => state.userReducer);
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm({
        defaultValues: {
            taikhoan: "",
            matkhau: ""
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (formValues: any) => {
        dispatch(actFetchUserLogin(formValues));
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder="Taikhoan" {...register("taikhoan")} />
                    {
                        formState.errors.taikhoan?.message && (
                            <small className="text-danger">{formState.errors.taikhoan?.message}</small>
                        )
                    }
                </div>
                <div>
                    <input type="password" placeholder="Matkhau" {...register("matkhau")} />
                    {
                        formState.errors.matkhau?.message && (
                            <small className="text-danger">{formState.errors.matkhau?.message}</small>
                        )
                    }
                </div>
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
