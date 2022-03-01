(()=>{

    const addNumber = (a:number, b:number)=> a+b;
    const greet = (name:string) => `hola ${name}`;
    const saveTheWorld = () =>'El mundo esta salvado!!!';

    let myFunction:Function;
    //si queremos una funcion que retorne cierto tipo de dato
    //let myFunction: ()=>number;
    //myFunction=10;
    //console.log ({myFunction});



    myFunction = addNumber;
    console.log(myFunction(1,2));
    
    myFunction = greet;
    console.log(myFunction('jaimito'));

    myFunction = saveTheWorld;
    console.log(myFunction);
})()