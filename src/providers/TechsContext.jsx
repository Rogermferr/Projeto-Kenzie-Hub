import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechsContext = createContext({});

export function TechsProvider({ children }) {
  const { user } = useContext(UserContext);
  const [techsList, setTechsList] = useState(user.techs);
  const [editingTech, setEditingTech] = useState(null);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditAndDeleteModal, setShowEditAndDeleteModal] = useState(false);

  const token = JSON.parse(localStorage.getItem("@USERTOKEN"));

  function showAndCloseModal() {
    setShowCreateModal(!showCreateModal);
  }

  function showModalCards(techId) {
    const techFound = techsList.find((tech) => {
      if (tech.id === techId) {
        setShowEditAndDeleteModal(true);
        return tech;
      }
    });
    setEditingTech(techFound);
    return techFound;
  }

  async function createTechs(data) {
    if (token) {
      try {
        const response = await api.post("/users/techs", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setShowCreateModal(false);
        setTechsList([...techsList, response.data]);
        toast.success("Tecnologia criada");
      } catch (error) {
        toast.error("Não foi possível criar tecnologia");
      }
    }
  }

  async function editTech(data, techId) {
    if (token) {
      try {
        const response = await api.put(`/users/techs/${techId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const newTechList = techsList.map((tech) => {
          if (tech.id === techId) {
            return { ...tech, ...data };
          } else {
            return tech;
          }
        });
        setShowEditAndDeleteModal(false);
        setTechsList(newTechList);

        toast.success("Tecnologia editada");
      } catch (error) {
        toast.error("Não foi possível editar a tecnologia");
      }
    }
  }

  async function deleteTech(techId) {
    if (token) {
      try {
        const response = await api.delete(`/users/techs/${techId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const newTechList = techsList.filter((tech) => tech.id !== techId);
        setShowEditAndDeleteModal(false);
        setTechsList(newTechList);

        toast.success("Tecnologia deletada");
      } catch (error) {
        toast.error("Não foi possível editar a tecnologia");
      }
    }
  }

  return (
    <TechsContext.Provider
      value={{
        techsList,
        setTechsList,
        editingTech,
        setEditingTech,
        showCreateModal,
        showAndCloseModal,
        createTechs,
        showEditAndDeleteModal,
        setShowEditAndDeleteModal,
        showModalCards,
        editTech,
        deleteTech,
      }}>
      {children}
    </TechsContext.Provider>
  );
}
