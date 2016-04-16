/*---------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *---------------------------------------------------------------------------------------------*/
define("vs/workbench/node/pluginHostProcess.nls.fr", {
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
		"Format de nombre non valide",
		"Nom de propriété attendu",
		"Valeur attendue",
		"Signe des deux points attendu",
		"Valeur attendue",
		"Virgule attendue",
		"Valeur attendue",
		"Accolade fermante attendue",
		"Valeur attendue",
		"Virgule attendue",
		"Valeur attendue",
		"Crochet fermant attendu",
		"Valeur attendue",
		"Fin de contenu attendue",
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"Contrôle",
		"Maj",
		"Alt",
		"Commande",
		"Windows",
		"Ctrl",
		"Maj",
		"Alt",
		"Commande",
		"Windows",
	],
	"vs/base/common/severity": [
		"Erreur",
		"Avertissement",
		"Informations",
	],
	"vs/base/node/zip": [
		"{0} introuvable dans le zip.",
	],
	"vs/editor/common/config/defaultConfig": [
		"Contenu d\'éditeur",
	],
	"vs/editor/common/modes/modesRegistry": [
		"Texte brut",
	],
	"vs/editor/common/services/bulkEdit": [
		"Ces fichiers ont changé pendant ce temps : {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Ajoute des déclarations de langage.",
		"ID du langage.",
		"Alias de nom du langage.",
		"Extensions de fichier associées au langage.",
		"Noms de fichiers associés au langage.",
		"Modèles Glob de noms de fichiers associés au langage.",
		"Types MIME associés au langue.",
		"Expression régulière correspondant à la première ligne d\'un fichier du langage.",
		"Chemin relatif d\'un fichier contenant les options de configuration du langage.",
		"Valeur vide pour \'contributes.{0}\'",
		"la propriété \'{0}\' est obligatoire et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"la propriété \'{0}\' peut être omise et doit être de type \'string[]\'",
		"\'contributes.{0}\' non valide. Tableau attendu.",
	],
	"vs/editor/contrib/rename/common/rename": [
		"Aucun résultat.",
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
	"vs/platform/jsonschemas/common/jsonContributionRegistry": [
		"Décrit un fichier JSON à l\'aide d\'un schéma. Voir json-schema.org pour plus d\'infos.",
		"Identificateur unique du schéma.",
		"Schéma servant à la vérification de ce document ",
		"Titre descriptif de l\'élément",
		"Description longue de l\'élément. Utilisée dans les menus sensitifs et les suggestions.",
		"Valeur par défaut. Utilisée par les suggestions.",
		"Nombre qui doit diviser parfaitement la valeur actuelle (sans reste)",
		"Valeur numérique maximum, inclusive par défaut.",
		"Rend la propriété maximum exclusive.",
		"Valeur numérique minimum, inclusive par défaut.",
		"Rend la propriété minimum exclusive.",
		"Longueur maximum d\'une chaîne.",
		"Longueur minimum d\'une chaîne.",
		"Expression régulière à mettre en correspondance avec la chaîne. Elle n\'est pas implicitement ancrée.",
		"Pour les tableaux, uniquement quand les éléments sont définis comme tableau. S\'il s\'agit d\'un schéma, celui-ci valide les éléments après ceux spécifiés par le tableau d\'éléments. Si la valeur est false, les éléments supplémentaires entraînent l\'échec de la validation.",
		"Pour les tableaux. Peut être soit un schéma en fonction duquel valider chaque élément, soit un tableau de schémas en fonction duquel valider chaque élément dans l\'ordre (le premier schéma valide le premier élément, le deuxième schéma valide le deuxième élément, etc.).",
		"Nombre maximum d\'éléments pouvant figurer dans un tableau (inclusif).",
		"Nombre minimum d\'éléments pouvant figurer dans un tableau (inclusif).",
		"Si tous les éléments du tableau doivent être uniques. La valeur par défaut est false.",
		"Nombre maximum de propriétés d\'un objet (inclusif).",
		"Nombre minimum de propriétés d\'un objet (inclusif).",
		"Tableau de chaînes qui répertorie les noms de toutes les propriétés nécessaires sur cet objet.",
		"Schéma ou booléen. S\'il s\'agit d\'un schéma, il est utilisé pour valider toutes les propriétés non mises en correspondance par \'properties\' ou \'patternProperties\'. Si la valeur est false, les propriétés non mises en correspondance entraînent l\'échec du schéma.",
		"Non utilisé pour la validation. Placez ici les sous-schémas à référencer inline avec $ref",
		"Mappage des noms de propriété avec les schémas de chaque propriété.",
		"Mappage d\'expressions régulières sur les noms de propriété avec les schémas des propriétés correspondantes.",
		"Mappage des noms de propriétés à un tableau de noms de propriétés ou un schéma. Dans le cas d\'un tableau de noms de propriétés, la propriété nommée dans la clé est valide uniquement si les propriétés du tableau sont présentes dans l\'objet. Si la valeur est un schéma, celui-ci est uniquement appliqué à l\'objet si la propriété dans la clé existe sur l\'objet.",
		"Ensemble des valeurs littérales valides",
		"Chaîne d\'un des types de schéma de base (nombre, entier, Null, tableau, objet, booléen ou chaîne) ou tableau de chaînes spécifiant un sous-ensemble de ces types.",
		"Décrit le format attendu pour la valeur.",
		"Tableau de schémas qui doivent tous correspondre.",
		"Tableau de schémas dont au moins un doit correspondre.",
		"Tableau de schémas, dont exactement un doit correspondre.",
		"Schéma qui ne doit pas correspondre.",
	],
	"vs/platform/message/common/message": [
		"Fermer",
		"Annuler",
	],
	"vs/workbench/api/node/extHostMessageService": [
		"Fermer",
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
	],
	"vs/workbench/parts/extensions/common/extensions": [
		"Extensions",
	],
	"vs/workbench/parts/extensions/node/extensionsService": [
		"Extension non valide : package.json n\'est pas un fichier JSON.",
		"Extension non valide : non-correspondance du nom du manifeste.",
		"Extension non valide : non-correspondance de l\'éditeur du manifeste.",
		"Extension non valide : non-correspondance de la version du manifeste.",
		"Redémarrez Code avant de réinstaller {0}.",
		"Les informations relatives à la galerie sont manquantes",
		"Version compatible de {0} introuvable avec cette version de Code.",
		"Extension introuvable",
	]
});