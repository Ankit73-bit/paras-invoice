import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Stack,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Header from "../../ui/Header";
import { GoogleIcon } from "./CustomIcons";
import useAuthForm from "./useAuthForm";
import { useState } from "react";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import MuiCard from "@mui/material/Card";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: "10vh",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function SignInUser() {
  const [isSignIn, setIsSignIn] = useState(true);
  const {
    handleSubmit,
    nameRef,
    emailRef,
    passwordRef,
    emailError,
    emailErrorMessage,
    passwordError,
    passwordErrorMessage,
    errorMessage,
    toggleSignIn,
  } = useAuthForm(isSignIn, setIsSignIn);

  return (
    <>
      <Header />
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            {!isSignIn && (
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <TextField
                  inputRef={nameRef}
                  id="name"
                  type="name"
                  name="name"
                  placeholder="your name"
                  autoFocus
                  required
                  fullWidth
                  variant="outlined"
                  sx={{ ariaLabel: "name" }}
                />
              </FormControl>
            )}
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField
                inputRef={emailRef}
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? "error" : "primary"}
                sx={{ ariaLabel: "email" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                inputRef={passwordRef}
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? "error" : "primary"}
              />
            </FormControl>
            <Typography className="text-red-500">{errorMessage}</Typography>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" fullWidth variant="contained">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
            <Typography
              sx={{ textAlign: "center" }}
              onClick={toggleSignIn}
              className="cursor-pointer"
            >
              <span>
                {isSignIn ? "Don't have an account?" : "Already a user?"}{" "}
              </span>
              <span className="text-blue-600">
                {isSignIn ? "Sign up" : "Sign in"}
              </span>
            </Typography>
          </Box>
          <Divider>or</Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign in with Google")}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
}
