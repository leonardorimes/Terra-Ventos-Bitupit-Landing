"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Marina Santos",
      role: "Investidora",
      location: "São Paulo, SP",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "A Terra Ventos transformou minha visão sobre investimento imobiliário. A curadoria é excepcional e o suporte jurídico me deu total segurança para investir no Ceará.",
      rating: 5,
      project: "Guajiru - Refúgio Atemporal",
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Empresário",
      location: "Rio de Janeiro, RJ",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "Como estrangeiro, tinha muitas dúvidas sobre comprar no Brasil. A equipe da Terra Ventos me acompanhou em todo o processo, desde a documentação até a transferência.",
      rating: 5,
      project: "Vila Cangalha - Resort-like",
    },
    {
      id: 3,
      name: "Ana Beatriz",
      role: "Arquiteta",
      location: "Fortaleza, CE",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content:
        "A experiência de investir com a Terra Ventos foi única. Eles realmente entendem o mercado local e oferecem oportunidades que combinam lifestyle e retorno financeiro.",
      rating: 5,
      project: "Preá - Prime Beachfront",
    },
  ];

  // Auto-rotation every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <AnimatedSection
      background="gradient"
      color="blue"
      direction="up"
      delay={0.1}
      className="py-12 md:py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
    >
      <div
        id="depoimentos"
        className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full"
      >
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500 mb-4 md:mb-6 font-heading px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            O que nossos investidores dizem
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-secondary-500 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Histórias reais de quem já investiu com a Terra Ventos
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="relative min-h-[500px] md:h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : 100,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="max-w-4xl mx-auto px-1 sm:px-2 md:px-4 w-full">
                  <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-12 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
                      {/* Profile */}
                      <div className="text-center md:text-left">
                        <div className="relative inline-block mb-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto md:mx-0 shadow-lg"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                testimonial.name
                              )}&background=6366f1&color=fff&size=150`;
                            }}
                          />
                          <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-accent-500 rounded-full flex items-center justify-center">
                            <svg
                              className="w-3 h-3 md:w-4 md:h-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-primary-500 mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-accent-500 font-medium mb-1">
                          {testimonial.role}
                        </p>
                        <p className="text-secondary-500 text-sm">
                          📍 {testimonial.location}
                        </p>
                        <div className="flex justify-center md:justify-start mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-4 h-4 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-2 text-center md:text-left">
                        <div className="mb-4 flex justify-center md:justify-start">
                          <svg
                            className="w-8 h-8 text-accent-500 mb-4"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                          >
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4z" />
                          </svg>
                        </div>
                        <blockquote className="text-base md:text-xl text-secondary-500 leading-relaxed mb-4 md:mb-6">
                          "{testimonial.content}"
                        </blockquote>
                        <div className="flex items-center justify-center md:justify-start text-sm text-accent-500 font-medium">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          Projeto: {testimonial.project}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-accent-500 scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              goToSlide(
                (currentIndex - 1 + testimonials.length) % testimonials.length
              )
            }
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/80 backdrop-blur-sm text-accent-600 hover:bg-white hover:text-accent-700 transition-all duration-300 shadow-lg"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => goToSlide((currentIndex + 1) % testimonials.length)}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/80 backdrop-blur-sm text-accent-600 hover:bg-white hover:text-accent-700 transition-all duration-300 shadow-lg"
          >
            <svg
              className="w-4 h-4 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-accent-500 mb-2">100%</div>
            <div className="text-secondary-500">
              Satisfação dos investidores
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-4xl font-bold text-accent-500 mb-2">15+</div>
            <div className="text-secondary-500">Anos de experiência</div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-4xl font-bold text-accent-500 mb-2">50+</div>
            <div className="text-secondary-500">Investimentos realizados</div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
