export function buildNav() {
  const navHTML = `
    <header class="navbar">
        <nav>
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/personal-pages/alayna.html">Alayna's Page</a></li>
                <li><a href="/personal-pages/brenleigh.html">Brenleigh's Page</a></li>
                <li><a href="/personal-pages/dallin.html">Dallin's Page</a></li>
                <li><a href="/personal-pages/peter.html">Peter's Page</a></li>
                <li><a href="/personal-pages/quiz.html">Quiz</a></li>
            </ul>
        </nav>
    </header>
    `;
  document.getElementById("nav").innerHTML = navHTML;
}
