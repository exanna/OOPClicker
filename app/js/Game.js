import { UI } from './UI.js';

export class Game extends UI {

	buttons = {
		siliconMiningButton: null,
		siliconWorkerButton: null,
		siliconUpgradeButton: null,
		copperMiningButton: null,
		copperWorkerButton: null,
		copperUpgradeButton: null,
		goldMiningButton: null,
		goldWorkerButton: null,
		goldUpgradeButton: null,
		circuitMiningButton: null,
		circuitWorkerButton: null,
		circuitUpgradeButton: null,
		circuitBoardMiningButton: null,
		circuitBoardWorkerButton: null,
		circuitBoardUpgradeButton: null,
		componentMiningButton: null,
		componentWorkerButton: null,
		componentUpgradeButton: null,
		pcMiningButton: null,
		pcWorkerButton: null,
		pcUpgradeButton: null,
		storeWorkerButton: null,
		storeUpgradeButton: null,
		storeSellButton: null,
	};

	handleElements() {
		this.buttons.siliconMiningButton = this.getElement(this.UiSelectors.siliconMiningButton);
		this.buttons.siliconWorkerButton = this.getElement(this.UiSelectors.siliconWorkerButton);
		this.buttons.siliconUpgradeButton = this.getElement(this.UiSelectors.siliconUpgradeButton);
		this.buttons.copperMiningButton = this.getElement(this.UiSelectors.copperMiningButton);
		this.buttons.copperWorkerButton = this.getElement(this.UiSelectors.copperWorkerButton);
		this.buttons.copperUpgradeButton = this.getElement(this.UiSelectors.copperUpgradeButton);
		this.buttons.goldMiningButton = this.getElement(this.UiSelectors.goldMiningButton);
		this.buttons.goldWorkerButton = this.getElement(this.UiSelectors.goldWorkerButton);
		this.buttons.goldUpgradeButton = this.getElement(this.UiSelectors.goldUpgradeButton);
		this.buttons.circuitMiningButton = this.getElement(this.UiSelectors.circuitMiningButton);
		this.buttons.circuitWorkerButton = this.getElement(this.UiSelectors.circuitWorkerButton);
		this.buttons.circuitUpgradeButton = this.getElement(this.UiSelectors.circuitUpgradeButton);
		this.buttons.circuitBoardMiningButton = this.getElement(this.UiSelectors.circuitBoardMiningButton);
		this.buttons.circuitBoardWorkerButton = this.getElement(this.UiSelectors.circuitBoardWorkerButton);
		this.buttons.circuitBoardUpgradeButton = this.getElement(this.UiSelectors.circuitBoardUpgradeButton);
		this.buttons.componentMiningButton = this.getElement(this.UiSelectors.componentMiningButton);
		this.buttons.componentWorkerButton = this.getElement(this.UiSelectors.componentWorkerButton);
		this.buttons.componentUpgradeButton = this.getElement(this.UiSelectors.componentUpgradeButton);
		this.buttons.pcMiningButton = this.getElement(this.UiSelectors.pcMiningButton);
		this.buttons.pcWorkerButton = this.getElement(this.UiSelectors.pcWorkerButton);
		this.buttons.pcUpgradeButton = this.getElement(this.UiSelectors.pcUpgradeButton);
		this.buttons.storeWorkerButton = this.getElement(this.UiSelectors.storeWorkerButton);
		this.buttons.storeUpgradeButton = this.getElement(this.UiSelectors.storeUpgradeButton);
		this.buttons.storeSellButton = this.getElement(this.UiSelectors.storeSellButton);

	}

	init() {
		this.handleElements();

	}
}