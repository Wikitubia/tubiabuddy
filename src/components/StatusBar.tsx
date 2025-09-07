import { Status } from "src/popup";
import { Links } from "../util";

/**
 * The bottom status bar that houses the bug report link, alongside the live Status of the extension
 *
 * @export
 */
export default function StatusBar() {
	return <footer>
		<div className="bug-report">{ chrome.i18n.getMessage("footer_report_bugs") } <a className="bug-report-link" href={ Links.GitHubIssues } target="_blank">GitHub</a></div>
		<div className="status-text">{ Status }</div>
	</footer>
}
