import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

function ActivateUser() {
  const query = new URLSearchParams(useLocation().search);
  let history = useHistory();

  const activationCode = query.get("activationCode");

  useEffect(() => {
    console.log("LLAMAMOS AL BACKEND CON EL ACTIVATION CODE");

    async function performActivateUser() {
      const response = await fetch("http://localhost/api/auth/users/activate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          activationCode,
        }),
      });

      await response.json();

      // TODO: Tratar el error???

      // redirect a /login
      history.push("/login");
    }

    performActivateUser();
  }, [activationCode, history]);

  return <div>Activando user...</div>;
}

export default ActivateUser;
