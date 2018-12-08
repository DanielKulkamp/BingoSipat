var lista1 = ["romance", "torpedo","educar","chique","industrializados","malefícios","praticidade","tubérculos","moagem","cardiovasculares","saciedade","antioxidantes","avalie","publicidade","suplementos"];
var lista2 = ["prevenção","snacks","infusão","cavala","incapacidades","manutenção","desencadeia","fisiológica","estresse","sono","tabagismo","alcoolismo","capacidade","convívio","abdominais"];
var lista3 = ["endorfina","imunológico","superprodução","hormônio","dilatação","estrogênio","receptores","assunto","osteoporose","filmado","arriscar","juntas","caminham","instinto","supervisão"];
var lista4 = ["interdependentes","relativa","cultura","bradley","desvio","condutas","críticos","entrosamento","debatidos","jornada","punitivas","incorporadas","alternativamente","aceitação","México"];
var lista5 = ["greve","caos","caminho","motocicleta","corporativa","ramal","Matutidade","Calculativo","Auditorias","Primordial","faxineiro","gestão","ferramentas","Espectador","Brasília"];

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