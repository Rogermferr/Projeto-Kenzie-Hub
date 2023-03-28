import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormRegisterStyle } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";

const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres")
    .required("Senha obrigatória"),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "A senha de confirmação deve ser igual a senha"
    )
    .required("Confirmação de senha obrigatória"),
  bio: yup.string().required("Descrição obrigatória"),
  contact: yup.string().required("Informação de contato obrigatória"),
  course_module: yup.string().required("Módulo é obrigatório"),
});

export function RegisterForm() {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  return (
    <FormRegisterStyle onSubmit={handleSubmit(userRegister)}>
      <h2>Crie sua conta</h2>
      <p>Rápido e grátis, vamos nessa</p>

      <Input
        label="Nome"
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        errors={errors.name?.message}
      />

      <Input
        label="Email"
        type="text"
        id="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        errors={errors.email?.message}
      />

      <InputPassword
        label="Senha"
        id="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        errors={errors.password?.message}
      />

      <InputPassword
        label="Confirme sua senha"
        id="password_confirmation"
        placeholder="Digite aqui sua senha"
        register={register("password_confirmation")}
        errors={errors.password_confirmation?.message}
      />

      <Input
        label="Bio"
        type="text"
        id="bio"
        placeholder="Fale sobre você"
        register={register("bio")}
        errors={errors.bio?.message}
      />

      <Input
        label="Contato"
        type="text"
        id="contact"
        placeholder="Opção de contato"
        register={register("contact")}
        errors={errors.contact?.message}
      />

      <div>
        <label htmlFor="course_module">Selecionar módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="">Selecione um módulo</option>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <span>{errors.course_module?.message}</span>
      </div>
      <button type="submit">Cadastrar</button>
    </FormRegisterStyle>
  );
}
