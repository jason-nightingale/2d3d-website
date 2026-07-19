import Button from "./components/ui/Button";
import Section from "./components/ui/Section";

export default function Home() {
  return (
    <main>
      <Section className="min-h-[80vh] flex flex-col justify-center">
        <span className="mb-4 text-blue-600 font-semibold uppercase tracking-widest">
          Premium 3D Printed Collectibles
        </span>

        <h1 className="max-w-4xl text-6xl font-bold leading-tight">
          Premium 3D Printed Collectibles for Retailers
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Curated products, expertly manufactured, and ready for your shelves.
          Discover a growing collection of dragons, collectibles, desk companions,
          and unique gifts designed to delight customers.
        </p>

        <div className="mt-10 flex gap-4">
          <Button href="#">
            Shop on Faire
          </Button>

          <Button href="#">
            Explore Collections
          </Button>
        </div>
      </Section>
    </main>
  );
}