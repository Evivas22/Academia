{
  /* {JSON.stringify(filteredData, null, 2)} */
}

import Modal from "react-modal";
import { useEffect, useState } from "react";
import Table from "../organism/Table";
import TextH1 from "../atoms/TextH1";
import ButtonPrimary from "../molecules/ButtonPrimary";
import ModalCreate from "../organism/ModalCreate";
import { getData } from "../../utils/httpRequests";
import SearchBar from "../molecules/SearchBar";

const customModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(10px)",
  },
  content: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
  },
};

function Body1({ selectedOption, theme }) {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.map((item) => {
    const { _id, __v, ...filteredItem } = item;
    return filteredItem;
  });

  const filteredDataId = data.map((item) => {
    const { __v, ...filteredItem } = item;
    return filteredItem;
  });

  // console.log(filteredData)
  const ids = data.map((objeto) => objeto._id);

  const loadAndUseData = async (url) => {
    try {
      const data = await getData(url);
      console.log("Datos obtenidos:", data);
      setData(data);
    } catch (error) {
      console.error("Error al cargar los datos:", error);
    }
  };

  useEffect(() => {
    loadAndUseData(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    const filteredData = data.filter((item) =>
      item.nombre.toLowerCase().includes(searchText.toLowerCase())
    );
    setDataFilter(filteredData);
  }, [data, searchText]);

  return (
    <div className="grid  grid-rows-6 gap-4 h-full ">
      <Modal
        isOpen={isModalOpen}
        contentLabel="Ejemplo Modal"
        style={customModalStyle}
        className={"bg-Background-1  max-h-[600px] h-full text-Texto-1"}
      >
        <ModalCreate
          // filteredData={filteredData}
          closeModal={closeModal}
          contentLabel="Crear"
          selectedOption={selectedOption}
          theme={theme}
          loadAndUseData={loadAndUseData}
        />
      </Modal>

      <div
        name="div Bodyhead"
        className="
            bg-Background-1
            rounded-3xl
            shadow-lg
            shadow-color-trasparente
            flex
            items-center
            w-full
            justify-between
            px-4
            glass
            "
      >
        <div name="Titulo" className="">
          <TextH1 content={selectedOption} />
        </div>
        <div
          name="Barra buscadora"
          className="flex justify-center items-center h-screen"
        >
          <SearchBar
            placeholder={`buscar ${selectedOption}`}
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        <div name="Boton agregar" className="">
          <button
            class="btn-square rounded-md btn-wide border border-Texto bg-Background-2 hover:bg-Background-3 hover:font-medium"
            onClick={openModal}
          >
            Agregar {selectedOption}
          </button>
        </div>
      </div>

      <div
        className="
        bg-Background-1
        glass
        row-start-2
        row-span-full
        bg-color-backgroudBody
        rounded-r-3xl
        rounded-l-3xl
        shadow-sx
        shadow-neutral
        "
      >
        <Table
          selectedOption={selectedOption}
          setData={setData}
          data={dataFilter}
          excludedKeys={["_id", "__v"]}
        />
      </div>
    </div>
  );
}
export default Body1;
