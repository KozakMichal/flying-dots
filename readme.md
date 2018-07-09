# Flying dots

*Dots animation on your canvas*

**Usage:**
```javascript
import FlyingDots from "flying-dots";

document.addEventListener("DOMContentLoaded", () => {
    // Options - optional argument - example below contain default values
    const options = {
        numberOfElements: 80,
        color: {
            r: 255, g: 255, b: 255
        },
        maxLineSize: 150,
        radius: {
            min: 2, max: 3
        },
        speed: {
            min: 0.8, max: 2.3
        }
    }
    // Initialize animation
    const flyingDots = new FlyingDots(
        document.querySelector("#animate-flying-dots"), options
    );
    // Run animation
    flyingDots.run();
});
```


