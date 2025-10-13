import MenuBar from "./MenuBar";

interface HeadingProps { }

export default function Heading(props: HeadingProps) {
	return (
		<div id="heading">
			<MenuBar />
			<h1>TubiaBuddy</h1>
			<hr />
		</div>
	)
}
