import { FaGraduationCap, FaHandshake, FaNetworkWired } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import WhyAluminiConnect from "../components/WhyAluminiConnect.jsx";

const Home = () => {
  return (
    <>
      <div
        className="transition-all duration-500 ease-in-out bg-cover bg-no-repeat bg-center h-screen relative reveal"
        style={{
          backgroundImage:
            "url(https://everwall.com/wp-content/uploads/2023/06/Everwall-AlumniEventIdeasBringingGraduatesTogether-950x450-SRI-18-06-2023-01.svg)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <main className="container mx-auto px-4 py-8 relative z-10 text-white">
          <section className="text-center">
            <h1 className="text-5xl font-extrabold mb-6">
              Welcome to <span className="text-blue-400">Alumni Connect</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-lg mx-auto">
              A modern platform to stay connected with your alma mater and
              network with fellow alumni. Reignite the bonds!
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
            <div className="bg-white hover:bg-pink-50 rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl reaveal">
              <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
                <FaGraduationCap />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Step 1
              </h2>
              <p className="text-gray-600">Register as an Alumnus</p>
                <div><GoArrowRight className="text-3xl font-extrabold justify-self-end text-gray-950 hover:text-green-500 hover:cursor-pointer"/></div>
            </div>

            <div className="bg-white hover:bg-pink-50 rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl reaveal">
              <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
                <FaHandshake />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Step 2
              </h2>
              <p className="text-gray-600">Connect with Fellow Alumni</p>
                <div><GoArrowRight className="text-3xl font-extrabold justify-self-end text-gray-950 hover:text-green-500 hover:cursor-pointer"/></div>
            </div>

            <div className="bg-white hover:bg-pink-50 rounded-lg shadow-lg p-6 transition-transform duration-500 hover:scale-105 hover:shadow-2xl reaveal">
              <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
                <FaNetworkWired />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Step 3
              </h2>
              <p className="text-gray-600">Engage in Networking Events</p>
                <div><GoArrowRight className="text-3xl font-extrabold justify-self-end text-gray-950 hover:text-green-500 hover:cursor-pointer"/></div>
            </div>
          </section>
        </main>
      </div>
      <WhyAluminiConnect/>
    </>
  );
};

export default Home;
