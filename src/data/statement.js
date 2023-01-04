import { addOwner } from "../util.js";
import { get, post, put, del } from "./api.js";

const endpoints = {
    'statement': '/classes/Statement',
    'statementById': '/classes/Statement/'
}

export async function getAll() {
    return get(endpoints.statement)
}

export async function getById(id) {
    return get(endpoints.statementById + id)
}

export async function create(statementData, userId) {
    return post(endpoints.statement, addOwner(statementData, userId))
}

export async function update(id, statementData, userId) {
    return put(endpoints.statementById + id, addOwner(statementData, userId))
}

export async function deleteById(id) {
    return del(endpoints.statementById + id)
}