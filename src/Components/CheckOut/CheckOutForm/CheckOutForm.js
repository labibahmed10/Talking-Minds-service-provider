import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOutForm = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const addressRef = useRef("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // getting input values
    const email = emailRef.current.value;
    const password = nameRef.current.value;
    const address = addressRef.current.value;

    if (!email || !password) {
      toast.warn("Please Fill Up The Form!", {
        position: "top-center",
        autoClose: 2500,
      });
    } else {
      toast.success("Thank You For The Booking😃", {
        position: "top-center",
        autoClose: 2500,
      });
      // after successful submit forms are empty again
      emailRef.current.value = "";
      nameRef.current.value = "";
      addressRef.current.value = "";
    }
  };

  return (
    <div className="mx-auto my-16 w-[40rem]">
      <form onSubmit={handleSubmitForm}>
        <div className="flex gap-5 mb-2">
          <input
            ref={nameRef}
            className="py-4 px-2 border w-1/2"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name..."
          />
          <input
            ref={addressRef}
            className="py-4 px-2 border w-1/2"
            type="text"
            name="address"
            id="adress"
            placeholder="Your Adress.."
          />
        </div>
        <div className="flex gap-5 mb-3">
          <input
            ref={emailRef}
            className="py-4 px-2 border w-1/2"
            type="email"
            name="email"
            placeholder="Your Email..."
          />
          <input className="py-4 px-2 border w-1/2" type="number" placeholder="Your Number..(optional)" />
        </div>
        <textarea
          className="w-full border resize-none p-4"
          name="Message"
          id=""
          cols="50"
          rows="5"
          placeholder="Leave a Message"
        ></textarea>

        <button className="block mx-auto mt-4 py-3 px-5 bg-[#26ABA3] text-[aliceblue] rounded-full">
          Checkout
        </button>
      </form>
      {/* toast container added */}
      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
};

export default CheckOutForm;
