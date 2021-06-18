import Count from "../count.js";
import fc from "fast-check";

const arbitrary_input = fc.constant<T>(value(1));

describe("Add one to number", function () {

    property(
        "add one to the input",
        [arbitrary_input],
        function (input1) {
            const result = Count.number(input1);
            return (
                result = arbitrary_input + 1
            );

        }
    );
});

export default Object.freeze(property);