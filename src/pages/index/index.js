import { getLineMap } from "@/services/index";
import dataV from '@/components/datav/index.vue'

export default {
    name: 'Index',
    components: {
        dataV
    },
    data() {
        return {

        }
    },
    created() {
        // 获取折线图数据
        getLineMap("map").then((res) => {
            console.log("返回数据", res);
        })
    }
}