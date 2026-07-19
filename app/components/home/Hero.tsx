import { ArrowRight, ShieldCheck, PackageCheck, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section className="py-24">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-blue-600">
            Premium 3D Printed Collectibles
          </p>

          <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
            Premium 3D Printed Collectibles
            <br />
            for Retailers
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Curated products, expertly manufactured, and ready for your
            shelves. From whimsical dragons to collectible desk companions,
            every piece is produced with consistency, quality, and retail
            presentation in mind.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button href="#">
              Shop on Faire
            </Button>

            <a
              href="#collections"
              className="inline-flex items-center rounded-[18px] border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100"
            >
              Explore Collections
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm text-gray-700">

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-emerald-500" size={20} />
              Premium Quality
            </div>

            <div className="flex items-center gap-2">
              <PackageCheck className="text-emerald-500" size={20} />
              Wholesale Ready
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="text-emerald-500" size={20} />
              Curated Collection
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="aspect-square rounded-[32px] bg-gradient-to-br from-blue-50 to-slate-100 shadow-xl">

            <div className="flex h-full items-center justify-center">

              <div className="rounded-3xl border border-dashed border-blue-300 bg-white/70 p-10 text-center backdrop-blur">

                <p className="text-lg font-semibold text-gray-800">
                  Featured Product Showcase
                </p>

                <p className="mt-3 text-gray-500">
                  Hero photography coming soon
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </Section>
  );
}