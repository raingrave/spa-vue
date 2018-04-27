<template>
  <div class="section">
    <div class="columns">
      <div class="column is-5">
        <search/>
      </div>
      <div class="column is-7">
        <article class="tile is-child notification is-info">
          <div class="content">
            <p class="title"><i class="fas fa-question-circle"></i> Tall tile</p>
            <p class="subtitle">With even more content</p>
            <div class="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <result/>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/views/search/Search'
import Result from '@/components/views/search/Result'
export default {
  components: {
    Search,
    Result
  }
}
</script>
