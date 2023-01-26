console.log("welcome to spotify");
let index=0;


let audioElement= new Audio('The.mp3');
let masterPlay=document.getElementById('masterPlay');
let gif=document.getElementById('gif');
let myProgressBar=document.getElementById('myProgressBar');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName: "Baller",filePath:"songs/Baller.mp3",coverPath:"sb.jpg"},
    {songName: "WE ROLLIN",filePath:"songs/WE Rollin.mp3",coverPath:"photos/wr.jpg"},
    {songName: "295",filePath:"songs/295.mp3",coverPath:"photos/cover3.jpg"},
    {songName: "Bhagwa",filePath:"songs/Bhagwa.mp3",coverPath:"photos/cover4.jpg"},
    
    {songName: "The Last Ride",filePath:"songs/The.mp3",coverPath:"photos/cover55.jpg"},
    {songName: "Levels",filePath:"songs/levels.mp3",coverPath:"photos/cover56.jpg"},
    {songName: "Elevated",filePath:"songs/ELEVATED.mp3",coverPath:"photos/se.jpg"},
    {songName: "JHOOME JO PATTHAN",filePath:"songs/jjp.mp3",coverPath:"photos/jjp.jpg"},
  ]
  songItem.forEach( (element,i) =>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

  });
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play(); 
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity=1;
    }
    else
    {
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
      }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
// update seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log('progress');
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
 audioElement.currentTime=myProgressBar.value *audioElement.duration/100;
})
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

})
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
console.log(e.target);
makeAllPlays();
index=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src=songs[index].filePath;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
 masterPlay.classList.add('fa-pause-circle');
})
})
document.getElementById('next').addEventListener('click',()=>{
  if(index>=9){
    index=0;
  }
  else{
    index +=1
  }
  audioElement.src=songs[index].filePath;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
 masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('back').addEventListener('click',()=>{
  if(index<=0){
    index=0;
  }
  else{
    index -=1
  }
  audioElement.src=songs[index].filePath;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
 masterPlay.classList.add('fa-pause-circle');
})


