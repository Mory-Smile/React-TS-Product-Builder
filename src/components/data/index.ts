import { v4 as uuid } from "uuid";
import { IFormInput, IProduct, ICategoty } from "../interfaces/index";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Gemesis GV70: Nomime",
    description:
      "The 2022 Genesis seems determined to just keep raising the bar on what a car can be. With its abundance of smart features and equally impressive performance capabilities, this car has everything drivers are looking for in a luxury sedan. Get a summary of features for the new Genesis G80 in this model",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8GVufDB8fHx8&auto=format&fit=corp&w=1170&q=80",
    price: "500000",
    colors: ["#964B00", "#008000", "#8B8000"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1708063786149-e36960c161b8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      // Default URL:  https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
    },
  },
  {
    id: uuid(),
    title: "2022 Chevrolet Spark",
    description:
      "The 2022 Spark enters the new model year without any significant changes. Its calling card is still being one of the least expensive new cars on the market",
    imageURL:
      "https://di-uploads-pod33.dealerinspire.com/loufuszchevy/uploads/2022/01/2022-Chevrolet-Spark-Special-Edition.png",
    price: "300000",
    colors: ["#964B00", "#008000", "#8B8000"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "2022 BMW XM",
    description:
      "Fuel consumption, combined WLTP in l/100 km: 12.9-12.3 CO2 emissions, combined WLTP in g/km: 43–35 Energy consumption, combined WLTP in kWh/100 km: 33.6–32.5",
    imageURL:
      "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "450000",
    colors: ["#964B00", "#008000", "#8B8000"],
    category: {
      name: "Cars",
      imageURL:
        "data:image/jpeg;base64,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",
    },
  },
  {
    id: uuid(),
    title: "2022 Mercedes Benz",
    description:
      "The 2022 Mercedes-Benz A220 4Matic offers an available all-wheel-drive system that can be paired with the engine for increased traction and stability. The system is designed to deliver power where it's needed most, providing confident handling in a variety of conditions",
    imageURL:
      "https://images.unsplash.com/photo-1657021623841-c40377d3ce17?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "600000",
    colors: ["#964B00", "#008000", "#8B8000"],
    category: {
      name: "Cars",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuRPEWTZa2XhibxnslNufmyfMwTRXBm6_W5Q&s",
    },
  },
  {
    id: uuid(),
    title: "2022 Honda Accord Hybrid",
    description:
      "With a robust hybrid powertrain, power-flow monitor and EV mode, the fun-to-drive 2022 Accord Hybrid offers everything that's great about the Accord",
    imageURL:
      "https://images.unsplash.com/photo-1667893505867-c8bafac79dfc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "250000",
    colors: ["#964B00", "#008000", "#8B8000"],
    category: {
      name: "Cars",
      imageURL:
        "https://www.cars.com/i/large/in/v2/stock_photos/d6888b30-e40c-4d88-94e8-72e7909a1da5/f3d30563-10db-449b-8f80-038b746820f5.png",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "number",
  },
];

export const colors: string[] = [
  "#415b63",
  "#66809b",
  "#618e85",
  "#6687ba",
  "#393956",
  "#314247",
  "#ac9ed6",
  "#FF0032",
  "#2563eb",
  "#FF6E31",
  "#0f2759",
  "#001104",
  "#a95add",
  "#354c7c",
];

export const categories: ICategoty[] = [
  {
    id: uuid(),
    name: "Cars",
    imageURL:
      "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
  },
  {
    id: uuid(),
    name: "Electronics",
    imageURL:
      "https://media.istockphoto.com/id/1186902469/photo/quantum-computing-concept-abstract-glowing-electronic-circuit.jpg?s=612x612&w=0&k=20&c=54FEEQVF2Zsx0lHLtCESSOHZls25sAc7FIeDrXuVqao=",
  },
  {
    id: uuid(),
    name: "Clothes",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUWi3ysL2_D_7ub0NPetMNJJP-3ktcrCK0Mw&s",
  },
  {
    id: uuid(),
    name: "Food",
    imageURL:
      "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg",
  },
  {
    id: uuid(),
    name: "Furniture",
    imageURL:
      "https://media.istockphoto.com/id/1212526330/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iIQ5wqa4NYpLn0YJvT_NAzMilwTFkTlprwbXAasOn9s=",
  },
  {
    id: uuid(),
    name: "Media",
    imageURL:
      "https://www.michalsons.com/wp-content/uploads/2018/08/Social-media-policy-e1561619696311.jpg",
  },
  {
    id: uuid(),
    name: "Sports and fitness",
    imageURL:
      "https://t3.ftcdn.net/jpg/03/29/60/84/360_F_329608479_vP9nFK795X8lWmoTa8DPhMgoewQ7U1lG.jpg",
  },
  {
    id: uuid(),
    name: "Beauty and personal care",
    imageURL:
      "https://img.freepik.com/premium-photo/skin-care-products-healthcare-procedures-concept-hygiene-cosmetic-healthy-lifestyle-spa_266732-20971.jpg",
  },
];
