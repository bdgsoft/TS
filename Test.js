var _this = this;
var t = 1;
var Color;
(function (Color) {
    Color[Color["amarillo"] = 0] = "amarillo";
    Color[Color["azul"] = 1] = "azul";
    Color[Color["rojo"] = 2] = "rojo";
})(Color || (Color = {}));
;
var c = Color.azul;
var list = [1, 2, 3];
var l2 = [3, 4, 5];
function prueba(b) {
    if (b === void 0) { b = "prueba de valor de parametro"; }
    alert("Esto es una prueba" + c + b);
    if (c == Color.rojo) {
        alert("Es rojo");
    }
    b = "hola";
}
var AlertLevel;
(function (AlertLevel) {
    AlertLevel[AlertLevel["info"] = 0] = "info";
    AlertLevel[AlertLevel["warning"] = 1] = "warning";
    AlertLevel[AlertLevel["error"] = 2] = "error";
})(AlertLevel || (AlertLevel = {}));
function getAlertSubscribers(level) {
    var emails = new Array();
    switch (level) {
        case AlertLevel.info:
            emails.push("cst@domain.com");
            break;
        case AlertLevel.warning:
            emails.push("development@domain.com");
            emails.push("sysadmin@domain.com");
            break;
        case AlertLevel.error:
            emails.push("development@domain.com");
            emails.push("sysadmin@domain.com");
            emails.push("management@domain.com");
            break;
        default:
            throw new Error("Invalid argument!");
    }
    return emails;
}
var greet = function (name) {
    if (name) {
        return "Hi! " + name;
    }
    else {
        return "Hi! my name is " + _this.fullname;
    }
};
