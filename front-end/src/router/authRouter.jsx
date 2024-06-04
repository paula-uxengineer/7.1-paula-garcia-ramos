import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import "../css/login-register.css";

export const AuthRouter = () => {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* Redirect */}
            <Route path="*" element={<Navigate to="login" replace />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
