import { ItemType, CharacterInterface, LocationInterface } from "../interfaces/";

export function isCharacter(
  item: ItemType
): item is CharacterInterface {
  return "gender" in item;
}

export function isLocation(
  item: ItemType
): item is LocationInterface {
  return "dimension" in item;
}
