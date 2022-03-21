"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    const printName = (character) => {
        console.log(character.realName);
    };
})();
(() => {
    class Avenger {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realname) {
            this.name = name;
            this.realname = realname;
        }
        getFullname() {
            return `${this.name} ${this.realname}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, fullname, isMutant) {
            super(name, fullname);
            this.isMutant = isMutant;
        }
        get setName() {
            return this.name;
        }
        set setName(name) {
            if (name.length > 3)
                this.name = name;
            else
                throw new Error('el nombre debe ser mayor de 3 letras');
        }
        ;
        getFullNamedesdeXmen() {
        }
        ;
    }
    const wolverine = new Xmen('wolverine', 'Logan', true);
    wolverine.getFullNamedesdeXmen();
    wolverine.setName = 'JAVOIER';
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.intance) {
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }
            return Apocalipsis.intance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map