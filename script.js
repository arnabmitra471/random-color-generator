document.addEventListener("DOMContentLoaded",()=>{
    let boxes = document.querySelectorAll(".box")
    // console.log(boxes)

    boxes.forEach(box=>{
        box.addEventListener("click",function(){
            box.style.backgroundColor = getRandomColor()
        })
    })
})

function getRandomColor(){
    let hex_digits = "0123456789ABCDEF"
    let hex_color = "#"

    for(let i=0;i<6;i++)
    {
        hex_color += hex_digits[Math.floor(Math.random() * 16)]
    }
    return hex_color
}