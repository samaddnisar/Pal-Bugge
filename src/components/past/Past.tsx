import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Awards from "./Awards";

const Past = () => {
  return (
    <section className="mt-48">
      <img
        src="/images/cameraman.png"
        alt="Pal Bugge"
        className="aspect-auto md:aspect-video object-cover object-top rounded-xl"
      />
      <Awards />
      <Heading className="mt-8 max-w-[55rem] leading-tight">
        Haagenrud Focusing in recent years on tv-drama series
      </Heading>
      <Paragraph className="max-w-[65rem]">
        Haagenrud completed three seasons as Director of Photography on EXIT. An
        Nordic all star cast TV drama series for NRK. A huge hit in the Nordic
        market and sold to 30 countries. He also shot the ViaPlay crime hit
        series "Wisting 2 and 3," the HBO series “Beforeigners 2," the Netflix
        Original "Lillyhammer 3," and was co-DP on "Swedish Dicks Season 1 and 2
        with Peter Stormare and Keanu Reeves. Haagenrud shot four seasons of the
        acclaimed TV2 series DAG. He won an Emmy for the 1994 Lillehammer
        Official Olympic film and a Gullruten Award for EXIT. Haagenrud
        co-founded Moviebird Norway, a leading filmequipment rental company.
      </Paragraph>
    </section>
  );
};

export default Past;
