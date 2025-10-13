import type { ComponentChildren } from "preact"
import Heading from "src/components/Heading"

interface MainLayoutProps {
	children: ComponentChildren
}

export default function MainLayout(props: MainLayoutProps) {
	return (
		<>
			<Heading />
			<div id="content">{props.children}</div>
		</>
	)
}
