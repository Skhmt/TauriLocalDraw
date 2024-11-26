export function getTimestamp(): string {
	// adds a leading zero to two-digit numbers
	const twoD = (x: number) => x.toString().padStart(2, '0');

	const d = new Date();
	const date = `${d.getFullYear()}-${twoD(d.getMonth() + 1)}-${twoD(d.getDate())}`;
	const time = `${twoD(d.getHours())}-${twoD(d.getMinutes())}-${twoD(d.getSeconds())}`;
	return `${date}_${time}`;
}