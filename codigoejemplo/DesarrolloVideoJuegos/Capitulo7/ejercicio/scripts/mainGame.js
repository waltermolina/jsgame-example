var mainGame = {
    puntaje: 0,
    hi: 0,
    textoPuntaje: null,
    textoHi: null,
    velocidadFondo1: 0.5,
    velocidadFondo2: 0.6,
    velocidadFondo3: 1,
    
    preload: function preload() {
	},
    create: function create() {
        this.sonidoDisparo = game.add.audio('disparo');
        this.sonidoDisparo.allowMultiple = true;

        this.explosionDisparo = game.add.audio('explosion');
        this.explosionDisparo.allowMultiple = true;

        this.fondo1 = game.add.sprite(0, 0, 'fondo1');
        this.fondo2 = game.add.sprite(0, 0, 'fondo2');
        this.fondo3 = game.add.sprite(0, 0, 'fondo3');

        this.fondo4 = game.add.sprite(0, 0, 'fondo1');
        this.fondo5 = game.add.sprite(0, 0, 'fondo2');
        this.fondo6 = game.add.sprite(0, 0, 'fondo3');

        var estilo = { font: "60pt retroBits", fill: '#000000' };
        this.textoPuntaje = game.add.text(10, -30, this.puntaje, estilo);
        this.textoHi = game.add.text(300, -30, this.hi, estilo);

        var degradado = this.textoPuntaje.context.createLinearGradient(0, 0, 0, 70);
        degradado.addColorStop(0, "rgb(170,119,68)");
        degradado.addColorStop(1, "white");
        this.textoPuntaje.fill = degradado;

        var degradado = this.textoHi.context.createLinearGradient(0, 0, 0, 70);
        degradado.addColorStop(0, "rgb(170,119,68)");
        degradado.addColorStop(1, "white");
        this.textoHi.fill = degradado;

        this.jugador = game.add.sprite(0, 0, 'jugador');
        this.jugador.anchor.set(0.5);
        game.physics.enable(this.jugador, Phaser.Physics.ARCADE);

        this.bala = game.add.sprite(0, 0, 'bala');
        this.bala.anchor.set(0.5);
        game.physics.enable(this.bala, Phaser.Physics.ARCADE);
        this.bala.body.velocity.y -= 100;

        this.enemigos = game.add.physicsGroup();
        for (var i = 0; i < 10; i++) {
            var enemigo = this.enemigos.create(0, game.world.randomX, 'enemigo');
            enemigo.body.velocity.y = game.rnd.between(100, 200);
        }
    },
    update: function update() {
        this.textoPuntaje.text = this.puntaje;
        this.textoHi.text = 'HI:' + this.puntaje;
        this.actualizarFondo();

        if (game.input.mousePointer.isDown) {
            game.physics.arcade.moveToPointer(this.jugador, 200);
        }

        this.posicionBala(this.bala);
        this.enemigos.forEach(this.posicionEnemigos, this);
        game.physics.arcade.overlap(this.bala, this.enemigos, this.verificarColision, null, this);
    },

    verificarColision: function verificarColision(bala, enemigo) {
        enemigo.x = game.world.randomX;
        enemigo.y = 0;
        bala.x = this.jugador.x;
        bala.y = this.jugador.y;
        this.puntaje += 100;
        this.sonidoDisparo.play();
        this.explosionDisparo.play();
    },

    posicionEnemigos: function posicionEnemigos(enemigo) {
        if (enemigo.y > 480) {
            enemigo.y = 0;
            enemigo.x = game.world.randomX;;
        }
    },

    posicionBala: function posicionBala(bala) {
        if (bala.y < 0) {
            bala.y = this.jugador.y;
            bala.x = this.jugador.x;
            this.sonidoDisparo.play();
        }
    },
    
    actualizarFondo: function actualizarFondo() {
        this.fondo1.y += this.velocidadFondo1;
        this.fondo1.y = this.fondo1.y % 800;
        
        this.fondo2.y += this.velocidadFondo2;
        this.fondo2.y = this.fondo1.y % 800;
        
        this.fondo3.y += this.velocidadFondo3;
        this.fondo3.y = this.fondo3.y % 800;
        
        this.fondo4.y = this.fondo1.y - 800;
        this.fondo5.y = this.fondo2.y - 800;
        this.fondo6.y = this.fondo3.y - 800;
    }
};