var hud = {
    rectanguloTitulo: null,
    imagenTitulo: null,
    rectanguloBoton: null,
    imagenBoton: null,
    boton: null,
    velocidadFondo1: 0.5,
    velocidadFondo2: 0.6,
    velocidadFondo3: 1,
    
    inicioJuego: function inicioJuego() {
        game.state.start('game');
    },
    preload: function preload() { },
    create: function create() {
        game.stage.backgroundColor = '#ffffff';

        this.fondo1 = game.add.sprite(0, 0, 'fondo1');
        this.fondo2 = game.add.sprite(0, 0, 'fondo2');
        this.fondo3 = game.add.sprite(0, 0, 'fondo3');

        this.fondo4 = game.add.sprite(0, 0, 'fondo1');
        this.fondo5 = game.add.sprite(0, 0, 'fondo2');
        this.fondo6 = game.add.sprite(0, 0, 'fondo3');

        this.imagenTitulo = game.add.sprite(0, 0, 'main');
        this.rectanguloTitulo = new Phaser.Rectangle(70, 706, 178, 45);
        this.imagenTitulo.crop(this.rectanguloTitulo);
        this.imagenTitulo.x = 230;
        this.imagenTitulo.y = 30;

        this.boton = game.add.button(270, 200, 'botonJugar', this.inicioJuego, this);
        this.boton.input.useHandCursor = true;
    },
    update: function update() {
        this.fondo1.y += this.velocidadFondo1;
        this.fondo4.y = this.fondo1.y - 800;
        this.fondo1.y = this.fondo1.y % 800;
        
        this.fondo2.y += this.velocidadFondo2;
        this.fondo5.y = this.fondo2.y - 800;
        this.fondo2.y = this.fondo1.y % 800;
        
        this.fondo3.y += this.velocidadFondo3;
        this.fondo6.y = this.fondo3.y - 800;
        this.fondo3.y = this.fondo3.y % 800;
    }
};