<script setup>
defineProps({
  icon: {
    type: String,
    required: false,
  },
  iconColor: {
    type: String,
    required: false,
  },
  bgColor: {
    type: String,
    required: false,
  },
  variant: {
    validator(value) {
      return ['ghost', 'icon', 'primary', 'primary-form'].includes(value)
    },
    default: 'ghost'
  },
  text: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  uppercase: {
    type: Boolean,
    required: false,
  },
  size: {
    validator(value) {
      return ['sm', 'm', 'lg'].includes(value)
    },
    default: 'm'
  },
});
</script>

<template>
  <button
    type="button"
    class="v-btn"
    :class="[
      'v-btn_' + variant,
      'v-btn_' + size,
    ]"
    :style="{ backgroundColor: bgColor }"
    :disabled="disabled"
  >
    <svg
      v-if="icon"
      class="v-btn__prepend"
      :style="{ color: iconColor }"
    >
      <use :xlink:href="'#' + icon" />
    </svg>
    <span
      v-if="text"
      class="v-btn__content"
      :class="[
        'v-btn__content_' + variant,
        'v-btn__content_' + size,
        uppercase ? 'v-btn__content_uppercase' : null,
      ]"
    >
      {{ text }}
    </span>
  </button>
</template>

<style scoped>
.v-btn {
  align-items: center;
  display: inline-grid;
  grid-template-areas: "prepend content";
  grid-template-columns: max-content auto;
  justify-content: center;
  max-width: 100%;
  outline: none;
  position: relative;
  text-decoration: none;
  transition-property: box-shadow, transform, opacity, background;
  transition-duration: .30s;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  user-select: none;
  vertical-align: middle;
  line-height: 1.5rem;
  flex-shrink: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 2px;
  cursor: pointer;

  font-weight: 600;
  font-size: 1rem;
}

.v-btn:disabled {
  cursor: none;
  pointer-events: none;
  opacity: .8;
}

.v-btn__prepend {
  grid-area: prepend;
  width: 1em;
  height: 1em;
}
.v-btn_sm > .v-btn__prepend {
  width: .75rem;
  height: .75rem;
}
.v-btn__content {
  grid-area: content;
  white-space: nowrap;
}
.v-btn_ghost {
  background: transparent;
  color: inherit;
  padding: 0;
}
.v-btn_icon {
  background: transparent;
  padding: 0;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
}
.v-btn__prepend + .v-btn__content {
  margin-left: 7px;
}
.v-btn_primary {
  color: white;
  font-size: 1.125rem;
  padding: calc(.5rem - 2px) calc(1.5rem - 2px);
  border-radius: 1000px;
  background: linear-gradient(270deg, #FFA800 0%, #FF6F00 100%);
}
.v-btn_lg.v-btn_primary {
  padding: calc(.75rem - 2px) calc(1.5rem - 2px);
}

.v-btn__content_primary {
  transform: translateY(-0.111111em); /* fix baseline */
}

.v-btn_primary:disabled {
  color: #929292;
  background: white;
  border-color: #e0e0e0;
}

.v-btn__content_uppercase {
  text-transform: uppercase;
  letter-spacing: 1.75px;
  transform: none;
  font-size: .888888em;
}

</style>
