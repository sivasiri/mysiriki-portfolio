import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa6";
import { HiMail, HiPhone } from "react-icons/hi";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { personalData } from "../data/personalData";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success"); // 'success' or 'error'
  const [copied, setCopied] = useState({ email: false, phone: false });
  const [focused, setFocused] = useState("");

  const showNotification = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const copyToClipboard = (text, label, type) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    showNotification(`${label} copied to clipboard!`, "success");
    setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      showNotification("Please enter your name", "error");
      return false;
    }
    if (!form.email.trim()) {
      showNotification("Please enter your email", "error");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showNotification("Please enter a valid email address", "error");
      return false;
    }
    if (!form.message.trim()) {
      showNotification("Please enter a message", "error");
      return false;
    }
    if (form.message.trim().length < 10) {
      showNotification("Message must be at least 10 characters", "error");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: personalData.name,
          from_email: form.email,
          to_email: personalData.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showNotification(
            `Thanks ${form.name}! I'll get back to you soon. ✨`,
            "success"
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showNotification(
            "Oops! Something went wrong. Please try again or contact me directly.",
            "error"
          );
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -50, x: "-50%" }}
            className={`fixed top-20 left-1/2 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 ${
              toastType === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Direct Contact Info */}
        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            href={`mailto:${personalData.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-tertiary px-4 py-3 rounded-lg hover:bg-[#2a2a3e] transition-colors group"
          >
            <HiMail className="text-[#915EFF] text-xl group-hover:scale-110 transition-transform" />
            <span className="text-white text-sm">Email</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                copyToClipboard(personalData.email, "Email", "email");
              }}
              className="ml-auto opacity-60 hover:opacity-100 transition-opacity"
            >
              {copied.email ? (
                <FaCheck className="text-green-400" />
              ) : (
                <FaCopy className="text-secondary" />
              )}
            </button>
          </motion.a>

          <motion.a
            href={`tel:${personalData.phone}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-tertiary px-4 py-3 rounded-lg hover:bg-[#2a2a3e] transition-colors group"
          >
            <HiPhone className="text-[#915EFF] text-xl group-hover:scale-110 transition-transform" />
            <span className="text-white text-sm">Call</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                copyToClipboard(personalData.phone, "Phone", "phone");
              }}
              className="ml-auto opacity-60 hover:opacity-100 transition-opacity"
            >
              {copied.phone ? (
                <FaCheck className="text-green-400" />
              ) : (
                <FaCopy className="text-secondary" />
              )}
            </button>
          </motion.a>

          {personalData.linkedin && (
            <motion.a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-tertiary px-4 py-3 rounded-lg hover:bg-[#2a2a3e] transition-colors"
            >
              <FaLinkedin className="text-[#915EFF] text-xl" />
            </motion.a>
          )}

          {personalData.github && (
            <motion.a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-tertiary px-4 py-3 rounded-lg hover:bg-[#2a2a3e] transition-colors"
            >
              <FaGithub className="text-[#915EFF] text-xl" />
            </motion.a>
          )}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <motion.label
            className="flex flex-col"
            whileFocus={{ scale: 1.02 }}
          >
            <span className="text-white font-medium mb-4 flex items-center gap-2">
              Your Name
              <span className="text-[#915EFF]">*</span>
            </span>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused("")}
                placeholder="What's your good name?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 transition-all w-full font-medium ${
                  focused === "name"
                    ? "border-[#915EFF] shadow-lg shadow-[#915EFF]/20"
                    : "border-transparent"
                }`}
                required
              />
            </div>
          </motion.label>

          <motion.label
            className="flex flex-col"
            whileFocus={{ scale: 1.02 }}
          >
            <span className="text-white font-medium mb-4 flex items-center gap-2">
              Your Email
              <span className="text-[#915EFF]">*</span>
            </span>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
                placeholder="What's your web address?"
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 transition-all w-full font-medium ${
                  focused === "email"
                    ? "border-[#915EFF] shadow-lg shadow-[#915EFF]/20"
                    : "border-transparent"
                }`}
                required
              />
            </div>
          </motion.label>

          <motion.label
            className="flex flex-col"
            whileFocus={{ scale: 1.02 }}
          >
            <span className="text-white font-medium mb-4 flex items-center gap-2">
              Your Message
              <span className="text-[#915EFF]">*</span>
            </span>
            <div className="relative">
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused("")}
                placeholder="What you want to say?"
                maxLength={500}
                className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 transition-all w-full font-medium resize-none ${
                  focused === "message"
                    ? "border-[#915EFF] shadow-lg shadow-[#915EFF]/20"
                    : "border-transparent"
                }`}
                required
              />
              <div className="absolute bottom-2 right-2 text-secondary text-xs">
                {form.message.length} / 500
              </div>
            </div>
          </motion.label>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative bg-tertiary py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center gap-3 ${
              loading
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#2a2a3e] hover:shadow-lg hover:shadow-[#915EFF]/20"
            } transition-all`}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-[#915EFF]" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
