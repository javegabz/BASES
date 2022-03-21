(()=>{
    class Avenger {

        constructor(
            public name:string,
            public realname:string
        ){
            //console.log('constructor avenger llamado');
        }

        protected getFullname():string{
            return `${this.name} ${this.realname}`;
        }
    }

    class Xmen extends Avenger {
        
        constructor(
            name:string,
            fullname:string,
            public isMutant:boolean
            ){
                super(name,fullname);
                
            }

        get setName (){
            return this.name;

        }
        set setName (name:string){
            
            
            if (name.length>3)
            
                this.name=name;
            
            else
                throw new Error ('el nombre debe ser mayor de 3 letras');
        };

        getFullNamedesdeXmen (){
            //console.log(super.getFullname())
        };

    }

    const wolverine = new Xmen ('wolverine','Logan',true);
    
    wolverine.getFullNamedesdeXmen();
    wolverine.setName='JAVOIER';
    //console.log(wolverine.setName);

})()