import { signal } from "@preact/signals";
import { createContext, render } from "preact";
import { useContext } from "preact/hooks";

import { Log } from "./util";

import Header from "src/components/Header";
import Main from "src/components/Main";
import NotInChannelPage from "src/components/NotInChannelPage";
import NotInYouTube from "src/components/NotInYouTube";
import StatusBar from "src/components/StatusBar";

Log.success("Popup loaded!");

const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
if (!tab) { Log.error("[popup] Tab not found! This shouldn't happen", new Error("Tab not found!")) };

export const YouTubeURL = createContext(new URL(tab!.url!));
export const ChromeTab = createContext(tab!);
export const Status = signal(chrome.i18n.getMessage("status_ready"));

export function App() {
	const ytUrl = useContext(YouTubeURL);

	/**
	 * Checks if the given URL is a valid location for execution
	 *
	 * @param {URL} url The URL to process
	 * @returns {boolean}
	 */
	function isValidLocation(url: URL): boolean {
		return (
			url.hostname.includes("youtube.com")
		) ? (
			Log.debug("[popup] In YT"),
			true
		) : (
			Log.debug("[popup] Not in YT"),
			false
		)
	}

	/**
	 * Checks if the given URL is a valid channel page
	 *
	 * @param {URL} url The URL to process
	 * @returns {boolean}
	 */
	function isInChannelPage(url: URL): boolean {
		return (
			// TODO: centralize + cache this operation
			url.pathname.startsWith("/@")
			|| url.pathname.startsWith("/channel/")
			|| url.pathname.startsWith("/user/")
		) ? (
			Log.debug("[popup] In channel page"),
			true
		) : (
			Log.debug("[popup] Not in channel page"),
			false
		)
	}

	Log.debug(`[popup] url: ${ytUrl}`);

	return <>
		<Header />
		<YouTubeURL.Provider value={ new URL(tab!.url!) }>
			{
				// TODO: do this better
				(isValidLocation(ytUrl))
					? (isInChannelPage(ytUrl)
						? <Main />
						: <NotInChannelPage />
					)
					: <NotInYouTube />
			}
		</YouTubeURL.Provider>
		<StatusBar />
	</>
}

render(<App />, document.body);
