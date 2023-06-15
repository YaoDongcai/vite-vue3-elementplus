import {
    defineStore
} from 'pinia'
interface ListItem {
    name: string;
    path: string;
    title: string;
}

export const useTagsStore = defineStore('tags', {
    state: () => {
        return {
            list: <ListItem[]>[]
        }
    },
    getters: {
        show: state =>  {
            return state.list.length > 0;
        },
        nameList: state => {
            return state.list.map(item => item.name)
        }
    },
    actions: {
        delTagsItem(index: number) {
            this.list.splice(index,1);
        },
        pushTagItem(item: ListItem) {
            this.list.push(item);
        },
        clearTags() {
            this.list = [];
        },
        closeCurrentTag() {

        }
    }
})