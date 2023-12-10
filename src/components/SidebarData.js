import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";
import * as CiIcons from "react-icons/ci";

export const SidebarData = [
  {
    titulo: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    titulo: "DadosExtraidos",
    path: "/dadosExtraidos",
    icon: <HiIcons.HiDownload />,
    cName: "nav-text",
  },

  {
    titulo: "UploadsSalvos",
    path: "/uploadsSalvos",
    icon: <FaIcons.FaBookmark />,
    cName: "nav-text",
  },
  {
    titulo: "Suporte",
    path: "/suporte",
    icon: <GiIcons.GiTalk />,
    cName: "nav-text",
  },
  {
    titulo: "Sair",
    path: "/sair",
    icon: <CiIcons.CiLogout />,
    cName: "nav-text",
  },
];
