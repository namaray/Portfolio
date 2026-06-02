// AwardsSection.tsx
export default function AwardsSection() {
  const awards = [
    { title: "[Award Name]", org: "[Organization]", year: "[2024]", desc: "[Short description of the award.]" },
    // add more...
  ];
  return (
    <section id="awards" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-neutral">Awards & Mentions</h2>
      <div className="space-y-6">
        {awards.map((a, i) => (
          <div key={i} className="border-l-2 border-accent pl-5">
            <h3 className="font-semibold text-lg text-neutral">{a.title}</h3>
            <p className="text-sm text-neutral/70">{a.org} · {a.year}</p>
            <p className="mt-1 text-neutral/80">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
