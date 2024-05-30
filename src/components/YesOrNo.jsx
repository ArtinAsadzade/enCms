import { useContext } from "react";
import { ShowYesOrNoContext } from "../context/ShowYesOrNoContext";

export default function YesOrNo({ title, desc, func }) {
  const { show, setShow } = useContext(ShowYesOrNoContext);

  const handleClick = () => {
    func();
  };
  const hideQuest = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <div
      className={`w-full z-50 fixed top-10 right-1/2 left-1/2 -translate-x-1/2 tra max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-lg border-2  ${
        show ? "block" : "hidden"
      }`}
      role="alert"
    >
      <div className="flex">
        <div className="ms-3 text-sm w-full font-normal">
          <span className="mb-1 text-lg font-semibold text-gray-900">
            {title}
          </span>
          <div className="mb-2 text-sm font-normal">{desc}</div>
          <div className="grid grid-cols-2 w-full gap-2">
            <div>
              <button
                className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 "
                onClick={handleClick}
              >
                Yes
              </button>
            </div>
            <div>
              <button
                className="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
                onClick={hideQuest}
              >
                No
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 "
          onClick={hideQuest}
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
