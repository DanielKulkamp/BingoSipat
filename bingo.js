var lista1 = ["romance", "torpedo","educar","chique","industrializados","malef�cios","praticidade","tub�rculos","moagem","cardiovasculares","saciedade","antioxidantes","avalie","publicidade","suplementos"];
var lista2 = ["preven��o","snacks","infus�o","cavala","incapacidades","manuten��o","desencadeia","fisiol�gica","estresse","sono","tabagismo","alcoolismo","capacidade","conv�vio","abdominais"];
var lista3 = ["endorfina","imunol�gico","superprodu��o","horm�nio","dilata��o","estrog�nio","receptores","assunto","osteoporose","filmado","arriscar","juntas","caminham","instinto","supervis�o"];
var lista4 = ["interdependentes","relativa","cultura","bradley","desvio","condutas","cr�ticos","entrosamento","debatidos","jornada","punitivas","incorporadas","alternativamente","aceita��o","M�xico"];
var lista5 = ["greve","caos","caminho","motocicleta","corporativa","ramal","Matutidade","Calculativo","Auditorias","Primordial","faxineiro","gest�o","ferramentas","Espectador","Bras�lia"];

function gerar(){
	var body = "";
	for (var i = 0; i < 75; i++){
		var cartelaBingo = "";
		lista1.sort(function(a, b){return 0.5 - Math.random()}); 	
		lista2.sort(function(a, b){return 0.5 - Math.random()}); 	
		lista3.sort(function(a, b){return 0.5 - Math.random()}); 	
		lista4.sort(function(a, b){return 0.5 - Math.random()}); 	
		lista5.sort(function(a, b){return 0.5 - Math.random()}); 	
		var listaCartela = lista1.slice(0,3).concat(lista2.slice(0,3)).concat(lista3.slice(0,3)).concat(lista4.slice(0,3)).concat(lista5.slice(0,3));
		listaCartela.sort(function(a, b){return 0.5 - Math.random()}); 	
		cartelaBingo = cartelaBingo+"<table border='1'><tr><td colspan=5 class='titulo'>Cartela Bingo SIPAT P-07 2018</td></tr>";
		for(var linha = 0; linha <3; linha++){
			cartelaBingo = cartelaBingo+"<tr>";
			for(var coluna = 0; coluna <5; coluna++){
				cartelaBingo = cartelaBingo+"<td>"+listaCartela[linha*5+coluna]+"</td>"
			}
			cartelaBingo = cartelaBingo + "</tr>";			
		}
		cartelaBingo = cartelaBingo+"</table><br>";
		body = body + cartelaBingo;
	}

	$("body").html(body);

}