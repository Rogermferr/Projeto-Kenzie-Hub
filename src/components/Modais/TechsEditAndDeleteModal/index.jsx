import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../../providers/TechsContext";
import { TechsEditAndDeleteModalStyle } from "./styles";
import { TfiClose } from "react-icons/tfi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const formSchema = yup.object({
  title: yup.string().required("Título obrigatório"),
});

export function TechsEditAdDeleteModal() {
  const { setShowEditAndDeleteModal, editingTech, editTech, deleteTech } =
    useContext(TechsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: editingTech.title,
      status: editingTech.status,
    },
  });

  function submit(data) {
    editTech(data, editingTech.id);
  }

  return (
    <TechsEditAndDeleteModalStyle>
      <header>
        <h2>Tecnologia Detalhes</h2>
        <button onClick={() => setShowEditAndDeleteModal(false)}>
          <TfiClose />
        </button>
      </header>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="title">Nome do projeto</label>
          <input
            type="text"
            id="title"
            placeholder="Digite aqui o título da tecnologia"
            {...register("title")}
            readOnly
          />
          <span>{errors.title?.message}</span>
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
        </div>

        <footer>
          <button type="submit">Editar Tecnologia</button>
          <button type="button" onClick={() => deleteTech(editingTech.id)}>
            Excluir
          </button>
        </footer>
      </form>
    </TechsEditAndDeleteModalStyle>
  );
}
