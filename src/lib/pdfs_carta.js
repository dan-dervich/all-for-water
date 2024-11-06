import PocketBase from "pocketbase";

const pb = new PocketBase('https://allforwater.pockethost.io');

let pdfs_carta = [];

try {
    await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

    pdfs_carta = await pb.collection('pdfs_carta').getList();
} catch (error) {
    console.error("Error al autenticarse o al obtener el registro:", error);
}

export { pdfs_carta };
