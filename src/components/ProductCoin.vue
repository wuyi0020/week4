<template>
    <div>
        <div class="card text-center border-dark mb-3">
            <div class="input-group card-header mb-3" v-if="edittingList[item.id]">
                <div class="input-group-prepend">
                    <span class="input-group-text" :id="`${item.id}_title`">標題</span>
                </div>
                <input type="text" class="form-control" :placeholder="item.title" aria-label="標題"
                    :aria-describedby="`${item.id}_title`" v-model="editItem[item.id].title" />
            </div>
            <h2 v-else class="card-header">{{ item.title }}</h2>
            <div class="card-body">
                <div class="input-group mb-3" v-if="edittingList[item.id]">
                    <div class="input-group-prepend">
                        <span class="input-group-text" :id="`${item.id}_imageUrl`">圖片網址</span>
                    </div>
                    <input type="text" class="form-control" :placeholder="item.imageUrl" aria-label="圖片網址"
                        :aria-describedby="`${item.id}_imageUrl`" v-model="editItem[item.id].imageUrl" />
                </div>
                <img v-if="edittingList[item.id]" :src="editItem[item.id].imageUrl" alt="" />
                <img v-else :src="item.imageUrl" alt="" class="coin card-img-top" />

                <div class="input-group mb-3" v-if="edittingList[item.id]">
                    <div class="input-group-prepend">
                        <span class="input-group-text" :id="`${item.id}_content`">內容</span>
                    </div>
                    <input type="text" class="form-control" :placeholder="item.content" aria-label="內容"
                        :aria-describedby="`${item.id}_content`" v-model="editItem[item.id].content" />
                </div>
                <div v-else>{{ item.content }}</div>
                <div class="row">
                    <div class="input-group mb-3 col" v-if="edittingList[item.id]">
                        <div class="input-group-prepend">
                            <span class="input-group-text" :id="`${item.id}_origin_price`">原價</span>
                        </div>
                        <input type="number" class="form-control" :placeholder="item.origin_price" aria-label="原價"
                            :aria-describedby="`${item.id}_origin_price`" v-model.number="editItem[item.id].origin_price" />
                    </div>
                    <del v-else class="col card-text">原價:{{ item.origin_price }}</del>
                    <div class="input-group mb-3 col" v-if="edittingList[item.id]">
                        <div class="input-group-prepend">
                            <span class="input-group-text" :id="`${item.id}_price`">現價</span>
                        </div>
                        <input type="number" class="form-control" :placeholder="item.origin_price" aria-label="現價"
                            :aria-describedby="`${item.id}_price`" v-model.number="editItem[item.id].price" />
                    </div>
                    <div v-else class="col card-text">現價:{{ item.price }}</div>
                </div>
                <div>
                    <button v-if="!edittingList[item.id]" key="修改" class="btn btn-outline-success"
                        @click="editProduct(item)">修改</button>
                    <button v-if="edittingList[item.id]" key="取消" class="btn btn-outline-success"
                        @click="editProductCancel(item.id)">取消</button>
                    <button v-if="edittingList[item.id]" key="確定" class="btn btn-outline-success"
                        @click="editProductDone(item.id)">確定</button>
                    <button class="btn btn-outline-danger" @click="delProduct(item.id)">刪除</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "ProductCoin",
    props: ["item", "getcoinData"],
    data() {
        return {
            edittingList: {},
            editItem: {},
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
        }
    },
    methods: {
        editProduct(item) {
            this.edittingList[item.id] = !this.edittingList[item.id];
            this.editItem[item.id] = { ...item };
        },
        editProductCancel(id) {
            this.edittingList[id] = !this.edittingList[id];
            this.editItem[id] = "";
        },
        editProductDone(id) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${id}`;
            this.edittingList[id] = !this.edittingList[id];
            let putItem;
            console.log(this.editItem[id]);
            putItem = { ...this.editItem[id] };
            delete putItem.id;
            console.log(putItem);
            axios.put(url, { data: putItem })
                .then((response) => {
                    console.log(response);
                    this.getcoinData();
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.response);
                })
            console.log(this.editItem[id]);
        },
        delProduct(id) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${id}`;
            axios.delete(url)
                .then((res) => {
                    console.log(res);
                    this.getcoinData();
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err.response.data.message);
                    alert(err.response.data.message);
                });
        }
    }
};
</script>
