import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/hi2";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1D3E31] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Social Links</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1D3E31] hover:bg-gray-200 transition-colors">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1D3E31] hover:bg-gray-200 transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-[#1D3E31] hover:bg-gray-200 transition-colors">
              <FaXTwitter size={18} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;