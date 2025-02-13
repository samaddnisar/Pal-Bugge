import Heading from "../ui/Heading";
import Milestone from "./Milestone";
import milestones from "@/data/milestones.json";

const Milestones = (): JSX.Element => {
  return (
    <section className="mt-8">
      <Heading className=" mt-48 max-w-[35rem] leading-tight">
        Key Milestones in My Professional Career
      </Heading>
      <div className="flex flex-col mt-16 gap-14">
        {milestones.map(({ heading, paragraph }) => (
          <Milestone key={paragraph} heading={heading} paragraph={paragraph} />
        ))}
      </div>
    </section>
  );
};

export default Milestones;
