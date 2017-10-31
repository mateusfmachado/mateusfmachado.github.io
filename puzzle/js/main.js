// funcao de receber elemento pelo id

function el(id){return document.getElementById(id);}

// pegar canvas da tela

var canvas  = el("canvas");
var context = canvas.getContext("2d");

// instanciar pecas

var pecasMaior = undefined;
var pecasMenor = undefined;

// funcao para imprimir

function printCanvas(id){  
    var dataUrl = el(id).toDataURL(); 
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Imprimir</title></head>';
    windowContent += '<body>'
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open();
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
}

// seta tamanho do body de acordo com a imagem
function setBodyHeight(height = 720){
    el("body").setAttribute("style","height:"+(height+60)+"px");
}

//desenhar linhas sobre imagem

function drawLines(_width, _height, pecas1 = 10, pecas2 = 5){

    var width = parseFloat(_width);
    var height = parseFloat(_height);

    var numPecasBase = (width > height) ? pecas1 : pecas2;
    var numPecasAltura = (width > height) ? pecas2 : pecas1;

    var larguraPeca = width / numPecasBase;
    var alturaPeca = height / numPecasAltura;

    context.beginPath();

    context.moveTo(0, 0);
    for(var i = larguraPeca; i < width; i+=larguraPeca){
        console.log(i);
        if(i%2 === 0){
            // PAR - SOBE LINHA
            context.moveTo( i, height);
            context.lineTo( i, 0);
        } else {
            // IMPAR - DESCE LINHA
            context.moveTo(i, 0);
            context.lineTo(i, height);
        }
    }

    context.moveTo(0, 0);
    for(var i = alturaPeca; i < height; i+=alturaPeca){
        console.log(i);
        if(i%2 === 0){
            // PAR - SOBE LINHA
            context.moveTo(width, i);
            context.lineTo(0, i);
        } else {
            // IMPAR - DESCE LINHA
            context.moveTo(0,i);
            context.lineTo(width,i);
        }
    }
    
    context.strokeStyle="white";
    context.lineWidth = 3;
    context.stroke();

}

function resizeCanvas(width, height){
    console.log(width, height)
    canvas.style.width = width+'px';
    canvas.style.height = height+'px';
}

// funcoes para alteracao de campos

function readImage() {
    if ( this.files && this.files[0] ) {
        var FR = new FileReader();
        FR.onload = function(e) {
            var img = new Image();
            img.addEventListener("load", function() {
                context.clearRect(0, 0, canvas.width, canvas.height);
            });
            img.src = e.target.result;  
            img.onload = function () {
                
                // resizeCanvas(this.width, this.height);
                context.drawImage(img, 0, 0, this.width, this.height);

                setBodyHeight(this.height);

                drawLines(this.width, this.height, pecasMaior || 10, pecasMenor || 5);

            };         
        };       
        FR.readAsDataURL( this.files[0] );
    }
}

// atualiza numero de pecas

function updatePecaMaior (ev){
    pecasMaior = parseFloat(ev.target.value);
}

function updatePecaMenor (ev){
    pecasMenor = parseFloat(ev.target.value);
}

// eventos de receber alteracoes

el("fileUpload").addEventListener("change", readImage, false);
el("pecasMaior").addEventListener("change", updatePecaMaior, false);
el("pecasMenor").addEventListener("change", updatePecaMenor, false);