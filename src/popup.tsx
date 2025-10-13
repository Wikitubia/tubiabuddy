import { signal } from "@preact/signals";
import { render } from "preact";

import { ChannelPageMetadata } from "./scripts/main";
import { Views } from "./util";

import MainView from "./views/MainView";
import NotYouTubeView from "./views/NotYouTubeView";
import SettingsView from "./views/SettingsView";

const channelMeta = ChannelPageMetadata.instance;
export const currentView = signal<Views>(Views.Main);

if (channelMeta.getChannelURL().origin.startsWith("https://www.youtube.com")) {
	currentView.value = Views.Main
} else {
	currentView.value = Views.NotInYouTube
};

function App() {
	switch (currentView.value) {
		case Views.Main:
			return <MainView />
		case Views.NotInYouTube:
			return <NotYouTubeView />
		case Views.Settings:
			return <SettingsView />
	}
}

render(<App />, document.body);
