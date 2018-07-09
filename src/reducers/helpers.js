import character_json from '../data/characters';

 export function createCharacter(id) {
	let character = character_json.find(c => c.id === id);
	return character;
}

//export default createCharecter;