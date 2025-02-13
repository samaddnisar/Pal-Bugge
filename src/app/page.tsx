import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";

import WorkGrid from "@/components/work/WorkGrid";
import Milestones from "@/components/milestones/Milestones";
import Past from "@/components/past/Past";

import Carousel from "@/components/ui/Carousel";

const images = [
  "dag.png",
  "exit.png",
  "exit2.png",
  "swedishdicks.png",
  "beforeigners.png",
];

const page = () => {
  return (
    <div>
      <header>
        <div className="flex mt-32 flex-col items-center w-min mx-auto leading-[0.9] ">
          <Heading className="nice">PÅL BUGGE</Heading>
          <Heading className="nice">HAAGENRUD</Heading>
          <Paragraph className="md:text-start text-center leading-[1.1] mt-5">
            Haagenrud´s career spans over nearly three decades starting out as
            camera assistant in the late eighties and enlisted as first
            assistant camera for legendary cinematographer Sven Nykvist, ASC.
          </Paragraph>
        </div>
        <img
          src="/images/rotating-circle.png"
          alt="CINEMATOGRAPHER"
          className="md:size-28 size-16"
          style={{
            animation: "rotate-animation 15s linear infinite",
          }}
        />
      </header>
      <WorkGrid />
      <Milestones />
      <Past />
      <Carousel images={images} />
    </div>
  );
};

export default page;

const PalBugge = () => {
  return (
    <div className="relative">
      <img src="/images/pal.png" alt="Pal Bugge" />
    </div>
  );
};
