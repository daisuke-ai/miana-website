const stats = [
  { value: "500+", label: "Properties Acquired" },
  { value: "21", label: "Day Avg. Close" },
  { value: "$50M+", label: "Total Invested" },
  { value: "100%", label: "Closing Rate" },
];

export function StatsSection() {
  return (
    <section className="border-t border-b" style={{ borderColor: '#dddddd' }}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-2">
                {stat.value}
              </p>
              <p className="font-mono text-xs md:text-[13px] uppercase tracking-[0.5px] text-foreground-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
