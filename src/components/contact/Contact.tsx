import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-48 items-center grid gap-x-4 gap-y-28 grid-cols-1 lg:grid-cols-2 justify-between"
    >
      <div className="flex flex-col gap-24">
        <div>
          <Heading>Reach me at:</Heading>
          <Paragraph className="mt-7">paal@moviebird.no</Paragraph>
          <Paragraph className="mt-3">+47 90162840</Paragraph>
        </div>
        <div>
          <Heading>Manager/Agent:</Heading>
          <Paragraph className="mt-7">glenn@globalensemble.com</Paragraph>
          <Paragraph className="mt-3">+47 91534846</Paragraph>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
