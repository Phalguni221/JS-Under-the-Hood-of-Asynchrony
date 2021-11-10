function exampleThree() {

    function one() {
        doWork()
    }

    async function two() {
        await sleep(15)
        doWork()
        await sleep(15)
        doWork()
    }

    async function three() {
        await sleep(15)
        doWork()
        await sleep(15)
        doWork()
    }

    one()
    return [two(), three()]
}