/*!
* DevExtreme (dx.messages.nl.js)
* Version: 18.2.8 (build 19135)
* Build date: Wed May 15 2019
*
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        nl: {
            Yes: "Ja",
            No: "Nee",
            Cancel: "Annuleren",
            Clear: "Wissen",
            Done: "Klaar",
            Loading: "Laden...",
            Select: "Kiezen...",
            Search: "Zoeken",
            Back: "Terug",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Geen gegevens om te tonen",
            "validation-required": "Verplicht",
            "validation-required-formatted": "{0} is verplicht",
            "validation-numeric": "Waarde moet numeriek zijn",
            "validation-numeric-formatted": "{0} moet numeriek zijn",
            "validation-range": "Waarde is niet binnen het bereik",
            "validation-range-formatted": "{0} is niet binnen het bereik",
            "validation-stringLength": "De lengte van de waarde is niet correct",
            "validation-stringLength-formatted": "De lengte van {0}  is niet correct",
            "validation-custom": "Waarde is ongeldig",
            "validation-custom-formatted": "{0} is ongeldig",
            "validation-compare": "Waardes komen niet overeen",
            "validation-compare-formatted": "{0} komen niet overeen",
            "validation-pattern": "Waarde komt niet overeen met het patroon",
            "validation-pattern-formatted": "{0} komt niet overeen met het patroon",
            "validation-email": "Email is niet geldig",
            "validation-email-formatted": "{0} is niet geldig",
            "validation-mask": "Waarde is niet geldig",
            "dxLookup-searchPlaceholder": "Minimum aantal karakters: {0}",
            "dxList-pullingDownText": "Trek naar beneden om te vernieuwen...",
            "dxList-pulledDownText": "Laat los om te vernieuwen...",
            "dxList-refreshingText": "Vernieuwen...",
            "dxList-pageLoadingText": "Laden...",
            "dxList-nextButtonText": "Meer",
            "dxList-selectAll": "Selecteer Alles",
            "dxListEditDecorator-delete": "Verwijderen",
            "dxListEditDecorator-more": "Meer",
            "dxScrollView-pullingDownText": "Trek naar beneden om te vernieuwen...",
            "dxScrollView-pulledDownText": "Laat los om te vernieuwen...",
            "dxScrollView-refreshingText": "Vernieuwen...",
            "dxScrollView-reachBottomText": "Laden...",
            "dxDateBox-simulatedDataPickerTitleTime": "Selecteer tijd",
            "dxDateBox-simulatedDataPickerTitleDate": "Selecteer datum",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Selecteer datum and tijd",
            "dxDateBox-validation-datetime": "Waarde moet een datum of tijd zijn",
            "dxFileUploader-selectFile": "Selecteer bestand",
            "dxFileUploader-dropFile": "of sleep bestand hier",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Uploaden",
            "dxFileUploader-uploaded": "Ge\xfcpload",
            "dxFileUploader-readyToUpload": "Klaar om te uploaden",
            "dxFileUploader-uploadFailedMessage": "Uploaden is mislukt",
            "dxFileUploader-invalidFileExtension": "Dit bestandstype is niet toegestaan",
            "dxFileUploader-invalidMaxFileSize": "Het bestand is te groot",
            "dxFileUploader-invalidMinFileSize": "Het bestand is te klein",
            "dxRangeSlider-ariaFrom": "Van",
            "dxRangeSlider-ariaTill": "Tot",
            "dxSwitch-switchedOnText": "AAN",
            "dxSwitch-switchedOffText": "UIT",
            "dxForm-optionalMark": "optioneel",
            "dxForm-requiredMessage": "{0} is verplicht",
            "dxNumberBox-invalidValueMessage": "Waarde moet een nummer zijn",
            "dxDataGrid-columnChooserTitle": "Kolom Kiezer",
            "dxDataGrid-columnChooserEmptyText": "Sleep hier een kolomkop om hem te verbergen",
            "dxDataGrid-groupContinuesMessage": "Gaat verder op de volgende pagina",
            "dxDataGrid-groupContinuedMessage": "Vervolg van de vorige pagina",
            "dxDataGrid-groupHeaderText": "Groepeer op deze kolom",
            "dxDataGrid-ungroupHeaderText": "Degroeperen",
            "dxDataGrid-ungroupAllText": "Alle Degroeperen",
            "dxDataGrid-editingEditRow": "Wijzigen",
            "dxDataGrid-editingSaveRowChanges": "Opslaan",
            "dxDataGrid-editingCancelRowChanges": "Annuleren",
            "dxDataGrid-editingDeleteRow": "Verwijderen",
            "dxDataGrid-editingUndeleteRow": "Ongedaan maken",
            "dxDataGrid-editingConfirmDeleteMessage": "Moet dit record verwijderd worden?",
            "dxDataGrid-validationCancelChanges": "Wijzigingen annuleren",
            "dxDataGrid-groupPanelEmptyText": "Sleep hier een kolomkop om er op te groeperen",
            "dxDataGrid-noDataText": "Geen gegevens",
            "dxDataGrid-searchPanelPlaceholder": "Zoeken...",
            "dxDataGrid-filterRowShowAllText": "(Alle)",
            "dxDataGrid-filterRowResetOperationText": "Reset",
            "dxDataGrid-filterRowOperationEquals": "Gelijk aan",
            "dxDataGrid-filterRowOperationNotEquals": "Niet gelijk aan",
            "dxDataGrid-filterRowOperationLess": "Kleiner dan",
            "dxDataGrid-filterRowOperationLessOrEquals": "Kleiner dan of gelijk aan",
            "dxDataGrid-filterRowOperationGreater": "Groter dan",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Groter dan of gelijk aan",
            "dxDataGrid-filterRowOperationStartsWith": "Begint met",
            "dxDataGrid-filterRowOperationContains": "Bevat",
            "dxDataGrid-filterRowOperationNotContains": "Bevat niet",
            "dxDataGrid-filterRowOperationEndsWith": "Eindigt met",
            "dxDataGrid-filterRowOperationBetween": "Tussen",
            "dxDataGrid-filterRowOperationBetweenStartText": "Begin",
            "dxDataGrid-filterRowOperationBetweenEndText": "Einde",
            "dxDataGrid-applyFilterText": "Filter toepassen",
            "dxDataGrid-trueText": "waar",
            "dxDataGrid-falseText": "niet waar",
            "dxDataGrid-sortingAscendingText": "Sorteer Oplopend",
            "dxDataGrid-sortingDescendingText": "Sorteer Aflopend",
            "dxDataGrid-sortingClearText": "Sortering wissen",
            "dxDataGrid-editingSaveAllChanges": "Wijzigingen opslaan",
            "dxDataGrid-editingCancelAllChanges": "Wijzigingen annuleren",
            "dxDataGrid-editingAddRow": "Rij toevoegen",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min van {1} is {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max van {1} is {0}",
            "dxDataGrid-summaryAvg": "Gem: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Gem van {1} is {0}",
            "dxDataGrid-summarySum": "Som: {0}",
            "dxDataGrid-summarySumOtherColumn": "Som van {1} is {0}",
            "dxDataGrid-summaryCount": "Aantal: {0}",
            "dxDataGrid-columnFixingFix": "Blokkeren",
            "dxDataGrid-columnFixingUnfix": "Blokkering opheffen",
            "dxDataGrid-columnFixingLeftPosition": "Naar links",
            "dxDataGrid-columnFixingRightPosition": "Naar rechts",
            "dxDataGrid-exportTo": "Exporteren",
            "dxDataGrid-exportToExcel": "Exporteer naar Excel bestand",
            "dxDataGrid-excelFormat": "Excel bestand",
            "dxDataGrid-selectedRows": "Geselecteerde rijen",
            "dxDataGrid-exportSelectedRows": "Exporteer geselecteerde rijen",
            "dxDataGrid-exportAll": "Exporteer alle gegevens",
            "dxDataGrid-headerFilterEmptyValue": "(Leeg)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Annuleren",
            "dxDataGrid-ariaColumn": "Kolom",
            "dxDataGrid-ariaValue": "Waarde",
            "dxDataGrid-ariaFilterCell": "Filter cel",
            "dxDataGrid-ariaCollapse": "Inklappen",
            "dxDataGrid-ariaExpand": "Uitklappen",
            "dxDataGrid-ariaDataGrid": "Gegevenstabel",
            "dxDataGrid-ariaSearchInGrid": "Zoeken in gegevenstabel",
            "dxDataGrid-ariaSelectAll": "Selecteer alle",
            "dxDataGrid-ariaSelectRow": "Selecteer rij",
            "dxDataGrid-filterBuilderPopupTitle": "Filterbouwer",
            "dxDataGrid-filterPanelCreateFilter": "Maak Filter",
            "dxDataGrid-filterPanelClearFilter": "Wissen",
            "dxDataGrid-filterPanelFilterEnabledHint": "Filter activeren",
            "dxTreeList-ariaTreeList": "Boomstructuur",
            "dxTreeList-editingAddRowToNode": "Toevoegen",
            "dxPager-infoText": "Pagina {0} van {1} ({2} items)",
            "dxPager-pagesCountText": "van",
            "dxPivotGrid-grandTotal": "Eindtotaal",
            "dxPivotGrid-total": "{0} Totaal",
            "dxPivotGrid-fieldChooserTitle": "Veldenkiezer",
            "dxPivotGrid-showFieldChooser": "Toon Veldenkiezer",
            "dxPivotGrid-expandAll": "Alle Uitklappen",
            "dxPivotGrid-collapseAll": "Alle Inklappen",
            "dxPivotGrid-sortColumnBySummary": 'Sorteer "{0}" op Deze Kolom',
            "dxPivotGrid-sortRowBySummary": 'Sorteer "{0}" op Deze Rij',
            "dxPivotGrid-removeAllSorting": "Verwijderen Alle Sorteringen",
            "dxPivotGrid-dataNotAvailable": "N/B",
            "dxPivotGrid-rowFields": "Rijvelden",
            "dxPivotGrid-columnFields": "Kolomvelden",
            "dxPivotGrid-dataFields": "Gegevensvelden",
            "dxPivotGrid-filterFields": "Filtervelden",
            "dxPivotGrid-allFields": "Alle Velden",
            "dxPivotGrid-columnFieldArea": "Sleep Kolomvelden Hier",
            "dxPivotGrid-dataFieldArea": "Sleep Gegevensvelden Hier",
            "dxPivotGrid-rowFieldArea": "Sleep Rijvelden Hier",
            "dxPivotGrid-filterFieldArea": "Sleep Filtervelden Hier",
            "dxScheduler-editorLabelTitle": "Onderwerp",
            "dxScheduler-editorLabelStartDate": "Startdatum",
            "dxScheduler-editorLabelEndDate": "Einddatum",
            "dxScheduler-editorLabelDescription": "Omschrijving",
            "dxScheduler-editorLabelRecurrence": "Herhalen",
            "dxScheduler-openAppointment": "Afspraak openen",
            "dxScheduler-recurrenceNever": "Nooit",
            "dxScheduler-recurrenceDaily": "Dagelijks",
            "dxScheduler-recurrenceWeekly": "Wekelijks",
            "dxScheduler-recurrenceMonthly": "Maandelijks",
            "dxScheduler-recurrenceYearly": "Jaarlijks",
            "dxScheduler-recurrenceEvery": "Elke",
            "dxScheduler-recurrenceEnd": "Einde herhaling",
            "dxScheduler-recurrenceAfter": "Na",
            "dxScheduler-recurrenceOn": "Op",
            "dxScheduler-recurrenceRepeatDaily": "dag(en)",
            "dxScheduler-recurrenceRepeatWeekly": "week/weken",
            "dxScheduler-recurrenceRepeatMonthly": "maand(en)",
            "dxScheduler-recurrenceRepeatYearly": "jaar/jaren",
            "dxScheduler-switcherDay": "Dag",
            "dxScheduler-switcherWeek": "Week",
            "dxScheduler-switcherWorkWeek": "Werkweek",
            "dxScheduler-switcherMonth": "Maand",
            "dxScheduler-switcherAgenda": "Planningsweergave",
            "dxScheduler-switcherTimelineDay": "Tijdslijn Dag",
            "dxScheduler-switcherTimelineWeek": "Tijdslijn Week",
            "dxScheduler-switcherTimelineWorkWeek": "Tijdslijn Werkweek",
            "dxScheduler-switcherTimelineMonth": "Tijdslijn Maand",
            "dxScheduler-recurrenceRepeatOnDate": "op datum",
            "dxScheduler-recurrenceRepeatCount": "keer",
            "dxScheduler-allDay": "Duurt hele dag",
            "dxScheduler-confirmRecurrenceEditMessage": "Alleen deze afspraak of de hele serie wijzigen?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "Alleen deze afspraak of de volledige serie verwijderen?",
            "dxScheduler-confirmRecurrenceEditSeries": "Serie wijzigen",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Serie verwijderen",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Afspraak wijzigen",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Afspraak verwijderen",
            "dxScheduler-noTimezoneTitle": "Geen tijdszone",
            "dxScheduler-moreAppointments": "Nog {0}",
            "dxCalendar-todayButtonText": "Vandaag",
            "dxCalendar-ariaWidgetName": "Kalender",
            "dxColorView-ariaRed": "Rood",
            "dxColorView-ariaGreen": "Groen",
            "dxColorView-ariaBlue": "Blauw",
            "dxColorView-ariaAlpha": "Doorzichtigheid",
            "dxColorView-ariaHex": "Kleurcode",
            "dxTagBox-selected": "{0} geselecteerd",
            "dxTagBox-allSelected": "Alles geselecteerd ({0})",
            "dxTagBox-moreSelected": "Nog {0}",
            "vizExport-printingButtonText": "Afdrukken",
            "vizExport-titleMenuText": "Exporteren/Afdrukken",
            "vizExport-exportButtonText": "{0} bestand",
            "dxFilterBuilder-and": "En",
            "dxFilterBuilder-or": "Of",
            "dxFilterBuilder-notAnd": "En niet",
            "dxFilterBuilder-notOr": "Of niet",
            "dxFilterBuilder-addCondition": "Regel toevoegen",
            "dxFilterBuilder-addGroup": "Groep toevoegen",
            "dxFilterBuilder-enterValueText": "<vul waarde in>",
            "dxFilterBuilder-filterOperationEquals": "Gelijk aan",
            "dxFilterBuilder-filterOperationNotEquals": "Niet gelijk aan",
            "dxFilterBuilder-filterOperationLess": "Is kleiner dan",
            "dxFilterBuilder-filterOperationLessOrEquals": "Is kleiner dan of gelijk aan",
            "dxFilterBuilder-filterOperationGreater": "Is groter dan",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Is groter dan of gelijk aan",
            "dxFilterBuilder-filterOperationStartsWith": "Begint met",
            "dxFilterBuilder-filterOperationContains": "Bevat",
            "dxFilterBuilder-filterOperationNotContains": "Bevat niet",
            "dxFilterBuilder-filterOperationEndsWith": "Eindigt met",
            "dxFilterBuilder-filterOperationIsBlank": "Is leeg",
            "dxFilterBuilder-filterOperationIsNotBlank": "Is niet leeg",
            "dxFilterBuilder-filterOperationBetween": "Is tussen",
            "dxFilterBuilder-filterOperationAnyOf": "Is een van",
            "dxFilterBuilder-filterOperationNoneOf": "Is geen van",
            "dxHtmlEditor-dialogColorCaption": "Tekstkleur",
            "dxHtmlEditor-dialogBackgroundCaption": "Achtergrondkleur",
            "dxHtmlEditor-dialogLinkCaption": "Link",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Tekst",
            "dxHtmlEditor-dialogLinkTargetField": "Open link in een nieuw venster",
            "dxHtmlEditor-dialogImageCaption": "Afbeelding",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternatieve tekst",
            "dxHtmlEditor-dialogImageWidthField": "Breedte (px)",
            "dxHtmlEditor-dialogImageHeightField": "Hoogte (px)",
            "dxHtmlEditor-heading": "Titel",
            "dxHtmlEditor-normalText": "Normale tekst"
        }
    })
});
