import { format } from 'date-fns'

export const convertDate = (date: string): string => {
  return format(new Date(date), "dd/MM/yyyy HH:mm:ss");
}
