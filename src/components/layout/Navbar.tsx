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
        {/* <IconContext.Provider
            value={{
              color: "white",
              className: "global-class-name",
              size: "30px",
            }}
          >
            <NavLinkStyled to="/home">
              <AiFillHome />
            </NavLinkStyled>
          </IconContext.Provider>
          <br />
          <br />
          <br />
          <IconContext.Provider
            value={{
              color: "white",
              size: "30px",
            }}
          >
            <NavLinkStyled to="/portfolio">
              <AiOutlineFileImage />
            </NavLinkStyled>
          </IconContext.Provider>
          <br />
          <br />
          <br />
          <IconContext.Provider
            value={{
              color: "white",
              size: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                background: "black",
                width: "100%",
                cursor: "pointer",
              }}
              onMouseEnter={() => {
                setComission({ yComission: size });
              }}
              onMouseLeave={() => {
                setComission({ yComission: 0 });
              }}
              onClick={() => history.push("/commissions")}
            >
              <AiFillSnippets />
              <animated.div
                style={{
                  width: yComission.interpolate((v) => `${v}px`),
                  height: 50,
                  left: 0,
                  top: -10,
                  bottom: 0,
                  position: "absolute",
                  background: "black",
                  zIndex: -1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                className="glance"
              >
                <div
                  style={{
                    color: "white",
                    zIndex: -1,
                    overflow: "hidden",
                    paddingRight: 20,
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: 4,
                  }}
                >
                  COMMISIONS
                </div>
              </animated.div>
            </div>
          </IconContext.Provider>
          <br />
          <br />
          <br />
          <IconContext.Provider
            value={{
              color: "white",
              size: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                background: "black",
                width: "100%",
                cursor: "pointer",
              }}
              onMouseEnter={() => {
                set({ y: 150, color: "#000" });
              }}
              onMouseLeave={() => {
                set({ y: 0, color: "#fff" });
              }}
              onClick={() => history.push("/card")}
            >
              <AiFillShopping />
              <animated.div
                style={{
                  width: y.interpolate((v) => `${v}px`),
                  height: 50,
                  left: 0,
                  top: -10,
                  bottom: 0,
                  position: "absolute",
                  background: "black",
                  zIndex: -1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                className="glance"
              >
                <div
                  style={{
                    color: "white",
                    zIndex: -1,
                    overflow: "hidden",
                    paddingRight: 20,
                    fontSize: "1rem",
                    fontWeight: 400,
                    letterSpacing: 4,
                  }}
                >
                  CARD
                </div>
              </animated.div>
            </div>
          </IconContext.Provider> */}
      </Icons>
    </NavBarContainer>
  );
}
