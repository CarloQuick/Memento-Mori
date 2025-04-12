import * as vscode from 'vscode';
import { StoicQuote } from './interfaces/StoicQuote';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('memento-mori.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from Memento Mori!');
	});

	context.subscriptions.push(disposable);
}
export function deactivate() {}
