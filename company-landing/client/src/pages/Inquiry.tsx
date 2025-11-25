import { useState } from "react";
import { useForm, UseFormRegister, FieldErrors } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight, ArrowLeft, Check, Loader2, AlertTriangle, ChevronDown, User, Briefcase
} from "lucide-react";

// Import schemas and the safeResolver
import { 
  contactSchema, projectSchema, safeResolver,
  type ContactData, type ProjectData 
} from "@/lib/schemas";

const FORMSPREE_LEAD_ID = "xnnylzol"; 
const FORMSPREE_MAIN_ID = "xnnylzol"; 

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
  prefix?: string;
  optional?: boolean;
}

const InputField = ({ 
  label, name, register, error, type = "text", options, placeholder, prefix, optional 
}: InputProps) => {
  return (
    <div className="w-full space-y-2" id={name}>
      <div className="flex justify-between items-baseline">
        <label htmlFor={name} className={`text-xs font-bold uppercase tracking-widest ${error ? "text-red-600" : "text-slate-500"}`}>
          {label} {optional && <span className="text-slate-300 font-normal normal-case tracking-normal ml-1">(Optional)</span>}
        </label>
        {error && (
          <span className="text-xs font-bold text-red-600 flex items-center gap-1 animate-pulse">
            <AlertTriangle className="w-3 h-3" /> {error}
          </span>
        )}
      </div>

      <div className={`
        flex w-full items-stretch border-2 transition-all duration-200
        ${error 
          ? "border-red-500 bg-red-50" 
          : "border-slate-300 bg-slate-50 focus-within:border-blue-900 focus-within:bg-white"
        }
      `}>
        {prefix && (
          <div className={`
            flex items-center px-4 font-mono font-medium text-slate-500 border-r-2 bg-slate-100
            ${error ? "border-red-200 text-red-700 bg-red-100" : "border-slate-200"}
          `}>
            {prefix}
          </div>
        )}

        <div className="flex-1 relative">
          {type === "select" ? (
            <div className="relative h-14">
              <select
                id={name}
                {...register(name)}
                className="w-full h-full px-4 bg-transparent outline-none appearance-none font-medium text-slate-900 cursor-pointer relative z-10"
                defaultValue=""
              >
                <option value="" disabled className="text-slate-400">Select...</option>
                {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-0" />
            </div>
          ) : type === "textarea" ? (
            <textarea
              id={name}
              {...register(name)}
              placeholder={placeholder}
              rows={5}
              className="w-full p-4 bg-transparent outline-none font-medium text-slate-900 placeholder:text-slate-400 resize-none block"
            />
          ) : (
            <input
              id={name}
              type={type}
              {...register(name)}
              placeholder={placeholder}
              className="w-full h-14 px-4 bg-transparent outline-none font-medium text-slate-900 placeholder:text-slate-400 block"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const StepHeader = ({ num, label, current }: { num: number; label: string; current: number }) => (
  <div className={`flex flex-col items-center gap-2 ${current === num ? 'opacity-100' : 'opacity-40'}`}>
     <div className={`
       w-8 h-8 flex items-center justify-center font-bold text-sm border-2 transition-colors
       ${current === num ? 'border-blue-900 text-blue-900 bg-white' : 'border-slate-400 text-slate-500 bg-transparent'}
       ${current > num ? 'border-green-600 bg-green-600 text-white' : ''}
     `}>
       {current > num ? <Check className="w-5 h-5" /> : `0${num + 1}`}
     </div>
     <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900 hidden md:block">
       {label}
     </span>
  </div>
);

export default function Inquiry() {
  const [_, setLocation] = useLocation();
  const [step, setStep] = useState(0);
  
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  const [leadState, submitLead] = useFormspree(FORMSPREE_LEAD_ID);
  const [mainState, submitMain] = useFormspree(FORMSPREE_MAIN_ID);

  // --- FORM 1: IDENTITY ---
  const { 
    register: registerContact, 
    handleSubmit: handleSubmitContact, 
    formState: { errors: errorsContact } 
  } = useForm<ContactData>({ 
    mode: "onBlur", 
    resolver: safeResolver(contactSchema),
    defaultValues: { 
      firstName: "", 
      lastName: "", 
      email: "", 
      phone: "" 
    } 
  });

  // --- FORM 2: CONTEXT ---
  const { 
    register: registerProject, 
    handleSubmit: handleSubmitProject, 
    formState: { errors: errorsProject } 
  } = useForm<ProjectData>({ 
    mode: "onBlur",
    resolver: safeResolver(projectSchema),
    defaultValues: { 
      companyName: "", 
      description: "",
      type: undefined, 
      budget: undefined,
      timeline: undefined
    }
  });

  const onContactSubmit = async (data: ContactData) => {
    try {
      const payload = { ...data, phone: data.phone ? `+1 ${data.phone}` : "Not Provided", source: "Step 1" };
      await submitLead(payload);
      setContactData(data);
      setStep(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast.success("Identity Verified");
    } catch (e) {
      toast.error("Network Error: Could not connect.");
    }
  };

  const onProjectSubmit = (data: ProjectData) => {
    setProjectData(data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onFinalSubmit = async () => {
    if (!contactData || !projectData) return;
    try {
      const payload = {
        ...contactData,
        ...projectData,
        fullPhone: contactData.phone ? `+1 ${contactData.phone}` : "Not Provided",
      };
      await submitMain(payload);
      toast.success("Inquiry Submitted");
      setTimeout(() => setLocation("/"), 2500);
    } catch (e) {
      toast.error("Submission Failed");
    }
  };

  const onInvalid = (errors: FieldErrors) => {
    toast.error("Please fix the errors highlighted in red.");
    const firstError = Object.keys(errors)[0];
    const el = document.getElementById(firstError);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = el.querySelector('input, select, textarea') as HTMLElement;
      if (input) input.focus();
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      <Header />

      <main className="flex-grow pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Engineering Peer Review
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Request a technical assessment of your operational architecture.
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 mb-16">
             <StepHeader num={0} label="Identity" current={step} />
             <div className="w-12 h-0.5 bg-slate-200" />
             <StepHeader num={1} label="Context" current={step} />
             <div className="w-12 h-0.5 bg-slate-200" />
             <StepHeader num={2} label="Confirm" current={step} />
          </div>

          <div className="relative">
             <AnimatePresence mode="wait">

              {/* --- STEP 1: IDENTITY --- */}
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleSubmitContact(onContactSubmit, onInvalid)} noValidate className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <InputField 
                        label="First Name" 
                        name="firstName" 
                        register={registerContact} 
                        error={errorsContact.firstName?.message as string} 
                        placeholder="e.g. Sarah" 
                      />
                      <InputField 
                        label="Last Name" 
                        name="lastName" 
                        register={registerContact} 
                        error={errorsContact.lastName?.message as string} 
                        placeholder="e.g. Connor" 
                      />
                    </div>
                    
                    <InputField 
                      label="Work Email" 
                      name="email" 
                      type="email" 
                      register={registerContact} 
                      error={errorsContact.email?.message as string} 
                      placeholder="sarah@company.com" 
                    />
                    
                    <InputField 
                      label="Direct Phone" 
                      name="phone" 
                      type="tel" 
                      prefix="+1" 
                      optional={true}
                      register={registerContact} 
                      error={errorsContact.phone?.message as string} 
                      placeholder="(555) 123-4567" 
                    />

                    <div className="pt-8 border-t border-slate-100">
                      <button 
                        type="submit" 
                        disabled={leadState.submitting}
                        className="w-full h-16 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xl uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-slate-900"
                      >
                        {leadState.submitting ? <Loader2 className="animate-spin" /> : <>Verify Identity <ArrowRight /></>}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* --- STEP 2: CONTEXT --- */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <form onSubmit={handleSubmitProject(onProjectSubmit, onInvalid)} noValidate className="space-y-10">
                    <button type="button" onClick={() => setStep(0)} className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-blue-900 mb-4 flex items-center gap-2 transition-colors">
                      <ArrowLeft className="w-4 h-4" /> Edit Identity
                    </button>

                    <InputField 
                      label="Organization Name" 
                      name="companyName" 
                      register={registerProject} 
                      error={errorsProject.companyName?.message as string} 
                      placeholder="Acme Corp" 
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <InputField 
                         label="Budget Range" 
                         name="budget" 
                         type="select"
                         register={registerProject}
                         error={errorsProject.budget?.message as string}
                         options={[
                           "$25k - $50k (Audit)", 
                           "$50k - $150k (Pilot)", 
                           "$150k - $500k (Implementation)", 
                           "$500k+ (Enterprise Transformation)"
                         ]}
                       />
                       <InputField 
                         label="Target Timeline" 
                         name="timeline" 
                         type="select"
                         register={registerProject}
                         error={errorsProject.timeline?.message as string}
                         options={[
                           "Immediate (Q3/Q4 Priority)", 
                           "Next Fiscal Year", 
                           "Exploratory"
                         ]}
                       />
                    </div>

                    <InputField 
                      label="Primary Objective" 
                      name="type" 
                      type="select"
                      register={registerProject}
                      error={errorsProject.type?.message as string}
                      options={[
                        "Supply Chain Optimization", 
                        "Labor Efficiency / OEE", 
                        "Predictive Maintenance", 
                        "Automated Bidding & Quoting", 
                        "Data Infrastructure Audit",
                        "Other"
                      ]}
                    />

                    <InputField 
                      label="Operational Context" 
                      name="description" 
                      type="textarea" 
                      register={registerProject}
                      error={errorsProject.description?.message as string} 
                      placeholder="Describe bottlenecks, KPI targets, or data constraints..." 
                    />

                    <div className="pt-8 border-t border-slate-100">
                      <button type="submit" className="w-full h-16 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xl uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 border-2 border-slate-900">
                        Review Details <ArrowRight />
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* --- STEP 3: REVIEW --- */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <button onClick={() => setStep(1)} className="text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-blue-900 mb-4 flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Edit Context
                  </button>
                  
                  <div className="bg-slate-50 border-2 border-slate-200 p-8 space-y-8">
                    {/* Identity Review */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-12 h-12 bg-white border-2 border-slate-200 flex items-center justify-center text-blue-900 shrink-0">
                         <User className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em]">Identity</span>
                        <div className="text-xl font-bold text-slate-900 mt-1">{contactData?.firstName} {contactData?.lastName}</div>
                        <div className="text-slate-600 font-mono text-sm mt-1">{contactData?.email}</div>
                        {contactData?.phone && <div className="text-slate-600 font-mono text-sm">+1 {contactData?.phone}</div>}
                      </div>
                    </div>

                    <div className="w-full h-px bg-slate-200" />

                    {/* Scope Review */}
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-12 h-12 bg-white border-2 border-slate-200 flex items-center justify-center text-blue-900 shrink-0">
                         <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="w-full">
                        <span className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em]">Scope</span>
                        <div className="text-xl font-bold text-slate-900 mb-2">{projectData?.companyName}</div>
                        <div className="inline-block bg-blue-100 text-blue-900 px-2 py-1 text-xs font-bold uppercase tracking-wide rounded-sm border border-blue-200">
                          {projectData?.type}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                             <span className="text-[10px] uppercase font-bold text-slate-400">Budget</span>
                             <div className="text-sm font-bold text-slate-800">{projectData?.budget}</div>
                          </div>
                          <div>
                             <span className="text-[10px] uppercase font-bold text-slate-400">Timeline</span>
                             <div className="text-sm font-bold text-slate-800">{projectData?.timeline}</div>
                          </div>
                        </div>

                        <div className="mt-4 p-4 bg-white border border-slate-200 text-slate-700 italic text-sm leading-relaxed">
                          "{projectData?.description}"
                        </div>
                      </div>
                    </div>
                  </div>

                  {mainState.succeeded ? (
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 shrink-0">
                        <Check className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-900 uppercase tracking-wide">Request Transmitted</h4>
                        <p className="text-green-700 text-sm">Engineering team has been notified.</p>
                      </div>
                    </div>
                  ) : (
                    <button 
                      onClick={onFinalSubmit} 
                      disabled={mainState.submitting}
                      className="w-full h-20 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xl uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 border-2 border-slate-900"
                    >
                      {mainState.submitting ? <Loader2 className="animate-spin w-8 h-8" /> : "Confirm & Submit"}
                    </button>
                  )}
                  
                  <p className="text-center text-xs text-slate-400 font-mono">
                    Protected by NDA. 256-bit Encrypted Transmission.
                  </p>
                </motion.div>
              )}

             </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}