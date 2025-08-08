const satoshiToBTC = (satoshi: number) => {
	// 1 BTC = 100_000_000 satoshi
	return (satoshi / 100_000_000).toFixed(8);
};

export default satoshiToBTC;
