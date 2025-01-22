/**
 * UZIVATEL
 * Table columns:
 * - MARKETINGOVY_SOUHLAS in ('N','A'),
 * - EMAIL (primary key),
 * - NICKNAME,
 * - LOGO_LINK (optional)
 */
export interface IUzivatel {
  marketingovySouhlas: "N" | "A";
  email: string; // primary key
  nickname: string;
  logoLink?: string;
}

/**
 * TYM
 * Table columns:
 * - ID_TYMU (primary key),
 * - EMAIL (FK to UZIVATEL.EMAIL),
 * - TYM_JMENO,
 * - ROCNIK,
 * - TYM_DOPLNUJICI_INFO (optional CLOB)
 */
export interface ITym {
  idTymu: string; // primary key
  email: string; // foreign key => IUzivatel.email
  tymJmeno: string;
  rocnick: string;
  tymDoplnujiciInfo?: string; // CLOB -> optional
}

/**
 * SOUPER
 * Table columns:
 * - SOUPER_NAZEV,
 * - ID_SOUPER (primary key)
 */
export interface ISouper {
  souperNazev: string;
  idSouper: string; // primary key
}

/**
 * HRAC
 * Table columns:
 * - ID_HRACE (primary key),
 * - ID_TYMU (FK to TYM.ID_TYMU),
 * - HRAC_JMENO,
 * - CISLO_DRESU (>= 0),
 * - PROFILEIMG_LINK (optional),
 * - POZICE_NA_HRISTI
 */
export interface IHrac {
  idHrace: string; // primary key
  idTymu: string; // foreign key => ITym.idTymu
  hracJmeno: string;
  cisloDresu: number; // must be >= 0
  profileImgLink?: string;
  poziceNaHristi: string;
}

/**
 * ZAPAS
 * Table columns:
 * - ID_ZAPASU (primary key),
 * - ID_SOUPER (FK to SOUPER.ID_SOUPER),
 * - ID_TYMU (FK to TYM.ID_TYMU),
 * - DATUM_ZAPASU (must be >= 24.12.2024),
 * - DOMACI_ZAPAS in ('N','A'),
 * - OBDRZENE_GOLY,
 * - ZAPAS_DOPNUJICI_INFO (optional CLOB)
 */
export interface IZapas {
  idZapasu: string; // primary key
  idSouper: string; // foreign key => ISouper.idSouper
  idTymu: string; // foreign key => ITym.idTymu
  datumZapasu: Date; // date value
  domaciZapasu: "N" | "A";
  obdrzeneGoly: number;
  vstrleneGoly: number;
  zapasDopnujiciInfo?: string; // optional
}

/**
 * HRAJE_V
 * (bridge table for players playing in a match)
 *
 * Composite primary key: (ID_HRACE, ID_ZAPASU)
 * Foreign keys:
 * - ID_HRACE => HRAC.ID_HRACE
 * - ID_ZAPASU => ZAPAS.ID_ZAPASU
 *
 * Each numeric field has a check constraint >= 0.
 * Card fields can be 'N' or 'A'.
 */
export interface IHrajeV {
  idHrace: string; // composite PK, FK => IHrac.idHrace
  idZapasu: string; // composite PK, FK => IZapas.idZapasu

  pocetGKridlo: number;
  pocetG9m: number;
  pocetG6m: number;
  pocetG7m: number;
  pocetGBrejk: number;

  pocetMimo6m: number;
  pocetMimo7m: number;
  pocetMimo9m: number;
  pocetMimoKridlo: number;
  pocetMimoBrejk: number;

  cervenaKarta: "N" | "A";
  zlutaKarta: "N" | "A";
  pocetVylouceni: number;
  pocetObranaPlus: number;
  pocetObranaChyba: number;
  pocetUtokPlus: number;
  pocetUtokChyba: number;
  asistence: number;
}
