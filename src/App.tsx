import Modal from "./components/ui/Modal";
import { productList, formInputsList, colors } from "./components/data";
import ProductCard from "./components/ProductCard/ProductCard";
import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { ChangeEvent } from "react";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./Validation";
import CircleColor from "./components/CircleColor/CircleColor";
import { categories } from "./components/data";

import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";

function App() {
  const defaultProductObj = {
    id: "",
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: { name: "", imageURL: "" },
  };
  // ** States
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  /*     Validation State     */
  // const [errors, setErrors] = useState({
  //   title: "",
  //   description: "",
  //   imageURL: "",
  //   price: "",
  // });
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selected, setSelected] = useState(categories[0]);
  console.log("Product To Edit", productToEdit);

  // ** Handlers
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setIsEditOpen(false);
  const openEditModal = () => setIsEditOpen(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({ ...productToEdit, [name]: value });
  };

  const onCancel = () => {
    closeModal();
    setProduct(defaultProductObj);
    setTempColors([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // const { title, description, imageURL, price } = product;

    // const errors = productValidation({
    //   title,
    //   description,
    //   imageURL,
    //   price,
    // });

    // const hasErrorMsg =
    //   Object.values(errors).some((value) => value === "") &&
    //   Object.values(errors).every((value) => value === "");

    // if (!hasErrorMsg) {
    //   setErrors(errors);
    //   return;
    // }

    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors, category: selected },
      ...prev,
    ]);
    closeModal();
    setProduct(defaultProductObj);
    setTempColors([]);
  };

  const handleEditSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // setProducts((prev) => [
    //   { ...product, id: uuid(), colors: tempColors, category: selected },
    //   ...prev,
    // ]);
    closeModal();
    setProductToEdit(defaultProductObj);
    setTempColors([]);
  };

  // ** Renders
  const renderProductList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
    />
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

  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
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
          {renderProductList}
        </div>

        {/* ADD PRODUCT MODAL */}
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <h1 className="text-center font-medium pb-5">ADD A NEW PRODUCT</h1>
          <form onSubmit={handleSubmit}>
            <div className="pb-5">{renderFormInputList}</div>
            <Select selected={selected} setSelected={setSelected} />
            <div className="flex items-center justify-center flex-wrap space-x-1 pb-3">
              {renderProductColors}
            </div>
            <div className="flex items-center justify-center flex-wrap space-x-1 pb-3">
              {tempColors.map((color) => (
                <span
                  key={color}
                  className={"rounded-md text-white p-1 mb-1 text-xs"}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

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

        {/* EDIT PRODUCT MODAL */}
        <Modal isOpen={isEditOpen} closeModal={closeEditModal}>
          <h1 className="text-center font-medium pb-5">Edit CURRENT PRODUCT</h1>
          <form onSubmit={handleEditSubmit}>
            <div className="flex flex-col">
              <label htmlFor={"title"} className="mb-[1px]"></label>
              <Input
                id={"title"}
                name={"title"}
                type={"text"}
                onChange={handleEditChange}
                value={productToEdit["title"]}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor={"description"} className="mb-[1px]">
                Product Description
              </label>
              <Input
                id={"description"}
                name={"description"}
                type={"text"}
                onChange={handleEditChange}
                value={productToEdit["description"]}
              />
            </div>

            {/* <Select selected={selected} setSelected={setSelected} />


            <div className="flex items-center justify-center flex-wrap space-x-1 pb-3">
              {renderProductColors}
            </div>
            <div className="flex items-center justify-center flex-wrap space-x-1 pb-3">
              {tempColors.map((color) => (
                <span
                  key={color}
                  className={"rounded-md text-white p-1 mb-1 text-xs"}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div> */}

            <div className="flex items-center justify-center flex-wrap space-x-1 pb-3">
              {tempColors.map((color) => (
                <span
                  key={color}
                  className={"rounded-md text-white p-1 mb-1 text-xs"}
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

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
