"use strict";
function Medida(num, tipo){
  this.num_=num;
  this.tipo_=tipo;
}

function Temperatura (num, tipo){
   Medida.call(this, num, tipo);
}

Temperatura.prototype = new Medida();

Medida.prototype.get_num = function(){ 
  return this.num_; 
}

Medida.prototype.get_tipo = function(){ 
  return this.tipo_; 
}

Medida.prototype.set_num = function(num){ 
  this.num_= num; 
}

Medida.prototype.set_tipo = function(tipo){ 
  this.tipo_= tipo; 
}

Temperatura.prototype.convert_celsius_to_farenheit = function(){ 
  return (this.get_num() * 9/5) + 32; 
}

Temperatura.prototype.convert_farenheit_to_celsius = function(){ 
  return (this.get_num() - 32) * 5/9; 
}

Temperatura.prototype.convert_farenheit_to_kelvin = function(){ 
  return ((this.get_num() - 32) * 5/9) + 273.15; 
}

Temperatura.prototype.convert_celsius_to_kelvin = function(){ 
  return (this.get_num() + 273.15); 
}

Temperatura.prototype.convert_kelvin_to_farenheit = function(){ 
  return (this.get_num() - 273.15) * 1.8 + 32; 
}

Temperatura.prototype.convert_kelvin_to_celsius = function(){ 
  return (this.get_num() - 273.15); 
}

Temperatura.prototype.initialize = function(temp){
	var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[eE]\d+)?)\s*([fFcCkK])/
	var m = temp.match(regexp);
	if(m){
		m[1] = parseFloat(m[1]);
		this.set_tipo(m[2]);
		this.set_num(m[1]);
	}
}

Medida.prototype.calculate = function(){
    var result1 = new Temperatura();
    var result2 = new Temperatura();

        switch(this.get_tipo()){
          case "c":
          case "C":
            result1.set_num(this.convert_celsius_to_farenheit());
            result1.set_tipo("Fahrenheit");
            result2.set_num(this.convert_celsius_to_kelvin());
            result2.set_tipo("Kelvin");
            break;
          case "f":
          case "F":
            result1.set_num(this.convert_farenheit_to_celsius());
            result1.set_tipo("Celsius");
            result2.set_num(this.convert_farenheit_to_kelvin());
            result2.set_tipo("Kelvin");
            break;
          case "k":
          case "K":
            result1.set_num(this.convert_kelvin_to_celsius());
            result1.set_tipo("Celsius");
            result2.set_num(this.convert_kelvin_to_farenheit());
            result2.set_tipo("Fahrenheit");
            break;
	  default:
	    return("ERROR! Intenta poner algo como: '-4.2C'");
	    break;	
        }     
        result1 = result1.get_num() + " " + result1.get_tipo();
        result2 = result2.get_num() + " " + result2.get_tipo();
        return(result1 + " || " + result2);
}

module.exports = Temperatura;
