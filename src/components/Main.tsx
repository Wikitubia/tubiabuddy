import { Status } from "src/popup";
import Loading from "./Loading";
import DataLoader from "./DataLoader";

interface MainComponentProps { }

/**
 * The main component that houses much of the logic after the popup has been opened
 *
 * @export
 * @param {MainComponentProps} props 
 */
export default function Main(props: MainComponentProps) {
	Status.value = chrome.i18n.getMessage("status_ready");

	return <main id="databoxList">
		<Loading />
		<DataLoader />
	</main>
};
