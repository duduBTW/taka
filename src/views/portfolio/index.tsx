import React, { useEffect } from "react";
import { Header, Content, Image } from "../../styles/portfolio";

// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useHistory } from "react-router-dom";
import list from "../../data";
function shuffle(array: portItemProps[]) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

interface portItemProps {
  type: string;
  title: string;
  url: string;
}

export default function Portfolio() {
  const history = useHistory();
  const [imageList, setImageList] = React.useState<portItemProps[] | null>();

  const redirecCom = () => {
    history.push("/commissions");
  };

  useEffect(() => {
    let listTemp: portItemProps[] = [
      {
        type: "a",
        url: "a",
        title: "a",
      },
    ];

    listTemp.pop();

    list.map((item) =>
      item.content.map((row) =>
        row.images.forEach((image) => {
          if (image.url)
            listTemp.push({
              url: image.url,
              type: item.type,
              title: row.title,
            });
        })
      )
    );

    shuffle(listTemp);

    setImageList(listTemp);
  }, []);

  return (
    <div>
      <Header>PORTFOLIO</Header>
      <Content>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3, 1300: 4 }}
        >
          <Masonry>
            {imageList
              ? imageList.map(
                  (item) =>
                    item && (
                      <Image onClick={redirecCom}>
                        <img src={item.url} alt="a" />
                        <div className="overlay">
                          <div className="title">{item.type}</div>
                          <div className="subtitle">{item.title}</div>
                          <div className="desc">Click to see more</div>
                        </div>
                      </Image>
                    )
                )
              : null}
          </Masonry>
        </ResponsiveMasonry>
      </Content>
    </div>
  );
}
