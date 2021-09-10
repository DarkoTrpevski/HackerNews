import React from "react";
import { Link } from "react-router-dom";
import { LogoWrapper, MiscNavList, SidebarItem, SidebarParent, SidebarScroller } from "../../styles/common/commonStyles";
import { miscNavigationLinks, navigationLinks } from "../../utils/navLinks";
import Logo from "../Logo/Logo";


interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = ({ }) => {


  return (
    <SidebarParent className="SidebarParent">

      <SidebarScroller className="SidebarScroller">
        <LogoWrapper className="LogoWrapper">
          <Link to="/">
            <Logo />
          </Link>
        </LogoWrapper>
        <ul>
          {navigationLinks.map((item, index) => {
            return (
              <SidebarItem key={item.title}>
                <Link to={item.url}>

                  {item.icon}
                  <span>{item.title}</span>
                </Link>

              </SidebarItem>
            );
          })}

        </ul>
        <MiscNavList>
          {miscNavigationLinks.map((item, index) => {
            return (
              <SidebarItem key={item.title}>
                <Link to={item.url}>

                  {item.icon}
                  <span>{item.title}</span>
                </Link>

              </SidebarItem>
            );
          })}

        </MiscNavList>
      </SidebarScroller>
    </SidebarParent>
  );
}

export default Sidebar;