const test = function (stringa1, stringa2) {
    let no1 = stringa1.replace(/[^\w\s]|_/g, '')
    let no2 = stringa2.replace(/[^\w\s]|_/g, '')

    let noSpace1 = no1.replace(/\s+/g, "")
    let noSpace2 = no2.replace(/\s+/g, "")


    // let split1 = stringa1.trim().split("")
    // let split2 = stringa2.trim().split("")
    // split1.sort()
    // split2.sort()
    // let join1 = split1.join("")
    // let join2 = split2.join("")
    console.log({noSpace1}, {noSpace2})
}
test("ciao sono marco.,!?<>||?^", "ho 22 anni.")