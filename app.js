// Дэлгэцтэй ажиллах контроллер
var uiController = (function(){
    var x = 100;

    function add(y){
        return x + y;
    }

})();
// Санхүүтэй ажиллах контроллер
var financeController = (function(){

})();

// Програмын холбогч контроллер
var appController = (function(uiController, financeController){
var ctrlAddItem = function(){
            // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
            console.log("Дэлгэцээс өгөгдөлөө авах хэсэг");
            // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллорт дамжуулж тэнд хадгална.
    
            // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    
            // 4. Төсөвийг тооцоолно.
    
            // 5. Эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.

}
    document.querySelector(".add__btn").addEventListener('click', function(){
        ctrlAddItem();

    });
    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
              
    });
    
})(uiController,financeController);