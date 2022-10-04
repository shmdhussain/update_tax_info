# Simple Tax Update form
---

![](https://github.com/shmdhussain/update_tax_info/workflows/unit%20test/badge.svg)
![](https://github.com/shmdhussain/update_tax_info/workflows/E2E/badge.svg)

web app url: https://update-tax-info-proj.vercel.app/
Git Repo Url : <https://github.com/shmdhussain/update_tax_info>


## How to install the project

Make sure you have installed nodejs and make sure nodejs version is above or equal to 14.17


To Run this Project , clone this repo and run the following commands, then open the <http://localhost:3030/>

+   `npm i`
+   `npm run build`
+   `npm run start`

Then give the username and select the country from the countries list and then give the tax Id number for the selected country and click the submit button

Then you will see your tax info is updated, If all are correct.


## Test Coverage

Run `npm run test:coverage` , you will see the coverage for the code.

Also you can see the visualized output for coverage in `/coverage/lcov-report/index.html` (open in browser)

test is added for crucial cases.

E2E test is added for one failure and success case
To run that run the below command

`npm run e2e:ci`

to see in browser, cypress tool, run `npm run e2e`



## To contribute

clone the repo and run the following commands

+   `npm i`
+   `npm run configure-husky` # for configuring the pre commit hook to prettify the files
+   `npm run dev` # this will start the local dev server on port 3030 with hot reload
