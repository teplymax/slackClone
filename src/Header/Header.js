import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../Stateprovider";
function Header() {
  const [{ user }] = useStateValue();
  return (
    <header className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        {/* Avatar for logged users */}
        {/* Time-icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        {/* Search-icon */}
        <input placeholder="Search" />
        {/* input */}
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        {/* Help-icon */}
      </div>
    </header>
  );
}
export default Header;
// alt={user?.displayName}
// src={user?.photoURL}
