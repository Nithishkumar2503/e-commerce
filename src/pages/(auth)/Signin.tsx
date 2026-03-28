import { useEffect, useState } from "react";
import { InputText } from "../../components/index.component";
import type { UserReqProps } from "../../types/auth";
import { useAuth } from "../../hooks/auth.hooks";
import { useNavigate } from "react-router-dom";

function SigninUI() {
  const { login, token } = useAuth();
  console.log(token);
  const navigate = useNavigate();

  const [form, setForm] = useState<UserReqProps>({
    expiresInMins: 0,
    password: "",
    username: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (token) {
        navigate("/home");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
      await login(form);
    } catch (err) {}
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Welcome Back 👋</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <InputText
            label="Username"
            mandatory
            name="username"
            value={form.username}
            onChange={(val) =>
              setForm((prev) => ({
                ...prev,
                username: val.target.value,
              }))
            }
          />

          <InputText
            label="Password"
            mandatory
            name="password"
            value={form.password}
            onChange={(val) =>
              setForm((prev) => ({
                ...prev,
                password: val.target.value,
              }))
            }
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default SigninUI;
