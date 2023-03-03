import { useState, useEffect } from "react";

const useValidation = (initialState, validate, fn) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrors = Object.keys(errors).length === 0;

      if (noErrors) {
        fn(); /* funcion que ejecuta el componente */
      }
      setSubmitForm(false);
    }
    //eslint-disable-next-line
  }, [errors]);

  /* Funcion que se ejecuta a medida que el usuario escribe algo */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  // Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitForm(true);

    fetch("https://formsubmit.co/ajax/alextraverso6@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success === "true") {
          setValues(initialState);
          setIsOpen(true);
        }
      })
      .catch((error) => console.log(error));
  };

  // cuando se realiza el evento de blur
  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  return {
    values,
    errors,
    isOpen,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidation;
