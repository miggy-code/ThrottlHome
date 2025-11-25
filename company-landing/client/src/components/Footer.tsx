import { APP_TITLE } from "@/const";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-4">
              {APP_TITLE}
            </h3>
            <p className="text-slate-400 max-w-md leading-relaxed mb-6">
              Building the future of technology. Empowering businesses with
              innovative solutions that drive real results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:hello@company.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@company.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Features
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    About Us
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="h-10 w-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/30"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-blue-500/30"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} {APP_TITLE}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
