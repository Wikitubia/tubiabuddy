import { type InjectReturnResult } from "./util";

declare let result: Partial<InjectReturnResult>;

const enum ElementSelectors {
	ChannelName = "h1.dynamicTextViewModelH1 > span[role=\"text\"]",
	ChannelVideoCount = "#page-header > yt-page-header-renderer > yt-page-header-view-model div.yt-page-header-view-model__page-header-headline yt-content-metadata-view-model > div:nth-child(3) > span:nth-child(3) > span",
	// ChannelJoinDate = "#additional-info-container > table > tbody > tr:nth-child(5) > td:nth-child(2) > yt-attributed-string > span > span"
}

console.debug("[inject] TubiaBuddy successfully injected!");

console.debug("[inject] Getting page contents");

result = {
	channelDisplayName: (document.querySelector(ElementSelectors.ChannelName) as HTMLSpanElement)?.innerText,
	// channelVidCount: (document.querySelector(ElementSelectors.ChannelVideoCount) as HTMLSpanElement)?.innerText.split(" ")[0]!,
	// channelJoinDate: (document.querySelector(ElementSelectors.ChannelJoinDate) as HTMLSpanElement)?.innerText.split("Joined ")[1]
};

console.debug(JSON.stringify(result));

result;
