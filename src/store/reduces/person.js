
const preState = {name:'zhangsan',age:18};
export default function person(state=preState, action){
    console.log('about>>',action)
    switch (action.type){
        case 'updateName':
            return {...state, ...action.data};
        case 'updateAge':
            return {...state,age:action.data.age};
        case 'update':
            return {...state,name:action.data.name,age:action.data.age};
        default:
            return state;
    }
}