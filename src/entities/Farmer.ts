import { uuid } from "uuidv4";

export class Farmer {
    public readonly id: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<Farmer, 'id'>, id?: string) {
        Object.assign(this, props)

        if (!id) {
            this.id = uuid()
        }
    }
}