(()=>{
    class Avenger {
        name;
        power;
        constructor(name='sin inicializar', power=0){
            this.name=name;
            this.power=power;

        }
    }

    class FlyingAvenger  extends Avenger {
        flying;
        constructor(name,power){
            super(name,power);
            this.flying=true;
        }
    }
  
    const hulk = new Avenger('javier',89);
    const falcon =new FlyingAvenger ('narton2',50);
    console.log(hulk);
    console.log(falcon);

})()