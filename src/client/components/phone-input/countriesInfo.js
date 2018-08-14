const countries = [
    {
        text: "+93",
        value: "+93",
        flag: "af",
        key: "af",
        content: "Afghanistan"
    },
    {
        content: "Aland Islands",
        text: "+358",
        value: "+358",
        flag: "ax",
        key: "ax"
    },
    {
        content: "Albania",
        text: "+355",
        value: "+355",
        flag: "al",
        key: "al"
    },
    {
        content: "Algeria",
        text: "+213",
        value: "+213",
        flag: "dz",
        key: "dz"
    },
    {
        content: "AmericanSamoa",
        text: "+1 684",
        value: "+1 684",
        flag: "as",
        key: "as"
    },
    {
        content: "Andorra",
        text: "+376",
        value: "+376",
        flag: "ad",
        key: "ad"
    },
    {
        content: "Angola",
        text: "+244",
        value: "+244",
        flag: "ao",
        key: "ao"
    },
    {
        content: "Anguilla",
        text: "+1 264",
        value: "+1 264",
        flag: "ai",
        key: "ai"
    },
    {
        content: "Antigua and Barbuda",
        text: "+1268",
        value: "+1268",
        flag: "ag",
        key: "ag"
    },
    {
        content: "Argentina",
        text: "+54",
        value: "+54",
        flag: "ar",
        key: "ar"
    },
    {
        content: "Armenia",
        text: "+374",
        value: "+374",
        flag: "am",
        key: "am"
    },
    {
        content: "Aruba",
        text: "+297",
        value: "+297",
        flag: "aw",
        key: "aw"
    },
    {
        content: "Australia",
        text: "+61",
        value: "+61",
        flag: "au",
        key: "au"
    },
    {
        content: "Austria",
        text: "+43",
        value: "+43",
        flag: "at",
        key: "at"
    },
    {
        content: "Azerbaijan",
        text: "+994",
        value: "+994",
        flag: "az",
        key: "az"
    },
    {
        content: "Bahamas",
        text: "+1 242",
        value: "+1 242",
        flag: "bs",
        key: "bs"
    },
    {
        content: "Bahrain",
        text: "+973",
        value: "+973",
        flag: "bh",
        key: "bh"
    },
    {
        content: "Bangladesh",
        text: "+880",
        value: "+880",
        flag: "bd",
        key: "bd"
    },
    {
        content: "Barbados",
        text: "+1 246",
        value: "+1 246",
        flag: "bb",
        key: "bb"
    },
    {
        content: "Belarus",
        text: "+375",
        value: "+375",
        flag: "by",
        key: "by"
    },
    {
        content: "Belgium",
        text: "+32",
        value: "+32",
        flag: "be",
        key: "be"
    },
    {
        content: "Belize",
        text: "+501",
        value: "+501",
        flag: "bz",
        key: "bz"
    },
    {
        content: "Benin",
        text: "+229",
        value: "+229",
        flag: "bj",
        key: "bj"
    },
    {
        content: "Bermuda",
        text: "+1 441",
        value: "+1 441",
        flag: "bm",
        key: "bm"
    },
    {
        content: "Bhutan",
        text: "+975",
        value: "+975",
        flag: "bt",
        key: "bt"
    },
    {
        content: "Bolivia, Plurinational State of",
        text: "+591",
        value: "+591",
        flag: "bo",
        key: "bo"
    },
    {
        content: "Bosnia and Herzegovina",
        text: "+387",
        value: "+387",
        flag: "ba",
        key: "ba"
    },
    {
        content: "Botswana",
        text: "+267",
        value: "+267",
        flag: "bw",
        key: "bw"
    },
    {
        content: "Brazil",
        text: "+55",
        value: "+55",
        flag: "br",
        key: "br"
    },
    {
        content: "British Indian Ocean Territory",
        text: "+246",
        value: "+246",
        flag: "io",
        key: "io"
    },
    {
        content: "Brunei Darussalam",
        text: "+673",
        value: "+673",
        flag: "bn",
        key: "bn"
    },
    {
        content: "Bulgaria",
        text: "+359",
        value: "+359",
        flag: "bg",
        key: "bg"
    },
    {
        content: "Burkina Faso",
        text: "+226",
        value: "+226",
        flag: "bf",
        key: "bf"
    },
    {
        content: "Burundi",
        text: "+257",
        value: "+257",
        flag: "bi",
        key: "bi"
    },
    {
        content: "Cambodia",
        text: "+855",
        value: "+855",
        flag: "kh",
        key: "kh"
    },
    {
        content: "Cameroon",
        text: "+237",
        value: "+237",
        flag: "cm",
        key: "cm"
    },
    {
        content: "Canada",
        text: "+1",
        value: "+1",
        flag: "ca",
        key: "ca"
    },
    {
        content: "Cape Verde",
        text: "+238",
        value: "+238",
        flag: "cv",
        key: "cv"
    },
    {
        content: "Cayman Islands",
        text: "+ 345",
        value: "+ 345",
        flag: "ky",
        key: "ky"
    },
    {
        content: "Central African Republic",
        text: "+236",
        value: "+236",
        flag: "cf",
        key: "cf"
    },
    {
        content: "Chad",
        text: "+235",
        value: "+235",
        flag: "td",
        key: "td"
    },
    {
        content: "Chile",
        text: "+56",
        value: "+56",
        flag: "cl",
        key: "cl"
    },
    {
        content: "China",
        text: "+86",
        value: "+86",
        flag: "cn",
        key: "cn"
    },
    {
        content: "Christmas Island",
        text: "+61",
        value: "+61",
        flag: "cx",
        key: "cx"
    },
    {
        content: "Cocos (Keeling) Islands",
        text: "+61",
        value: "+61",
        flag: "cc",
        key: "cc"
    },
    {
        content: "Colombia",
        text: "+57",
        value: "+57",
        flag: "co",
        key: "co"
    },
    {
        content: "Comoros",
        text: "+269",
        value: "+269",
        flag: "km",
        key: "km"
    },
    {
        content: "Congo",
        text: "+242",
        value: "+242",
        flag: "cg",
        key: "cg"
    },
    {
        content: "Congo, The Democratic Republic of the Congo",
        text: "+243",
        value: "+243",
        flag: "cd",
        key: "cd"
    },
    {
        content: "Cook Islands",
        text: "+682",
        value: "+682",
        flag: "ck",
        key: "ck"
    },
    {
        content: "Costa Rica",
        text: "+506",
        value: "+506",
        flag: "cr",
        key: "cr"
    },
    {
        content: "Cote d'Ivoire",
        text: "+225",
        value: "+225",
        flag: "ci",
        key: "ci"
    },
    {
        content: "Croatia",
        text: "+385",
        value: "+385",
        flag: "hr",
        key: "hr"
    },
    {
        content: "Cuba",
        text: "+53",
        value: "+53",
        flag: "cu",
        key: "cu"
    },
    {
        content: "Cyprus",
        text: "+357",
        value: "+357",
        flag: "cy",
        key: "cy"
    },
    {
        content: "Czech Republic",
        text: "+420",
        value: "+420",
        flag: "cz",
        key: "cz"
    },
    {
        content: "Denmark",
        text: "+45",
        value: "+45",
        flag: "dk",
        key: "dk"
    },
    {
        content: "Djibouti",
        text: "+253",
        value: "+253",
        flag: "dj",
        key: "dj"
    },
    {
        content: "Dominica",
        text: "+1 767",
        value: "+1 767",
        flag: "dm",
        key: "dm"
    },
    {
        content: "Dominican Republic",
        text: "+1 849",
        value: "+1 849",
        flag: "do",
        key: "do"
    },
    {
        content: "Ecuador",
        text: "+593",
        value: "+593",
        flag: "ec",
        key: "ec"
    },
    {
        content: "Egypt",
        text: "+20",
        value: "+20",
        flag: "eg",
        key: "eg"
    },
    {
        content: "El Salvador",
        text: "+503",
        value: "+503",
        flag: "sv",
        key: "sv"
    },
    {
        content: "Equatorial Guinea",
        text: "+240",
        value: "+240",
        flag: "gq",
        key: "gq"
    },
    {
        content: "Eritrea",
        text: "+291",
        value: "+291",
        flag: "er",
        key: "er"
    },
    {
        content: "Estonia",
        text: "+372",
        value: "+372",
        flag: "ee",
        key: "ee"
    },
    {
        content: "Ethiopia",
        text: "+251",
        value: "+251",
        flag: "et",
        key: "et"
    },
    {
        content: "Falkland Islands (Malvinas)",
        text: "+500",
        value: "+500",
        flag: "fk",
        key: "fk"
    },
    {
        content: "Faroe Islands",
        text: "+298",
        value: "+298",
        flag: "fo",
        key: "fo"
    },
    {
        content: "Fiji",
        text: "+679",
        value: "+679",
        flag: "fj",
        key: "fj"
    },
    {
        content: "Finland",
        text: "+358",
        value: "+358",
        flag: "fi",
        key: "fi"
    },
    {
        content: "France",
        text: "+33",
        value: "+33",
        flag: "fr",
        key: "fr"
    },
    {
        content: "French Guiana",
        text: "+594",
        value: "+594",
        flag: "gf",
        key: "gf"
    },
    {
        content: "French Polynesia",
        text: "+689",
        value: "+689",
        flag: "pf",
        key: "pf"
    },
    {
        content: "Gabon",
        text: "+241",
        value: "+241",
        flag: "ga",
        key: "ga"
    },
    {
        content: "Gambia",
        text: "+220",
        value: "+220",
        flag: "gm",
        key: "gm"
    },
    {
        content: "Georgia",
        text: "+995",
        value: "+995",
        flag: "ge",
        key: "ge"
    },
    {
        content: "Germany",
        text: "+49",
        value: "+49",
        flag: "de",
        key: "de"
    },
    {
        content: "Ghana",
        text: "+233",
        value: "+233",
        flag: "gh",
        key: "gh"
    },
    {
        content: "Gibraltar",
        text: "+350",
        value: "+350",
        flag: "gi",
        key: "gi"
    },
    {
        content: "Greece",
        text: "+30",
        value: "+30",
        flag: "gr",
        key: "gr"
    },
    {
        content: "Greenland",
        text: "+299",
        value: "+299",
        flag: "gl",
        key: "gl"
    },
    {
        content: "Grenada",
        text: "+1 473",
        value: "+1 473",
        flag: "gd",
        key: "gd"
    },
    {
        content: "Guadeloupe",
        text: "+590",
        value: "+590",
        flag: "gp",
        key: "gp"
    },
    {
        content: "Guam",
        text: "+1 671",
        value: "+1 671",
        flag: "gu",
        key: "gu"
    },
    {
        content: "Guatemala",
        text: "+502",
        value: "+502",
        flag: "gt",
        key: "gt"
    },
    {
        content: "Guinea",
        text: "+224",
        value: "+224",
        flag: "gn",
        key: "gn"
    },
    {
        content: "Guinea-Bissau",
        text: "+245",
        value: "+245",
        flag: "gw",
        key: "gw"
    },
    {
        content: "Guyana",
        text: "+595",
        value: "+595",
        flag: "gy",
        key: "gy"
    },
    {
        content: "Haiti",
        text: "+509",
        value: "+509",
        flag: "ht",
        key: "ht"
    },
    {
        content: "Holy See (Vatican City State)",
        text: "+379",
        value: "+379",
        flag: "va",
        key: "va"
    },
    {
        content: "Honduras",
        text: "+504",
        value: "+504",
        flag: "hn",
        key: "hn"
    },
    {
        content: "Hong Kong",
        text: "+852",
        value: "+852",
        flag: "hk",
        key: "hk"
    },
    {
        content: "Hungary",
        text: "+36",
        value: "+36",
        flag: "hu",
        key: "hu"
    },
    {
        content: "Iceland",
        text: "+354",
        value: "+354",
        flag: "is",
        key: "is"
    },
    {
        content: "India",
        text: "+91",
        value: "+91",
        flag: "in",
        key: "in"
    },
    {
        content: "Indonesia",
        text: "+62",
        value: "+62",
        flag: "id",
        key: "id"
    },
    {
        content: "Iran, Islamic Republic of Persian Gulf",
        text: "+98",
        value: "+98",
        flag: "ir",
        key: "ir"
    },
    {
        content: "Iraq",
        text: "+964",
        value: "+964",
        flag: "iq",
        key: "iq"
    },
    {
        content: "Ireland",
        text: "+353",
        value: "+353",
        flag: "ie",
        key: "ie"
    },
    {
        content: "Israel",
        text: "+972",
        value: "+972",
        flag: "il",
        key: "il"
    },
    {
        content: "Italy",
        text: "+39",
        value: "+39",
        flag: "it",
        key: "it"
    },
    {
        content: "Jamaica",
        text: "+1 876",
        value: "+1 876",
        flag: "jm",
        key: "jm"
    },
    {
        content: "Japan",
        text: "+81",
        value: "+81",
        flag: "jp",
        key: "jp"
    },
    {
        content: "Jordan",
        text: "+962",
        value: "+962",
        flag: "jo",
        key: "jo"
    },
    {
        content: "Kazakhstan",
        text: "+7 7",
        value: "+7 7",
        flag: "kz",
        key: "kz"
    },
    {
        content: "Kenya",
        text: "+254",
        value: "+254",
        flag: "ke",
        key: "ke"
    },
    {
        content: "Kiribati",
        text: "+686",
        value: "+686",
        flag: "ki",
        key: "ki"
    },
    {
        content: "Korea, Democratic People's Republic of Korea",
        text: "+850",
        value: "+850",
        flag: "kp",
        key: "kp"
    },
    {
        content: "Korea, Republic of South Korea",
        text: "+82",
        value: "+82",
        flag: "kr",
        key: "kr"
    },
    {
        content: "Kuwait",
        text: "+965",
        value: "+965",
        flag: "kw",
        key: "kw"
    },
    {
        content: "Kyrgyzstan",
        text: "+996",
        value: "+996",
        flag: "kg",
        key: "kg"
    },
    {
        content: "Laos",
        text: "+856",
        value: "+856",
        flag: "la",
        key: "la"
    },
    {
        content: "Latvia",
        text: "+371",
        value: "+371",
        flag: "lv",
        key: "lv"
    },
    {
        content: "Lebanon",
        text: "+961",
        value: "+961",
        flag: "lb",
        key: "lb"
    },
    {
        content: "Lesotho",
        text: "+266",
        value: "+266",
        flag: "ls",
        key: "ls"
    },
    {
        content: "Liberia",
        text: "+231",
        value: "+231",
        flag: "lr",
        key: "lr"
    },
    {
        content: "Libyan Arab Jamahiriya",
        text: "+218",
        value: "+218",
        flag: "ly",
        key: "ly"
    },
    {
        content: "Liechtenstein",
        text: "+423",
        value: "+423",
        flag: "li",
        key: "li"
    },
    {
        content: "Lithuania",
        text: "+370",
        value: "+370",
        flag: "lt",
        key: "lt"
    },
    {
        content: "Luxembourg",
        text: "+352",
        value: "+352",
        flag: "lu",
        key: "lu"
    },
    {
        content: "Macao",
        text: "+853",
        value: "+853",
        flag: "mo",
        key: "mo"
    },
    {
        content: "Macedonia",
        text: "+389",
        value: "+389",
        flag: "mk",
        key: "mk"
    },
    {
        content: "Madagascar",
        text: "+261",
        value: "+261",
        flag: "mg",
        key: "mg"
    },
    {
        content: "Malawi",
        text: "+265",
        value: "+265",
        flag: "mw",
        key: "mw"
    },
    {
        content: "Malaysia",
        text: "+60",
        value: "+60",
        flag: "my",
        key: "my"
    },
    {
        content: "Maldives",
        text: "+960",
        value: "+960",
        flag: "mv",
        key: "mv"
    },
    {
        content: "Mali",
        text: "+223",
        value: "+223",
        flag: "ml",
        key: "ml"
    },
    {
        content: "Malta",
        text: "+356",
        value: "+356",
        flag: "mt",
        key: "mt"
    },
    {
        content: "Marshall Islands",
        text: "+692",
        value: "+692",
        flag: "mh",
        key: "mh"
    },
    {
        content: "Martinique",
        text: "+596",
        value: "+596",
        flag: "mq",
        key: "mq"
    },
    {
        content: "Mauritania",
        text: "+222",
        value: "+222",
        flag: "mr",
        key: "mr"
    },
    {
        content: "Mauritius",
        text: "+230",
        value: "+230",
        flag: "mu",
        key: "mu"
    },
    {
        content: "Mayotte",
        text: "+262",
        value: "+262",
        flag: "yt",
        key: "yt"
    },
    {
        content: "Mexico",
        text: "+52",
        value: "+52",
        flag: "mx",
        key: "mx"
    },
    {
        content: "Micronesia, Federated States of Micronesia",
        text: "+691",
        value: "+691",
        flag: "fm",
        key: "fm"
    },
    {
        content: "Moldova",
        text: "+373",
        value: "+373",
        flag: "md",
        key: "md"
    },
    {
        content: "Monaco",
        text: "+377",
        value: "+377",
        flag: "mc",
        key: "mc"
    },
    {
        content: "Mongolia",
        text: "+976",
        value: "+976",
        flag: "mn",
        key: "mn"
    },
    {
        content: "Montenegro",
        text: "+382",
        value: "+382",
        flag: "me",
        key: "me"
    },
    {
        content: "Montserrat",
        text: "+1664",
        value: "+1664",
        flag: "ms",
        key: "ms"
    },
    {
        content: "Morocco",
        text: "+212",
        value: "+212",
        flag: "ma",
        key: "ma"
    },
    {
        content: "Mozambique",
        text: "+258",
        value: "+258",
        flag: "mz",
        key: "mz"
    },
    {
        content: "Myanmar",
        text: "+95",
        value: "+95",
        flag: "mm",
        key: "mm"
    },
    {
        content: "Namibia",
        text: "+264",
        value: "+264",
        flag: "na",
        key: "na"
    },
    {
        content: "Nauru",
        text: "+674",
        value: "+674",
        flag: "nr",
        key: "nr"
    },
    {
        content: "Nepal",
        text: "+977",
        value: "+977",
        flag: "np",
        key: "np"
    },
    {
        content: "Netherlands",
        text: "+31",
        value: "+31",
        flag: "nl",
        key: "nl"
    },
    {
        content: "Netherlands Antilles",
        text: "+599",
        value: "+599",
        flag: "an",
        key: "an"
    },
    {
        content: "New Caledonia",
        text: "+687",
        value: "+687",
        flag: "nc",
        key: "nc"
    },
    {
        content: "New Zealand",
        text: "+64",
        value: "+64",
        flag: "nz",
        key: "nz"
    },
    {
        content: "Nicaragua",
        text: "+505",
        value: "+505",
        flag: "ni",
        key: "ni"
    },
    {
        content: "Niger",
        text: "+227",
        value: "+227",
        flag: "ne",
        key: "ne"
    },
    {
        content: "Nigeria",
        text: "+234",
        value: "+234",
        flag: "ng",
        key: "ng"
    },
    {
        content: "Niue",
        text: "+683",
        value: "+683",
        flag: "nu",
        key: "nu"
    },
    {
        content: "Norfolk Island",
        text: "+672",
        value: "+672",
        flag: "nf",
        key: "nf"
    },
    {
        content: "Northern Mariana Islands",
        text: "+1 670",
        value: "+1 670",
        flag: "mp",
        key: "mp"
    },
    {
        content: "Norway",
        text: "+47",
        value: "+47",
        flag: "no",
        key: "no"
    },
    {
        content: "Oman",
        text: "+968",
        value: "+968",
        flag: "om",
        key: "om"
    },
    {
        content: "Pakistan",
        text: "+92",
        value: "+92",
        flag: "pk",
        key: "pk"
    },
    {
        content: "Palau",
        text: "+680",
        value: "+680",
        flag: "pw",
        key: "pw"
    },
    {
        content: "Palestinian Territory",
        text: "+970",
        value: "+970",
        flag: "ps",
        key: "ps"
    },
    {
        content: "Panama",
        text: "+507",
        value: "+507",
        flag: "pa",
        key: "pa"
    },
    {
        content: "Papua New Guinea",
        text: "+675",
        value: "+675",
        flag: "pg",
        key: "pg"
    },
    {
        content: "Paraguay",
        text: "+595",
        value: "+595",
        flag: "py",
        key: "py"
    },
    {
        content: "Peru",
        text: "+51",
        value: "+51",
        flag: "pe",
        key: "pe"
    },
    {
        content: "Philippines",
        text: "+63",
        value: "+63",
        flag: "ph",
        key: "ph"
    },
    {
        content: "Pitcairn",
        text: "+872",
        value: "+872",
        flag: "pn",
        key: "pn"
    },
    {
        content: "Poland",
        text: "+48",
        value: "+48",
        flag: "pl",
        key: "pl"
    },
    {
        content: "Portugal",
        text: "+351",
        value: "+351",
        flag: "pt",
        key: "pt"
    },
    {
        content: "Puerto Rico",
        text: "+1 939",
        value: "+1 939",
        flag: "pr",
        key: "pr"
    },
    {
        content: "Qatar",
        text: "+974",
        value: "+974",
        flag: "qa",
        key: "qa"
    },
    {
        content: "Romania",
        text: "+40",
        value: "+40",
        flag: "ro",
        key: "ro"
    },
    {
        content: "Russia",
        text: "+7",
        value: "+7",
        flag: "ru",
        key: "ru"
    },
    {
        content: "Rwanda",
        text: "+250",
        value: "+250",
        flag: "rw",
        key: "rw"
    },
    {
        content: "Reunion",
        text: "+262",
        value: "+262",
        flag: "re",
        key: "re"
    },
    {
        content: "Saint Helena, Ascension and Tristan Da Cunha",
        text: "+290",
        value: "+290",
        flag: "sh",
        key: "sh"
    },
    {
        content: "Saint Kitts and Nevis",
        text: "+1 869",
        value: "+1 869",
        flag: "kn",
        key: "kn"
    },
    {
        content: "Saint Lucia",
        text: "+1 758",
        value: "+1 758",
        flag: "lc",
        key: "lc"
    },
    {
        content: "Saint Pierre and Miquelon",
        text: "+508",
        value: "+508",
        flag: "pm",
        key: "pm"
    },
    {
        content: "Saint Vincent and the Grenadines",
        text: "+1 784",
        value: "+1 784",
        flag: "vc",
        key: "vc"
    },
    {
        content: "Samoa",
        text: "+685",
        value: "+685",
        flag: "ws",
        key: "ws"
    },
    {
        content: "San Marino",
        text: "+378",
        value: "+378",
        flag: "sm",
        key: "sm"
    },
    {
        content: "Sao Tome and Principe",
        text: "+239",
        value: "+239",
        flag: "st",
        key: "st"
    },
    {
        content: "Saudi Arabia",
        text: "+966",
        value: "+966",
        flag: "sa",
        key: "sa"
    },
    {
        content: "Senegal",
        text: "+221",
        value: "+221",
        flag: "sn",
        key: "sn"
    },
    {
        content: "Serbia",
        text: "+381",
        value: "+381",
        flag: "rs",
        key: "rs"
    },
    {
        content: "Seychelles",
        text: "+248",
        value: "+248",
        flag: "sc",
        key: "sc"
    },
    {
        content: "Sierra Leone",
        text: "+232",
        value: "+232",
        flag: "sl",
        key: "sl"
    },
    {
        content: "Singapore",
        text: "+65",
        value: "+65",
        flag: "sg",
        key: "sg"
    },
    {
        content: "Slovakia",
        text: "+421",
        value: "+421",
        flag: "sk",
        key: "sk"
    },
    {
        content: "Slovenia",
        text: "+386",
        value: "+386",
        flag: "si",
        key: "si"
    },
    {
        content: "Solomon Islands",
        text: "+677",
        value: "+677",
        flag: "sb",
        key: "sb"
    },
    {
        content: "Somalia",
        text: "+252",
        value: "+252",
        flag: "so",
        key: "so"
    },
    {
        content: "South Africa",
        text: "+27",
        value: "+27",
        flag: "za",
        key: "za"
    },
    {
        content: "South Georgia and the South Sandwich Islands",
        text: "+500",
        value: "+500",
        flag: "gs",
        key: "gs"
    },
    {
        content: "Spain",
        text: "+34",
        value: "+34",
        flag: "es",
        key: "es"
    },
    {
        content: "Sri Lanka",
        text: "+94",
        value: "+94",
        flag: "lk",
        key: "lk"
    },
    {
        content: "Sudan",
        text: "+249",
        value: "+249",
        flag: "sd",
        key: "sd"
    },
    {
        content: "Suricontent",
        text: "+597",
        value: "+597",
        flag: "sr",
        key: "sr"
    },
    {
        content: "Svalbard and Jan Mayen",
        text: "+47",
        value: "+47",
        flag: "sj",
        key: "sj"
    },
    {
        content: "Swaziland",
        text: "+268",
        value: "+268",
        flag: "sz",
        key: "sz"
    },
    {
        content: "Sweden",
        text: "+46",
        value: "+46",
        flag: "se",
        key: "se"
    },
    {
        content: "Switzerland",
        text: "+41",
        value: "+41",
        flag: "ch",
        key: "ch"
    },
    {
        content: "Syrian Arab Republic",
        text: "+963",
        value: "+963",
        flag: "sy",
        key: "sy"
    },
    {
        content: "Taiwan",
        text: "+886",
        value: "+886",
        flag: "tw",
        key: "tw"
    },
    {
        content: "Tajikistan",
        text: "+992",
        value: "+992",
        flag: "tj",
        key: "tj"
    },
    {
        content: "Tanzania, United Republic of Tanzania",
        text: "+255",
        value: "+255",
        flag: "tz",
        key: "tz"
    },
    {
        content: "Thailand",
        text: "+66",
        value: "+66",
        flag: "th",
        key: "th"
    },
    {
        content: "Timor-Leste",
        text: "+670",
        value: "+670",
        flag: "tl",
        key: "tl"
    },
    {
        content: "Togo",
        text: "+228",
        value: "+228",
        flag: "tg",
        key: "tg"
    },
    {
        content: "Tokelau",
        text: "+690",
        value: "+690",
        flag: "tk",
        key: "tk"
    },
    {
        content: "Tonga",
        text: "+676",
        value: "+676",
        flag: "to",
        key: "to"
    },
    {
        content: "Trinidad and Tobago",
        text: "+1 868",
        value: "+1 868",
        flag: "tt",
        key: "tt"
    },
    {
        content: "Tunisia",
        text: "+216",
        value: "+216",
        flag: "tn",
        key: "tn"
    },
    {
        content: "Turkey",
        text: "+90",
        value: "+90",
        flag: "tr",
        key: "tr"
    },
    {
        content: "Turkmenistan",
        text: "+993",
        value: "+993",
        flag: "tm",
        key: "tm"
    },
    {
        content: "Turks and Caicos Islands",
        text: "+1 649",
        value: "+1 649",
        flag: "tc",
        key: "tc"
    },
    {
        content: "Tuvalu",
        text: "+688",
        value: "+688",
        flag: "tv",
        key: "tv"
    },
    {
        content: "Uganda",
        text: "+256",
        value: "+256",
        flag: "ug",
        key: "ug"
    },
    {
        content: "Ukraine",
        text: "+380",
        value: "+380",
        flag: "ua",
        key: "ua"
    },
    {
        content: "United Arab Emirates",
        text: "+971",
        value: "+971",
        flag: "ae",
        key: "ae"
    },
    {
        content: "United Kingdom",
        text: "+44",
        value: "+44",
        flag: "gb",
        key: "gb"
    },
    {
        content: "United States",
        text: "+1",
        value: "+1",
        flag: "us",
        key: "us"
    },
    {
        content: "Uruguay",
        text: "+598",
        value: "+598",
        flag: "uy",
        key: "uy"
    },
    {
        content: "Uzbekistan",
        text: "+998",
        value: "+998",
        flag: "uz",
        key: "uz"
    },
    {
        content: "Vanuatu",
        text: "+678",
        value: "+678",
        flag: "vu",
        key: "vu"
    },
    {
        content: "Venezuela, Bolivarian Republic of Venezuela",
        text: "+58",
        value: "+58",
        flag: "ve",
        key: "ve"
    },
    {
        content: "Vietnam",
        text: "+84",
        value: "+84",
        flag: "vn",
        key: "vn"
    },
    {
        content: "Virgin Islands, British",
        text: "+1 284",
        value: "+1 284",
        flag: "vg",
        key: "vg"
    },
    {
        content: "Virgin Islands, U.S.",
        text: "+1 340",
        value: "+1 340",
        flag: "vi",
        key: "vi"
    },
    {
        content: "Wallis and Futuna",
        text: "+681",
        value: "+681",
        flag: "wf",
        key: "wf"
    },
    {
        content: "Yemen",
        text: "+967",
        value: "+967",
        flag: "ye",
        key: "ye"
    },
    {
        content: "Zambia",
        text: "+260",
        value: "+260",
        flag: "zm",
        key: "zm"
    },
    {
        content: "Zimbabwe",
        text: "+263",
        value: "+263",
        flag: "zw",
        key: "zw"
    }
];

export default countries;
