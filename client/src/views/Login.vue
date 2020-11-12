<template>
  <div class="container">
    <div class="row justify-content-center" style="margin-top: 15%">
      <div class="card shadow p-2 align-items-center" >
          <div class="card-body text-center">
              <h4 class="m-3">PECAH TELOR</h4>
              <form @submit.prevent="login">
                  <div class="form-group ">
                      <label >
                          Username
                      </label>
                      <input
                          v-model="email"
                          class="form-control text-purple"
                          type="text"
                      >
                  </div>

                  <button type="submit" class="btn btn-primary btn-block">Play</button>
              </form>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Login'
}
</script>
