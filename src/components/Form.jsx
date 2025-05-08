import { useState, useRef, useEffect } from "react";
import "./form.css";

function Form() {
  console.log("Rerender");
  const nameRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const specsRef = useRef();
  const exAgeRef = useRef();
  const bioRef = useRef();
  const [err, setErr] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

  const isValidUsername =
    username.length >= 6 &&
    [...username].every((c) => letters.includes(c) || numbers.includes(c));
  const isValidPassword =
    password.length >= 8 &&
    [...password].some((c) => letters.includes(c)) &&
    [...password].some((c) => numbers.includes(c)) &&
    [...password].some((c) => symbols.includes(c));

  const trimmedBio = bioRef;
  const isValidBio = trimmedBio.length >= 100 && trimmedBio.length <= 1000;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value ||
      !username.trim() ||
      !password.trim() ||
      !specsRef.current.value ||
      !exAgeRef.current.value ||
      !bioRef ||
      err
    ) {
      setErr("Per favore compila tutti i dati inseriti");
      return;
    }

    setErr("");
    console.log(`
        - Nome: ${nameRef.current.value};
        - Username: ${username};
        - Pass: ${password};
        - Spec: ${specsRef.current.value};
        - Experience: ${exAge.current.value};
        - Bio: ${bioRef.current.value}

    `);
  };

  useEffect(() => {
    nameRef.current.focus();
    nameRef.current.select();
  }, []);

  return (
    <>
      <h2>Form di registrazione</h2>
      <form onSubmit={handleSubmit}>
        {err && <p className="error">{err}</p>}

        <input
          type="text"
          placeholder="Inserisci il tuo nome completo"
          ref={nameRef}
        />

        <input
          type="text"
          placeholder="Inserisci l'username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {username && (
          <p style={{ color: isValidUsername ? "green" : "red" }}>
            {isValidUsername
              ? "Username valido."
              : "L'username deve essere alfanumerico e di almeno 6 caratteri."}
          </p>
        )}

        <input
          type="password"
          placeholder="Inserisci la Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {password && (
          <p style={{ color: isValidPassword ? "green" : "red" }}>
            {isValidPassword
              ? "Password valida."
              : "La password deve contenere almeno 8 caratteri, una lettera, un numero e un simbolo."}
          </p>
        )}
        <select ref={specsRef}>
          <option value="">Seleziona una Specializzazione</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backendk">Backend</option>
        </select>

        <input type="number" min={0} ref={exAgeRef} />
        <textarea placeholder="Scrivi la tua biografia" ref={bioRef} />
        {bioRef && (
          <p style={{ color: isValidBio ? "green" : "red" }}>
            {isValidBio
              ? "Descrizione valida."
              : "La descrizione deve contenere tra 100 e 1000 caratteri."}
          </p>
        )}
        <button type="submit">Registrati</button>
        <button onClick={() => (nameRef.current.value = "")}>Reset</button>
      </form>
    </>
  );
}

export default Form;
