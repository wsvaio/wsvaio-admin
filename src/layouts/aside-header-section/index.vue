<script setup lang="ts">
withDefaults(
  defineProps<{
    asideWidth?: string;
    headerable?: boolean;
    asideable?: boolean;
  }>(),
  {
    asideWidth: "200px",
    headerable: true,
    asideable: true,
  },
);
let collapse = $ref(false);
</script>

<template
  tag="article"
  class="aside-header-section"
  :class="[headerable && 'headerable', asideable && 'asideable']"
>
  <template v-if="asideable">
    <aside :class="[collapse && 'collapse']" :style="{ '--aside-width': asideWidth }">
      <slot name="aside"></slot>
    </aside>

    <el-button
      class="collapse-btn"
      :class="[collapse && 'collapse']"
      type="primary"
      @click="collapse = !collapse"
    >
      <i-ep:arrow-down />
    </el-button>
  </template>

  <header v-if="headerable">
    <slot name="header"></slot>
  </header>
  <section>
    <slot></slot>
  </section>
</template>

<style lang="less">
.aside-header-section {
	& > aside > header.overwrite,
	& > section > header.overwrite {
		flex: none;
		height: 54px;
		background-color: var(--title-bg-color);
	}

	& > aside ul.overwrite {
		display: grid;
		grid-template-columns: 1fr;
		margin: 0;
		padding: 24px;
		list-style: none;
		gap: 10px;

		& > hr {
			width: 100%;
			border-color: rgba(197 200 209 / 20%);
		}

		& > li {
			display: flex;
			justify-content: space-between;

			& > span {
				&:first-child {
					color: var(--color-regular);
				}
			}
		}
	}
}
</style>

<style lang="less">
.aside-header-section {
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	height: 100%;
	min-height: 768px;
	gap: 16px 0;

	& > aside,
	& > section,
	& > header {
		display: flex;
		flex-direction: column;
		overflow: auto;
		border-radius: 8px;
		background-color: var(--bg-color);
		box-shadow: 4px 4px 21px 0 rgb(197 200 209 / 20%);
	}

	.collapse-btn {
		z-index: 10;
		align-self: center;
		width: 16px;
		height: 128px;
		padding: 24px 0;
		transition: all 0.3s;
		border: none;
		border-radius: 0 8px 8px 0;
		background-color: #9ab7fb;

		svg {
			transform: rotate(90deg);
			transition: transform 0.3s;
		}

		&.collapse {
			margin-right: -16px;
			transform: translateX(-16px);

			svg {
				transform: rotate(90deg) rotateX(180deg);
			}
		}
	}

	&.headerable {
		grid-template-rows: max-content 1fr;
	}

	&.asideable {
		grid-template-columns: max-content max-content 1fr;

		& > aside,
		& > .collapse-btn {
			grid-row: -1 / 1;
		}

		& > aside {
			width: var(--aside-width, 200px);
			transition: all 0.3s;

			&.collapse {
				width: 0;
				opacity: 0;
			}
		}
	}
}

[layout="mini"] .aside-header-section {
	height: initial;
	min-height: 100%;

	&.asideable {
		grid-template-columns: 1fr;
		grid-template-rows: max-content 1fr;

		&.headerable {
			grid-template-rows: max-content max-content 1fr;
		}

		& > aside {
			grid-row: auto;
			width: 100%;
		}
	}
}
</style>
