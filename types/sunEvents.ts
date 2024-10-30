export interface SunEvents {
  properties: Properties
}

export interface Properties {
  sunrise: Sunrise
  sunset: Sunset
}

export interface Sunrise {
  time: string
}

export interface Sunset {
  time: string
}
