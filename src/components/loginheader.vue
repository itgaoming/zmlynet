<<template>
    <div class="header">
        <i class="glyphicon glyphicon-menu-left" @click="goback"></i>
        {{tit}}
      </div>
</template>
<script>
export default {
    props:["tit"],
    methods: {
        goback(){
            this.$router.go(-1);
        }
    },
}
</script>
<style scoped>
.header {
  height: 0.9rem;
  background: #57b69d;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  border-bottom: 1px solid #52ac94;
  text-align: center;
  line-height: 0.9rem;
  color: #fff;
  font-weight: 500;
  font-size: 100%;
}
.header i {
  position: absolute;
  left: 0.24rem;
  top: 0.25rem;
}
</style>
