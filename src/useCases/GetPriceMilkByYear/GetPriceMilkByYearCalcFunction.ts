import { MilkDay } from '../../entities/MilkDay'

interface PriceMilkYear {
  month: number,
  price_BRL: number | string,
  price_USD: number | string
}

async function GetPriceMilkByYearCalcFunction (milkData: MilkDay[], distance: number, usdValue: number): Promise<PriceMilkYear[]> {
  const dataPriceMilk: PriceMilkYear[] = []
  const months: number[] = []
  const mapMonths = milkData.map(item => item.month)
  const dataSet = [...new Set(mapMonths)].sort((a, b) => {
    return a - b
  })
  for (const numb of dataSet) {
    months.push(numb)
  }

  for (const month of months) {
    const totalMilk = milkData.filter(item => item.month === month).reduce((pv, cr) => pv + cr.amount, 0)

    let basePrice: number = 0
    let kmPrice: number = 0
    let bonus: number = 0
    if (month <= 6) {
      basePrice = 1.80
      bonus = 0
      if (distance > 50) {
        kmPrice = 0.06
      }
    } else {
      basePrice = 1.95
      kmPrice = 0
      bonus = 0.01
    }

    const priceLiter = ((totalMilk * basePrice) - (kmPrice * distance) + (bonus * totalMilk)) / totalMilk
    const priceLiterUsd = priceLiter / usdValue

    dataPriceMilk.push({
      month,
      price_BRL: priceLiter ? priceLiter.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 'Not available',
      price_USD: priceLiterUsd ? priceLiterUsd.toLocaleString('en-us', { style: 'currency', currency: 'USD' }) : 'Not available'
    })
  }

  return dataPriceMilk
}

export { GetPriceMilkByYearCalcFunction }
