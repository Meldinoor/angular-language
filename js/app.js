///<reference path="../../Scripts/typings/angularjs/angular.d.ts" />
var LanguageModule;
(function (LanguageModule) {
    var Languages = {
        "AB": "Abkhaz",
        "AA": "Afar",
        "AF": "Afrikaans",
        "AK": "Akan",
        "SQ": "Albanian",
        "AM": "Amharic",
        "AR": "Arabic",
        "AN": "Aragonese",
        "HY": "Armenian",
        "AS": "Assamese",
        "AV": "Avaric",
        "AE": "Avestan",
        "AY": "Aymara",
        "AZ": "Azerbaijani",
        "BM": "Bambara",
        "BA": "Bashkir",
        "EU": "Basque",
        "BE": "Belarusian",
        "BN": "Bengali, Bangla",
        "BH": "Bihari",
        "BI": "Bislama",
        "BS": "Bosnian",
        "BR": "Breton",
        "BG": "Bulgarian",
        "MY": "Burmese",
        "CA": "Catalan",
        "CH": "Chamorro",
        "CE": "Chechen",
        "NY": "Chichewa, Chewa, Nyanja",
        "ZH": "Chinese",
        "CV": "Chuvash",
        "KW": "Cornish",
        "CO": "Corsican",
        "CR": "Cree",
        "HR": "Croatian",
        "CS": "Czech",
        "DA": "Danish",
        "DV": "Divehi, Dhivehi, Maldivian",
        "NL": "Dutch",
        "DZ": "Dzongkha",
        "EN": "English",
        "EO": "Esperanto",
        "ET": "Estonian",
        "EE": "Ewe",
        "FO": "Faroese",
        "FJ": "Fijian",
        "FI": "Finnish",
        "FR": "French",
        "FF": "Fula, Fulah, Pulaar, Pular",
        "GL": "Galician",
        "KA": "Georgian",
        "DE": "German",
        "EL": "Greek (modern)",
        "GN": "Guaraní",
        "GU": "Gujarati",
        "HT": "Haitian, Haitian Creole",
        "HA": "Hausa",
        "HE": "Hebrew (modern)",
        "HZ": "Herero",
        "HI": "Hindi",
        "HO": "Hiri Motu",
        "HU": "Hungarian",
        "IA": "Interlingua",
        "ID": "Indonesian",
        "IE": "Interlingue",
        "GA": "Irish",
        "IG": "Igbo",
        "IK": "Inupiaq",
        "IO": "Ido",
        "IS": "Icelandic",
        "IT": "Italian",
        "IU": "Inuktitut",
        "JA": "Japanese",
        "JV": "Javanese",
        "KL": "Kalaallisut, Greenlandic",
        "KN": "Kannada",
        "KR": "Kanuri",
        "KS": "Kashmiri",
        "KK": "Kazakh",
        "KM": "Khmer",
        "KI": "Kikuyu, Gikuyu",
        "RW": "Kinyarwanda",
        "KY": "Kyrgyz",
        "KV": "Komi",
        "KG": "Kongo",
        "KO": "Korean",
        "KU": "Kurdish",
        "KJ": "Kwanyama, Kuanyama",
        "LA": "Latin",
        "LB": "Luxembourgish, Letzeburgesch",
        "LG": "Ganda",
        "LI": "Limburgish, Limburgan, Limburger",
        "LN": "Lingala",
        "LO": "Lao",
        "LT": "Lithuanian",
        "LU": "Luba-Katanga",
        "LV": "Latvian",
        "GV": "Manx",
        "MK": "Macedonian",
        "MG": "Malagasy",
        "MS": "Malay",
        "ML": "Malayalam",
        "MT": "Maltese",
        "MI": "Māori",
        "MR": "Marathi (Marāṭhī)",
        "MH": "Marshallese",
        "MN": "Mongolian",
        "NA": "Nauruan",
        "NV": "Navajo, Navaho",
        "ND": "Northern Ndebele",
        "NE": "Nepali",
        "NG": "Ndonga",
        "NB": "Norwegian Bokmål",
        "NN": "Norwegian Nynorsk",
        "NO": "Norwegian",
        "II": "Nuosu",
        "NR": "Southern Ndebele",
        "OC": "Occitan",
        "OJ": "Ojibwe, Ojibwa",
        "CU": "Old Church Slavonic, Church Slavonic, Old Bulgarian",
        "OM": "Oromo",
        "OR": "Oriya",
        "OS": "Ossetian, Ossetic",
        "PA": "Panjabi, Punjabi",
        "PI": "Pāli",
        "FA": "Persian (Farsi)",
        "PL": "Polish",
        "PS": "Pashto, Pushto",
        "PT": "Portuguese",
        "QU": "Quechua",
        "RM": "Romansh",
        "RN": "Kirundi",
        "RC": "Reunionese, Reunion Creole",
        "RO": "Romanian",
        "RU": "Russian",
        "SA": "Sanskrit (Saṁskṛta)",
        "SC": "Sardinian",
        "SD": "Sindhi",
        "SE": "Northern Sami",
        "SM": "Samoan",
        "SG": "Sango",
        "SR": "Serbian",
        "GD": "Scottish Gaelic, Gaelic",
        "SN": "Shona",
        "SI": "Sinhalese, Sinhala",
        "SK": "Slovak",
        "SL": "Slovene",
        "SO": "Somali",
        "ST": "Southern Sotho",
        "ES": "Spanish",
        "SU": "Sundanese",
        "SW": "Swahili",
        "SS": "Swati",
        "SV": "Swedish",
        "TA": "Tamil",
        "TE": "Telugu",
        "TG": "Tajik",
        "TH": "Thai",
        "TI": "Tigrinya",
        "BO": "Tibetan Standard, Tibetan, Central",
        "TK": "Turkmen",
        "TL": "Tagalog",
        "TN": "Tswana",
        "TO": "Tonga (Tonga Islands)",
        "TR": "Turkish",
        "TS": "Tsonga",
        "TT": "Tatar",
        "TW": "Twi",
        "TY": "Tahitian",
        "UG": "Uyghur",
        "UK": "Ukrainian",
        "UR": "Urdu",
        "UZ": "Uzbek",
        "VE": "Venda",
        "VI": "Vietnamese",
        "VO": "Volapük",
        "WA": "Walloon",
        "CY": "Welsh",
        "WO": "Wolof",
        "FY": "Western Frisian",
        "XH": "Xhosa",
        "YI": "Yiddish",
        "YO": "Yoruba",
        "ZA": "Zhuang, Chuang",
        "ZU": "Zulu"
    };
    var LanguageSelecterController = (function () {
        function LanguageSelecterController() {
            var _this = this;
            this.selectLanguage = function (newLanguage) {
                _this.ngModel.$setViewValue(newLanguage);
            };
        }
        LanguageSelecterController.$inject = [];
        return LanguageSelecterController;
    })();
    function LanguageSelecterDirective($compile) {
        return {
            restrict: 'E',
            require: ['ngModel', '^^?form'],
            bindToController: true,
            controllerAs: 'ctrl',
            controller: LanguageSelecterController,
			scope: {disabled: '=ngDisabled'},
            compile: function (element, attr, transclude) {
                var preferredLanguages = [];
                var includeLanguages = [];
                var excludeLanguages = [];
                var dropdownClass = 'dropdown';
                if (attr['preferredLanguages']) {
                    if (typeof attr['preferredLanguages'] === 'array')
                        preferredLanguages = attr['preferredLanguages'];
                    else
                        preferredLanguages = attr['preferredLanguages'].toString().split(',');
                }
                if (attr['includeLanguages']) {
                    if (typeof attr['includeLanguages'] === 'array')
                        includeLanguages = attr['includeLanguages'];
                    else
                        includeLanguages = attr['includeLanguages'].toString().split(',');
                }
                if (attr['excludeLanguages']) {
                    if (typeof attr['excludeLanguages'] === 'array')
                        excludeLanguages = attr['excludeLanguages'];
                    else
                        excludeLanguages = attr['excludeLanguages'].toString().split(',');
                }
                if (attr['direction']) {
                    if (attr['direction'].toLowerCase() === 'up')
                        dropdownClass = 'dropup';
                }
                var style = attr['style'] ? attr['style'] : '';
                var options = '<div style="' + style + '" class="' + dropdownClass + '"><button style="' + style + '; text-align: left; padding-left: 20px;" class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" ng-disabled="ctrl.disabled">{{ctrl.ngModel.$viewValue}}<span class="caret" style="position: absolute; right: 10px; top: 48%;"></span></button>'
                    + '<ul style="' + style + '" class="dropdown-menu currency-selecter-scrollable-menu">';
                if (preferredLanguages.length) {
                    for (var i = 0; i < preferredLanguages.length; ++i) {
                        if (Languages[preferredLanguages[i].toUpperCase()] !== void 0) {
                            var ucPc = preferredLanguages[i].toUpperCase();
                            options += '<li><a href="" ng-click="ctrl.selectLanguage(\'' + Languages[ucPc] + ' (' + ucPc + ')\')" role="button">' + Languages[ucPc] + ' (' + ucPc + ')</a></li>';
                        }
                    }
                    options += '<li role="separator" class="divider"></li>';
                }
                for (var key in Languages) {
                    if ((!Languages.hasOwnProperty(key) || preferredLanguages.some(function (c, idx, arr) { return c.toUpperCase() === key; }))
                        || excludeLanguages.some(function (c, idx, arr) { return c.toUpperCase() === key; })
                        || (includeLanguages.length !== 0 && !includeLanguages.some(function (c, idx, arr) { return c.toUpperCase() === key; })))
                        continue;
                    options += '<li><a href="" ng-click="ctrl.selectLanguage(\'' + Languages[key] + ' (' + key + ')\')" role="button">' + Languages[key] + ' (' + key + ')</a></li>';
                }
                element.append(options);
                return {
                    pre: function (scope, element, attr, ctrls) {
                        var ngModel = ctrls[0];
                        var formCtrl = ctrls[1];
                        $compile(element.children())(scope);
                        var defaultLanguage = null;
                        if (attr['defaultLanguage']) {
                            defaultLanguage = attr['defaultLanguage'].toString();
                        }
                        ngModel.$formatters.push(function (m) { return Languages[m] + ' (' + m + ')'; });
                        ngModel.$parsers.push(function (v) { return v.substr(v.lastIndexOf('(') + 1, 3); });
                        if (!ngModel.$modelValue && defaultLanguage) {
                            ngModel.$setViewValue(Languages[defaultLanguage] + ' (' + defaultLanguage + ')');
                            ngModel.$setPristine();
                            if (formCtrl)
                                formCtrl.$setPristine();
                        }
                        scope.ctrl.ngModel = ngModel;
                    }
                };
            }
        };
    }
    angular.module('LanguageSelecter', []).directive('languageSelecter', ['$compile', LanguageSelecterDirective]).constant('languageConfig', {});
})(LanguageModule || (LanguageModule = {}));
//# sourceMappingURL=app.js.map