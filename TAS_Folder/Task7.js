











const side1 = 60;
const side2 = 60;
const side3 = 60;

if (side1===side2 && side2===side3 && side1===side3)
{
    console.log("This is an Equilateral Triangle")
}
else if (side1===side2 && side2!==side3 && side1!==side3 || side2===side3 && side2!==side1 && side3!==side1 || side1===side3 && side1!==side2 && side3!==side2)
{
    console.log("This is an Iscoceles Triangle ")
}
else 
{
    console.log("This is a Scalene Triangle")

}
   
