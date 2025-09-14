/**
 * Component to show when not in a channel page
 *
 * TODO: move to `views` folder
 *
 * @export
 */
export default function NotInChannelPage() {
	return <div className="not-in-youtube">
		<p>
			<b>{ chrome.i18n.getMessage("not_in_channel_page_title") }</b>
			<br />
		</p>
		<p>
			{ chrome.i18n.getMessage("not_in_channel_page_desc") }
		</p>
	</div>
}
