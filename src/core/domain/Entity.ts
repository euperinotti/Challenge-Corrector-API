import crypto from 'crypto'

export abstract class Entity {
    private _id: string

    constructor(props, id?: string) {
        this._id = id ?? crypto.randomUUID()
    }
}