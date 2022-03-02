function valCookie(nombreCookie) {
    let cookies = document.cookie;
    let arrCookies = cookies.split('; ');

    for (const valor of arrCookies) {
        const cookie = valor.split('=');
        if (cookie[0] === nombreCookie) {
            return cookie[1];
        }
    }
}
