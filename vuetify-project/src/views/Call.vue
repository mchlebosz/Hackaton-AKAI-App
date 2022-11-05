<template>
    <p>User ID: {{id}}</p>
    <!-- <video crossorigin="anonymous" draggable="true" class="giphy-video" width="776" height="516" autoplay="" playsinline="" src="https://media2.giphy.com/media/3bGIBBSgFtdGPQ59eP/giphy360p.mp4?cid=790b7611e2fb9edb17c278620868fa02802e3238d8570b7e&amp;rid=giphy360p.mp4&amp;ct=v" data-giphy-id="3bGIBBSgFtdGPQ59eP"></video> -->
    <v-img src="https://www.daily.co/blog/content/images/size/w1000/2021/10/CleanShot-2021-10-19-at-16.35.20@2x.png"></v-img>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from "vue";

export default {
    name: "Call",
    setup() {
    const route = useRoute();

    const id = computed(() => route.params.id);
    return {
      id,
    };
    }
}
</script>