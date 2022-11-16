import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface CardProps {
  nombre: string;
  descripcion: string;
  ubicacion: string;
  handleChangeForm: (e:any) => void;
  onEdit: (e:any) => void;
  newData: any
}

const CardTreeEdit = ({ nombre, descripcion, ubicacion, handleChangeForm, onEdit, newData }: CardProps) => {
  return (
    <Card className="w-92 flex flex-row">
      <div>
        <CardHeader floated={false} className="h-72">
          <img
            src="images/tree.jpeg"
            alt={nombre}
            className="object-cover h-72"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {nombre}
          </Typography>
          <Typography
            color="blue"
            className="font-medium text-black"
            textGradient
          >
            {descripcion}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-between items-center gap-7 pt-2 bg-greenTransparent rounded-b-md">
          <Tooltip content="Editar">
            <Typography as="button" variant="lead">
              <FiEdit fontSize={20} color="black" />
            </Typography>
          </Tooltip>
          <Tooltip content="Ubicación">
            <Typography
              as="p"
              href="#twitter"
              variant="lead"
              className="flex items-center gap-2"
            >
              <HiOutlineLocationMarker fontSize={20} color="black" />
              <p className="text-sm text-black">{ubicacion}</p>
            </Typography>
          </Tooltip>
        </CardFooter>
      </div>
      <div className="pt-5 flex items-center justify-center w-full">
        <form onSubmit={onEdit}>
          <div className="flex flex-col gap-5 p-6">
            <div>
              <Input
                type="text"
                label="Nombre"
                size="md"
                color="light-green"
                name="nombre"
                value={newData.nombre}
                onChange={handleChangeForm}
              />
            </div>
            <div>
              <Textarea
                label="Descripción"
                color="light-green"
                name="descripcion"
                value={newData.descripcion}
                onChange={handleChangeForm}
              />
            </div>
            <div>
              <Input
                type="file"
                color="light-green"
                name="imagen"
                value={newData.imagen}
                onChange={handleChangeForm}
              />
            </div>
            <div>
              <Input
                label="Ubicación"
                type="text"
                color="light-green"
                name="ubicacion"
                value={newData.ubicacion}
                onChange={handleChangeForm}
              />
            </div>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              type="submit"
              className="bg-green text-white font-bold uppercase text-sm px-6 py-3 rounded hover:opacity-80 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default CardTreeEdit;
