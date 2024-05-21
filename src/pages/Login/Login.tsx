import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

const Login = () => {
  return (
    <>
      <section className="flex flex-col items-center pt-10 h-screen" style={{}}>
        <form action="" className="sm:w-[27rem] w-full px-4">
          <h1 className="text-headerTwo">Log in</h1>
          <p className="mt-6">
            If you don't have an account, you can{" "}
            <Link
              to="/register"
              className="text-primary text-linkText font-semibold"
            >
              register here
            </Link>
          </p>
          <div className="mt-12">
            <Input
              labelText={"Username or Email"}
              inputType={"text"}
              inputPlaceholder={"Enter username or email"}
            />
          </div>
          <div className="mt-8">
            <Input
              labelText={"Password"}
              inputType={"password"}
              inputPlaceholder={"Enter your password"}
            />
          </div>
          <button className="w-full mt-8 bg-secondary rounded-full py-3 px-2 text-buttonText font-bold">
            Login
          </button>
        </form>
        <Link to="/" className="flex mt-8 justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#4b4949"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
          <span>Back to home</span>
        </Link>
      </section>
    </>
  );
};

export default Login;
