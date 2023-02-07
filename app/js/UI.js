export class UI {
	UiSelectors = {
		// stats
		cashAmount: '[data-money]',
		profitAmount: '[data-profit]',
		levelAmount: '[data-level]',

		// resources
		siliconAmount: '[data-silicon-amount]',
		copperAmount: '[data-copper-amount]',
		goldAmount: '[data-gold-amount]',
		circuitAmount: '[data-circuit-amount]',
		circuitBoardAmount: '[data-circuit-board-amount]',
		componentAmount: '[data-component-amount]',
		pcAmount: '[data-pc-amount]',

		// info-panel
		siliconProfitInfo: '[data-silicon-profit-info]',
		siliconWorkerInfo: '[data-silicon-worker-info>]',
		siliconLevelInfo: '[data-silicon-level-info]',

		copperProfitInfo: '[data-copper-profit-info]',
		copperWorkerInfo: '[data-copper-worker-info>]',
		copperLevelInfo: '[data-copper-level-info]',

		goldProfitInfo: '[data-gold-profit-info]',
		goldWorkerInfo: '[data-gold-worker-info>]',
		goldLevelInfo: '[data-gold-level-info]',

		circuitProfitInfo: '[data-circuit-profit-info]',
		circuitWorkerInfo: '[data-circuit-worker-info>]',
		circuitLevelInfo: '[data-circuit-level-info]',

		circuitBoardProfitInfo: '[data-circuit-board-profit-info]',
		circuitBoardWorkerInfo: '[data-circuit-board-worker-info>]',
		circuitBoardLevelInfo: '[data-circuit-board-level-info]',

		componentProfitInfo: '[data-component-profit-info]',
		componentWorkerInfo: '[data-component-worker-info>]',
		componentLevelInfo: '[data-component-level-info]',

		pcProfitInfo: '[data-pc-profit-info]',
		pcWorkerInfo: '[data-pc-worker-info>]',
		pcLevelInfo: '[data-pc-level-info]',

		storeProfitInfo: '[data-store-profit-info]',
		storeWorkerInfo: '[data-store-worker-info>]',
		storeLevelInfo: '[data-store-level-info]',


		// upgrade prices
		siliconUpgradePriceInfo: '[data-silicon-price-info]',
		siliconWorkerPriceInfo: '[data-silicon-worker-price-info]',

		copperUpgradePriceInfo: '[data-copper-price-info]',
		copperWorkerPriceInfo: '[data-copper-worker-price-info]',

		goldUpgradePriceInfo: '[data-gold-price-info]',
		goldWorkerPriceInfo: '[data-gold-worker-price-info]',

		circuitUpgradePriceInfo: '[data-circuit-price-info]',
		circuitWorkerPriceInfo: '[data-circuit-worker-price-info]',

		circuitBoardUpgradePriceInfo: '[data-circuit-board-price-info]',
		circuitBoardWorkerPriceInfo: '[data-circuit-board-worker-price-info]',

		componentBoardUpgradePriceInfo: '[data-component-price-info]',
		componentBoardWorkerPriceInfo: '[data-component-worker-price-info]',

		pcUpgradePriceInfo: '[data-pc-price-info]',
		pcWorkerPriceInfo: '[data-pc-worker-price-info]',

		storeUpgradePriceInfo: '[data-store-price-info]',
		storeWorkerPriceInfo: '[data-store-worker-price-info]',

		// buttons
		siliconMiningButton: '[data-silicon-mining-button]',
		siliconWorkerButton: '[data-silicon-worker-button]',
		siliconUpgradeButton: '[data-silicon-upgrade-button]',

		copperMiningButton: '[data-copper-mining-button]',
		copperWorkerButton: '[data-copper-worker-button]',
		copperUpgradeButton: '[data-copper-upgrade-button]',

		goldMiningButton: '[data-gold-mining-button]',
		goldWorkerButton: '[data-gold-worker-button]',
		goldUpgradeButton: '[data-gold-upgrade-button]',

		circuitMiningButton: '[data-circuit-mining-button]',
		circuitWorkerButton: '[data-circuit-worker-button]',
		circuitUpgradeButton: '[data-circuit-upgrade-button]',

		circuitBoardMiningButton: '[data-circuit-board-mining-button]',
		circuitBoardWorkerButton: '[data-circuit-board-worker-button]',
		circuitBoardUpgradeButton: '[data-circuit-board-upgrade-button]',

		componentMiningButton: '[data-component-mining-button]',
		componentWorkerButton: '[data-component-worker-button]',
		componentUpgradeButton: '[data-component-upgrade-button]',

		pcMiningButton: '[data-pc-mining-button]',
		pcWorkerButton: '[data-pc-worker-button]',
		pcUpgradeButton: '[data-pc-upgrade-button]',

		storeWorkerButton: '[data-store-worker-button]',
		storeUpgradeButton: '[data-store-upgrade-button]',

		storeSellButton: '[data-store-sell-button]',
	};

	getElement(selector) {
		return document.querySelector(selector);
	}
}