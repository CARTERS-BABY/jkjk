var x = 0
var y = 0
var desenharmaça = false 
var larguratela = 0 
var alturatela = 0 
 var maça = ''
var numero = 0 
var api = window.webkitSpeechRecognition
var reconhecimento = new api()
function setup (){

larguratela = window.innerWidth
alturatela = window.innerHeight
canvas = createCanvas (larguratela , alturatela - 150 )
canvas.position(0,150)
}
function start (){
    document.getElementById('status').innerHTML = 'estamos te ouvindo '
    reconhecimento.start()
}
reconhecimento.onresult = function(evento){
     var conteudo = evento.results[0][0].transcript
   numero = Number(conteudo)
   if (Number.isInteger(numero) ){
    desenharmaça = true
   }
     else{
        document.getElementById('status').innerHTML = 'numero nao encontrado '
     }
}
function draw(){
    for(i = 0 ;  i <=numero; i++ ){
     
if(desenharmaça){
x = Math.floor(Math.random() * larguratela)
y = Math.floor(Math.random() * (alturatela - 150) )
image(maça , x , y , 50 ,  50 )
}
    }
    document.getElementById('status').innerHTML = 'as maças for desenhadas '
    desenharmaça = false
}
function preload(){
maça = loadImage('https://th.bing.com/th/id/OIP.XLQ2UsZq66lrOPpPX2Yz2wHaHa?pid=ImgDet&rs=1')
}