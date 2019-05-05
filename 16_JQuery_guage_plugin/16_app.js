const mydata = [
    {
        value: 300
    },
    {
        value: 100,
        color: '#77dd4f', // stroke color of the segment
        draw: true, // draw the segment on the chart or not
        push: true //push the next segment via offset
    },
    {
        value: 100,
        color: '#dd5723'
    }
]
const myChart = $("#element").jChart({
    data: myData,
    appearance: {
        type: 'donut'
    }
});