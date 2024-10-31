import { desc, img } from "framer-motion/client";

const products = [
  {
    id: 1,
    name: "Housing",
    descripcion: "Housing description",
    img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/HOUSING-768x768-1.jpg",
    items: [
      {
        id: 1,
        name: "Housing product 1",
        description: "Descripción del producto 1_1",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/HOUSING-768x768-1.jpg",
      },
      {
        id: 2,
        name: "producto 1_2",
        price: 200,
        descripcion: "Descripción del producto 1_2",
      },
      {
        id: 3,
        name: "producto 1_3",
        price: 300,
        descripcion: "Descripción del producto 1_3",
      },
    ],
  },
  {
    id: 2,
    name: "product 2",
    descripcion: "Descripción del producto 2",
    items: [
      {
        id: 4,
        name: "producto 2_1",
        price: 150,
        descripcion: "Descripción del producto 2_1",
      },
      {
        id: 5,
        name: "producto 2_2",
        price: 250,
        descripcion: "Descripción del producto 2_2",
      },
      {
        id: 6,
        name: "producto 2_3",
        price: 350,
        descripcion: "Descripción del producto 2_3",
      },
    ],
  },
  {
    id: 3,
    name: "product 3",
    descripcion: "Descripción del producto 3",
    items: [
      {
        id: 7,
        name: "producto 3_1",
        price: 120,
        descripcion: "Descripción del producto 3_1",
      },
      {
        id: 8,
        name: "producto 3_2",
        price: 220,
        descripcion: "Descripción del producto 3_2",
      },
      {
        id: 9,
        name: "producto 3_3",
        price: 320,
        descripcion: "Descripción del producto 3_3",
      },
    ],
  },
];

export default products;
