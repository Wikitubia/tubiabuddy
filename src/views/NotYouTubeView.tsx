import MainLayout from "src/layouts/MainLayout";

interface NotYouTubeViewProps { }

export default function NotYouTubeView(props: NotYouTubeViewProps) {
	return (
		<MainLayout>
			<h1>{ chrome.i18n.getMessage("not_in_youtube_title") }</h1>
			<p>{ chrome.i18n.getMessage("not_in_youtube_desc") }</p>
		</MainLayout>
	)
}
