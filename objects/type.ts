(()=>{
    type Hero = {
        name:string;
        age ?: number;
        powers:string[];
        getName ?: ()=>string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo'],
        getName(){
            return this.name;
        }
    }
    
    let superman:Hero = {
        name: 'clark kent',
        age: 60,
        powers: ['volar', 'rayos laser'],
        getName() {
            return this.name;
        }
    }
    
    console.log({flash});
    console.log({superman});
    console.log(flash.getName());

})()