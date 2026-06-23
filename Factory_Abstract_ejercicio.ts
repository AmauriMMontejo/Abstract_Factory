namespace FactoryAbstractEjercicio {
    interface arma {
        nombre(): void;
        municion(): void;
        daño(): void;
    }

    interface armadura {
        defensa(): void;
    }

    class raygun implements arma {
        nombre(): void {
            console.log('RayGun')
        }
        municion(): void {
            console.log('Municion plasma de alta energía');
        }
        daño(): void {
            console.log('Daño infinito');
        }
    }

    class Juggernogg implements armadura {
        defensa(): void {
            console.log('Perk-a-Cola Juggernogg: Aumenta la salud máxima del jugador');
        }
    }

    class EspadaEnergia implements arma {
        nombre(): void{
            console.log('Espada de energia');
        }
        municion(): void {
            console.log('Nucleo de energia');
        }
        daño(): void {
            console.log('Daño Critico');
        }
    }

    class armaduraMJOLNIR implements armadura {
        defensa(): void {
            console.log('Armadura MJOLNIR: Armadura de los Spartans');
        }
    }

    class Lancer implements arma {
        nombre(): void {
            console.log('Lancer')
        }
        municion(): void {
            console.log('Municion de fusil de asalto');
        }
        daño(): void {
            console.log('Daño moderado a medio rango');
        }
    }

    class armaduraCGO implements armadura {
        defensa(): void {
            console.log('Armadura de combate de la CGO: Armadura de los soldados de la CGO');
        }
    }

    interface EquipoFactory {
        createArma(): arma;
        createArmadura(): armadura;
    }

    class CodFactory implements EquipoFactory {
        createArma(): arma {
            return new raygun();
        }
        createArmadura(): armadura {
            return new Juggernogg();
        }
    }

    class HaloFactory implements EquipoFactory {
        createArma(): arma {
            return new EspadaEnergia();
        }
        createArmadura(): armadura {
            return new armaduraMJOLNIR();
        }
    }

    class GearsFactory implements EquipoFactory{
        createArma(): arma {
            return new Lancer();
        }
        createArmadura(): armadura {
            return new armaduraCGO();
        }
    }

    class juego {
        constructor(private factory: EquipoFactory) {}

        equipar() {
            const arma = this.factory.createArma();
            const armadura = this.factory.createArmadura();

            arma.nombre();
            arma.municion();
            arma.daño();
            armadura.defensa();

            console.log('Equipamiento completado con éxito: Arma y Armadura equipadas correctamente');
        }
    }

    function main() {
        let factory: EquipoFactory;

        const EquipoFactory = prompt('Ingrese el nombre del juego (Cod/1 o Halo/2 o Gears/3):');

        if (EquipoFactory === 'Cod' || EquipoFactory === '1') {
            factory = new CodFactory();
        }else if (EquipoFactory === 'Halo' || EquipoFactory === '2') {
            factory = new HaloFactory();
        }else{
            factory = new GearsFactory();
        }
        const Juego = new juego(factory);
        Juego.equipar();
    }

    main();
}