/**
 * incredible type hack
 */

import enLocaleFile from "src/_locales/en/messages.json"

declare global {
	namespace chrome {
		namespace i18n {
			/**
			 * Gets the localized string for the specified message.
			 *
			 * If the message is missing, this method returns an empty string (''). If the format of the getMessage() call is wrong — for example, messageName is not a string or the substitutions array has more than 9 elements — this method returns undefined.
			 * @param messageName _This parameter has been augmented with type declarations for translation keys_
			 *
			 * The name of the message, as specified in the messages.json file.
			 * @param substitutions Optional. Up to 9 substitution strings, if the message requires any.
			 */
			function getMessage(messageName: keyof typeof enLocaleFile, substitutions?: string | string[]): string
		}
	}
}
