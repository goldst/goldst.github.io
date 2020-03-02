/**
 * takes an encrypted mail address, written in lower-case mathematical
 * double struck letters (𝕒-𝕫) and "normal" characters (all characters
 * with character codes under 122), converts it to a real mail address
 * and opens the mailto link if possible
 * @param {string} encrypted
 * @returns {void}
 */
function toMail(encrypted) {
    let decrypted = "";
    for(let i = 0; i < encrypted.length; i++) {
        if(encrypted.charCodeAt(i) > 122) {
            decrypted += String.fromCharCode(encrypted.charCodeAt(i+1) - 56561);
            i++;
        } else {
            decrypted += encrypted.charAt(i);
        }
    }
    window.open("mailto:" + decrypted, "_self");
}
