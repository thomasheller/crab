document.addEventListener('DOMContentLoaded', function(){
    const cookiesCompliance = sessionStorage.getItem('cookiesCompliance');
    if (cookiesCompliance === 'true') return;

    setTimeout(function () {
        document.getElementById("cookieConsent").setAttribute('style', 'display: block;')
     }, 4000);
     document.getElementsByClassName('cookieConsentOK')[0].onclick = () => {
       document.getElementById("cookieConsent").setAttribute('style', 'display: none;');
       sessionStorage.setItem('cookiesCompliance', 'true');
     };
}, false);
