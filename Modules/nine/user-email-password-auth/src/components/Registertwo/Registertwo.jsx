import {
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registertwo = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setSuccess("");
    setRegisterError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    if (password.length < 6) {
      setRegisterError("The password must contain at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("The  password must contain  a captial letter");
      return;
    } else if (!accepted) {
      setRegisterError("Terms and condition is not accepted");
      return;
    }

    // create user

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setSuccess("you have registered successfully");

        //updating the name of the user
        updateProfile(user, {
          displayName: "Anny Chowdhury",
        })
          .then(console.log("profile updated successfully"))
          .catch((error) => {
            console.log(error);
          });

        //Email verification is sending

        sendEmailVerification(user).then(() => {
          alert("please check your email and verify your account");
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };

  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl px-2 py-4 mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4"
            type="text"
            name="name"
            placeholder="Please enter your name"
            required
            id=""
          />
          <br />

          <input
            className="mb-4 w-full py-2 px-4"
            type="email"
            name="email"
            placeholder="Please enter your email"
            required
            id=""
          />
          <br />

          <div className="relative mb-4">
            <input
              className="w-full py-2 px-4"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Please enter your password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />

          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2 " htmlFor="terms">
              Accept our Terms & Conditions
            </label>
          </div>

          <br />
          <input
            className="w-full  btn py-2 px-4 mt-4 btn-secondary"
            type="submit"
            value="Register"
          />
        </form>

        {registerError && <p className="text-red-700">{registerError}</p>}
        {success && <p className="text-green-700">{success}</p>}

        <p>
          Already have an account? Please{" "}
          <span>
            <Link className="bg-green-900" to="/login">
              Log In
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registertwo;
