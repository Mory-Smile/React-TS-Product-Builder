import Modal from "./components/ui/Modal";
import { productList, formInputsList, colors } from "./components/data";
import ProductCard from "./components/ProductCard/ProductCard";
import { FormEvent, useState } from "react";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { ChangeEvent } from "react";
import { IProduct } from "./components/interfaces";
import CircleColor from "./components/CircleColor/CircleColor";
import { categories } from "./components/data";

import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import { TProductNames } from "./types";

import toast, { Toaster } from "react-hot-toast";

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
  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);
  const [tempColors, setTempColors] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [selected, setSelected] = useState(categories[0]);

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

    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColors, category: selected },
      ...prev,
    ]);
    closeModal();
    setProduct(defaultProductObj);
    setTempColors([]);
    toast("SUCCESS✅, PRODUCT HAS BEEN ADDED", {
      duration: 3000,
      className: "bg-gray-600",
      style: { backgroundColor: "", color: "white" },
    });
  };

  const handleEditSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const updatedProducts = [...products];
    updatedProducts[productToEditIndex] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updatedProducts);

    setProductToEdit(defaultProductObj);
    setTempColors([]);
    closeEditModal();
    toast("SUCCESS✅, PRODUCT HAS BEEN UPDATED", {
      duration: 3000,
      className: "bg-gray-600",
      style: { backgroundColor: "", color: "white" },
    });
  };

  const onCancleEdit = () => {
    closeEditModal();
  };

  const onCancleDeleteModal = () => {
    closeConfirmDeleteModal();
  };

  const openConfirmDeleteModal = () => {
    setIsConfirmDeleteOpen(true);
  };

  const closeConfirmDeleteModal = () => {
    setIsConfirmDeleteOpen(false);
  };

  const handleRemove = () => {
    const filteredRemovedList = products.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filteredRemovedList);
    closeConfirmDeleteModal();
    toast("SUCCESS✅, PRODUCT HAS BEEN DELETED", {
      duration: 3000,
      className: "bg-gray-600",
      style: { backgroundColor: "", color: "white" },
    });
  };

  // ** Renders
  const renderProductList = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      setProductToEditIndex={setProductToEditIndex}
      index={index}
      openConfirmDeleteModal={openConfirmDeleteModal}
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
        if (productToEdit.colors.includes(color)) {
          setTempColors((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColors((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEdit = (
    id: string,
    label: string,
    name: TProductNames,
    type: string
  ) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="mb-[1px]">
          {label}
        </label>
        <Input
          id={id}
          name={name}
          type={type}
          onChange={handleEditChange}
          value={productToEdit[name]}
        />
      </div>
    );
  };

  return (
    <>
      <main className="container mx-auto">
        <Button
          className="bg-[linear-gradient(39deg,_#4fa7c6,_#2c67f2)] hover:bg-[linear-gradient(39deg,_#3a7f97,_#214aac)] transition-colors text-white h-16"
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
            <div className="pb-5">
              {renderProductEdit("title", "Product Title", "title", "text")}
              {renderProductEdit(
                "description",
                "Product Description",
                "description",
                "text"
              )}
              {renderProductEdit(
                "imageURL",
                "Product Image URL",
                "imageURL",
                "text"
              )}
              {renderProductEdit("price", "Product Price", "price", "number")}
            </div>

            <Select
              selected={productToEdit.category}
              setSelected={(value) =>
                setProductToEdit({ ...productToEdit, category: value })
              }
            />

            <div className="flex items-center justify-center flex-wrap space-x-1 pb-3">
              {renderProductColors}
            </div>
            <div className="flex items-center justify-center flex-wrap space-x-1 pb-3">
              {tempColors.concat(productToEdit.colors).map((color) => (
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
                onClick={() =>
                  console.log(`Product ${productToEditIndex + 1} Edited`)
                }
              >
                Submit
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-700 transition-colors text-white"
                onClick={onCancleEdit}
                type="button"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/* DELETE PRODUCT MODAL */}
        <Modal
          isOpen={isConfirmDeleteOpen}
          closeModal={closeConfirmDeleteModal}
        >
          <h1 className="text-center font-medium pb-5">
            DELETE CURRENT PRODUCT?
          </h1>

          <div className="flex items-center space-x-3">
            <Button
              className="bg-red-600 hover:bg-red-700 transition-colors text-white"
              onClick={handleRemove}
              type="button"
            >
              Delete
            </Button>
            <Button
              className="bg-gray-600 hover:bg-gray-700 transition-colors text-white"
              onClick={onCancleDeleteModal}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </Modal>

        <Toaster />
      </main>
    </>
  );
}

export default App;
