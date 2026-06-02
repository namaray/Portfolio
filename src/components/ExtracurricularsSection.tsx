// ExtracurricularsSection.tsx
export default function ExtracurricularsSection() {
  const activities = [
    { title: "[Activity Name]", role: "[Your Role]", year: "[2023 - Present]", desc: "[Short description of the activity and your involvement.]" },
    // add more...
  ];
  return (
    <section id="extracurriculars" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-neutral">Extracurriculars</h2>
      <div className="space-y-6">
        {activities.map((a, i) => (
          <div key={i} className="border-l-2 border-accent pl-5">
            <h3 className="font-semibold text-lg text-neutral">{a.title}</h3>
            <p className="text-sm text-neutral/70">{a.role} · {a.year}</p>
            <p className="mt-1 text-neutral/80">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
