import Logo from "./Logo";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Logo como sombra de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-5 scale-[2.5]">
          <Logo size="lg" color="default" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            You're ready to transform your practice, but not sell it?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Join Fireside, a warm and welcoming place where you can grow your
            practice and your profits—without losing your independence.
          </p>
        </div>
      </div>
    </section>
  );
}
