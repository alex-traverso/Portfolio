export const validateForm = (values) => {
  let errors = {};

  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  // validar el nombre
  if (!values.name.trim()) {
    errors.name = "El nombre es obligatorio";
  } else if (!regexName.test(values.name.trim())) {
    errors.name = "El campo 'nombre' sólo acepta letras y espacios en blanco";
  }

  // validar el email
  if (!values.email.trim()) {
    errors.email = "El email es obligatorio";
  } else if (
    !(
      // regex validation
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    )
  ) {
    errors.email = "Email no valido";
  }

  // validar el message
  if (!values.message.trim()) {
    errors.message = "El mensaje es obligatorio";
  }
  if (values.message.length < 5) {
    errors.message = "El mensaje debe contener por lo menos 10 caracteres";
  }

  return errors;
};
