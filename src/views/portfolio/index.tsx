import React from "react";
import { Header, Content } from "../../styles/portfolio";

// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://pbs.twimg.com/media/Eqovcp5UUAEkYg0?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/DHoYz8WUQAA1oWa?format=jpg&name=large",
  "https://pbs.twimg.com/media/EqnVLs0UYAUP7CI?format=jpg&name=medium",
  "https://pbs.twimg.com/media/Eqovcp5UUAEkYg0?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/EqGENouUUAE_kmH?format=jpg&name=small",
  "https://pbs.twimg.com/media/EqLvFVhU0AIwjsg?format=jpg&name=4096x4096",
  "https://pbs.twimg.com/media/DG8jiHSUIAAIVQ4?format=jpg&name=small",
  "https://pbs.twimg.com/media/Eqp7bdfW4AAWTSq?format=jpg&name=small",
  "https://pbs.twimg.com/media/Eqp2ZzLUwAYV9cU?format=jpg&name=medium",
];

export default function Portfolio() {
  return (
    <div>
      <Header>PORTFOLIO</Header>
      <Content>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3, 1300: 4 }}
        >
          <Masonry>
            {images.map((item) => (
              <img src={item} alt="a" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Content>
    </div>
  );
}
