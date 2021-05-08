import "babel-polyfill"
import { checkURL } from "../js/urlCheck"

describe("Testing checkURL function", () => {
    test("Checking if function is defined", () => {
        expect(checkURL).toBeDefined()
    })

    test("valid url test", () => {
        expect(checkURL("https://google.com/")).toBeTruthy()
    })

    test("invalid url test", () => {
        expect(checkURL("too lazy to write an invalid url")).toBeFalsy()
    })
})