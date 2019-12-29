

//function calc(){
//  
//    const realPrice = 234234;
//    var originPrice = document.getElementById("originPrice").value;
//    var rate = document.getElementById("rate").value;
//
//    document.getElementById("ageshow").innerHTML = "상품가격은 "+ originPrice +"원이고"
//    + "할인율은 "+ rate +"%입니다." + `${realPrice}`+"원이 진짜가격입니다";
//}

/// === 는 자료형이 다른것을 허용하지 않음
/// ==는 자료형으로 변환하여 비교함
/// `${}` 템플릿 문자열이라 부르며 `` 는 백쿼트라고 함 



function showDetail(){
    document.getElementById("desc").style.display = "block";
    document.getElementById("open").style.display = "none";
}

function hideDetail(){
    document.getElementById("desc").style.display = "none";
    document.getElementById("open").style.display = "block";
}


