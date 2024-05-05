import { Link } from "react-router-dom";

export default function SideBarItems(props) {
  return (
    <Link to={props.link} className="w-full hover:bg-slate-200 p-1 rounded-md flex items-center justify-start gap-2">
      <span className="[&>*]:w-full [&>*]:h-full w-5 h-5">{props.icon}</span>
      <p>{props.name}</p>
    </Link>
  );
}
