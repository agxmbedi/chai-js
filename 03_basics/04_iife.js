// immediately invoked function  expressions ( IIFE)
// esko jldi se jldi call krna ho toh hum yeh function use krte hai, like " db is connected"

(function chai(){
    console.log(`Db is connected`);
})();
//last meh this-- ";" bhot jaruri hai vrna 2nd iffe nahi chalega.
((name)=>{
    console.log(`db is connected ${name}`);

})("Agam");