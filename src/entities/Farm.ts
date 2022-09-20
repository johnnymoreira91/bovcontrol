export class Farm {
  public readonly id: string
  public name: string
  public owner_id: string
  public distance_factory: number

  constructor (props: Omit<Farm, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
