import { ChevronRight } from "lucide-react";
import Section from "../ui/Section";

const collections = [
  {
    title: "Dragons",
    description:
      "Articulated dragons, fantasy creatures, and mythical collectibles.",
  },
  {
    title: "Mini Critter Bowls",
    description:
      "Whimsical desk companions that combine charm with everyday function.",
  },
  {
    title: "Character Balls",
    description:
      "Fan-inspired collectibles and articulated figures for every age.",
  },
  {
    title: "New Arrivals",
    description:
      "The newest additions to the 2D3D collection.",
  },
];

export default function Collections() {
  return (
    <Section id="collections">
      <div className="mb-14 text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-blue-600">
          Explore
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Explore Our Collections
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-600">
          Discover professionally manufactured collectibles curated for gift
          shops, hobby stores, boutiques, and specialty retailers.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {collections.map((collection) => (
          <div
            key={collection.title}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-slate-100 to-blue-50">
              <span className="text-sm uppercase tracking-[0.3em] text-gray-400">
                Image
              </span>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold">
                {collection.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {collection.description}
              </p>

              <button className="mt-8 flex items-center font-medium text-blue-600 transition group-hover:translate-x-1">
                View Collection
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}