import { ADD_PERSON } from "../constant";

const initState = [{ id: '01', name: 'tom', age: 18 }]

export default function personReducer(preState = initState, action) {
    //console.log('111')
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]

        default:
            return preState
    }

}