import Controller from '@ember/controller';

export default Controller.extend({
    basicUse:`{{bp-table columns=model.tableColumns0 data=model.tableData0}}`,
    withBoard: `{{bp-table columns=model.tableColumns0 data=model.tableData0 rowBorder=true}}`,
    cancelHover:`{{bp-table columns=model.tableColumns0 data=model.tableData0 rowHover=false}}`,
    fixedColumn:  `{{bp-table columns=model.tableColumns1 data=model.tableData1 fixedColumn=true}}`
});
