import { add, multiply } from '../src/calc'

describe("Test CALC - add", () => {
  it("should return 15 for add(10,5)", () => {
    expect(add(10,5)).toBe(15)
  })
})

describe("Test CALC - multiply", () => {
  it("should return 20 for add(4,5)", () => {
    expect(multiply(4,5)).toBe(20)
  })
})
