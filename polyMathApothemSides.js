    //for regular polygons
    //to find apothem we require side lenght and the total # of sides of the polygon
    function polyApo (sideLenght, polySides){
        let thetaAngle = 360/(2*polySides);
        apothem = sideLenght/(2 *(Math.tan(thetaAngle*Math.PI/180)));
        return apothem;
    }
    //Now only having the apothem and the #of sides of the polygon
    function polygonExternalSideLenght(apothem, pSides){
        let thetaAngle = 360/(2*pSides); //finds the inner angle of the triangle to calculate the external side;
        let tanofAngle = Math.tan(thetaAngle*Math.PI/180);
        let halfsideLenght = tanofAngle * apothem;
        return (halfsideLenght*2);
    }
    function polygonPerimeter(apothem, pSides){
        let thetaAngle = 360/(2*pSides); //finds the inner angle of the triangle to calculate the side
        let tanofAngle = Math.tan(thetaAngle*Math.PI/180);
        //Math.tan uses radians so above we convert the degrees to radians and we return the tan of the angle
        let halfsideLenght = tanofAngle * apothem;
        return (halfsideLenght*2) * pSides;
    }
    function polygonArea(apothem, pSides){
        let thetaAngle = 360/(2*pSides); 
        let tanofAngle = Math.tan(thetaAngle*Math.PI/180);
        let halfsideLenght = tanofAngle * apothem;
        let polyPerimeter = halfsideLenght*2 * pSides;
        let polyArea = (polyPerimeter * apothem/2);
        return polyArea;
    }


