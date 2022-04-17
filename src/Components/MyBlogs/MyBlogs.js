import React from "react";

const MyBlogs = () => {
  return (
    <div className="sm:mt-20 mt-10 px-10">
      <div className="text-justify">
        <h1 className="text-center text-3xl font-semibold py-5 text-[#26ABA3]">
          Q1. Differences Between Authentication and Authorization
        </h1>

        <p className="text-xl text-slate-500">
          Authentication is the process of checking or verifying about who the person is trying to access.A
          person or his/her some information or act is being checked by this system.In this process it
          verifies that users really are who they represent them to be. <br />
          On the other hand Authorization comes after authentication.In our application it's like giving the
          access to the authorized person to do something.We can also let them use resources that are in the
          application.For an example an admin of a group who has extra power even after login/authentication
          to do some specific work.
        </p>
      </div>

      <div className="text-justify">
        <h1 className="text-center text-3xl font-semibold py-5 text-[#26ABA3]">
          {" "}
          Why are you using firebase? What other options do you have to implement authentication?
        </h1>
      </div>
    </div>
  );
};

export default MyBlogs;
