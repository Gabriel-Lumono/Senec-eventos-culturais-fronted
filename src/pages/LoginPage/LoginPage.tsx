import type React from "react";
import styles from "./LoginPage.module.css";
import { useState, type FormEvent } from "react";

interface LoginProps {
  onLoginSuccess?: (token: string) => void;
}

const LoginPage: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch(
        "https://senac-eventos-cultural-backend-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Falha no login");
      }
      const data = await res.json();
      onLoginSuccess?.(data.token);
      alert("Login Efetuado");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        alert(`Erro ao logar: ${err.message}`);
      } else {
        const erroMsg = String(err);
        setError(erroMsg);
        alert(`Erro ao logar: ${erroMsg}`);
      }
    }
  };

  return (
    <div>
      <header className={styles.header}>
        <h3>Senac Eventos Cultural</h3>
        <a href="/login">Login</a>
      </header>
      <main>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Entrar</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;