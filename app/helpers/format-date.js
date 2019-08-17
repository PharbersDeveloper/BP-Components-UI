import { helper } from '@ember/component/helper';
import { isEmpty }  from '@ember/utils';

export function formatDate(params/*, hash*/) {
  if(isEmpty(params)) {
    return params;
  }
  let date = new Date(params),
			Y = date.getFullYear() + '-',
			M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
			D = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()) + ' ',
			h = date.getHours() + ':',
			m = date.getMinutes() + ':',
			s = date.getSeconds();

		// 输出结果：yyyy-mm-dd hh:mm:ss
    // return Y + M + D + h + m + s;
		return Y + M + D;
    
}

export default helper(formatDate);
