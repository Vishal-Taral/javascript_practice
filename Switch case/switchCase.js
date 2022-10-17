let isFanButton = prompt("Enter the button number ");
isFanButton = Number(isFanButton);
console.log(typeof(isFanButton));
switch (isFanButton) {
    case 1:
        console.log("this button is of bulb");
        break;

    case 4:
        console.log("this button is of ");
        break;

    case 10:
        console.log("exactly this button is of fan");
        break;

    default:
        console.log("invalid button");
     


}