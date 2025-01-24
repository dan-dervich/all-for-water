import PocketBase from "pocketbase";

const pb = new PocketBase("https://allforwater.pockethost.io");

let pdfs_tabla = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  pdfs_tabla = await pb.collection("pdfs_tabla").getList(0, 1000);
  pdfs_tabla = pdfs_tabla.items;

  // Añadir una URL completa para cada archivo
  pdfs_tabla = pdfs_tabla.map((item) => ({
    ...item,
    pdfUrl: `${pb.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf}`,
  }));
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

export default pdfs_tabla;
