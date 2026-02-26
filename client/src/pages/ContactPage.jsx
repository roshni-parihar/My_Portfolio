import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const ContactPage=() =>{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">

    
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900">
            Contact   <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-slate-600 text-sm mt-2">
            I'd love to hear from you.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white p-8 rounded-xl shadow-md "
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-6"
            >
              <CheckCircle className="mx-auto text-emerald-500 w-12 h-12 mb-3" />
              <h2 className="text-lg font-semibold text-slate-900">
                Message Sent!
              </h2>
              <p className="text-slate-600 text-sm">
                Thank you for contacting me.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-amber-100 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-amber-100 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-amber-100 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>

            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
export default ContactPage;