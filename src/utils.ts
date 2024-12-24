export function formatBRL(value: string | number) {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(value));
}

export function formatNumber(value: string | number) {
  return isNaN(value as number) ? `${value}`.replace(",", ".") : value;
}
