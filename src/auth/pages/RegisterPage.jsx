import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "auth/layout/AuthLayout";
import { useForm } from "hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWhitEmailPassword } from "store/auth";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValdations = {
  email: [(value) => value.includes("@"), "El correo debe tener una @"],
  password: [
    (value) => value.length >= 6,
    "La contraseña debe tener más de 6 caracteres",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValdations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWhitEmailPassword(formState));
  };

  return (
    <AuthLayout title="Registrarse">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Ingresa tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Inicia Sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
