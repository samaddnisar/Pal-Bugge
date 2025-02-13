import Paragraph from "../ui/Paragraph";

interface AwardProps {
  award: string;
}

const Award = ({ award }: AwardProps) => {
  return (
    <div className="px-3 py-4 border border-border rounded-lg flex  justify-between">
      <img src="/images/award.png" alt="Award" className="h-7" />
      <Paragraph>{award}</Paragraph>
      <span />
    </div>
  );
};

export default Award;
