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
        }
    });

    jsGrid.fields.sum = jsGrid.SumField = SumField;

}(jsGrid, jQuery));