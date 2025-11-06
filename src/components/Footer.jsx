import { Github, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-white font-semibold text-xl">Velocity Notebook</h3>
            <p className="mt-2 text-gray-400 max-w-md">
              Motorsport and aviation, documented with a design-forward eye. Images and notes focused on technique,
              engineering stories, and aesthetics.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="GitHub" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="Email" href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-gray-500">
          © {new Date().getFullYear()} Velocity Notebook. All imagery and text by owner.
        </div>
      </div>
    </footer>
  );
}
