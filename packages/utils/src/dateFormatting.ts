export function formatDateToDDMMYYYY(isoDate: string): string {
    const date = new Date(isoDate);

    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}