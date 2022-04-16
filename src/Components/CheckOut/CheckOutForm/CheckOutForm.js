import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOutForm = () => {
  const emailRef = useRef("");
  const nameRef = useRef("");
  const addressRef = useRef("");

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = nameRef.current.value;
    const address = addressRef.current.value;

    if (!email || !password) {
      toast.warn("Please Fill Up The Form!", {
        position: "top-center",
        autoClose: 2500,
      });
    } else {
      toast.success("Thank You So Much For The Booking😃", {
        position: "top-center",
        autoClose: 2500,
      });

      emailRef.current.value = "";
      nameRef.current.value = "";
      addressRef.current.value = "";
    }
  };

  return (
    <div className="mx-auto mt-16 w-[40rem]">
      <form onSubmit={handleSubmitForm}>
        <div className="flex gap-5 mb-2">
          <input
            ref={nameRef}
            className="py-2 px-2 border w-1/2"
            type="text"
            name="name"
            id="name"
            placeholder="Your Name..."
          />
          <input
            ref={addressRef}
            className="py-2 px-2 border w-1/2"
            type="text"
            name="address"
            id="adress"
            placeholder="Your Adress.."
          />
        </div>
        <div className="flex gap-5 mb-3">
          <input
            ref={emailRef}
            className="py-2 px-2 border w-1/2"
            type="email"
            name="email"
            placeholder="Your Email..."
          />
          <input className="py-2 px-2 border w-1/2" type="number" placeholder="Your Number..(optional)" />
        </div>
        <textarea
          className="w-full border resize-none p-4"
          name="Message"
          id=""
          cols="50"
          rows="5"
          placeholder="Text To Us"
        ></textarea>

        <button className="block mx-auto mt-4 py-2 px-4 bg-[#26ABA3] text-[aliceblue] rounded-full">
          Checkout
        </button>
      </form>

      <ToastContainer theme="dark"></ToastContainer>
    </div>
  );
};

export default CheckOutForm;