import { Link } from "react-router-dom";
import {
  HomeIcon,
  ArrowTrendingUpIcon,
  UserIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  EnvelopeIcon,
  InboxArrowDownIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function SideBar() {
  return (
    <>
      <div className="flex flex-col w-1/3 md:w-1/6">
        <div className="sticky top-0">
          <div className="w-full flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Dashboard</p>
            <Link
              to="home"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <HomeIcon className="w-4 m-1" /> Home
            </Link>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Quick Menu</p>
            <Link
              to="users"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <UserIcon className="w-4 m-1" /> Users
            </Link>
            <Link
              to="newUser"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <UserIcon className="w-4 m-1" /> New User
            </Link>
            <Link
              to="products"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <BuildingStorefrontIcon className="w-4 m-1" /> Products
            </Link>
            <Link
              to="transactions"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <CurrencyDollarIcon className="w-4 m-1" /> Transactions
            </Link>
            <Link
              to="reports"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <ChartBarIcon className="w-4 m-1" /> Reports
            </Link>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Notification</p>
            <Link
              to="mail"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <EnvelopeIcon className="w-4 m-1" /> Mail
            </Link>
            <Link
              to="feedback"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <InboxArrowDownIcon className="w-4 m-1" /> Feedback
            </Link>
            <Link
              to="message"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-4 m-1" /> Message
            </Link>
          </div>
          <div className="flex flex-col p-2">
            <p className="text-gray-600 font-bold text-sm">Staff</p>
            <Link
              to="manage"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <HomeIcon className="w-4 m-1" /> Manage
            </Link>
            <Link
              to="staffAnalytics"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <ArrowTrendingUpIcon className="w-4 m-1" /> Analytics
            </Link>
            <Link
              to="staffReport"
              className="w-full hover:bg-slate-200 p-1 rounded-md flex"
            >
              <ExclamationCircleIcon className="w-4 m-1" /> Reports
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
