export class Farm {
  public readonly id: string
  public name: string
  public owner_id: string

  constructor (props: Omit<Farm, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
