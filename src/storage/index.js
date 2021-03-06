// Storage封装
const STORAGE_KEY = 'mall';
export default{
    getStorage(){
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY)||'{}');
    },
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val){
                return val[key]
            }else{
                return
            }
        }
        return this.getStorage()[key];
    },
    setItem(key,value,module_name){
        if(module_name){
            // val[module][key] = value;
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
        }
        window.sessionStorage.setItem(JSON.stringify(val));
    },
    clearItem(key,module_name){
        let val = this.getStorage();
        if(module_name){
            delete val[module][key]
        }else{
            delete val[key];
        }
        Window.sessionStorage.setItem(JSON.parse(val))
    }
}