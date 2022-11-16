import { useState } from "react";
import { Input, Textarea } from "@material-tailwind/react";
import axios from "axios";

interface ModalProps {
  setShowModal: (show: boolean) => void;
}

const Modal = ({ setShowModal }: ModalProps) => {
  const [data, setData] = useState({
    nombre: "",
    descripcion: "",
    imagen: "",
    ubicacion: "",
  });

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const sendData = (e: any) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("nombre", data.nombre);
    formData.append("descripcion", data.descripcion);
    formData.append("imagen", data.imagen);
    formData.append("ubicacion", data.ubicacion);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    // if (data.id_arbol) {
    //   axios
    //     .put("http://localhost:3000/dashboard" + data.id_arbol, formData, config)
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log(error));
    // }else{
    // }
    if (!data) {
      alert("Debes completar todos los campos");
      return;
    }

    axios
      .post("http://localhost:3000/dashboard", formData, config)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));


    // setData({ nombre: "", descripcion: "", imagen: "", ubicacion: "" });
    setShowModal(false);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-playfair">
        <div className="relative w-[1000px] my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Nuevo <span className="text-green">e</span>Tree
              </h3>
              <button
                className="p-1 ml-auto border-0 text-black hover:text-green float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="">X</span>
              </button>
            </div>
            {/*body*/}
            <form onSubmit={sendData}>
              <div className="flex flex-col gap-5 p-6">
                <div>
                  <Input
                    type="text"
                    label="Nombre"
                    size="md"
                    color="light-green"
                    value={data.nombre}
                    name="nombre"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Textarea
                    label="Descripción"
                    color="light-green"
                    name="descripcion"
                    value={data.descripcion}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    type="file"
                    color="light-green"
                    name="imagen"
                    value={data.imagen}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Input
                    label="Ubicación"
                    type="text"
                    color="light-green"
                    name="ubicacion"
                    value={data.ubicacion}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  type="submit"
                  className="bg-green text-white font-bold uppercase text-sm px-6 py-3 rounded hover:opacity-80 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  // onClick={() => setShowModal(false)}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
