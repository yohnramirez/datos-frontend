import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../../Card/CardTree";

interface ListProps {
  handleClick: () => void;
}

const List = ({ handleClick }: ListProps) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/dashboard/")
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
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
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
};

export default List;
