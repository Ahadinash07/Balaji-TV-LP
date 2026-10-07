import { useState } from "react";
import { CheckCircle } from "lucide-react";

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    issue: "",
    area: "",
    preference: "call",
    consent: false,
    company_website: "", // honeypot
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const issues = [
    "No Display", "No Sound", "TV Not Turning On", "Black Screen",
    "Screen Flickering", "Lines on Screen", "WiFi Not Connecting",
    "Apps Not Working", "Remote Not Working", "No Signal",
    "TV Keeps Restarting", "TV Overheating", "Other"
  ];

  const areas = [
    "Banjara Hills", "Hitech City", "Gachibowli", "Madhapur", "Kondapur",
    "Jubilee Hills", "Kukatpally", "Miyapur", "HITEC City", "Whitefield",
    "Kondapur", "Manikonda", "Narsingi", "Tellapur", "Gopanpally", "Other"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name is required (2-60 characters)";
    } else if (formData.name.length > 60) {
      newErrors.name = "Name must be less than 60 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.issue) {
      newErrors.issue = "Please select your TV issue";
    }

    if (!formData.consent) {
      newErrors.consent = "Please agree to privacy policy and lead consent";
    }

    // Honeypot check
    if (formData.company_website) {
      newErrors.honeypot = "Submission rejected";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // In a real app, this would be an API call
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-[#34D399]/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-[#34D399]" />
        </div>
        <h3 className="text-2xl font-bold text-[#111827] mb-2">
          Thank You!
        </h3>
        <p className="text-[#374151]">
          We've received your enquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field - visually hidden */}
      <div className="hidden">
        <label htmlFor="company_website">Website</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          value={formData.company_website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors"
            placeholder="Your name"
            minLength={2}
            maxLength={60}
          />
          {errors.name && (
            <p className="text-sm text-[#FF4A17] mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors"
            placeholder="10-digit mobile number"
            pattern="[6-9]\d{9}"
          />
          {errors.phone && (
            <p className="text-sm text-[#FF4A17] mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="issue" className="block text-sm font-medium text-[#374151] mb-1">
            TV Issue *
          </label>
          <select
            id="issue"
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors bg-white"
          >
            <option value="">Select your issue</option>
            {issues.map((issue) => (
              <option key={issue} value={issue}>
                {issue}
              </option>
            ))}
          </select>
          {errors.issue && (
            <p className="text-sm text-[#FF4A17] mt-1">{errors.issue}</p>
          )}
        </div>

        <div>
          <label htmlFor="area" className="block text-sm font-medium text-[#374151] mb-1">
            Area
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:ring-2 focus:ring-[#FF4A17] focus:border-transparent outline-none transition-colors bg-white"
          >
            <option value="">Select area (optional)</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#374151] mb-2">
          Contact Preference
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preference"
              value="call"
              checked={formData.preference === "call"}
              onChange={handleChange}
              className="text-[#FF4A17]"
            />
            <span className="text-sm text-[#374151]">Call</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="preference"
              value="whatsapp"
              checked={formData.preference === "whatsapp"}
              onChange={handleChange}
              className="text-[#FF4A17]"
            />
            <span className="text-sm text-[#374151]">WhatsApp</span>
          </label>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 text-[#FF4A17]"
          />
          <span className="text-sm text-[#374151]">
            I agree to the privacy policy and lead consent *
          </span>
        </label>
        {errors.consent && (
          <p className="text-sm text-[#FF4A17] mt-1">{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-[#FF4A17] text-white font-semibold rounded-lg hover:bg-[#F97316] transition-colors shadow-lg hover:shadow-xl"
      >
        Submit Enquiry
      </button>
    </form>
  );
};