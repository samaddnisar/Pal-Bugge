import Link from "next/link";
import Image from "next/image";
import Span from "../ui/Span";

interface WorkProps {
  title: string;
  image: string;
  link: string;
}

/**
 * Work component that displays a clickable item.
 * Clicking it will navigate to the provided link.
 */
const Work = ({ title, image, link }: WorkProps): JSX.Element => {
  return (
    <Link href={link} passHref>
      <div className="list-none">
        <div className="border flex flex-col gap-2 relative border-border group hover:bg-light duration-300 cursor-pointer p-1 rounded-xl">
          <div>
            {/* If you prefer Next.js' Image component for optimization, uncomment below: */}
            {/* <Image src={image} alt={title} width={400} height={300} className="rounded-lg" /> */}
            <img src={image} alt={title} className="rounded-lg" />
          </div>
          <Span className="mx-3 my-2 group-hover:text-darkest">{title}</Span>
        </div>
      </div>
    </Link>
  );
};

export default Work;
