import React from "react";
import Dock from "./Dock";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const MyDock = () => {
  const dockItems = [
    {
      icon: <MdOutlineEmail />,
      label: "Email",
      onClick: () => window.open("mailto:youremail@example.com"),
      className: "text-2xl rounded-xl",
    },
    {
      icon: <MdCall />,
      label: "contact",
      onClick: () => window.open("tel:+919876543210"),
      className: "text-2xl rounded-xl",
    },
    {
      icon: <FaLinkedinIn />,
      label: "LinkedinIn",
      onClick: () => window.open("https://www.linkedin.com/", "_blank"),
      className: "text-2xl rounded-xl",
    },
    {
      icon: <FiGithub />,
      label: "Github",
      onClick: () => window.open("https://github.com/", "_blank"),
      className: "text-2xl rounded-xl",
    },
  ];

  return (
    <>
      <Dock
        className={"bottom-5 items-center"}
        items={dockItems}
        baseItemSize={60}
        magnification={70}
        panelHeight={84}
        distance={150}
        spring={{ mass: 0.8, stiffness: 200, damping: 10 }}
      />
    </>
  );
};

export default MyDock;
