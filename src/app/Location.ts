export interface Location {
  name: string;
  wind: Wind;
  main: Main;
}

export interface Wind {
  deg: number;
  speed: number;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
}
