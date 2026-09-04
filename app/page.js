export default function Home() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1.5rem',
      }}
    >
      <img
        src="/brand/celero-lockup-ink-coral-accent.svg"
        alt="Celero Software"
        style={{ height: 28, width: 'auto', marginBottom: '2.5rem' }}
      />
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          margin: 0,
          maxWidth: '18ch',
        }}
      >
        Something faster is on the way.
      </h1>
      <p
        style={{
          fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
          color: 'var(--ink-70)',
          maxWidth: '46ch',
          marginTop: '1.25rem',
        }}
      >
        Celero Software is building an AI agent that accelerates software
        implementation projects — reviewing configs, drafting changes, and
        showing its work.
      </p>
    </main>
  );
}
