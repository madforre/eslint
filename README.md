# eslint

air-bnb convention

-   npm i -D eslint eslint-plugin-node eslint-config-node
-   npx install-peerdeps --dev eslint-config-airbnb
-   npm init -y
-   eslint --init (eslint가 global로 설치되었을 경우 동작한다.)

# p.s

개인적으로 indent 4줄을 선호하는데 4줄로 config 설정시 prettier 자동으로 변환이 잘 되지 않아
eslint 자체 autoSave를 이용하여 저장시 자동으로 포맷팅 되도록 설정하였음.

air-bnb는 printWidth: 80, tabWidth: 2가 기본이라고 한다.
PHP에서 내가 작성하는 방법과 동일하게 설정해주었음. printWidth:160, tabWidth: 4

## References

https://github.com/airbnb/javascript
