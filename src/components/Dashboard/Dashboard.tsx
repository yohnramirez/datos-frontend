import { useState, useEffect } from "react";
import ButtonFloat from "./ButtonFloat/ButtonFloat";
import VerticalNav from "./VerticalNav/VerticalNav";
import Modal from "./Modal/Modal";
import ModalUpdate from "./Modal/ModalUpdate";
import List from "./List/List";

import axios from "axios";

const Dashboard = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleModalUpdate = () => {
    setShowModalUpdate(true)
  }

  return (
    <div className="flex justify-between w-full">
      <VerticalNav />
      <List handleModalUpdate={handleModalUpdate} />
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      {showModalUpdate ? <ModalUpdate setShowModalUpdate={setShowModalUpdate} /> : null}
      <ButtonFloat handleClick={handleClick} />
    </div>
  );
};

export default Dashboard;
