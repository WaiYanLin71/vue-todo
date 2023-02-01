import { reactive , watch} from 'vue';

const useStore = () => {
    const store = reactive({ data: JSON.parse(localStorage.getItem('vue-todo')) || [] })

    watch(store, () => {
        localStorage.setItem('vue-todo', JSON.stringify(store.data))
    })

    return store;
}

export default useStore