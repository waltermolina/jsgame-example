var bala = {
    x: 0,
    y: 0,
    width: 17,
    height: 12,
    valocidad: 2,

    onInit: function (parameters) {
        this.x = parameters.x;
        this.y = parameters.y;
    },
    
    onUpdate: function (delta) {
        var self = this;
        this.y -= this.valocidad;

        if (this.y + this.height < 0) {
            this.destroy();
        }

        jsGFwk.getGameObjects().contenedorEnemigo.eachCloned(function (avionEnemigo, event) {
            if (jsGFwk.Collisions.areCollidingBy(avionEnemigo, self, jsGFwk.Collisions.collidingModes.RECTANGLE)) {
                puntos += 100;
                canalExplosion.play();
                avionEnemigo.impacto();
                self.destroy();
                event.cancel = true;
            }
        });
    },
    
    onDraw: function (contexto) {
        contexto.drawImage(jsGFwk.ResourceManager.graphics.principal.image, 
                           140, 82, 17, 12, this.x, this.y, this.width, this.height);
    }
};