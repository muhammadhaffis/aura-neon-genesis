
export const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-cyan-500/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-cyan-400 mb-4">NEXUS</div>
            <p className="text-gray-400 mb-4 max-w-md">
              Experience the future of gaming with NEXUS. Where reality meets imagination 
              and every choice shapes the universe.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-500/40 transition-colors duration-300">
                <span className="text-cyan-400 text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-500/40 transition-colors duration-300">
                <span className="text-cyan-400 text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-cyan-500/40 transition-colors duration-300">
                <span className="text-cyan-400 text-sm">i</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Game</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Download</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">System Requirements</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Updates</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Community</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Help Center</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Bug Reports</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Contact Us</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors duration-300">Forums</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NEXUS Gaming Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
