import { Logo } from "../../components/Logo";
import { LoginForm } from "../../components/Forms/LoginForm";
import { LoginStyle } from "./styles";
import { UserContext } from "../../providers/UserContext";
import { useContext, useEffect } from "react";
import { ProfileLoadingStyle } from "../Profile/styles";
import { Spinner } from "../../components/Spinner";
import { motion } from "framer-motion";

export function LoginPage() {
  document.title = "Login";

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
      <LoginStyle>
        <Logo />
        <LoginForm />
      </LoginStyle>
    </motion.div>
  );
}
