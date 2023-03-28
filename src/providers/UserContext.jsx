import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function userRegister(data) {
    try {
      const response = await api.post("/users", data);
      toast.success("Usuário cadastrado");
      navigate("/");
    } catch (error) {
      toast.error("Verifique novamente os dados");
    }
  }

  async function userLogin(data) {
    try {
      const response = await api.post("/sessions", data);
      const userObj = response.data.user;
      const userToken = response.data.token;

      setUser(userObj);
      localStorage.setItem("@USERTOKEN", JSON.stringify(userToken));
      navigate("/profile");
      setLoading(true);
    } catch (error) {
      toast.error("Email ou senha inválidos");
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@USERTOKEN"));

    if (token) {
      async function loadInfoUser() {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          navigate("/profile");
          setUser(response.data);
          setLoading(false);
        } catch (error) {
          localStorage.removeItem("@USERTOKEN");
          console.error(error);
        }
      }
      loadInfoUser();
    }
  }, [loading]);

  function userLogout() {
    localStorage.removeItem("@USERTOKEN");
    setUser(null);
    document.title = "Login";
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userLogin,
        userLogout,
        loading,
        setLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
}

// if (someProduct) {
//   const newCartList = [...cartList];
//   newCartList.forEach((product: iProduct) => {
//     if (product.id === newProductFound.id) {
//       product.amount += 1;
//       product.price = productFound.price * product.amount;
//     }
//   });
//   setCartList(newCartList);
//   toast.success('Produto adicionado ao carrinho');
// } else {
//   setCartList([...cartList, newProductFound]);
//   toast.success('Produto adicionado ao carrinho');
// }
