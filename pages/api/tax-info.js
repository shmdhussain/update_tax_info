export default function updateTaxInfo(req, res) {
	let { username, country, taxInfo } = req.body;
	console.log(`from server username: ${username}`);
	console.log(`from server country: ${country}`);
	console.log(`from server taxInfo: ${taxInfo}`);
	if (username.includes("unknown")) {
		return res
			.status(401)
			.json({ code: 401, error: "failure in updating tax information" });
	} else {
		return res.status(200).json({
			success: true,
			data: {
				taxInfoUpdate: "success",
			},
		});
	}
}
