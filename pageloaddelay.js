with (document.documentElement.style) {

visibility = ‘hidden';
overflow = ‘hidden';

oldinwdowonload = window.onload;
window.onload = function() {
visibility = ”;
overflow = ”;
if( oldinwdowonload )
oldinwdowonload();
};
}
