# angular-language
A simple bootstrap dropdown for selecting from world languages

# Usage
Make sure to include 'LanguageSelecter' as a dependency in your angular module.

To implement the selecter in your markup, use the following syntax:


`<language-selecter ng-model="myLanguage"></language-selecter>`

# Options

**Default Language**

The following syntax will make English your default language (selected automatically)

`<language-selecter ng-model="myLanguage" default-language="en"></language-selecter>`

**Preferred Languages**

Use preferred languages to always display your preferred languages at the top of the list


`<language-selecter ng-model="myLanguage" preferred-languages="en, sv"></language-selecter>`

**Include/Exclude Languages**

Use include-languages or exclude-languages if you wish to specify explicitly which languages to display or not to display in the list.
Example:


`<language-selecter include-languages="sv,en,de" preferred-languages="sv, en" default-language="sv" ng-model="myLanguage"></language-selecter>`
