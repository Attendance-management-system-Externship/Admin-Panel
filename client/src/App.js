import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { Navigate } from "react-router-dom";

function App() {
  const [auth, setAuth] = React.useState(false);
  // if(localStorage.getItem('token')){
  //   setAuth(true); //need to check if token is valid
  // }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin setAuth={setAuth} />} />
          <Route path="/admin-panel" element={auth? <Dashboard /> : <Navigate to="/" />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
