import { currentView } from "src/popup"
import { Views } from "src/util"
import { HomeIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import type { TargetedMouseEvent } from "preact"

interface MenuBarProps { }

function handleIconClick(event: TargetedMouseEvent<HTMLButtonElement>) {
	(currentView.value === Views.Main) ? currentView.value = Views.Settings : currentView.value = Views.Main
}

const settingsButton = (
	<button className="icon-button" onClick={ handleIconClick }>
		<Cog6ToothIcon width="20px" />
	</button>
)

const homeButton = (
	<button className="icon-button" onClick={ handleIconClick }>
		<HomeIcon width="20px" />
	</button>
)

export default function MenuBar(props: MenuBarProps) {
	function switchBtn(val: Views) {
		if (val === Views.Main) return settingsButton
		if (val === Views.Settings) return homeButton
	}
	return (
		<div id="menu-bar">
			<div className="github-icon">
				<a href="https://github.com/Wikitubia/tubiabuddy" target="_blank">
					<img src="/assets/icons/github-alt-brands-solid-full.svg" />
				</a>
			</div>
			{ switchBtn(currentView.value) }
		</div>
	)
}
