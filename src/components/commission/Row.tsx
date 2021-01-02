import React, { useState } from "react";
import { Button, Content, ThumbItem } from "../../styles/commissions";

import { Spring } from "react-spring/renderprops";
import { useSpringCarousel } from "react-spring-carousel-js";

//@ts-ignore
import { Slide } from "react-full-page";
import Card, { CardProps } from "./Card";

export default function Row({
  item,
  setItem,
  items,
}: {
  item: boolean;
  setItem: (value: boolean) => void;
  items: Array<CardProps>;
}) {
  const [active, setActive] = useState("1");

  const {
    carouselFragment,
    useListenToCustomEvent,
    slideToItem,
    thumbsFragment,
    getIsActiveItem,
  } = useSpringCarousel({
    withThumbs: true,
    initialActiveItem: 0,
    items: items.map((itemDet, index) => {
      return {
        id: index.toString(),
        renderItem: (
          <Card
            price={itemDet.price}
            desc={itemDet.desc}
            title={itemDet.title}
            item={item}
            invert={!(index % 2 === 0)}
          />
        ),
        renderThumb: (
          <ThumbItem
            active={active === index.toString()}
            onClick={() => {
              const id = index.toString();
              setActive(id);
              if (!getIsActiveItem(id)) slideToItem(id);
            }}
          >
            FULL BODY
          </ThumbItem>
        ),
      };
    }),

    // [
    //   {
    //     id: "1",

    //     renderItem: (
    //       <Card
    //         price="200"
    //         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea voluptate animi, dolore repellat ullam quaerat voluptas quam adipisci mollitia nisi repudiandae in at maiores dicta vel laborum! Nesciunt reiciendis ipsum odit quod quam numquam necessitatibus delectus eius cumque sapiente."
    //         title="Full Body"
    //         item={item}
    //       />
    //     ),
    //     renderThumb: (
    //       <ThumbItem
    //         active={active === "1"}
    //         onClick={() => {
    //           const id = "1";
    //           setActive(id);
    //           if (!getIsActiveItem(id)) slideToItem(id);
    //         }}
    //       >
    //         FULL BODY
    //       </ThumbItem>
    //     ),
    //   },
    //   {
    //     id: "2",
    //     renderItem: (
    //       <Card
    //         price="100"
    //         desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ea voluptate animi, dolore repellat ullam quaerat voluptas quam adipisci mollitia nisi repudiandae in at maiores dicta vel laborum! Nesciunt reiciendis ipsum odit quod quam numquam necessitatibus delectus eius cumque sapiente."
    //         title="Half Body"
    //         item={item}
    //         invert={true}
    //       />
    //     ),
    //     renderThumb: (
    //       <ThumbItem
    //         active={active === "2"}
    //         onClick={() => {
    //           const id = "2";
    //           setActive(id);
    //           if (!getIsActiveItem(id)) slideToItem(id);
    //         }}
    //       >
    //         HALF BODY
    //       </ThumbItem>
    //     ),
    //   },
    // ],
  });

  useListenToCustomEvent("onSlideStartChange", (data: any) => {
    // set({ opacity: data.nextItem === 1 ? 1 : 0 });
    setItem(!item);
  });

  return (
    <div>
      {carouselFragment}
      <div
        style={{
          height: "12vh",
          paddingLeft: "5vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        {" "}
        {thumbsFragment}{" "}
      </div>
    </div>
  );
}
