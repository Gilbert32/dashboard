export interface Location {
  city: City;
  list: List;
}

export interface City {
  name: string;
}

export interface List {
  [index: number]: {
    dt_txt: bigint;
    main: Main;
    weather: Weather;
  };
}

export interface Main {
  temp: number;
}

export interface Weather {
  [index: number]: {
    icon: string;
  };
}
