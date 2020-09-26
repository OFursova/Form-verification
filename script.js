function setCookie(name, val, exp) {
    let cook = name+'='+encodeURIComponent(val)+'; SameSite=None; Secure;'
    if (exp) {
        let date = new Date();
        date.setHours(date.getHours()+exp);
        cook += 'expires='+date.toUTCString();
    }
    document.cookie = cook;
}

function getCookie(name) {
    let cook = document.cookie;
    let ptn = new RegExp('\\b'+name+'=', 'g');
        if (ptn.test(cook)) {
            let val = ''
            let pos1 = cook.indexOf('=', cook.search(ptn))+1;
            let pos2 = cook.indexOf(';', pos1);
            if (pos2==-1) {
                val = cook.slice(pos1);
            } val = cook.slice(pos1, pos2);
            return decodeURIComponent(val);
        } else {
            return '';
        }
}
