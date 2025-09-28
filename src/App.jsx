import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getUserInfo } from "../utils/getUserInfo";

function App() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(getUserInfo()?.email);

  useEffect(() => {
    setUserInfo(getUserInfo()?.email);
  }, [getUserInfo()?.email, navigate]);

  return (
    <>
      {userInfo && <Header />}
      <main
        className="bg-[#f0f8ff] overflow-auto 
                   
                   min-h-[calc(100vh-60px)]"
      >
        <Outlet />
        {userInfo && <Footer />}
      </main>
    </>
  );
}

export default App;
