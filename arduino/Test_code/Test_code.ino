   #include <Wire.h>

// potentiometer wiper (middle terminal) connected to analog pin 3
// outside leads to ground and +5V
  int data= 0;
  int analogPin = 0; 

// put your setup code here, to run once:
void setup() 
{

  Serial.begin(9600);

  Wire.begin(0); // join i2c bus (address optional for master)
  Wire.onReceive(receiveEvent); // register event

}

  byte x = 0;


// put your main code here, to run repeatedly:
void loop() 
{

  //data = analogRead(analogPin);
  //Serial.println(data);//data that is being Sent
  //delay(200);

  Wire.beginTransmission(8); // transmit to device #8
  Wire.write("Start");        // sends five bytes
  //Wire.write(x);              // sends one byte
  Wire.endTransmission();    // stop transmitting

  //x++;
  delay(500);

}


void receiveEvent(int howMany) 
{
  while (1 < Wire.available()) { // loop through all but the last
    char c = Wire.read(); // receive byte as a character
    Serial.print(c);         // print the character
  }
  int x = Wire.read();    // receive byte as an integer
  Serial.println(x);         // print the integer
}
