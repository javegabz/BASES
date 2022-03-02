(()=>{
    class Avenger {
        /*
        private name:string;
        public team:string;
        realname:string;*/
        static avgAge : number =35;
        
        /*
        constructor(name:string, team:string, realname?:string|undefined ){
            this.name=name;
            this.team=team;
            this.realname=realname;
        }*/
        /*otra manera de crear un constructos, queda afuera los staticos, aunque se puede cambiar estos*/
        constructor(
            private name:string,
            private team:string,
            public realname?:string,
        ){

        }
    }

    const antman:Avenger = new Avenger('Antman','capitan america', 'scott lang');
    console.log({antman});
 
})()