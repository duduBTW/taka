import React from "react";
import { Spring } from "react-spring/renderprops";

//@ts-ignore
import { FullPage, Slide } from "react-full-page";
import { Header } from "../../styles/commissions";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <FullPage>
      <Slide>
        <Spring
          from={{ opacity: 0, transform: "translate3d(0px,-300px,0px)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0px,0px)" }}
        >
          {(props: any) => (
            <Header style={props}>
              <div className="main">
                <div>
                  <h1>
                    TAKA
                    <br />
                    COMISSIONS
                  </h1>
                  <br />
                  <br />
                  <h2>
                    Change Your Life
                    <br />
                    Do One Now
                  </h2>
                </div>
                <Link className="link" to="/commissions">
                  Start
                </Link>
              </div>
              <div className="card">
                <img
                  width={300}
                  src="https://pbs.twimg.com/media/EqekGYoVEAE8ZlN?format=jpg&name=large"
                  alt=""
                />
              </div>
            </Header>
          )}
        </Spring>
      </Slide>
    </FullPage>
  );
}
