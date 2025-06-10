import PocketBase from "pocketbase";

const pb = new PocketBase("https://allforwater.pockethost.io");

let items = [];

try {
    await pb.admins.authWithPassword("pedro@gmail.com", "Pedro12345");

    const records = await pb.collection("main_categories").getList(0, 1000, {
        expand: "categories",
        sort: "+categories.orden"
    });
    items = records.items
} catch (error) {
    console.error("Error al autenticarse o al obtener el registro:", error);
}

export { items };
