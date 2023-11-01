import TextH1 from "../atoms/TextH1";
import TextH2 from "../atoms/TextH2";
import ButtonPrimary from "../molecules/ButtonPrimary";

function ModalDelete({ onSumit, onCancel, index }) {
  return (
    <div className="h-full w-full grid grid-rows-6">
      <div className="row-start-2 w-full ">
        <TextH1 content={"Eliminar"} />
      </div>

      {index && index[1] !== undefined ? (
        <div className="row-start-3  flex items-center justify-center">
          <TextH2
            content={`¿Estás seguro de que deseas eliminar a ${index[1]} ?`}
            customStyle={"text-color-neutral-700 text-base"}
          />
        </div>
      ) : (
        <div className="row-start-3  flex items-center justify-center">
          <TextH2
            content="No se puede acceder a la propiedad 1 de index."
            customStyle={"text-color-neutral-700 text-base"}
          />
        </div>
      )}

      <div className="row-start-7 flex gap-3">
        <ButtonPrimary
          onClick={onSumit}
          content={"Eliminar"}
          customStyle={
            "bg-color-error hover:bg-color-primary hover:text-color-backgroud  "
          }
        />

        <ButtonPrimary
          onClick={onCancel}
          content={"Cancelar"}
          customStyle={
            "bg-color-neutral text-color-neutral-700 border borde-color- hover:bg-color-primary hover:text-color-backgroud"
          }
        />
      </div>
    </div>
  );
}
export default ModalDelete;
