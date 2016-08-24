/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.fr", {
	"vs/base/common/errors": [
		"{0}. Code d\'erreur : {1}",
		"Permission refusée (HTTP {0})",
		"Permission refusée",
		"{0} (HTTP {1} : {2})",
		"{0} (HTTP {1})",
		"Erreur de connexion inconnue ({0})",
		"Une erreur de connexion inconnue s\'est produite. Soit vous n\'êtes plus connecté à Internet, soit le serveur auquel vous êtes connecté est hors connexion.",
		"{0} : {1}",
		"Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.",
		"Une erreur système s\'est produite ({0})",
		"Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.",
		"{0} ({1} erreurs au total)",
		"Une erreur inconnue s’est produite. Veuillez consulter le journal pour plus de détails.",
		"Non implémenté",
		"Argument incorrect : {0}",
		"Argument incorrect",
		"État incorrect : {0}",
		"État incorrect",
		"Échec du chargement d\'un fichier requis. Soit vous n\'êtes plus connecté à Internet, soit le serveur auquel vous êtes connecté est hors connexion. Actualisez le navigateur pour réessayer.",
		"Échec du chargement d\'un fichier obligatoire. Redémarrez l\'application pour réessayer. Détails : {0}",
	],
	"vs/base/common/json": [
		"Symbole non valide",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"Fin de fichier attendue",
	],
	"vs/base/common/severity": [
		"Erreur",
		"Avertissement",
		"Informations",
	],
	"vs/editor/common/editorCommon": [
		"Move cursor to a logical position in the view",
		"Cursor move argument",
		"Argument containing mandatory \'to\' value and an optional \'inSelectionMode\' value. Value of \'to\' has to be a defined value in `CursorMoveViewPosition`.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Échec de l\'activation de l\'extension \'{1}\'. Raison : dépendance \'{0}\' inconnue.",
		"Échec de l\'activation de l\'extension \'{1}\'. Raison : échec de l\'activation de la dépendance \'{0}\'.",
		"Échec de l\'activation de l\'extension \'{0}\'. Raison : plus de 10 niveaux de dépendances (probablement une boucle de dépendance).",
		"Échec de l\'activation de l\'extension \'{0}\' : {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Description d\'extension vide obtenue",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'object\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise ou doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise ou doit être de type \'string[]\'",
		"les propriétés \'{0}\' et \'{1}\' doivent être toutes les deux spécifiées ou toutes les deux omises",
		"La propriété \'{0}\' peut être omise ou doit être de type \'string\'",
		"\'main\' ({0}) est censé être inclus dans le dossier ({1}) de l\'extension. Cela risque de rendre l\'extension non portable.",
		"les propriétés \'{0}\' et \'{1}\' doivent être toutes les deux spécifiées ou toutes les deux omises",
		"Nom d\'affichage de l\'extension utilisée dans la galerie VS Code.",
		"Catégories utilisées par la galerie VS Code pour catégoriser l\'extension.",
		"Bannière utilisée dans le marketplace VS Code.",
		"Couleur de la bannière de l\'en-tête de page du marketplace VS Code.",
		"Thème de couleur de la police utilisée dans la bannière.",
		"Éditeur de l\'extension VS Code.",
		"Événements d\'activation pour l\'extension VS Code.",
		"Dépendances à d\'autres extensions. L\'ID d\'une extension est toujours ${publisher}.${name}. Par exemple : vscode.csharp.",
		"Le script exécuté avant le package est publié en tant qu\'extension VS Code.",
		"Toutes les contributions de l\'extension VS Code représentées par ce package.",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Impossible d\'analyser la valeur {0} de \'engines.vscode\'. Utilisez, par exemple, ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x, etc.",
		"La version spécifiée dans \'engines.vscode\' ({0}) n\'est pas assez précise. Pour les versions de vscode antérieures à 1.0.0, définissez au minimum les versions majeure et mineure souhaitées. Par exemple : ^0.10.0, 0.10.x, 0.11.0, etc.",
		"La version spécifiée dans \'engines.vscode\' ({0}) n\'est pas assez précise. Pour les versions de vscode ultérieures à 1.0.0, définissez au minimum la version majeure souhaitée. Par exemple : ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.",
		"L\'extension n\'est pas compatible avec le code {0}. L\'extension nécessite {1}.",
		"La version de l\'extension n\'est pas compatible avec SemVer.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Remplacement de l\'extension {0} par {1}.",
		"Chargement de l\'extension de développement sur {0}",
		"Remplacement de l\'extension {0} par {1}.",
		"Le chemin {0} ne pointe pas vers un Test Runner d\'extension valide.",
	],
	"vs/workbench/node/extensionPoints": [
		"Échec de l\'analyse de {0} : {1}.",
		"Impossible de lire le fichier {0} : {1}.",
		"Échec de l\'analyse de {0} : {1}.",
		"Impossible de lire le fichier {0} : {1}.",
		"Le message est introuvable pour la clé {0}.",
	]
});