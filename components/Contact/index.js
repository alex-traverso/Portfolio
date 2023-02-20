import React, { useState, useRef } from "react";
import { validateForm } from "@/validate/validateForm";
import useValidation from "@/hooks/useValidation";
import Titles from "../Titles";
import Button from "../Button";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const INITIAL_STATE = {
    name: "",
    email: "",
    message: "",
  };

  const [error, setError] = useState(false);

  // Funcion que se ejecuta cuando el usuario hace submit
  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_vgs55vd",
        "template_y7yjl75",
        form.current,
        "NUH1ZdYHL0tqg9HZl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { values, errors, handleChange, handleSubmit, handleBlur } =
    useValidation(INITIAL_STATE, validateForm, sendEmail);

  const { name, email, message } = values;
  const form = useRef();

  //AGREGAR UN MODAL O ALGO QUE LE INDIQUE AL USUARIO QUE SE ENVIO EL MENSAJE
  return (
    <div
      id='contact'
      className='flex flex-col justify-center items-center w-full bg-lightestBg dark:bg-darkGrey pb-sectionBottom pt-sectionTop '
    >
      <Titles>CONTACTO</Titles>
      <form
        ref={form}
        onSubmit={handleSubmit}
        action=''
        className=' flex flex-col justify-center items-start lg:w-[45%] sm:w-[60%] m:w-[80%] gap-3 text-black dark:text-white'
      >
        <input
          required
          className=' bg-lightDarkBg dark:bg-lightestGrey lg:p-3 m:px-3 m:py-2 w-full rounded-xl'
          type='text'
          value={name}
          name='name'
          placeholder='Nombre'
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.name ? (
          <div className='lg:px-3 m:px-2 text-red-500 text-center'>
            {errors.name}
          </div>
        ) : null}

        <input
          required
          className=' bg-lightDarkBg dark:bg-lightestGrey lg:p-3 m:px-3 m:py-2 w-full rounded-xl'
          type='text'
          value={email}
          name='email'
          placeholder='Email'
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email ? (
          <div className='lg:px-3 m:px-2 text-red-500 text-center'>
            {errors.email}
          </div>
        ) : null}

        <textarea
          required
          className='bg-lightDarkBg dark:bg-lightestGrey lg:p-3 m:px-3 m:py-2 w-full resize-none h-36 rounded-xl'
          value={message}
          name='message'
          type='textarea'
          placeholder='Deja tu mensaje'
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>

        {errors.message ? (
          <div className='lg:px-3 m:px-2 text-red-500 text-center'>
            {errors.message}
          </div>
        ) : null}

        {error ? (
          <div className='lg:px-3 m:px-2 text-red-500 text-center'>{error}</div>
        ) : null}

        <Button type='submit'>ENVIAR</Button>
      </form>
    </div>
  );
}
