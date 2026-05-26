export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white flex flex-col items-center justify-center">

      <nav className="w-full flex justify-between items-center p-6 absolute top-0">
        <h1 className="text-2xl font-bold text-purple-500">
          SP
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#" className="hover:text-purple-400 transition">Home</a>
          <a href="#">Skills</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <h1 className="text-6xl font-bold mb-4 text-purple-500">
        Sanidhya Pratap
      </h1>

      <p className="text-2xl text-gray-300 mb-6">
        Frontend Developer • AI Enthusiast
      </p>

      <a
       href="mailto:pratapsanidhya.sp@gmail.com" className="bg-purple-600 px-8 py-4 rounded-2xl text-lg hover:bg-purple-700 hover:scale-105 transition shadow-lg shadow-purple-500/30">
        Contact Me
      </a>

      <div className="mt-10">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Skills
        </h2>

        <div className="flex gap-4 flex-wrap justify-center">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">HTML</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">CSS</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">React</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Next.js</span>
        </div>
      </div>

      <div className="mt-10 text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">
          About Me
        </h2>

        <p className="text-gray-400">
          I am learning Frontend Development and building modern websites using
          Next.js, React and Tailwind CSS.
        </p>
      </div>
      <div className="mt-16 text-center">
       <h2 className="text-3xl font-bold mb-6">
        Projects
       </h2>

       <div className="grid md:grid-cols-2 gap-6">
    
         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            Portfolio Website
          </h3>

          <p className="text-gray-400">
            Built using Next.js and Tailwind CSS.
          </p>
         </div>

         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">
            AI Legal OS
          </h3>

          <p className="text-gray-400">
            AI powered law firm management platform concept.
          </p>
         </div>

       </div>
      </div>
      <footer className="mt-20 text-center text-gray-500 text-sm pb-10">
        © 2026 Sanidhya Pratap. All rights reserved.
      </footer>

    </main>
  );
}