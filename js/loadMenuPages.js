document.addEventListener('DOMContentLoaded', function () {
    const FooterContainer = document.getElementById('footerContainer');
    const FooterHTML = generateFooter();
    FooterContainer.innerHTML = FooterHTML;
  });