import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksSeparated= links.map((link)=>{
    return (<a href={"#"+link} key={link}>{link}</a>)
})
return(
  <div>
    {linksSeparated}
  </div>
)
}

export default NavBar;
