addEventListener("DOMContentLoaded", function(){
    const panels = document.getElementsByClassName("panel")
    
    for (const panel of panels){
        panel.onclick = () => zoom(panel.src)
    }

})


function zoom(image){
    console.log(image)

    const zoomed = document.getElementById("ZoomedImage")
    const zoomedContainer = document.getElementById("zoomin")
    zoomed.src = image
    zoomedContainer.style.visibility = "visible"
    

}
