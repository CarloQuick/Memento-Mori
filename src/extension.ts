import * as vscode from 'vscode';
import { getStoicQuote } from './lib/getStoicQuote';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('memento-mori.mementoMori', async () => {
		const quoteData = await getStoicQuote();
		const quote = quoteData.quote + " --" + quoteData.author;
		vscode.window.showInformationMessage(quote);
	});

	context.subscriptions.push(disposable);
}
export function deactivate() {}
