import Paragraph from "../ui/Paragraph";

interface AchievementCardProps {
  heading: string;
  paragraph: string;
  index: number;
}

const AchievementCard = ({
  heading,
  paragraph,
  index,
}: AchievementCardProps) => {
  return (
    <div className="border border-border flex flex-col gap-4 py-5 px-8 rounded-lg">
      <img
        src={`/images/ach-${index + 1}.png`}
        className="size-8"
        alt={heading}
      />
      <Paragraph className="text-light text-2xl uppercase">{heading}</Paragraph>
      <Paragraph className="text-base">{paragraph}</Paragraph>
    </div>
  );
};

export default AchievementCard;
