export const useCounter = () => {
    const count = ref(10)

    const increment = () => {
        count.value += 1
    }

    return {
        count,
        increment
    }
}