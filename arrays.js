function First() {
    /*Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą 
    ir pavardę kaip stringus (Jonas Jonaitis). 
    Atspausdinti trumpesnį stringą*/

    console.log("1st");
    let name = "Javier";
    let surname = "Bardem";

    if (name.length > surname.length) {
        console.log(surname);
    }
    else if (surname.length > name.length) {
        console.log(name);
    }
    else {
        console.log(name + " " + surname);
    }
};

function Second() {
    console.log("---------------");
    console.log("2nd");

    /*Sukurti du kintamuosius. 
    Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
    Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms. 
    (LEONARDO dicaprio)
    */

    let name = "leonardo";
    let surname = "dicaprio";

    console.log(name.toUpperCase() + " " + surname.toLowerCase());
};

function Third() {
    console.log("---------------");
    console.log("3nd");

    /*
    Sukurti du kintamuosius. 
    Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
    Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš 
    pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
    */

    let name = "Javier";
    let surname = "Bardem";
    let mix = name[0] + surname[0];
    console.log(mix);
};

function Fourth() {
    console.log("---------------");
    console.log("4th");

    /*
    Sukurti du kintamuosius. 
    Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
    Sukurti trečią kintamąjį ir jam priskirti stringą, 
    sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
    Jį atspausdinti.
    */

    let name = "Javier";
    let surname = "Bardem";
    let mix = name.substring(name.length - 3) + surname.substring(surname.length - 3);

    console.log(mix);
};

function Fith() {
    console.log("---------------");
    console.log("5th");

    /*
    Sukurti kintamąjį su stringu: “An American in Paris”. 
    Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
    Rezultatą atspausdinti.
    */

    let title = "An American in Paris";
    let replace = title.replace(/[Aa]/g, "*");
    console.log(replace);
};

function Sixth() {
    console.log("---------------");
    console.log("6th");

    /*
    Sukurti kintamąjį su stringu: “An American in Paris”. 
    Jame ištrinti visas balses. 
    Rezultatą atspausdinti. 
    Kodą pakartoti su stringais: “Breakfast at Tiffany's”, 
    “2001: A Space Odyssey” ir “It's a Wonderful Life”.
    */

    /*
    replace(/a/gi, "*");
    g - global (keis visas)
    i - case-insensitive (keis didziasias ir mazasias)
    */

    let title = "An American in Paris";
    let del = title.replace(/[aei]/gi, "");
    console.log(del);

    title = "Breakfast at Tiffany's";
    del = title.replace(/[aeiy]/gi, "");
    console.log(del);

    title = "It's a Wonderful Life";
    del = title.replace(/[aoeiu]/gi, "");
    console.log(del);
};

function Seventh() {
    console.log("---------------");
    console.log("7th");

    /*
    Stringe, kurį generuoja toks kodas: 
    "Star Wars: Episode "+ " ".repeat( Math.ceil(Math.random() * 10))+(Math.ceil (Math.random() * 7)+1) + " - A New Hope" 
    Surasti ir atspausdinti epizodo numerį.
    */

    let string = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope";
    console.log(string);
    let catchEpisode = string.charAt(string.length - 14);
    console.log(catchEpisode);

    //second approach 
    catchEpisode = string[string.length - 14];
    console.log(catchEpisode);
};

function Eighth() {
    console.log("---------------");
    console.log("8th");

    /*
    Suskaičiuoti kiek stringe 
    “Don't Be a Menace to South Central While Drinking Your Juice in the Hood” 
    yra žodžių trumpesnių arba lygių nei 5 raidės. 
    Pakartokite kodą su stringu 
    “Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale”.
    */

    let title = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
    let split = title.split(" ");
    let count = 0;
    console.log(split);

    for (let i = 0; i < split.length; i++) {
        if (split[i].length <= 5) {
            count++;
        }
    }
    console.log(count);

    title = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
    split = title.split(" ");
    count = 0;
    console.log(split);

    for (let i = 0; i < split.length; i++) {
        if (split[i].length <= 5) {
            count++;
        }
    }
    console.log(count);

};

function Ninth() {
    console.log("---------------");
    console.log("9th");

    /*
    Parašyti kodą, kuris generuotų atsitiktinį stringą 
    iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
    */

    let arr = Math.random().toString(36).replace(/[^a-z]+/g, '').substring(0, 5);
    console.log(arr);
};

function Tenth() {
    console.log("---------------");
    console.log("10th");

    /*
    Parašykite kodą, kuris generuotų atsitiktinį stringą 
    su 10 atsitiktine tvarka išdėliotų žodžių, 
    o žodžius generavimui imtų iš 8-me uždavinyje pateiktų dviejų stringų. 
    Žodžiai neturi kartotis. (reikės masyvo)
    */

    let math;
    let element;
    let total = 0;
    let title = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
    let title2 = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
    let title3 = title + " " + title2;
    let titleString = title3.split(" ");
    console.log(titleString);

    for (let i = 0; i < titleString.length; i++) {
        total++;
    }
    console.log("Words in the string: " + total);

    for (let i = 0; i < 10; i++) {
        math = Math.round(Math.random() * total);
        element = titleString[math];
        console.log(element);
        titleString.splice(math, 1);
    }
};

    First();
    Second();
    Third();
    Fourth();
    Fith();
    Sixth();
    Seventh();
    Eighth();
    Ninth();
    Tenth();
