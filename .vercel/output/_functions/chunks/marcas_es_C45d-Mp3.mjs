import PocketBase from 'pocketbase';

const pb = new PocketBase("https://allforwater.pockethost.io");

let marcas_es = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  const records_es = await pb.collection("segmentos_es").getList(0, 50);
  marcas_es = records_es.items
    .filter((item) => item.marca === true) // Filtrar solo los segmentos con .marca en true
    .map((item) => {
      const collectionId = "segmentos_es"; // ID de la colección
      const recordId = item.id; // ID del registro actual
      const firstFilename = item.foto;

      // Construimos la URL manualmente
      const imageUrl = firstFilename
        ? `${pb.baseUrl}/api/files/${collectionId}/${recordId}/${firstFilename}`
        : "/path-to-placeholder-image.png"; // Placeholder en caso de que no haya imagen

      return {
        ...item,
        fotoUrl: imageUrl, // Agregamos la URL de la imagen al objeto item
        nombre: item.nombre.toUpperCase(), // Convertir el nombre a mayúsculas
      };
    });
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

export { marcas_es as m };
