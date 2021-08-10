import React from "react";
import { AiOutlineBarcode } from "react-icons/ai";
import { IoIosHelpCircle } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import {
  HomeOutlined,
  Equalizer,
  PersonOutlineOutlined,
  Forum,
  DateRange,
  Settings,
  ReceiptSharp,
} from "@material-ui/icons";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Equalizer />,
  },

  {
    title: "Inbox",
    path: "/inbox",
    icon: <FaRegEnvelope />,
  },

  {
    title: "Products",
    path: "/products",
    icon: <AiOutlineBarcode />,
  },

  {
    title: "Invoices",
    path: "/invoices",
    icon: <ReceiptSharp />,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <PersonOutlineOutlined />,
  },
  {
    title: "Chat Room",
    path: "/chatRoom",
    icon: <Forum />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <DateRange />,
  },
  {
    title: "Help Center",
    path: "/helpCenter",
    icon: <IoIosHelpCircle />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <Settings />,
  },
];
