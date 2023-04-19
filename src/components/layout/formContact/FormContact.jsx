import "./formContact.css"

export function FormContact({ handleSubmit, loading }) {
   return (
      <form className="form" onSubmit={handleSubmit}>
         <label htmlFor="name">
            Nombre
         </label>
         <input type="text" placeholder="Tu nombre" name="name" required />
         <label htmlFor="email">
            Email
         </label>
         <input type="email" placeholder="ejemplo@ejemplo.com" name="email" required />
         <label htmlFor="message">
            Mensaje
         </label>
         <textarea placeholder="Escribe tu mensaje" name="message" required />
         <button
            type="submit"
            className={`send ${loading ? "load" : ""}`}>
            <p>Enviar</p><span></span>
         </button>
      </form>
   )
}