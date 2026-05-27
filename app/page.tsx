export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white flex flex-col items-center px-5 py-6">
      
      {/* Navigation Bar - Fixed responsive visibility */}
      <nav className="w-full flex justify-center mb-6 px-2">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 bg-gray-900/80 px-3 sm:px-4 py-3 rounded-2xl border border-gray-800 w-full max-w-2xl">
          <a href="#" className="hover:text-purple-400 transition">Home</a>
          <a href="#" className="hover:text-purple-400 transition">Skills</a>
          <a href="#" className="hover:text-purple-400 transition">About</a>
          <a href="#" className="hover:text-purple-400 transition">Projects</a>

          <button className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-lg text-white font-medium">
            Sign In
          </button>

          <button className="border border-gray-500 hover:border-purple-500 hover:text-purple-400 transition px-4 py-2 rounded-lg text-white font-medium">
            Sign Out
          </button>
        </div>
      </nav>

      {/* Hero Header - Fixed leading height & separated layouts cleanly */}
      <div className="flex flex-col items-center mt-6 sm:mt-12 w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-purple-500 text-center leading-tight sm:hidden">
          Sanidhya Pratap
        </h1>

        <h1 className="hidden sm:block text-5xl md:text-6xl font-bold text-purple-500 text-center leading-tight">
          Sanidhya Pratap
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-sm sm:text-lg md:text-2xl text-gray-300 mb-8 mt-4 text-center max-w-xs sm:max-w-xl leading-relaxed">
       Frontend Developer <br className="sm:hidden" /> • AI Enthusiast
      </p>

      {/* Call to Action Button */}
      <a
       href="mailto:pratapsanidhya.sp@gmail.com" 
       className="bg-purple-600 px-8 py-3 rounded-2xl text-base sm:text-lg font-medium hover:bg-purple-700 hover:scale-105 transition shadow-lg shadow-purple-500/30"
      >
        Contact Me
      </a>

      {/* Skills Section */}
      <div className="mt-16 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Skills
        </h2>

        <div className="flex gap-3 flex-wrap justify-center text-sm sm:text-base">
          <span className="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700">HTML</span>
          <span className="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700">CSS</span>
          <span className="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700">JavaScript</span>
          <span className="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700">React</span>
          <span className="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700">Next.js</span>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-16 text-center max-w-2xl px-4">
        <h2 className="text-3xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          I am learning Frontend Development and building modern websites using
          Next.js, React and Tailwind CSS.
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-16 text-center w-full max-w-4xl">
       <h2 className="text-3xl font-bold mb-8">
        Projects
       </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
    
         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-left">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            Portfolio Website
          </h3>

          <p className="text-gray-400 text-sm">
            Built using Next.js and Tailwind CSS.
          </p>
         </div>

         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 text-left">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            AI Legal OS
          </h3>

          <p className="text-gray-400 text-sm">
            AI powered law firm management platform concept.
          </p>
         </div>

       </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-xs sm:text-sm pb-10">
        © 2026 Sanidhya Pratap. All rights reserved.
      </footer>

    </main>
  );
}
