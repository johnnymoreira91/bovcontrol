import { v4 as uuidv4 } from 'uuid'

export class Farmer {
  public readonly id: string
  public name: string
  public email: string
  public password: string
  public public_code: string

  constructor (props: Omit<Farmer, 'id'>, id?: string) {
    this.public_code = uuidv4()
    Object.assign(this, props)
  }
}
