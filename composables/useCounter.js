// 用預設匯出 (Default export)
// 對應檔案名稱
// export default function () {
//     const count = ref(0)

//     const increment = () => {
//         count.value += 1
//     }

//     return {
//         count,
//         increment
//     }
// }

// 使用具名匯出 (Named export)
// 組合式函式對應的名稱，就不是檔案名稱，而是檔案內 export 出來的名稱。
export const useCountersss = () => {
    const count = ref(0)

    const increment = () => {
        count.value += 1
    }

    return {
        count,
        increment
    }
}