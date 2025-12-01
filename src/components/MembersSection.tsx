import Logo from "./Logo";

export default function MembersSection() {
  const members = [
    {
      name: "Dr. Lauren Dean",
      title: "Dentist",
    },
    {
      name: "Dr. Jeff Flannery",
      title: "Dentist",
    },
    {
      name: "Dr. Adrian Lovell",
      title: "Dentist",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Logo como sombra de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-4 scale-[2.8]">
          <Logo size="lg" color="default" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Meet a few of our members
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Our founders are pediatric dentists who know the struggles firsthand
            and are committed to creating a community where we can be better,
            together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-primary-600 text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#about"
            className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}
