(function (jsGrid, $, undefined) {
    var TextField = jsGrid.Field;

    function SumField(config) {
        //console.info(jsGrid);
        TextField.call(this, config);
    }

    SumField.prototype = new TextField({

        sorter: "number",
        align: "right",
        readOnly: true,
        columns: [],

        itemTemplate: function (value, item) {
            // console.info(item);
            var sum = 0;
            $.each(this.columns, function (field, value) {
                sum += item[value];
            })
            return sum;
        },
        filterValue: function () {
            var sum = 0;
            $.each(this.columns, function (field, value) {
                sum += item[value];
            })
            return sum;
        },

        insertValue: function () {
            var sum = 0;
            $.each(this.columns, function (field, value) {
                sum += item[value];
            })
            return sum;
        },

        editValue: function () {
            var sum = 0;
            $.each(this.columns, function (field, value) {
                sum += item[value];
            })
            return sum;
        },

        _createTextBox: function () {
            return $("<input>").attr("type", "number")
                .prop("readonly", !!this.readOnly);
        }
    });

    jsGrid.fields.sum = jsGrid.SumField = SumField;

}(jsGrid, jQuery));