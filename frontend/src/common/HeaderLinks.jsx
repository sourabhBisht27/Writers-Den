import HeaderLink from "./HeaderLink";
import { IoNotifications } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { PiNotePencilFill } from "react-icons/pi";
import "./HeaderLinks.css";
import { useState } from "react";

const HeaderLinks = () => {
  const headerLinks = [
    // might change to /blogs
    { label: "Write", to: "/write", Icon: PiNotePencilFill },
    { label: "Notification", to: "/notification", Icon: IoNotifications },
    { to: "/dropdown", Icon: RxAvatar },
  ];
  let count = 0;
  return (
    <ul>
      {headerLinks.map((headerLink) => (
        <HeaderLink
          key={headerLink.label || count++}
          label={headerLink.label}
          to={headerLink.to}
          Icon={headerLink.Icon}
        />
      ))}
    </ul>
  );
};

export default HeaderLinks;
