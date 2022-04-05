const storeButton = document.querySelectorAll('.buyStore');
const upgradeStoreButton = document.querySelectorAll('.upgradeStore');

let madridStore;
let warsawStore;

const buyStoreInMadrid = () => {
    madridStore = new Shop('Madryt', 30, 10, 1, 10);   
    madridStore.showProfit();
}

const buyStoreInWarsaw =  () => {
    warsawStore = new Shop('Warszawa', 60, 20, 1, 20);
    warsawStore.showProfit();
}

const upgradeStoreInMadrid = () => {
    madridStore.upgradeStore();
    madridStore.showProfit();
}

const upgradeStoreInWarsaw = () => {
    warsawStore.upgradeStore();
    warsawStore.showProfit();
}

storeButton.forEach(item  => {
    item.addEventListener('click', ({ target }) => {
        const locate = target.dataset.name;

        target.setAttribute('disabled', true);
        target.nextElementSibling.removeAttribute('disabled');

        switch(locate) {
            case 'Madrid': 
                buyStoreInMadrid();
                break;
            case 'Warsaw':
                buyStoreInWarsaw();
                break;
        }
    })
});

upgradeStoreButton.forEach(item  => {
    item.addEventListener('click', (item) => {
        const locate = item.target.dataset.name;
       
        switch(locate) {
            case 'Madrid': 
                upgradeStoreInMadrid();
                break;
            case 'Warsaw':
                upgradeStoreInWarsaw();
                break;
        }
    })
});

class Shop {
    constructor(locate, profit, increase, level, upgradePrice) {
        this.locate = locate;
        this.profit = profit;
        this.increase = increase;
        this.level = level;
        this.upgradePrice = upgradePrice;
    }

    showProfit() {
        console.log(`
            Sklep: ${this.locate}. 
            Dochód: ${this.profit}$. 
            Poziom: ${this.level}. 
            Koszt upgradu: ${this.upgradePrice}
        `);
    }

    upgradeStore() {
        this.level = this.level + 1;
        this.profit = this.profit + this.increase;
        this.upgradePrice = this.upgradePrice * 1.3;
    }
};

/*

    klasa User (albo inna) przechowująca zawartość portfela gracza

*/


