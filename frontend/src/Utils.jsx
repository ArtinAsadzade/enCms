import { useContext } from "react";
import { UsersDataContext } from "./context/UsersDataContext";
const userLogin = (userName, userPassword) => {
  const { Users } = useContext(UsersDataContext);

  return Users.some(
    (user) =>
      userPassword === user.password &&
      user.admin &&
      (user.gmail === userName || user.userName === userName)
  );
};

export { userLogin };
