export default async function updateTaxInfo(username, country, taxInfoNo) {
	let reqBody = {
		username,
		country,
		taxInfoNo,
	};
	try {
		let responseJson;
		let response = await fetch("/api/tax-info", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(reqBody),
		});
		if (!response.ok) {
			throw Error();
		}
		responseJson = await response.json();
		console.log(`response from server is scuss`);
		console.log(responseJson);
		return responseJson;
	} catch (err) {
		throw Error();
	}
}
