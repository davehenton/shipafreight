const enus = {
  movementTypes: {
    DOOR_TO_DOOR: 'Door to Door',
    PORT_TO_DOOR: 'Port to Door',
    DOOR_TO_PORT: 'Door to Port',
    PORT_TO_PORT: 'Port to Port',
  },
  dimensionsUOMs: {
    CM: 'cm',
    MM: 'mm',
    IN: 'in',
    M: 'm',
  },
  weightUOMs: {
    KG: 'kg',
    LB: 'lb',
    TON: 'ton',
  },
  hazardousClasses: {
    EXPLOSIVES: 'Explosives',
    GASES: 'Gases',
    FLAMMABLE_LIQUIDS: 'Flammable Liquids',
    FLAMMABLE_SOLIDS: 'Flammable Solids',
    OXIDIZING_SUBSTANCES: 'Oxidizing Substances',
    TOXIC_AND_INFECTIOUS_SUBSTANCES: 'Toxic and Infectious Substances',
    RADIOACTIVE_MATERIAL: 'Radioactive Material',
    CORROSIVES: 'Corrosives',
    OTHERS: 'Others',
  },
  currencyOptions: {
    AED: 'AED - Emirati Dirham',
    AFN: 'AFN - Afghan Afghani',
    ALL: 'ALL - Albanian Lek',
    AMD: 'AMD - Armenian Dram',
    ANG: 'ANG - Dutch Guilder',
    AOA: 'AOA - Angolan Kwanza',
    ARS: 'ARS - Argentine Peso',
    AUD: 'AUD - Australian Dollar',
    AWG: 'AWG - Aruban or Dutch Guilder',
    AZN: 'AZN - Azerbaijan Manat',
    BAM: 'BAM - Bosnian Convertible Marka',
    BBD: 'BBD - Barbadian or Bajan Dollar',
    BDT: 'BDT - Bangladeshi Taka',
    BGN: 'BGN - Bulgarian Lev',
    BHD: 'BHD - Bahraini Dinar',
    BIF: 'BIF - Burundian Franc',
    BMD: 'BMD - Bermudian Dollar',
    BND: 'BND - Bruneian Dollar',
    BOB: 'BOB - Bolivian Bolíviano',
    BRL: 'BRL - Brazilian Real',
    BSD: 'BSD - Bahamian Dollar',
    BTN: 'BTN - Bhutanese Ngultrum',
    BWP: 'BWP - Botswana Pula',
    BYN: 'BYN - Belarusian Ruble',
    BZD: 'BZD - Belizean Dollar',
    CAD: 'CAD - Canadian Dollar',
    CDF: 'CDF - Congolese Franc',
    CHF: 'CHF - Swiss Franc',
    CLP: 'CLP - Chilean Peso',
    CNY: 'CNY - Chinese Yuan Renminbi',
    COP: 'COP - Colombian Peso',
    CRC: 'CRC - Costa Rican Colon',
    CUC: 'CUC - Cuban Convertible Peso',
    CUP: 'CUP - Cuban Peso',
    CVE: 'CVE - Cape Verdean Escudo',
    CZK: 'CZK - Czech Koruna',
    DJF: 'DJF - Djiboutian Franc',
    DKK: 'DKK - Danish Krone',
    DOP: 'DOP - Dominican Peso',
    DZD: 'DZD - Algerian Dinar',
    EGP: 'EGP - Egyptian Pound',
    ERN: 'ERN - Eritrean Nakfa',
    ETB: 'ETB - Ethiopian Birr',
    EUR: 'EUR - Euro',
    FJD: 'FJD - Fijian Dollar',
    FKP: 'FKP - Falkland Island Pound',
    GBP: 'GBP - British Pound',
    GEL: 'GEL - Georgian Lari',
    GGP: 'GGP - Guernsey Pound',
    GHS: 'GHS - Ghanaian Cedi',
    GIP: 'GIP - Gibraltar Pound',
    GMD: 'GMD - Gambian Dalasi',
    GNF: 'GNF - Guinean Franc',
    GTQ: 'GTQ - Guatemalan Quetzal',
    GYD: 'GYD - Guyanese Dollar',
    HKD: 'HKD - Hong Kong Dollar',
    HNL: 'HNL - Honduran Lempira',
    HRK: 'HRK - Croatian Kuna',
    HTG: 'HTG - Haitian Gourde',
    HUF: 'HUF - Hungarian Forint',
    IDR: 'IDR - Indonesian Rupiah',
    ILS: 'ILS - Israeli Shekel',
    IMP: 'IMP - Isle of Man Pound',
    INR: 'INR - Indian Rupee',
    IQD: 'IQD - Iraqi Dinar',
    IRR: 'IRR - Iranian Rial',
    ISK: 'ISK - Icelandic Krona',
    JEP: 'JEP - Jersey Pound',
    JMD: 'JMD - Jamaican Dollar',
    JOD: 'JOD - Jordanian Dinar',
    JPY: 'JPY - Japanese Yen',
    KES: 'KES - Kenyan Shilling',
    KGS: 'KGS - Kyrgyzstani Som',
    KHR: 'KHR - Cambodian Riel',
    KMF: 'KMF - Comorian Franc',
    KPW: 'KPW - North Korean Won',
    KRW: 'KRW - South Korean Won',
    KWD: 'KWD - Kuwaiti Dinar',
    KYD: 'KYD - Caymanian Dollar',
    KZT: 'KZT - Kazakhstani Tenge',
    LAK: 'LAK - Lao Kip',
    LBP: 'LBP - Lebanese Pound',
    LKR: 'LKR - Sri Lankan Rupee',
    LRD: 'LRD - Liberian Dollar',
    LSL: 'LSL - Basotho Loti',
    LYD: 'LYD - Libyan Dinar',
    MAD: 'MAD - Moroccan Dirham',
    MDL: 'MDL - Moldovan Leu',
    MGA: 'MGA - Malagasy Ariary',
    MKD: 'MKD - Macedonian Denar',
    MMK: 'MMK - Burmese Kyat',
    MNT: 'MNT - Mongolian Tughrik',
    MOP: 'MOP - Macau Pataca',
    MRO: 'MRO - Mauritanian Ouguiya',
    MUR: 'MUR - Mauritian Rupee',
    MVR: 'MVR - Maldivian Rufiyaa',
    MWK: 'MWK - Malawian Kwacha',
    MXN: 'MXN - Mexican Peso',
    MYR: 'MYR - Malaysian Ringgit',
    MZN: 'MZN - Mozambican Metical',
    NAD: 'NAD - Namibian Dollar',
    NGN: 'NGN - Nigerian Naira',
    NIO: 'NIO - Nicaraguan Cordoba',
    NOK: 'NOK - Norwegian Krone',
    NPR: 'NPR - Nepalese Rupee',
    NZD: 'NZD - New Zealand Dollar',
    OMR: 'OMR - Omani Rial',
    PAB: 'PAB - Panamanian Balboa',
    PEN: 'PEN - Peruvian Sol',
    PGK: 'PGK - Papua New Guinean Kina',
    PHP: 'PHP - Philippine Peso',
    PKR: 'PKR - Pakistani Rupee',
    PLN: 'PLN - Polish Zloty',
    PYG: 'PYG - Paraguayan Guarani',
    QAR: 'QAR - Qatari Riyal',
    RON: 'RON - Romanian Leu',
    RSD: 'RSD - Serbian Dinar',
    RUB: 'RUB - Russian Ruble',
    RWF: 'RWF - Rwandan Franc',
    SAR: 'SAR - Saudi Arabian Riyal',
    SBD: 'SBD - Solomon Islander Dollar',
    SCR: 'SCR - Seychellois Rupee',
    SDG: 'SDG - Sudanese Pound',
    SEK: 'SEK - Swedish Krona',
    SGD: 'SGD - Singapore Dollar',
    SHP: 'SHP - Saint Helenian Pound',
    SLL: 'SLL - Sierra Leonean Leone',
    SOS: 'SOS - Somali Shilling',
    SPL: 'SPL - Seborgan Luigino',
    SRD: 'SRD - Surinamese Dollar',
    STD: 'STD - Sao Tomean Dobra',
    SVC: 'SVC - Salvadoran Colon',
    SYP: 'SYP - Syrian Pound',
    SZL: 'SZL - Swazi Lilangeni',
    THB: 'THB - Thai Baht',
    TJS: 'TJS - Tajikistani Somoni',
    TMT: 'TMT - Turkmenistani Manat',
    TMD: 'TND - Tunisian Dinar',
    TOP: "TOP - Tongan Pa'anga",
    TRY: 'TRY - Turkish Lira',
    TTD: 'TTD - Trinidadian Dollar',
    TVD: 'TVD - Tuvaluan Dollar',
    TWD: 'TWD - Taiwan New Dollar',
    TZS: 'TZS - Tanzanian Shilling',
    UAH: 'UAH - Ukrainian Hryvnia',
    UGX: 'UGX - Ugandan Shilling',
    USD: 'USD - US Dollar',
    UYU: 'UYU - Uruguayan Peso',
    UZS: 'UZS - Uzbekistani Som',
    VEF: 'VEF - Venezuelan Bolívar',
    VND: 'VND - Vietnamese Dong',
    VUV: 'VUV - Ni-Vanuatu Vatu',
    WST: 'WST - Samoan Tala',
    XAF: 'XAF - Central African CFA Franc BEAC',
    XAG: 'XAG - Silver Ounce',
    XAU: 'XAU - Gold Ounce',
    XBT: 'XBT - Bitcoin',
    XCD: 'XCD - East Caribbean Dollar',
    XDR: 'XDR - IMF Special Drawing Rights',
    XOF: 'XOF - CFA Franc',
    XPD: 'XPD - Palladium Ounce',
    XPF: 'XPF - CFP Franc',
    XPT: 'XPT - Platinum Ounce',
    YER: 'YER - Yemeni Rial',
    ZAR: 'ZAR - South African Rand',
    ZMW: 'ZMW - Zambian Kwacha',
    ZWD: 'ZWD - Zimbabwean Dollar',
  },
};

export default enus;
