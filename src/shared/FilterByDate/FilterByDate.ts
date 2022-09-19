import { IFilterByDateRequestDTO } from './FilterByDateDTO'

async function FilterByDate <T extends any[]> (data: IFilterByDateRequestDTO, array: T): Promise<T> {
  const startsAt = new Date() || new Date(`${data.year}-${data.month}-${data.day}`)
  const lastXDays = new Date(new Date().setDate(startsAt.getDate() - data.days || 30))

  const filterByDate: any = array.filter(item => {
    const date = new Date()
    return date >= lastXDays && date <= startsAt
  }).sort((a, b) => {
    return b.date - a.date
  })

  return filterByDate
}

export { FilterByDate }
