const validationUnixTime = (time: number) => {
	const date = new Date(time * 1000);
	const now = new Date();
	const isToday =
		date.getFullYear() === now.getFullYear() &&
		date.getMonth() === now.getMonth() &&
		date.getDate() === now.getDate();
	return isToday ? date.toLocaleTimeString() : date.toLocaleString();
};

export default validationUnixTime;
