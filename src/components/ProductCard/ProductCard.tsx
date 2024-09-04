import { txtSlicer } from "../../utils/functions";
import { numberToCommas } from "../../utils/functions";
import Image from "../Image Component/Image";
import { IProduct } from "../interfaces";
import Button from "../ui/Button";
import CircleColor from "../CircleColor/CircleColor";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  setProductToEditIndex: (value: number) => void;
  index: number;
  openConfirmDeleteModal: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  setProductToEditIndex,
  openConfirmDeleteModal,
  index,
}: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  // ** RENDERS
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  // ** Handlers
  const handleEdit = () => {
    setProductToEdit(product);
    openEditModal();
    setProductToEditIndex(index);
  };

  const handleRemove = () => {
    setProductToEdit(product);
    openConfirmDeleteModal();
  };

  return (
    <>
      <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col justify-between overflow-hidden shadow-md">
        <Image
          imageURL={imageURL}
          alt={title}
          className="rounded-md mb-2 max-h-44 object-cover"
        />

        <h3 className="font-bold mb-1">{title}</h3>
        <p className="mb-1">{txtSlicer(description)}</p>

        <div className="flex items-center flex-wrap space-x-1 mt-2 ">
          {renderProductColors}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg">{`$${numberToCommas(price)}`}</span>
          <Image
            imageURL={category.imageURL}
            alt={category.name}
            className="w-10 h-10 rounded-full object-bottom"
          />
        </div>

        <div className="flex space-x-2 mt-5 text-white">
          <Button className="bg-gray-600" width="w-full" onClick={handleEdit}>
            Edit
          </Button>
          <Button className="bg-red-700" onClick={handleRemove}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
