import myArt from "../Assests/myArt.jpg";
import Galaxy from "../Assests/Galaxy.jpg";
import blogImage1 from "../Assests/blogImage1.jpg";
import blogImage2 from "../Assests/blogImage2.jpg";
import blogImage3 from "../Assests/blogImage3.jpg";

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const myProjects = [
  {
    title: "first Project",
    description: "Card Description",
    id: 1,
    img: myArt,
  },
  {
    title: "Second Project",
    description: "Card Description",
    id: 2,
    img: Galaxy,
  },
  {
    title: "Third Project",
    description: "Card Description",
    id: 3,
    img: blogImage1,
  },
];
