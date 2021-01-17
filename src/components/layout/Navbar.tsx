import React from "react";

import {
  AiFillHome,
  AiOutlineFileImage,
  AiFillShopping,
  AiFillSnippets,
} from "react-icons/ai";
import { IconContext } from "react-icons";

import {
  NavBarContainer,
  Title,
  Icons,
  NavLinkStyled,
} from "../../styles/layout";
import { animated, useSpring } from "react-spring";

import { useHistory } from "react-router";
import NavItem, { NavItemProps } from "./NavItem";

export default function Navbar() {
  // const [{ y, color }, set] = useSpring(() => ({ y: 0, color: "#fff" }));
  // const [{ yComission }, setComission] = useSpring(() => ({
  //   yComission: 0,
  // }));
  const history = useHistory();
  const listIcons: Array<NavItemProps> = [
    {
      icon: <AiFillHome />,
      size: 180,
      label: "home",
      link: "/",
    },
    {
      icon: <AiOutlineFileImage />,
      size: 200,
      label: "portfolio",
      link: "/portfolio",
    },
    {
      icon: <AiFillSnippets />,
      size: 240,
      label: "commissions",
      link: "/commissions",
    },
    {
      icon: <AiFillShopping />,
      size: 160,
      label: "cart",
      link: "/cart",
    },
  ];

  return (
    <NavBarContainer>
      <Title>
        T <br />
        A <br />
        K <br />
        A <br />
      </Title>
      <hr />
      <Icons>
        {listIcons.map((itemIcon) => (
          <NavItem {...itemIcon} history={history} />
        ))}
      </Icons>
    </NavBarContainer>
  );
}
