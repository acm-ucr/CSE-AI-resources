import Link from "next/link";

type props = {
  text: string;
  link: string;
  title: string;
};

const Links = ({ text, link, title }: props) => {
  return (
    <div className="flex items-center gap-2 text-xl">
      <span className="font-bold">{title}</span>
      <Link
        className="tracking-tighter text-ucr-blue/90 duration-300 hover:opacity-70"
        href={link}
        target={"_black"}
      >
        {text}
      </Link>
    </div>
  );
};

export default Links;
