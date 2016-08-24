/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/sharedProcessMain.nls.it", {
	"vs/base/common/errors": [
		"{0}. Codice errore: {1}",
		"Autorizzazione negata (HTTP {0})",
		"Autorizzazione negata",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Errore di connessione sconosciuto ({0})",
		"Si è verificato un errore di connessione sconosciuto. La connessione a Internet è stata interrotta oppure il server al quale si è connessi è offline.",
		"{0}: {1}",
		"Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.",
		"Si è verificato un errore di sistema ({0})",
		"Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.",
		"{0} ({1} errori in totale)",
		"Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.",
		"Non implementato",
		"Argomento non valido: {0}",
		"Argomento non valido",
		"Stato non valido: {0}",
		"Stato non valido",
		"Non è stato possibile caricare un file obbligatorio. Non si è più connessi a Internet oppure il server a cui si è connessi è offline. Per riprovare, aggiornare il browser.",
		"Non è stato possibile caricare un file obbligatorio. Riavviare l\'applicazione e riprovare. Dettagli: {0}",
	],
	"vs/base/common/json": [
		"Simbolo non valido",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"È prevista la fine del file",
	],
	"vs/base/common/severity": [
		"Errore",
		"Avviso",
		"Informazioni",
	],
	"vs/base/node/zip": [
		"{0} non è stato trovato all\'interno del file ZIP.",
	],
	"vs/code/node/argv": [
		"Apre un editor diff. Richiede il passaggio di due percorsi di file come argomenti.",
		"Disabilita tutte le estensioni installate.",
		"Apre il file nel percorso e alla riga e colonna indicate (aggiunge :line[:column] al percorso).",
		"Impostazioni locali da usare, ad esempio en-US o it-IT.",
		"Forza una nuova istanza di Code.",
		"Start with the \'Developer: Startup Performance\' command enabled.",
		"Forza l\'apertura di un file o di una cartella nell\'ultima finestra attiva.",
		"Consente di specificare la directory in cui si trovano i dati utente. Utile quando viene eseguito come root.",
		"Visualizza l\'output dettagliato (implica --wait).",
		"Attende la chiusura della finestra prima della restituzione.",
		"Set the root path for extensions.",
		"Elenca le estensioni installate.",
		"Installa un\'estensione.",
		"Disinstalla un\'estensione.",
		"Visualizza la versione.",
		"Visualizza la sintassi.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Impostazioni di configurazione di contributes.",
		"Riepilogo delle impostazioni. Questa etichetta verrà usata nel file di impostazioni come commento di separazione.",
		"Descrizione delle proprietà di configurazione.",
		"se impostato, \'configuration.type\' deve essere impostato su \'object",
		"\'configuration.title\' deve essere una stringa",
		"\'configuration.properties\' deve essere un oggetto",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensions",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Extension invalid: package.json is not a JSON file.",
		"Extension invalid: manifest name mismatch.",
		"Extension invalid: manifest publisher mismatch.",
		"Extension invalid: manifest version mismatch.",
		"Riavviare Code prima di reinstallare {0}.",
		"Non è stata trovata una versione di {0} compatibile con questa versione di Visual Studio Code.",
		"Could not find extension",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"La descrizione dell\'estensione restituita è vuota",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `object`",
		"la proprietà `{0}` è obbligatoria e deve essere di tipo `string`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"la proprietà `{0}` può essere omessa o deve essere di tipo `string`",
		"Valore previsto di `main` ({0}) da includere nella cartella dell\'estensione ({1}). L\'estensione potrebbe non essere più portatile.",
		"le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi",
		"Nome visualizzato per l\'estensione usato nella raccolta di Visual Studio Code.",
		"Categorie usate dalla raccolta di Visual Studio Code per definire la categoria dell\'estensione.",
		"Banner usato nel marketplace di Visual Studio Code.",
		"Colore del banner nell\'intestazione pagina del marketplace di Visual Studio Code.",
		"Tema colori per il tipo di carattere usato nel banner.",
		"Editore dell\'estensione Visual Studio Code.",
		"Eventi di attivazione per l\'estensione Visual Studio Code.",
		"Dipendenze ad altre estensioni. L\'ID di un\'estensione è sempre ${publisher}.${name}. Ad esempio: vscode.csharp.",
		"Script eseguito prima che il pacchetto venga pubblicato come estensione Visual Studio Code.",
		"Tutti i contributi dell\'estensione Visual Studio Code rappresentati da questo pacchetto.",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Non è stato possibile analizzare il valore {0} di `engines.vscode`. Usare ad esempio: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x e così via.",
		"La versione specificata in `engines.vscode` ({0}) non è abbastanza specifica. Per le versioni di vscode precedenti alla 1.0.0, definire almeno le versioni principale e secondaria desiderate, ad esempio ^0.10.0, 0.10.x, 0.11.0 e così via.",
		"La versione specificata in `engines.vscode` ({0}) non è abbastanza specifica. Per le versioni di vscode successive alla 1.0.0, definire almeno la versione principale desiderata, ad esempio ^1.10.0, 1.10.x, 1.x.x, 2.x.x e così via.",
		"L\'estensione non è compatibile con Visual Studio Code {0}. Per l\'estensione è richiesto: {1}.",
		"La versione dell\'estensione non è compatibile con semver.",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft.",
	]
});