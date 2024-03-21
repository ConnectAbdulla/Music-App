
var arr = [
    { songName: "Arjan Vailly", url: "./songs/Arjan Vailly Ne.mp3", image: "./images/animal.jpg" },
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", image: "./images/jale.jpg" },
    { songName: "Humasafar", url: "./songs/Humsafar.mp3", image: "https://i.ytimg.com/vi/mx4QxSgzMOY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjzf6wTzcN3r6oVsefy7C4SMn1qQ.jpg" }

]
var allSongs = document.getElementById("all-songs")
var poster = document.getElementById("left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")
// console.log(arr)
var audio = new Audio()
var selectedSong = 0
function mainFunction() {
    var clutter = "";
    arr.forEach(function (elem, index) {
        //  console.log(elem.songName)
        clutter += `<div class="song-card" id="${index}">
                       <div class="part1">
                         <img src="${elem.image}">
                         <h2>${elem.songName}</h2> 
                       </div>
                    </div>`

    });
    allSongs.innerHTML = clutter
    audio.src = arr[selectedSong].url
    poster.style.backgroundImage = `url(${arr[selectedSong].image})`
    
}
mainFunction();
// console.log(clutter)
allSongs.addEventListener("click", function (dets) {
    // console.log(arr[dets.target.id].songName) 
    selectedSong = dets.target.id
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-line"></i>`
     flag = 1
    audio.play()
   
    
})
var flag = 0
play.addEventListener("click", function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-line"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }
    else{
        
        play.innerHTML = `<i class="ri-play-mini-line"></i>`
        mainFunction()
        audio.pause()
        flag = 0
    }
})

forward.addEventListener("click", function(){
    if(selectedSong < arr.length - 1){
        selectedSong++
        mainFunction()
        audio.play()
        
    }
    
   
     
})

backward.addEventListener("click", function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction()
       
    }
   
    
})