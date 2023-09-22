# Precentacion de la tarjeta MicroSD Card
En este estsremos precentando una breve explicacion sobre el funcionamiento y como se debe colocar las conexiones en la rasberry pico w

## La Interfaz de MicroSD a Pico con el modulo
La secuencia para poder conectar el modulo MicroSD a la Pico W en la siguiente tabla muestra como conectarlo adecuadamente.
|**Pico**|**Modulo/Adaptador**|
| :-: | :-: |
|GND|GND|
|5V|Vcc|
|D12|MISO|
|D11|MOSI|
|D13|SCK|
|D9|CS|

![](./img/esquema_fisico.jpg)

## La Interfaz de MicroSD a Pico sin el modulo
De esta forma tendremos una alternativa sin tener el modulo de tarjeta sd, podremos usar un adaptador normal que usamos para las computadoras y soldaremos lo pines que tiene pero hay dos formas de conectarlos en la siguiente tabla se presenta la primera forma.
|**Pin adaptador sd**|**SPI**|**Pico W**|
| :-: | :-: | :-: |
|1|CS|Pin 17 (GP13)|
|2|MOSI|Pin 20 (GP15)|
|3|GND|Pin 18 (GND)|
|4|3\.3V|Pin 36 (3V3 OUT)|
|5|SCK|Pin 19 (GP14)|
|6|GND|Pin 18 (GND)|
|7|MISO|Pin 16 (GP12)|
|8|---|---|
|9|---|---|

La imagen siguiente es la segunda forma para poderlo conectarlo a la Pico.
![](./img/Microsd_pinout.jpg)
