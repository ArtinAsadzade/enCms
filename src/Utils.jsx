import Users from "./data/Users";
const userLogin = (userName, userPassword) => {
  return Users.some((user) => userPassword === user.password && (user.gmail === userName || user.userName === userName));
};

export { userLogin };
