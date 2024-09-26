function generateFooter() {
    const FooterHTML = `
    <footer class="footer">
    <section class="footer__container container">
        <nav class="nav nav--footer">
            <h2 class="footer__title">FusionSportSystem</h2>

            <ul class="nav__link nav__link--footer">
                <li class="nav__items">
                    <a href="../index.html" class="nav__links">Inicio</a>
                </li>
                <li class="nav__items">
                    <a href="../pages/about-us.html" class="nav__links">Acerca de</a>
                </li>
                <li class="nav__items">
                    <a href="../pages/contact.html" class="nav__links">Contacto</a>
                </li>
                <li class="nav__items">
                    <a href="../pages/downloads.html" class="nav__links">Descargas</a>
                </li>
                <li class="nav__items">
                    <a href="../pages/ptc.html" class="nav__links">Temática</a>
                </li>
            </ul>
        </nav>

        <form class="footer__form" action="" method="POST">
            <h2 class="footer__newsletter">¿Deseas recibir las nuevas actualizaciones?</h2>
            <div class="footer__inputs">
                <input type="email" placeholder="Email:" class="footer__input" name="_replyto">
                <input type="submit" value="Registrate" class="footer__submit">
            </div>
        </form>
    </section>

    <section class="footer__copy container">
        <h3 class="footer__copyright">&copy; FusionSportSystem | Todos los derechos reservados.</h3>
    </section>
</footer>
    `;
    return FooterHTML;
  }