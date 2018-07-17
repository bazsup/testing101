*** Settings ***
Library    Selenium2Library
Suite setup    open browser   https://www.dek-d.com   chrome
Suite teardown    close browser