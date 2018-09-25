
// here we are writing the functions


describe("Calculator", function() {
    describe("Addition tests", function() {
        it("should return 42", function() {
            expect(add(20, 22)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(add(5,5)).toBe(10);
        });
        it("should return an Error if both arguments are not numbers", function() {
            expect(add("Fish", 5)).toBe("Error!");
        });
        it("should return an Error if one argument is null", function() {
            expect(add(42, null)).toBe("Error!");
        });
    });
    describe("Subtraction test", function() {
        it("should return 42", function() {
            expect(sub(84,42)).toBe(42);
        });
        it("should not return 42 for different numbers", function() {
            expect(sub(22,20)).toBe(2);
        });
        it("should show an alert on error", function() {
            spyOn(window, "alert");
            sub("Fish", 42);
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
    
    
  
    
    describe("multiplication tests", function() {
        it("should return 42", function() {
            expect(multiplication(20, 22)).toBe(440);
        });
        it("should not return 42 for different numbers", function() {
            expect(multiplication(5,5)).toBe(25);
        });
        it("should return an Error if both arguments are not numbers", function() {
            expect(multiplication("Fish", 5)).toBe("Error!");
        });
        it("should return an Error if one argument is null", function() {
            expect(multiplication(42, null)).toBe("Error!");
        });
    });

    describe("division tests", function() {
        it("should return 42", function() {
            expect(division(10, 2)).toBe(5);
        });
        it("should not return 42 for different numbers", function() {
            expect(division(5,5)).toBe(1);
        });
        it("should return an Error if both arguments are not numbers", function() {
            expect(division("5", 5)).toBe("Error!");
        });
        it("should return an Error if one argument is null", function() {
            expect(division(42, null)).toBe("Error!");
        });
    });
});





