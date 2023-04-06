
import { describe, it, expect, beforeEach } from 'vitest';

import { shallowMount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import ShowsByGenre from "@/components/ShowsByGenre.vue";

describe("ShowsByGenre.vue", () => {

    beforeEach(() => setActivePinia(createPinia()));

    it("renders genre text in the component", () => {
        const genreTitle = "Drama";
        const wrapper = shallowMount(ShowsByGenre, {
            props: { genre: genreTitle }
        });
        expect(wrapper.text()).toMatch(genreTitle);
    });
});