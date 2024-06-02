// 1. 함수 
//   1) 화살표 함수
    var c=function example1(){
        console.log('hi');
    }
    example2=()=>{
        console.log('hi');
    }
    const example3=()=>{
        console.log('hi');
    }
    example3();
    c();
//   2) 파라미터, 인자 등등 기본개념
//   3) return 
    add=(a,b)=>{
        return a+b;
    }
    console.log(add(1,2));
//   4) 콜백함수->함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
    function example4(a,f){
        for(let i=0;i<a;i++){
            f(i);
        }
    }
    var printnum=(k)=>{
        console.log(k);
    }
    example4(4,printnum);
// 2. es6문법 
//   1) 화살표함수 
    const multiply =(x,y)=>x*y;
    console.log(multiply(2,3));
    const arrow=x=>x;
    console.log(arrow(3));
//   2) const, let
    // const a=1;
    // a=3;==>에러가 난다. const는 값을 다시 할당할 수 없다.
    let b=9;
    b=7;
//   3) 디스트럭쳐링 =>구조화된 배열 또는 객체를 비구조화시켜 개별적인 변수에 할당하는것. 필요한값만을 꺼내 할당할때 유둉하다.
    const arr3=[3,4,5]
    const [one,two,three]=arr3;
    console.log('one:',one);
    console.log('two:',two);

    const user={firstname:'shin',lastname:'sunghyun'};
    const{lastname,firstname}=user;
    console.log('first:',firstname,'\n','last:',lastname);
// 3. 데이터 종류 
//   1) string, number, boolean, object 등등 
    //데이터 타입중 원시타입에는 string, number(실수, 정수등을 따로 구분하지 않는다.), boolean, undefined, null,
    //객체 타입에는 객체, 함수, 배열등이 있다. 
    var num1=0;
    var num2=1.1;
    var str1='hi';
    var bool1=false;
    var arr1=[1,'2',2.2];
    console.log(arr1);
    console.log(typeof(arr1));
    console.log(typeof(num1));
//   2) 객체, 배열  
    arr2=[1,2,3,4];//배열
    obj1={         //객체
        1:'hi',
        2:'bye',
        3:arr2
    }

    console.log(arr2);
    console.log(obj1);
//   3) 원시타입, 객체타입 참조차이 
    //(1)원시값은 변경 불가능한 값, 객체는 변경이 가능한 값이다.
    //(2)원시값을 변수에 할당하면 변수에는 실제 값이 저장된다. 객체를 변수에 할당하면 변수에는 참조값이 저장된다.
// 4. 조건문 등
//   1) if, switch, 삼항연상자 
    if(3>4){
        console.log('false');
    }
    else{
        console.log('3<=4');
    }

    a=5;
    switch(a){
        case 1:
            console.log(1);
            break;
        case 2:
            console.log(2);
            break;
        default:
            console.log(a);
            break;
    }
    3>4? console.log('3>4'):console.log('3<=4');
//   2) && || ?? ?. 
    false&&console.log('not print');
    false||console.log('print');
    true&&console.log('print');
    true||console.log('not print')
    
// 5. 메소드 체이닝 =>연속적인 줄에서 개체의 method를 반복적으로 호출하는 것을 의미.메서드가 개체를 반환하면 그 반환값이 또다른 개체를 호출할 수 있다.
    const chaining=function(){
        this.peopleCount=0;
    };
    chaining.prototype.enter=function(n){
        this.peopleCount+=n;
        return this;
    };
    chaining.prototype.leave=function(n){
        this.peopleCount-=n;
        return this;
    };
    chaining.prototype.show=function(){
        console.log('peoplenum:',this.peopleCount);
    };

    const peoplenum=new chaining();

    peoplenum.enter(3).leave(1).show();
// 6. 배열 관련 메소드   
//   1) map=>배열내의 모든 요소에 대해 각각 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
    var arr4=[1,2,3,4,5,6,7];
    let arr5=arr4.map((x)=>{
      return x=x*9;
    })
    let root=arr4.map(Math.sqrt);
    console.log(root);
    console.log(arr5);

    var mapex=[
        {key:1,value:'hi'},
        {key:2,value:'bye'},
        {key:3,value:'good'}
    ]

    let newmapex=mapex.map((obj)=>{
        var robj={};
        robj[obj.key]=obj.value;
        return robj;
    })

    console.log(newmapex);
//   2) filter=>주어진 배열에 대해 얕은 복사본을 생성, 주어진 배열에서 제공된 함수에 의해 통관한 요소들만 필터링
    const filterex=['dfs','sdgsgsg','sdfsdgsg','sd','sdfg'];
    const nfilterex=filterex.filter((x)=>x.length>3);
    console.log(nfilterex);

//   3) forEach=>각 배열 요소에 대해 제공된 함수를 한 번씩 실행한다.
    const foreachex=[1,2,3,4];
    foreachex.forEach((x)=>console.log(x));
    const item=['book','banana','note'];
    newitem=[];
    item.forEach((x)=>{
        newitem.push(x);
    })
    console.log(newitem);
//   4) find=>주어진 매열에서 테스트 함수를 만족하는 첫번째 요소를 반환
    arr6=[1,2,3,4,5,6];
    newarr6=arr6.find((x)=>{
        if(x>3)
        return x;
    });
    newarr66=arr6.find((x)=>x>2);
    console.log(newarr66);
    console.log(newarr6);