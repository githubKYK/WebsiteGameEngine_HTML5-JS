class Dict{
    constructor(object = null){
        this.dict = new Object()
        if(object != null)
            this.dict = Object.create(object)
    }

    len(){
        return Object.keys(this.dict).length
    }

    keys(){
        return Object.keys(this.dict)
    }

    values(){
        return Object.values(this.dict)
    }

    add(key, value){
        this.dict[key] = value
    }

    del(key){
        delete this.dict[key]
    }

    value(){
        return this.dict
    }
}