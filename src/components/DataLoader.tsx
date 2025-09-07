import type { JSXInternal } from "node_modules/preact/src/jsx";
import { useContext } from "preact/hooks";
import InjectionScript from "src/inject";
import { ChromeTab, Status, YouTubeURL } from "src/popup";
import { Links, YouTubeChannelURLTypes, type CommonChannelMetadata } from "src/util";
import Databox from "./DataBox";
import { HideLoader } from "./Loading";

interface DataLoaderComponentProps { }

/**
 * Loads the injection script to the given `tab`
 *
 * TODO: populate + use this
 *
 * @param {chrome.tabs.Tab} tab The tab
 */
function loadScript(tab: chrome.tabs.Tab) {

}

/**
 * Gets the type of the URL that the channel currently uses
 *
 * @param {URL} url The URL to process
 * @returns {YouTubeChannelURLTypes}
 */
function getChannelURLType(url: URL): YouTubeChannelURLTypes {
	if (url.pathname.startsWith(YouTubeChannelURLTypes.User)) return YouTubeChannelURLTypes.User
	if (url.pathname.startsWith(YouTubeChannelURLTypes.Channel)) return YouTubeChannelURLTypes.Channel
	if (url.pathname.startsWith(YouTubeChannelURLTypes.At)) return YouTubeChannelURLTypes.At
	return YouTubeChannelURLTypes.At
}

/**
 * Gets the raw URL of the channel without other path items
 *
 * ? Should the return value be string or a new URL?
 *
 * @param {URL} url The URL to process
 * @param {YouTubeChannelURLTypes} channelURLType The URL type that's been given in the `url` parameter
 * @returns {string} The string representation of the URL given
 */
function getChannelURL(url: URL, channelURLType: YouTubeChannelURLTypes): string {
	switch (channelURLType) {
		case YouTubeChannelURLTypes.User:
		case YouTubeChannelURLTypes.Channel:
			return Links.YouTube.concat(`/${url.pathname.split("/")[2]}`)
		case YouTubeChannelURLTypes.At:
			return Links.YouTube.concat(`/${url.pathname.split("/")[1]}`)
	}
}

/**
 * Helper function to create DataBoxes
 *
 * @param {string} label The label of the DataBox
 * @param {string} result The result of the DataBox
 */
function createDataBox(label: string, result: string) {
	return <Databox label={ label } result={ result } />
}

/**
 * The output of all the processing in this component, composed of DataBoxes
 *
 * @type {JSXInternal.Element[]}
 */
const componentOutput: JSXInternal.Element[] = [];
// const tab = useContext(ChromeTab);

// isn't really necessary, mostly used so that we can directly iterate KVs to databox
const channelMeta = new Map<string, string>();

/**
 * Processor component that returns an array of DataBoxes when done
 *
 * @export
 * @param {DataLoaderComponentProps} props
 */
export default function DataLoader(props: DataLoaderComponentProps) {
	const url = useContext(YouTubeURL);
	const channelURLType = getChannelURLType(url);
	const channelURL = getChannelURL(url, channelURLType);

	channelMeta.set(chrome.i18n.getMessage("databox_channel_url_type"), channelURLType);
	channelMeta.set(chrome.i18n.getMessage("databox_channel_url"), channelURL);
	// channelMeta.set("channelJoinDate", getChannelJoinDate());
	// channelMeta.set("channelLinks", getChannelLinks());
	// channelMeta.set("channelLocation", getChannelLocation());
	// channelMeta.set("channelDispplayName", getChannelName());
	// channelMeta.set("channelVidCount", getChannelVidCount());
	// channelMeta.set("channelSubCount", getChannelSubCount());

	// loadScript(tab);

	// iterate and push
	for (const [key, value] of channelMeta.entries()) {
		// if value is nullish, don't leave it empty
		componentOutput.push(
			createDataBox(key, value ?? chrome.i18n.getMessage("databox_unknown_value"))
		);
	}

	// set status and hide loader, truly the wonders of signals
	Status.value = chrome.i18n.getMessage("status_ready");
	HideLoader.value = true
	return componentOutput;
}
