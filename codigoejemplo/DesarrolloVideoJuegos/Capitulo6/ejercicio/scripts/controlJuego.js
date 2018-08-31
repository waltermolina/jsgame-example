var controlJuego = {
    id: 'controlJuego',
    visible: false,
    acumulador: 0,
    update: function (delta) {
        this.acumulador += delta;
        if (this.acumulador > 0.5) {
            this.acumulador = 0;
            jsGFwk.getGameObjects().contenedorEnemigo.cloneObject({x: (Math.random() * 600) + 10, y: -20});
        }
    }
};