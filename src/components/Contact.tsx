import React, { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { portfolioData } from "../portfolioData";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, // Access key from environment variables
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus("idle");
        }, 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={22} />,
      title: "Email Me Directly",
      value: portfolioData.contact.email,
      href: `mailto:${portfolioData.contact.email}`,
      color: "hover:text-red-400 hover:border-red-500/30",
      cta: "Send an Email",
    },
    {
      icon: <Linkedin size={22} />,
      title: "Connect on LinkedIn",
      value: portfolioData.name + " " + portfolioData.lastName,
      href: portfolioData.contact.linkedin,
      color: "hover:text-[#0077b5] hover:border-blue-500/30",
      cta: "View Profile",
    },
    {
      icon: <Github size={22} />,
      title: "Browse GitHub Repos",
      value: "github.com/" + portfolioData.contact.github.split("/").pop(),
      href: portfolioData.contact.github,
      color: "hover:text-purple-400 hover:border-purple-500/30",
      cta: "Explore Repos",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl z-0" />
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">Get In Touch</h2>
          <p className="text-3xl sm:text-4xl font-extrabold mt-3 text-white">Let's Collaborate</p>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Side: Contact Methods & Cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-100">Have an interesting project?</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Whether you have an internship position, a freelance project, or just want to say hi, feel free to drop a message or connect through my social handles. I'll get back to you as soon as possible!
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`glass-panel p-5 rounded-xl flex items-center justify-between border border-gray-800/60 transition-all duration-300 group ${method.color}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gray-950 text-indigo-400 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-500 font-mono font-semibold uppercase">{method.title}</h4>
                      <span className="text-sm font-medium text-gray-200 block mt-0.5 break-all">
                        {method.value}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform shrink-0 pl-2">
                    {method.cta} →
                  </span>
                </a>
              ))}
            </div>

            {/* Location indicator */}
            <div className="flex items-center space-x-3 p-5 rounded-xl bg-gray-950/40 border border-dashed border-gray-800 text-sm text-gray-400">
              <MapPin size={18} className="text-indigo-400 shrink-0" />
              <span>Based in: <strong>{portfolioData.contact.location}</strong></span>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl shadow-xl text-left relative overflow-hidden">

              {/* Form Success Banner Overlay */}
              {status === "success" && (
                <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-sm mt-2">
                    Thank you for reaching out. Your message has been delivered successfully, and I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* Form Error Banner Overlay */}
              {status === "error" && (
                <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
                    <AlertCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">Something Went Wrong</h3>
                  <p className="text-gray-400 text-sm max-w-sm mt-2">
                    Your message could not be sent. Please try again, or reach out directly via email.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-mono font-bold transition-colors cursor-pointer"
                  >
                    Try Again
                  </button>
                </div>
              )}

              <h3 className="text-lg font-bold text-gray-200 mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Email Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-mono font-bold text-gray-400 uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-950 border text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/80 transition-colors ${errors.name ? "border-red-500/50" : "border-gray-800"
                        }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 flex items-center mt-1">
                        <AlertCircle size={10} className="mr-1" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-mono font-bold text-gray-400 uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-gray-950 border text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/80 transition-colors ${errors.email ? "border-red-500/50" : "border-gray-800"
                        }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 flex items-center mt-1">
                        <AlertCircle size={10} className="mr-1" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-mono font-bold text-gray-400 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship / Freelance Opportunities"
                    className={`w-full px-4 py-3 rounded-xl bg-gray-950 border text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/80 transition-colors ${errors.subject ? "border-red-500/50" : "border-gray-800"
                      }`}
                  />
                  {errors.subject && (
                    <span className="text-[10px] text-red-400 flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-gray-400 uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello! I would love to discuss a project with you..."
                    className={`w-full px-4 py-3 rounded-xl bg-gray-950 border text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500/80 transition-colors resize-none ${errors.message ? "border-red-500/50" : "border-gray-800"
                      }`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-400 flex items-center mt-1">
                      <AlertCircle size={10} className="mr-1" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-md shadow-indigo-600/10 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-1.5" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send Message</span>
                    </>
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
