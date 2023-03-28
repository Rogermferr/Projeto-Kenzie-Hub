import { Link } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { RegisterStyle } from "./styles";
import { UserContext } from "../../providers/UserContext";
import { useContext, useEffect } from "react";
import { ProfileLoadingStyle } from "../Profile/styles";
import { Spinner } from "../../components/Spinner";
import { motion } from "framer-motion";

export function RegisterPage() {
  document.title = "Cadastro";

  const { loading, setLoading } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <ProfileLoadingStyle>
        <h1>Carregando</h1>
        <Spinner />
      </ProfileLoadingStyle>
    );
  }

  return (
    <motion.div
      initial={{ y: -2000 }}
      animate={{ y: 0 }}
      exit={{ y: 2000 }}
      transition={{ duration: 1 }}>
      <RegisterStyle>
        <nav>
          <Logo />
          <Link to={"/"}>Voltar</Link>
        </nav>
        <RegisterForm />
      </RegisterStyle>
    </motion.div>
  );
}
