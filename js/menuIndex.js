  function generateFooter() {
    const FooterHTML = `
    <footer class="footer">
    <section class="footer__container container">
        <nav class="nav nav--footer">
            <h2 class="footer__title">Perfil 1 - Redes</h2>

            <ul class="nav__link nav__link--menu">
                <li class="nav__items">
                    <a href="index.html" class="nav__links">Inicio</a>
                </li>
                <li class="nav__items">
                    <a href="pages/ComponentesPasivos.html" class="nav__links">Componentes Pasivos</a>
                </li>
                <li class="nav__items">
                    <a href="pages/ComponentesActivos.html" class="nav__links">Componentes Activos</a>
                </li>
                <li class="nav__items">
                    <a href="pages/HerramientasCableado.html" class="nav__links">Herramientas para Cableado</a>
                </li>
                <li class="nav__items">
                    <a href="pages/Cableado.html" class="nav__links">Cableado</a>
                </li>
            </ul>
        </nav>
    </section>
    `;
    return FooterHTML;
}

