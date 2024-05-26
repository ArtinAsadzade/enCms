import {
  ArrowTrendingUpIcon,
  BuildingStorefrontIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CurrencyDollarIcon,
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
        name: "New User",
        link: "newUser",
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
      {
        id: 4,
        name: "Transactions",
        link: "transactions",
        icon: <CurrencyDollarIcon />,
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
        name: "Analytics",
        link: "analytics",
        icon: <ArrowTrendingUpIcon />,
        category: "staff",
      },
      {
        id: 3,
        name: "Reports",
        link: "reports",
        icon: <ExclamationCircleIcon />,
        category: "staff",
      },
    ],
  },
];
