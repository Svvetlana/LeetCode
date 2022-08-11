/* An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.*/

var floodFill = function (image, sr, sc, color) {
    const fill = (i, j, val) => {
        image[i][j] = color;
        if (i > 0 && val == image[i - 1][j]) fill(i - 1, j, val);
        if (j > 0 && val == image[i][j - 1]) fill(i, j - 1, val);
        if (i < image.length - 1 && val == image[i + 1][j]) fill(i + 1, j, val);
        if (j < image[0].length - 1 && val == image[i][j + 1]) fill(i, j + 1, val);
    }
    if (image[sr][sc] == color) return image;
    fill(sr, sc, image[sr][sc]);
    return image;
};