/*
* @author Carlos Vinicius
* @version 1.0
* @date 2011-01-05
*/
if(typeof(String.prototype.replaceChar)!=="function") String.prototype.replaceChar=function(){var _replace={"�":"c","�":"ae","�":"oe","�":"a","�":"e","�":"i","�":"o","�":"u","�":"a","�":"e","�":"i","�":"o","�":"u","�":"a","�":"e","�":"i","�":"o","�":"u","�":"y","�":"a","�":"e","�":"i","�":"o","�":"u","�":"a","�":"a","�":"o","u":"u","�":"A","�":"E","�":"I","�":"O","�":"U","�":"E","�":"O","�":"U","�":"A","�":"O","�":"A","�":"C"};return this.replace(/[�-�]/g,function(a){console.log(a); if(typeof(_replace[a])!="undefined") return _replace[a]; return a;});};

// Exemplo de uso
"�g�os".replaceChar(); // sa�da: orgaos