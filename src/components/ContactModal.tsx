"use client";

import { useState } from "react";

// Interface para as props do modal de contato
interface ContactModalProps {
  onClose: () => void;
}

// Modal de contato para informações de prática odontológica
// Este componente é usado para coletar informações detalhadas de dentistas interessados
export default function ContactModal({ onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    practiceName: "",
    website: "",
    streetAddress: "",
    city: "",
    state: "",
    annualCollections: "",
    practiceLocations: "",
    numberOfDentists: "",
    hopes: "",
    contributions: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          practiceName: "",
          website: "",
          streetAddress: "",
          city: "",
          state: "",
          annualCollections: "",
          practiceLocations: "",
          numberOfDentists: "",
          hopes: "",
          contributions: "",
        });
      }, 2000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Contact Information
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <p className="text-gray-600 mb-4">
            Submit your email and we'll reach out to schedule a short
            introductory call to see if Fireside and your practice are a good
            fit.
          </p>
          <p className="text-gray-600 mb-8">
            <strong>Support contact:</strong> info@firesidedc.com
          </p>

          {submitStatus === "success" && (
            <div className="bg-accent-100 border border-accent-400 text-accent-700 px-4 py-3 rounded mb-6">
              Thank you! Your submission has been received!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              Oops! Something went wrong while submitting the form.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
              />
            </div>

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile phone number*"
              value={formData.mobile}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />
            <input
              type="text"
              name="practiceName"
              placeholder="Practice name"
              value={formData.practiceName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />
            <input
              type="url"
              name="website"
              placeholder="Website URL"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />

            <input
              type="text"
              name="streetAddress"
              placeholder="Street address"
              value={formData.streetAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
              />
              <input
                type="text"
                name="state"
                placeholder="State/Region"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
              />
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Your Practice
            </h3>
            <input
              type="text"
              name="annualCollections"
              placeholder="What is your practice's annual collections?"
              value={formData.annualCollections}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />
            <input
              type="text"
              name="practiceLocations"
              placeholder="Number of practice locations"
              value={formData.practiceLocations}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />
            <input
              type="text"
              name="numberOfDentists"
              placeholder="Number of dentists in your practice"
              value={formData.numberOfDentists}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Our Community
            </h3>
            <textarea
              name="hopes"
              placeholder="What do you hope to gain from joining Fireside?"
              value={formData.hopes}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />
            <textarea
              name="contributions"
              placeholder="What unique contributions will you make to the Fireside community?"
              value={formData.contributions}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-black"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
