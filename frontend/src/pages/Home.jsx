import { FaGraduationCap, FaHandshake, FaNetworkWired } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";


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
      <div className="reveal">
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Why Alumni Connect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Stay Connected
              </h3>
              <p className="text-gray-600">
                Stay connected with your alma mater and never lose touch with
                your college friends.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
                <FaHandshake />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Network with Alumni
              </h3>
              <p className="text-gray-600">
                Network with fellow alumni and explore new opportunities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
                <FaNetworkWired />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Attend Events
              </h3>
              <p className="text-gray-600">
                Engage in networking events and stay updated with the latest
                happenings.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="reveal">
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-extrabold text-center mb-8">
            Alumni Connect Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Alumni Registration
              </h3>
              <p className="text-gray-600">
                Register as an Alumni and connect with fellow alumni.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">
          Alumni Connect Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4 text-blue-400 text-4xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Stay Connected
            </h3>
            <p className="text-gray-600">
              Stay connected with your alma mater and never lose touch with your
              college friends.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
