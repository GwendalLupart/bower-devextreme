/*!
* DevExtreme (dx.messages.es.js)
* Version: 18.1.4 (build 18184)
* Build date: Tue Jul 03 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
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
        es: {
            Yes: "Sí",
            No: "No",
            Cancel: "Cancelar",
            Clear: "Limpiar",
            Done: "Hecho",
            Loading: "Cargando...",
            Select: "Seleccionar...",
            Search: "Buscar",
            Back: "Volver",
            OK: "Aceptar",
            "dxCollectionWidget-noDataText": "Sin datos para mostrar",
            "validation-required": "Obligatorio",
            "validation-required-formatted": "{0} es obligatorio",
            "validation-numeric": "Valor debe ser un número",
            "validation-numeric-formatted": "{0} debe ser un número",
            "validation-range": "Valor fuera de rango",
            "validation-range-formatted": "{0} fuera de rango",
            "validation-stringLength": "El tamaño del valor es incorrecto",
            "validation-stringLength-formatted": "El tamaño de {0} es incorrecto",
            "validation-custom": "Valor inválido",
            "validation-custom-formatted": "{0} inválido",
            "validation-compare": "Valores no coinciden",
            "validation-compare-formatted": "{0} no coinciden",
            "validation-pattern": "Valor no coincide con el patrón",
            "validation-pattern-formatted": "{0} no coincide con el patrón",
            "validation-email": "Email inválido",
            "validation-email-formatted": "{0} inválido",
            "validation-mask": "Valor inválido",
            "dxLookup-searchPlaceholder": "Cantidad mínima de caracteres: {0}",
            "dxList-pullingDownText": "Desliza hacia abajo para actualizar...",
            "dxList-pulledDownText": "Suelta para actualizar...",
            "dxList-refreshingText": "Actualizando...",
            "dxList-pageLoadingText": "Cargando...",
            "dxList-nextButtonText": "Más",
            "dxList-selectAll": "Seleccionar Todo",
            "dxListEditDecorator-delete": "Eliminar",
            "dxListEditDecorator-more": "Más",
            "dxScrollView-pullingDownText": "Desliza hacia abajo para actualizar...",
            "dxScrollView-pulledDownText": "Suelta para actualizar...",
            "dxScrollView-refreshingText": "Actualizando...",
            "dxScrollView-reachBottomText": "Cargando...",
            "dxDateBox-simulatedDataPickerTitleTime": "Seleccione hora",
            "dxDateBox-simulatedDataPickerTitleDate": "Seleccione fecha",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Seleccione fecha y hora",
            "dxDateBox-validation-datetime": "Valor debe ser una fecha u hora",
            "dxFileUploader-selectFile": "Seleccionar archivo",
            "dxFileUploader-dropFile": "o arrastre un archivo aquí",
            "dxFileUploader-bytes": "bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Subir",
            "dxFileUploader-uploaded": "Subido",
            "dxFileUploader-readyToUpload": "Listo para subir",
            "dxFileUploader-uploadFailedMessage": "Falla ao subir",
            "dxRangeSlider-ariaFrom": "Desde",
            "dxRangeSlider-ariaTill": "Hasta",
            "dxSwitch-onText": "ENCENDIDO",
            "dxSwitch-offText": "APAGADO",
            "dxForm-optionalMark": "opcional",
            "dxForm-requiredMessage": "{0} es obligatorio",
            "dxNumberBox-invalidValueMessage": "Valor debe ser un número",
            "dxDataGrid-columnChooserTitle": "Selector de Columnas",
            "dxDataGrid-columnChooserEmptyText": "Arrastra una columna aquí para ocultarla",
            "dxDataGrid-groupContinuesMessage": "Continúa en la página siguiente",
            "dxDataGrid-groupContinuedMessage": "Continuación de la página anterior",
            "dxDataGrid-groupHeaderText": "Agrupar por esta columna",
            "dxDataGrid-ungroupHeaderText": "Desagrupar",
            "dxDataGrid-ungroupAllText": "Desagrupar Todo",
            "dxDataGrid-editingEditRow": "Modificar",
            "dxDataGrid-editingSaveRowChanges": "Guardar",
            "dxDataGrid-editingCancelRowChanges": "Cancelar",
            "dxDataGrid-editingDeleteRow": "Eliminar",
            "dxDataGrid-editingUndeleteRow": "Recuperar",
            "dxDataGrid-editingConfirmDeleteMessage": "¿Está seguro que desea eliminar este registro?",
            "dxDataGrid-validationCancelChanges": "Cancelar cambios",
            "dxDataGrid-groupPanelEmptyText": "Arrastra una columna aquí para agrupar por ella",
            "dxDataGrid-noDataText": "Sin datos",
            "dxDataGrid-searchPanelPlaceholder": "Buscar...",
            "dxDataGrid-filterRowShowAllText": "(Todos)",
            "dxDataGrid-filterRowResetOperationText": "Reestablecer",
            "dxDataGrid-filterRowOperationEquals": "Igual",
            "dxDataGrid-filterRowOperationNotEquals": "No es igual",
            "dxDataGrid-filterRowOperationLess": "Menor que",
            "dxDataGrid-filterRowOperationLessOrEquals": "Menor o igual a",
            "dxDataGrid-filterRowOperationGreater": "Mayor que",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Mayor o igual a",
            "dxDataGrid-filterRowOperationStartsWith": "Empieza con",
            "dxDataGrid-filterRowOperationContains": "Contiene",
            "dxDataGrid-filterRowOperationNotContains": "No contiene",
            "dxDataGrid-filterRowOperationEndsWith": "Termina con",
            "dxDataGrid-filterRowOperationBetween": "Entre",
            "dxDataGrid-filterRowOperationBetweenStartText": "Inicio",
            "dxDataGrid-filterRowOperationBetweenEndText": "Fin",
            "dxDataGrid-applyFilterText": "Filtrar",
            "dxDataGrid-trueText": "verdadero",
            "dxDataGrid-falseText": "falso",
            "dxDataGrid-sortingAscendingText": "Orden Ascendente",
            "dxDataGrid-sortingDescendingText": "Orden Descendente",
            "dxDataGrid-sortingClearText": "Limpiar Ordenamiento",
            "dxDataGrid-editingSaveAllChanges": "Guardar cambios",
            "dxDataGrid-editingCancelAllChanges": "Descartar cambios",
            "dxDataGrid-editingAddRow": "Agregar una fila",
            "dxDataGrid-summaryMin": "Mín: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Mín de {1} es {0}",
            "dxDataGrid-summaryMax": "Máx: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Máx de {1} es {0}",
            "dxDataGrid-summaryAvg": "Prom: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Prom de {1} es {0}",
            "dxDataGrid-summarySum": "Suma: {0}",
            "dxDataGrid-summarySumOtherColumn": "Suma de {1} es {0}",
            "dxDataGrid-summaryCount": "Cantidad: {0}",
            "dxDataGrid-columnFixingFix": "Anclar",
            "dxDataGrid-columnFixingUnfix": "Desanclar",
            "dxDataGrid-columnFixingLeftPosition": "A la izquierda",
            "dxDataGrid-columnFixingRightPosition": "A la derecha",
            "dxDataGrid-exportTo": "Exportar",
            "dxDataGrid-exportToExcel": "Exportar a archivo Excel",
            "dxDataGrid-excelFormat": "Archivo Excel",
            "dxDataGrid-selectedRows": "Filas seleccionadas",
            "dxDataGrid-exportSelectedRows": "Exportar filas seleccionadas",
            "dxDataGrid-exportAll": "Exportar todo",
            "dxDataGrid-headerFilterEmptyValue": "(Vacio)",
            "dxDataGrid-headerFilterOK": "Aceptar",
            "dxDataGrid-headerFilterCancel": "Cancelar",
            "dxDataGrid-ariaColumn": "Columna",
            "dxDataGrid-ariaValue": "Valor",
            "dxDataGrid-ariaFilterCell": "Celda de filtro",
            "dxDataGrid-ariaCollapse": "Colapsar",
            "dxDataGrid-ariaExpand": "Expandir",
            "dxDataGrid-ariaDataGrid": "Tabla de datos",
            "dxDataGrid-ariaSearchInGrid": "Buscar en la tabla de datos",
            "dxDataGrid-ariaSelectAll": "Seleccionar todo",
            "dxDataGrid-ariaSelectRow": "Seleccionar fila",
            "dxDataGrid-filterBuilderPopupTitle": "Constructor de filtro",
            "dxDataGrid-filterPanelCreateFilter": "Crear filtro",
            "dxDataGrid-filterPanelClearFilter": "Limpiar filtro",
            "dxDataGrid-filterPanelFilterEnabledHint": "Habilitar filtro",
            "dxTreeList-ariaTreeList": "Lista de árbol",
            "dxTreeList-editingAddRowToNode": "Añadir",
            "dxPager-infoText": "Página {0} de {1} ({2} ítems)",
            "dxPager-pagesCountText": "de",
            "dxPivotGrid-grandTotal": "Gran Total",
            "dxPivotGrid-total": "{0} Total",
            "dxPivotGrid-fieldChooserTitle": "Selector de Campos",
            "dxPivotGrid-showFieldChooser": "Mostrar Selector de Campos",
            "dxPivotGrid-expandAll": "Expandir Todo",
            "dxPivotGrid-collapseAll": "Colapsar Todo",
            "dxPivotGrid-sortColumnBySummary": 'Ordenar "{0}" por esta columna',
            "dxPivotGrid-sortRowBySummary": 'Ordenar "{0}" por esta fila',
            "dxPivotGrid-removeAllSorting": "Remover ordenamiento",
            "dxPivotGrid-dataNotAvailable": "N/A",
            "dxPivotGrid-rowFields": "Campos de fila",
            "dxPivotGrid-columnFields": "Campos de columna",
            "dxPivotGrid-dataFields": "Campos de dato",
            "dxPivotGrid-filterFields": "Campos de filtro",
            "dxPivotGrid-allFields": "Todos los campos",
            "dxPivotGrid-columnFieldArea": "Arrastra campos de columna aquí",
            "dxPivotGrid-dataFieldArea": "Arrastra campos de dato aquí",
            "dxPivotGrid-rowFieldArea": "Arrastra campos de fila aquí",
            "dxPivotGrid-filterFieldArea": "Arrastra campos de filtro aquí",
            "dxScheduler-editorLabelTitle": "Asunto",
            "dxScheduler-editorLabelStartDate": "Fecha inicial",
            "dxScheduler-editorLabelEndDate": "Fecha final",
            "dxScheduler-editorLabelDescription": "Descripción",
            "dxScheduler-editorLabelRecurrence": "Repetir",
            "dxScheduler-openAppointment": "Abrir cita",
            "dxScheduler-recurrenceNever": "Nunca",
            "dxScheduler-recurrenceDaily": "Diario",
            "dxScheduler-recurrenceWeekly": "Semanal",
            "dxScheduler-recurrenceMonthly": "Mensual",
            "dxScheduler-recurrenceYearly": "Anual",
            "dxScheduler-recurrenceEvery": "Cada",
            "dxScheduler-recurrenceEnd": "Terminar repetición",
            "dxScheduler-recurrenceAfter": "Después",
            "dxScheduler-recurrenceOn": "En",
            "dxScheduler-recurrenceRepeatDaily": "día(s)",
            "dxScheduler-recurrenceRepeatWeekly": "semana(s)",
            "dxScheduler-recurrenceRepeatMonthly": "mes(es)",
            "dxScheduler-recurrenceRepeatYearly": "año(s)",
            "dxScheduler-switcherDay": "Día",
            "dxScheduler-switcherWeek": "Semana",
            "dxScheduler-switcherWorkWeek": "Semana Laboral",
            "dxScheduler-switcherMonth": "Mes",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-switcherTimelineDay": "Línea de tiempo Día",
            "dxScheduler-switcherTimelineWeek": "Línea de tiempo Semana",
            "dxScheduler-switcherTimelineWorkWeek": "Línea de tiempo Semana Laboral",
            "dxScheduler-switcherTimelineMonth": "Línea de tiempo Mes",
            "dxScheduler-recurrenceRepeatOnDate": "en la fecha",
            "dxScheduler-recurrenceRepeatCount": "ocurrencia(s)",
            "dxScheduler-allDay": "Todo el día",
            "dxScheduler-confirmRecurrenceEditMessage": "¿Quiere modificar solo esta cita o toda la serie?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "¿Quiere eliminar solo esta cita o toda la serie?",
            "dxScheduler-confirmRecurrenceEditSeries": "Modificar serie",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Eliminar serie",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Modificar cita",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Eliminar cita",
            "dxScheduler-noTimezoneTitle": "Sin zona horaria",
            "dxScheduler-moreAppointments": "{0} más",
            "dxCalendar-todayButtonText": "Hoy",
            "dxCalendar-ariaWidgetName": "Calendario",
            "dxColorView-ariaRed": "Rojo",
            "dxColorView-ariaGreen": "Verde",
            "dxColorView-ariaBlue": "Azul",
            "dxColorView-ariaAlpha": "Transparencia",
            "dxColorView-ariaHex": "Código del color",
            "dxTagBox-selected": "{0} seleccionado",
            "dxTagBox-allSelected": "Todos seleccionados ({0})",
            "dxTagBox-moreSelected": "{0} más",
            "vizExport-printingButtonText": "Imprimir",
            "vizExport-titleMenuText": "Exportar/Imprimir",
            "vizExport-exportButtonText": "Archivo {0}",
            "dxFilterBuilder-and": "E",
            "dxFilterBuilder-or": "O",
            "dxFilterBuilder-notAnd": "NO E",
            "dxFilterBuilder-notOr": "NO O",
            "dxFilterBuilder-addCondition": "Añadir condición",
            "dxFilterBuilder-addGroup": "Añadir Grupo",
            "dxFilterBuilder-enterValueText": "<rellene con un valor>",
            "dxFilterBuilder-filterOperationEquals": "Igual",
            "dxFilterBuilder-filterOperationNotEquals": "Diferente",
            "dxFilterBuilder-filterOperationLess": "Menos que",
            "dxFilterBuilder-filterOperationLessOrEquals": "Menor o igual que",
            "dxFilterBuilder-filterOperationGreater": "Más grande que",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Mayor o igual que",
            "dxFilterBuilder-filterOperationStartsWith": "Comienza con",
            "dxFilterBuilder-filterOperationContains": "Contiene",
            "dxFilterBuilder-filterOperationNotContains": "No contiene",
            "dxFilterBuilder-filterOperationEndsWith": "Termina con",
            "dxFilterBuilder-filterOperationIsBlank": "Vacío",
            "dxFilterBuilder-filterOperationIsNotBlank": "No vacío",
            "dxFilterBuilder-filterOperationBetween": "Entre",
            "dxFilterBuilder-filterOperationAnyOf": "Alguno de",
            "dxFilterBuilder-filterOperationNoneOf": "Ningún de"
        }
    })
});
