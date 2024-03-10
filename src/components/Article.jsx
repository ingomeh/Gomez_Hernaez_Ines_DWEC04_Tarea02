// Se importa la biblioteca de React
import React from "react";

// Se define el componente Main.  Se desestructuran las props en las variables image, name, price, info y destacado.
const Article = ({ image, name, price, info, destacado}) => {
  // Se devuelve la estructura del componente con la información recibida a través de las props.
  // Dependiendo del valor de la variable destacado se pinta o no la clase destacado en el elemento HTML article.
  // Si no hay URL de la imagen se muestra una imagen por defecto.
  // Si no esta indicado el precio se indica el texto "A consultar"
  return (
    <article className={`single-tour${destacado ? " destacado" : ""}`}>
      <img
        src={image != "" ? image : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"}
        alt={name}
      />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price != "" ? `${price}€` : "A consultar"}</h4>
        </div>
        <p>{info}</p>
      </footer>
    </article>
  );
}

// Se exporta el componente Article para que pueda ser utilizado en otros archivos
export default Article;