/*
 * @Author: zy9@github.com/orzyyyy
 * @Date: 2018-07-01 11:28:56
 * @Last Modified by: zy9
 * @Last Modified time: 2018-07-31 14:09:04
 * @Description: 初始化本地存储
 */
import options from './options';
import Store from '../util/Store';

// 初始化默认配置
const local = new Store('options');

// 加载黑名单
fetch('./assets/blackList.json', {})
	.then(result => result.json())
	.then(result => {
		let blackList = local.get('blackList');

		/**
		 * 更新数据
		 */
		let list = [];

		for(let item of result) {
			const { id: newId } = item;

			if(blackList && blackList.length > 0) {
				for(let jtem of blackList) {
					const { id: localId } = jtem;

					if(localId == newId) {
						list.push(Object.assign({}, jtem, item));
					}
				}
			} else {
				list = result;
			}
		}

		local.set('blackList', list);
	});

// 如果localStorage已经有了配置，那合并
const oldStorage = local.toObject();
const newStorage = local.fromObject(Object.assign({}, options, oldStorage));

export { local };