var enemigo = {
    x: 0,
    y: 1,
    ancho: 14,
    alto: 15,
    nombre: 'enemigo',
    indiceExplosion: 0,
    acumuladorExplosion: 0,
    impacto: function () {
        this.actualizar = this.actualizarMuerte;
        this.dibujar = this.dibujarMuerte;
    },
    actualizarMuerte: function (delta) {
        this.acumuladorExplosion += delta;
        if (this.acumuladorExplosion > 0.1) {
            this.acumuladorExplosion = 0;
            this.indiceExplosion++;

            if (this.indiceExplosion >= 3) {
                this.indiceExplosion = 0;
                this.y = -20;
                this.x = (Math.random() * 400) + 40;
                this.actualizar = this.actualizarNormal;
                this.dibujar = this.dibujarNormal;
            }
        }
    },
    dibujarMuerte: function (contexto) {
        contexto.drawImage(spriteSheet, 163 + (this.indiceExplosion * 16), 79, 16, 15,
                           this.x, this.y, 16, 15);
    },
    
    actualizarNormal: function () {
        this.y += 2;

        if (this.y > 480) {
            this.y = -20;
            this.x = (Math.random() * 400) + 40;
        }
    },
    dibujarNormal: function (contexto) {
        contexto.drawImage(spriteSheet, 5, 200, 14, 15, this.x, this.y, 14, 15);
    },
    
    actualizar: function () { },
    dibujar: function (contexto) { }
};