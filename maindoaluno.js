
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 

recognition.onresult = function(event) {
//Exiba esse evento no console
 console.log(event);

 var content = event.results[0][0].transcript;
//tem nossa saída de voz para texto, portanto, vamos armazená-la dentro de uma variável

//Agora exiba essa variável
    Textbox.innerHTML = content;
    console.log(content);

//Programe 'Se conteúdo for igual a 'tire minha selfie', aconteça a função 'speak'

     if (content=="take selfie")
{
    console.log("take_selfie");
    speak()
}

}

function speak(){
    var synth = window.speechSynthesis;
    //A voz da API irá falar 'Tirando sua selfie em 5 segundos', 
    //Utilize o código 'speak_data' para isso
    speak_data = "Tirando sua selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    //Anexe a variável 'Webcam' na camera
    Webcam.attach(camera);

    
    //Declare a função 'setTimeOut, pois ela define o tempo em que a imagem será tirada e salva
    setTimeOut(function()
    { 
        take_selfie(); 
        //Coloque o nome da função que salva a imagem
        save();
        //Defina em quantos milisegundos a foto será tirada
    }, 5000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    //Defina a largura e altura da camera
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_selfie()
{
    Webcam.snap(function(data_uri) {
        //Utilize o código que altera o HTML, pois você quer ver a imagem na tela
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
