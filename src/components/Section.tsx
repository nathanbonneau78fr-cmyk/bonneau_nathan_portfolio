import Container from "./Container";

export default function Section({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <header className="mb-6 md:mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink-50 md:text-3xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-200 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </header>
        {children}
      </Container>
    </section>
  );
}
