/**
 * Created by Administrator on 2017/8/18.
 */
function getobj(id){
    return document.getElementById(id);
    if(document.all){
        return document.getElementById(id);
    }
    else{
        return null;
    }
function getstyle(obj,attr){
    if(document.all){
        return parseInt(obj.currentStyle[attr]);
    }
    else{
        return parseInt(getComputedStyle(obj,false)[attr]);
    }

}
}