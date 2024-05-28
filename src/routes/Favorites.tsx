import { NavLink } from "react-router-dom";
import CardList from "../components/cadsComponents/CardList";

import Header from "../components/headerComponents/Header";
import NavBar from "../components/headerComponents/NavBar";




import { useUserContext } from "../utils/UserProvider";


function Favorites() {

  const userContext = useUserContext();



  if(!userContext){
    return (
      <>
        <Header>
          <NavBar />
        </Header>
        <main className="container py-4">
          <section className="row">
            <p>
              registrate para poder ver este panel{" "}
              <NavLink to="/login" className="">
                aquí
              </NavLink>
            </p>
          </section>
        </main>
      </>
    );
  }
  console.log(userContext.favorites.length < 1);
  let content;
  if (userContext.favorites.length < 1) {
    content = (
      <p className="text-white">
        Añade nuevos elementos para verlos aqui:{" "}
        <NavLink to="/" className="">
          Personajes
        </NavLink>{" "}
        y tambien{" "}
        <NavLink to="/locations" className="">
          Ubicaciones
        </NavLink>
      </p>
    );
  }else{
    content = <CardList items={userContext.favorites} />;
  }

  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <main className="container py-4">
        <section className="row">
          <div className="col-12">
            <h2 className="text-white">Favoritos:</h2>
          </div>
          <div className="col-12">
            <div className="row">{content}</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Favorites;
