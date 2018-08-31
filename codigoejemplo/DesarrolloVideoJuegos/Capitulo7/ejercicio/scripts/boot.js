var boot = {

    preload: function preload() {
        game.load.image('main', 'images/1942.png');
        game.load.image('fondo1', 'images/fondo.png');
        game.load.image('fondo2', 'images/fondo2.png');
        game.load.image('fondo3', 'images/fondo3.png');
        game.load.image('botonJugar', 'images/botonJugar.png');
        game.load.image('enemigo', 'images/enemigo.png');
        game.load.image('bala', 'images/bala.png');
        game.load.image('jugador', 'images/jugador.png');

        game.load.audio('disparo', 'sounds/Laser_Shoot.ogg');
        game.load.audio('explosion', 'sounds/Explosion.ogg');

        var texto = "...";
        var estilo = { 
            font: "60pt retroBits", 
            fill: "#ffffff"
        };

        this.texto = game.add.text(200, 210, texto, estilo);
        game.stage.backgroundColor = '#000000';
        game.physics.startSystem(Phaser.Physics.ARCADE);
    },
    update: function update() {
        this.texto.text = "Cargando";
    },
    create: function create() { 
        game.state.start('hud');
    }
};