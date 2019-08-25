import Router from 'koa-router';
import { getUsersList, addUser } from '../controller/test';
const router = new Router({ prefix: '/api' });

/*插入文章接口*/
router.post('/user/getUser', getUsersList);
router.post('/user/addUser', addUser);
export default router