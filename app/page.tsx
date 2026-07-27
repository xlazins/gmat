const sections = [
  {
    title: "Integers",
    body: "Integers are all whole numbers: positive numbers, negative numbers, and zero. GMAT questions often test the patterns they create, especially signs, parity, factors, multiples, and remainders.",
    example: "Positive: 1, 2, 3... | Negative: -1, -2, -3... | Center: 0",
  },
  {
    title: "Divisibility",
    body: "One integer divides another when the division leaves no remainder. This is the foundation for factor, multiple, GCF, LCM, and remainder questions.",
    example: "6 divides 18 because 18 / 6 = 3 with remainder 0.",
  },
  {
    title: "Prime Factorization",
    body: "Break a number into prime building blocks. Every integer greater than 1 can be written as a product of primes.",
    example: "84 = 2 x 2 x 3 x 7 = 2^2 x 3 x 7.",
  },
  {
    title: "GCF and LCM",
    body: "For GCF, take common prime factors at their lowest powers. For LCM, take every prime factor that appears at its highest power.",
    example: "18 = 2 x 3^2 and 24 = 2^3 x 3, so GCF = 6 and LCM = 72.",
  },
  {
    title: "Remainders",
    body: "A remainder must be non-negative and smaller than the divisor. Modular arithmetic lets you work with remainders without doing large calculations.",
    example: "17 = 5 x 3 + 2, so 17 is congruent to 2 mod 5.",
  },
  {
    title: "Parity",
    body: "Parity means even versus odd. Use parity rules to simplify expressions before calculating exact values.",
    example: "If n is odd, then n^2 + 3n is even because odd + odd = even.",
  },
];

const divisibilityRules = [
  ["2", "Last digit is even: 0, 2, 4, 6, or 8."],
  ["3", "Digit sum is divisible by 3."],
  ["4", "Last two digits form a number divisible by 4."],
  ["5", "Number ends in 0 or 5."],
  ["6", "Number is divisible by both 2 and 3."],
  ["8", "Last three digits form a number divisible by 8."],
  ["9", "Digit sum is divisible by 9."],
  ["10", "Number ends in 0."],
];

const drills = [
  {
    prompt: "Find the prime factorization of 84.",
    answer: "84 = 2^2 x 3 x 7",
  },
  {
    prompt: "What are GCF(18, 24) and LCM(18, 24)?",
    answer: "GCF = 6 and LCM = 72",
  },
  {
    prompt: "What is the remainder when 3^5 is divided by 4?",
    answer: "3, because 3 is congruent to -1 mod 4.",
  },
  {
    prompt: "Is n^2 + 3n even or odd when n is odd?",
    answer: "Even.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="lesson-hero">
        <div className="hero-copy">
          <p className="eyebrow">GMAT Quant Lesson 4.1</p>
          <h1>Integers and Divisibility</h1>
          <p>
            Master the number properties that drive GMAT factor, multiple,
            divisibility, remainder, parity, and pattern questions.
          </p>
          <div className="hero-actions" aria-label="Lesson actions">
            <a href="#lesson">Start lesson</a>
            <a href="#practice">Practice</a>
          </div>
        </div>
        <div className="number-board" aria-label="Integer concept map">
          <span>-12</span>
          <span>-3</span>
          <strong>0</strong>
          <span>6</span>
          <span>18</span>
          <small>Factors, multiples, remainders, parity</small>
        </div>
      </section>

      <section className="summary-band" aria-label="Key formulas">
        <div>
          <span>GCF x LCM</span>
          <strong>= a x b</strong>
        </div>
        <div>
          <span>Factor count</span>
          <strong>(a + 1)(b + 1)...</strong>
        </div>
        <div>
          <span>Consecutive integers</span>
          <strong>3 in a row include a multiple of 3</strong>
        </div>
      </section>

      <section id="lesson" className="content-grid">
        <div className="lesson-flow">
          <p className="section-kicker">Core Lesson</p>
          <h2>Build the integer toolkit</h2>
          {sections.map((section) => (
            <article className="lesson-card" key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
              <code>{section.example}</code>
            </article>
          ))}
        </div>

        <aside className="reference-panel" aria-label="Divisibility rules">
          <p className="section-kicker">Quick Reference</p>
          <h2>Divisibility Tests</h2>
          <div className="rule-list">
            {divisibilityRules.map(([number, rule]) => (
              <div className="rule" key={number}>
                <strong>{number}</strong>
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="strategy-section">
        <p className="section-kicker">GMAT Strategy</p>
        <h2>Know when to use each tool</h2>
        <div className="strategy-grid">
          <article>
            <h3>GCF</h3>
            <p>Use it for common factors, simplifying ratios, and reducing fractions.</p>
          </article>
          <article>
            <h3>LCM</h3>
            <p>Use it for timing, repetition, and shared cycles.</p>
          </article>
          <article>
            <h3>Remainders</h3>
            <p>Use modular arithmetic to avoid large calculations.</p>
          </article>
          <article>
            <h3>Units Digits</h3>
            <p>Track repeating cycles, such as powers of 7 cycling 7, 9, 3, 1.</p>
          </article>
        </div>
      </section>

      <section id="practice" className="practice-section">
        <p className="section-kicker">Practice Check</p>
        <h2>Try these before revealing the answer</h2>
        <div className="drill-list">
          {drills.map((drill, index) => (
            <details key={drill.prompt}>
              <summary>
                <span>{index + 1}</span>
                {drill.prompt}
              </summary>
              <p>{drill.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
