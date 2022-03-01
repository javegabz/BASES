"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avangers = {
        nick: 'Samual jackson',
        ironman: 'rober downey jr',
        vision: 'paul bettany',
        capitanAmerica: 'Crhis Evans',
        activo: true,
        poder: 1500
    };
    const printAvangers = (_a, avangers) => {
        var { ironman, vision } = _a, resto = __rest(_a, ["ironman", "vision"]);
        console.log(resto);
    };
    printAvangers(avangers);
    const avangersArr = ['cap america', 'Ironman', 'hulk'];
    const [capi, ironman,] = avangersArr;
    console.log({ ironman, capi });
})();
(() => {
})();
(() => {
    console.log('let');
    console.log('another message');
})();
//# sourceMappingURL=main.js.map