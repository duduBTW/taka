import React, { useState } from "react";

//@ts-ignore
import { FullPage, Slide } from "react-full-page";
import { Link } from "react-router-dom";
import { config, Spring } from "react-spring/renderprops";
import Row from "../../components/commission/Row";
import { Header, Title } from "../../styles/commissions";

const list = [
  [
    {
      title: "teste",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "100",
      imageLink:
        "https://pbs.twimg.com/media/Eqeg9R3VoAIQ0O2?format=jpg&name=large",
    },
    {
      title: "teste dois",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "200",
      imageLink:
        "https://pbs.twimg.com/media/EquMT91UwAAzDNb?format=jpg&name=900x900",
    },
    {
      title: "teste nice",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "200",
      imageLink:
        "https://cdn.discordapp.com/attachments/353348612501012481/794377696611663893/yukipng2.png",
    },
  ],
  [
    {
      title: "teste ababa",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "200",
      imageLink:
        "https://cdn.discordapp.com/attachments/353348612501012481/794377696611663893/yukipng2.png",
    },
    {
      title: "teste 2",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "200",
      imageLink:
        "https://cdn.discordapp.com/attachments/353348612501012481/794377696611663893/yukipng2.png",
    },
  ],
  [
    {
      title: "teste",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "100",
      imageLink:
        "https://pbs.twimg.com/media/Eqeg9R3VoAIQ0O2?format=jpg&name=large",
    },
    {
      title: "teste dois",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "200",
      imageLink:
        "https://pbs.twimg.com/media/EquMT91UwAAzDNb?format=jpg&name=900x900",
    },
    {
      title: "pog",
      desc:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
      price: "200",
      imageLink:
        "https://cdn.discordapp.com/attachments/353348612501012481/794377696611663893/yukipng2.png",
    },
  ],
];

const Commissions = () => {
  const [line, setLine] = useState(0);
  const [column, setColumn] = useState(null);
  const [titleLab, setTitle] = useState("");

  // Consirar posição da coluna de todos os items
  // React.useEffect(() => {
  //   console.log("line: ", line - 1);
  //   console.log("column: ", column);
  //   if (line > 0) {
  //     setTitle(list[line - 1][column].title);
  //   } else {
  //     setTitle("");
  //   }
  // }, [column, line]);
  React.useEffect(() => {
    if (!column) {
      let columnPre: any = {};

      for (let i = 0; i < list.length; i++) {
        columnPre = { ...columnPre, [i]: 0 };
      }

      // alert(JSON.stringify(columnPre));
      setColumn(columnPre);
    } else {
      if (line > 0) {
        // @ts-ignore
        setTitle(list[line - 1][column[line - 1]].title);
      } else {
        setTitle("");
      }
    }
    // @ts-ignore
    // alert(JSON.stringify(column[line - 1]));
  }, [column, line]);

  return (
    <FullPage
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
          reset={true}
          config={config.slow}
          from={{ transform: "translate3d(100px,0px,0px)" }}
          to={{ transform: "translate3d(0px,0px,0px)" }}
        >
          {(props: any) => (
            <Title style={props}>
              {titleLab
                .toUpperCase()
                .split("")
                .map((item) => (
                  <>
                    {item} <br />{" "}
                  </>
                ))}
            </Title>
          )}
        </Spring>
      )}
    </FullPage>
  );
};

export default React.memo(Commissions);
