// if else and condition

var area = "triangle";
var PI = 3.142, l=5, b=6, r=3;

if(area == "circle"){
    console.log("the The area of the circle is : " + PI*r**2);
}else if(area == "triangle"){
    console.log("The area of the triangle is : " + (l*b)/2);
}else if(area == "ractangle"){
    console.log("The area of ractangle is : " +(l*b));
}else{
    console.log("Pleas enter the valid data");
}

// switch condition


var area = "circle";
var PI = 3.142, l=5, b=4, r=3;

switch(area){
    case 'circle':
        console.log("the The area of the circle is : " + PI*r**2);
        break;

    case 'triangle':
        console.log("The area of the triangle is : " + (l*b)/2);
        break;

    case 'ractangle':
        console.log("The area of ractangle is : " +(l*b));
        break;
    
    default:
        console.log("Pleas enter the valid data");
}