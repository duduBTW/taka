import React, { useState } from "react";

//@ts-ignore
import { FullPage, Slide } from "react-full-page";
import { Link } from "react-router-dom";
import { config, Spring } from "react-spring/renderprops";
import Row from "../../components/commission/Row";
import list from "../../data";
import { Header, Title } from "../../styles/commissions";

const Commissions = () => {
  const [line, setLine] = useState(0);
  const [column, setColumn] = useState(null);
  const [titleLab, setTitle] = useState<string>("");

  React.useEffect(() => {
    if (!column) {
      let columnPre: any = {};

      for (let i = 0; i < list.length; i++) {
        columnPre = { ...columnPre, [i]: 0 };
      }

      setColumn(columnPre);
    } else {
      if (line > 0) {
        setTitle(
          // @ts-ignore
          list[line - 1].content[column[line - 1]].title
        );
      } else {
        setTitle("");
      }
    }
  }, [column, line]);

  return (
    <FullPage
      initialSlide={0}
      beforeChange={(data: { to: number; from: number }) => setLine(data.to)}
    >
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
      {list.map((listItem, index) => (
        <Slide>
          <Row
            column={column}
            indexV={index}
            setColumn={setColumn}
            // title={index === 0 ? title : null}
            items={listItem}
          />
        </Slide>
      ))}
      {titleLab && (
        <Spring
          reset={false}
          config={config.default}
          from={{ transform: "translate3d(100px,0px,0px)" }}
          to={{ transform: "translate3d(0px,0px,0px)" }}
        >
          {(props: any) => (
            <Title style={props}>
              <Spring
                reset={true}
                config={config.gentle}
                from={{ transform: "translate3d(100px,0px,0px)" }}
                to={{ transform: "translate3d(0px,0px,0px)" }}
              >
                {(props: any) => (
                  <div style={props}>
                    {titleLab
                      .toUpperCase()
                      .split("")
                      .map((item) => (
                        <>
                          {item} <br />{" "}
                        </>
                      ))}
                  </div>
                )}
              </Spring>
            </Title>
          )}
        </Spring>
      )}
    </FullPage>
  );
};

export default React.memo(Commissions);
