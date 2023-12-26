export type Starship = {
    name: string,
    model: string,
    manufacturer: string,
    cost_in_credits: number,
    length: number,
    max_atmosphering_speed: number
    crew: string,
    passengers: number,
    cargo_capacity: number,
    consumables: string,
    hyperdrive_rating: number,
    MGLT: number,
    starship_class: string,
    pilots: string[],
    created: Date,
    edited: Date,
    url: string,
    required_stop: number
}