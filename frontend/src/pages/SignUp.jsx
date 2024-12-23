import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
// import { signup } from "../redux/slices/AuthSlice"; // Adjust the import path as needed

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    gender: "Male",
    dateOfBirth: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
      address,
      phoneNumber,
      gender,
      dateOfBirth,
    } = signupData;

    if (
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !address ||
      !phoneNumber ||
      !dateOfBirth ||
      !gender
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await dispatch(signup(signupData));
      if (response?.payload?.success) {
        toast.success("Signup successful!");
        navigate("/login");
        setSignupData({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          address: "",
          phoneNumber: "",
          gender: "Male",
          dateOfBirth: "",
        });
      } else {
        toast.error(response?.payload?.message || "Something unexpected happened!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 reveal">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Alumini Connect"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={signupData.firstName}
                  onChange={handleUserInput}
                  className="mt-2 block w-full rounded-md border-2 border-gray-400 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={signupData.lastName}
                  onChange={handleUserInput}
                  className="mt-2 block w-full border-2 border-gray-400 p-2  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={signupData.email}
                onChange={handleUserInput}
                className="mt-2 block w-full rounded-md border-2 border-gray-400 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={signupData.password}
                onChange={handleUserInput}
                className="mt-2 block w-full rounded-md border-2 border-gray-400 p-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                value={signupData.address}
                onChange={handleUserInput}
                className="mt-2 block w-full rounded-md border-2 border-gray-400 p-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                value={signupData.phoneNumber}
                onChange={handleUserInput}
                className="mt-2 block w-full rounded-md border-2 border-gray-400 p-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="dateOfBirth"
                  className="block text-sm font-medium text-gray-900"
                >
                  Date of Birth
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  required
                  value={signupData.dateOfBirth}
                  onChange={handleUserInput}
                  className="mt-2 block w-full rounded-md border-2 border-gray-400 p-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-900"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={signupData.gender}
                  onChange={handleUserInput}
                  className="mt-2 block w-full rounded-md border-2 border-gray-400 p-2  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSignup}
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
