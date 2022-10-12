# App procurement lambda workflow

[![Serverless Application Framework AWS Lambda API Gateway](https://s3.amazonaws.com/assets.github.serverless/readme-serverless-framework.gif)](https://serverless.com)

**The Serverless Framework** – Build applications on AWS Lambda and other next-gen cloud services, that auto-scale and only charge you when they run. This lowers the total cost of running and operating your apps, enabling you to build more and manage less.

The Serverless Framework is a command-line tool that uses easy and approachable YAML syntax to deploy both your code and cloud infrastructure needed to make tons of serverless application use-cases. It's a multi-language framework that supports Node.js, Typescript, Python, Go, Java, and more. It's also completely extensible via over 1,000 plugins that can add more serverless use-cases and workflows to the Framework.

Actively maintained by [Serverless Inc](https://www.serverless.com).

## Contents

- [Quick Start](#quick-start)
- [Features](#features)
- [Deploying](#contributing)
- [Previous Version 0.5.x](#v.5)

## <a name="quick-start"></a>Quick Start

### Installation

Install the `serverless` CLI via NPM:

```bash
npm install -g serverless
```

Note: If you don’t already have Node on your machine, [install it first](https://nodejs.org/). If you don't want to install Node or NPM, you can [install `serverless` as a standalone binary](https://www.serverless.com/framework/docs/install-standalone).

### Getting started

To create your first project, run the command below and follow the prompts:

```bash
# Create a new serverless project
serverless

# Move into the newly created directory
cd your-service-name
```

The `serverless` command will guide you to:

1. create a new project
2. configure [AWS credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
3. optionally set up a free [Serverless Dashboard](https://www.serverless.com/monitoring) account to monitor and troubleshoot your project

_Note: users based in China get a setup centered around the chinese [Tencent](https://intl.cloud.tencent.com/) provider. To use AWS instead, set the following environment variable: `SERVERLESS_PLATFORM_VENDOR=aws`._

Your new serverless project should contain a `serverless.yml` file. This file defines what will be deployed to AWS: functions, events, resources and more. You can learn more about this in the [Core Concepts documentation](https://www.serverless.com/framework/docs/providers/aws/guide/intro).

If the templates proposed by `serverless` do not fit your needs, check out the [project examples from Serverless Inc. and our community](https://www.serverless.com/examples/). You can install any example by passing a GitHub URL using the `--template-url` option:

```sh
serverless --template-url=https://github.com/serverless/examples/tree/v3/...
```

### Deploying

If you haven't done so already within the `serverless` command, you can deploy the project at any time by running:

```bash
serverless deploy
```

The deployed functions, resources and URLs will be displayed in the command output.

[Learn more about deploying](https://www.serverless.com/framework/docs/providers/aws/guide/deploying).

## What's next

Now that Serverless Framework is installed, here is what you can do next:

- Follow the [tutorial to create an example HTTP API with Node](https://www.serverless.com/framework/docs/tutorial)
- Learn about the [core concepts in Serverless Framework](https://www.serverless.com/framework/docs/providers/aws/guide/intro)
- [Redeploy a single function](https://www.serverless.com/framework/docs/providers/aws/guide/deploying#deploy-function) for iterating faster while developing
- Discover all the [events that can trigger Lambda functions](https://www.serverless.com/framework/docs/providers/aws/guide/events)
- Check out the [plugins registry](https://www.serverless.com/plugins)

## <a name="features"></a>Features

- Supports Node.js, Python, Java, Go, C#, Ruby, Swift, Kotlin, PHP, Scala, & F#
- Manages the lifecycle of your serverless architecture (build, deploy, update, delete).
- Safely deploy functions, events and their required resources together via provider resource managers (e.g., AWS CloudFormation).
- Functions can be grouped ("serverless services") for easy management of code, resources & processes, across large projects & teams.
- Minimal configuration and scaffolding.
- Built-in support for multiple stages.
- Optimized for CI/CD workflows.
- Loaded with automation, optimization and best practices.
- 100% Extensible: Extend or modify the Framework and its operations via Plugins.
- An ecosystem of serverless services and plugins.
- A passionate and welcoming community!

### `Database credentials`

 	 	host: "postgresql.ch8wfucynpvq.us-east-1.rds.amazonaws.com",
        port: "5431",
        database: "procurement",
        user: "",
        password: "" 

### `Create a table in database`
1. Request table create in database.

	```js
	CREATE TABLE request(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```
2. Supplier table create in database.

 	```js
	CREATE TABLE supplier(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```
3. Product table create in database.

 	```js
	CREATE TABLE product(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```
4. Currency table create in database.
	```js
	CREATE TABLE currency(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```
5. Invoice table create in database.

 	```js
	CREATE TABLE invoice(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```
6. PurchaseOrder table create in database.

 	```js
	CREATE TABLE purchase_order(
		id SERIAL PRIMARY KEY,
		details jsonb NULL
	);
	```



### `Database tables used in program`
1. To save request json
    ```
    Table Name = request
    ```

    id ( pk ) | Details(jsonb) 
   --- | --- 
    1001 | {} 


2. To save supplier json 
    ```
    Table Name = supplier
    ```

    id ( pk ) | Details(jsonb) 
    --- | --- 
    2001| {}

3. To save product json 
    ```
    Table Name = product
    ```

    id ( pk ) | Details(jsonb) 
    --- | --- 
    2000 | {}
4. To save currency json 
    ```
    Table Name = currency
    ```

    id ( pk ) | Details(jsonb) 
    --- | --- 
    20003 | {}

5. To save invoice json 
    ```
    Table Name = invoice
    ```

    id ( pk ) | Details(jsonb) 
    --- | --- 
    2002 | {}

6. To save purchase_order json 
    ```
    Table Name = purchase_order
    ```

    id ( pk ) | Details(jsonb) 
    --- | --- 
    2001 | {}

## Request Lambda
#### Contain following methods

	1. Add reuest lambda.
	2. Update reuest lambda.
	3. Search reuest details.
	4. delete reuest details.
	5. Approve reuest details.

## Supplier Lambda
#### Contain following methods

	1. Add supplier lambda.
	2. Update supplier lambda.
	3. Search supplier details.
	4. delete supplier details.

## Product Lambda
#### Contain following methods

	1. Add product lambda.
	2. Update product lambda.
	3. Search product details.
	4. delete product details.

## Currency Lambda
#### Contain following methods

	1. Add currency lambda.
	2. Update currency lambda.
	3. Search currency details.
	4. delete currency details.

## Invoice Lambda
#### Contain following methods

	1. Add invoice lambda.
	2. Update invoice lambda.
	3. Search invoice details.
	4. delete invoice details.

## PurchaseOrder Lambda
#### Contain following methods

	1. Add purchaseOrder lambda.
	2. Update purchaseOrder lambda.
	3. Search purchaseOrder details.
	4. delete purchaseOrder details.
	

### Who do I talk to? ###

	Please mail us on
	info@syenctiks.com
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About






