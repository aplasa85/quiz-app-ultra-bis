import React from "react";
import { BsHouse, BsBookmarks, BsPerson } from "react-icons/bs";

function Footer (){
    return (
<ul className="navbar-bottom">
  <li className="navbar-icon" ><a className="link" href="/"><BsHouse /></a></li>
  <li className="navbar-icon"><a className="link" href="/bookmarks"><BsBookmarks /></a></li>
  <li className="navbar-icon"><a className="link" href="/about"><BsPerson /></a></li>
</ul>
    )
}








export default Footer