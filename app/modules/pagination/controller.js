import Controller from '@ember/controller';

export default Controller.extend({
	onePage: `{{bp-pagination
		totalPageCounts=1
		onClickPage=(action ( mut onlyonepage))}}`,
	lessSeven: `{{bp-pagination
		totalPageCounts=5
		onClickPage=(action ( mut handlePage))}}`,
	sevenPage: `{{bp-pagination
		totalPageCounts=7
		onClickPage=(action ( mut handlePage12))}}`,
	moreThanSeven: `{{bp-pagination
		totalPageCounts=10
		onClickPage=(action ( mut handlePage2))}}`,
	tooMore: `{{bp-pagination
		totalPageCounts=50
		onClickPage=(action ( mut handlePage3))}}`,
	mini: `{{bp-pagination/mini
		totalPageCounts=5 
		onClickPage=(action (mut handlePageMini))}}`,
	simple: `{{bp-pagination/simple
		totalPageCounts=55
		onClickPage=(action (mut handlePageSimple))}}`
});
