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

function calculate(){
    var result1 = new Temperatura();
    var result2 = new Temperatura();
    var temp = original.value;

    if(temp){
      var regexp = /([-+]?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*([fFcCkK])/;
      var m = temp.match(regexp);

      if(m){
        var cnv_tmp = new Temperatura();

        cnv_tmp.set_num(parseFloat(m[1]));
        cnv_tmp.set_tipo(m[2]);

        if (cnv_tmp.get_tipo() == 'c' || cnv_tmp.get_tipo() == 'C') {
          result1.set_num(cnv_tmp.convert_celsius_to_farenheit());
          result1.set_tipo("Fahrenheit");
          result2.set_num(cnv_tmp.convert_celsius_to_kelvin());
          result2.set_tipo("Kelvin");
        }
        if (cnv_tmp.get_tipo() == 'f' || cnv_tmp.get_tipo() == 'F') {
          result1.set_num(cnv_tmp.convert_farenheit_to_celsius());
          result1.set_tipo("Celsius");
          result2.set_num(cnv_tmp.convert_farenheit_to_kelvin());
          result2.set_tipo("Kelvin");
        }
        if (cnv_tmp.get_tipo() == 'k' || cnv_tmp.get_tipo() == 'K') {
          result1.set_num(cnv_tmp.convert_kelvin_to_celsius());
          result1.set_tipo("Celsius");
          result2.set_num(cnv_tmp.convert_kelvin_to_farenheit());
          result2.set_tipo("Fahrenheit");
        }
        
        result1 = result1.get_num() + " " + result1.get_tipo();
        result2 = result2.get_num() + " " + result2.get_tipo();
        converted.innerHTML = result1 + " || " + result2;
      }
      else {
        converted.innerHTML = "ERROR! Intenta poner algo como: '-4.2C'";
      }
    }
}
