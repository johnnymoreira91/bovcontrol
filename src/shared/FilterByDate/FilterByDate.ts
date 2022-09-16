import { IFilterByDateRequestDTO } from './FilterByDateDTO'

async function FilterByDate <T extends any[]> (data: IFilterByDateRequestDTO, array: T): Promise<T> {
  const startsAt = new Date() || new Date(data.start_date)
  const lastXDays = new Date(new Date().setDate(startsAt.getDate() - data.days || 30))

  const filterByDate: any = array.filter(item => {
    const date = new Date(item.date)
    return date >= lastXDays && date <= startsAt
  }).sort((a, b) => {
    return b.date.valueOf() - a.date.valueOf()
  })

  return filterByDate
}

export { FilterByDate }
