export class Price {
  public readonly id: string
  public code: string
  public codein: string
  public name: string
  public high: string
  public low: string
  public varBid: string
  public pctChange: string
  public bid: string
  public ask: string
  public timestamp: string
  public create_date: string

  constructor (props: Omit<Price, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}
