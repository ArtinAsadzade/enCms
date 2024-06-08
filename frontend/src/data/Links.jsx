import {
  BuildingStorefrontIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  ExclamationCircleIcon,
  HomeIcon,
  InboxArrowDownIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const links = [
  {
    id: 1,
    title: "Dashboard",
    infos: [
      {
        id: 1,
        name: "Home",
        link: "home",
        icon: <HomeIcon />,
        category: "dashboard",
      },
    ],
  },
  {
    id: 2,
    title: "Quick Menu",
    infos: [
      {
        id: 1,
        name: "Users",
        link: "users",
        icon: <UserIcon />,
        category: "quickmenu",
      },
      {
        id: 2,
        name: "Admins",
        link: "admins",
        icon: <UserIcon />,
        category: "quickmenu",
      },
      {
        id: 3,
        name: "Products",
        link: "products",
        icon: <BuildingStorefrontIcon />,
        category: "quickmenu",
      },
    ],
  },
  {
    id: 3,
    title: "Notification",
    infos: [
      {
        id: 1,
        name: "Mail",
        link: "mail",
        icon: <EnvelopeIcon />,
        category: "notification",
      },
      {
        id: 2,
        name: "Feedback",
        link: "feedback",
        icon: <InboxArrowDownIcon />,
        category: "notification",
      },
      {
        id: 3,
        name: "Message",
        link: "message",
        icon: <ChatBubbleOvalLeftEllipsisIcon />,
        category: "notification",
      },
    ],
  },
  {
    id: 4,
    title: "Staff",
    infos: [
      {
        id: 1,
        name: "Manage",
        link: "manage",
        icon: <HomeIcon />,
        category: "staff",
      },
      {
        id: 2,
        name: "Reports",
        link: "reports",
        icon: <ExclamationCircleIcon />,
        category: "staff",
      },
    ],
  },
];
