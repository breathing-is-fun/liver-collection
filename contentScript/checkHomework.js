/*
 * @Author: zy9@github.com/orzyyyy
 * @Date: 2018-07-17 22:07:09
 * @Last Modified by: zy9
 * @Last Modified time: 2018-07-31 14:09:35
 */
import { dispatchContentScriptToInject } from '../util/Request';

const getMemberId = groupId => {
	let url;

	url = groupId ? '/guild_other/member_list/@/' + groupId : '/guild_main/guild_member_list/@';

	dispatchContentScriptToInject({ message: 'getMemberId', url });
};

export { getMemberId };