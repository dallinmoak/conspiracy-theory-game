export function buildFooter() {
  const footerHTML = `
      <footer>
        <p>&copy; 2024 Team 1. All Rights Reserved.</p>
        <a href="#top">Back to Top</a>
      </footer>
    `;
  document.getElementById("footer").innerHTML = footerHTML;
}
