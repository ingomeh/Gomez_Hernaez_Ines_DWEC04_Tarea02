// Se importa la biblioteca de React
import React from "react";
// Se importa el componente Article
import Article from "./Article";
// Se importa el listado de tours desde el archivo data
import Tours from "../data";

// Se define el componente Main.
// En este caso, no se le pasa ninguna prop al componente sino que dado que el listado de tours es fijo, no se considera necesario pasarlo como componente.
// Si fuera necesario reutilizar este componente con otro listado de tours, sería mejor pasar el listado con una prop.
const Main = () => {
  // Se devuelve el contenido principal del componente Main
  // Se utiliza la función filter para renderizar solo los componentes que tengan informacion descriptiva
  // a continuación, se utiliza la funcion map para renderizar el componente Article por cada tour con info.
  return (
    <main>
      <section>
        <div className="title">
          <h2>nuestros tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {
            Tours
            .filter((tour)=>{return tour.info!=""})
            .map((tour) => (
                <Article
                    key={tour.id}
                    name={tour.name}
                    image={tour.image}
                    info={tour.info}
                    price={tour.price}
                    destacado={tour.destacado}
                />
            ))
          }
        </div>
      </section>
    </main>
  );
};

// Se exporta el componente Main para que pueda ser utilizado en otros archivos
export default Main;
