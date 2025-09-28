import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getUserInfo } from "../../utils/getUserInfo";
import { login } from "../../api";

const Login = () => {
  const userInfo = getUserInfo();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    if (userInfo?.email) {
      navigate("/timesheet");
    }
  }, [userInfo?.email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loggedInUser = await login({
        email: formData.email,
        password: formData.password,
      });

      const data = { ...formData };
      delete data.password;

      if (formData.remember && loggedInUser?.email) {
        localStorage.setItem("userInfo", JSON.stringify(data));
      } else {
        sessionStorage.setItem("userInfo", JSON.stringify(data));
      }
      navigate("/timesheet");
    } catch (err) {
      console.log(err);
      alert(err.message);
    }
  };

  return (
    <div className="grid grid-cols-2 h-[100vh]">
      <div>
        <div className="flex flex-col justify-center h-[100vh] text-white p-[72px]">
          <form onSubmit={handleSubmit}>
            <div>
              <p className="mb-[20px] text-[#111928] text-[20px] font-bold">
                Welcome back
              </p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@example.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  checked={formData.remember}
                  onChange={(e) => {
                    setFormData({ ...formData, remember: e.target.checked });
                  }}
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2  font-medium text-[#6B7280] text-[14px] dark:text-gray-300"
              >
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-[#1C64F2] h-[100vh] text-white p-[72px]">
        {/* <div> */}
        <h1 className="text-[40px] font-semibold">ticktock</h1>
        <p>
          Introducing ticktock, our cutting-edge timesheet web application
          designed to revolutionize how you manage employee work hours. With
          ticktock, you can effortlessly track and monitor employee attendance
          and productivity from anywhere, anytime, using any internet-connected
          device.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
