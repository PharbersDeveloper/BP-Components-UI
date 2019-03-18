import Controller from '@ember/controller';

export default Controller.extend({
	total: `
	{{#bp-page-header as |ph|}}
	{{#ph.body as |body|}}
		{{#body.left as |left|}}
			{{#left.item}}
				Here is an incredibly super incredibly super incredibly long title
			{{/left.item}}
			{{#left.item}}
				link label
			{{/left.item}}
		{{/body.left}}
		{{#body.right}}
			{{#bp-button type='link'}}Operation{{/bp-button}}
			{{#bp-button type='primary'}}primary{{/bp-button}}
		{{/body.right}}
	{{/ph.body}}
	{{#ph.footer as |footer|}}
		{{#footer.left as |left|}}
			{{#left.item}}
				校区 百造Pacee朝阳校区
			{{/left.item}}
			{{#left.item}}
				时间 1970-01-01-1970-01-01
			{{/left.item}}
		{{/footer.left}}
		{{#footer.right}}
			{{#bp-layout main="end"}}
				{{footer.item number=23 label="学生数量"}}
				{{footer.item number=12 label="消费人数"}}
			{{/bp-layout}}
		{{/footer.right}}
	{{/ph.footer}}
{{/bp-page-header}}`,
	onlyTitleDesc: `{{bp-page-header/only-title-desc
			class='not-linkto'
			title='百造Pacee朝阳'
			desc='北京市密云区朝阳北路龙湖长楹天街购物中心西区三层24、25b'}}`,
	onlyTitleDescLink: `{{bp-page-header/only-title-desc
			title='百造Pacee朝阳'
			linkTo='card'
			linkToText="let's go to another route"}}`
});
