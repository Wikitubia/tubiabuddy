interface HeaderComponentProps { }

/**
 * The header that gets placed on top of all views
 *
 * @export
 * @param {HeaderComponentProps} props
 */
export default function Header(props: HeaderComponentProps) {
	return <>
		<h1 class="no-select">TubiaBuddy</h1>
		<hr />
	</>
}
