import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

interface MilestoneProps {
  heading: string;
  paragraph: string;
}

const Milestone = ({ heading, paragraph }: MilestoneProps) => {
  return (
    <div className="grid grid-cols-2 pt-3 pb-5 mt-1 border-b border-border">
      <Heading>{heading}</Heading>
      <Paragraph>{paragraph}</Paragraph>
    </div>
  );
};

export default Milestone;
