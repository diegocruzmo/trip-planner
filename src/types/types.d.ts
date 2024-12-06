export interface Locations {
  type: string
  features: Feature[]
  query: string[]
  attribution: string
}

export interface Feature {
  type: string
  properties: Properties
  geometry: Geometry
  bbox: number[]
  center: number[]
  place_name: string
  place_type: string[]
  relevance: number
  id: string
  text: string
  place_type_name: Array<null | string>
  matching_text?: string
  matching_place_name?: string
  context: Context[]
  language: Language
  text_en: string
  language_en: Language
  place_name_en: string
}

export interface Context {
  ref: string
  country_code: CountryCode
  id: string
  text: string
  wikidata?: string
  kind?: Kind
  language?: Language
  text_en: string
  language_en?: Language
  categories?: string[]
  'osm:tags'?: OsmTags
}

export enum CountryCode {
  Co = 'co',
  Empty = '',
  ID = 'id',
  Ru = 'ru'
}

export enum Kind {
  AdminArea = 'admin_area'
}

export enum Language {
  En = 'en'
}

export interface OsmTags {
  waterway?: string
  boat?: string
  population?: string
  wikipedia?: string
  sqkm?: string
  place?: string
  layer?: string
  tunnel?: string
  'gvr:code'?: string
  destination?: string
  type?: string
}

export interface Geometry {
  type: string
  coordinates: number[]
}

export interface Properties {
  ref: string
  country_code: CountryCode
  wikidata: string
  kind: string
  place_type_name: Array<null | string>
  'osm:place_type'?: string
}
