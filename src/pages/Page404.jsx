import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <div className="w-full h-screen border-2 border-black rounded-sm">
        <div className="w-full m-auto text-center p-8">
          <img
            src="../../public/Vectors/404Error2.svg"
            alt=""
            className="w-full  mx-auto my-10"
          />
          <Link
            to={"/"}
            className="border-black border-2 text-black rounded-lg p-3 my-10 hover:opacity-50 transition-opacity"
          >
            Back To Home
            <ArrowUpRightIcon className="w-4 inline mx-1" />
          </Link>
        </div>
      </div>
    </>
  );
}
