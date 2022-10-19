var data = new Date();
var year = data.getFullYear();
document.getElementById("nascimento").max = year
var anoNascimento;
var sexo;
var sexType;
function checkInformation (){ //pega ano de nascimento informado pelo usuario
    anoNascimento = document.getElementById("nascimento").value
        if ((anoNascimento > year) || (anoNascimento < 1) || (anoNascimento.length == 0) ){ //data de nascimento inválida
            return
        }    
        else { //data de nascimento válida, continua para checar se o sexo foi informado
           sexo = document.getElementsByName("sexo");
           var masculino = sexo[0].checked;
           var feminino = sexo[1].checked;
          
            if ((masculino == 0) && (feminino == 0)){
                return;
            }
            else {
                if (masculino == true){
                    sexType = "masculino"
                }else {
                    sexType = "feminino"
                }
                main();
            }
        }
}

function main () {
    var idade = year - anoNascimento;
    document.getElementById("output").innerHTML = `Indivíduo é do sexo ${sexType} <br> Tem ou irá fazer ${idade} anos`
    if (sexType == "masculino"){
        if (idade == 0){ //recém-nascido menino
            document.getElementById("fotoIndividuo").src = './assets/infantboy.png' 
        }
        if ((idade > 0) && (idade <= 3)) { //bebe menino
            document.getElementById("fotoIndividuo").src = './assets/babyboy.png'
        }
        if ((idade > 3) && (idade <= 12)){  //criança menino
            document.getElementById("fotoIndividuo").src = './assets/crianboy.png'
        }
        if ((idade > 12) && (idade < 18)) { //adolescente menino
            document.getElementById("fotoIndividuo").src = './assets/adoboy.png'
        }
        if ((idade >= 18) && (idade < 65)) { // adulto homem
            document.getElementById("fotoIndividuo").src = './assets/adultman.png'
        }
        if ((idade >= 65) && (idade <= 122)) { //idoso homem
            document.getElementById("fotoIndividuo").src = './assets/idosoman.png'
        }
    }
    
    if (sexType == "feminino"){
        if (idade == 0){ //recém-nascido menina
            document.getElementById("fotoIndividuo").src = './assets/infantgirl.png' 
        }
        if ((idade > 0) && (idade <= 3)) { //bebe menina
            document.getElementById("fotoIndividuo").src = './assets/babygirl.png'
        }
        if ((idade > 3) && (idade <= 12)){  //criança menina
            document.getElementById("fotoIndividuo").src = './assets/criangirl.png'
        }
        if ((idade > 12) && (idade < 18)) { //adolescente menina
            document.getElementById("fotoIndividuo").src = './assets/adogirl.png'
        }
        if ((idade >= 18) && (idade < 65)) { // adulto mulher
            document.getElementById("fotoIndividuo").src = './assets/adultwoman.png'
        }
        if ((idade >= 65) && (idade <= 122)) { //idoso mulher
            document.getElementById("fotoIndividuo").src = './assets/idowoman.png'
        }
    }

    if(idade > 122) { //morreu já, (ou entrou pro world record)
        document.getElementById("output").innerHTML = `Indivíduo é do sexo ${sexType} <br> Teria ${idade} anos`
        document.getElementById("fotoIndividuo").src = './assets/dead.png'
    }

}
