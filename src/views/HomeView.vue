<template>
    <div class="home container-fluid">
        <div class="row">
            <div class="col-3 p-2 ">
                <div class="card">
                    委託牆
                </div>
            </div>
            <div class="col-9 p-2 ">
                <div class="card">
                    作者
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "HomeView",
    components: {},
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
            products: [],
            SingleInfo: {},
        };
    },
    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios
                .post(url)
                .then(() => {
                    this.getData();
                })
                .catch((err) => {
                    alert(err.response.data.message);
                    this.$router.push("/login");
                });
        },
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios
                .get(url)
                .then((response) => {
                    this.products = response.data.products;
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        openProduct(item) {
            this.tempProduct = item;
        },
    },
    mounted() {
        // 取出 Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common.Authorization = token;

        this.checkAdmin();
    },

};
</script>
