(function () {
"use strict";
angular.module("currencyExchange")

    .directive("ceCalculator", ["yahooFinanceApi", "currenciesApi", function(yahooFinanceApi, currenciesApi) {

        var directive = {};

        directive.restrict = "E";
        directive.template= '<div id=\"ceCalc\"><select ng-model=\"currencyPickerOne\" id=\"currencyPickerOne\" ng-change=\"setSymbolOne(currencyPickerOne)\"><option ng-repeat=\"(initials, currency) in currencies\" value=\"{{ initials }}\" ng-selected=\"initials == \'BRL\'\">{{ currency.name }}</option></select><div class=\"selectedCurrency\">Selected currency</div><div class=\"leftCurrency\"><span class=\"flag flag-{{initialsOne}}\"></span>{{ initialsOne }}</div><div class=\"rightCurrency\"><div class=\"currencySymbol\">{{ symbolOne }}</div><input ng-model=\"originalValue\" type=\"text\" value=\"\" placeholder=\"100,00\"></div><center class=\"convertTo\">Convert to</center><select ng-model=\"currencyPickerTwo\" id=\"currencyPickerTwo\" name=\"currencyPickerTwo\" ng-change=\"setSymbolTwo(currencyPickerTwo)\"><option ng-repeat=\"(initials, currency) in currencies\" value=\"{{ initials }}\" ng-selected=\"initials == \'USD\'\">{{ currency.name }}</option></select><div class=\"selectedCurrency\">Selected currency</div><div class=\"leftCurrency\"><span class=\"flag flag-{{initialsTwo}}\"></span> {{ initialsTwo }}</div><div class=\"rightCurrency\"><div class=\"currencySymbol\">{{ symbolTwo }}</div><input id=\"exchangevalue\" disabled=\"disabled\" type=\"text\" value=\"{{ exchange }}\"></div><button class=\"calculateExchangeBtn\" class=\"btn\" ng-click=\"calculate(currencyPickerOne, currencyPickerTwo, originalValue)\">Convert</button><center ng-if=\"error !== \'\'\"><div class=\"alert alert-danger\" role=\"alert\">{{error}}</div></center></div>';
        directive.scope = {};

        directive.link = function(scope, element, attrs) {

            scope.currencies = currenciesApi.get();

            scope.symbolOne = "R$";
            scope.symbolTwo = "$";
            scope.initialsOne = "BRL";
            scope.initialsTwo = "USD";
            scope.exchange = 0;
            scope.error = "";

            scope.setSymbolOne = function(currencyInitials){
                scope.symbolOne = scope.currencies[currencyInitials].symbol;
                scope.initialsOne = currencyInitials;
            };

            scope.setSymbolTwo = function(currencyInitials){
                scope.symbolTwo = scope.currencies[currencyInitials].symbol;
                scope.initialsTwo = currencyInitials;
            };

            scope.calculate = function(currencyOne, currencyTwo, originalValue){
                currencyOne = (currencyOne === undefined) ? "BRL" : currencyOne;
                currencyTwo = (currencyTwo === undefined) ? "USD" : currencyTwo; 
                var currency = currencyTwo + currencyOne;
                var exchange = 0;

                scope.rate = [];
                var getRate = yahooFinanceApi.getRate(currency);
                getRate.then(function(response){
                    
                    scope.rate = response.data;

                    if(scope.rate === null){
                        scope.error = "An unexpected error occurred while connecting to api. Try again later.";
                    } else{
                        scope.error = "";
                        scope.rate = scope.rate.query.results.rate.Rate;   
                    }

                    if(originalValue === "" || originalValue === null){
                        scope.error = "Please enter the amount you want to convert.";
                        scope.exchange = "";
                    } else{
                        scope.error = "";

                        originalValue = parseFloat(originalValue.replace(",", "."));
                        exchange = originalValue * scope.rate;
                        scope.exchange = String(exchange).replace(".", ",");
                    }
                },
                function(reason){
                    console.log(reason);
                    scope.rate( { data: [] });
                });
            };
        };

        return directive;
    }]);
}());