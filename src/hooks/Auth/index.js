const { createContext, useState, useContext, useEffect } = require("react");

const AuthContext = createContext({});

export const Role = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER"
}

export function AuthProvider ({ children}) {
    const [user, setUser] = useState({
        autenficated: null,
        user: null,
        role: null,
    });

    const singIn = async (email, password) => {

        if (email === "super@email.com" && password === "Super123!"){
             setUser({ autenficated: true, user:{id: 1, name: "Super Usuário", email}, role: Role.SUPER,})
        }
       
        else if (email === "adm@email.com" && password === "Adm123!"){
            setUser({autenficated: true, user:{id: 2, name: "Administrador", email}, role: Role.ADM,})
       }
       else if (email === "user@email.com" && password === "User123!"){
        setUser({ autenficated: true, user:{id: 3, name: "Usuário comum", email}, role: Role.USER,})
   }
    else {
        setUser({autenficated: false, user: null, role: null,});
    }
    };

    const singOut = async () => {
        setUser({})
    };

    useEffect(() => {
        console.log("AuthProvider", user);
    }, [user]);

    return <AuthContext.Provider value={{  user, singIn, singOut }}>{children}</AuthContext.Provider>
}

export function useAuth(AuthContext) {
    const context = useContext(AuthProvider);
     if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
     }
     return context; 
}