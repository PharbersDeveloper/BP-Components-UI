import Controller from '@ember/controller';
import GenerateCondition from "bp-components-ui/mixins/generate-condition";
import GenerateChartConfig from "bp-components-ui/mixins/generate-chart-config";
import EmberObject from '@ember/object';

export default Controller.extend( GenerateCondition,GenerateChartConfig,{
    proposal:EmberObject.create({
        periodBase: 1546300800000,
        periodStep: '3m'
    }),
    init(){
        this._super(...arguments);
        const that = this;

		let defaultRep = {name:'宋楠',id:1},
            defaultHosp =  {name: '人民医院',id:1},
            curTreatmentArea = '癫痫',
			proposalCase = this.case,
			isResultPage = this.isResultPage || false,
			currentPeriod = 0,	 // 当前周期的 phase
			prevOne = isResultPage ? currentPeriod : currentPeriod - 1,//当为结果页面的时候显示当前周期，否则展示上一周期
			prevTwo = isResultPage ? currentPeriod - 1 : currentPeriod - 2//当为结果页面的时候展示上一周期，否则展示上两个周期


		this.set( "tmpRep",defaultRep )
		this.set( "tmpHosp",defaultHosp )
        new Promise( function ( resolve ) {
			let tmProductCircle0 = that.generateCircleChart( "circleproductcontainer0","tmcircleproduct0" ),
				tmProductCircle1 = that.generateCircleChart( "circleproductcontainer1","tmcircleproduct1" ),
				tmProductCircleCondition = that.generateProductCircleCondition( proposalCase, prevOne ),
				tmProductCircle0Condition = that.generateProductCircleCondition( proposalCase, prevTwo ),
				tmProductBarLine0 = that.generateBarLineConfig( "tmProductBarLineContainer","bartmProductBarLine0" ),
				tmProductBarLineCondition = that.generateProdBarLineCondition( "",that.proposal ),
				tmRepCircle0 = that.generateCircleChart( "representativeCircleContainer0","tmcircleRepresentative0" ),
				tmRepCircle1 = that.generateCircleChart( "circleRepresentativeContainer1","tmcirclerepresentative1" ),
				tmRepCircleCondition = that.generateRepCircleCondition( prevOne ),
				tmRepCircle0Condition = that.generateRepCircleCondition( prevTwo ),
				tmRepBarLine0 = that.generateBarLineConfig( "tmRepresentativeBarLineContainer","bartmRepresentativeBarLine0" ),
				tmRepBarLineCondition = that.generateRepBarLineCondition( defaultRep.name,"",that.proposal ),
				tmHosCircle0 = that.generateCircleChart( "hospitalCircleContainer0","tmcircleHospital0" ),
				tmHosCircle1 = that.generateCircleChart( "hospitalCircleContainer1","tmcircleHospital1" ),
				tmHosCircleCondition = that.generateHospCircleCondition( prevOne ),
				tmHosCircle0Condition = that.generateHospCircleCondition( prevTwo ),
				tmHosBarLine0 = that.generateBarLineConfig( "tmHospitalBarLineContainer","bartmHospitalBarLine0" ),
				tmHosBarLineCondition = that.generateHospBarLineCondition( defaultHosp.name ,"",that.proposal ),
				tmRegCircle0 = that.generateCircleChart( "regionCircleContainer0","tmcircleregion0" ),
				tmRegCircle1 = that.generateCircleChart( "regionCircleContainer1","tmcircleregion1" ),
				tmRegCircleCondition = that.generateRegionCircleCondition( prevOne ),
				tmRegCircle0Condition = that.generateRegionCircleCondition( prevTwo ),
				tmRegBarLine0 = that.generateBarLineConfig( "tmRegionBarLineContainer","bartmRegionBarLine0" ),
                tmRegBarLineCondition = that.generateRegionBarLineCondition( "","",that.proposal ), // 查询区域全部总值&&产品全部总值
                tmProdsLines = that.generateLines( "tmProdsLinesContainer","prodLines" ),
                tmProdsLinesCondition = that.generateProdCompLinesCondition( curTreatmentArea,that.proposal.periodBase,that.proposal.periodStep )
    
			resolve( {
				tmProductCircle0, tmProductCircle1, tmProductCircleCondition, tmProductCircle0Condition,tmProductBarLine0, tmProductBarLineCondition,
				tmRepCircle0, tmRepCircle1, tmRepCircleCondition,tmRepCircle0Condition, tmRepBarLine0, tmRepBarLineCondition,
				tmHosCircle0, tmHosCircle1, tmHosCircleCondition,tmHosCircle0Condition, tmHosBarLine0, tmHosBarLineCondition,
                tmRegCircle0, tmRegCircle1, tmRegCircleCondition,tmRegCircle0Condition, tmRegBarLine0, tmRegBarLineCondition,
                tmProdsLines,tmProdsLinesCondition

			} )
		} ).then( data => {
			this.set( "tmProductCircle0", data.tmProductCircle0 )
			this.set( "tmProductCircleCondition", data.tmProductCircleCondition )
			this.set( "tmProductCircle1", data.tmProductCircle1 )
			this.set( "tmProductCircle0Condition", data.tmProductCircle0Condition )
			this.set( "tmProductBarLine0", data.tmProductBarLine0 )
			this.set( "tmProductBarLineCondition", data.tmProductBarLineCondition )
			this.set( "tmRepCircle0", data.tmRepCircle0 )
			this.set( "tmRepCircle1", data.tmRepCircle1 )
			this.set( "tmRepCircleCondition", data.tmRepCircleCondition )
			this.set( "tmRepCircle0Condition", data.tmRepCircle0Condition )
			this.set( "tmRepBarLine0", data.tmRepBarLine0 )
			this.set( "tmRepBarLineCondition", data.tmRepBarLineCondition )
			this.set( "tmHosCircle0", data.tmHosCircle0 )
			this.set( "tmHosCircle1", data.tmHosCircle1 )
			this.set( "tmHosCircleCondition", data.tmHosCircleCondition )
			this.set( "tmHosCircle0Condition", data.tmHosCircle0Condition )
			this.set( "tmHosBarLine0", data.tmHosBarLine0 )
			this.set( "tmHosBarLineCondition", data.tmHosBarLineCondition )
			this.set( "tmRegCircle0", data.tmRegCircle0 )
			this.set( "tmRegCircle1", data.tmRegCircle1 )
			this.set( "tmRegCircleCondition", data.tmRegCircleCondition )
			this.set( "tmRegCircle0Condition", data.tmRegCircle0Condition )
			this.set( "tmRegBarLine0", data.tmRegBarLine0 )
            this.set( "tmRegBarLineCondition", data.tmRegBarLineCondition )
            this.set( "tmProdsLines", data.tmProdsLines )
            this.set( "tmProdsLinesCondition", data.tmProdsLinesCondition )
		} )
    }
});
