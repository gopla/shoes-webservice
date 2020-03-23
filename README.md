# Shoes Webservice

- [x] User
- [x] Retail
- [x] Keranjang
- [x] Sepatu
- [x] Transaksi
- [x] Transaksi Detail

## Endpoint

### - Retail

Use JSON Body

```json
{
  "nama": "Adidas Malang",
  "lokasi": "Jl. Sana, No. XX, Malang",
  "telp": "0341443321"
}
```

**GET**
`/retail/`
`/retail/:id`

**POST**
`/retail/`

**PUT**
`/retail/:id`

**DELETE**
`/retail/:id`

### Sepatu

Use Form-Data Body

```json
{
  "nama": "Sepatu Adidas",
  "tipe": "Sport",
  "gender": "Men / Women",
  "deskripsi": "teks",
  "ukuran": 43,
  "harga": 200000,
  "stok": 88,
  "gambar": "upload file->encode to base64"
}
```

**GET**
`/sepatu/`
`/sepatu/:id`

**POST** **-> Include a pict!**
`/sepatu/`

**PUT** **-> Include a pict!**
`/sepatu/:id`

**DELETE**
`/sepatu/:id`

### User

Use Form-Data Body

```json
{
  "nama": "Lala Lulu",
  "email": "lala@here.com",
  "password": "123",
  "alamat": "Malang",
  "telp": "089998889712",
  "foto": "upload file->encode to base64"
}
```

**GET**
`/user/`
`/user/:id`

**POST** **-> Include a pict!**
`/user/`

**PUT** **-> Include a pict!**
`/user/:id`

**DELETE**
`/user/:id`

### Login

Use JSON Body

```json
{
  "email": "lala@here.com",
  "password": "123"
}
```

**POST**
`/user/login`

```json
// Response
{
  "success": true,
  "tokenType": "bearer",
  "expiresIn": "1 day",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjozLCJlbWFpbCI6ImdvcGxhQGhlcmUuY29tIiwiYWxhbWF0IjoiTmdhanVtIiwidGVscCI6IjA4OTk5ODg4Nzc3OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNTg0OTc4ODE3LCJleHAiOjE1ODUwNjUyMTd9.uJcnDuGiNMqrrPdq2ajmBxeayaa7KkYrfI-YiSJaRgg"
}
```

### Keranjang

Use JSON Body

```json
{
  "id_sepatu": 1,
  "jumlah": 1
}
```

_Return cart from a single logged in user_  
**GET**
`/keranjang/`

**POST**
`/keranjang/`

**PUT**
`/keranjang/`

**DELETE**
`/keranjang/`

### Transaksi

_Return transactions data from a single logged in user_  
**GET**
`/transaksi/`
`/transaksi/:id_transaksi`

**POST**
`/transaksi/`
