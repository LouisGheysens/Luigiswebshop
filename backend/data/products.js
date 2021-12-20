const products = [
    {
        name: "LaserBril",
        imageUrl: "https://images.unsplash.com/photo-1589264811639-3ca3112ba0ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
        description: "Laserbril, de bril die elke computerspecialist wenst gedaan met de pijn aan " +
        "de ogen, met deze lazerbril kunt u optimaal genieten van uren pc plezier",
        price: 120,
        countInStock: 40
    },
    {
        name: "G-bril",
        imageUrl: "https://images.unsplash.com/photo-1546914782-96b636ea44e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Normale herenbril, met deze bril scoort u op elk feestje succes! twijfel niet," +
        " brillen kopen is de actie!, vanaf 20-02-2021 => 1 kopen, 3 gratis!",
        price: 185,
        countInStock: 60
    },
    {
        name: "Zwarte muts",
        imageUrl: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Hou het hoofd heet door deze muts te gebruiken. Laat je niet kennen aan "+
        " het koude weer, de zwarte muts zorgt voor optimale warmte",
        price: 34,
        countInStock: 300
    },
    {
        name: "Hacker mask",
        imageUrl: "https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        description: "Voel je jou al helemaal in de hacker stemming? Met deze Hacker Mask" +
        " zet u elke hacker schaakmat, deze zijn ook verkrijgbaar in een bruin kleur",
        price: 86,
        countInStock: 10
    },
    {
        name: "Leger pet",
        imageUrl: "https://images.unsplash.com/photo-1521015314345-90ea59d5ea85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1240&q=80",
        description: "De legerpet zorgt voor volledige veiligheid, met deze pet kan u zich volledig" +
        " vrij begeven op openbaar gebied, durf jij dit aan?",
        price: 10,
        countInStock: 467
    },
    {
        name: "Zeeman-kousen",
        imageUrl: "https://images.unsplash.com/photo-1608149477473-16d65433637c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        description: "Ben je telkens up to date over de nieuwe mode? Dan is vast de zeeman set kousen" +
        " je niet ontglipt, volledig geel en volledig in de trend",
        price: 5,
        countInStock: 12
    },
    {
        name: "G-kostuum",
        imageUrl: "https://images.unsplash.com/photo-1531907700752-62799b2a3e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Ben jij een persoon die graag het volledig plaatje bezit?" +
        " Dan kan jij dit zeker niet missen, schoenen, kousen, broek, pull, jas en pet in 1!",
        price: 300,
        countInStock: 700
    },
    {
        name: "Hoofdmasker",
        imageUrl: "https://images.unsplash.com/photo-1541337076810-efaab169cb2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "Coronatijden baart ons allen veel zorgen, met dit hoofdmasker bent u volledig" +
        " covid-safe, laat covid jou niet foppen door dit geweldig hoofdmakser",
        price: 3,
        countInStock: 20
    },
    {
        name: "Kampeerstoel",
        imageUrl: "https://images.unsplash.com/photo-1557756731-a94d1274f2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        description: "Ben jij de persoon die alles op orde stelt bij het kamp?" +
        " De persoon die zorgt voor comfort en kamperen? Met deze kampeerstoel maakt u zichzelf" +
        " compleet.",
        price: 28,
        countInStock: 45
    },
    {
        name: "Kousen + schoen set",
        imageUrl: "https://images.unsplash.com/photo-1570459725381-85a2cbfec2a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        description: "Start u graag compleet?" + " Bij ons kan u vanaf stap 1 overgaan naar het "+
        " volledig plaatje",
        price: 90,
        countInStock: 100
    },
];

module.exports = products;