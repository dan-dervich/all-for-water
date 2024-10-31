import { desc, img } from "framer-motion/client";

const products = [
  {
    id: 1,
    name: "Housing",
    descripcion: "Housing description",
    img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/HOUSING-768x768-1.jpg",
    items: [
      {
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/08/Housings-2-768x384-1.jpg",
        name: "Choose a Filter Housing you need:",
      },
      {
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/08/brackets-768x768-1.jpg",
        name: "Mounting Brackets and Clips",
      },
      {
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/08/wrenches-768x768-1.jpg",
        name: "Opening Wrench",
      },
    ],
  },
  {
    id: 2,
    name: "Accesories",
    descripcion: "Accesories description 2",
    img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/float.jpg",
    items: [
      {
        name: "Nipple",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/nipple-1-768x768-1.jpg",
        description:
          "FLOAT: Mechanical plastic float valve, ¼” feed tube connection",
      },
      {
        name: "Tube Cutter",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/TUBE-CUTTER-768x768-1.jpg",
        description: "FLOAT-EL: Electric level control valve, plastic",
      },
      {
        name: "Level Control Valve",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/08/Level-Control-Valve.jpg",
        description:
          "Item Part: DRIAN\n* Plastic clamp\n* Includes accessories for installation on pipe\n* ¼” tube connection with compression fitting",
      },
      {
        name: "Drain Clamp",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/drain-clamp-768x768-1.jpg",
        description: "Item SW-LP: Low pressure switch with ¼” quick fitting",
      },
      {
        name: "Pressure Switch for\nBooster Pump",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/pressure-switch-768x768-1.jpg",
        description: "Item SW-HP: High pressure switch with ¼” quick fittings",
      },
      {
        name: "Check Valve",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/check-valve-768x768-1.jpg",
        description:
          "AQF CHK 1814MT: elbow check valve for ⅛” thread connection to ¼” tube quick fitting",
      },
      {
        name: "Solenoid Valve",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/SOLENOID-1-768x768-1.jpg",
        description:
          "AQF CHK 14T: straight tube to tube quick fitting connection for ¼” tube",
      },
      {
        name: "Tank Shut-Off Valve",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/RO-accessories-768x768-1.jpg",
        description:
          "Item Part: SOLENOID\n* Normally closed\n* 24V or 100V\n* ¼” female thread",
      },
      {
        name: "Opening Wrench",
        img: "https://waterpurificationsupplies.com/wp-content/uploads/2021/07/opening-wrench-768x768-1.jpg",
        description:
          "Pressure tank ball valve with quick fitting, available as:",
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
