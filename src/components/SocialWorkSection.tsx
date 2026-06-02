// SocialWorkSection.tsx
export default function SocialWorkSection() {
  const work = [
    { title: "[Cause / Project Name]", org: "[Organization or NGO]", year: "[2022 - 2023]", desc: "[Short description of your contribution.]" },
    // add more...
  ];
  return (
    <section id="social-work" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-neutral">Social Work</h2>
      <div className="space-y-6">
        {work.map((a, i) => (
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
