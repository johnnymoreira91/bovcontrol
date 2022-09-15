export class MilkDay {
  public readonly id: string
  public amount: number
  public date: Date
  public farmer_code: string
  public public_code: string

  constructor (props: Omit<MilkDay, 'id' | 'public_code'>, id?: string) {
    Object.assign(this, props)
  }
}
