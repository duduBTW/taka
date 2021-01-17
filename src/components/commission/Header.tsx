import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import list from "../../data";

import { Card, CardContainer, HeaderStyle } from "../../styles/commissions";
import { shuffle } from "../../views/portfolio";

export default function Header() {
  return (
    <Spring
      from={{ opacity: 0, transform: "translate3d(0px,-300px,0px)" }}
      to={{ opacity: 1, transform: "translate3d(0px,0px,0px)" }}
    >
      {(props: any) => (
        <HeaderStyle style={props}>
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
          <CardContainer>
            <Card image="https://pbs.twimg.com/media/Eqkwx7iXYAIFcaM?format=jpg&name=large">
              <label>teste</label>
            </Card>
          </CardContainer>
        </HeaderStyle>
      )}
    </Spring>
  );
}
