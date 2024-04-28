import { useContext } from "react";
import { userLogin } from "./../Utils";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { userName, setUserName, userPassword, setUserPassword } =
    useContext(UserContext);

  let isLogin = userLogin(userName, userPassword);

  const submitHandler = () => {
    if (!isLogin) {
      alert("You do not have access");
    }
  };

  const changeUserNameValue = (e) => {
    setUserName(e.target.value);
  };
  const changePasswordValue = (e) => {
    setUserPassword(e.target.value);
  };
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to admin panel
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Or UserName
              </label>
              <div className="mt-2">
                <input
                  value={userName}
                  onChange={changeUserNameValue}
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 p-3 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={userPassword}
                  onChange={changePasswordValue}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 p-3 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Link
                onClick={submitHandler}
                to="/home"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
