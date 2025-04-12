import { StoicQuote } from "../interfaces/StoicQuote";

// https://github.com/tlcheah2/stoic-quote-lambda-public-api?tab=readme-ov-file
export async function getStoicQuote() {
	const response = await fetch("https://stoic.tekloon.net/stoic-quote");
	const rawData = await response.json();
	const data = (rawData as { data: StoicQuote }).data;
	console.log(data);
	return data;
}