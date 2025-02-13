import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import AchievementCard from "./AchievementCard";

const achievements = [
  {
    heading: "Cinematic Evolution:",
    paragraph:
      "Transitioned from camera assistant to cinematographer, with studies at The American Film Institute in Los Angeles. Worked alongside reknowned cinematographer Svein Krøvel",
  },
  {
    heading: "LA Ventures",
    paragraph:
      'Swedish Dicks" Season 1 and 2 starring Peter stormare, Johan Glans, Tracy Lords and Keanu Reeves',
  },
  {
    heading: "Stepping up the ladder",
    paragraph:
      'Co-produced and lensed part of the movie released documentary "Ett Slags Liv" with Lars Winnerbäck. Won Gullruten Award best newcomer for the eight episode TV2 documentary" The 7 Deadly Sins" starring Kristopher Schau.',
  },
];

const Achievement = () => {
  return (
    <section className="mt-48 flex flex-col gap-8 items-center">
      <Heading>MY ACHEIVMENTS AS CINEMATOGRAPHER</Heading>
      <Paragraph className="text-center max-w-4xl">
        Haagenrud has also distinguished himself as the cinematographer for the
        ViaPlay series “Wisting” seasons 2 and 3, directed by Trygve Allister
        Diesen, as well as the HBO series “Beforeigners” season 2, directed by
        Jens Lien.
      </Paragraph>
      x
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {achievements.map(({ heading, paragraph }, index) => {
          return (
            <AchievementCard
              key={heading}
              heading={heading}
              paragraph={paragraph}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Achievement;
