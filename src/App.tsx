import { useSelector } from "react-redux";
import "./App.scss";
import Chat from "./components/Chat";

import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./utils/ErrorFallBack";

function App() {
  const user = useSelector((state: any) => state.user);

  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      console.log(loginUser);
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Sidebar />
          </ErrorBoundary>
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
