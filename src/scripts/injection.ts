import { Log, type InjectReturnResult } from "src/util";
import { currentTab } from "./main";

export class InjectionHandler {
	static #instance: InjectionHandler

	private constructor() {

	}

	public static get instance(): InjectionHandler {
		if (!InjectionHandler.#instance) InjectionHandler.#instance = new InjectionHandler();
		return InjectionHandler.#instance
	}

	private static async inject() {
		return chrome.scripting.executeScript<[], InjectReturnResult>({
			target: {
				tabId: currentTab?.id!,
			},
			files: ["/out/inject.js"],
			world: 'ISOLATED'
		})
	}

	public static async getInjectionResult() {
		const rawInjectionResult = await this.inject();
		const pureInjectionResult: InjectReturnResult | undefined = rawInjectionResult[0]?.result
		if (!pureInjectionResult) Log.error("Injection failed!")
	}
}
