<template>
  <div class="hello">
    <h1>{{ userName }}</h1>
    <div v-for="item in list">{{ item.name }}</div>
  </div>
</template>

<script lang="ts">
import {
	Component, Prop, Vue
} from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
	@Prop() private msg!: string;
	@Prop() private list!: object;
	userName = this.$store.state.userName;
}
</script>

<style scoped lang="scss">

</style>
