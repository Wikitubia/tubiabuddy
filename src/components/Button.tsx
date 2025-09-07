import type { ComponentChildren } from "preact";
import type { ButtonTypes } from "src/util";

interface ButtonComponentProps {
	children: ComponentChildren
	/** The type of operation that the Button will do */
	type: ButtonTypes
	/** The link that will be opened if activated. Requires `type` to be `ButtonTypes.Link` */
	link?: string | URL
}

/**
 * A button that'll do one of two things when clicked:
 * 1. Opens a new tab from the `link` given
 * 2. Nothing, tba.
 *
 * @export
 * @param {ButtonComponentProps} props
 */
export default function Button(props: ButtonComponentProps) {
	const { type, children, link } = props;

	const navigateToLink = () => {
		if (link) {
			const url = typeof link === "string" ? link : link.toString();
			window.open(url, '_blank')?.focus();
		}
	};

	return <button className={ type } onClick={ navigateToLink }>{ children }</button>
}
