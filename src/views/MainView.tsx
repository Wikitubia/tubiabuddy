import DataDisplay from "src/components/DataDisplay";
import MainLayout from "src/layouts/MainLayout";
import { ChannelPageMetadata } from "src/scripts/main";

interface MainViewProps { }

const channelMeta = ChannelPageMetadata.instance;

export default function MainView(props: MainViewProps) {
	return (
		<MainLayout>
			<DataDisplay label="URL" contents={ channelMeta.getChannelURL().toString() } />
			<DataDisplay label="URL type" contents={ channelMeta.getChannelType() } />
		</MainLayout>
	)
}
