import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import { IProduct } from "./interfaces";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col overflow-hidden shadow-md">
        <Image
          imageURL={imageURL}
          alt={title}
          className="rounded-md mb-2 max-h-44 object-cover"
        />

        <h3 className="font-bold mb-1">{title}</h3>
        <p>{txtSlicer(description)}</p>

        <div className="flex items-center gap-2 my-4">
          <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
          <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
        </div>

        <div className="flex items-center justify-between">
          <span>{price}</span>
          <Image
            imageURL={imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>

        <div className="flex space-x-2 mt-5 text-white">
          <Button
            className="bg-indigo-700"
            width="w-full"
            onClick={() => console.log("Clicked")}
          >
            Edit ❌
          </Button>
          <Button className="bg-red-700" onClick={() => console.log("Clicked")}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
