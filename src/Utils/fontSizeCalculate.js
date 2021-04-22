const percentageCalculation = (max, val) => max * (val / 100);
const revertFontCalculation = (height, width, val) => {
    const widthDimension = height > width ? width : height;
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    const max = Math.sqrt(
        Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    );
    return (val / max) * 100;
};
const fontCalculation = (height, width, val) => {
    const widthDimension = height > width ? width : height;
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    return percentageCalculation(
        Math.sqrt(
            Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
        ),
        val
    );
};
console.log(fontCalculation(812, 375, 2.1));
console.log(revertFontCalculation(812, 375, 14));