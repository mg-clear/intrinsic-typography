# Intrinsic Typography Implementation
For redesign, creative leads wanted dev to implement intrinsic typography. This repo is a mockup using html+css+js of a prototype we are using to guide designers on the requirements. To acheive a smooth, curved growth in font sizing between the lowest and highest screen widths, CSS keyframes are used and JS moves the animation as the screen is resized. In this mockup, a small UI in the bottom left shows readouts of the current screen size, the percentage it is between the top and bottom breakpoints, and the resulting font sizes. From design, we need to know:
1. Globally, the top and bottom viewport widths (not necessarily breakpoints) - At what screen sizes do the font sizes become locked? i.e. smallest font size is reached at 375px, and largest font size is reached at 2560px.
2. For each typography style, what are the minimum and maximum font sizes? i.e. h1 should be at minimum 24px and at maximum 84px.

## CSS
In intrinsic-typography.css, the keyframes are setup for each typography style, such that 0% animated is the smallest size and 100% animated in the largest size. Then, each selector affected by the typography is given that animation.

## JS
In intrinsic-typography.js, the resizing function runs on load and window resize. This checks how far between the min-max range the current viewport width is, and progresses the "animation" accordingly.
