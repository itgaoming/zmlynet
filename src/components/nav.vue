<<template>
    <div class="nav">
        <subnav v-for="(val,ind) of nav" :key="ind" :val="val" :ind="ind"></subnav>
    </div>
</template>
<script>
import subnav from './subnav.vue';
export default {
    data(){
        return {
            nav:[]
        }
    },
    mounted() {
        fetch("http://localhost:3000/nav").then(res=>res.json()).then(res=>{
                this.nav=res;
        })
    },
    computed: {
        
    },
    components:{subnav}
}
</script>
<style>
    .nav{
        height: 3.9rem;
        width: 100%;
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        align-items: center;
    }
</style>
