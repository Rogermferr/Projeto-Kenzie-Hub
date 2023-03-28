import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FormStyle } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";

const formSchema = yup.object({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export function LoginForm() {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  return (
    <FormStyle onSubmit={handleSubmit(userLogin)}>
      <h2>Login</h2>

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
      <button type="submit">Entrar</button>

      <span>Ainda não possui conta?</span>
      <Link to={"/register"}>Cadastre-se</Link>
    </FormStyle>
  );
}
