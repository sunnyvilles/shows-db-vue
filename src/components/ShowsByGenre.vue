<template>
    <div class="genre-show-list">
        <h1>{{ genre }}</h1>
        <div class="scroll-shows">
            <div class="show-section" v-for="show in shows" :key="show.id">
                <div class="show-section_card" role="button" @click="toDetailView(show)">
                    <img :src="show?.image?.medium" :alt="`image for ${show.name}`" />
                    <p>
                        <span> {{ show?.name }} </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
    genre: String,
    shows: Array,
});

const toDetailView = (show) => router.push({ name: 'detail', params: { id: show?.id } });

</script>

<style scoped lang="scss">
.scroll-shows {
    max-height: 205px;
    display: flex;
    gap: 0.5em;
    overflow: auto;
    scrollbar-width: thin;
    padding-bottom: 1em;

    &::-webkit-scrollbar {
        height: 0.5em;
        background-color: white;
    }

    &::-webkit-scrollbar-thumb {
        background: grey;
    }

    .show-section {
        :hover {
            cursor: pointer;
        }

        &_card {
            position: relative;
            overflow: hidden;

            img {
                max-width: 95px;
                height: 100%;
            }

            p {
                color: purple;
                font-size: 0.8em;
                max-width: fit-content;
                margin: 0px;
            }
        }
    }
}
</style>
