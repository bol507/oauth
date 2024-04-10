
# Login OAuth with GitHub

Basic implementation of using the login with GitHub


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Express


## API Reference

#### Post redirect

```http
  POST /oauth/redirect
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `code` | `string` | **Required**. github code |

#### Get user

```http
  GET /api/user
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **Required**. header token github  |



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file in backend

`PORT`
`CLIENT_ID`
`CLIENT_SECRET`
`GITHUB_URL`
`FRONTEND_URL`


## Authors

- [@bol507](https://github.com/bol507)


## License

[MIT](https://choosealicense.com/licenses/mit/)