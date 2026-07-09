function getARandomNumber(min,max) {
    return Math.floor(Math.random()*(max-min)+min);
}
const colors = [
  "#4F86F7", "#5DADE2", "#4DD0E1", "#26A69A", "#2ECC71",
  "#66BB6A", "#8BC34A", "#9CCC65", "#F4D03F", "#F5B041",
  "#F39C12", "#FF7F50", "#E74C3C", "#EC7063", "#EC87C0",
  "#D252B9", "#9B59B6", "#6C5CE7", "#A97142", "#78909C"
];
const lightColors = [
  "#AFC8FC", "#AED6F1", "#A9E5EB", "#7DCEC4", "#82E0AA",
  "#A9DFBF", "#C5E1A5", "#D4E6B5", "#F9E79F", "#F8C471",
  "#F8C471", "#FFB899", "#F1948A", "#F5B7B1", "#F5B7D8",
  "#E8A2D8", "#C39BD3", "#B2A4F5", "#CFA37A", "#B0BEC5"
];
const grid = document.querySelector("div");
const btn = document.querySelector("button");

function fillgrid(n) {

    for(let i=0;i<n;i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        for(let j=0;j<n;j++) {
            const col = document.createElement("div");
            col.style.border="1px solid black";
            row.appendChild(col);
            col.style.flex="1";

            let color_idx;
            col.addEventListener("mouseenter",()=>{
                if(col.style.backgroundColor!=="") return;
                color_idx=getARandomNumber(0,20);
                col.style.backgroundColor=colors[color_idx];
            })
            let cnt=1;
            col.addEventListener("mouseleave",()=>{
                col.style.backgroundColor=lightColors[color_idx];
                col.style.opacity=(cnt*10)/100;
                if(cnt==10) return;
                cnt++;
            })
        }
        row.style.flex="1";
        grid.appendChild(row);
    }
}
fillgrid(16);

btn.addEventListener("click",()=>{
    let input = prompt("Enter the number of squares per side : ");
    if(input!==null && input!=="") {
        let side = Number(input);
        while(Number.isNaN(side)) {
            input = prompt("Please enter a valid : ");
            side= Number(input);
        }
        while(side>100) {
            input =prompt("Number of squares must be within 100");
            side = Number(input);
        }
        grid.replaceChildren();
        fillgrid(side);
    }
})
