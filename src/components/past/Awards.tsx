import Award from "./Award";

const awards = [
  "Recipient of Emmy and Gullruten Award",
  "More than 20 Years of Cinematic Excellence",
];
const Awards = () => {
  return (
    <div className="grid gap-x-8 gap-y-4 grid-cols-1 lg:grid-cols-2 mt-8">
      {awards.map((award) => {
        return <Award key={award} award={award} />;
      })}
    </div>
  );
};

export default Awards;
