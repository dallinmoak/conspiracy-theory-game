export function buildNav() {
  const navHTML = `
    <header class="navbar">
        <nav>
            <div class="logo">
                <a href="/index.html">
                    <img src="/images/logo.png" alt="logo">
                </a>
            </div>
            <div class="nav-links">
                <a href="/personal-pages/alayna.html">Birds Aren't Real</a>
                <a href="/personal-pages/brenleigh.html">The Moon Landing</a>
                <a href="/personal-pages/dallin.html">Dallin's Page</a>
                <a href="/personal-pages/peter.html">The Satanic Panic</a>
                <a href="/personal-pages/quiz.html">Quiz</a>
            </div>
        </nav>
    </header>
  `;
  document.getElementById("nav").innerHTML = navHTML;
}
