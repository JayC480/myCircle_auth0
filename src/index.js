import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-nsyogjd4660dr0he.us.auth0.com"
    clientId="ec6T4HHSE5bwKD244UZnka0fsAIz3CgQ"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-nsyogjd4660dr0he.us.auth0.com/api/v2/",
      scope: "read:current_user update:current_user_metadata"
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


