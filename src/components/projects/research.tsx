import React from "react";

const research = () => {
  const placeholderImages = [
    "https://placehold.co/360x360/00378F/00378F.png",
    "https://placehold.co/360x360/00378F/00378F.png",
    "https://placehold.co/360x360/00378F/00378F.png",
  ];

  return (
    <div>
      <div className="mb-7 inline-block">
        <h1 className="mb-2 text-5xl">Projects & Research</h1>
        <div className="h-1 bg-[#FFB81C]"></div>
      </div>

      <p className="font-inter mb-16 max-w-[1260px] text-[25px] font-normal leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex justify-around gap-20">
        {placeholderImages.map((image, index) => (
          <div>
            <div key={index} className="h-image w-image text-center">
              <img
                src={image}
                alt="Image placeholder with blue background"
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default research;
