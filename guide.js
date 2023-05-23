document.addEventListener("DOMContentLoaded", () => //tjekker inden om DOM er loaded
	{

		const url = "https://plante-2af1.restdb.io/rest/planter";
		const imgURL = "https://plante-2af1.restdb.io/media/";

		const options = {
			headers: {
				'x-apikey': "602e76225ad3610fb5bb6339"
			}
		}


		async function hentData() {
			console.log("data");

			const respons = await fetch(url, options);
			plante = await respons.json();

			console.log("Plante", plante);
			visBilleder(plante);
		}

		hentData();


		function visBilleder() {
			console.log("visBilleder");
			//Trækker det udvalgte billede ud fra en url.
			document.querySelector(".ikon img").src = src = "https://plante-2af1.restdb.io/media/60362dd56afd463c000093c8";
			document.querySelector(".ikon:nth-of-type(2n) img").src = "https://plante-2af1.restdb.io/media/60362dd76afd463c000093c9";
			document.querySelector(".ikon:nth-of-type(3n) img").src = "https://plante-2af1.restdb.io/media/60362dd76afd463c000093ca";

			document.querySelector(".vand_guide img").src = "https://plante-2af1.restdb.io/media/60362ec76afd463c000093ee";
			document.querySelector(".vand_guide .ikon:nth-of-type(2n) img").src = "https://plante-2af1.restdb.io/media/60362dd96afd463c000093ce";
			document.querySelector(".vand_guide .ikon:nth-of-type(3n) img").src = "https://plante-2af1.restdb.io/media/60362dd96afd463c000093cf";
		}
	})
