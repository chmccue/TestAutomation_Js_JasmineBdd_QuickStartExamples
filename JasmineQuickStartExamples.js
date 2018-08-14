/*
JASMINE BDD QUICK START AND HELPFUL HINTS.
	This file contains useful functions in Jasmine and common test structure templates that can be used to get started writing tests quickly.
	To run this file in Windows, install node.js, set environment variable for node, install jasmine using the node command line, then in a 
	command line window, run:  jasmine JasmineStarterTemplate.js

	
	
Useful functions:
	toBe:                 expect(actualValue).toBe(expectedValue)
	toContain:            expect(actualValue).toContain(expectedValue)
	toBeLessThan:         expect(actualValue).toBeLessThan(expectedValue)
	toBeGreaterThan:      expect(actualValue).toBeGreaterThan(expectedValue)
	toEqual:              expect(actualValue).toEqual(expectedValue)
	toBeNull:             expect(actualValue).toBeNull(expectedValue)

	Important difference between "toBe" and "toEqual": toBe can only compare 
	data, while toEqual can compare both data and objects. For example, 
	toEqual can compare dictionaries and make sure they are equally matching.

Additionally for all the above functions, you can use ".not" to assert 
the opposite.
	not.toBe: 			  expect(actualValue).not.toBe(expectedValue)
	not.toContain:        expect(actualValue).not.toContain(expectedValue)
	not.toBeLessThan:     expect(actualValue).not.toBeLessThan(expectedValue)
	not.toBeGreaterThan:  expect(actualValue).not.toBeGreaterThan(expectedValue)
	not.toEqual:          expect(actualValue).not.toEqual(expectedValue)
	not.toBeNull:         expect(actualValue).not.toBeNull(expectedValue)

*/


// Test structures and examples below.


// Most basic structure, comprised of only a describe and it function.
describe("test suite 1", function() {
	
	it("test case 1", function() {
		console.log("test suite 1: test case 1\n")
	});
	
		
});

// Below demonstrates how to declare global variables (outside of spec functions at describe level, or using "this." in spec level), along with test setup and teardown using beforeEach and afterEach.
describe("test suite 2", function() {
	
	var globalVar = "This is a global var for test suite 2, because it is defined at the test suite level (inside the describe function), but outside any spec functions."
	
	beforeEach(function() {
		this.globalThisVar = "This is also a global var for test suite 2, because it is defined using keyword this, which makes it usable across the test suite."
		console.log("test suite 1: This is a test setup function that runs before every test case.\n")
	});
	
	afterEach(function() {
		console.log("test suite 2: This is a test teardown function that will run after every test case.\n")
	});
	
	it("test case 1", function() {
		console.log("test suite 2: test case 1\n")
		console.log(this.globalThisVar)
	});
	
	it("test case 2", function() {
		console.log("test suite 2: test case 2\n")
	});
	
	
});




// Below demonstrates how to nest test suites (describe) and how to disable a test suite that will be skipped during test execution (using "x" before describe, as such: xdescribe).
describe("test suite 3", function() {
	
		
	beforeEach(function() {
			console.log("test suite 3: test setup function.\n")
	});
	
	afterEach(function() {
		console.log("test suite 3: test teardown function.\n")
	});
	
	it("test case 1", function() {
		console.log("test suite 3: test case 1\n")
	});
	
	it("test case 2", function() {
		console.log("test suite 3: test case 2\n")
	});
	
	describe("sub-test suite 3-A", function() {
		it("test case 1", function() {
			console.log("sub-test suite 3-A: test case 1\n")
		});
		
		it("test case 2", function() {
			console.log("sub-test suite 3-A: test case 2\n")
		});
	});
	
	// Below test suite will not run because it has "x" before describe: xdescribe. This disables a test suite from running.
	xdescribe("sub-test suite 3-B", function() {
		it("test case 1", function() {
			console.log("test suite 3-B: test case 1\n")
		});
	
	}); 
});



// Below suite declares 2 global variables (4 and 2) in the test setup function, performs a mathematical function in each test case, compares them to expected result, 
// and then prints the answer in the test teardown function.
describe("test suite 4", function() {
			
	beforeEach(function() {
		this.number1 = 4
		this.number2 = 2
	});
	
	afterEach(function() {
		console.log(this.title)
		console.log("answer: " + this.answer)
	});
	
	it("test case 1: Add", function() {
		this.title = "addition"
		this.answer = this.number1 + this.number2
		expect(this.answer).toBe(6)
	});

	it("test case 2: Subtract", function() {
		this.title = "subtract"
		this.answer = this.number1 - this.number2
		expect(this.answer).toEqual(2)
	});

	it("test case 3: Multiply", function() {
		this.title = "multiply"
		this.answer = this.number1 * this.number2
		expect(this.answer).toBe(8)
	});

	it("test case 4: Division", function() {
		this.title = "Division"
		this.answer = this.number1 / this.number2
		expect(this.answer).toEqual(2)
	});	
	 
});


// Below defines 2 different objects in the test setup, and compares them using "toEqual" in the test case.
describe("test suite 5", function() {
			
	beforeEach(function() {
		this.object1 = {
			key1:1,
			key2:2
		}
		this.object2 = {
			key1:1,
			key2:2
		}
	});
	
	it("test case 1", function() {
		console.log("test suite 5, test case 1")
		expect(this.object1).toEqual(this.object2)

	});
	
	 
});





