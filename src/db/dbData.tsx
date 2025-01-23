/**
 * Example: dbData.ts
 *
 * This file contains mock data matching the structure defined by
 * the interfaces in db.tsx.
 */

import { IUzivatel, ITym, ISouper, IZapas, IHrac, IHrajeV } from "./db";

//----------------------//
//  1. UZIVATEL (3 rows)
//----------------------//
export const uzivateleData: IUzivatel[] = [
  {
    marketingovySouhlas: "A",
    email: "jan.novak@email.com",
    nickname: "Janek",
    // logoLink is optional, omitted if null
  },
  {
    marketingovySouhlas: "N",
    email: "lucie.kralova@email.com",
    nickname: "Lucy",
    logoLink: "https://example.com/logo2.png",
  },
  {
    marketingovySouhlas: "A",
    email: "petr.svoboda@email.com",
    nickname: "Péťa",
  },
];

//-------------------------------------//
//  2. TYM (6 rows)  => rocnick = "2023"
//-------------------------------------//
export const tymyData: ITym[] = [
  {
    idTymu: "T1",
    email: uzivateleData[0].email, // or "jan.novak@email.com"
    tymJmeno: "Starší dorost",
    rocnick: "2023",
  },
  {
    idTymu: "T2",
    email: uzivateleData[0].email,
    tymJmeno: "Muži - A",
    rocnick: "2023",
  },
  {
    idTymu: "T11",
    email: uzivateleData[0].email,
    tymJmeno: "Muži - B",
    rocnick: "2023",
  },
  {
    idTymu: "T12",
    email: uzivateleData[0].email,
    tymJmeno: "St. žáci - B",
    rocnick: "2023",
  },
  {
    idTymu: "T16",
    email: uzivateleData[0].email,
    tymJmeno: "St. žáci - A",
    rocnick: "2023",
  },
  {
    idTymu: "T3",
    email: uzivateleData[1].email,
    tymJmeno: "Mladší žáci",
    rocnick: "2023",
  },
  {
    idTymu: "T4",
    email: uzivateleData[1].email,
    tymJmeno: "Muži - B",
    rocnick: "2023",
    tymDoplnujiciInfo: "Rezervní tým mužů",
  },
  {
    idTymu: "T5",
    email: uzivateleData[2].email,
    tymJmeno: "Dorostenky",
    rocnick: "2023",
  },
  {
    idTymu: "T6",
    email: uzivateleData[2].email,
    tymJmeno: "Muži - A",
    rocnick: "2023",
    tymDoplnujiciInfo: "Hlavní tým mužů spravovaný Petrem",
  },
];

//----------------------------------------------//
//  3. HRAC (15 rows) => references TYM IDs
//----------------------------------------------//
export const hraciData: IHrac[] = [
  {
    idHrace: "H1",
    idTymu: "T1",
    hracJmeno: "Tomáš Novák",
    cisloDresu: 7,
    profileImgLink: "https://example.com/player1.png",
    poziceNaHristi: "Levé křídlo",
  },
  {
    idHrace: "H2",
    idTymu: "T1",
    hracJmeno: "Filip Dvořák",
    cisloDresu: 9,
    // profileImgLink omitted if null
    poziceNaHristi: "Střední spojka",
  },
  {
    idHrace: "H3",
    idTymu: "T1",
    hracJmeno: "Ondřej Veselý",
    cisloDresu: 5,
    profileImgLink: "https://example.com/player3.png",
    poziceNaHristi: "Pivot",
  },
  {
    idHrace: "H4",
    idTymu: "T1",
    hracJmeno: "Jakub Svoboda",
    cisloDresu: 10,
    poziceNaHristi: "Pravá spojka",
  },
  {
    idHrace: "H5",
    idTymu: "T1",
    hracJmeno: "Adam Král",
    cisloDresu: 8,
    profileImgLink: "https://example.com/player5.png",
    poziceNaHristi: "Levá spojka",
  },
  {
    idHrace: "H6",
    idTymu: "T2",
    hracJmeno: "Petr Černý",
    cisloDresu: 15,
    profileImgLink: "https://example.com/player6.png",
    poziceNaHristi: "Pravé křídlo",
  },
  {
    idHrace: "H7",
    idTymu: "T2",
    hracJmeno: "Lukáš Malý",
    cisloDresu: 13,
    poziceNaHristi: "Pivot",
  },
  {
    idHrace: "H8",
    idTymu: "T2",
    hracJmeno: "Vojtěch Polák",
    cisloDresu: 11,
    profileImgLink: "https://example.com/player8.png",
    poziceNaHristi: "Střední spojka",
  },
  {
    idHrace: "H9",
    idTymu: "T2",
    hracJmeno: "Martin Novotný",
    cisloDresu: 17,
    poziceNaHristi: "Levé křídlo",
  },
  {
    idHrace: "H10",
    idTymu: "T2",
    hracJmeno: "Jan Veselý",
    cisloDresu: 20,
    profileImgLink: "https://example.com/player10.png",
    poziceNaHristi: "Pravá spojka",
  },
  {
    idHrace: "H11",
    idTymu: "T6",
    hracJmeno: "David Hruška",
    cisloDresu: 4,
    profileImgLink: "https://example.com/player11.png",
    poziceNaHristi: "Pivot",
  },
  {
    idHrace: "H12",
    idTymu: "T6",
    hracJmeno: "Radek Novák",
    cisloDresu: 6,
    poziceNaHristi: "Levá spojka",
  },
  {
    idHrace: "H13",
    idTymu: "T6",
    hracJmeno: "Tomáš Kovář",
    cisloDresu: 9,
    profileImgLink: "https://example.com/player13.png",
    poziceNaHristi: "Střední spojka",
  },
  {
    idHrace: "H14",
    idTymu: "T6",
    hracJmeno: "Jiří Beneš",
    cisloDresu: 2,
    poziceNaHristi: "Pravé křídlo",
  },
  {
    idHrace: "H15",
    idTymu: "T6",
    hracJmeno: "Michal Urban",
    cisloDresu: 5,
    profileImgLink: "https://example.com/player15.png",
    poziceNaHristi: "Levé křídlo",
  },
];

//--------------------------------------------//
//  4. SOUPER (3 rows) => ID_SOUPER: S1, S2, S3
//--------------------------------------------//
export const souperiData: ISouper[] = [
  {
    souperNazev: "TJ Spartak",
    idSouper: "S1",
  },
  {
    souperNazev: "HC Slavia",
    idSouper: "S2",
  },
  {
    souperNazev: "Sokol Příbram",
    idSouper: "S3",
  },
];

//----------------------------------//
//  5. ZAPAS (3 rows) => Date fields
//----------------------------------//
export const zapasyData: IZapas[] = [
  {
    idZapasu: "Z1",
    idSouper: "S1",
    idTymu: "T1",
    // 24.12.2024 => "2024-12-24"
    datumZapasu: new Date("2024-12-24"),
    domaciZapasu: "N",
    obdrzeneGoly: 10,
    vstrleneGoly: 6,
    // optional property omitted if null
  },

  {
    idZapasu: "Z2",
    idSouper: "S2",
    idTymu: "T2",
    datumZapasu: new Date("2024-12-25"),
    domaciZapasu: "A",
    obdrzeneGoly: 8,
    vstrleneGoly: 6,
    zapasDopnujiciInfo: "Zápas proti HC Slavia na venkovním hřišti",
  },
  {
    idZapasu: "Z3",
    idSouper: "S3",
    idTymu: "T6",
    datumZapasu: new Date("2024-12-25"),
    domaciZapasu: "A",
    obdrzeneGoly: 15,
    vstrleneGoly: 6,
  },
];

//-----------------------------------------------------//
//  6. HRAJE_V (bridge table) => 15 rows
//     Make sure to match the interface property names!
//-----------------------------------------------------//

export const hrajeVData: IHrajeV[] = [
  // --- Z1 ---
  {
    idHrace: "H1",
    idZapasu: "Z1",
    pocetGKridlo: 2,
    pocetG9m: 1,
    pocetG6m: 0,
    pocetG7m: 0,
    pocetGBrejk: 1,

    pocetMimo6m: 1,
    pocetMimo7m: 0,
    pocetMimo9m: 0,
    pocetMimoKridlo: 1,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 3,
    pocetObranaChyba: 1,
    pocetUtokPlus: 4,
    pocetUtokChyba: 2,
    asistence: 3,
  },
  {
    idHrace: "H2",
    idZapasu: "Z1",
    pocetGKridlo: 1,
    pocetG9m: 2,
    pocetG6m: 1,
    pocetG7m: 0,
    pocetGBrejk: 0,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 1,
    pocetMimoKridlo: 0,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "A", // "A" => given in the SQL
    pocetVylouceni: 1,
    pocetObranaPlus: 4,
    pocetObranaChyba: 2,
    pocetUtokPlus: 3,
    pocetUtokChyba: 1,
    asistence: 2,
  },
  {
    idHrace: "H3",
    idZapasu: "Z1",
    pocetGKridlo: 0,
    pocetG9m: 0,
    pocetG6m: 2,
    pocetG7m: 1,
    pocetGBrejk: 0,

    pocetMimo6m: 1,
    pocetMimo7m: 0,
    pocetMimo9m: 1,
    pocetMimoKridlo: 0,
    pocetMimoBrejk: 1,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 2,
    pocetObranaChyba: 1,
    pocetUtokPlus: 3,
    pocetUtokChyba: 0,
    asistence: 1,
  },
  {
    idHrace: "H4",
    idZapasu: "Z1",
    pocetGKridlo: 3,
    pocetG9m: 1,
    pocetG6m: 0,
    pocetG7m: 0,
    pocetGBrejk: 2,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 0,
    pocetMimoKridlo: 2,
    pocetMimoBrejk: 1,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 5,
    pocetObranaChyba: 3,
    pocetUtokPlus: 6,
    pocetUtokChyba: 1,
    asistence: 4,
  },
  {
    idHrace: "H5",
    idZapasu: "Z1",
    pocetGKridlo: 1,
    pocetG9m: 1,
    pocetG6m: 1,
    pocetG7m: 0,
    pocetGBrejk: 1,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 1,
    pocetMimoKridlo: 0,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 3,
    pocetObranaChyba: 2,
    pocetUtokPlus: 5,
    pocetUtokChyba: 0,
    asistence: 2,
  },

  // --- Z2 ---
  {
    idHrace: "H6",
    idZapasu: "Z2",
    pocetGKridlo: 2,
    pocetG9m: 0,
    pocetG6m: 1,
    pocetG7m: 1,
    pocetGBrejk: 0,

    pocetMimo6m: 1,
    pocetMimo7m: 0,
    pocetMimo9m: 0,
    pocetMimoKridlo: 1,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 4,
    pocetObranaChyba: 2,
    pocetUtokPlus: 5,
    pocetUtokChyba: 1,
    asistence: 3,
  },
  {
    idHrace: "H7",
    idZapasu: "Z2",
    pocetGKridlo: 1,
    pocetG9m: 2,
    pocetG6m: 0,
    pocetG7m: 0,
    pocetGBrejk: 1,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 0,
    pocetMimoKridlo: 0,
    pocetMimoBrejk: 1,

    cervenaKarta: "N",
    zlutaKarta: "A",
    pocetVylouceni: 1,
    pocetObranaPlus: 3,
    pocetObranaChyba: 1,
    pocetUtokPlus: 4,
    pocetUtokChyba: 2,
    asistence: 2,
  },
  {
    idHrace: "H8",
    idZapasu: "Z2",
    pocetGKridlo: 0,
    pocetG9m: 1,
    pocetG6m: 1,
    pocetG7m: 0,
    pocetGBrejk: 2,

    pocetMimo6m: 1,
    pocetMimo7m: 0,
    pocetMimo9m: 1,
    pocetMimoKridlo: 1,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 5,
    pocetObranaChyba: 3,
    pocetUtokPlus: 6,
    pocetUtokChyba: 2,
    asistence: 4,
  },
  {
    idHrace: "H9",
    idZapasu: "Z2",
    pocetGKridlo: 3,
    pocetG9m: 0,
    pocetG6m: 0,
    pocetG7m: 1,
    pocetGBrejk: 1,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 1,
    pocetMimoKridlo: 0,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 2,
    pocetObranaChyba: 1,
    pocetUtokPlus: 3,
    pocetUtokChyba: 1,
    asistence: 2,
  },
  {
    idHrace: "H10",
    idZapasu: "Z2",
    pocetGKridlo: 1,
    pocetG9m: 1,
    pocetG6m: 2,
    pocetG7m: 0,
    pocetGBrejk: 0,

    pocetMimo6m: 0,
    pocetMimo7m: 0,
    pocetMimo9m: 1,
    pocetMimoKridlo: 1,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 3,
    pocetObranaChyba: 2,
    pocetUtokPlus: 5,
    pocetUtokChyba: 0,
    asistence: 1,
  },

  // --- Z3 ---
  {
    idHrace: "H11",
    idZapasu: "Z3",
    pocetGKridlo: 1,
    pocetG9m: 2,
    pocetG6m: 1,
    pocetG7m: 0,
    pocetGBrejk: 1,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 0,
    pocetMimoKridlo: 1,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 4,
    pocetObranaChyba: 1,
    pocetUtokPlus: 6,
    pocetUtokChyba: 2,
    asistence: 4,
  },
  {
    idHrace: "H12",
    idZapasu: "Z3",
    pocetGKridlo: 0,
    pocetG9m: 1,
    pocetG6m: 0,
    pocetG7m: 1,
    pocetGBrejk: 2,

    pocetMimo6m: 1,
    pocetMimo7m: 0,
    pocetMimo9m: 0,
    pocetMimoKridlo: 0,
    pocetMimoBrejk: 1,

    cervenaKarta: "N",
    zlutaKarta: "A",
    pocetVylouceni: 1,
    pocetObranaPlus: 3,
    pocetObranaChyba: 2,
    pocetUtokPlus: 5,
    pocetUtokChyba: 1,
    asistence: 3,
  },
  {
    idHrace: "H13",
    idZapasu: "Z3",
    pocetGKridlo: 2,
    pocetG9m: 0,
    pocetG6m: 1,
    pocetG7m: 0,
    pocetGBrejk: 1,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 0,
    pocetMimoKridlo: 1,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 6,
    pocetObranaChyba: 1,
    pocetUtokPlus: 7,
    pocetUtokChyba: 2,
    asistence: 5,
  },
  {
    idHrace: "H14",
    idZapasu: "Z3",
    pocetGKridlo: 3,
    pocetG9m: 1,
    pocetG6m: 0,
    pocetG7m: 0,
    pocetGBrejk: 2,

    pocetMimo6m: 0,
    pocetMimo7m: 0,
    pocetMimo9m: 1,
    pocetMimoKridlo: 1,
    pocetMimoBrejk: 0,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 5,
    pocetObranaChyba: 3,
    pocetUtokPlus: 8,
    pocetUtokChyba: 1,
    asistence: 4,
  },
  {
    idHrace: "H15",
    idZapasu: "Z3",
    pocetGKridlo: 1,
    pocetG9m: 0,
    pocetG6m: 2,
    pocetG7m: 1,
    pocetGBrejk: 0,

    pocetMimo6m: 0,
    pocetMimo7m: 1,
    pocetMimo9m: 1,
    pocetMimoKridlo: 0,
    pocetMimoBrejk: 1,

    cervenaKarta: "N",
    zlutaKarta: "N",
    pocetVylouceni: 0,
    pocetObranaPlus: 2,
    pocetObranaChyba: 1,
    pocetUtokPlus: 4,
    pocetUtokChyba: 1,
    asistence: 2,
  },
];
