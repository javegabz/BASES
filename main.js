"use strict";
(() => {
    class Avenger {
        constructor(name, team, realname) {
            this.name = name;
            this.team = team;
            this.realname = realname;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'capitan america', 'scott lang');
    console.log({ antman });
})();
//# sourceMappingURL=main.js.map