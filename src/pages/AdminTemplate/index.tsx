import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../../store";
export default function AdminTemplate() {
  const { data } = useSelector((state: RootState) => state.userReducer);
  if (!data) {
    //chua dang nhap
    return <Navigate to="/auth" />
  } else if (data.maLoaiNguoiDung !== "QuanTri") {
    //da dang nhap nhung ko phai admin
    return <Navigate to="/" />
  }
  return (
    <div>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </div>
  )
}
