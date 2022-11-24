import { createRoot } from "react-dom/client";
import Theme from "./Theme";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Theme>
    <App />
  </Theme>
);
