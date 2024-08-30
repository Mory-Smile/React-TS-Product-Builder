import Modal from "./components/ui/Modal";
import { productList, formInputsList } from "./components/data";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/input";

function App() {
  // ** States
  const [isOpen, setIsOpen] = useState(false);

  // ** Handlers
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // ** Renders
  const renderProductList = () =>
    productList.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));

  const renderFormInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label htmlFor={input.id} className="mb-[1px]">
        {input.label}
      </label>
      <Input id={input.id} name={input.name} type={input.type} />
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
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      </main>
    </>
  );
}

export default App;
