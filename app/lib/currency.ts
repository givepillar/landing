const isWholeNumber = (num: number) => (num / 100) % 1 === 0

export const currency = (amount: number) => {
  if (isWholeNumber(amount)) return (amount / 100).toFixed(0)

  return (amount / 100).toFixed(2)
}

export const unCurrency = (amount: string | number): number => {
  const n = Number(amount)

  if (isNaN(n)) return 0

  return n * 100
}
