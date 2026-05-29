export default function Home() {
  return (
    <main id="home" className="w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-gray-950 to-purple-950 text-white flex flex-col items-center px-5 py-6 selection:bg-purple-500/30 scroll-smooth">
      
      {/* Navigation Bar - Fixed responsive visibility */}
      <nav className="w-full flex justify-center mb-8 px-3 sticky top-3 z-50">
        <div className="backdrop-blur-xl flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-gray-300 bg-white/5 px-3 py-3 rounded-2xl border border-white/10 w-full max-w-4xl shadow-2xl shadow-purple-900/20">

          <a href="#home" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Home
          </a>

          <a href="#skills" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Skills
          </a>

          <a href="#about" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            About
          </a>

          <a href="#projects" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Projects
          </a>

          <a href="/blog/first-post" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-purple-400 transition">
            Blog
          </a>

          <a href="mailto:pratapsanidhya.sp@gmail.com" className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-xl text-white font-medium">
            Contact
          </a>

        </div>
      </nav>

      {/* Hero Header - Fixed leading height & separated layouts cleanly */}
      <div className="flex flex-col items-center mt-10 sm:mt-16 w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent text-center leading-tight sm:hidden">
          Hi, I&apos;m Sanidhya 👋
        </h1>
        <h1 className="hidden sm:block text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent text-center leading-tight">
          Hi, I&apos;m Sanidhya 👋
        </h1>

        
      </div>

      {/* Subheading */}
      <p className="text-sm sm:text-lg md:text-2xl text-gray-300 mb-8 mt-4 text-center max-w-xs sm:max-w-xl leading-relaxed">
        Building AI-powered products and modern web applications.
      </p>

      {/* Call to Action Button */}
      <a
       href="mailto:pratapsanidhya.sp@gmail.com" 
       className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-2xl text-base sm:text-lg font-semibold hover:scale-110 transition duration-300 shadow-2xl shadow-purple-500/40 hover:shadow-pink-500/40"
      >
        Contact Me
      </a>
      <a
        href="/resume.pdf"
        target="_blank"
        className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-2xl text-base sm:text-lg font-semibold hover:scale-110 transition duration-300 shadow-2xl shadow-purple-500/40 hover:shadow-pink-500/40"
       >
        📄 Download Resume
      </a>
      {/* Skills Section */}
      <div id="skills" className="mt-16 w-full max-w-2xl scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Skills
        </h2>

        <div className="flex gap-3 flex-wrap justify-center text-sm sm:text-base">
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">HTML</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">CSS</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">JavaScript</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">React</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">Next.js</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">Python</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">SQL</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">Machine Learning</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">Generative AI</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">Pandas</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">NumPy</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">Scikit-learn</span>
          <span className="bg-white/5 backdrop-blur-lg px-4 py-2 rounded-xl border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition duration-300">Tailwind CSS</span>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about" className="mt-16 text-center max-w-2xl px-4 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          I am an aspiring Data Scientist and Frontend Developer with a passion for
          building modern digital experiences and AI-powered solutions. My journey
          started with web development and gradually expanded into Machine Learning,
          Generative AI, and Data Science.
          <br /><br />

          I have hands-on experience working as a GO AI Associate at Amazon, where I
          worked with AI-driven operational workflows and automation systems. Alongside
          my technical journey, I have also spent years teaching Physics, Chemistry,
          and Mathematics, helping students develop strong conceptual understanding and
          problem-solving abilities.

          <br /><br />

          I enjoy combining creativity with technology to build responsive websites,
          intelligent applications, and data-driven systems. My interests include
          Machine Learning, AI integration in web applications, modern frontend
          development, and solving real-world problems through technology.

          <br /><br />

          Currently, I am focused on mastering Full Stack Development, Artificial
          Intelligence, and scalable SaaS applications while continuously improving my
          skills in modern technologies like React, Next.js, TypeScript, and Python.
        </p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="mt-16 text-center w-full max-w-4xl scroll-mt-24">
       <h2 className="text-3xl font-bold mb-8">
        Projects
       </h2>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    
         <div className="bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 text-left">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            Portfolio Website
          </h3>

          <p className="text-gray-400 text-sm">
            Built using Next.js and Tailwind CSS.
          </p>
         </div>

         <div className="bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 text-left">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            AI Legal OS
          </h3>

          <p className="text-gray-400 text-sm">
            AI powered law firm management platform concept.
          </p>
         </div>
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
         <h3 className="text-2xl font-bold mb-2 text-purple-400">
           My Blog
         </h3>

         <p className="text-gray-400 mb-4">
           Read my articles on AI, Web Development and my learning journey.
         </p>

         <a
          href="/blog/first-post"
          className="inline-block bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700"
         >
           Read Blog →
         </a>
        </div>
       </div>
      </div>

      {/* Achievements Section */}
      <div className="mt-16 w-full max-w-4xl px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Amazon Experience
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Worked as a GO AI Associate at Amazon and gained practical exposure to
              AI-powered operational workflows and automation systems.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              8+ Years Teaching Experience
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Taught Physics, Chemistry and Mathematics to students while developing
              strong communication and analytical thinking skills.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              AI & ML Certifications
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Completed certifications in Generative AI, SQL, Machine Learning and
              AWS AI fundamentals from LinkedIn Learning, AWS and Udemy.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-3xl border border-white/10 hover:border-purple-500/40 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
            <h3 className="text-xl font-bold text-purple-400 mb-2">
              Full Stack Projects
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Built responsive websites, AI concepts and interactive applications
              using modern technologies like React, Next.js and JavaScript.
            </p>
          </div>

        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Contact
        </h2>

         <p className="text-gray-400">
           📧 pratapsanidhya.sp@gmail.com
         </p>

         <p className="text-gray-400">
           📱 8587870141
         </p>
      </div>
      {/* Footer */}
      <footer className="mt-24 text-center text-gray-400 text-xs sm:text-sm pb-10 border-t border-white/10 pt-8 w-full">
        © 2026 Sanidhya Pratap. All rights reserved.
      </footer>

    </main>
  );
}
