import "mocha";
import * as chai from "chai";
import { getLineByCoords } from "./line";

describe("Get line definition", () => {
    describe("Should not return line definition", () => {
        it(
            "Points are too far on X axis", 
            () => chai.expect(getLineByCoords(
                {x: 0, y: 0}, {x: 100, y: 0}, 50
            )).to.be.undefined
        );
        
        it(
            "Points are too far on Y axis", 
            () => chai.expect(getLineByCoords(
                {x: 0, y: 0}, {x: 0, y: 100}, 50
            )).to.be.undefined
        );

        it(
            "Points are too far on both axis", 
            () => chai.expect(getLineByCoords(
                {x: 0, y: 0}, {x: -500, y: 100}, 50
            )).to.be.undefined
        );

        it(
            "Same coords", 
            () => chai.expect(getLineByCoords(
                {x: 0, y: 0}, {x: 0, y: 0}, 50
            )).to.be.undefined
        );
    });

    describe("Get nearby result", () => {
        const result = getLineByCoords(
            {x: 0, y: 0}, {x: 25, y: 25}, 50
        );
        it(
            "Definition should not be undefined", 
            () => chai.expect(result)
            .to
            .be
            .a("object")
        );

        it(
            "Start should be the same as coordA", 
            () => chai.expect(result)
            .to
            .have
            .property("start")
            .to
            .deep
            .equal({x: 0, y: 0})
        );

        it(
            "End should be the same as coordB", 
            () => chai.expect(result)
            .to
            .have
            .property("end")
            .to
            .deep
            .equal({x: 25, y: 25})
        );
              
        it(
            "Opacity should be between 0 and 1",
            () => chai.expect(result)
            .to
            .have
            .property("opacity")
            .to
            .be
            .above(0)
            .and
            .below(1)
        );
         
    });

});

