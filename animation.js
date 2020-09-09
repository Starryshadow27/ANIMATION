var contain = document.getElementById('cont');

class Butterfly {
    constructor(posx) {
        this.x = posx; this.y = 320;
        this.createButterfly = function () {
            var butterfly = document.getElementById('butterfly');
            butterfly.style.left = this.x + 'px';
            butterfly.style.top = this.y + 'px';                        
            return butterfly;
        };

        this.element = this.createButterfly();
        this.updatePositionX = function (offset) {
            this.x += offset;
            this.element.style.left = this.x + 'px';
        };    
    }
}

var inc=0;
var cloudsInterval = setInterval(function(){
  cloud.style.backgroundPosition = '0px '+inc+'px';
  inc += 1.1;
},10);

var butterfly = new Butterfly(200);

var increment=0;

var backgroundInterval = setInterval(function(){
  field.style.backgroundPosition = '0px '+increment+'px';
  
  increment += 1;
},10);

document.onkeydown = function(event){
  switch (event.keyCode) {
    // A  
    case 65:
      butterfly.updatePositionX(-2)
      break;
    // D
    case 68:
      butterfly.updatePositionX(2);
      break;
  }
};