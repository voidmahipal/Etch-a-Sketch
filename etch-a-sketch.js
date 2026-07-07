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
        }
        row.style.flex="1";
        grid.appendChild(row);
    }
}
fillgrid(10);

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
        fillgrid(input);
    }
})
