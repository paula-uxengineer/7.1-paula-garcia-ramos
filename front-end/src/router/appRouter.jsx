import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../auth/authContext";
import { PublicRoute } from "./publicRoute";
import { PrivateRoute } from "./privateRoute";
import { AuthRouter } from "./authRouter";
import { ChatPage } from "../pages/chatPage";

const AppRouter = () => {
  const { auth, verificaToken } = useContext(AuthContext);

  useEffect(() => {
    verificaToken();
  }, [verificaToken]);

  if (auth.checking) {
    return <h1>Espere por favor</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/auth/*"
          element={<PublicRoute isAuthenticated={auth.logged} />}
        >
          <Route path="*" element={<AuthRouter />} />
        </Route>

        {/* Private routes */}
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={auth.logged} />}
        >
          <Route index element={<ChatPage />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
