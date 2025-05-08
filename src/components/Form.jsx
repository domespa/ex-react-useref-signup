import { useState } from "react";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specs, setSpecs] = useState("");
  const [exAge, setExage] = useState("");
  const [bio, setBio] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specs ||
      !exAge ||
      !bio.trim() ||
      err
    ) {
      setErr("Per favore compila tutti i dati inseriti");
      return;
    }

    setErr("");
    console.log({
      name,
      password,
      specs,
      exAge,
      bio,
    });
  };

  return (
    <>
      <h2>Form di registrazione</h2>
      <form onSubmit={handleSubmit}>
        {err && <p className="error">{err}</p>}

        <input
          type="text"
          placeholder="Inserisci il tuo nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Inserisci l'username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Inserisci la Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select value={specs} onChange={(e) => setSpecs(e.target.value)}>
          <option value="">Seleziona una Specializzazione</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backendk">Backend</option>
        </select>

        <input
          type="number"
          min={0}
          value={exAge}
          onChange={(e) => setExage(e.target.value)}
        />
        <textarea
          placeholder="Scrivi la tua biografia"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <button type="submit">Registrati</button>
      </form>
    </>
  );
}

export default Form;
