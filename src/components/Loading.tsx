import { Status } from "src/popup";
import { Signal, signal } from "@preact/signals";
import { TailSpin } from "react-loader-spinner";

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

	const loaderElem = <div id="loading-modal">
		<TailSpin color="#ff0000" wrapperClass="spinner" width={ 40 } height={ 40 } />
		<div className="loading-modal-text">{ chrome.i18n.getMessage("loading") }</div>
	</div>

	return (HideLoader)
		? (
			Status.value = chrome.i18n.getMessage("status_ready"),
			null
		)
		: loaderElem
}
