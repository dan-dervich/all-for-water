import PocketBase from 'pocketbase';

const pb$1 = new PocketBase("https://allforwater.pockethost.io");

let pdfs_carta = [];

try {
  await pb$1.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  pdfs_carta = await pb$1.collection("pdfs_carta").getList(0, 100);
  pdfs_carta = pdfs_carta.items;

  // Añadir una URL completa para cada archivo
  pdfs_carta = pdfs_carta.map((item) => ({
    ...item,
    pdfUrl: `${pb$1.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf}`,
  }));
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

const pdfs_carta$1 = pdfs_carta;

const pb = new PocketBase("https://allforwater.pockethost.io");

let pdfs_tabla = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  pdfs_tabla = await pb.collection("pdfs_tabla").getList(0, 100);
  pdfs_tabla = pdfs_tabla.items;

  // Añadir una URL completa para cada archivo
  pdfs_tabla = pdfs_tabla.map((item) => ({
    ...item,
    pdfUrl: `${pb.baseUrl}/api/files/${item.collectionId}/${item.id}/${item.pdf}`,
  }));
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

const pdfs_tabla$1 = pdfs_tabla;

export { pdfs_carta$1 as a, pdfs_tabla$1 as p };
