import React, { useState } from "react";
import FormAlert from "./FormAlert";
import AuthSocial from "./AuthSocial";
import { useRouter } from "./../util/router.js";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <AuthSocial
        type={props.type}
        buttonText={props.typeValues.buttonText}
        showLastUsed={true}
        providers={props.providers}
        onAuth={handleAuth}
        onError={(message) => {
          handleFormAlert({
            type: "error",
            message: message,
          });
        }}
      />
    </>
  );
}

export default Auth;
