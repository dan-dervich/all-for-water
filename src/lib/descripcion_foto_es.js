import PocketBase from "pocketbase";

const pb = new PocketBase("https://allforwater.pockethost.io");

let descripciones_foto_es = [];

try {
  await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

  const records = await pb.collection("descripcion_foto_es").getList(0, 1000);

  descripciones_foto_es = records.items.map((item) => {
    const collectionId = "descripcion_foto_es"; // ID de la colección
    const recordId = item.id; // ID del registro actual
    const firstFilename = item.foto;

    // Construimos la URL manualmente
    const imageUrl = firstFilename
      ? `${pb.baseUrl}/api/files/${collectionId}/${recordId}/${firstFilename}`
      : "/path-to-placeholder-image.png"; // Placeholder en caso de que no haya imagen

    return {
      ...item,
      fotoUrl: imageUrl, // Agregamos la URL de la imagen al objeto item
    };
  });
} catch (error) {
  console.error("Error al autenticarse o al obtener el registro:", error);
}

export { descripciones_foto_es };
