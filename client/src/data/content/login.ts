import type { Connexion, Inscription, Lang } from "../types";

export const contentConnexion: Record<Lang, Connexion> = {
  fr: {
    title: "Content de te revoir",
    text: "connecte-toi pour retrouver tes plantes",

    email: "Adresse e-mail",
    emailEx: "moi@exemple.com",
    password: "Mot de passe",

    remember: "se souvenir de moi",
    forgotPassword: "mot de passe oublié ?",

    connxionButton: "se connecter",
    noAccount: "Pas encore de compte ?",
    inscription: "Créer un compte",
  },
  en: {
    title: "Happy to see you again",
    text: "connect to check your plants",

    email: "E-mail adress",
    emailEx: "me@exemple.com",
    password: "Password",

    remember: "remember me",
    forgotPassword: "forget password ?",

    connxionButton: "connect",
    noAccount: "No account yet ?",
    inscription: "Create an account",
  },
};

/*
export const contentInscription: Record<Lang, Inscription> = {
  fr: {},
  en: {},
};*/
