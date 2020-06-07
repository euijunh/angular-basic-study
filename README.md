# angular-basic-study

## Angular(2+) 기본

하나의 프레임워크 개념만으로 서버와 프론트를 모두 개발

Angular-cli -> node 6.9.0 이상

npm install -g @angular/cli


### front-end

- src/

index.html : 사용자가 볼 페이지

main.ts : 사용자가 index.html을 처음 받았을 떄 가장 먼저 실행되는 파일

- 문법

@ : 데코레이터

<app-root> = (app.component.ts, app.component.html, app.component.scss)

### typescript

자바스크립트를 보안(상위셋)

interface : 

접근제한자 : 

```javascript
class a {
  constructor(public ci: number) {
    this.ci = ci
  }
  public a // 외부(모두)에서 접근가능
  protected b // 외부에서 접근X, a와, a를 상속받은 객체에서만 사용가능
  private c // 외부에서 접근X, a 안에서만 사용가능
}
```
데코레이터 : ex) @Component ...
하나의 함수, 클래스를 꾸며주는 로직들, html, css

```javascript

function Component(constructorFn?: Function) {
  // 클래스를 꾸며주는 로직들
  // Component html, css
  return constructorFn
}

@Component()
class App {
  constructor() {
    // Component의 constructorFn가 App의 constructor를 의미한다.
  }
}

```

angular CLI 에서 편리하게 컴포넌트 만드는 방법

ex) header라는 컴포넌트를 만들 때 -> ng generate component header 

축약형도 제공한다

ex) footer 생성 -> ng g c footer

생성하면 app.module.ts 에 자동으로 등록된다. 

자식 컴포넌트는 루트(app.module.ts)에서 관리하지 않고 부모 컴포넌트에서 관리한다.

자식컴포넌트 또한 angular CLI 로 생성이 가능하다.

ex) section 하위에 time-display 라는 컴포넌트를 생성 -> ng g c section/time-display

@Output : 자식컴포넌트에서 부모컴포넌트로 데이터를 전달

@Input : 부모컴포넌트에서 자식컴포넌트로 데이터를 전달

컴포넌트를 어떻게 나누는가가 중요하다. 
컴포넌트 설계의 중요성
재사용성이 없다면 컴포넌트를 나눌 필요가 없다. (time-display 와 buttons)


### 자바스크립트(ES6)의 모듈

코드가 많아지면서 파일을 나누기 시작

var 전역변수의 문제 -> 즉시실행 함수로 해결하려 했음, 네임스페이스 패턴 도입(이름이 길어짐), 샌드박스 패턴이 나옴

가장 유명한 두가지( 모듈패턴 )

COMMON JS, AMD

두가지 다 js의 모듈화, 의존성 관리( 모듈이 다른 모듈을 필요로 하는 개념 )

COMMON JS는 브라우저 밖에서도 활용할 수 있게끔하는 차원을 지향 ( node js를 고려함 )

AMD 원래는 COMMON JS의 한 진형으로 브라우저환경을 더 고려되어 나누어짐

이러한 일들이 sj의 스팩 자체를 바꾸게 되는 계기 됨

그래서 es6부터 언어자체적으로 모듈을 개념을 도입 export, import 의 등장

캡슐화( 자바스크립트는 캡슐화를 지원하지 않는 언어였다. )

캡슐화는 js의 문제점을 해결할 수 있는 방법 중에 하나였다.

















