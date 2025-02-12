import FlowingMenu from "./Effects/FlowingMenu";


// import React from 'react'

const FifthPage = () => {
  const demoItems = [
    {
      link: "#",
      text: "Mojave",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Sonoma",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      link: "#",
      text: "Martin",
      image:
        "https://i.pinimg.com/236x/bf/9a/b5/bf9ab55eb6a82a4f9a6fdc52261cb279.jpg",
    },
    {
      link: "#",
      text: "Mozifa",
      image:
        "https://i.pinimg.com/236x/ba/4c/2d/ba4c2d8663644ad61986b1ee87240ae4.jpg",
    },
    {
      link: "#",
      text: "Steve",
      image:
        "https://i.pinimg.com/236x/96/04/4b/96044ba117087ad3de46a0c4d1946ff6.jpg",
    },
    {
      link: "#",
      text: "Dustin",
      image:
        "https://i.pinimg.com/236x/63/7a/c7/637ac7c9806fdfdbeed0c76ff6bcf6e6.jpg",
    },
    {
      link: "#",
      text: "Goldberg",
      image:
        "https://i.pinimg.com/236x/cb/50/f4/cb50f45e7db240c81b77efd6e3973b54.jpg",
    },
    {
      link: "#",
      text: "Katherine",
      image:
        "https://i.pinimg.com/236x/45/71/71/457171f724dc39d735248f333fac779e.jpg",
    },
  ];

  return (
    <div className="h-screen w-full bg-black text-white overflow-hidden">
      <div className="text-5xl font-bruce text-center mb-20">
        <h1>A Menu Section</h1>
      </div>
      <div style={{ height: "100%", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </div>
  );
};

export default FifthPage;
