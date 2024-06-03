import { useContext } from "react";
import { userLogin } from "../Utils";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import TopBar from "../components/TopBar";
import SideBar from "../components/SideBar";
import { ShowYesOrNoContext } from "../context/ShowYesOrNoContext";
import YesOrNo from "../components/YesOrNo";

export default function PrivateRouts() {
  const { userName, userPassword } = useContext(UserContext);
  const isLogin = userLogin(userName, userPassword);
  const { setShow } = useContext(ShowYesOrNoContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    navigate("/");
    localStorage.clear();
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <>
      {isLogin ? (
        <>
          <TopBar />{" "}
          <div className="flex mt-[2px]">
            <SideBar /> <Outlet />
            <YesOrNo
              title={"Log Out!"}
              desc={`Are You Sure For Log Out?`}
              button={true}
              func={logOutHandler}
            />
          </div>
        </>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
}
