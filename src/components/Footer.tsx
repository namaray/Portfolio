'use client';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/8" style={{ background: 'rgba(45, 35, 50, 0.85)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          <div>
            <h3 className="text-lg font-bold text-[#e85d5d] mb-6">Contact</h3>
            <p className="text-white/50 max-w-sm mb-6 text-sm leading-relaxed">
              A passionate developer crafting AI solutions and building digital experiences.
            </p>
            <ul className="space-y-4 text-white/70 text-sm">
              <li>
                <span className="block text-xs text-white/40 mb-1 uppercase tracking-wide">Emails</span>
                <a href="mailto:nangkon221191@bscse.uiu.ac.bd" className="hover:text-[#e85d5d] transition-colors block">nangkon221191@bscse.uiu.ac.bd</a>
                <a href="mailto:namare.shakib@gmail.com" className="hover:text-[#e85d5d] transition-colors block">namare.shakib@gmail.com</a>
              </li>
              <li>
                <span className="block text-xs text-white/40 mb-1 uppercase tracking-wide">Phone</span>
                <a href="tel:+8801552393399" className="hover:text-[#e85d5d] transition-colors block">+8801552393399</a>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-[#d4846a] mb-6">References</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/[0.04] p-4 rounded-xl border border-white/8">
                <h4 className="font-bold text-white text-sm">Novia Nurain</h4>
                <p className="text-xs text-white/50 mb-2">Asst. Professor, CSE, BUET &amp; UIU</p>
                <a href="mailto:nnurain.cse.buet.ac.bd" className="text-xs text-[#e85d5d] hover:underline">nnurain.cse.buet.ac.bd</a>
              </div>
              <div className="bg-white/[0.04] p-4 rounded-xl border border-white/8">
                <h4 className="font-bold text-white text-sm">Dr. Md. Motaharul Islam</h4>
                <p className="text-xs text-white/50 mb-2">Professor, CSE, UIU</p>
                <a href="mailto:motaharul@cse.uiu.ac.bd" className="text-xs text-[#d4846a] hover:underline">motaharul@cse.uiu.ac.bd</a>
              </div>
              <div className="bg-white/[0.04] p-4 rounded-xl border border-white/8">
                <h4 className="font-bold text-white text-sm">Timothy Averell</h4>
                <p className="text-xs text-white/50 mb-2">Program Manager, Transperfect</p>
                <a href="mailto:taverell@transperfect.com" className="text-xs text-[#6ea8a0] hover:underline">taverell@transperfect.com</a>
              </div>
            </div>
          </div>
          
        </div>
        
        <div className="pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Namare Shakib Angkon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/namaray" target="_blank" rel="noopener noreferrer" className="hover:text-[#e85d5d] transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/namare-shakib-angkon" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4846a] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
