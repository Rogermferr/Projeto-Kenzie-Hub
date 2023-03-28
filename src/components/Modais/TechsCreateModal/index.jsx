import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../../providers/TechsContext";
import { TechsCreateModalStyle } from "./styles";
import { TfiClose } from "react-icons/tfi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Forms/Input";

const formSchema = yup.object({
  title: yup.string().required("Título obrigatório"),
  status: yup.string().required("Status obrigatório"),
});

export function TechsCreateModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { showAndCloseModal, createTechs } = useContext(TechsContext);
  return (
    <TechsCreateModalStyle>
      <header>
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={showAndCloseModal}>
          <TfiClose />
        </button>
      </header>
      <form onSubmit={handleSubmit(createTechs)}>
        <Input
          label="Nome"
          type="text"
          id="title"
          placeholder="Digite aqui o título da tecnologia"
          register={register("title")}
          errors={errors.title?.message}
        />

        <div>
          <label htmlFor="status">Selecionar status</label>
          <select id="status" {...register("status")}>
            <option value="">Selecione</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span>{errors.status?.message}</span>
        </div>

        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </TechsCreateModalStyle>
  );
}
