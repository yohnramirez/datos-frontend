import { useState } from "react";
import ButtonFloat from "./ButtonFloat/ButtonFloat";
import VerticalNav from "./VerticalNav/VerticalNav";
import Modal from "./Modal/Modal";
import List from "./List/List";

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="flex justify-between w-full">
      <VerticalNav />
      <List handleClick={handleClick}/>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      {showModalUpdate ? <showModalUpdate setShowModalUpdate={setShowModalUpdate} /> : null}
      <ButtonFloat handleClick={handleClick} />
    </div>
  );
};

export default Dashboard;
