const lang = navigator.language
console.log("Language : "+ lang);

if (lang == "fr"){
    window.location.href='./fr/index.html'
} else if (lang == "en" || lang == "en-US"){
    window.location.href='./en/index.html'
} else {
    window.location.href='./fr/index.html'
}