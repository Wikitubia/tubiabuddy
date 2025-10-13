import { Log, YouTubeChannelURLTypes } from "src/util";

export const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

export class ChannelPageMetadata {
	static #instance: ChannelPageMetadata
	private static channelURL: URL

	private constructor() {
		(currentTab?.url) ? ChannelPageMetadata.channelURL = new URL(currentTab.url) : Log.error("Can't find tab URL!") ;
	}

	public static get instance(): ChannelPageMetadata {
		if (!ChannelPageMetadata.#instance) ChannelPageMetadata.#instance = new ChannelPageMetadata();
		return ChannelPageMetadata.#instance
	}

	public getChannelType(): YouTubeChannelURLTypes {
		const path = ChannelPageMetadata.channelURL.pathname;
		if (path.startsWith("/@")) return YouTubeChannelURLTypes.At
		if (path.startsWith("/user/")) return YouTubeChannelURLTypes.User
		if (path.startsWith("/channel/")) return YouTubeChannelURLTypes.Channel
		return YouTubeChannelURLTypes.At
	}

	public getChannelURL(): URL {
		return ChannelPageMetadata.channelURL
	}
}
