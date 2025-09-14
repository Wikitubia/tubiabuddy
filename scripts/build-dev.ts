console.log("Building developer output...")
Bun.build({
	entrypoints: [
		'src/popup.tsx',
		'src/inject.ts'
	],
	outdir: 'src/out',
	target: 'browser',
	sourcemap: 'inline'
}).then((output) => {
	if (output.success) {
		if (output.logs.length) {
			console.log("Build logs:");
			console.log(output.logs);
		}
	} else {
		console.error("Build failed! Logs:");
		console.log(output.logs)
	}
}).catch((reason) => {
	console.error("Build failed!");
	console.log(reason);
}).finally(() => {
	console.log("Build process exited");
});
