export const convertUnitToDay = (consumables: string): number | null => {
    // Verifica se a string contém unidades de tempo válidas
    if (
        typeof consumables === 'string' &&
        (consumables.includes('months') ||
            consumables.includes('years') ||
            consumables.includes('year') ||
            consumables.includes('month') ||
            consumables.includes('week') ||
            consumables.includes('days'))
    ) {
        const match = consumables.match(/^(\d+)\s+(months?|years?|year?|week?|days?)$/i);

        if (match) {
            const value = parseInt(match[1]); // Extrai o valor (número de meses, anos, semanas ou dias)
            const unit = match[2].toLowerCase(); // Extrai a unidade e converte para minúsculas

            let days: number;
            switch (unit) {
                case 'months':
                case 'month':
                    days = value * 30; // Converte meses para dias (30 dias por mês)
                    break;
                case 'years':
                case 'year':
                    days = value * 365; // Converte anos para dias (365 dias por ano)
                    break;
                case 'weeks':
                case 'week':
                    days = value * 7; // Converte semanas para dias (7 dias por semana)
                    break;
                case 'days':
                case 'day':
                    days = value; // Os dias já estão na unidade correta
                    break;
                default:
                    return null; // Retorna null para unidades de tempo desconhecidas
            }

            return days;
        }
    }
    return null; // Retorna null para strings com formatos inválidos
}