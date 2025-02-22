import { useState } from "react";

export default function useHandleSigning() {
  // Store the loading state of the request.
  const [isLoading, setIsLoading] = useState(false);

  // Asynchronous function used to invoke the login API.
  const login = async function loginHandler(username, password) {
    try {
    } catch (error) {
      if (false) {
        // ...
      }

      throw error;
    }
  };

  // Callback used to sign into the application.
  const onSignInRequest = function onSignInRequestHandler(username, password) {
    if (!username || !password) {
      alert("Il faut spécifier un email et un mot de passe!");
      return;
    }

    login(username, password).catch(function onLoginError(error) {});
  };

  return { isLoading, onSignInRequest };
}

export const handleSignIn = async () => {
  if (email && password) {
    // console.log("ok");
    // Ici, le code pour envoyer les données à l'API
    setIsLoading(false);
    const result = await fetchApiDatas();
    setIsLoading(true);

    if (result == "not-email" || result == "bad-password") {
      alert("Adresse mail ou password éronné");
    } else alert("Votre inscription est bien enregistrée");
  } else {
    alert("Veuillez entrer un email et un mot de passe");
  }
};
