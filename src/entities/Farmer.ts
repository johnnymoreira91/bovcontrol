export class Farmer {
  public readonly id: string
  public name: string
  public email: string
  public password: string
  public public_code: string

  constructor (props: Omit<Farmer, 'id' | 'public_code'>, id?: string) {
    Object.assign(this, props)
  }
}
