import { sum } from "../src/sum"
test("should add two numbers",()=>{
    const results=sum(3,7);
    //Assertion
    expect(results).toBe(10);
})