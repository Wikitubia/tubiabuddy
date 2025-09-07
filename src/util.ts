import logSymbols from "log-symbols";
import { Status } from "./popup";

/**
 * Promise-based execution delay. Nonblocking
 *
 * @export
 * @param {number} ms Duration to wait in miliseconds
 * @returns {Promise<any>} A promise to use `.then()`
 */
export function promiseDelay(ms: number): Promise<any> {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * All the static links used in the extension
 *
 * @constant
 */
export const Links = {
	GitHub: "https://github.com/Wikitubia/tubiabuddy",
	GitHubIssues: "https://github.com/Wikitubia/tubiabuddy/issues",
	YouTube: "https://www.youtube.com"
} as const;

/**
 * Logger functionality
 *
 * @export
 */
export const Log = {
	/**
	 * Simple prefixer for logs
	 *
	 * @returns {string} The current datetime in brackets
	 */
	prefix(): string {
		return `[${new Date().toISOString()}]`
	},

	/**
	 * Logs an informational message to the console
	 *
	 * @param {string} message The message to log
	 */
	info(message: string): void {
		console.info(
			`${this.prefix()} ${logSymbols.info} %c${message}`,
			'color: white'
		);
	},

	/**
	 * Logs an informational message to the console
	 *
	 * @param {string} message The message to log
	 */
	debug(message: string): void {
		console.debug(
			`${this.prefix()} %c${message}`,
			'color: gray'
		);
	},

	/**
	 * Logs a cautionary message to the console
	 *
	 * @param {string} message The message to log
	 */
	warn(message: string): void {
		console.log(
			`${this.prefix()} ${logSymbols.warning} %c${message}`,
			'color: yellow'
		);
	},

	/**
	 * Logs an error message to the console. If "Collect errors" option is turned on, this will also get recorded to the extension's error log
	 *
	 * @param {string} message The message to log
	 */
	error(message: string, err?: typeof Error | Error): void {
		console.log(
			`${this.prefix()} ${logSymbols.error} %c${message}`,
			'color: crimson'
		);
		// log actual error for trace
		(err) ? console.error(err) : null;
	},

	/**
	 * Logs a success message to the console
	 *
	 * @param {string} message The message to log
	 */
	success(message: string): void {
		console.log(
			`${this.prefix()} ${logSymbols.success} %c${message}`,
			'color: limegreen'
		);
	}
} as const;

/**
 * Simple copy-to-clipboard function with built-in status updating and logging
 *
 * @async
 * @param {string} str The string to copy
 * @returns {Promise<void>} Promise of the copy operation
 */
export const copyText = async (str: string): Promise<void> => {
	try {
		await navigator.clipboard.writeText(str);
	} catch (error) {
		if (Error.isError(error)) Log.error("[util] Failed to write to clipboard", error);
	}
	Log.debug("[util] Copied to clipboard");
	Status.value = chrome.i18n.getMessage("status_copied_to_clipboard");
	promiseDelay(1000).then(() => {
		Status.value = chrome.i18n.getMessage("status_ready");
	})
}

/**
 * Common channel metadata formed into a neat shape
 *
 * @export
 * @interface CommonChannelMetadata
 * @typedef {CommonChannelMetadata}
 */
export interface CommonChannelMetadata {
	/** The URL type of the channel
	 * @type {YouTubeChannelURLTypes} */
	channelUrlType: YouTubeChannelURLTypes
	/** The display name of the channel */
	channelDisplayName: string
	/** The video count of the channel */
	channelVidCount: number
	/** The URL of the channel */
	channelUrl: string
	/** The links in the channel's about section, if given */
	channelLinks: URL[] | null
	/** The location of the channel, if given */
	channelLocation: string | null
	// TODO: force this to a Date object...or Temporal if that gets rolled out
	/** The date the channel joined */
	channelJoinDate: string
	// ? If we can't get an accurate count, should we use a string that just reads the text from the channel page?
	/** The number of subscribers the channel has */
	channelSubCount: number
}

/**
 * Will be expanded in the future
 *
 * @export
 * @interface InjectReturnResult
 * @typedef {InjectReturnResult}
 * @extends {CommonChannelMetadata}
 */
export interface InjectReturnResult extends CommonChannelMetadata { }

/**
 * The types of buttons that'll be used
 *
 * @export
 * @enum {number}
 */
export const enum ButtonTypes {
	/** The button acts as a link that'll open a new tab after activation */
	Link = "button-link",
	/** The button will execute an action after activation */
	Action = "button-action"
}

/**
 * The three URL types that YouTube uses to identify channels. While User and Channel URL types are rare, they're still used, and still work
 *
 * TODO: figure out a better way to do this
 *
 * @export
 * @enum {number}
 */
export enum YouTubeChannelURLTypes {
	/** The URL type is `/user/`, and uses `Template:YouTuber` */
	User = "/user/ (Template:YouTuber)",
	Channel = "/channel/ (Template:YouTuber1)",
	At = "/@ (Template:YouTuber2)"
}
