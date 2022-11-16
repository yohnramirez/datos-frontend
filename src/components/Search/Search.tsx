import { useState } from "react";
import VerticalNav from "../Dashboard/VerticalNav/VerticalNav";
import { Input } from "@material-tailwind/react";
import axios from "axios";
import CardTreeEdit from "../Card/CardTreeEdit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Search = () => {
  const [id, setId] = useState("");
  const [arbol, setArbol] = useState([]);
  const [newData, setNewData] = useState({
    id_arbol: 0,
    nombre: "",
    descripcion: "",
    imagen: "",
    ubicacion: "",
  });

  const handleChangeId = (e: any) => {
    setId(e.target.value);
  };

  const handleChangeForm = ({ target }: any) => {
    const { name, value } = target;
    
    setNewData({
      ...newData,
      id_arbol: parseInt(id),
      [name]: value,
    });
  };

  const getArbolbyId = async (e: any) => {
    e.preventDefault();

    if (!id) {
      toast.warning("Debe ingresar un id");
    } else {
      const res = await axios.get("http://localhost:3000/dashboard/" + id);
      setArbol(res.data);
    }
  };

  const onEdit = async (e: any) => {
    e.preventDefault();

    if (
      !newData.nombre ||
      !newData.descripcion ||
      !newData.imagen ||
      !newData.ubicacion
    ) {
      toast.warning("Debe llenar todos los campos");
      return;
    }

    const res = await axios.put("http://localhost:3000/dashboard/", newData);

    toast.success(res.data.msg);
    setArbol([])
  };

  return (
    <div className="flex justify-start">
      <ToastContainer />
      <VerticalNav />
      <div className="w-[70%] ml-72 mt-10">
        <form onSubmit={getArbolbyId} className="flex justify-start gap-5">
          <Input
            variant="standard"
            type="search"
            placeholder="Buscar eTree por ID"
            name="idArbol"
            value={id}
            onChange={handleChangeId}
            className="w-full"
          />
          <button className="font-bold bg-blue text-white p-2 rounded-md ease-in duration-150 hover:bg-green">
            Buscar
          </button>
        </form>

        <div>
          {arbol.map((item: any) => {
            return (
              <CardTreeEdit
                key={item.id_arbol}
                nombre={item.nombre}
                descripcion={item.descripcion}
                ubicacion={item.ubicacion}
                handleChangeForm={handleChangeForm}
                onEdit={onEdit}
                newData={newData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
