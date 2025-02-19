/** Custom register base address */
export const CUSTOM_BASE = 0xdff000;

/**
 * Custom register names mapped to addresses
 */
export const customRegisterAddresses: Record<string, number> = {
  ADKCON: 0xdff09e,
  ADKCONR: 0xdff010,
  AUD0DAT: 0xdff0aa,
  AUD0LCH: 0xdff0a0,
  AUD0LCL: 0xdff0a2,
  AUD0LEN: 0xdff0a4,
  AUD0PER: 0xdff0a6,
  AUD0VOL: 0xdff0a8,
  AUD1DAT: 0xdff0ba,
  AUD1LCH: 0xdff0b0,
  AUD1LCL: 0xdff0b2,
  AUD1LEN: 0xdff0b4,
  AUD1PER: 0xdff0b6,
  AUD1VOL: 0xdff0b8,
  AUD2DAT: 0xdff0ca,
  AUD2LCH: 0xdff0c0,
  AUD2LCL: 0xdff0c2,
  AUD2LEN: 0xdff0c4,
  AUD2PER: 0xdff0c6,
  AUD2VOL: 0xdff0c8,
  AUD3DAT: 0xdff0da,
  AUD3LCH: 0xdff0d0,
  AUD3LCL: 0xdff0d2,
  AUD3LEN: 0xdff0d4,
  AUD3PER: 0xdff0d6,
  AUD3VOL: 0xdff0d8,
  BEAMCON0: 0xdff1dc,
  BLTADAT: 0xdff074,
  BLTAFWM: 0xdff044,
  BLTALWM: 0xdff046,
  BLTAMOD: 0xdff064,
  BLTAPTH: 0xdff050,
  BLTAPTL: 0xdff052,
  BLTBDAT: 0xdff072,
  BLTBMOD: 0xdff062,
  BLTBPTH: 0xdff04c,
  BLTBPTL: 0xdff04e,
  BLTCDAT: 0xdff070,
  BLTCMOD: 0xdff060,
  BLTCON0: 0xdff040,
  BLTCON0L: 0xdff05a,
  BLTCON1: 0xdff042,
  BLTCPTH: 0xdff048,
  BLTCPTL: 0xdff04a,
  BLTDDAT: 0xdff000,
  BLTDMOD: 0xdff066,
  BLTDPTL: 0xdff056,
  BLTSIZE: 0xdff058,
  BLTSIZH: 0xdff05e,
  BLTSIZV: 0xdff05c,
  BPL1DAT: 0xdff110,
  BPL1MOD: 0xdff108,
  BPL1PTH: 0xdff0e0,
  BPL1PTL: 0xdff0e2,
  BPL2DAT: 0xdff112,
  BPL2MOD: 0xdff10a,
  BPL2PTH: 0xdff0e4,
  BPL2PTL: 0xdff0e6,
  BPL3DAT: 0xdff114,
  BPL3PTH: 0xdff0e8,
  BPL3PTL: 0xdff0ea,
  BPL4DAT: 0xdff116,
  BPL4PTH: 0xdff0ec,
  BPL4PTL: 0xdff0ee,
  BPL5DAT: 0xdff118,
  BPL5PTH: 0xdff0f0,
  BPL5PTL: 0xdff0f2,
  BPL6DAT: 0xdff11a,
  BPL6PTH: 0xdff0f4,
  BPL6PTL: 0xdff0f6,
  BPL7DAT: 0xdff11c,
  BPL7PTH: 0xdff0f8,
  BPL7PTL: 0xdff0fa,
  BPL8DAT: 0xdff11e,
  BPL8PTH: 0xdff0fc,
  BPL8PTL: 0xdff0fe,
  BPLCON0: 0xdff100,
  BPLCON1: 0xdff102,
  BPLCON2: 0xdff104,
  BPLCON3: 0xdff106,
  BPLCON4: 0xdff10c,
  BPLHDAT: 0xdff07a,
  BPLHMOD: 0xdff1e6,
  BPLHPTH: 0xdff1ec,
  BPLHPTL: 0xdff1ee,
  BPLHSTOP: 0xdff1d6,
  BPLHSTRT: 0xdff1d4,
  BPTDPTH: 0xdff054,
  CLXCON2: 0xdff10e,
  CLXCON: 0xdff098,
  CLXDAT: 0xdff00e,
  COLOR00: 0xdff180,
  COLOR01: 0xdff182,
  COLOR02: 0xdff184,
  COLOR03: 0xdff186,
  COLOR04: 0xdff188,
  COLOR05: 0xdff18a,
  COLOR06: 0xdff18c,
  COLOR07: 0xdff18e,
  COLOR08: 0xdff190,
  COLOR09: 0xdff192,
  COLOR10: 0xdff194,
  COLOR11: 0xdff196,
  COLOR12: 0xdff198,
  COLOR13: 0xdff19a,
  COLOR14: 0xdff19c,
  COLOR15: 0xdff19e,
  COLOR16: 0xdff1a0,
  COLOR17: 0xdff1a2,
  COLOR18: 0xdff1a4,
  COLOR19: 0xdff1a6,
  COLOR20: 0xdff1a8,
  COLOR21: 0xdff1aa,
  COLOR22: 0xdff1ac,
  COLOR23: 0xdff1ae,
  COLOR24: 0xdff1b0,
  COLOR25: 0xdff1b2,
  COLOR26: 0xdff1b4,
  COLOR27: 0xdff1b6,
  COLOR28: 0xdff1b8,
  COLOR29: 0xdff1ba,
  COLOR30: 0xdff1bc,
  COLOR31: 0xdff1be,
  COP1LCH: 0xdff080,
  COP1LCL: 0xdff082,
  COP2LCH: 0xdff084,
  COP2LCL: 0xdff086,
  COPCON: 0xdff02e,
  COPINS: 0xdff08c,
  COPJMP1: 0xdff088,
  COPJMP2: 0xdff08a,
  DDFSTOP: 0xdff094,
  DDFSTRT: 0xdff092,
  DIWHIGH: 0xdff1e4,
  DIWSTOP: 0xdff090,
  DIWSTRT: 0xdff08e,
  DMACON: 0xdff096,
  DMACONR: 0xdff002,
  DSKBYTR: 0xdff01a,
  DSKDAT: 0xdff026,
  DSKDATR: 0xdff008,
  DSKLEN: 0xdff024,
  DSKPTH: 0xdff020,
  DSKPTL: 0xdff022,
  DSKSYNC: 0xdff07e,
  FMODE: 0xdff1fc,
  HBSTOP: 0xdff1c6,
  HBSTRT: 0xdff1c4,
  HCENTER: 0xdff1e2,
  HHPOSR: 0xdff1da,
  HHPOSW: 0xdff1d8,
  HSSTOP: 0xdff1c2,
  HSSTRT: 0xdff1de,
  HTOTAL: 0xdff1c0,
  INTENA: 0xdff09a,
  INTENAR: 0xdff01c,
  INTREQ: 0xdff09c,
  INTREQR: 0xdff01e,
  JOT1DAT: 0xdff00c,
  JOY0DAT: 0xdff00a,
  JOYTEST: 0xdff036,
  LISAID: 0xdff07c,
  POT0DAT: 0xdff012,
  POT1DAT: 0xdff014,
  POTGO: 0xdff034,
  POTGOR: 0xdff016,
  REFPTR: 0xdff028,
  SERDAT: 0xdff030,
  SERDATR: 0xdff018,
  SERPER: 0xdff032,
  SPR0CTL: 0xdff142,
  SPR0DATA: 0xdff144,
  SPR0DATB: 0xdff146,
  SPR0POS: 0xdff140,
  SPR0PTH: 0xdff120,
  SPR0PTL: 0xdff122,
  SPR1CTL: 0xdff14a,
  SPR1DATA: 0xdff14c,
  SPR1DATB: 0xdff14e,
  SPR1POS: 0xdff148,
  SPR1PTH: 0xdff124,
  SPR1PTL: 0xdff126,
  SPR2CTL: 0xdff152,
  SPR2DATA: 0xdff154,
  SPR2DATB: 0xdff156,
  SPR2POS: 0xdff150,
  SPR2PTH: 0xdff128,
  SPR2PTL: 0xdff12a,
  SPR3CTL: 0xdff15a,
  SPR3DATA: 0xdff15c,
  SPR3DATB: 0xdff15e,
  SPR3POS: 0xdff158,
  SPR3PTH: 0xdff12c,
  SPR3PTL: 0xdff12e,
  SPR4CTL: 0xdff162,
  SPR4DATA: 0xdff164,
  SPR4DATB: 0xdff166,
  SPR4POS: 0xdff160,
  SPR4PTH: 0xdff130,
  SPR4PTL: 0xdff132,
  SPR5CTL: 0xdff16a,
  SPR5DATA: 0xdff16c,
  SPR5DATB: 0xdff16e,
  SPR5POS: 0xdff168,
  SPR5PTH: 0xdff134,
  SPR5PTL: 0xdff136,
  SPR6CTL: 0xdff172,
  SPR6DATA: 0xdff174,
  SPR6DATB: 0xdff176,
  SPR6POS: 0xdff170,
  SPR6PTH: 0xdff138,
  SPR6PTL: 0xdff13a,
  SPR7CTL: 0xdff17a,
  SPR7DATA: 0xdff17c,
  SPR7DATB: 0xdff17e,
  SPR7POS: 0xdff178,
  SPR7PTH: 0xdff13c,
  SPR7PTL: 0xdff13e,
  SPRHDAT: 0xdff078,
  SPRHPTH: 0xdff1e8,
  SPRHPTL: 0xdff1ea,
  SPRHSTOP: 0xdff1d2,
  SPRHSTRT: 0xdff1d0,
  STREQU: 0xdff038,
  STRHOR: 0xdff03c,
  STRLONG: 0xdff03e,
  STRVBL: 0xdff03a,
  VBSTOP: 0xdff1ce,
  VBSTRT: 0xdff1cc,
  VHPOSR: 0xdff006,
  VHPOSW: 0xdff02c,
  VPOSR: 0xdff004,
  VPOSW: 0xdff02a,
  VSSTOP: 0xdff1ca,
  VSSTRT: 0xdff1e0,
  VTOTAL: 0xdff1c8,
};

/**
 * Custom register addresses mapped to names
 */
export const customRegisterNames: Record<number, string> = {
  [0xdff000]: "BLTDDAT",
  [0xdff002]: "DMACONR",
  [0xdff004]: "VPOSR",
  [0xdff006]: "VHPOSR",
  [0xdff008]: "DSKDATR",
  [0xdff00a]: "JOY0DAT",
  [0xdff00c]: "JOT1DAT",
  [0xdff00e]: "CLXDAT",
  [0xdff010]: "ADKCONR",
  [0xdff012]: "POT0DAT",
  [0xdff014]: "POT1DAT",
  [0xdff016]: "POTGOR",
  [0xdff018]: "SERDATR",
  [0xdff01a]: "DSKBYTR",
  [0xdff01c]: "INTENAR",
  [0xdff01e]: "INTREQR",
  [0xdff020]: "DSKPTH",
  [0xdff022]: "DSKPTL",
  [0xdff024]: "DSKLEN",
  [0xdff026]: "DSKDAT",
  [0xdff028]: "REFPTR",
  [0xdff02a]: "VPOSW",
  [0xdff02c]: "VHPOSW",
  [0xdff02e]: "COPCON",
  [0xdff030]: "SERDAT",
  [0xdff032]: "SERPER",
  [0xdff034]: "POTGO",
  [0xdff036]: "JOYTEST",
  [0xdff038]: "STREQU",
  [0xdff03a]: "STRVBL",
  [0xdff03c]: "STRHOR",
  [0xdff03e]: "STRLONG",
  [0xdff040]: "BLTCON0",
  [0xdff042]: "BLTCON1",
  [0xdff044]: "BLTAFWM",
  [0xdff046]: "BLTALWM",
  [0xdff048]: "BLTCPTH",
  [0xdff04a]: "BLTCPTL",
  [0xdff04c]: "BLTBPTH",
  [0xdff04e]: "BLTBPTL",
  [0xdff050]: "BLTAPTH",
  [0xdff052]: "BLTAPTL",
  [0xdff054]: "BPTDPTH",
  [0xdff056]: "BLTDPTL",
  [0xdff058]: "BLTSIZE",
  [0xdff05a]: "BLTCON0L",
  [0xdff05c]: "BLTSIZV",
  [0xdff05e]: "BLTSIZH",
  [0xdff060]: "BLTCMOD",
  [0xdff062]: "BLTBMOD",
  [0xdff064]: "BLTAMOD",
  [0xdff066]: "BLTDMOD",
  [0xdff070]: "BLTCDAT",
  [0xdff072]: "BLTBDAT",
  [0xdff074]: "BLTADAT",
  [0xdff076]: "RESERVED",
  [0xdff078]: "SPRHDAT",
  [0xdff07a]: "BPLHDAT",
  [0xdff07c]: "LISAID",
  [0xdff07e]: "DSKSYNC",
  [0xdff080]: "COP1LCH",
  [0xdff082]: "COP1LCL",
  [0xdff084]: "COP2LCH",
  [0xdff086]: "COP2LCL",
  [0xdff088]: "COPJMP1",
  [0xdff08a]: "COPJMP2",
  [0xdff08c]: "COPINS",
  [0xdff08e]: "DIWSTRT",
  [0xdff090]: "DIWSTOP",
  [0xdff092]: "DDFSTRT",
  [0xdff094]: "DDFSTOP",
  [0xdff096]: "DMACON",
  [0xdff098]: "CLXCON",
  [0xdff09a]: "INTENA",
  [0xdff09c]: "INTREQ",
  [0xdff09e]: "ADKCON",
  [0xdff0a0]: "AUD0LCH",
  [0xdff0a2]: "AUD0LCL",
  [0xdff0a4]: "AUD0LEN",
  [0xdff0a6]: "AUD0PER",
  [0xdff0a8]: "AUD0VOL",
  [0xdff0aa]: "AUD0DAT",
  [0xdff0b0]: "AUD1LCH",
  [0xdff0b2]: "AUD1LCL",
  [0xdff0b4]: "AUD1LEN",
  [0xdff0b6]: "AUD1PER",
  [0xdff0b8]: "AUD1VOL",
  [0xdff0ba]: "AUD1DAT",
  [0xdff0c0]: "AUD2LCH",
  [0xdff0c2]: "AUD2LCL",
  [0xdff0c4]: "AUD2LEN",
  [0xdff0c6]: "AUD2PER",
  [0xdff0c8]: "AUD2VOL",
  [0xdff0ca]: "AUD2DAT",
  [0xdff0d0]: "AUD3LCH",
  [0xdff0d2]: "AUD3LCL",
  [0xdff0d4]: "AUD3LEN",
  [0xdff0d6]: "AUD3PER",
  [0xdff0d8]: "AUD3VOL",
  [0xdff0da]: "AUD3DAT",
  [0xdff0e0]: "BPL1PTH",
  [0xdff0e2]: "BPL1PTL",
  [0xdff0e4]: "BPL2PTH",
  [0xdff0e6]: "BPL2PTL",
  [0xdff0e8]: "BPL3PTH",
  [0xdff0ea]: "BPL3PTL",
  [0xdff0ec]: "BPL4PTH",
  [0xdff0ee]: "BPL4PTL",
  [0xdff0f0]: "BPL5PTH",
  [0xdff0f2]: "BPL5PTL",
  [0xdff0f4]: "BPL6PTH",
  [0xdff0f6]: "BPL6PTL",
  [0xdff0f8]: "BPL7PTH",
  [0xdff0fa]: "BPL7PTL",
  [0xdff0fc]: "BPL8PTH",
  [0xdff0fe]: "BPL8PTL",
  [0xdff100]: "BPLCON0",
  [0xdff102]: "BPLCON1",
  [0xdff104]: "BPLCON2",
  [0xdff106]: "BPLCON3",
  [0xdff108]: "BPL1MOD",
  [0xdff10a]: "BPL2MOD",
  [0xdff10c]: "BPLCON4",
  [0xdff10e]: "CLXCON2",
  [0xdff110]: "BPL1DAT",
  [0xdff112]: "BPL2DAT",
  [0xdff114]: "BPL3DAT",
  [0xdff116]: "BPL4DAT",
  [0xdff118]: "BPL5DAT",
  [0xdff11a]: "BPL6DAT",
  [0xdff11c]: "BPL7DAT",
  [0xdff11e]: "BPL8DAT",
  [0xdff120]: "SPR0PTH",
  [0xdff122]: "SPR0PTL",
  [0xdff124]: "SPR1PTH",
  [0xdff126]: "SPR1PTL",
  [0xdff128]: "SPR2PTH",
  [0xdff12a]: "SPR2PTL",
  [0xdff12c]: "SPR3PTH",
  [0xdff12e]: "SPR3PTL",
  [0xdff130]: "SPR4PTH",
  [0xdff132]: "SPR4PTL",
  [0xdff134]: "SPR5PTH",
  [0xdff136]: "SPR5PTL",
  [0xdff138]: "SPR6PTH",
  [0xdff13a]: "SPR6PTL",
  [0xdff13c]: "SPR7PTH",
  [0xdff13e]: "SPR7PTL",
  [0xdff140]: "SPR0POS",
  [0xdff142]: "SPR0CTL",
  [0xdff144]: "SPR0DATA",
  [0xdff146]: "SPR0DATB",
  [0xdff148]: "SPR1POS",
  [0xdff14a]: "SPR1CTL",
  [0xdff14c]: "SPR1DATA",
  [0xdff14e]: "SPR1DATB",
  [0xdff150]: "SPR2POS",
  [0xdff152]: "SPR2CTL",
  [0xdff154]: "SPR2DATA",
  [0xdff156]: "SPR2DATB",
  [0xdff158]: "SPR3POS",
  [0xdff15a]: "SPR3CTL",
  [0xdff15c]: "SPR3DATA",
  [0xdff15e]: "SPR3DATB",
  [0xdff160]: "SPR4POS",
  [0xdff162]: "SPR4CTL",
  [0xdff164]: "SPR4DATA",
  [0xdff166]: "SPR4DATB",
  [0xdff168]: "SPR5POS",
  [0xdff16a]: "SPR5CTL",
  [0xdff16c]: "SPR5DATA",
  [0xdff16e]: "SPR5DATB",
  [0xdff170]: "SPR6POS",
  [0xdff172]: "SPR6CTL",
  [0xdff174]: "SPR6DATA",
  [0xdff176]: "SPR6DATB",
  [0xdff178]: "SPR7POS",
  [0xdff17a]: "SPR7CTL",
  [0xdff17c]: "SPR7DATA",
  [0xdff17e]: "SPR7DATB",
  [0xdff180]: "COLOR00",
  [0xdff182]: "COLOR01",
  [0xdff184]: "COLOR02",
  [0xdff186]: "COLOR03",
  [0xdff188]: "COLOR04",
  [0xdff18a]: "COLOR05",
  [0xdff18c]: "COLOR06",
  [0xdff18e]: "COLOR07",
  [0xdff190]: "COLOR08",
  [0xdff192]: "COLOR09",
  [0xdff194]: "COLOR10",
  [0xdff196]: "COLOR11",
  [0xdff198]: "COLOR12",
  [0xdff19a]: "COLOR13",
  [0xdff19c]: "COLOR14",
  [0xdff19e]: "COLOR15",
  [0xdff1a0]: "COLOR16",
  [0xdff1a2]: "COLOR17",
  [0xdff1a4]: "COLOR18",
  [0xdff1a6]: "COLOR19",
  [0xdff1a8]: "COLOR20",
  [0xdff1aa]: "COLOR21",
  [0xdff1ac]: "COLOR22",
  [0xdff1ae]: "COLOR23",
  [0xdff1b0]: "COLOR24",
  [0xdff1b2]: "COLOR25",
  [0xdff1b4]: "COLOR26",
  [0xdff1b6]: "COLOR27",
  [0xdff1b8]: "COLOR28",
  [0xdff1ba]: "COLOR29",
  [0xdff1bc]: "COLOR30",
  [0xdff1be]: "COLOR31",
  [0xdff1c0]: "HTOTAL",
  [0xdff1c2]: "HSSTOP",
  [0xdff1c4]: "HBSTRT",
  [0xdff1c6]: "HBSTOP",
  [0xdff1c8]: "VTOTAL",
  [0xdff1ca]: "VSSTOP",
  [0xdff1cc]: "VBSTRT",
  [0xdff1ce]: "VBSTOP",
  [0xdff1d0]: "SPRHSTRT",
  [0xdff1d2]: "SPRHSTOP",
  [0xdff1d4]: "BPLHSTRT",
  [0xdff1d6]: "BPLHSTOP",
  [0xdff1d8]: "HHPOSW",
  [0xdff1da]: "HHPOSR",
  [0xdff1dc]: "BEAMCON0",
  [0xdff1de]: "HSSTRT",
  [0xdff1e0]: "VSSTRT",
  [0xdff1e2]: "HCENTER",
  [0xdff1e4]: "DIWHIGH",
  [0xdff1e6]: "BPLHMOD",
  [0xdff1e8]: "SPRHPTH",
  [0xdff1ea]: "SPRHPTL",
  [0xdff1ec]: "BPLHPTH",
  [0xdff1ee]: "BPLHPTL",
  [0xdff1f0]: "RESERVED",
  [0xdff1f2]: "RESERVED",
  [0xdff1f4]: "RESERVED",
  [0xdff1f6]: "RESERVED",
  [0xdff1f8]: "RESERVED",
  [0xdff1fa]: "RESERVED",
  [0xdff1fc]: "FMODE",
  [0xdff1fe]: "NO-OP(NULL)",
};

export const vectors = [
  "Reset:SSP",
  "EXECBASE",
  "BUS ERROR",
  "ADR ERROR",
  "ILLEG OPC",
  "DIV BY 0",
  "CHK",
  "TRAPV",
  "PRIVIL VIO",
  "TRACE",
  "LINEA EMU",
  "LINEF EMU",
  null,
  null,
  null,
  "INT Uninit",
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  "INT Unjust",
  "Lvl 1 Int",
  "Lvl 2 Int",
  "Lvl 3 Int",
  "Lvl 4 Int",
  "Lvl 5 Int",
  "Lvl 6 Int",
  "NMI",
  "TRAP 00",
  "TRAP 01",
  "TRAP 02",
  "TRAP 03",
  "TRAP 04",
  "TRAP 05",
  "TRAP 06",
  "TRAP 07",
  "TRAP 08",
  "TRAP 09",
  "TRAP 10",
  "TRAP 11",
  "TRAP 12",
  "TRAP 13",
  "TRAP 14",
  "TRAP 15",
];

export const cia = {
  "CIAB PRA": 0xbfd000,
  "CIAB PRB": 0xbfd100,
  "CIAB DDRA": 0xbfd200,
  "CIAB DDRB": 0xbfd300,
  "CIAB TALO": 0xbfd400,
  "CIAB TAHI": 0xbfd500,
  "CIAB TBLO": 0xbfd600,
  "CIAB TBHI": 0xbfd700,
  "CIAB TDLO": 0xbfd800,
  "CIAB TDMD": 0xbfd900,
  "CIAB TDHI": 0xbfda00,
  "CIAB SDR": 0xbfdc00,
  "CIAB ICR": 0xbfdd00,
  "CIAB CRA": 0xbfde00,
  "CIAB CRB": 0xbfdf00,
  "CIAA PRA": 0xbfe001,
  "CIAA PRB": 0xbfe101,
  "CIAA DDRA": 0xbfe201,
  "CIAA DDRB": 0xbfe301,
  "CIAA TALO": 0xbfe401,
  "CIAA TAHI": 0xbfe501,
  "CIAA TBLO": 0xbfe601,
  "CIAA TBHI": 0xbfe701,
  "CIAA TDLO": 0xbfe801,
  "CIAA TDMD": 0xbfe901,
  "CIAA TDHI": 0xbfea01,
  "CIAA SDR": 0xbfec01,
  "CIAA ICR": 0xbfed01,
  "CIAA CRA": 0xbfee01,
  "CIAA CRB": 0xbfef01,
  "CLK S1": 0xdc0000,
  "CLK S10": 0xdc0004,
  "CLK MI1": 0xdc0008,
  "CLK MI10": 0xdc000c,
  "CLK H1": 0xdc0010,
  "CLK H10": 0xdc0014,
  "CLK D1": 0xdc0018,
  "CLK D10": 0xdc001c,
  "CLK MO1": 0xdc0020,
  "CLK MO10": 0xdc0024,
  "CLK Y1": 0xdc0028,
  "CLK Y10": 0xdc002e,
  "CLK WEEK": 0xdc0030,
  "CLK CD": 0xdc0034,
  "CLK CE": 0xdc0038,
  "CLK CF": 0xdc003c,
};

export enum Threads {
  CPU = 1,
  COPPER = 2,
}
