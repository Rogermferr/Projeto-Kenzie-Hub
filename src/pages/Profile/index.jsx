import { useContext, useEffect } from "react";
import { Logo } from "../../components/Logo";
import { ProfileLoadingStyle, ProfileStyle } from "./styles";
import "../../components/Spinner/styles.js";
import { Spinner } from "../../components/Spinner";
import { UserContext } from "../../providers/UserContext";
import { TechsList } from "../../components/TechsList";
import { FaPlus } from "react-icons/fa";
import { TechsContext } from "../../providers/TechsContext";
import { TechsCreateModal } from "../../components/Modais/TechsCreateModal";
import { TechsEditAdDeleteModal } from "../../components/Modais/TechsEditAndDeleteModal";
import { motion } from "framer-motion";

export function ProfilePage() {
  const { user, loading, userLogout } = useContext(UserContext);
  const { showCreateModal, showAndCloseModal, showEditAndDeleteModal } =
    useContext(TechsContext);

  document.title = "Perfil";

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <ProfileStyle>
        <nav>
          <Logo />
          <button onClick={userLogout}>Sair</button>
        </nav>
        <header>
          <h1>Olá, {user.name} </h1>
          <p>{user.course_module}</p>
        </header>
        <main>
          <section>
            <h2>Tecnologias</h2>
            <button onClick={showAndCloseModal}>
              <FaPlus />
            </button>
          </section>
          <TechsList />
        </main>

        {showCreateModal && <TechsCreateModal />}

        {showEditAndDeleteModal && <TechsEditAdDeleteModal />}
      </ProfileStyle>
    </motion.div>
  );
}
