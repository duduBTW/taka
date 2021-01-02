import React from "react";
import { Content, Button, Header } from "../../styles/commissions";
import { useSpringCarousel } from "react-spring-carousel-js";

//@ts-ignore
import { FullPage, Slide } from "react-full-page";
import { animated, config, Spring } from "react-spring/renderprops";
import { useSpring } from "react-spring";
import Row from "../../components/commission/Row";

export default function Commissions() {
  const [item, setItem] = React.useState(false);
  const [item2, setItem2] = React.useState(false);
  // const [show, setShow] = React.useState(false);

  // const { carouselFragment, useListenToCustomEvent } = useSpringCarousel({
  //   initialActiveItem: 0,
  //   items: [
  //     {
  //       id: "item-1",
  //       renderItem: (
  //         <div>
  //           <Content>
  //             <div className="slide">
  //               <div className="item">
  //                 <Spring
  //                   reset={!item}
  //                   delay={350}
  //                   from={{
  //                     opacity: 0,

  //                     // transform: "translate3d(-600px,0px,0px)",
  //                   }}
  //                   to={{
  //                     opacity: 1,
  //                     // transform: "translate3d(20%,0px,0px)",
  //                   }}
  //                 >
  //                   {(props) => (
  //                     <div style={props} className="body">
  //                       <div className="price">$200</div>
  //                       <div className="desc">
  //                         Lorem ipsum, dolor sit amet consectetur adipisicing
  //                         elit. Quasi provident doloribus eligendi veritatis
  //                         ipsa sit beatae vero ex ratione harum? Molestias
  //                         assumenda eligendi laborum quasi voluptatum,
  //                         consectetur nobis quos doloribus explicabo odio?
  //                         Repudiandae cupiditate itaque quod nostrum eaque modi
  //                         omnis, est culpa rem maxime necessitatibus eum, nobis,
  //                         commodi sit qui ipsam minima veritatis! Alias
  //                         exercitationem
  //                       </div>
  //                       <Button>Order now</Button>
  //                     </div>
  //                   )}
  //                 </Spring>
  //                 <Spring
  //                   reset={!item}
  //                   delay={350}
  //                   from={{
  //                     opacity: 0,
  //                     transform: "scale(0) translateX(0px)",
  //                   }}
  //                   to={{
  //                     opacity: 1,
  //                     transform: "scale(1) translateX(-20%)",
  //                   }}
  //                 >
  //                   {(props) => <div style={props} className="image"></div>}
  //                 </Spring>
  //                 <Spring
  //                   reset={!item}
  //                   delay={300}
  //                   from={{
  //                     opacity: 0,
  //                     transform: "translate3d(100px,0px,0px)",
  //                   }}
  //                   to={{
  //                     opacity: 1,
  //                     transform: "translate3d(0px,0px,0px)",
  //                   }}
  //                 >
  //                   {(props) => (
  //                     <div style={props} className="title">
  //                       F <br />
  //                       U <br />
  //                       L <br />
  //                       L <br />
  //                       <br />
  //                       B <br />
  //                       O <br />
  //                       D <br />
  //                       Y <br />
  //                     </div>
  //                   )}
  //                 </Spring>
  //               </div>
  //             </div>
  //           </Content>
  //         </div>
  //       ),
  //     },
  //     {
  //       id: "item-2",
  //       renderItem: (
  //         <div>
  //           <Content>
  //             <div className="slide">
  //               <div className="item">
  //                 <Spring
  //                   reset={item}
  //                   delay={150}
  //                   from={{
  //                     opacity: 0,
  //                     transform: "translate3d(-600px,0px,0px)",
  //                   }}
  //                   to={{
  //                     opacity: 1,
  //                     transform: "translate3d(0px,0px,0px)",
  //                   }}
  //                 >
  //                   {(props) => (
  //                     <div style={props} className="body">
  //                       <div className="price">$200</div>
  //                       <div className="desc">
  //                         Lorem ipsum, dolor sit amet consectetur adipisicing
  //                         elit. Quasi provident doloribus eligendi veritatis
  //                         ipsa sit beatae vero ex ratione harum? Molestias
  //                         assumenda eligendi laborum quasi voluptatum,
  //                         consectetur nobis quos doloribus explicabo odio?
  //                         Repudiandae cupiditate itaque quod nostrum eaque modi
  //                         omnis, est culpa rem maxime necessitatibus eum, nobis,
  //                         commodi sit qui ipsam minima veritatis! Alias
  //                         exercitationem
  //                       </div>
  //                       <Button>Order now</Button>
  //                     </div>
  //                   )}
  //                 </Spring>
  //                 <Spring
  //                   reset={item}
  //                   delay={150}
  //                   from={{
  //                     opacity: 0,
  //                     transform: "scale(0) translateX(0px)",
  //                   }}
  //                   to={{
  //                     opacity: 1,
  //                     transform: "scale(1) translateX(-20%)",
  //                   }}
  //                 >
  //                   {(props) => <div style={props} className="image"></div>}
  //                 </Spring>
  //                 <Spring
  //                   reset={item}
  //                   delay={200}
  //                   from={{
  //                     opacity: 0,
  //                     transform: "translate3d(100px,0px,0px)",
  //                   }}
  //                   to={{
  //                     opacity: 1,
  //                     transform: "translate3d(0px,0px,0px)",
  //                   }}
  //                 >
  //                   {(props) => (
  //                     <div style={props} className="title">
  //                       F <br />
  //                       U <br />
  //                       L <br />
  //                       L <br />
  //                       <br />
  //                       B <br />
  //                       O <br />
  //                       D <br />
  //                       Y <br />
  //                     </div>
  //                   )}
  //                 </Spring>
  //               </div>
  //             </div>
  //           </Content>
  //         </div>
  //       ),
  //     },
  //   ],
  // });

  // useListenToCustomEvent("onSlideStartChange", (data: any) => {
  //   // set({ opacity: data.nextItem === 1 ? 1 : 0 });
  //   setItem(!item);
  // });

  // const teste = useSpringCarousel({
  //   items: [
  //     {
  //       id: "item-3",
  //       renderItem: (
  //         <Content>
  //           <div className="slide">
  //             <div className="item">
  //               <div className="body"></div>
  //               <div className="image"></div>
  //               <div className="title">
  //                 F <br />
  //                 U <br />
  //                 L <br />
  //                 L <br />
  //                 <br />
  //                 B <br />
  //                 O <br />
  //                 D <br />
  //                 Y <br />
  //               </div>
  //             </div>
  //           </div>
  //         </Content>
  //       ),
  //     },
  //     {
  //       id: "item-4",
  //       renderItem: (
  //         <Content>
  //           <div className="slide">
  //             <div className="item">
  //               <div className="body">a</div>
  //               <div className="image"></div>
  //               <div className="title">
  //                 F <br />
  //                 U <br />
  //                 L <br />
  //                 L <br />
  //                 <br />
  //                 B <br />
  //                 O <br />
  //                 D <br />
  //                 Y <br />
  //               </div>
  //             </div>
  //           </div>
  //         </Content>
  //       ),
  //     },
  //   ],
  // });

  return (
    <FullPage
    // beforeChange={(data: any) => {
    //   if (data.top !== 0) {
    //     setShow(!show);
    //   }
    // }}
    >
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
      <Slide>
        <Row
          items={[
            {
              title: "teste",
              desc:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
              price: "100",
            },
            {
              title: "teste dois",
              desc:
                " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
              price: "200",
            },
          ]}
          item={item}
          setItem={setItem}
        />
      </Slide>

      <Slide> {/* <Row item={item2} setItem={setItem2} /> */}</Slide>

      {/* <button onClick={() => enterFullscreen()}>Full</button>
      <div className="section">
        <p>Section 3</p>
      </div> */}
    </FullPage>
  );
}
