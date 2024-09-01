import { v4 as uuid } from "uuid";
import { IFormInput, IProduct } from "../interfaces/index";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "2022 Gemesis GV70: Nomime",
    description:
      "The 2022 Genesis seems determined to just keep raising the bar on what a car can be. With its abundance of smart features and equally impressive performance capabilities, this car has everything drivers are looking for in a luxury sedan. Get a summary of features for the new Genesis G80 in this model",
    imageURL:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8GVufDB8fHx8&auto=format&fit=corp&w=1170&q=80",
    price: "500000",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
      // Default URL:  https://unsplash.com/photos/white-aston-martin-convertible-parked-near-trees-Os7C4iw2rDc
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "Cars",
      imageURL:
        "https://unsplash.com/photos/a-silver-car-parked-in-a-parking-lot-XIGcDqIGuRI",
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
    type: "text",
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
  "#3f3e26",
  "#0f2759",
  "#331a33",
  "#001104",
  "#a95add",
  "#354c7c",
];
