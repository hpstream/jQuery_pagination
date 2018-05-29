;(function($){

    $.fn.wbPagination = function(option){
        let that = this;
        let defaults = {
            items: 0,
　　        itemsOnPage: 20,
            displayedPages:7,
            edges:1,
            prevText:"上一页",
            nextText:'下一页',
            isShowALlCourt:true,
            cssStyle: 'light-theme',
            onPageClick: function(pageNumber, event){
               console.log(1)
            }
        }
        // 翻页的点击事件
        function pageClick(pageNumber, event){
            $(that).find('.jump-input').val(pageNumber)
            if(option.onPageClick){
                option.onPageClick(pageNumber, event);
            }
        }
        var opt = $.extend(true,defaults,option);
        opt.onPageClick = pageClick;
        let  domStr = `
        <nav class='nav'>
            <ul  class="pagination"></ul>
        </nav>
        <div class="flex jump-page-box">
            <span class='showALlCourt'>总共${opt.items}条,</span>
            <div class="jump-box">
            <span>跳转到：第</span>
            <input type='text' class='form-control jump-input'>
            <span>页</span>
            </div>
            <button type="button" class="btn btn-success jump-to-page">跳转</button>
        </div>
        `
        let $dom = $(domStr);
        if(!opt.isShowALlCourt){
            $dom.find('.showALlCourt').hide()
        }
        $dom.find('.pagination').pagination(opt);
        $dom.find('.jump-input').val(1);
        $dom.find('.jump-to-page').click(function(){
            let page = $(that).find('.jump-input').val();
            $dom.find('.pagination').pagination('selectPage', page);
        })
        $(that).append($dom);
    }
})($)