'use strict';

import * as Path from 'path';
import * as VSC from 'vscode';
import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;
let diagnosticCollection: VSC.DiagnosticCollection;

const inlineErrorDecorationType = VSC.window.createTextEditorDecorationType({
    isWholeLine: true
});

export function activate(ctx: VSC.ExtensionContext) {
    const serverModulePath = ctx.asAbsolutePath(Path.join('dist', 'server.js'));
    const debugOptions = { execArgv: ['--nolazy', '--inspect=5858'] };

    const serverOptions: ServerOptions = {
        run: { module: serverModulePath, transport: TransportKind.ipc },
        debug: {
            module: serverModulePath,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    const clientOptions: LanguageClientOptions = {
        documentSelector: [{ scheme: 'file', language: 'amxxpawn' }],
        synchronize: {
            configurationSection: 'amxxpawn',
            fileEvents: VSC.workspace.createFileSystemWatcher('**/*.{sma,inc}')
        },
        initializationOptions: {
            globalStoragePath: ctx.globalStorageUri.fsPath
        }
    };

    client = new LanguageClient(
        'amxxpawn',
        'AMXXPawn Language Service',
        serverOptions,
        clientOptions
    );

    client.start();

    diagnosticCollection = VSC.languages.createDiagnosticCollection('amxxpawn');

    VSC.workspace.onDidChangeTextDocument(onDidChangeTextDocument);

    ctx.subscriptions.push(
        client,
        diagnosticCollection
    );
}

function onDidChangeTextDocument(ev: VSC.TextDocumentChangeEvent) {
    diagnosticCollection.delete(ev.document.uri);
    VSC.window.visibleTextEditors.forEach(e => {
        if (e.document.uri.fsPath === ev.document.uri.fsPath) {
            e.setDecorations(inlineErrorDecorationType, []);
        }
    });
}

export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return undefined;
    }

    return client.stop();
}
