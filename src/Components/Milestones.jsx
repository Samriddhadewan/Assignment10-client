export default function Milestones() {
    const milestones = [
      { year: "2022", achievement: "Launched our first campaign and gained 10,000 supporters." },
      { year: "2023", achievement: "Expanded to 5 new communities and impacted 50,000+ lives." },
      { year: "2024", achievement: "Raised $1M in funding to scale our mission further." },
    ];
  
    return (
      <section className="bg-[#0E7A81] text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl text-[#FFFFF0] font-bold mb-8">Milestones & Accomplishments</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-[#FFFFF0] text-gray-500 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold">{milestone.year}</h3>
                <p className="mt-2">{milestone.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  