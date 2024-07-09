const colorList = [
    "#E4B875",
    "#B0BBBC",
    "#9CCBC9",
    "#C0CB9C",
    "#BBB2CC",
    "#CB9CA3",
    "#F6D7B0",
    "#C5D2D3 ",
    "#A6D6D4 ",
    "#D2D7B5",
    "#CEC9DF",
    "#E2B1B6 ",
    "#F4C4D8 ",
    "#D7E5FF",
    "#E8E8A6 ",
    "#D1E8D1",
];

// Select Random Background Color
const GetRandomColor = () => {
    return colorList[Math.floor(Math.random() * colorList.length)];
};

export default GetRandomColor;
