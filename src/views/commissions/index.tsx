import React from "react";

//@ts-ignore
import { FullPage, Slide } from "react-full-page";
import Row from "../../components/commission/Row";

export default function Commissions() {
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
        title: "teste ababa",
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
        title: "teste ababa",
        desc:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
        price: "200",
        imageLink:
          "https://cdn.discordapp.com/attachments/353348612501012481/794377696611663893/yukipng2.png",
      },
    ],
  ];

  return (
    <FullPage>
      <Slide>
        {/* <Spring
          config={config.slow}
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
                <button>Start</button>
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
        </Spring> */}
      </Slide>
      {list.map((listItem) => (
        <Slide>
          <Row items={listItem} />
        </Slide>
      ))}
    </FullPage>
  );
}
