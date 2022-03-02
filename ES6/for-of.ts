(()=>{

    type avenger = {
        nombre:string,
        weapon:string;
    }

    const ironman:avenger = {
        nombre:"Tony Stark",
        weapon:'armor suit'
    }

    const capitanAmerica:avenger = {
        nombre:"Steve Rogers",
        weapon:'Escudo'
    }

    const thor:avenger = {
        nombre:"thor Odinson",
        weapon:'Mjnhir'
    }

    const avengers:avenger[] = [ironman,capitanAmerica,thor];

    for (const avenger of avengers) {
        console.log({avenger});
        //console.log(avenger.weapon);
        
    }

})()