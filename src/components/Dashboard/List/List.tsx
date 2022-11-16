import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../Card/CardTree";

interface ListProps {
  handleModalUpdate: () => void;
}

const List = ({ handleModalUpdate }: ListProps) => {
  const [list, setList] = useState([]);

  const getTrees = async () => {
    await axios
      .get("http://localhost:3000/dashboard/")
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTrees();
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center items-center font-playfair w-full ml-[15.5%] gap-5 h-auto py-4">
      {list.length > 0 &&
        list.map((item: any) => {
          return (
            <Card
              key={item.id_arbol}
              nombre={item.nombre}
              descripcion={item.descripcion}
              ubicacion={item.ubicacion}
              handleModalUpdate={handleModalUpdate}
            />
          );
        })}
    </div>
  );
};

export default List;
