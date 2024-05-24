import { Link } from "react-router-dom";

export default function SideBarItems(props) {
  return (
    <div className="w-full flex flex-col p-2">
      <p className="text-gray-600 font-bold text-sm">{props.title}</p>
      {props.infos.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          className={`w-full hover:bg-slate-200 p-1 rounded-md flex items-center justify-start gap-2`}
        >
          <span className="[&>*]:w-full [&>*]:h-full w-5 h-5">{item.icon}</span>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
