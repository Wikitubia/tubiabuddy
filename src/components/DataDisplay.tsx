interface DataDisplayProps {
	label: string
	contents: string
}

export default function DataDisplay(props: DataDisplayProps) {
	const { label, contents } = props;
	const newLabel = label.replaceAll(" ", "_");
	const copytarget = newLabel.concat("-copytarget");

	return (
		<div className="data-display-container">
			<div className="data-display-label-container">
				<div className="data-display-label" id={ newLabel }>{ label }</div>
				{/* <button className="data-display-copy-button" data-copytarget={ copytarget }><img src="/assets/icons/clipboard-regular-full.svg" /></button> */}
			</div>
			<div className="data-display" id={ copytarget } aria-labelledby={ newLabel }>{ contents }</div>
		</div>
	)
}
