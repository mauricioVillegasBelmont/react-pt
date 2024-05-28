import { useState } from "react";
import { CharacterInterface, LocationInterface } from "../../interfaces";
import { useUserContext } from "../../utils/UserProvider";




interface CharacterCardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  push: CharacterInterface;
}

export function CharacterCard(props: CharacterCardProps) {
  const { id, name, status, species, type, gender, image, push } = props;

  const userContext = useUserContext();

  const defaultSatate = (userContext && userContext.favorites.includes(push));
  const [isActive, setActive] = useState(defaultSatate);

  const elementSetter = (element: CharacterInterface) => {
    if (!userContext) return;
    if (userContext.favorites.includes(element)){
      const index = userContext.favorites.indexOf(element)
      userContext.favorites.splice(index, 1);
      setActive(false);
    }else{
      userContext.favorites.push(element);
      setActive(true);
    }
  };

  return (
    <>
      <div className="card">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body" data-id={id}>
          <h5 className="card-title">{name}</h5>
          <ul className="card-text">
            {!!status && (
              <li>
                <small className="px-2">{status}</small>
              </li>
            )}
            {!!species && (
              <li>
                <small className="px-2">{species}</small>
              </li>
            )}
            {!!type && (
              <li>
                <small className="px-2">{type}</small>
              </li>
            )}
            {!!gender && (
              <li>
                <small className="px-2 ">{gender}</small>
              </li>
            )}
          </ul>
          {userContext && (
            <button
              className={isActive ? "btn btn-primary active" : "btn btn-primary"}
              type="button"
              onClick={() => elementSetter(push)}
            >
              <i className="bi bi-bookmark-plus-fill"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
interface LocatoinCardProps {
  id: number; //	The id of the location.
  name: string; //	The name of the location.
  type: string; //	The type of the location.
  dimension: string; //	The dimension in which the location is located.
  push: LocationInterface; // (url)	Link to the location's own endpoint.
}
export function LocatoinCard(props: LocatoinCardProps) {
  const { id, name, type, dimension, push } = props;

  const userContext = useUserContext();

  const defaultSatate = userContext && userContext.favorites.includes(push);
  const [isActive, setActive] = useState(defaultSatate);

  const elementSetter = (element: LocationInterface) => {
    if (!userContext) return;
    if (userContext.favorites.includes(element)) {
      const index = userContext.favorites.indexOf(element);
      userContext.favorites.splice(index, 1);
      setActive(false);
    } else {
      userContext.favorites.push(element);
      setActive(true);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-body" data-id={id}>
          <h5 className="card-title">{name}</h5>
          <ul className="card-text">
            {!!type && (
              <li>
                <small className="px-2">{type}</small>
              </li>
            )}
            {!!type && (
              <li>
                <small className="px-2">{type}</small>
              </li>
            )}
            {!!dimension && (
              <li>
                <small className="px-2">{dimension}</small>
              </li>
            )}
          </ul>
          {userContext && (
            <button
              className={
                isActive ? "btn btn-primary active" : "btn btn-primary"
              }
              type="button"
              onClick={() => elementSetter(push)}
            >
              <i className="bi bi-bookmark-plus-fill"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
