import {
    defineStore
} from 'pinia'

interface ArrayList {
    [key: string]: string[]
}
export const usePermissStore = defineStore('permiss', {
    state: () => {
        const keys = localStorage.getItem('keys');

        return {
            key: keys ? JSON.parse(keys) : <string[]>[],
            defaultList: <ArrayList>{
                admin: ['1','2','3'],
                user: ['1','2']
            }
        }
    },
    actions: {
        handleSet(val: string[]) {
            this.key = val;
        }
    }
})