(()=>{
    const hero:string ='Flash';

    function returnName():string{
        return hero;
    }

    const activateBatiSeñal= ():string => {

        return 'batiseñal activada!';

    }
    console.log("tipo de: " , typeof activateBatiSeñal);
    const heroName = returnName();
})()