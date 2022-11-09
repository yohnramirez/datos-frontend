import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface CardProps {
  nombre: string;
  descripcion: string;
  ubicacion: string;
  handleClick: () => void;
}

const CardTree = ({ nombre, descripcion, ubicacion, handleClick }: CardProps) => {
  return (
    <Card className="w-80">
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
          <Typography as="button" onClick={handleClick} variant="lead">
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
            <HiOutlineLocationMarker fontSize={20} color="black"/>
            <p className="text-sm text-black">{ubicacion}</p>
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default CardTree;
