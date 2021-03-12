export default {
    saveUserName(context,username){
        context.commit('saveUserName', username);
    },
    saveCart(context,num){
        context.commit('saveCart',num);
    }
}