<template>
  <a
    class="card is-block"
    :class="'card-' + color"
    :href="link ? link : '#'"
    :target="link ? '_blank' : ''"
  >
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="
            image ? image : 'https://bulma.io/images/placeholders/1280x960.png'
          "
          alt="Placeholder image"
        />
      </figure>
    </div>

    <div
      class="card-content"
      :class="tags && tags.length > 0 ? 'pb-6' : 'pb-5'"
    >
      <p class="title mb-3">
        {{ title }}
      </p>

      <div class="mb-3">
        <slot></slot>
      </div>

      <div
        v-show="tags && tags.length > 0"
        class="tags is-flex is-justify-content-end align-items-end"
      >
        <span
          v-for="(tag, i) in tags"
          :key="i"
          class="tag"
          :class="'is-' + tag.color"
          >{{ tag.name }}</span
        >
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "work-card",

  props: {
    title: String,
    image: String,
    color: String,
    tags: Array,
    link: String
  }
};
</script>

<style scoped>
.card {
  height: 100%;
  transition: transform 0.5s ease;
}

.card:hover {
  transform: translate(0, -0.5rem);
}

.card:hover .tags * {
  color: #fff !important;
}

.card-primary {
  background: hsl(171, 100%, 96%);
}

.card-primary:hover * {
  color: hsl(171, 100%, 29%) !important;
}

.card-link {
  background: hsl(219, 70%, 96%);
}

.card-link:hover * {
  color: hsl(217, 71%, 53%) !important;
}

.card-danger {
  background: hsl(347, 90%, 96%);
}

.card-danger:hover * {
  color: hsl(348, 86%, 43%) !important;
}

.tags {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 12px !important;
  margin-right: 24px !important;
}
</style>
