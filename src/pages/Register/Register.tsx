import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

const Register = () => {
  return (
    <>
      <section className="flex justify-center mt-10 h-screen">
        <form action="" className="sm:w-[27rem] w-full px-4">
          <h1 className="text-headerTwo">Sign Up</h1>
          <p className="mt-6">
            If you already have an account, you can{" "}
            <Link to="/" className="text-primary text-linkText font-semibold">
              login here
            </Link>
          </p>
          <div className="mt-12">
            <Input
              labelText={"Email"}
              inputType={"email"}
              inputPlaceholder={"Enter your email address"}
            />
          </div>
          <div className="mt-8">
            <Input
              labelText={"Username"}
              inputType={"text"}
              inputPlaceholder={"Enter your user name"}
            />
          </div>
          <div className="mt-8">
            <Input
              labelText={"Full Name"}
              inputType={"text"}
              inputPlaceholder={"Enter your Full Name"}
            />
          </div>
          <div className="mt-8">
            <Input
              labelText={"Password"}
              inputType={"password"}
              inputPlaceholder={"Enter your password"}
            />
          </div>
          <div className="mt-8">
            <Input
              labelText={"Confirm Password"}
              inputType={"password"}
              inputPlaceholder={"Enter your password again"}
            />
          </div>
          <button className="w-full mt-8 bg-secondary rounded-full py-3 px-2 text-buttonText font-bold">
            Sign Up
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
