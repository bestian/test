<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="ui container">
      <div class="ui segment">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At augue eget arcu dictum. Aliquet porttitor lacus luctus accumsan. Adipiscing bibendum est ultricies integer quis. Tempus iaculis urna id volutpat lacus. Dictumst quisque sagittis purus sit amet. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Quam pellentesque nec nam aliquam sem et tortor. Enim sit amet venenatis urna. Dignissim cras tincidunt lobortis feugiat vivamus at. Aliquam faucibus purus in massa tempor. Cras ornare arcu dui vivamus arcu felis bibendum. Elit ut aliquam purus sit amet luctus venenatis lectus.
        </p>
        <p>
          Lectus magna fringilla urna porttitor rhoncus dolor. At erat pellentesque adipiscing commodo. Id eu nisl nunc mi ipsum faucibus vitae. Semper quis lectus nulla at volutpat diam ut. Ac tortor vitae purus faucibus. Orci phasellus egestas tellus rutrum tellus pellentesque. In dictum non consectetur a erat nam at lectus urna. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Turpis massa tincidunt dui ut. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Sit amet massa vitae tortor. At urna condimentum mattis pellentesque id.
        </p>
        <p>
          Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Pretium viverra suspendisse potenti nullam ac tortor vitae purus. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Ultrices tincidunt arcu non sodales neque sodales ut. Amet nisl purus in mollis nunc sed. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Ornare lectus sit amet est placerat in egestas. Eget duis at tellus at urna condimentum mattis. Feugiat sed lectus vestibulum mattis ullamcorper velit. Egestas maecenas pharetra convallis posuere. Nisi porta lorem mollis aliquam ut. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Sem et tortor consequat id porta. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor.
        </p>
        <p>
          Lectus mauris ultrices eros in. Tincidunt vitae semper quis lectus nulla at volutpat. Est ante in nibh mauris cursus mattis molestie a. Consectetur lorem donec massa sapien faucibus. Elit eget gravida cum sociis natoque penatibus et magnis. Ultrices neque ornare aenean euismod. Eget est lorem ipsum dolor. Faucibus ornare suspendisse sed nisi lacus sed viverra. Fringilla phasellus faucibus scelerisque eleifend donec. Consectetur purus ut faucibus pulvinar elementum. Est sit amet facilisis magna etiam tempor orci eu. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
        </p>
        <p>
          Rhoncus dolor purus non enim praesent. Pretium vulputate sapien nec sagittis. Elit ut aliquam purus sit amet. Fringilla urna porttitor rhoncus dolor purus. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Vitae aliquet nec ullamcorper sit. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Amet nisl purus in mollis nunc. Eget duis at tellus at urna condimentum mattis pellentesque. Turpis in eu mi bibendum neque egestas. Ac turpis egestas maecenas pharetra. Tellus integer feugiat scelerisque varius. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Malesuada fames ac turpis egestas integer eget. Ut venenatis tellus in metus vulputate eu scelerisque felis. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Dictum sit amet justo donec enim diam vulputate ut pharetra.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lorem',
  data () {
    return {
      msg: '假文排版'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p::first-letter {
  font-size: 2em
}

p {
  font-size: 18px;
  color: #f9a;
  font-family: "Times New Roman", "Comic Sans MS";
  font-weight: 500;
  line-height: 1.6em;
}

</style>
