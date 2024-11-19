// this file can contain js resources that are needed between page like the header and footer
import { buildNav } from "./nav.js";
import { buildFooter } from "./footer.js";

document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  buildFooter();
});
