"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Clock, Award, ShieldCheck, HeartHandshake, CheckCircle2, Loader2, AlertCircle, ChevronDown } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CONCERN_LABELS: Record<string, string> = {
  "hearing-eval": "Hearing Evaluation & Diagnosis",
  "hearing-aid": "Hearing Aid Fitting & Trials",
  "speech-therapy": "Speech-Language Therapy",
  "pediatric-dev": "Pediatric Language Development",
  "tinnitus": "Tinnitus Management",
  "swallowing": "Swallowing Disorders (Dysphagia)",
  "general": "General Consultation / Other",
};

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

const FAQ_DATA = [
  {
    question: "What are your consulting hours at Valley Hospital?",
    answer: "OPD consultation slots are available Monday through Saturday, from 10:00 AM to 1:00 PM and from 4:00 PM to 7:00 PM. Prior booking is highly recommended."
  },
  {
    question: "Do I need a prior appointment for hearing aid trials?",
    answer: "Yes. Comparative digital trials, real-ear measurements, and custom mold fitting take approximately 45 to 60 minutes. Booking an appointment ensures dedicated care and minimal wait times."
  },
  {
    question: "What age groups do you support for speech therapy?",
    answer: "I offer lifespan speech-language rehabilitation, ranging from play-based early intervention for toddlers (aged 1.5+ years) to communication support for autism (ASD), ADHD, stuttering, and adult post-stroke stroke rehabilitation (aphasia/dysarthria)."
  },
  {
    question: "How is patient data privacy and clinical confidentiality handled?",
    answer: "We adhere to strict clinical ethics and confidentiality standards. All patient diagnostics, case history records, and treatment plans are kept fully private and secure."
  }
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-slate-900 rounded-[20px] bg-white shadow-[3px_3px_0px_0px_#0F172A] overflow-hidden transition-all duration-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4.5 text-left flex justify-between items-center font-heading font-extrabold text-sm sm:text-base text-slate-900 hover:bg-slate-50 cursor-pointer"
      >
        <span className="pr-4">{question}</span>
        <div className="w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center bg-white text-slate-900 shrink-0 font-bold">
          <span className="text-xs leading-none">{isOpen ? "−" : "+"}</span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-sans font-semibold text-slate-700 leading-relaxed border-t border-slate-900/10">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
  const [lastInputs, setLastInputs] = useState<FormInputs | null>(null);
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

    const concernLabel = CONCERN_LABELS[inputs.clinicalConcern] || inputs.clinicalConcern;
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

    setLastInputs({ ...inputs });
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

  const handleEditDetails = () => {
    if (lastInputs) {
      setInputs({ ...lastInputs });
    }
    setSubmitSuccess(false);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 px-6 relative overflow-hidden select-none bg-[#F3F7F5] text-slate-900 border-t-2 border-slate-900"
    >
      {/* Background Mesh Glows */}
      <div className="absolute top-[30%] left-[10%] w-[450px] h-[450px] rounded-full bg-glow-teal pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[450px] h-[450px] rounded-full bg-glow-coral pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Descriptions & Details (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="px-3.5 py-1.5 rounded-full bg-[#FFFBEB] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-widest text-slate-800 uppercase mb-4 shadow-[2px_2px_0px_0px_#0F172A]">
              Schedule a Consultation
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15] text-slate-900 mb-6">
              Let's Restore the Joy <br />
              <span className="text-brand-coral-500">of Connecting.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-sans mb-8 max-w-md font-extrabold">
              Whether you are seeking a detailed diagnostic hearing evaluation or personalized speech therapy, take the first step towards evidence-based clinical care. Submit the request form, or contact our OPD desk directly.
            </p>

            {/* Structured Guidelines */}
            <div className="space-y-4 w-full border-t-2 border-slate-900 pt-6">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-teal-500 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-slate-800 font-extrabold">Certified clinical evaluations under national standards</span>
              </div>
              <div className="flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-brand-teal-500 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-slate-800 font-extrabold">Compassionate, patient-centered rehabilitation plans</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-brand-teal-500 shrink-0" />
                <span className="text-xs sm:text-sm font-sans text-slate-800 font-extrabold">Complete patient data privacy & clinical confidentiality</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Neo-Brutalist Form Panel (7/12 width) */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-slate-900 shadow-[6px_6px_0px_0px_#0F172A] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#0F172A] transition-all duration-300 relative overflow-hidden">
              
              {/* Submission Success Dialog Glass Overlay */}
              <AnimatePresence>
                {submitSuccess && lastInputs && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#F3F7F5]/98 backdrop-blur-xl z-20 flex flex-col items-center justify-center p-4 sm:p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.92, y: 10, opacity: 0 }}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      exit={{ scale: 0.92, y: 10, opacity: 0 }}
                      transition={{ type: "spring", duration: 0.45 }}
                      className="flex flex-col items-center w-full max-w-md bg-white border-2 border-slate-900 rounded-[28px] p-6 shadow-[6px_6px_0px_0px_#0F172A] relative overflow-hidden"
                    >
                      {/* Success Header Icon */}
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-650">
                        <WhatsAppIcon className="w-6 h-6" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-slate-900 leading-tight">Inquiry Prepared!</h3>
                      <p className="text-xs text-slate-650 font-sans mt-2 max-w-xs leading-relaxed font-semibold">
                        Your consultation details have been formatted. Click below to open WhatsApp and send your request.
                      </p>

                      {/* Display receipt card preview */}
                      <div className="w-full mt-5 bg-slate-50 border border-dashed border-slate-350 rounded-2xl p-4 text-left font-mono text-[10px] text-slate-700 leading-relaxed relative select-text">
                        <div className="absolute top-0 right-4 -translate-y-1/2 px-2 py-0.5 bg-brand-teal-500 text-white font-sans text-[8px] font-extrabold uppercase rounded-full tracking-wider shadow-sm">
                          Message Preview
                        </div>
                        <p className="font-extrabold text-slate-900 border-b border-dashed border-slate-200 pb-1.5 mb-2">
                          📋 APPOINTMENT INQUIRY
                        </p>
                        <p className="mb-0.5"><span className="text-slate-450 font-bold">NAME:</span> {lastInputs.fullName.trim()}</p>
                        <p className="mb-0.5"><span className="text-slate-450 font-bold">PHONE:</span> {lastInputs.phoneNumber.trim()}</p>
                        <p className="mb-0.5"><span className="text-slate-450 font-bold">AGE:</span> {lastInputs.patientAge ? `${lastInputs.patientAge} Years` : "Not Specified"}</p>
                        <p className="mb-0.5"><span className="text-slate-450 font-bold">CONCERN:</span> {CONCERN_LABELS[lastInputs.clinicalConcern] || lastInputs.clinicalConcern}</p>
                        {lastInputs.customMessage.trim() && (
                          <div className="mt-2 pt-2 border-t border-dashed border-slate-200">
                            <span className="text-slate-450 font-bold">CONTEXT:</span>
                            <p className="mt-0.5 text-slate-600 italic truncate max-w-xs">{lastInputs.customMessage.trim()}</p>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full font-sans">
                        <a
                          href={whatsappRedirectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-grow bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-extrabold uppercase tracking-wider text-[10px] sm:text-xs py-3.5 px-5 rounded-full border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0F172A] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#0F172A] transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>Open WhatsApp</span>
                        </a>
                        <button
                          type="button"
                          onClick={handleEditDetails}
                          className="bg-slate-100 text-slate-800 border-2 border-slate-900 shadow-[3px_3px_0px_0px_#0F172A] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_#0F172A] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_0px_#0F172A] font-sans font-extrabold uppercase tracking-wider text-[10px] sm:text-xs px-5 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
                        >
                          Edit Details
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
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-650 text-xs sm:text-sm font-sans mb-4">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="fullName" className="text-xs font-sans font-extrabold uppercase tracking-wider text-slate-600">
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
                      className={`w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none transition-all placeholder-slate-450 shadow-[2px_2px_0px_0px_#0F172A] focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_#0F172A] ${
                        errors.fullName
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "focus:border-teal-650 focus:ring-1 focus:ring-teal-650"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[10px] text-red-500 mt-0.5 font-bold flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phoneNumber" className="text-xs font-sans font-extrabold uppercase tracking-wider text-slate-600">
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
                      className={`w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none transition-all placeholder-slate-450 shadow-[2px_2px_0px_0px_#0F172A] focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_#0F172A] ${
                        errors.phoneNumber
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "focus:border-teal-650 focus:ring-1 focus:ring-teal-650"
                      }`}
                    />
                    {errors.phoneNumber && (
                      <span className="text-[10px] text-red-500 mt-0.5 font-bold flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phoneNumber}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Patient Age */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="patientAge" className="text-xs font-sans font-extrabold uppercase tracking-wider text-slate-600">
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
                      className="w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-teal-650 focus:ring-1 focus:ring-teal-650 transition-all placeholder-slate-450 shadow-[2px_2px_0px_0px_#0F172A] focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_#0F172A]"
                    />
                  </div>

                  {/* Clinical Concern Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="clinicalConcern" className="text-xs font-sans font-extrabold uppercase tracking-wider text-slate-600">
                      Clinical Concern *
                    </label>
                    <div className="relative w-full">
                      <select
                        id="clinicalConcern"
                        name="clinicalConcern"
                        value={inputs.clinicalConcern}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className={`w-full bg-white border-2 border-slate-900 rounded-xl pl-4 pr-10 py-3 text-sm font-sans text-slate-800 focus:outline-none transition-all appearance-none cursor-pointer shadow-[2px_2px_0px_0px_#0F172A] focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_#0F172A] ${
                          errors.clinicalConcern
                            ? "border-red-500 focus:ring-1 focus:ring-red-500"
                            : "focus:border-teal-650 focus:ring-1 focus:ring-teal-650"
                        }`}
                      >
                        <option value="" className="bg-white text-slate-800">Select specialization...</option>
                        <option value="hearing-eval" className="bg-white text-slate-800">Hearing Evaluation & Diagnosis</option>
                        <option value="hearing-aid" className="bg-white text-slate-800">Hearing Aid Fitting & Trials</option>
                        <option value="speech-therapy" className="bg-white text-slate-800">Speech-Language Therapy</option>
                        <option value="pediatric-dev" className="bg-white text-slate-800">Pediatric Language Development</option>
                        <option value="tinnitus" className="bg-white text-slate-800">Tinnitus Management</option>
                        <option value="swallowing" className="bg-white text-slate-800">Swallowing Disorders (Dysphagia)</option>
                        <option value="general" className="bg-white text-slate-800">General Consultation / Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600 flex items-center">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.clinicalConcern && (
                      <span className="text-[10px] text-red-500 mt-0.5 font-bold flex items-center gap-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.clinicalConcern}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Custom Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="customMessage" className="text-xs font-sans font-extrabold uppercase tracking-wider text-slate-600">
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
                    className="w-full bg-white border-2 border-slate-900 rounded-xl px-4 py-3 text-sm font-sans text-slate-800 focus:outline-none focus:border-teal-650 focus:ring-1 focus:ring-teal-650 transition-all placeholder-slate-450 resize-none shadow-[2px_2px_0px_0px_#0F172A] focus:translate-x-[-1px] focus:translate-y-[-1px] focus:shadow-[3px_3px_0px_0px_#0F172A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-coral-500 hover:bg-brand-coral-600 text-white font-sans font-extrabold uppercase tracking-wider text-xs py-4 px-8 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_#0F172A] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[5px_5px_0px_0px_#0F172A] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[1px_1px_0px_0px_#0F172A] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Preparing WhatsApp Request...</span>
                    </>
                  ) : (
                    <>
                      <WhatsAppIcon className="w-4.5 h-4.5" />
                      <span>Book Consultation via WhatsApp</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

        {/* ----------------- GOT QUESTIONS? FAQ ACCORDION SECTION ----------------- */}
        <div className="mt-24 lg:mt-32 max-w-4xl mx-auto">
          {/* FAQ Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border-2 border-slate-900 text-[10px] font-sans font-extrabold tracking-widest text-slate-800 uppercase mb-4 shadow-[2px_2px_0px_0px_#0F172A]">
              Got Questions?
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900">
              Frequently Asked Questions
            </h3>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {FAQ_DATA.map((faq, idx) => (
              <FaqItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
