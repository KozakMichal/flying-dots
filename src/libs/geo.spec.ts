import "mocha";
import * as chai from "chai";
import { getDistance, getNewPosition } from "./geo";

describe("Testing geo.ts", () => {

    describe("getDistance", () => {

        it(
            "Both coords are same", 
            () => chai.expect(
                getDistance({x: -50, y: 50}, {x: -50, y: 50})
            ).to.be.equal(0)
        );

        it(
            "Get proper result y = 0", 
            () => chai.expect(
                getDistance({x: -10, y: 0}, {x: 10, y: 0})
            ).to.be.equal(20)
        );

        it(
            "Get proper result x = 0", 
            () => chai.expect(
                getDistance({x: 0, y: -10}, {x: 0, y: 10})
            ).to.be.equal(20)
        );
        
        it(
            "Get proper result", 
            () => chai.expect(
                getDistance({x: 100, y: 100}, {x: 10, y: 10})
            ).to.be.equal(Math.sqrt(16200))
        );

    });

    describe("getNewPosition", () => {

        it(
            "Speed equal 0", 
            () => chai.expect(
                getNewPosition(
                    180, 0, {x: -10, y: 10}
                )
            ).to.be.deep.equal({
                x: -10, y: 10
            })
        );

        it(
            "Normal speed", 
            () => chai.expect(
                getNewPosition(
                    0, 100, {x: -10, y: 10}
                )
            ).to.be.deep.equal({
                x: 90, y: 10
            })
        );

    });

});


