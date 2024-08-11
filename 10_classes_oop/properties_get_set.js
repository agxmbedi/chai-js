function user(email,pw){
    this._email=email;
    this._pw=pw

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(val){
            this.email=val
        }
    })
}
const chai = new user("cisdn"," abc")
console.log(chai.email);
