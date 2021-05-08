import 'babel-polyfill'
import { handleSubmit } from "../js/formHandler"

describe("Testing handleSubmit function", () => {
    test("Making sure function is defined", () => {
        expect(handleSubmit).toBeDefined()
    })
})