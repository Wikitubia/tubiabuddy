import { copyText } from "../util";

interface DataBoxComponentProps {
	/** The label of the DataBox, describing what the result is */
	label: string
	/** The value of the DataBox */
	result: string
}

/**
 * A component used for displaying channel metadata
 *
 * @export
 * @param {DataBoxComponentProps} props
 */
export default function Databox(props: DataBoxComponentProps) {
	const { label, result } = props;

	return <div className="databox">
		<div className="databox-label" data-label={ label.replaceAll(" ", "_") }>{ label } </div>
		<pre className="databox-result" onClick={ () => copyText(result) } title={ chrome.i18n.getMessage("copy_to_clipboard") }>{ result }</pre>
	</div>
}
