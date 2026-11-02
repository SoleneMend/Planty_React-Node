export type Lang = "fr" | "en";

// ---> Login types

// -> Login
export type Login = {
  name: string;
  smallDesc: string;
  desc: string;

  connexion: string;
  inscription: string;
};

// -> Connexion
export type Connexion = {
  title: string;
  text: string;

  email: string;
  emailEx: string;
  password: string;

  remember: string;
  forgotPassword: string;

  connxionButton: string;

  noAccount: string;
  inscription: string;
};

// -> Inscription
export type Inscription = {
  title: string;
  text: string;

  username: string;
  usernameEx: string;

  email: string;
  emailEx: string;

  password: string;
  passwordConfirm: string;

  userCondition: string;

  createAccount: string;

  hasAccount: string;
  connexion: string;
};
