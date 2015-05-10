$ = document.getElementById.bind(document);
function activate(el, list){
        for(var i = 0; i < list.length; i++){
            $(list[i]).style.display = "none";
        }
        $(el).style.display = "block";
}
//var HideAllShowOne = gen_switch("cs pr12 apcomp pltw ddp cim de edd mc e1 e4 e11 e16 bre cas cow kry sau sev bib")

function enable(links){
	var tlinks = []
        for(var j = 0; j < links.length; j++){
                var l = links[j];
                if(l.getAttribute("data-tid") == null) continue;
                tlinks.push(l.getAttribute("data-tid"))
                l.addEventListener("click", function(event){
                        activate(this.getAttribute("data-tid"), tlinks);
                        event.preventDefault();
                        return false;
                })
        }
}
window.addEventListener("load", function(){
var x = document.getElementsByClassName("selector")
for(var i = 0; i < x.length; i++){
        var pel = x[i];
        var links = pel.getElementsByTagName("a");
	enable(links);
}
})

window.addEventListener('load', function(){
	var el = document.getElementById('sitelinks');
	var title = document.getElementById('othersites');
	var spacer = document.getElementById('spacer');
	var h;
	var cs = document.defaultView.getComputedStyle(title, '');
//	h = title.offsetHeight + parseFloat(cs.getPropertyValue('margin-top')) + parseFloat(cs.getPropertyValue('margin-bottom'))
	window.addEventListener('scroll', function(){
		if((window.pageYOffset || document.documentElement.scrollTop) > spacer.offsetTop){
			spacer.style.height = el.offsetHeight + 'px';
			el.style.position = 'fixed';
		}else{
			spacer.style.height = '';
			el.style.position = '';
		}
	});
});

