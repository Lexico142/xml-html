
async function carregaJocs() {
  const missatgeError = document.getElementById("missatge-error");
  
  try {
    const params = new URLSearchParams(window.location.search);
    const idBuscat = params.get("id"); 

    const resposta = await fetch("dades.xml");
    if (!resposta.ok) {
      throw new Error("Error HTTP " + resposta.status);
    }
    const text = await resposta.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");


    const anime = xmlDoc.querySelector(`Anime[id="${idBuscat}"]`);

    if (anime) {

      const titol = anime.querySelector("titol")?.textContent || "";
      const genere = anime.querySelector("genere")?.textContent || "";
      const any = anime.querySelector("any")?.textContent || "";
      const plataforma = anime.querySelector("plataforma")?.textContent || "";
      const valoracio = anime.querySelector("valoracio")?.textContent || "";
      const descripcio = anime.querySelector("descripcio")?.textContent || "";
      
      const estudi = anime.querySelector("estudi")?.textContent || "-";
      const dataEstrena = anime.querySelector("data_estrena")?.textContent || "-";

      document.getElementById("titol-anime").textContent = titol;
      document.getElementById("genere-anime").textContent = genere;
      document.getElementById("any-anime").textContent = any;
      document.getElementById("plataforma-anime").textContent = plataforma;
      document.getElementById("valoracio-anime").textContent = valoracio;
      document.getElementById("descripcio-anime").textContent = descripcio;
      document.getElementById("estudi-anime").textContent = estudi;
      document.getElementById("data-anime").textContent = dataEstrena;

    } 

  } catch (error) {
    console.error(error);
    if(missatgeError) missatgeError.textContent = "Error cargando datos.";
  }
}

carregaJocs();