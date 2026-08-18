import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
  MessageCircle
} from "lucide-react";

import { motion } from "framer-motion";

import profilePhoto from "../assets/sujoy.png";
import resume from "../assets/SUJAY_ROUT_Resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background text-foreground"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid min-h-[calc(100vh-72px)] items-center gap-12 py-20 lg:grid-cols-[1fr_auto] lg:gap-20 lg:py-24">

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="max-w-4xl"
          >

            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              IT Service Desk & Technical Support
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Sujay{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Rout
              </span>
            </motion.h1>

            {/* Professional Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5 max-w-3xl text-xl font-medium leading-8 text-muted-foreground sm:text-2xl"
            >
              IT Service Desk & Technical Support Professional
            </motion.h2>

            {/* Career Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
            >
              IT support professional with 2+ years of experience in
              end-user support, incident management, user access management,
              and IT operations. Skilled in troubleshooting hardware,
              software, Windows OS, Active Directory, Microsoft 365,
              endpoint management, and ITIL-based service delivery.
            </motion.p>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >

              {/* Phone */}
              <a
                href="tel:+916296371824"
                className="group inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone
                  size={16}
                  strokeWidth={1.8}
                  className="text-blue-600 dark:text-blue-400"
                />
                <span>+91 6296371824</span>
              </a>

              {/* WhatsApp */}
                <a
                  href="https://wa.me/+918372024858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-green-600 dark:hover:text-green-400"
                >
                  <MessageCircle
                    size={16}
                    strokeWidth={1.8}
                    className="text-green-600 dark:text-green-400"
                 />
                  <span>WhatsApp</span>
                </a>

            

              {/* Email */}
              <a
                href="mailto:sujayrout.cs@gmail.com"
                className="group inline-flex items-center gap-2 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail
                  size={16}
                  strokeWidth={1.8}
                  className="text-blue-600 dark:text-blue-400"
                />
                <span>sujayrout.cs@gmail.com</span>
              </a>

              {/* Location */}
              <span className="inline-flex items-center gap-2">
                <MapPin
                  size={16}
                  strokeWidth={1.8}
                  className="text-blue-600 dark:text-blue-400"
                />
                <span>Kolkata, West Bengal</span>
              </span>

            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >

              {/* View Experience */}
              <motion.a
                href="#experience"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
              >
                View Experience

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>

              {/* Download Resume */}
              <motion.a
                href="#resume"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-all hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                Download Resume

                <Download
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </motion.a>

            </motion.div>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/sujay-rout"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              LinkedIn Profile
              <ArrowUpRight size={15} />
            </motion.a>

          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="mx-auto lg:mx-0"
          >
            <div className="relative">

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="relative h-72 w-56 overflow-hidden rounded-3xl border border-border bg-muted/40 shadow-sm sm:h-80 sm:w-64"
              >
                <img
                  src={profilePhoto}
                  alt="Sujay Rout"
                  className="h-full w-full object-cover object-top"
                />
              </motion.div>

              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1,
                  ease: "backOut",
                }}
                className="absolute -bottom-3 -right-3 -z-10 h-16 w-16 rounded-2xl border border-blue-500/20 bg-blue-500/10 dark:bg-blue-400/10"
              />

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center pb-8"
        >
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
              Scroll
            </span>

            <ArrowDown
              size={17}
              className="animate-bounce"
              strokeWidth={1.7}
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
