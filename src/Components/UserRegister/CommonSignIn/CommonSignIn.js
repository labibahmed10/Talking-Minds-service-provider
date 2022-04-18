import React from "react";
import auth from "../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithFacebook,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import SpinnerLoading from "../../Spinner/SpinnerLoading";
import { toast, ToastContainer } from "react-toastify";

const CommonSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, Guser, Gloading, Gerror] = useSignInWithGithub(auth);
  const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
  const [signInWithTwitter, Tuser, Tloading, Terror] = useSignInWithTwitter(auth);

  if (loading || Gloading || Floading || Tloading) {
    return <SpinnerLoading></SpinnerLoading>;
  }

  if (user || Guser || Fuser || Tuser) {
    console.log();
    toast.success(`Log In Succesfull 😃 ${user?.user?.displayName ? user?.user?.displayName : ""}`, {
      position: "top-center",
      autoClose: 2000,
    });
  }

  if (error || Gerror || Ferror || Terror) {
    toast(`${error?.message || Gerror?.message || Ferror?.message || Terror?.message}`, {
      autoClose: 2100,
    });
  }

  return (
    <div className="mb-10">
      {/* horizontal line section */}
      <div className="flex items-center px-12 ">
        <hr className="w-1/2" />
        <p className="px-2">or</p>
        <hr className="w-1/2" />
      </div>

      {/* google,github,fb,twitter login part */}
      <div className="flex items-center justify-center space-x-5">
        <div onClick={() => signInWithGoogle()}>
          <img
            className="w-12 cursor-pointer"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            alt=""
          />
        </div>
        <div onClick={() => signInWithGithub()}>
          <img
            className="w-12 cursor-pointer"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
        </div>
        <div onClick={() => signInWithFacebook()}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
            className="w-8 cursor-pointer"
            alt=""
          />
        </div>
        <div onClick={() => signInWithTwitter()}>
          <img
            className="w-12 cursor-pointer"
            src="https://pngimg.com/uploads/twitter/twitter_PNG3.png"
            alt=""
          />
        </div>
      </div>

      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
};

export default CommonSignIn;
