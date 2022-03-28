//please notice: the order of the parameters provided to the function matters to match the correct propiety
// if there is an unknown propiety of the polygon enter it as 1 and then run the method to find it-
// each function will replace the missing value entered as 1 for the correct one
class rPolygon {
    constructor (pSides, apothem, sideLenght){
        this.pSides = Number(pSides);
        this.apothem = Number(apothem);
        this.sideLenght = Number(sideLenght);
    }
    //for regular polygons
    //pSides = number of sides of the polygon
    //to find apothem we require side lenght and the total # of sides of the polygon
    polyFindApothem(){
        var pSides = this.pSides;
        var sideLenght = this.sideLenght;
        let thetaAngle = 360/(2*pSides);
        let foundApothem = sideLenght/(2 *(Math.tan(thetaAngle*Math.PI/180)));
        return (this.apothem = Math.round(foundApothem));
    }
    //Now only having the apothem and the #of sides of the polygon
    polyFindSideLenght(){
        var pSides = this.pSides;
        var apothem = this.apothem;
        let thetaAngle = 360/(2*pSides); //finds the inner angle of the triangle to calculate the external side;
        let tanofAngle = Math.tan(thetaAngle*Math.PI/180);
        let halfsideLenght = tanofAngle * apothem;
        return (this.sideLenght = Math.round((halfsideLenght *2))); //this mettod will add the sideLenght to the object propieties.
    }
    polyPerimeter(){
        var pSides = this.pSides;
        var apothem = this.apothem;
        let thetaAngle = 360/(2*pSides); //finds the inner angle of the triangle to calculate the side
        let tanofAngle = Math.tan(thetaAngle*Math.PI/180);
        //Math.tan uses radians so above we convert the degrees to radians and we return the tan of the angle
        let halfsideLenght = tanofAngle * apothem;
        return (halfsideLenght*2) * pSides;
    }
    polyArea(){
        var pSides = this.pSides;
        var apothem = this.apothem;
        let thetaAngle = 360/(2*pSides); 
        let tanofAngle = Math.tan(thetaAngle*Math.PI/180);
        let halfsideLenght = tanofAngle * apothem;
        let polyPerimeter = halfsideLenght*2 * pSides;
        let polyArea = (polyPerimeter * apothem/2);
        return polyArea;
    }
}

// if this hexagon have 6 sides will have an apo of 13 and a side lenght of 15
hexagon = new rPolygon (6, 1, 15);
hexagon.polyFindApothem(); //this will change the 1 for 13
console.log(hexagon.apothem);
console.log(hexagon.polyArea());
console.log(hexagon.polyPerimeter());

