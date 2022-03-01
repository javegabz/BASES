(()=>{
    type Avangers ={
        nick: string;
        ironman: string;
        vision: string;
        capitanAmerica:string;
        activo: boolean;
        poder: number;
    }
    const avangers:Avangers = {
        nick:'Samual jackson',
        ironman:'rober downey jr',
        vision:'paul bettany',
        capitanAmerica:'Crhis Evans',
        activo:true,
        poder:1500
    }

    //const{poder,vision}=avangers;
    //console.log(poder.toFixed(2),vision.toUpperCase());
    const printAvangers = ({ironman, vision, ...resto}avangers:Avangers)=>{
       // console.log(avangers.vision);
       /*console.log(ironman)
       console.log(vision);*/
       console.log(resto);
       //document.write(vision);*/
       //document.write(resto[0]);
    }
    printAvangers(avangers);

    const avangersArr = ['cap america','Ironman', 'hulk'];
    //const ironman = avangersArr[1];

    const [capi,ironman,]:string[]=avangersArr;
    console.log({ironman, capi});

})()