type Props = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  className = "",
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-7xl px-6 py-20 ${className}`}
    >
      {children}
    </section>
  );
}