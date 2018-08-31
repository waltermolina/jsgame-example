var enemigo = {
    x: 0,
    y: 1,
    width: 14,
    height: 15,
    indiceExplosion: 0,
    acumuladorExplosion: 0,
    onInit: function (parameters) {
        this.x = parameters.x;
        this.y = parameters.y;
        this.onUpdate = this.actualizarNormal;
        this.onDraw = this.dibujarNormal;
    },
    impacto: function () {
        this.onUpdate = this.actualizarMuerte;
        this.onDraw = this.dibujarMuerte;
    },
    actualizarMuerte: function (delta) {
        this.acumuladorExplosion += delta;
        if (this.acumuladorExplosion > 0.1) {
            this.acumuladorExplosion = 0;
            this.indiceExplosion++;

            if (this.indiceExplosion >= 3) {
                this.destroy();
            }
        }
    },
    dibujarMuerte: function (contexto) {
        contexto.drawImage(jsGFwk.ResourceManager.graphics.principal.image, 
                           163 + (this.indiceExplosion * 16), 79, 16, 15,
                           this.x, this.y, 16, 15);
    },
    actualizarNormal: function () {
        this.y += 2;

        if (this.y > 480) {
            this.destroy();
        }
    },
    dibujarNormal: function (contexto) {
        contexto.drawImage(jsGFwk.ResourceManager.graphics.principal.image,
                           5, 200, 14, 15, this.x, this.y, 14, 15);
    },
    onUpdate: function () { },
    onDraw: function (contexto) { }
};