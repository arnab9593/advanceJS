import convertMsToHM from "./time.js";
test('time to string', () => {
    expect(convertMsToHM(130531000)).toEqual('12:15:31')
}) 