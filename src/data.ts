export interface ImageProps {
  url: string;
}

export interface CardItemProps {
  title: string;
  item?: boolean;
  price: string;
  desc: string;
  images: Array<ImageProps>;
  index?: string;
}

export interface CardProps {
  type: string;
  content: Array<CardItemProps>;
}

const list: Array<CardProps> = [
  {
    type: "Art",
    content: [
      {
        title: "Emotes",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
        price: "200",
        images: [
          {
            url:
              "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f8ea1772846697.5e56089a2adeb.png",
          },
          {
            url:
              "https://mir-s3-cdn-cf.behance.net/project_modules/1400/61cfff72846697.5e56089a39b38.png",
          },
        ],
      },
      {
        title: "teste dois",
        desc:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
        price: "200",
        images: [
          {
            url:
              "https://pbs.twimg.com/media/EquMT91UwAAzDNb?format=jpg&name=900x900",
          },
          {
            url:
              "https://pbs.twimg.com/media/EquMT91UwAAzDNb?format=jpg&name=900x900",
          },
        ],
      },
      {
        title: "teste nice",
        desc:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
        price: "200",
        images: [
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/794377696611663893/yukipng2.png",
          },
          {
            url:
              "https://cdn.discordapp.com/attachments/353348612501012481/794377696611663893/yukipng2.png",
          },
        ],
      },
    ],
  },
  {
    type: "VTuber",
    content: [
      {
        title: "Full Body",
        desc:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
        price: "100",
        images: [
          {
            url:
              "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/685057_990896.png",
          },
          {
            url:
              "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/969646_118561.png",
          },
          {
            url:
              "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/1369026/317566_135793.png",
          },
        ],
      },
      {
        title: "Half Body",
        desc:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis inventore expedita at praesentium itaque voluptas nulla minus commodi. Ducimus porro est numquam beatae molestiae natus optio voluptatibus expedita esse quisquam?",
        price: "200",
        images: [
          {
            url:
              "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/112336_876930.jpeg",
          },
          {
            url:
              "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1000,w_500,f_auto,q_auto/1369026/712914_145875.jpeg",
          },
        ],
      },
    ],
  },
];

export default list;
