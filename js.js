// let speech=new SpeechSynthesisUtterance();

// let voices = [];
// let voice_select = document.querySelector("select");

// function populateVoices() {
//     voices = window.speechSynthesis.getVoices();
//     speech.voice = voices[0];
//     voices.forEach((voice, i) => (voice_select.options[i] = new Option(voice.name, i)));
// }


// setTimeout(populateVoices, 1000);



// voice_select.addEventListener('change',function(){
//     speech.voice=voices[voice_select.value];
// })


// document.querySelector('button').addEventListener('click',()=>{
//     speech.text=document.querySelector('textarea').value;
//     window.speechSynthesis.speak(speech);
// })


let speech=new SpeechSynthesisUtterance();

let voices=[];
let list=document.querySelector('select');

function addvoices(){
    voices=window.speechSynthesis.getVoices();
    speech.voice=voices[0];
voices.forEach((voice,i)=>(list.options[i]=new Option(voice.name,i)))
}

setTimeout(addvoices,1000);

list.addEventListener('change',function(){
    speech.voice=voices[list.value];
})

document.querySelector('button').addEventListener('click',function(){
    speech.text=document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})