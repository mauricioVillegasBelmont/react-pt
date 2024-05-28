import { CharacterInterface, LocationInterface } from "../../interfaces";
import { isCharacter, isLocation } from "../../utils/typeGuards";
interface CardListProps {
  items: (CharacterInterface | LocationInterface)[] | undefined;
}

import { CharacterCard, LocatoinCard } from "./Card";

function CardList( items: CardListProps ) {
  const cardsArray = items.items;
  return (
    <>
      {cardsArray && cardsArray.map(
        (card: CharacterInterface | LocationInterface, index: number) => (
          <div key={index} className="col col-md-6 col-lg-3 mb-3">
            {isCharacter(card) && (
              <CharacterCard
                id={card.id}
                name={card.name}
                status={card.status}
                species={card.species}
                type={card.type}
                gender={card.gender}
                image={card.image}
                push={card}
              />
            )}
            {isLocation(card) && (
              <LocatoinCard
                id={card.id}
                name={card.name}
                type={card.type}
                dimension={card.dimension}
                push={card}
              />
            )}
          </div>
        )
      )}
    </>
  );
}

export default CardList;
