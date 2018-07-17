*** Settings ***
Library    Selenium2Library
Test setup    Go To     ${url_dekd}

*** Variable ***
${url_dekd}             https://www.dek-d.com
${title_dekd}           Dek-D.com : เว็บสำหรับวัยรุ่นโดยเฉพาะ :) - TEEN ONLY SOCIETY
${show_login}           //a[@title="เข้าสู่ระบบ"]
${input_user}           //form[@id="login-form"]//input[@name="username"]
${input_pass}           //form[@id="login-form"]//input[@name="password"]
${btn_login}            //form[@id="login-form"]//button[@type="submit"]
${txt_not_me}           //*[@class="show-meg-error"]
${user_thumb}          //div[@id="toolbar"]//img[@class="tb-user-thumb"]
${username_fail}        no_user
${password_fail}        no_user
${username_success}     
${password_success}     

*** Keywords ***
Verify dekd page
    [Arguments]                 ${title}
    Title Should Be             ${title}
Input Username and Password
     [Arguments]        ${xpath_user}       ${xpath_pass}     ${username}       ${password}
     Element Should Be Visible  ${xpath_user}
     Element Should Be Visible  ${xpath_pass}
     Input Text         ${xpath_user}       ${username}
     Input Text         ${xpath_pass}       ${password}
Show login
     [Arguments]                ${show}
     Element Should Be Visible  ${show}
     Click Element              ${show}
Click Button Login
     [Arguments]                ${btn}
     Element Should Be Visible  ${btn}
     Click Element              ${btn}
Verify Login Fail
   [Arguments]                  ${xpath}
   Element Should Be Visible    ${xpath}
Verify Login Success
   [Arguments]                  ${xpath}
   Element Should Be Visible    ${xpath}

*** Test Cases ***
Login - Fail

    Verify dekd page                ${title_dekd}
    Show login                      ${show_login}
    Input Username and Password     ${input_user}     ${input_pass}       ${username_fail}      ${password_fail}
    Click Button Login              ${btn_login}
    Verify Login Fail               ${txt_not_me}
Login - success
    Verify dekd page                ${title_dekd}
    Show login                      ${show_login}
    Input Username and Password     ${input_user}     ${input_pass}       ${username_success}      ${password_success}
    Click Button Login              ${btn_login}
    Verify Login Success            ${user_thumb}