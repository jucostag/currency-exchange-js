(function () {
"use strict";
angular.module("currencyExchange")

    .service("currenciesApi", function(){
        this.get = function(){

            return {
                    "USD": {
                        "symbol": "$",
                        "name": "Dólar americano",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "USD",
                        "name_plural": "Dólares americanos"
                    },
                    "CAD": {
                        "symbol": "CA$",
                        "name": "Dólar canadense",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CAD",
                        "name_plural": "Dólares canadenses"
                    },
                    "EUR": {
                        "symbol": "€",
                        "name": "Euro",
                        "symbol_native": "€",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "EUR",
                        "name_plural": "Euros"
                    },
                    "AED": {
                        "symbol": "AED",
                        "name": "Dirham dos Emirados Árabes",
                        "symbol_native": "د.إ.‏",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "AED",
                        "name_plural": "Dirhams dos Emirados Árabes Unidos"
                    },
                    "AFN": {
                        "symbol": "Af",
                        "name": "Afgani Afeganistão",
                        "symbol_native": "؋",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "AFN",
                        "name_plural": "Afganis Afeganistão"
                    },
                    "ALL": {
                        "symbol": "ALL",
                        "name": "Lek albanês",
                        "symbol_native": "Lek",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "ALL",
                        "name_plural": "Lekë albanês"
                    },
                    "AMD": {
                        "symbol": "AMD",
                        "name": "Dram armênio",
                        "symbol_native": "դր.",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "AMD",
                        "name_plural": "Drams armênios"
                    },
                    "ARS": {
                        "symbol": "AR$",
                        "name": "Peso argentino",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ARS",
                        "name_plural": "Pesos argentinos"
                    },
                    "AUD": {
                        "symbol": "AU$",
                        "name": "Dólar australiano",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "AUD",
                        "name_plural": "Dólares australianos"
                    },
                    "AZN": {
                        "symbol": "man.",
                        "name": "Manat da República do Azerbeijão",
                        "symbol_native": "ман.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "AZN",
                        "name_plural": "Manats da República do Azerbeijão"
                    },
                    "BAM": {
                        "symbol": "KM",
                        "name": "Marco conversÍvel da Bósnia e Herzegovina",
                        "symbol_native": "KM",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BAM",
                        "name_plural": "Marcos conversÍveis da Bósnia e Herzegovina"
                    },
                    "BDT": {
                        "symbol": "Tk",
                        "name": "Taka de Bangladesh",
                        "symbol_native": "৳",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BDT",
                        "name_plural": "Takas de Bangladesh"
                    },
                    "BGN": {
                        "symbol": "BGN",
                        "name": "Lev búlgaro",
                        "symbol_native": "лв.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BGN",
                        "name_plural": "Levs búlgaros"
                    },
                    "BHD": {
                        "symbol": "BD",
                        "name": "Dinar do Bahrein",
                        "symbol_native": "د.ب.‏",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "BHD",
                        "name_plural": "Dinares do Bahrein"
                    },
                    "BIF": {
                        "symbol": "FBu",
                        "name": "Franco de Burundi",
                        "symbol_native": "FBu",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "BIF",
                        "name_plural": "Francos de Burundi"
                    },
                    "BND": {
                        "symbol": "BN$",
                        "name": "Dólar de Brunei",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BND",
                        "name_plural": "Dólares de Brunei"
                    },
                    "BOB": {
                        "symbol": "Bs",
                        "name": "Boliviano da Bolívia",
                        "symbol_native": "Bs",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BOB",
                        "name_plural": "Bolivianos da Bolívia"
                    },
                    "BRL": {
                        "symbol": "R$",
                        "name": "Real brasileiro",
                        "symbol_native": "R$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BRL",
                        "name_plural": "Reais brasileiros"
                    },
                    "BWP": {
                        "symbol": "BWP",
                        "name": "Pula da República do Botswana",
                        "symbol_native": "P",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BWP",
                        "name_plural": "Pulas da República do Botswana"
                    },
                    "BYR": {
                        "symbol": "BYR",
                        "name": "Rublo bielorusso",
                        "symbol_native": "BYR",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "BYR",
                        "name_plural": "Rublos da Bielorrússia"
                    },
                    "BZD": {
                        "symbol": "BZ$",
                        "name": "Dólar de Belize",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "BZD",
                        "name_plural": "Dólares de Belize"
                    },
                    "CDF": {
                        "symbol": "CDF",
                        "name": "Franco da República do Congo",
                        "symbol_native": "FrCD",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CDF",
                        "name_plural": "Francos da República do Congo "
                    },
                    "CHF": {
                        "symbol": "CHF",
                        "name": "Franco suíço",
                        "symbol_native": "CHF",
                        "decimal_digits": 2,
                        "rounding": 0.05,
                        "code": "CHF",
                        "name_plural": "Francos da Suíça"
                    },
                    "CLP": {
                        "symbol": "CL$",
                        "name": "Peso chileno",
                        "symbol_native": "$",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "CLP",
                        "name_plural": "Pesos chilenos"
                    },
                    "CNY": {
                        "symbol": "CN¥",
                        "name": "Yuan chinês",
                        "symbol_native": "CN¥",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CNY",
                        "name_plural": "Yuan chinêses"
                    },
                    "COP": {
                        "symbol": "CO$",
                        "name": "Peso colombiano",
                        "symbol_native": "$",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "COP",
                        "name_plural": "Pesos colombianos"
                    },
                    "CRC": {
                        "symbol": "₡",
                        "name": "Col&oacut;en costarriquenho",
                        "symbol_native": "₡",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "CRC",
                        "name_plural": "Colóns costarriquenhos"
                    },
                    "CVE": {
                        "symbol": "CV$",
                        "name": "Escudo de Cabo Verde",
                        "symbol_native": "CV$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CVE",
                        "name_plural": "Escudos de Cabo Verde"
                    },
                    "CZK": {
                        "symbol": "Kč",
                        "name": "Coroa Tcheca",
                        "symbol_native": "Kč",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "CZK",
                        "name_plural": "Coroas da República Tcheca"
                    },
                    "DJF": {
                        "symbol": "Fdj",
                        "name": "Franco de Djubouti",
                        "symbol_native": "Fdj",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "DJF",
                        "name_plural": "Francos de Djubouti"
                    },
                    "DKK": {
                        "symbol": "Dkr",
                        "name": "Coroa dinamarquesa",
                        "symbol_native": "kr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "DKK",
                        "name_plural": "Coroas da Dinamarca"
                    },
                    "DOP": {
                        "symbol": "RD$",
                        "name": "Peso dominicano",
                        "symbol_native": "RD$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "DOP",
                        "name_plural": "Pesos da República Dominicana"
                    },
                    "DZD": {
                        "symbol": "DA",
                        "name": "Dinar argelino",
                        "symbol_native": "د.ج.‏",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "DZD",
                        "name_plural": "Dinares argelinos"
                    },
                    "EEK": {
                        "symbol": "Ekr",
                        "name": "Coroa da Estónia",
                        "symbol_native": "kr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "EEK",
                        "name_plural": "Coroas da Estónia"
                    },
                    "EGP": {
                        "symbol": "EGP",
                        "name": "Libra egípcia",
                        "symbol_native": "ج.م.‏",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "EGP",
                        "name_plural": "Libras egípcias"
                    },
                    "ERN": {
                        "symbol": "Nfk",
                        "name": "Nakfa da Eritreia",
                        "symbol_native": "Nfk",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ERN",
                        "name_plural": "Nakfas da Eritreia"
                    },
                    "ETB": {
                        "symbol": "Br",
                        "name": "Birr etíope",
                        "symbol_native": "Br",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ETB",
                        "name_plural": "Birrs etíopes"
                    },
                    "GBP": {
                        "symbol": "£",
                        "name": "Libra esterlina do Reino Unido",
                        "symbol_native": "£",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GBP",
                        "name_plural": "Libras esterlinas do Reino Unido"
                    },
                    "GEL": {
                        "symbol": "GEL",
                        "name": "Lari da Geórgia",
                        "symbol_native": "GEL",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GEL",
                        "name_plural": "Laris da Geórgia"
                    },
                    "GHS": {
                        "symbol": "GH₵",
                        "name": "Cedi da Gana",
                        "symbol_native": "GH₵",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GHS",
                        "name_plural": "Cedis da Gana"
                    },
                    "GNF": {
                        "symbol": "FG",
                        "name": "Franco de Guiné",
                        "symbol_native": "FG",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "GNF",
                        "name_plural": "Francos de Guiné"
                    },
                    "GTQ": {
                        "symbol": "GTQ",
                        "name": "Quetzal da Guatemala",
                        "symbol_native": "Q",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "GTQ",
                        "name_plural": "Quetzals da Guatemala"
                    },
                    "HKD": {
                        "symbol": "HK$",
                        "name": "Dólar de Hong Kong",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "HKD",
                        "name_plural": "Dólares de Hong Kong"
                    },
                    "HNL": {
                        "symbol": "HNL",
                        "name": "Lempira de Honduras",
                        "symbol_native": "L",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "HNL",
                        "name_plural": "Lempiras de Honduras"
                    },
                    "HRK": {
                        "symbol": "kn",
                        "name": "Kuna Croata",
                        "symbol_native": "kn",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "HRK",
                        "name_plural": "Kunas croatas"
                    },
                    "HUF": {
                        "symbol": "Ft",
                        "name": "Florim Húngaro",
                        "symbol_native": "Ft",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "HUF",
                        "name_plural": "Florins húngaros"
                    },
                    "IDR": {
                        "symbol": "Rp",
                        "name": "Rupia indonésia",
                        "symbol_native": "Rp",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "IDR",
                        "name_plural": "Rupias indonésias"
                    },
                    "ILS": {
                        "symbol": "₪",
                        "name": "Shekel de Israel",
                        "symbol_native": "₪",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ILS",
                        "name_plural": "Shekels de Israel"
                    },
                    "INR": {
                        "symbol": "Rs",
                        "name": "Rupia indiana",
                        "symbol_native": "টকা",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "INR",
                        "name_plural": "Rupias indianas"
                    },
                    "IQD": {
                        "symbol": "IQD",
                        "name": "Dinar iraquiano",
                        "symbol_native": "د.ع.‏",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "IQD",
                        "name_plural": "Dinares iraquianos"
                    },
                    "IRR": {
                        "symbol": "IRR",
                        "name": "Rial iraniano",
                        "symbol_native": "﷼",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "IRR",
                        "name_plural": "Rials iranianos"
                    },
                    "ISK": {
                        "symbol": "Ikr",
                        "name": "Coroa islandesa",
                        "symbol_native": "kr",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "ISK",
                        "name_plural": "Coroas islandesas"
                    },
                    "JMD": {
                        "symbol": "J$",
                        "name": "Dólar jamaicano",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "JMD",
                        "name_plural": "Dólares jamaicanos"
                    },
                    "JOD": {
                        "symbol": "JD",
                        "name": "Dinar da Jordânia",
                        "symbol_native": "د.أ.‏",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "JOD",
                        "name_plural": "Dinares da Jordânia"
                    },
                    "JPY": {
                        "symbol": "¥",
                        "name": "Iene japonês",
                        "symbol_native": "￥",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "JPY",
                        "name_plural": "Ienes japoneses"
                    },
                    "KES": {
                        "symbol": "Ksh",
                        "name": "Xelim queniano",
                        "symbol_native": "Ksh",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "KES",
                        "name_plural": "Xelins quenianos"
                    },
                    "KHR": {
                        "symbol": "KHR",
                        "name": "Riel de Camboja",
                        "symbol_native": "៛",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "KHR",
                        "name_plural": "Riels de Camboja"
                    },
                    "KMF": {
                        "symbol": "CF",
                        "name": "Franco de Comores",
                        "symbol_native": "FC",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "KMF",
                        "name_plural": "Francos de Comores"
                    },
                    "KRW": {
                        "symbol": "₩",
                        "name": "Won da Coreia do Sul",
                        "symbol_native": "₩",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "KRW",
                        "name_plural": "Wons da Coreia do Sul"
                    },
                    "KWD": {
                        "symbol": "KD",
                        "name": "Dinar de Kuwait",
                        "symbol_native": "د.ك.‏",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "KWD",
                        "name_plural": "Dinares de Kuwait"
                    },
                    "KZT": {
                        "symbol": "KZT",
                        "name": "Tenge do Cazaquistão",
                        "symbol_native": "тңг.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "KZT",
                        "name_plural": "Tenges do Cazaquistão"
                    },
                    "LBP": {
                        "symbol": "LB£",
                        "name": "Libra libanesa",
                        "symbol_native": "ل.ل.‏",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "LBP",
                        "name_plural": "Libras libanesas"
                    },
                    "LKR": {
                        "symbol": "SLRs",
                        "name": "Rupia do Siri Lanka",
                        "symbol_native": "SL Re",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "LKR",
                        "name_plural": "Rupias do Siri Lanka"
                    },
                    "LTL": {
                        "symbol": "Lt",
                        "name": "Litas lituano",
                        "symbol_native": "Lt",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "LTL",
                        "name_plural": "Litas lituano"
                    },
                    "LVL": {
                        "symbol": "Ls",
                        "name": "Lat da Letônia",
                        "symbol_native": "Ls",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "LVL",
                        "name_plural": "Lates da Letônia"
                    },
                    "LYD": {
                        "symbol": "LD",
                        "name": "Dinar libanês",
                        "symbol_native": "د.ل.‏",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "LYD",
                        "name_plural": "Dinares libanêses"
                    },
                    "MAD": {
                        "symbol": "MAD",
                        "name": "Dirham marroquino",
                        "symbol_native": "د.م.‏",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MAD",
                        "name_plural": "Dirhams marroquinos"
                    },
                    "MDL": {
                        "symbol": "MDL",
                        "name": "Leu moldávio",
                        "symbol_native": "MDL",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MDL",
                        "name_plural": "Lei moldávios"
                    },
                    "MGA": {
                        "symbol": "MGA",
                        "name": "Ariary de Madagáscar",
                        "symbol_native": "MGA",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "MGA",
                        "name_plural": "Ariaries de Madagáscar"
                    },
                    "MKD": {
                        "symbol": "MKD",
                        "name": "Dinar da Macedônia",
                        "symbol_native": "MKD",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MKD",
                        "name_plural": "Dinares da Macedônia "
                    },
                    "MMK": {
                        "symbol": "MMK",
                        "name": "Quiat de Myanmar",
                        "symbol_native": "K",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "MMK",
                        "name_plural": "Quiated de Myanmar"
                    },
                    "MOP": {
                        "symbol": "MOP$",
                        "name": "Pataca do Macau",
                        "symbol_native": "MOP$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MOP",
                        "name_plural": "Patacas do Macau"
                    },
                    "MUR": {
                        "symbol": "MURs",
                        "name": "Rupia de Maurício",
                        "symbol_native": "MURs",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "MUR",
                        "name_plural": "Rupias de Maurício"
                    },
                    "MXN": {
                        "symbol": "MX$",
                        "name": "Peso mexicano",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MXN",
                        "name_plural": "Pesos mexicanos"
                    },
                    "MYR": {
                        "symbol": "RM",
                        "name": "Ringgit da Malásia",
                        "symbol_native": "RM",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MYR",
                        "name_plural": "Ringgits da Malásia"
                    },
                    "MZN": {
                        "symbol": "MTn",
                        "name": "Metical de Moçambique",
                        "symbol_native": "MTn",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "MZN",
                        "name_plural": "Meticals deMoçambique"
                    },
                    "NAD": {
                        "symbol": "N$",
                        "name": "Dólar da Namíbia",
                        "symbol_native": "N$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NAD",
                        "name_plural": "Dólares da Namíbia"
                    },
                    "NGN": {
                        "symbol": "₦",
                        "name": "Naira da Nigéria",
                        "symbol_native": "₦",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NGN",
                        "name_plural": "Naira da Nigéria"
                    },
                    "NIO": {
                        "symbol": "C$",
                        "name": "Córdoba de Nicarágua",
                        "symbol_native": "C$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NIO",
                        "name_plural": "Córdobas de Nicarágua"
                    },
                    "NOK": {
                        "symbol": "Nkr",
                        "name": "Coroa norueguesa",
                        "symbol_native": "kr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NOK",
                        "name_plural": "Coroas norueguesas"
                    },
                    "NPR": {
                        "symbol": "NPRs",
                        "name": "Rupia do Nepal",
                        "symbol_native": "नेरू",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NPR",
                        "name_plural": "Rupias do Nepal"
                    },
                    "NZD": {
                        "symbol": "NZ$",
                        "name": "Dólar da Nova Zelândia",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "NZD",
                        "name_plural": "Dólares da Nova Zelândia"
                    },
                    "OMR": {
                        "symbol": "OMR",
                        "name": "Rial de Omã",
                        "symbol_native": "ر.ع.‏",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "OMR",
                        "name_plural": "Rials de Omã"
                    },
                    "PAB": {
                        "symbol": "B/.",
                        "name": "Balboa do Panamá",
                        "symbol_native": "B/.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PAB",
                        "name_plural": "Balboa do Panamá"
                    },
                    "PEN": {
                        "symbol": "S/.",
                        "name": "Nuevo Sol peruano",
                        "symbol_native": "S/.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PEN",
                        "name_plural": "Nuevos Soles peruanos"
                    },
                    "PHP": {
                        "symbol": "₱",
                        "name": "Peso de Filipinas",
                        "symbol_native": "₱",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PHP",
                        "name_plural": "Pesos de Filipinas"
                    },
                    "PKR": {
                        "symbol": "PKRs",
                        "name": "Rúpia do Paquistão",
                        "symbol_native": "₨",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "PKR",
                        "name_plural": "Rúpias do Paquistão"
                    },
                    "PLN": {
                        "symbol": "zł",
                        "name": "Zloty da Polônia",
                        "symbol_native": "zł",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "PLN",
                        "name_plural": "Zlotys da Polônia"
                    },
                    "PYG": {
                        "symbol": "₲",
                        "name": "Guarani paraguaio",
                        "symbol_native": "₲",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "PYG",
                        "name_plural": "Guaranis paraguaios"
                    },
                    "QAR": {
                        "symbol": "QR",
                        "name": "Rial Qatar",
                        "symbol_native": "ر.ق.‏",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "QAR",
                        "name_plural": "Rials Qatar"
                    },
                    "RON": {
                        "symbol": "RON",
                        "name": "Leu romeno",
                        "symbol_native": "RON",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "RON",
                        "name_plural": "Lei romeno"
                    },
                    "RSD": {
                        "symbol": "din.",
                        "name": "Dinar sérvio",
                        "symbol_native": "дин.",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "RSD",
                        "name_plural": "Dinares sérvios"
                    },
                    "RUB": {
                        "symbol": "RUB",
                        "name": "Rublo russo",
                        "symbol_native": "руб.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "RUB",
                        "name_plural": "Rublos russos"
                    },
                    "RWF": {
                        "symbol": "RWF",
                        "name": "Franco de Ruanda",
                        "symbol_native": "FR",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "RWF",
                        "name_plural": "Francos de Ruanda"
                    },
                    "SAR": {
                        "symbol": "SR",
                        "name": "Riyal da Arábia Saudita",
                        "symbol_native": "ر.س.‏",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SAR",
                        "name_plural": "Riyal da Arábia Saudita"
                    },
                    "SDG": {
                        "symbol": "SDG",
                        "name": "Dinar Sudão",
                        "symbol_native": "SDG",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SDG",
                        "name_plural": "Dinares Sudão"
                    },
                    "SEK": {
                        "symbol": "Skr",
                        "name": "Coroa da Suécia",
                        "symbol_native": "kr",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SEK",
                        "name_plural": "Coroas da Suécia"
                    },
                    "SGD": {
                        "symbol": "S$",
                        "name": "Dólar de Cingapura",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "SGD",
                        "name_plural": "Dólares de Cingapura"
                    },
                    "SOS": {
                        "symbol": "Ssh",
                        "name": "Xelim da Somália",
                        "symbol_native": "Ssh",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "SOS",
                        "name_plural": "Xelins da Somália"
                    },
                    "SYP": {
                        "symbol": "SY£",
                        "name": "Libra da Síria",
                        "symbol_native": "ل.س.‏",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "SYP",
                        "name_plural": "Libras da Sírias"
                    },
                    "THB": {
                        "symbol": "฿",
                        "name": "Baht da Tailândia",
                        "symbol_native": "฿",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "THB",
                        "name_plural": "Baht da Tailândia"
                    },
                    "TND": {
                        "symbol": "DT",
                        "name": "Dinar da Tunísia",
                        "symbol_native": "د.ت.‏",
                        "decimal_digits": 3,
                        "rounding": 0,
                        "code": "TND",
                        "name_plural": "Dinares da Tunísia"
                    },
                    "TOP": {
                        "symbol": "T$",
                        "name": "Pa’anga de Tonga",
                        "symbol_native": "T$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TOP",
                        "name_plural": "Pa’angas de Tonga"
                    },
                    "TRY": {
                        "symbol": "TL",
                        "name": "Lira turca",
                        "symbol_native": "TL",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TRY",
                        "name_plural": "Liras turcas"
                    },
                    "TTD": {
                        "symbol": "TT$",
                        "name": "Dólar de Trinidad e Tobago",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TTD",
                        "name_plural": "Dólares de Trinidad e Tobago"
                    },
                    "TWD": {
                        "symbol": "NT$",
                        "name": "Novo dólar taiwanês",
                        "symbol_native": "NT$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "TWD",
                        "name_plural": "Novos dólares taiwanêses"
                    },
                    "TZS": {
                        "symbol": "TSh",
                        "name": "Xelim da Tanzânia",
                        "symbol_native": "TSh",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "TZS",
                        "name_plural": "Xelins da Tanzânia"
                    },
                    "UAH": {
                        "symbol": "₴",
                        "name": "Grívnia ucraniano",
                        "symbol_native": "₴",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "UAH",
                        "name_plural": "Grívnias da Ucrânia"
                    },
                    "UGX": {
                        "symbol": "USh",
                        "name": "Xelim da Uganda",
                        "symbol_native": "USh",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "UGX",
                        "name_plural": "Xelins da Uganda"
                    },
                    "UYU": {
                        "symbol": "$U",
                        "name": "Peso uruguaio",
                        "symbol_native": "$",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "UYU",
                        "name_plural": "Pesos uruguaios"
                    },
                    "UZS": {
                        "symbol": "UZS",
                        "name": "Som Uzbeque do Uzbequistão",
                        "symbol_native": "UZS",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "UZS",
                        "name_plural": "Sons Uzbeques do Uzbequistão "
                    },
                    "VEF": {
                        "symbol": "Bs.F.",
                        "name": "Bolivar venezuelano",
                        "symbol_native": "Bs.F.",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "VEF",
                        "name_plural": "Bolivares venezuelanos"
                    },
                    "VND": {
                        "symbol": "₫",
                        "name": "Dong vietnamita;",
                        "symbol_native": "₫",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "VND",
                        "name_plural": "Dong do Vietnã"
                    },
                    "YER": {
                        "symbol": "YR",
                        "name": "Rial iemenita",
                        "symbol_native": "ر.ي.‏",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "YER",
                        "name_plural": "Rials iemenitas"
                    },
                    "ZAR": {
                        "symbol": "R",
                        "name": "Rand da África do Sul",
                        "symbol_native": "R",
                        "decimal_digits": 2,
                        "rounding": 0,
                        "code": "ZAR",
                        "name_plural": "Rand da África do Sul"
                    },
                    "ZMK": {
                        "symbol": "ZK",
                        "name": "Kwacha zambiano",
                        "symbol_native": "ZK",
                        "decimal_digits": 0,
                        "rounding": 0,
                        "code": "ZMK",
                        "name_plural": "Kwacha zambiano"
                    }
                };

        };
    });
}());