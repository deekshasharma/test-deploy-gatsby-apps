# System Requirements
Before running the project, please make sure you have the following:

- Node.js version `12.18.0` which can be found [here](https://nodejs.org/en/download/).
- Please refer to the help section below to resolve most common questions.

# FAQs

### - Can I use my own IDE to develop the project during the course ?
Yes, feel free to use your own IDE for the course.

### - How do I check my Node version ?
To check your current Node.js version, open your terminal and type the command below to see your current Node.js version.
```
node -v
```

### - How do I install Node.js version 12.18.0 on my machine ?
If you do not have the Node.js `12.18.0` version on your machine, you can download using either of the following:
1. Please go [here](https://nodejs.org/en/download/) and download this version of Node.js installable file for your operating system.

2. Alternatively, you can use Node Version Manager (`nvm`) to install this version of Node.js in case
   you do not want to delete the existing Node version on your machine.<br>
   `NVM` allows you to use multiple Node versions on your machine and prevent disrupting other
   projects you may be running with different `Node` versions.<br>

### - How do I use nvm to install Node.js ?
Click on [this link](https://github.com/nvm-sh/nvm) and follow the instructions provided in their README.md file
to install nvm on your machine depending on your platform.

### - Should I install npm separately ?
No, `npm` comes with `Node.js`
No matter what approach you use to install Node.js, `npm` will always come with it.

### - How do I check my npm version ?
Open your terminal and type the command below to get your npm version.
```
npm -v
```

### - What version of npm comes with this version of Node.js ?
Click on [this click](https://nodejs.org/en/download/) and the `npm` version should be mentioned under the title _**Downloads**_.
You must ensure that the npm version and node version should match with what is mentioned on this official page.

### - What is the React version need for this course ?
********************
We are using `react` >=16.13.0 and `react-dom` >= 16.13.1 at all times. All the dependecies needed to run this project will be available in package.json
file. You do not have to worry about finding the peer dependencies to run the project.
All you need are the 2 following commands to get started as long as you have the right version of Node.

`npm install`

`npm start`

Alternatively, you can also use `yarn` command.

`yarn install`

`yarn start`


### - Do I need Webpack or Babel to run this project ?
No, You don’t need to install or configure tools. You just need the correct version of Node.js and the npm version that comes with it.
They are preconfigured and hidden so that you can focus on the code.

### - Which browser are we using for this course ?
We shall be using the latest version of Chrome as of today. Be sure to install/update Chrome on your computer.

### - How do I open Chrome Browser in Mobile View ?
- To open Chrome in Mobile view mode using Mac, press ```Command+Option+i```

### - How do I run the application in the browser?
To run the app in the development mode,
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

# Git Branches
Checkout the branches listed below as you progress through different modules.

### MODULE 02
`module02`

### MODULE 03
`module03`

AWS S3 Bucket Policy
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "Statement1",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<YOUR_AWS_ACCOUNT>:root"
            },
            "Action": [
                "s3:PutObject",
                "s3:ListBucket",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "arn:aws:s3:::mukti-bucket1/*",
                "arn:aws:s3:::mukti-bucket1"
            ]
        },
        {
            "Sid": "Statement3",
            "Effect": "Allow",
            "Principal": {
                "AWS": "arn:aws:iam::<YOUR_AWS_ACCOUNT>:user/<YOUR_AWS_IAM_USER>"
            },
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:ListBucket",
                "s3:PutObjectAcl"
            ],
            "Resource": [
                "arn:aws:s3:::mukti-bucket1/*",
                "arn:aws:s3:::mukti-bucket1"
            ]
        }
    ]
}
```

### MODULE 04
`module04`

### MODULE 05
`module05-pipeline`

`module05-performance-optimize`


# Credits
The images in the project have been taken from [Unsplash](https://unsplash.com/)

- [https://unsplash.com/photos/I_394sxx0ec?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/I_394sxx0ec?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [https://unsplash.com/photos/iEJ--5kY4lU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/iEJ--5kY4lU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [https://unsplash.com/photos/pPhN8HFzkDE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/pPhN8HFzkDE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [https://unsplash.com/photos/pPhN8HFzkDE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/pPhN8HFzkDE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [https://unsplash.com/photos/1Rm9GLHV0UA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/1Rm9GLHV0UA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [https://unsplash.com/photos/2z3MOB3kfJU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/2z3MOB3kfJU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [https://unsplash.com/photos/54hUU5pNSvo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/54hUU5pNSvo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)
- [https://unsplash.com/photos/CpBBsda2eRI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink](https://unsplash.com/photos/CpBBsda2eRI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink)