import Achievement from "@/components/achievement/Achievement";
import Milestones from "@/components/milestones/Milestones";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section>
        <div className="relative h-[40rem]">
          <Image
            src="/images/about-header.png"
            fill
            className="aspect-[16/8] object-cover object-top rounded-xl"
            alt="Pal Bugge"
          />
        </div>
        <Heading className="mt-8 max-w-[55rem] leading-tight">About Me</Heading>
        <Paragraph className="max-w-[40rem]">
          Haagenrud's journey began as a camera assistant and focus puller for
          renowned Norwegian cinematographer Svein Krøvel. His passion for
          storytelling through visuals led him to elevate his career as
          cinematographer in Norway.
        </Paragraph>
      </section>
      <Achievement />
      <Milestones />
      <section className="mt-48">
        <div className="relative h-[40rem]">
          <Image
            src="/images/cameraman-2.png"
            fill
            className="aspect-[16/8] object-cover  grayscale rounded-xl"
            alt="Pal Bugge"
          />
        </div>
        <Heading className="mt-8 max-w-[55rem] leading-tight">
          Haagenrud's Dynamic Portfolio
        </Heading>
        <Paragraph className="max-w-[65rem]">
          He has also contributed as the cinematographer for season 3 of the
          Netflix original “Lilyhammer” and the ViaPlay drama-comedy “Swedish
          Dicks” seasons 1 and 2, starring Peter Stormare. Furthermore,
          Haagenrud was cinematographer on four seasons and forty episodes of
          the critically acclaimed Norwegian TV2 drama series “DAG,” directed by
          Øystein Karlsen with Kristopher Schau as a co-writer.Haagenrud has
          received recognition for his work, including an Emmy for the official
          Olympic film from Lillehammer in 1994 and Gullruten Fagpris for Best
          Cinematography for “EXIT.” He was also part of the team that won
          Gullruten for Årets Nyskapning with the TV2 series “De 7 Dødssyndene,”
          with Kristopher Schau. In addition to his success on screen, Haagenrud
          is a co-owner of Moviebird, the leading rental company for
          Filmotechnics U-Crane System, Flighthead gyro remoteheads, and
          technocranes in Norway.
        </Paragraph>
      </section>
    </div>
  );
};

export default page;
