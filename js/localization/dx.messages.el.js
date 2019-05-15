/*!
* DevExtreme (dx.messages.el.js)
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
        el: {
            Yes: "\u039d\u03b1\u03af",
            No: "\u038c\u03c7\u03b9",
            Cancel: "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
            Clear: "\u0395\u03ba\u03ba\u03b1\u03b8\u03ac\u03c1\u03b9\u03c3\u03b7",
            Done: "\u039a\u03b1\u03c4\u03b1\u03c7\u03ce\u03c1\u03b7\u03c3\u03b7",
            Loading: "\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7",
            Select: "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5...",
            Search: "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7",
            Back: "\u03a0\u03af\u03c3\u03c9",
            OK: "\u039f\u039a",
            "dxCollectionWidget-noDataText": "\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03b5\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7",
            "validation-required": "\u0391\u03c0\u03b1\u03b9\u03c4\u03b5\u03af\u03c4\u03b1\u03b9 \u03c3\u03c5\u03bc\u03c0\u03bb\u03ae\u03c1\u03c9\u03c3\u03b7",
            "validation-required-formatted": "{0} \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf \u03c0\u03c1\u03bf\u03c2 \u03c3\u03c5\u03bc\u03c0\u03bb\u03ae\u03c1\u03c9\u03c3\u03b7",
            "validation-numeric": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03b7\u03c4\u03b9\u03ba\u03ae",
            "validation-numeric-formatted": "\u03a4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf {0} \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03b7\u03c4\u03b9\u03ba\u03ae \u03c4\u03b9\u03bc\u03ae",
            "validation-range": "\u03a4\u03b9\u03bc\u03ae \u03b5\u03ba\u03c4\u03cc\u03c2 \u03bf\u03c1\u03af\u03c9\u03bd",
            "validation-range-formatted": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 {0} \u03b2\u03c1\u03b9\u03c3\u03ba\u03b5\u03c4\u03b1\u03b9 \u03b5\u03ba\u03c4\u03cc\u03c2 \u03bf\u03c1\u03af\u03c9\u03bd",
            "validation-stringLength": "\u03a4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03c4\u03b7\u03c2 \u03c4\u03b9\u03bc\u03ae\u03c2 \u03c0\u03bf\u03c5 \u03b5\u03b9\u03c3\u03ac\u03b3\u03b1\u03c4\u03b5 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b5\u03ba\u03c4\u03cc\u03c2 \u03bf\u03c1\u03af\u03c9\u03bd",
            "validation-stringLength-formatted": "\u03a4\u03bf \u03bc\u03ae\u03ba\u03bf\u03c2 \u03c4\u03b7\u03c2 \u03c4\u03b9\u03bc\u03ae\u03c2 \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 {0} \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03c3\u03c9\u03c3\u03c4\u03cc",
            "validation-custom": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03b7",
            "validation-custom-formatted": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 {0} \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03b7",
            "validation-compare": "\u039f\u03b9 \u03c4\u03b9\u03bc\u03ad\u03c2 \u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03bf\u03c5\u03bd",
            "validation-compare-formatted": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 {0} \u03b4\u03b5\u03bd \u03c4\u03b1\u03b9\u03c1\u03b9\u03ac\u03b6\u03b5\u03b9",
            "validation-pattern": "\u0397 \u03c4\u03b9\u03bc\u03b7 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b7 \u03b1\u03bd\u03b1\u03bc\u03b5\u03bd\u03cc\u03bc\u03b5\u03bd\u03b7",
            "validation-pattern-formatted": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 {0} \u03b4\u03b5\u03bd \u03b5\u03b9\u03bd\u03b1\u03b9 \u03b7 \u03b1\u03bd\u03b1\u03bc\u03b5\u03bd\u03cc\u03bc\u03b5\u03bd\u03b7",
            "validation-email": "\u03a4\u03bf Email \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03bf",
            "validation-email-formatted": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c4\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 {0} \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03b7",
            "validation-mask": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03ac\u03ba\u03c5\u03c1\u03b7",
            "dxLookup-searchPlaceholder": "\u0395\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03c2 \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03c9\u03bd: {0}",
            "dxList-pullingDownText": "\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03b1\u03c0\u03bf \u03c0\u03ac\u03bd\u03c9 \u03c0\u03c1\u03bf\u03c2 \u03c4\u03b1 \u03ba\u03ac\u03c4\u03c9 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7...",
            "dxList-pulledDownText": "\u0391\u03c0\u03b5\u03bb\u03b5\u03c5\u03b8\u03b5\u03c1\u03ce\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7...",
            "dxList-refreshingText": "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7...",
            "dxList-pageLoadingText": "\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7...",
            "dxList-nextButtonText": "\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
            "dxList-selectAll": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03c9\u03bd",
            "dxListEditDecorator-delete": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
            "dxListEditDecorator-more": "\u03a0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
            "dxScrollView-pullingDownText": "\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03b1\u03c0\u03bf \u03c0\u03ac\u03bd\u03c9 \u03c0\u03c1\u03bf\u03c2 \u03c4\u03b1 \u03ba\u03ac\u03c4\u03c9 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7...",
            "dxScrollView-pulledDownText": "\u0391\u03c0\u03b5\u03bb\u03b5\u03c5\u03b8\u03b5\u03c1\u03ce\u03c3\u03c4\u03b5 \u03b3\u03b9\u03b1 \u03b1\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7...",
            "dxScrollView-refreshingText": "\u0391\u03bd\u03b1\u03bd\u03ad\u03c9\u03c3\u03b7...",
            "dxScrollView-reachBottomText": "\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7...",
            "dxDateBox-simulatedDataPickerTitleTime": "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03ce\u03c1\u03b1",
            "dxDateBox-simulatedDataPickerTitleDate": "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
            "dxDateBox-simulatedDataPickerTitleDateTime": "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03ce\u03c1\u03b1 \u03ba\u03b1\u03b9 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
            "dxDateBox-validation-datetime": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b1\u03bd\u03b1\u03c0\u03b1\u03c1\u03b9\u03c3\u03c4\u03ac \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
            "dxFileUploader-selectFile": "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf",
            "dxFileUploader-dropFile": "\u03ae \u03c3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03c4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03b5\u03b4\u03ce",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7",
            "dxFileUploader-uploaded": "\u039c\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03c4\u03ce\u03b8\u03b7\u03ba\u03b5",
            "dxFileUploader-readyToUpload": "\u0388\u03c4\u03bf\u03b9\u03bc\u03bf \u03c0\u03c1\u03bf\u03c2 \u03bc\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7",
            "dxFileUploader-uploadFailedMessage": "\u0397 \u03bc\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7 \u03b1\u03c0\u03ad\u03c4\u03c5\u03c7\u03b5",
            "dxFileUploader-invalidFileExtension": "\u039f \u03c4\u03c5\u03c0\u03bf\u03c2 \u03c4\u03bf\u03c5 \u03b1\u03c1\u03c7\u03b5\u03af\u03bf\u03c5 \u03b4\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b5\u03c0\u03b9\u03c4\u03c1\u03b5\u03c0\u03c4\u03cc\u03c2",
            "dxFileUploader-invalidMaxFileSize": "\u03a4\u03bf \u03b1\u03c1\u03c7\u03b5\u03af\u03bf \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03bc\u03b5\u03b3\u03ac\u03bb\u03bf",
            "dxFileUploader-invalidMinFileSize": "\u03a4\u03bf \u03b1\u03c1\u03c7\u03b5\u03b9\u03bf \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03bf\u03bb\u03c5 \u03bc\u03b9\u03ba\u03c1\u03cc",
            "dxRangeSlider-ariaFrom": "\u0391\u03c0\u03cc",
            "dxRangeSlider-ariaTill": "\u0395\u03ce\u03c2",
            "dxSwitch-switchedOnText": "ON",
            "dxSwitch-switchedOffText": "OFF",
            "dxForm-optionalMark": "\u03a0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03cc",
            "dxForm-requiredMessage": "\u03a4\u03bf \u03c0\u03b5\u03b4\u03af\u03bf {0} \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c0\u03b1\u03b9\u03c4\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf",
            "dxNumberBox-invalidValueMessage": "\u0397 \u03c4\u03b9\u03bc\u03ae \u03c0\u03c1\u03ad\u03c0\u03b5\u03b9 \u03bd\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03c1\u03b9\u03b8\u03bc\u03b7\u03c4\u03b9\u03ba\u03ae",
            "dxDataGrid-columnChooserTitle": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03b1\u03c2 \u03c3\u03c4\u03ae\u03bb\u03b7\u03c2",
            "dxDataGrid-columnChooserEmptyText": "\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03c3\u03c4\u03ae\u03bb\u03b7 \u03b5\u03b4\u03ce \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c4\u03b7\u03bd \u03ba\u03c1\u03cd\u03c8\u03b5\u03c4\u03b5",
            "dxDataGrid-groupContinuesMessage": "\u03a3\u03c5\u03bd\u03ad\u03c7\u03b5\u03b9\u03b1 \u03c3\u03c4\u03b7\u03bd \u03b5\u03c0\u03cc\u03bc\u03b5\u03bd\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1",
            "dxDataGrid-groupContinuedMessage": "\u03a3\u03c5\u03bd\u03ad\u03c7\u03b5\u03b9\u03b1 \u03b1\u03c0\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1",
            "dxDataGrid-groupHeaderText": "\u039f\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7 \u03b1\u03c0\u03bf \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7\u03bd \u03c3\u03c4\u03ae\u03bb\u03b7",
            "dxDataGrid-ungroupHeaderText": "\u0391\u03c0\u03cc\u03c3\u03c0\u03b1\u03c3\u03b7",
            "dxDataGrid-ungroupAllText": "\u0391\u03c0\u03cc\u03c3\u03c0\u03b1\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd",
            "dxDataGrid-editingEditRow": "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
            "dxDataGrid-editingSaveRowChanges": "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7",
            "dxDataGrid-editingCancelRowChanges": "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
            "dxDataGrid-editingDeleteRow": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
            "dxDataGrid-editingUndeleteRow": "\u0391\u03bd\u03ac\u03ba\u03c4\u03b7\u03c3\u03b7 \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2",
            "dxDataGrid-editingConfirmDeleteMessage": "\u0395\u03af\u03c3\u03c4\u03b5 \u03c3\u03af\u03b3\u03bf\u03c5\u03c1\u03bf\u03b9 \u03c0\u03c9\u03c2 \u03b8\u03ad\u03bb\u03b5\u03c4\u03b5 \u03c4\u03b7\u03bd \u03b4\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03b1\u03c5\u03c4\u03ae\u03c2 \u03c4\u03b7\u03c2 \u03b5\u03b3\u03b3\u03c1\u03b1\u03c6\u03ae\u03c2;",
            "dxDataGrid-validationCancelChanges": "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ce\u03bd",
            "dxDataGrid-groupPanelEmptyText": "\u03a3\u03cd\u03c1\u03b5\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03c3\u03c4\u03ae\u03bb\u03b7 \u03b5\u03b4\u03ce \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bc\u03b1\u03b4\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b5\u03c4\u03b5 \u03bc\u03b5 \u03b2\u03ac\u03c3\u03b7 \u03b1\u03c5\u03c4\u03ae",
            "dxDataGrid-noDataText": "\u0394\u03b5\u03bd \u03c5\u03c0\u03ac\u03c1\u03c7\u03bf\u03c5\u03bd \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1",
            "dxDataGrid-searchPanelPlaceholder": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7...",
            "dxDataGrid-filterRowShowAllText": "(\u038c\u03bb\u03b1)",
            "dxDataGrid-filterRowResetOperationText": "\u0395\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac",
            "dxDataGrid-filterRowOperationEquals": "\u0399\u03c3\u03bf\u03cd\u03c4\u03b1\u03b9",
            "dxDataGrid-filterRowOperationNotEquals": "\u0394\u03b9\u03b1\u03c6\u03ad\u03c1\u03b5\u03b9",
            "dxDataGrid-filterRowOperationLess": "\u039c\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc",
            "dxDataGrid-filterRowOperationLessOrEquals": "\u039c\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03bf \u03af\u03c3\u03bf \u03b1\u03c0\u03cc",
            "dxDataGrid-filterRowOperationGreater": "\u039c\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "\u039c\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03af\u03c3\u03bf \u03b1\u03c0\u03cc",
            "dxDataGrid-filterRowOperationStartsWith": "\u039e\u03b5\u03ba\u03b9\u03bd\u03ac\u03b5\u03b9 \u03bc\u03b5",
            "dxDataGrid-filterRowOperationContains": "\u03a0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9",
            "dxDataGrid-filterRowOperationNotContains": "\u0394\u03b5\u03bd \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9",
            "dxDataGrid-filterRowOperationEndsWith": "\u03a4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03bc\u03b5",
            "dxDataGrid-filterRowOperationBetween": "\u0391\u03bd\u03ac\u03bc\u03b5\u03c3\u03b1",
            "dxDataGrid-filterRowOperationBetweenStartText": "\u0395\u03ba\u03ba\u03af\u03bd\u03b7\u03c3\u03b7",
            "dxDataGrid-filterRowOperationBetweenEndText": "\u03a4\u03ad\u03bb\u03bf\u03c2",
            "dxDataGrid-applyFilterText": "\u0395\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5",
            "dxDataGrid-trueText": "\u0391\u03bb\u03b7\u03b8\u03ad\u03c2",
            "dxDataGrid-falseText": "\u03a8\u03b5\u03c5\u03b4\u03ad\u03c2",
            "dxDataGrid-sortingAscendingText": "\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 \u03b1\u03cd\u03be\u03bf\u03c5\u03c3\u03b1",
            "dxDataGrid-sortingDescendingText": "\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 \u03c6\u03b8\u03ae\u03bd\u03bf\u03c5\u03c3\u03b1",
            "dxDataGrid-sortingClearText": "\u0395\u03ba\u03ba\u03b1\u03b8\u03ac\u03c1\u03b9\u03c3\u03b7 \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b9\u03c3\u03b7\u03c2",
            "dxDataGrid-editingSaveAllChanges": "\u0391\u03c0\u03bf\u03b8\u03ae\u03ba\u03b5\u03c5\u03c3\u03b7 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ce\u03bd",
            "dxDataGrid-editingCancelAllChanges": "\u0391\u03c0\u03cc\u03c1\u03c1\u03b9\u03c8\u03b7 \u03b1\u03bb\u03bb\u03b1\u03b3\u03ce\u03bd",
            "dxDataGrid-editingAddRow": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03bb\u03b7 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Min of {1} is {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Max of {1} is {0}",
            "dxDataGrid-summaryAvg": "Avg: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Avg of {1} is {0}",
            "dxDataGrid-summarySum": "Sum: {0}",
            "dxDataGrid-summarySumOtherColumn": "Sum of {1} is {0}",
            "dxDataGrid-summaryCount": "\u03a0\u03bf\u03c3\u03cc\u03c4\u03b7\u03c4\u03b1: {0}",
            "dxDataGrid-columnFixingFix": "\u0395\u03c0\u03b9\u03b4\u03b9\u03cc\u03c1\u03b8\u03c9\u03c3\u03b7",
            "dxDataGrid-columnFixingUnfix": "\u0386\u03c1\u03c3\u03b7 \u03b5\u03c0\u03b9\u03c3\u03ba\u03b5\u03c5\u03ae\u03c2",
            "dxDataGrid-columnFixingLeftPosition": "\u03a0\u03c1\u03bf\u03c2 \u03c4\u03b1 \u03b1\u03c1\u03b9\u03c3\u03c4\u03b5\u03c1\u03ac",
            "dxDataGrid-columnFixingRightPosition": "\u03a0\u03c1\u03bf\u03c2 \u03c4\u03b1 \u03b4\u03b5\u03be\u03b9\u03ac",
            "dxDataGrid-exportTo": "\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae",
            "dxDataGrid-exportToExcel": "\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae \u03c3\u03b5 Excel",
            "dxDataGrid-excelFormat": "\u0391\u03c1\u03c7\u03b5\u03af\u03bf Excel",
            "dxDataGrid-selectedRows": "\u0395\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03b5\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ad\u03c2",
            "dxDataGrid-exportSelectedRows": "\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03c9\u03bd \u03b3\u03c1\u03b1\u03bc\u03bc\u03ce\u03bd",
            "dxDataGrid-exportAll": "\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae \u03cc\u03bb\u03c9\u03bd \u03c4\u03c9\u03bd \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd",
            "dxDataGrid-headerFilterEmptyValue": "(Blanks)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "\u0391\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7",
            "dxDataGrid-ariaColumn": "\u03a3\u03c4\u03ae\u03bb\u03b7",
            "dxDataGrid-ariaValue": "\u03a4\u03b9\u03bc\u03ae",
            "dxDataGrid-ariaFilterCell": "\u03a6\u03b9\u03bb\u03c4\u03c1\u03ac\u03c1\u03b9\u03c3\u03bc\u03b1 \u03ba\u03b5\u03bb\u03b9\u03bf\u03cd",
            "dxDataGrid-ariaCollapse": "\u03a3\u03c5\u03c1\u03c1\u03af\u03ba\u03bd\u03c9\u03c3\u03b7",
            "dxDataGrid-ariaExpand": "\u0395\u03c0\u03ad\u03ba\u03c4\u03b1\u03c3\u03b7",
            "dxDataGrid-ariaDataGrid": "\u03a0\u03bb\u03ad\u03b3\u03bc\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd",
            "dxDataGrid-ariaSearchInGrid": "\u0391\u03bd\u03b1\u03b6\u03ae\u03c4\u03b7\u03c3\u03b7 \u03c3\u03c4\u03bf \u03c0\u03bb\u03ad\u03b3\u03bc\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd",
            "dxDataGrid-ariaSelectAll": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03cc\u03bb\u03c9\u03bd",
            "dxDataGrid-ariaSelectRow": "\u0395\u03c0\u03b9\u03bb\u03ad\u03be\u03c4\u03b5 \u03c3\u03b5\u03b9\u03c1\u03ac",
            "dxDataGrid-filterBuilderPopupTitle": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5",
            "dxDataGrid-filterPanelCreateFilter": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5",
            "dxDataGrid-filterPanelClearFilter": "\u0395\u03ba\u03ba\u03b1\u03b8\u03ac\u03c1\u03b9\u03c3\u03b7",
            "dxDataGrid-filterPanelFilterEnabledHint": "\u0395\u03bd\u03b5\u03c1\u03b3\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03c4\u03bf \u03c6\u03af\u03bb\u03c4\u03c1\u03bf",
            "dxTreeList-ariaTreeList": "\u039b\u03af\u03c3\u03c4\u03b1 \u03b4\u03ad\u03bd\u03b4\u03c1\u03c9\u03bd",
            "dxTreeList-editingAddRowToNode": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c4\u03c9",
            "dxPager-infoText": "\u03a3\u03b5\u03bb\u03af\u03b4\u03b1 {0} \u03b1\u03c0\u03cc {1} ({2} \u03b1\u03bd\u03c4\u03b9\u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03b1)",
            "dxPager-pagesCountText": "\u03b1\u03c0\u03cc",
            "dxPivotGrid-grandTotal": "\u03a3\u03cd\u03bd\u03bf\u03bb\u03bf",
            "dxPivotGrid-total": "{0} \u03a3\u03cd\u03bd\u03bf\u03bb\u03bf",
            "dxPivotGrid-fieldChooserTitle": "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03b1\u03c2 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5",
            "dxPivotGrid-showFieldChooser": "\u0395\u03bc\u03c6\u03ac\u03bd\u03b9\u03c3\u03b7 \u03b5\u03c0\u03b9\u03bb\u03bf\u03b3\u03ad\u03b1 \u03c0\u03b5\u03b4\u03af\u03c9\u03bd",
            "dxPivotGrid-expandAll": "\u0395\u03c0\u03ad\u03ba\u03c4\u03b1\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd",
            "dxPivotGrid-collapseAll": "\u03a3\u03cd\u03bc\u03c0\u03c4\u03c5\u03be\u03b7 \u03cc\u03bb\u03c9\u03bd",
            "dxPivotGrid-sortColumnBySummary": '\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 "{0}" \u03b1\u03c0\u03cc \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7\u03bd \u03c3\u03c4\u03ae\u03bb\u03b7',
            "dxPivotGrid-sortRowBySummary": '\u03a4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7 "{0}" \u03b1\u03c0\u03cc \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7\u03bd \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae',
            "dxPivotGrid-removeAllSorting": "\u039a\u03b1\u03c4\u03ac\u03c1\u03b3\u03b7\u03c3\u03b7 \u03ba\u03ac\u03b8\u03b5 \u03c4\u03b1\u03be\u03b9\u03bd\u03cc\u03bc\u03b7\u03c3\u03b7\u03c2",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "\u03a0\u03b5\u03b4\u03af\u03b1 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ae\u03c2",
            "dxPivotGrid-columnFields": "\u03a0\u03b5\u03b4\u03af\u03b1 \u03c3\u03c4\u03ae\u03bb\u03b7\u03c2",
            "dxPivotGrid-dataFields": "\u03a0\u03b5\u03b4\u03af\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd",
            "dxPivotGrid-filterFields": "\u03a0\u03b5\u03b4\u03af\u03b1 \u03c6\u03af\u03bb\u03c4\u03c1\u03bf\u03c5",
            "dxPivotGrid-allFields": "\u039f\u03bb\u03b1 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1",
            "dxPivotGrid-columnFieldArea": "\u03a4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03c3\u03c4\u03b7 \u03c3\u03c4\u03ae\u03bb\u03b7 \u03b5\u03b4\u03ce",
            "dxPivotGrid-dataFieldArea": "\u03a4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03b5\u03b4\u03ce",
            "dxPivotGrid-rowFieldArea": "\u03a4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03b3\u03c1\u03b1\u03bc\u03bc\u03ce\u03bd \u03b5\u03b4\u03ce",
            "dxPivotGrid-filterFieldArea": "\u03a4\u03bf\u03c0\u03bf\u03b8\u03b5\u03c4\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03c0\u03b5\u03b4\u03af\u03b1 \u03c6\u03af\u03bb\u03c4\u03c1\u03c9\u03bd \u03b5\u03b4\u03ce",
            "dxScheduler-editorLabelTitle": "\u0398\u03ad\u03bc\u03b1",
            "dxScheduler-editorLabelStartDate": "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03ad\u03bd\u03b1\u03c1\u03be\u03b7\u03c2",
            "dxScheduler-editorLabelEndDate": "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03bb\u03ae\u03be\u03b7\u03c2",
            "dxScheduler-editorLabelDescription": "\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
            "dxScheduler-editorLabelRecurrence": "\u0395\u03c0\u03b1\u03bd\u03ac\u03bb\u03b7\u03c8\u03b7",
            "dxScheduler-openAppointment": "\u0386\u03bd\u03bf\u03b9\u03b3\u03bc\u03b1 \u03c1\u03b1\u03bd\u03c4\u03b5\u03b2\u03bf\u03cd",
            "dxScheduler-recurrenceNever": "\u03a0\u03bf\u03c4\u03ad",
            "dxScheduler-recurrenceDaily": "\u039a\u03b1\u03b8\u03b7\u03bc\u03b5\u03c1\u03b9\u03bd\u03ac",
            "dxScheduler-recurrenceWeekly": "\u0395\u03b2\u03b4\u03bf\u03bc\u03b1\u03b4\u03b9\u03b1\u03af\u03b1",
            "dxScheduler-recurrenceMonthly": "\u039c\u03b7\u03bd\u03b9\u03b1\u03af\u03b1",
            "dxScheduler-recurrenceYearly": "\u0395\u03c4\u03ae\u03c3\u03b9\u03b1",
            "dxScheduler-recurrenceEvery": "\u039a\u03ac\u03b8\u03b5",
            "dxScheduler-recurrenceEnd": "\u03a4\u03b5\u03c1\u03bc\u03b1\u03c4\u03b9\u03c3\u03bc\u03cc\u03c2 \u03b5\u03c0\u03b1\u03bd\u03ac\u03bb\u03b7\u03c8\u03b7\u03c2",
            "dxScheduler-recurrenceAfter": "\u039c\u03b5\u03c4\u03ac",
            "dxScheduler-recurrenceOn": "On",
            "dxScheduler-recurrenceRepeatDaily": "\u03bc\u03ad\u03c1\u03b1(\u03b5\u03c2)",
            "dxScheduler-recurrenceRepeatWeekly": "\u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1(\u03b5\u03c2)",
            "dxScheduler-recurrenceRepeatMonthly": "\u03bc\u03ae\u03bd\u03b1(\u03b5\u03c2)",
            "dxScheduler-recurrenceRepeatYearly": "\u03c7\u03c1\u03cc\u03bd\u03bf(\u03bf\u03c5\u03c2)",
            "dxScheduler-switcherDay": "\u039c\u03ad\u03c1\u03b1",
            "dxScheduler-switcherWeek": "\u0395\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1",
            "dxScheduler-switcherWorkWeek": "\u0395\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1 \u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2",
            "dxScheduler-switcherMonth": "\u039c\u03ae\u03bd\u03b1\u03c2",
            "dxScheduler-switcherAgenda": "\u0397\u03bc\u03b5\u03c1\u03ae\u03c3\u03b9\u03b1 \u03b4\u03b9\u03ac\u03c4\u03b1\u03be\u03b7",
            "dxScheduler-switcherTimelineDay": "\u0397\u03bc\u03b5\u03c1\u03ae\u03c3\u03b9\u03bf \u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf",
            "dxScheduler-switcherTimelineWeek": "\u0395\u03b2\u03b4\u03bf\u03bc\u03b1\u03b4\u03b9\u03b1\u03af\u03bf \u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf",
            "dxScheduler-switcherTimelineWorkWeek": "\u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1\u03c2 \u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1\u03c2",
            "dxScheduler-switcherTimelineMonth": "\u039c\u03b7\u03bd\u03b9\u03b1\u03af\u03bf \u03a7\u03c1\u03bf\u03bd\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf",
            "dxScheduler-recurrenceRepeatOnDate": "\u03c3\u03c4\u03b7\u03bd \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
            "dxScheduler-recurrenceRepeatCount": "\u03c0\u03b5\u03c1\u03b9\u03c3\u03c4\u03b1\u03c4\u03b9\u03ba\u03cc(\u03b1)",
            "dxScheduler-allDay": "\u038c\u03bb\u03b7 \u03bc\u03ad\u03c1\u03b1",
            "dxScheduler-confirmRecurrenceEditMessage": "\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b5\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03bc\u03cc\u03bd\u03bf \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c1\u03b1\u03bd\u03c4\u03b5\u03b2\u03bf\u03cd \u03ae \u03bf\u03bb\u03cc\u03ba\u03bb\u03b7\u03c1\u03b7 \u03c4\u03b7 \u03c3\u03b5\u03b9\u03c1\u03ac;",
            "dxScheduler-confirmRecurrenceDeleteMessage": "\u0398\u03ad\u03bb\u03b5\u03c4\u03b5 \u03bd\u03b1 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03b5\u03c4\u03b5 \u03bc\u03cc\u03bd\u03bf \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c1\u03b1\u03bd\u03c4\u03b5\u03b2\u03bf\u03cd \u03ae \u03bf\u03bb\u03cc\u03ba\u03bb\u03b7\u03c1\u03b7 \u03c4\u03b7 \u03c3\u03b5\u03b9\u03c1\u03ac;",
            "dxScheduler-confirmRecurrenceEditSeries": "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03c3\u03b5\u03b9\u03c1\u03ac\u03c2",
            "dxScheduler-confirmRecurrenceDeleteSeries": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03c3\u03b5\u03b9\u03c1\u03ac\u03c2",
            "dxScheduler-confirmRecurrenceEditOccurrence": "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1 \u03c3\u03c5\u03bd\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae \u03c3\u03c5\u03bd\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7\u03c2",
            "dxScheduler-noTimezoneTitle": "\u03a7\u03c9\u03c1\u03af\u03c2 \u03b6\u03ce\u03bd\u03b7 \u03ce\u03c1\u03b1\u03c2",
            "dxScheduler-moreAppointments": "{0} \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
            "dxCalendar-todayButtonText": "\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1",
            "dxCalendar-ariaWidgetName": "\u0397\u03bc\u03b5\u03c1\u03bf\u03bb\u03cc\u03b3\u03b9\u03bf",
            "dxColorView-ariaRed": "\u039a\u03cc\u03ba\u03ba\u03b9\u03bd\u03bf",
            "dxColorView-ariaGreen": "\u03a0\u03c1\u03ac\u03c3\u03b9\u03bd\u03bf",
            "dxColorView-ariaBlue": "\u039c\u03c0\u03bb\u03b5",
            "dxColorView-ariaAlpha": "\u0394\u03b9\u03ac\u03c6\u03b1\u03bd\u03bf",
            "dxColorView-ariaHex": "\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2",
            "dxTagBox-selected": "{0} \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf/\u03b1",
            "dxTagBox-allSelected": "\u038c\u03bb\u03b1 \u03b5\u03c0\u03b9\u03bb\u03ad\u03c7\u03b8\u03b7\u03ba\u03b1\u03bd ({0})",
            "dxTagBox-moreSelected": "{0} \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b1",
            "vizExport-printingButtonText": "\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7",
            "vizExport-titleMenuText": "\u0395\u03be\u03b1\u03b3\u03c9\u03b3\u03ae/\u0395\u03ba\u03c4\u03cd\u03c0\u03c9\u03c3\u03b7",
            "vizExport-exportButtonText": "{0} \u03b1\u03c1\u03c7\u03b5\u03af\u03bf/\u03b1",
            "dxFilterBuilder-and": "\u039a\u03b1\u03b9",
            "dxFilterBuilder-or": "\u0389",
            "dxFilterBuilder-notAnd": "\u038c\u03c7\u03b9 \u039a\u03b1\u03b9",
            "dxFilterBuilder-notOr": "\u038c\u03c7\u03b9 \u0389",
            "dxFilterBuilder-addCondition": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c5\u03bd\u03b8\u03b7\u03ba\u03ce\u03bd",
            "dxFilterBuilder-addGroup": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03bf\u03bc\u03ac\u03b4\u03b1\u03c2",
            "dxFilterBuilder-enterValueText": "<\u03b5\u03b9\u03c3\u03b1\u03b3\u03ac\u03b3\u03b5\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03c4\u03b9\u03bc\u03ae>",
            "dxFilterBuilder-filterOperationEquals": "\u038a\u03c3\u03bf \u03bc\u03b5",
            "dxFilterBuilder-filterOperationNotEquals": "\u0394\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03af\u03c3\u03bf \u03bc\u03b5",
            "dxFilterBuilder-filterOperationLess": "\u0395\u03af\u03bd\u03b1\u03b9 \u03bc\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc",
            "dxFilterBuilder-filterOperationLessOrEquals": "\u0395\u03af\u03bd\u03b1\u03b9 \u03bc\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03bf\u0384\u03ae \u03af\u03c3\u03bf \u03b1\u03c0\u03cc",
            "dxFilterBuilder-filterOperationGreater": "\u0395\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "\u0395\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03ae \u03af\u03c3\u03bf \u03bc\u03b5",
            "dxFilterBuilder-filterOperationStartsWith": "\u039e\u03b5\u03ba\u03b9\u03bd\u03ac\u03b5\u03b9 \u03bc\u03b5",
            "dxFilterBuilder-filterOperationContains": "\u03a0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9",
            "dxFilterBuilder-filterOperationNotContains": "\u0394\u03b5\u03bd \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9",
            "dxFilterBuilder-filterOperationEndsWith": "\u03a4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03bc\u03b5",
            "dxFilterBuilder-filterOperationIsBlank": "\u0395\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
            "dxFilterBuilder-filterOperationIsNotBlank": "\u0394\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03b5\u03bd\u03cc",
            "dxFilterBuilder-filterOperationBetween": "\u0395\u03af\u03bd\u03b1\u03b9 \u03b1\u03bd\u03ac\u03bc\u03b5\u03c3\u03b1",
            "dxFilterBuilder-filterOperationAnyOf": "\u0395\u03af\u03bd\u03b1\u03b9 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf \u03b1\u03c0\u03cc \u03b1\u03c5\u03c4\u03ac",
            "dxFilterBuilder-filterOperationNoneOf": "\u0394\u03b5\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03c4\u03af\u03c0\u03bf\u03c4\u03b1 \u03b1\u03c0\u03cc \u03b1\u03c5\u03c4\u03ac",
            "dxHtmlEditor-dialogColorCaption": "\u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2 \u03b3\u03c1\u03b1\u03bc\u03bc\u03b1\u03c4\u03bf\u03c3\u03b5\u03b9\u03c1\u03ac\u03c2",
            "dxHtmlEditor-dialogBackgroundCaption": "\u0391\u03bb\u03bb\u03b1\u03b3\u03ae \u03c7\u03c1\u03ce\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c6\u03cc\u03bd\u03c4\u03bf\u03c5",
            "dxHtmlEditor-dialogLinkCaption": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03c3\u03c5\u03bd\u03b4\u03ad\u03c3\u03bc\u03bf\u03c5",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "\u039a\u03b5\u03af\u03bc\u03b5\u03bd\u03bf",
            "dxHtmlEditor-dialogLinkTargetField": "\u0391\u03bd\u03bf\u03af\u03be\u03c4\u03b5 \u03c4\u03bf \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03bc\u03bf \u03c3\u03b5 \u03bd\u03ad\u03bf \u03c0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf",
            "dxHtmlEditor-dialogImageCaption": "\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03c4\u03b5 \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "\u0395\u03bd\u03b1\u03bb\u03bb\u03b1\u03ba\u03c4\u03b9\u03ba\u03cc \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf",
            "dxHtmlEditor-dialogImageWidthField": "\u03a0\u03bb\u03ac\u03c4\u03bf\u03c2 (px)",
            "dxHtmlEditor-dialogImageHeightField": "\u03a5\u03c8\u03bf\u03c2 (px)",
            "dxHtmlEditor-heading": "\u0395\u03c0\u03b9\u03ba\u03b5\u03c6\u03b1\u03bb\u03af\u03b4\u03b1",
            "dxHtmlEditor-normalText": "\u039a\u03b1\u03bd\u03bf\u03bd\u03b9\u03ba\u03cc \u03ba\u03b5\u03af\u03bc\u03b5\u03bd\u03bf"
        }
    })
});
