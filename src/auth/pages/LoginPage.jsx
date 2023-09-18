import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

export const LoginPage = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direcion="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      >
        <Grid
          item
          className="box-shadow"
          xs={12}
          sm={8}
          md={6}
          lg={4}
          sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            Inicio de Sesión
          </Typography>

          <form>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                />
              </Grid>

              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    Iniciar Sesión
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button variant="contained" fullWidth>
                    <Google />
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>

              <Grid container direction="row" justifyContent="end">
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  Crear una Cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
