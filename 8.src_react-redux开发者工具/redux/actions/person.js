import { ADD_PERSON } from "../constant";

// 添加一个人action
export const createPerson = personObj =>({type:ADD_PERSON,data:personObj})