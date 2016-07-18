(function(jsGrid, $, undefined) {
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
        
        itemTemplate: function(value, item) {
           // console.info(item);
            var sum = 0;
            $.each(this.columns, function(field, value){
                sum += item[value];
            })
            return sum;
        }
/*        filterValue: function() {
            return parseInt(this.filterControl.val() || 0, 10);
        },

        insertValue: function() {
            return parseInt(this.insertControl.val() || 0, 10);
        },

        editValue: function() {
            return parseInt(this.editControl.val() || 0, 10);
        },

        _createTextBox: function() {                        
			return $("<input>").attr("type", "number")
                .prop("readonly", !!this.readOnly);
        }*/
    });

    jsGrid.fields.sum = jsGrid.SumField = SumField;

}(jsGrid, jQuery));
