define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "/Users/lambda_school_loaner_198/Desktop/Lambda/Web API Node/buildweek4/back-end/docs/main.js",
    "groupTitle": "/Users/lambda_school_loaner_198/Desktop/Lambda/Web API Node/buildweek4/back-end/docs/main.js",
    "name": ""
  },
  {
    "type": "login",
    "url": "/api/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body: ",
          "content": "{\n\t\"username\": \"username\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "  HTTP/1.1 200 OK \n{\n\"message\": \"Welcome back, username!\",\n \"user\": {\n   \"id\": number,\n   \"username\": \"username\",\n   \"password\": \"hashed password, long string, not actual password\"\n },\n \"token\": \"long string, token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "register",
    "url": "/api/auth/register",
    "title": "Register",
    "name": "Register",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example Body: ",
          "content": "{\n\t\"username\": \"username\",\n\t\"password\": \"password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "  HTTP/1.1 200 OK \n{\n\"message\": \"Thanks for registering, username!\",\n \"user\": {\n   \"id\": 3,\n   \"username\": \"username\",\n   \"password\": \"hashed password, long string, not actual password\"\n },\n \"token\": \"long string, token\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  }
] });
