import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/70 py-8">
      <Container>
        <p className="text-xs text-ink-300">
          © {new Date().getFullYear()} — Portfolio E4 BTS SIO SISR.
          <span className="text-ink-400">
            {" "}Contenus à personnaliser — preuves en PDF dans /public/preuves
          </span>
        </p>
      </Container>
    </footer>
  );
}
