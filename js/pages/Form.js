import { store } from '../main.js';
import { embed } from '../util.js';
import { score } from '../score.js';
import { fetchEditors, fetchPLList } from '../content.js';

import Spinner from '../components/Spinner.js';
import LevelAuthors from '../components/List/LevelAuthors.js';

const roleIconMap = {
	owner: 'crown',
	admin: 'user-gear',
	seniormod: 'user-shield',
	mod: 'user-lock',
	dev: 'code'
};
export default {
    components: {HTMLAllCollection},
    template: `
    </body>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQ8gTtEZopyL2P8Ck0pYtiYciylaNia1PXowUDYgz0KyXUzQ/viewform?embedded=true" width="540" height="1332" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
    <body>
    `


}