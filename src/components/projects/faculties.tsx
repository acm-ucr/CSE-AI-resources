import Image, { StaticImageData } from "next/image";

type facultyProps = {
  name: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const Faculties = ({ name, description, image, alt }: facultyProps) => {
  return (
    <div className="font-inter w-2/3 flex-col items-center justify-center overflow-hidden">
      <Image
        className="overflow-hidden"
        width={750}
        height={900}
        src={image}
        alt={`A portrait of ${alt}`}
      />
      <div className="h-full flex-none bg-[#375cae] py-4">
        <p className="line-clamp-1 p-4 align-middle text-xl text-white md:text-4xl">
          {name}
        </p>
        <p className="line-clamp-1 text-wrap p-4 pt-0 align-middle text-base text-gray-200 md:text-xl">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Faculties;
