import PocketBase from "pocketbase";

const pb = new PocketBase("https://allforwater.pockethost.io");

let pdfs_tabla_es = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  pdfs_tabla_es = await pb.collection("pdfs_tabla_es").getList(0, 100);
  pdfs_tabla_es = pdfs_tabla_es.items;

  // Añadir una URL completa para cada archivo
  pdfs_tabla_es = pdfs_tabla_es.map((item) => ({
    ...item,
    pdfUrl: `${pb.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf}`,
  }));
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

export default pdfs_tabla_es;
