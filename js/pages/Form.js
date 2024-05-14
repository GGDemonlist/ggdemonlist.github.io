import Spinner from "../components/Spinner.js";

export default {
    components: {
        Spinner,
    },
    data: () => ({
        loading: true,
    }),
    template: `
        <main v-if="loading" class="surface">
            <Spinner></Spinner>
        </main>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQ8gTtEZopyL2P8Ck0pYtiYciylaNia1PXowUDYgz0KyXUzQ/viewform?embedded=true" width="640" height="1332" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
        </main> 
    `,
    async mounted() {
        this.loading = false;
    }
}