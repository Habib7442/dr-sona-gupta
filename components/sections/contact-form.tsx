"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Award, ShieldCheck, HeartHandshake, CheckCircle2, Loader2, AlertCircle, ChevronDown } from "lucide-react";

interface FormInputs {
  fullName: string;
  phoneNumber: string;
  patientAge: string;
  clinicalConcern: string;
  customMessage: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  clinicalConcern?: string;
}

export default function ContactForm() {
  const [inputs, setInputs] = useState<FormInputs>({
    fullName: "",
    phoneNumber: "",
    patientAge: "",
    clinicalConcern: "",
    customMessage: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [whatsappRedirectUrl, setWhatsappRedirectUrl] = useState("");
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    let isValid = true;

    if (!inputs.fullName.trim()) {
      tempErrors.fullName = "Full name is required.";
      isValid = false;
    } else if (inputs.fullName.trim().length < 3) {
      tempErrors.fullName = "Name must be at least 3 characters.";
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!inputs.phoneNumber.trim()) {
      tempErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    } else if (!phoneRegex.test(inputs.phoneNumber.trim())) {
      tempErrors.phoneNumber = "Please enter a valid 10-digit mobile number.";
      isValid = false;
    }

    if (!inputs.clinicalConcern) {
      tempErrors.clinicalConcern = "Please select a clinical concern.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as they type
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    // Map clinical concern ID to readable label
    const concernLabels: Record<string, string> = {
      "hearing-eval": "Hearing Evaluation & Diagnosis",
      "hearing-aid": "Hearing Aid Fitting & Trials",
      "speech-therapy": "Speech-Language Therapy",
      "pediatric-dev": "Pediatric Language Development",
      "tinnitus": "Tinnitus Management",
      "swallowing": "Swallowing Disorders (Dysphagia)",
      "general": "General Consultation / Other",
    };

    const concernLabel = concernLabels[inputs.clinicalConcern] || inputs.clinicalConcern;
    const ageText = inputs.patientAge ? `${inputs.patientAge} Years` : "Not Specified";
    const detailsText = inputs.customMessage.trim() ? inputs.customMessage.trim() : "No additional details provided";

    // Format WhatsApp Message with Premium Markdown styling
    const rawMessage = `*New Appointment Request*
━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${inputs.fullName.trim()}
📞 *Phone Number:* ${inputs.phoneNumber.trim()}
🎂 *Patient Age:* ${ageText}
🏥 *Clinical Concern:* ${concernLabel}
📝 *Additional Details:* ${detailsText}
━━━━━━━━━━━━━━━━━━
_Submitted via sonagupta.com_`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/918876226682?text=${encodedMessage}`;

    setWhatsappRedirectUrl(whatsappUrl);
    setSubmitSuccess(true);
    setIsSubmitting(false);

    // Trigger redirection inside new window tab
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Clear form inputs
    setInputs({
      fullName: "",
      phoneNumber: "",
      patientAge: "",
      clinicalConcern: "",
      customMessage: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-brand-cyan-950 text-brand-white-950 border-t border-white/5"
    >
      {/* Background Mesh Glows */}
      <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] rounded-full bg-brand-teal-500/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-brand-coral-500/5 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Descriptions & Details (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="px-3.5 py-1.5 rounded-full bg-brand-teal-500/10 border border-brand-teal-500/20 text-[9px] sm:text-[10px] font-sans font-bold tracking-widest text-brand-teal-400 uppercase mb-4">
              Schedule a Consultation
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-brand-white-950 mb-6">
              Let's Restore the Joy <br />
              <span className="text-brand-coral-500">of Connecting.</span>
            </h2>

            <p className="text-sm sm:text-base text-brand-white-950/60 leading-relaxed font-sans mb-8 max-w-md">
              Whether you are seeking a detailed diagnostic hearing evaluation or personalized speech therapy, take the first step towards evidence-based clinical care. Submit the request form, or contact our OPD desk directly.
            </p>

            {/* Structured Guidelines */}
            <div className="space-y-4 w-full border-t border-white/5 pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-brand-white-950/80 font-medium">Certified clinical evaluations under national standards</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-brand-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-brand-white-950/80 font-medium">Compassionate, patient-centered rehabilitation plans</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-teal-400 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-brand-white-950/80 font-medium">Complete patient data privacy & clinical confidentiality</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Glass Form Panel (7/12 width) */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl p-6 sm:p-8 bg-brand-cyan-900/30 border border-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Submission Success Dialog Glass Overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-brand-cyan-950/95 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="flex flex-col items-center"
                    >
                      <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                      <h3 className="text-2xl font-heading font-bold text-brand-white-950">Inquiry Formatted</h3>
                      <p className="text-sm text-brand-white-950/60 font-sans mt-3 max-w-sm leading-relaxed">
                        Your consultation details have been beautifully prepared. We are redirecting you to WhatsApp to directly message Dr. Sona Gupta.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-3 mt-8">
                        <a
                          href={whatsappRedirectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-brand-coral-500 hover:bg-brand-coral-600 text-brand-cyan-950 font-sans font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(226,109,92,0.2)] cursor-pointer inline-flex items-center gap-1.5"
                        >
                          Send on WhatsApp
                        </a>
                        <button
                          onClick={() => setSubmitSuccess(false)}
                          className="bg-white/5 hover:bg-white/10 text-brand-white-950 border border-white/10 font-sans font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-all duration-300 cursor-pointer"
                        >
                          Close Window
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Shell */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Server Error Alert */}
                {serverError && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs sm:text-sm font-sans mb-4">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-white-950/50">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={inputs.fullName}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      placeholder="e.g. Sona Gupta"
                      className={`w-full bg-brand-cyan-950/80 border rounded-xl px-4 py-3 text-sm font-sans text-brand-white-950 focus:outline-none focus:ring-1 transition-all placeholder-brand-white-950/20 ${
                        errors.fullName
                          ? "border-red-500/40 focus:border-red-500 focus:ring-red-500"
                          : "border-white/10 focus:border-brand-teal-400 focus:ring-brand-teal-400"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-400 mt-0.5 font-medium flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phoneNumber" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-white-950/50">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={inputs.phoneNumber}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      placeholder="10-digit mobile no."
                      className={`w-full bg-brand-cyan-950/80 border rounded-xl px-4 py-3 text-sm font-sans text-brand-white-950 focus:outline-none focus:ring-1 transition-all placeholder-brand-white-950/20 ${
                        errors.phoneNumber
                          ? "border-red-500/40 focus:border-red-500 focus:ring-red-500"
                          : "border-white/10 focus:border-brand-teal-400 focus:ring-brand-teal-400"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <span className="text-[10px] text-red-400 mt-0.5 font-medium flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phoneNumber}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Patient Age */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="patientAge" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-white-950/50">
                      Patient Age (Optional)
                    </label>
                    <input
                      type="number"
                      id="patientAge"
                      name="patientAge"
                      value={inputs.patientAge}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      placeholder="e.g. 28"
                      className="w-full bg-brand-cyan-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-brand-white-950 focus:outline-none focus:border-brand-teal-400 focus:ring-1 focus:ring-brand-teal-400 transition-all placeholder-brand-white-950/20"
                    />
                  </div>

                  {/* Clinical Concern Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="clinicalConcern" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-white-950/50">
                      Clinical Concern *
                    </label>
                    <div className="relative w-full">
                      <select
                        id="clinicalConcern"
                        name="clinicalConcern"
                        value={inputs.clinicalConcern}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full bg-brand-cyan-950/80 border rounded-xl pl-4 pr-10 py-3 text-sm font-sans text-brand-white-950/90 focus:outline-none focus:ring-1 transition-all appearance-none cursor-pointer ${
                          errors.clinicalConcern
                            ? "border-red-500/40 focus:border-red-500 focus:ring-red-500"
                            : "border-white/10 focus:border-brand-teal-400 focus:ring-brand-teal-400"
                        }`}
                      >
                        <option value="" className="bg-[#0A2430]">Select specialization...</option>
                        <option value="hearing-eval" className="bg-[#0A2430]">Hearing Evaluation & Diagnosis</option>
                        <option value="hearing-aid" className="bg-[#0A2430]">Hearing Aid Fitting & Trials</option>
                        <option value="speech-therapy" className="bg-[#0A2430]">Speech-Language Therapy</option>
                        <option value="pediatric-dev" className="bg-[#0A2430]">Pediatric Language Development</option>
                        <option value="tinnitus" className="bg-[#0A2430]">Tinnitus Management</option>
                        <option value="swallowing" className="bg-[#0A2430]">Swallowing Disorders (Dysphagia)</option>
                        <option value="general" className="bg-[#0A2430]">General Consultation / Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-brand-white-950/40 flex items-center">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.clinicalConcern && (
                      <span className="text-[10px] text-red-400 mt-0.5 font-medium flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.clinicalConcern}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Custom Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="customMessage" className="text-xs font-sans font-bold uppercase tracking-wider text-brand-white-950/50">
                    Additional Context / Details
                  </label>
                  <textarea
                    id="customMessage"
                    name="customMessage"
                    value={inputs.customMessage}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={4}
                    placeholder="Briefly describe what you'd like to consult on..."
                    className="w-full bg-brand-cyan-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm font-sans text-brand-white-950 focus:outline-none focus:border-brand-teal-400 focus:ring-1 focus:ring-brand-teal-400 transition-all placeholder-brand-white-950/20 resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-coral-500 hover:bg-brand-coral-600 text-brand-cyan-950 font-sans font-bold uppercase tracking-wider text-xs py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(226,109,92,0.15)] hover:shadow-[0_0_30px_rgba(226,109,92,0.35)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <span>Request Consultation Slot</span>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
