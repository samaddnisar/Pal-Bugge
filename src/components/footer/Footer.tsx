import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import Paragraph from "../ui/Paragraph";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between flex-col md:flex-row gap-4 items-center mt-48">
        <Logo size={200} />
        <Paragraph className="md:w-1/2">
          Ready to bring your cinematic vision to life? Contact Haagenrud today
          to discuss your project, collaborate on visual storytelling, and
          embark on a journey of unparalleled cinematography.
        </Paragraph>
      </div>
      <Heading className="!text-[22vw] tracking-tighter text-center leading-tight mt-28">
        PÅL BUGGE
      </Heading>
      <div className="flex justify-between mb-4">
        <Paragraph>All rights reserved by Haagenrud</Paragraph>
        <Paragraph>All right reserrved</Paragraph>
      </div>
    </footer>
  );
};

export default Footer;
