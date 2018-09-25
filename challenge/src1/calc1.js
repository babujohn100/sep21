


describe("Extra calculator functions", function() {
    
    describe("Area function", function() {
        it("should return 314.16 for a circle with radius 10", function() {
            expect(areaOfCircle(10)).toBe(314.16);
        });
        it("should return 78.54 for a circle with radius 5", function() {
            expect(areaOfCircle(5)).toBe(78.54);
        });
        it ("should return error when we enter a string", function(){
            expect(areaOfCircle("free")).toBe("error");
        })
    });
    
    describe("Square Root function", function() {
        it("should return 3 for square root of 9", function() {
            expect(squareRoot(9)).toBe(3);
        });
    });
    
    describe("Square function", function() {
        it("should return 9 as the square of 3", function() {
            expect(squareMe(3)).toBe(9);
        });
    });
    
    describe("areaOfTriangle", function() {
        it("should return 3 as the area of a triangle", function() {
            expect(areaOfTriangle(3, 2)).toBe(3);
        });
    });
    
    
    describe("yearsLeft", function() {
        it("should show number of years", function() {
            expect(yearsLeft(2072)).toBe(1);
        });
    });
    

});