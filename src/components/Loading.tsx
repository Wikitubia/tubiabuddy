import { Status } from "src/popup";
import { Signal, signal } from "@preact/signals";

interface LoadingComponentProps { }

/**
 * A boolean signal that will either hide the loader or not. Setting this to true will set `status_ready`
 *
 * @type {Signal}
 */
export const HideLoader: Signal = signal(false);

/**
 * A loader screen that can be hidden by other components.
 *
 * Will set the status to `status_await` when invoked
 *
 * @export
 * @param {LoadingComponentProps} props
 */
export default function Loading(props: LoadingComponentProps) {
	Status.value = chrome.i18n.getMessage('status_await');

	return (HideLoader)
		? (
			Status.value = chrome.i18n.getMessage("status_ready"),
			null
		)
		: <div id="loading-modal">
			<div className="spinner"></div>
			<div className="loading-modal-text">{ chrome.i18n.getMessage("loading") }</div>
		</div>
}
