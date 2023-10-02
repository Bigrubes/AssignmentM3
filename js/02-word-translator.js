function word() {
    let code = (prompt('To translate the phrase "Hello World" Please input language code "es" for Spanish, "de" for German, "en" for English or "fr" for French'))
    let french = "fr"
    let english = "en"
    let german = "de"
    let spanish = "es"
    if (code === english){
    alert('"Hello World"')
    }
    else if (code === spanish){
    alert('"Hello World" translated in Spanish is: "Hola mundo."')
    }
    else if (code === french){
    alert('"Hello World" translated in French is: "Bonjour le monde."')
    }
    else if (code === german){
    alert('"Hello World" translated in German is: "Hallo welt."')
    }
    else if (code === "")
    alert('"Hello World"')
}