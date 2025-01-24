import PocketBase from "pocketbase";

const pb = new PocketBase("https://allforwater.pockethost.io");

let pdfs_carta = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  pdfs_carta = await pb.collection("pdfs_carta").getList(0, 1000);
  pdfs_carta = pdfs_carta.items;

  // Añadir una URL completa para cada archivo
  pdfs_carta = pdfs_carta.map((item) => ({
    ...item,
    pdfUrl: `${pb.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf}`,
  }));
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

export default pdfs_carta;
