import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import YesOrNo from "./YesOrNo";
import axios from "axios";

export default function FeedbackItems(props) {
  const [show, setShow] = useState(false);

  const deleteFeedbackHandler = () => {
    axios({
      method: "DELETE",
      url: `http://localhost:3000/api/comments/${props.id}`,
    });
    setShow((prevState) => (prevState = !prevState));
  };

  const openYesOrNoModal = () => {
    setShow((prevState) => (prevState = !prevState));
  };

  return (
    <>
      <YesOrNo
        title={`You Want Delete *${props?.username}*?`}
        desc={`Are you sure about deleting the desired product?`}
        button={true}
        func={deleteFeedbackHandler}
        show={show}
        setShow={setShow}
      />
      <tr className="odd:bg-gray-200 bg-gray-50 even:bg-gray-100 border-b">
        <th scope="row" className="px-6 py-4 font-bold text-black">
          <p className="">{props?.userID}</p>
          <p className="text-gray-400">{props.productID}</p>
        </th>
        <td className="px-6 py-4 text-black font-bold">
          <p className="">{props?.date}</p>
          <p className="text-gray-400">{props?.hour}</p>
        </td>
        <td className="px-6 py-4 text-black font-bold">{props.body}</td>
        <td className="px-6 py-4">
          <button
            href="#"
            className="font-medium text-gray-500 mx-2 hover:underline"
          >
            <PencilSquareIcon className="w-5" />
          </button>
          <button
            href="#"
            className="font-medium text-gray-500 mx-2 hover:underline"
            onClick={openYesOrNoModal}
          >
            <TrashIcon className="w-5" />
          </button>
        </td>
      </tr>
    </>
  );
}
