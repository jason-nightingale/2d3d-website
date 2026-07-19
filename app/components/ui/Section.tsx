type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: Props) {
  return (
    <section
      className={`mx-auto max-w-7xl px-6 py-20 ${className}`}
    >
      {children}
    </section>
  );
}