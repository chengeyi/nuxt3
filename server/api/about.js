let counter = 0

export default defineEventHandler(async() => {
    console.log('🎯 伺服器打了 /api/about')
    await new Promise((resolve) => setTimeout(resolve, 2000))
    counter += 1

    return {
        name: 'Ryan',
        gender: '男',
        email: 'ryanchien8125@gmail.com',
        counter
    }
})