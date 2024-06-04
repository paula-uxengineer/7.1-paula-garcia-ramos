import { AuthProvider } from "./auth/authContext";
import { SocketProvider } from "./context/socketContext";
import { ChatProvider } from "./context/ChatContext";
import AppRouter from "./router/appRouter";

import moment from "moment";
import "moment/locale/es";
moment.locale("es");

function App() {
  return (
    <>
      <ChatProvider>
        <AuthProvider>
          {/* va dentro de authprovider porque necesita data de él */}
          <SocketProvider>
            <AppRouter />
          </SocketProvider>
        </AuthProvider>
      </ChatProvider>
    </>
  );
}

export default App;
