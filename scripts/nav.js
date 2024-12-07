export function buildNav() {
  const basePath = window.location.pathname.includes("personal-pages")
    ? "../"
    : "./";
  const navHTML = `
        <header class="navbar" id="top">
            <nav>
                <div class="logo">
                    <a href="${basePath}index.html">
                        <img src="${basePath}images/logo.png" alt="logo">
                    </a>
                </div>
                <div class="nav-links">
                    <a href="${basePath}personal-pages/alayna.html">Birds Aren't Real</a>
                    <a href="${basePath}personal-pages/brenleigh.html">The Moon Landing</a>
                    <a href="${basePath}personal-pages/dallin.html">Dallin's Page</a>
                    <a href="${basePath}personal-pages/peter.html">The Satanic Panic</a>
                    <a href="${basePath}personal-pages/quiz.html">Quiz</a>
                </div>
            </nav>
        </header>
    `;
  document.getElementById("nav").innerHTML = navHTML;
}
