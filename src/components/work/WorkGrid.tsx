import Work from "./Work";
import workData from "@/data/work.json";
import { twMerge } from "tailwind-merge";

const WorkGrid = (): JSX.Element => {
  return (
    <section id="#work">
      <ul className={twMerge("grid grid-cols-1 md:grid-cols-2 gap-8 mt-48")}>
        {workData.map((work) => (
          <Work
            key={work.title}
            title={work.title}
            image={work.image}
            link={work.link}
          />
        ))}
      </ul>
    </section>
  );
};

export default WorkGrid;
