import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-[18px] bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}