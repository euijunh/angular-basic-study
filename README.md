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