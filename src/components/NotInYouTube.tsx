import { ButtonTypes, Links } from "src/util";
import Button from "./Button";

/**
 * Component to show when not in YouTube
 *
 * TODO: move to `views` folder
 *
 * @export
 */
export default function NotInYouTube() {
	return <div className="not-in-youtube">
		<p>
			<b>{ chrome.i18n.getMessage("not_in_youtube_title") }</b>
			<br />
		</p>
		<p>
			{ chrome.i18n.getMessage("not_in_youtube_desc") }
		</p>
		<Button type={ ButtonTypes.Link } link={ Links.YouTube }>{ chrome.i18n.getMessage("open_youtube") }</Button>
	</div>
}
