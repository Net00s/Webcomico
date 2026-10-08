addEventListener("DOMContentLoaded", function(){
    const page = document.getElementById("pageSelect")
    page.addEventListener('change', createPanels)
    createPanels()

    

  
})

function updateNumberPlus(){
    let savedNumber = document.getElementById('pageSelect').value
    document.getElementById('pageSelect').value = Number(document.getElementById('pageSelect').value) + 1;
    if (document.getElementById('pageSelect').value == ""){
        document.getElementById('pageSelect').value = savedNumber
    }
}

function updateNumberMinus(){
    document.getElementById('pageSelect').value = Number(document.getElementById('pageSelect').value) - 1;
    if (document.getElementById('pageSelect').value == ""){
        document.getElementById('pageSelect').value = 1
    }
}


function zoom(image){
    console.log(image)

    const zoomed = document.getElementById("ZoomedImage")
    const zoomedContainer = document.getElementById("zoomin")
    zoomed.src = image
    zoomedContainer.style.visibility = "visible"
}



function createPanels(){
    const page = document.getElementById("pageSelect")
    var pageNumber = page.value
    console.log(pageNumber)
    const panelOrder =
    {
        1: 3,
        2: 1,
        3: 0
    }
    
    document.querySelectorAll(".Panel").forEach(panel => panel.remove())

    const panelImage = document.createElement("img")
    for (let i = panelOrder[pageNumber];i>0;i--){
        console.log(panelOrder[pageNumber] - i)
        const panelImage = document.createElement("img")
        panelImage.src = `images/${pageNumber}/${panelOrder[pageNumber] - i}.png`
        panelImage.className = "Panel"
        document.getElementById("container").appendChild(panelImage)

    }

    const panels = document.getElementsByClassName("Panel")
    for (const panel of panels){
        panel.onclick = () => zoom(panel.src)
    }


    
}


