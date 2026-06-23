namespace FactoryAbstract {
    interface Hamburger {
        prepare(): void;

    }

    interface Drink {
        pour(): void;
    }

    class ChickenBurger implements Hamburger {
        prepare(): void {
            console.log('Preparando hamburguesa de pollo');
        }
    }
    class BeefBurger implements Hamburger {
        prepare(): void {
            console.log('Preparando hamburguesa de res');
        }
    }

    class Cola implements Drink {
        pour(): void {
            console.log('Sirviendo cola');
        }
    }

    class Lemonade implements Drink {
        pour(): void {
            console.log('Sirviendo limonada');
        }
    }

    // Interface Factory
    interface ComboFactory {
        createHamburger(): Hamburger;
        createDrink(): Drink;
    }

    class FastFoodFactory implements ComboFactory {
        createHamburger(): Hamburger {
            return new BeefBurger();
        }
        createDrink(): Drink {
            return new Cola();
        }
    }

    class HealthyFactory implements ComboFactory {
        createHamburger(): Hamburger {
            return new ChickenBurger();
        }
        createDrink(): Drink {
            return new Lemonade();
        }
    }

    class restaurant {
        constructor(private factory: ComboFactory) {}

        orderCombo() {
            const hamburger = this.factory.createHamburger();
            const drink = this.factory.createDrink();

            hamburger.prepare();
            drink.pour();

            console.log('Combo listo para servir');
        }
    }

    function main(){
        let factory: ComboFactory;
        
        const comboType = prompt(
            '¿Qué tipo de combo deseas? (fastfood = 1 /healthy = 2)'
        );
        
        if (comboType === 'fastfood' || comboType === '1') {
            factory = new FastFoodFactory();
        } else {
            factory = new HealthyFactory();
        }

        const restarurant = new restaurant(factory);
        restarurant.orderCombo();
    }

    main();
}