import React from "react";

const MyBlogs = () => {
  return (
    <div className="mt-10 px-10">
      {/* first question */}
      <div className="text-justify sm:mt-16">
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

      {/* second question */}
      <div className="text-justify sm:mt-16">
        <h1 className="text-center text-3xl font-semibold py-5 text-[#26ABA3]">
          Why are you using firebase? What other options do you have to implement authentication?
        </h1>
        <p className="text-xl text-slate-500">
          Firebase is platform provided by Google which is pretty simple to connect and use built-in
          third-party authentication providers like Google,Facebook,Github,Twitter,Apple etc.Firebase
          bascically takes users information and make connection between those google's or github's backend
          server and as a result login the user to that application.In this proccess users important data's
          like password are encrypted. <br />
          There are some other options for authentication like <br />
          1.Parse <br />
          2. Back4App. <br />
          3.Kinvey. etc
        </p>
      </div>

      {/* third question */}
      <div className="text-justify sm:mt-16 mb-10">
        <h1 className="text-center text-3xl font-semibold py-5 text-[#26ABA3]">
          What other services does firebase provide other than authentication?
        </h1>
        <p className="text-xl text-slate-500">
          1.Backend Services, <br />
          2.Easy-to-use SDKs, <br />
          3.Ready Made UI Libraries. <br />
          4.Hosting. <br />
          5.Realtime Database. <br />
          5.Cloud Firestore. <br />
          6.Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default MyBlogs;
