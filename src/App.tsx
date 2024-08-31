import Modal from "./components/ui/Modal";
import { productList, formInputsList } from "./components/data";
import ProductCard from "./components/ProductCard";
import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { ChangeEvent } from "react";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./Validation";

function App() {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { name: "", imageURL: "" },
  };
  // ** States
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);

  // ** Handlers
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });
    console.log(product);
  };

  const onCancel = () => {
    closeModal();
    setProduct(defaultProductObj);
  };
  // ** Renders
  const renderProductList = () =>
    productList.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  const renderFormInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label htmlFor={input.id} className="mb-[1px]">
        {input.label}
      </label>
      <Input
        id={input.id}
        name={input.name}
        type={input.type}
        onChange={handleChange}
        value={product[input.name]}
      />
    </div>
  ));

  return (
    <>
      <main className="container mx-auto">
        <Button
          className="bg-indigo-700 hover:bg-indigo-800 transition-colors text-white"
          onClick={openModal}
        >
          Add Product
        </Button>
        <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
          {renderProductList()}
        </div>

        <Modal isOpen={isOpen} closeModal={closeModal}>
          <h1 className="text-center font-medium pb-5">ADD A NEW PRODUCT</h1>
          <form onSubmit={handleSubmit}>
            <div className="pb-7">{renderFormInputList}</div>
            <div className="flex items-center space-x-3">
              <Button
                className="bg-indigo-700 hover:bg-indigo-800 transition-colors text-white"
                onClick={() => console.log("Product Added")}
              >
                Submit
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-700 transition-colors text-white"
                onClick={onCancel}
                type="button"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>
      </main>
    </>
  );
}

export default App;
