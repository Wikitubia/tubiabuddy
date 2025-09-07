import type { ComponentChildren } from "preact"
import { Log } from "src/util";

interface ErrorComponentProps {
	/** The origin of the error. Preferably the name of the operation/script/module/component/file that logged this (in that order) */
	origin?: string
	children: ComponentChildren
}

/**
 * An error component that will display a scary red block when invoked. Will also log an error through `Log.error`
 *
 * @export
 * @param {ErrorComponentProps} props
 */
export default function Error(props: ErrorComponentProps) {
	const { origin, children } = props;

	Log.error(`[${origin}] (visible) Error: ${children}`);

	return <div class="error">{ (origin) ? `[${origin}]` : null } Error: { children }</div>
}
