var t : number = 1;
enum Color {amarillo, azul, rojo};
var c : Color = Color.azul;
var list : number[] = [1,2,3];
var l2 : Array<number> = [3,4,5];

function prueba(b: string = "prueba de valor de parametro") : void {
  alert("Esto es una prueba" + c + b);
  if (c == Color.rojo) {
    alert("Es rojo");
  }
  b = "hola";
}

enum AlertLevel{
  info,
  warning,
  error
}

function getAlertSubscribers(level : AlertLevel){
  var emails = new Array<string>();
  switch(level){
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

var greet = (name : string) : string =>  {
    if(name){
      return "Hi! " + name;
    }
    else
    {
      return "Hi! my name is " + this.fullname;
    }
};
