<template>
  <div class="profile">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-6">
          <div class="media text-left">
            <img src="../assets/v.jpg" class="user-pic mr-3" />
            <div class="media-body">
              <h5 class="mt-0">Bayu Apriansyah</h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate laborum sequi vel error sapiente eum explicabo deserunt corporis beatae veniam, repudiandae cumque ipsa itaque laudantium modi dolorem quasi! Modi, veniam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'

export default {
  name: 'Profile',
  components: {}
}
</script>

<style scoped>
.user-pic{
  border-radius: 200%;
  height: 80px;
  width: 80px;
}
</style>
