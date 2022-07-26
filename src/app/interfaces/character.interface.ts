export interface Character {
  id: number,
  name: string
  image: string
  status: string
  species: string
	type: string
	gender: string
  origin: {
    name: string
  }
  location: {
    name: string
  }
  created: string
}
