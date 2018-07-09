
# Introduccion



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Relatives

## POST create relative



### HTTP Request

`POST /api/users/706405506930370084/relatives`

### HEADERS

| Parameter       | Value                                                     |
| --------------- | --------------------------------------------------------- |
| Content-Type | application/json; charset=utf-8 |


### URL Parameters

| Parameter | Value |
| --------- | ----- |


> request body json
```json
{
  "relative": {
    "name": "Horacio Mena",
    "birthday": "2429-12-30T00:00:00+00:00",
    "relationship": "5"
  }
}
```


> response json with status _204_
```json

```

## DELETE destroy relative



### HTTP Request

`DELETE /api/users/706405506930370084/relatives/995f1ffe-63ac-4d58-9328-5ee8e1bec665`

### HEADERS

| Parameter | Value |
| --------- | ----- |


### URL Parameters

| Parameter | Value |
| --------- | ----- |


> request body json
```json

```


> response json with status __
```json

```

## GET index relatives (csv)



### HTTP Request

`GET /api/relatives.csv?page=1`

### HEADERS

| Parameter                 | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authorization | eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJlcm55Lm9yb3pjb0Bob3RtYWlsLmNvbSIsInRva2VuIjoicWpDV1o4MVFZOVhUN2dzWmFQUWlTTkxLIn0.I7iMYVZjbZbCZFSWFDh3iGZcwmjRADoA186pXwbXVwo |


### URL Parameters

| Parameter | Value |
| --------- | ----- |
| page      | 1     |


> request body json
```json

```


> response json with status _200_
```json
name,relationship,birthday,email
Eduardo Osorio,hermana,2429-12-30,bob@biller.com
Gregorio Delagarza,novio,2429-12-30,bob@biller.com
Diego Matos,mama,2429-12-30,bob@biller.com
Diego Heredia,mama,2429-12-30,bob@biller.com
Homero Sanches,mama,2429-12-30,bob@biller.com
Manuela Arevalo,mama,2429-12-30,bob@biller.com
Luz Arguello,mama,2429-12-30,bob@biller.com
Tomás Arteaga,mama,2429-12-30,bob@biller.com
Prueba 1,novio,1990-05-25,bob@biller.com
Gilberto Prado,mama,2429-12-30,bob@biller.com
Martín Anaya,mama,2429-12-30,bob@biller.com
Test,papa,2429-12-30,bob@biller.com
Se terminaron las pruebas,hermana,2018-07-12,bob@biller.com
Fernando Estrada I,mama,2429-12-30,bob@biller.com
Estela Saavedra,mama,2429-12-30,bob@biller.com
María Soledad Escobar,mama,2429-12-30,bob@biller.com
Test 13,novio,2018-07-13,bob@biller.com
María Soledad Sauceda,hermana,2429-12-30,bob@biller.com
Sr. Eva Villalobos,mama,2429-12-30,bob@biller.com
Pablo Fernández,mama,2429-12-30,bob@biller.com
Amalia Urías,mama,2429-12-30,bob@biller.com
Óscar Gollum,mama,2429-12-30,bob@biller.com
Amalia Pedraza,mama,2429-12-30,bob@biller.com
Sta. Samuel López,mama,2429-12-30,bob@biller.com
Lorenzo Feliciano,mama,2429-12-30,bob@biller.com
Sergio Mena,novia,2429-12-30,bob@biller.com
Marisol Cerda,mama,2429-12-30,bob@biller.com
Lola Camacho,mama,2429-12-30,bob@biller.com
TEST 12,novio,2018-12-31,bob@biller.com
María del Carmen Villalpando,mama,2429-12-30,bob@biller.com
Rodrigo Menéndez,mama,2429-12-30,bob@biller.com
Jorge Delafuente,mama,2429-12-30,bob@biller.com
Manuel Vaca,mama,2429-12-30,bob@biller.com
Miguel Paredes,mama,2429-12-30,bob@biller.com
Emilia Naranjo,mama,2429-12-30,bob@biller.com
Prueba 2,papa,2429-12-30,bob@biller.com
Alfredo Delacrúz,mama,2429-12-30,bob@biller.com
TEST 11,novio,2018-07-05,bob@biller.com
Gloria Agosto,mama,2429-12-30,bob@biller.com
Rodrigo Gonzalez,hermano,1990-01-03,bob@biller.com
Verónica Ledesma,mama,2429-12-30,bob@biller.com
Prueba 1,novio,1990-05-25,bob@biller.com
Germán Nazario,mama,2429-12-30,bob@biller.com
Nicolás Cardenas,mama,2429-12-30,bob@biller.com
Test 10,novio,2018-12-30,bob@biller.com
Cecilia Olivárez,novio,2429-12-30,bob@biller.com

```

## GET index relatives (json)



### HTTP Request

`GET /api/relatives?page=4`

### HEADERS

| Parameter | Value |
| --------- | ----- |
| Authorization | eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJlcm55Lm9yb3pjb0Bob3RtYWlsLmNvbSIsInRva2VuIjoicWpDV1o4MVFZOVhUN2dzWmFQUWlTTkxLIn0.I7iMYVZjbZbCZFSWFDh3iGZcwmjRADoA186pXwbXVwo |


### URL Parameters

| Parameter | Value |
| --------- | ----- |
| page      | 4     |


> request body json
```json

```


> response json with status _200_
```json
{
  "relatives": [
    {
      "id": "2050afd0-dc09-415b-9726-908c4fc4e804",
      "name": "Homero Sanches",
      "relationship": "mama",
      "birthday": "2429-12-30"
    },
    {
      "id": "92b8493c-d459-4760-a06b-a458308c3bf4",
      "name": "Sergio Mena",
      "relationship": "novia",
      "birthday": "2429-12-30"
    },
    {
      "id": "2652ec50-4c86-41cb-a874-4d4e5518724f",
      "name": "Prueba 1",
      "relationship": "novio",
      "birthday": "1990-05-25"
    },
    {
      "id": "e4649a77-e9eb-4376-8fc7-4d64a7fadd71",
      "name": "Prueba 1",
      "relationship": "novio",
      "birthday": "1990-05-25"
    },
    {
      "id": "ff5fd505-97e2-43e8-91bb-d50c66fc54ea",
      "name": "Cecilia Olivárez",
      "relationship": "novio",
      "birthday": "2429-12-30"
    },
    {
      "id": "3a71e280-2b6e-4ad1-afaf-ff2799d54b7b",
      "name": "Test",
      "relationship": "papa",
      "birthday": "2429-12-30"
    },
    {
      "id": "bf28db69-4f3f-4f8e-87c8-bb46486ee968",
      "name": "Prueba 2",
      "relationship": "papa",
      "birthday": "2429-12-30"
    },
    {
      "id": "05e284af-1ebf-442a-94c3-8da8bcb266c3",
      "name": "Gregorio Delagarza",
      "relationship": "novio",
      "birthday": "2429-12-30"
    },
    {
      "id": "54bb7b22-8a9f-4e38-973f-2eb41e656a1b",
      "name": "María Soledad Sauceda",
      "relationship": "hermana",
      "birthday": "2429-12-30"
    },
    {
      "id": "04a8f753-cca2-43c8-bc6b-747afb13eb0c",
      "name": "Eduardo Osorio",
      "relationship": "hermana",
      "birthday": "2429-12-30"
    }
  ],
  "meta": {
    "pagination": {
      "current_page": 4,
      "next_page": 5,
      "prev_page": 3,
      "total_pages": 5,
      "total_count": 46
    }
  }
}
```


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Session

## DELETE destroy session



### HTTP Request

`DELETE /api/logout`

### HEADERS

| Parameter | Value |
| --------- | ----- |
| Authorization | eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJlcm55Lm9yb3pjb0Bob3RtYWlsLmNvbSIsInRva2VuIjoicWpDV1o4MVFZOVhUN2dzWmFQUWlTTkxLIn0.I7iMYVZjbZbCZFSWFDh3iGZcwmjRADoA186pXwbXVwo |


### URL Parameters

| Parameter | Value |
| --------- | ----- |


> request body json
```json

```


> response json with status __
```json

```

## POST create session



### HTTP Request

`POST /api/login`

### HEADERS

| Parameter | Value |
| --------- | ----- |
| Content-Type | application/json; charset=utf-8 |


### URL Parameters

| Parameter | Value |
| --------- | ----- |


> request body json
```json
{
  "session": {
    "email": "berny.orozco@hotmail.com",
    "password": "1234567890"
  }
}
```


> response json with status _200_
```json
{
  "session": {
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJlcm55Lm9yb3pjb0Bob3RtYWlsLmNvbSIsInRva2VuIjoiVWVheHBWR3RGWHM0aTdxUzhLeXd5OEw5In0.wnq1BNrICcS-atXaDOKh_Q_mTXxYJoUwlDZ68UQEEWg"
  }
}
```

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# User

## POST create user

hola esta es una prueba

<aside class="succes"> donde puedo poner de todo </aside>

### HTTP Request

`POST /api/users?1=1&2=2&3=3`

### HEADERS

| Parameter     | Value                           |
| ------------- | ------------------------------- |
| Authorization | 123                             |
| z             | z                               |
| Content-Type  | application/json; charset=utf-8 |


### URL Parameters

| Parameter | Value |
| --------- | ----- |
| 1         | 1     |
| 2         | 2     |
| 3         | 3     |


> request body json
```json
{
  "id": 706405506930370000,
  "state": "disabled",
  "verified_email": true,
  "phone": null,
  "note": "This customer loves ice cream",
  "addresses": [],
  "created_at": null,
  "orders_count": 0,
  "total_spent": "0.00",
  "tags": "",
  "accepts_marketing": true,
  "last_order_name": null,
  "first_name": "Bob",
  "updated_at": null,
  "multipass_identifier": null,
  "last_name": "Biller",
  "email": "bdob@biller.com",
  "last_order_id": null,
  "tax_exempt": false
}
```


> response json with status _204_
```json

```

## GET index user



### HTTP Request

`GET /api/users`

### HEADERS

| Parameter | Value |
| --------- | ----- |
| Authorization | eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImJlcm55Lm9yb3pjb0Bob3RtYWlsLmNvbSIsInRva2VuIjoicWpDV1o4MVFZOVhUN2dzWmFQUWlTTkxLIn0.I7iMYVZjbZbCZFSWFDh3iGZcwmjRADoA186pXwbXVwo |


### URL Parameters

| Parameter | Value |
| --------- | ----- |


> request body json
```json

```


> response json with status _200_
```json
{
  "users": [
    {
      "id": "2e7dd05a-821b-48a7-83c4-a8535cab7e63",
      "email": "bob@biller.com",
      "shopify_id": "706405506930370084",
      "relatives": [
        {
          "id": "b1b0854d-88b9-446e-9b44-9d337318a9c6",
          "name": "Manuel Vaca",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "b01642d2-e5d5-49d4-bf2a-047f595eb87b",
          "name": "Rodrigo Menéndez",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "bad86a8d-0449-4200-b506-7c379ea16fb6",
          "name": "Emilia Naranjo",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "599e26e6-9b72-4666-8e99-eb4f917bab87",
          "name": "Amalia Urías",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "9fd8fa0f-981e-4f39-a430-12c730be547a",
          "name": "Lola Camacho",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "b73d2638-c6b6-4c3e-828d-7d07046f9178",
          "name": "Miguel Paredes",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "55c1a889-b1ff-4661-92ac-bb3e1f2b9557",
          "name": "Pablo Fernández",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "d7ae0690-4b90-4952-9ca0-ac5804b22010",
          "name": "Gloria Agosto",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "495fc206-9174-4869-9d73-ac7de7983360",
          "name": "Estela Saavedra",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "9db35a05-316f-42b9-a49c-e21465aef2ab",
          "name": "Marisol Cerda",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "2b0d6394-7d96-4f0b-98f8-24bb47b85009",
          "name": "Gilberto Prado",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "54d98fac-1b72-448b-b689-8847d04cfebd",
          "name": "Sr. Eva Villalobos",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "de2a5b27-cc61-46c8-bcb6-1ae7d3df92b2",
          "name": "Verónica Ledesma",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "32868537-e095-4015-af7b-1437adc2837e",
          "name": "Martín Anaya",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "2571d71f-7ad6-4813-a28b-5418c1ff59ca",
          "name": "Tomás Arteaga",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "8a7a7f86-693a-4b55-bb98-0857dfcc8fa8",
          "name": "Lorenzo Feliciano",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "f0b68e04-f59e-4b81-b43b-d77ce9048630",
          "name": "Germán Nazario",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "42f4d226-c5e9-49eb-a057-ee17e80a56cb",
          "name": "Fernando Estrada I",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "2084afce-ec97-4c54-89c2-d071c74693bd",
          "name": "Manuela Arevalo",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "669c0397-d794-4b10-8486-ea136d191493",
          "name": "Óscar Gollum",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "86783b40-2918-4eeb-afab-cb95dfccc1c0",
          "name": "Sta. Samuel López",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "b0821f83-43e9-4965-b189-42d77199b471",
          "name": "Jorge Delafuente",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "4b90a030-8738-4972-918e-58689249ec20",
          "name": "María Soledad Escobar",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "20a71223-18c9-42e2-919f-56c19681ac79",
          "name": "Luz Arguello",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "7b025799-7686-492e-adc3-18022889eb7d",
          "name": "Amalia Pedraza",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "0a459737-75d8-45ad-84f8-626f658e48b4",
          "name": "Diego Matos",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "1d15e48d-3e08-4579-a491-a0246917a4b6",
          "name": "Diego Heredia",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "c5ab6542-11d2-42d1-93ac-ebeca49537e7",
          "name": "Alfredo Delacrúz",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "a78af0f3-644a-48f5-bce6-6c3495b62f5d",
          "name": "María del Carmen Villalpando",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "f1178759-1496-49d8-a861-c65c323a4d95",
          "name": "Nicolás Cardenas",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "2050afd0-dc09-415b-9726-908c4fc4e804",
          "name": "Homero Sanches",
          "relationship": 2,
          "birthday": "2429-12-30"
        },
        {
          "id": "92b8493c-d459-4760-a06b-a458308c3bf4",
          "name": "Sergio Mena",
          "relationship": 1,
          "birthday": "2429-12-30"
        },
        {
          "id": "2652ec50-4c86-41cb-a874-4d4e5518724f",
          "name": "Prueba 1",
          "relationship": 0,
          "birthday": "1990-05-25"
        },
        {
          "id": "e4649a77-e9eb-4376-8fc7-4d64a7fadd71",
          "name": "Prueba 1",
          "relationship": 0,
          "birthday": "1990-05-25"
        },
        {
          "id": "ff5fd505-97e2-43e8-91bb-d50c66fc54ea",
          "name": "Cecilia Olivárez",
          "relationship": 0,
          "birthday": "2429-12-30"
        },
        {
          "id": "3a71e280-2b6e-4ad1-afaf-ff2799d54b7b",
          "name": "Test",
          "relationship": 3,
          "birthday": "2429-12-30"
        },
        {
          "id": "bf28db69-4f3f-4f8e-87c8-bb46486ee968",
          "name": "Prueba 2",
          "relationship": 3,
          "birthday": "2429-12-30"
        },
        {
          "id": "05e284af-1ebf-442a-94c3-8da8bcb266c3",
          "name": "Gregorio Delagarza",
          "relationship": 0,
          "birthday": "2429-12-30"
        },
        {
          "id": "54bb7b22-8a9f-4e38-973f-2eb41e656a1b",
          "name": "María Soledad Sauceda",
          "relationship": 5,
          "birthday": "2429-12-30"
        },
        {
          "id": "04a8f753-cca2-43c8-bc6b-747afb13eb0c",
          "name": "Eduardo Osorio",
          "relationship": 5,
          "birthday": "2429-12-30"
        },
        {
          "id": "3ec41fbc-3051-4dbc-82d5-e2426e7bbccd",
          "name": "Se terminaron las pruebas",
          "relationship": 5,
          "birthday": "2018-07-12"
        },
        {
          "id": "dc2c721b-c88d-495a-83e0-cf35d6ea515e",
          "name": "Rodrigo Gonzalez",
          "relationship": 4,
          "birthday": "1990-01-03"
        },
        {
          "id": "feb56f55-1c6d-4cf4-a28f-d00b6d1519f9",
          "name": "Test 10",
          "relationship": 0,
          "birthday": "2018-12-30"
        },
        {
          "id": "d797e649-9e74-4a84-90e3-748a4e9a9676",
          "name": "TEST 11",
          "relationship": 0,
          "birthday": "2018-07-05"
        },
        {
          "id": "a323aee8-de8b-40fa-abf7-ddd4215d4622",
          "name": "TEST 12",
          "relationship": 0,
          "birthday": "2018-12-31"
        },
        {
          "id": "4f465e36-ad3f-4b98-8778-8e672fc780dc",
          "name": "Test 13",
          "relationship": 0,
          "birthday": "2018-07-13"
        }
      ]
    },
    {
      "id": "cfa7800e-6b98-4268-95ae-4db5aa40cbc7",
      "email": "bdob@biller.com",
      "shopify_id": "706405506930370081",
      "relatives": []
    }
  ]
}
```

## GET show user (json)

hola esta es una prueba

<aside class="succes"> donde puedo poner de todo </aside>

### HTTP Request

`GET /api/users/706405506930370084`

### HEADERS

| Parameter | Value |
| --------- | ----- |


### URL Parameters

| Parameter | Value |
| --------- | ----- |


> request body json
```json

```


> response json with status _200_
```json
{
  "relatives": [
    {
      "id": "b1b0854d-88b9-446e-9b44-9d337318a9c6",
      "name": "Manuel Vaca",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "b01642d2-e5d5-49d4-bf2a-047f595eb87b",
      "name": "Rodrigo Menéndez",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "bad86a8d-0449-4200-b506-7c379ea16fb6",
      "name": "Emilia Naranjo",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "599e26e6-9b72-4666-8e99-eb4f917bab87",
      "name": "Amalia Urías",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "9fd8fa0f-981e-4f39-a430-12c730be547a",
      "name": "Lola Camacho",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "b73d2638-c6b6-4c3e-828d-7d07046f9178",
      "name": "Miguel Paredes",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "55c1a889-b1ff-4661-92ac-bb3e1f2b9557",
      "name": "Pablo Fernández",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "d7ae0690-4b90-4952-9ca0-ac5804b22010",
      "name": "Gloria Agosto",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "495fc206-9174-4869-9d73-ac7de7983360",
      "name": "Estela Saavedra",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "9db35a05-316f-42b9-a49c-e21465aef2ab",
      "name": "Marisol Cerda",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "2b0d6394-7d96-4f0b-98f8-24bb47b85009",
      "name": "Gilberto Prado",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "54d98fac-1b72-448b-b689-8847d04cfebd",
      "name": "Sr. Eva Villalobos",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "de2a5b27-cc61-46c8-bcb6-1ae7d3df92b2",
      "name": "Verónica Ledesma",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "32868537-e095-4015-af7b-1437adc2837e",
      "name": "Martín Anaya",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "2571d71f-7ad6-4813-a28b-5418c1ff59ca",
      "name": "Tomás Arteaga",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "8a7a7f86-693a-4b55-bb98-0857dfcc8fa8",
      "name": "Lorenzo Feliciano",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "f0b68e04-f59e-4b81-b43b-d77ce9048630",
      "name": "Germán Nazario",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "42f4d226-c5e9-49eb-a057-ee17e80a56cb",
      "name": "Fernando Estrada I",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "2084afce-ec97-4c54-89c2-d071c74693bd",
      "name": "Manuela Arevalo",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "669c0397-d794-4b10-8486-ea136d191493",
      "name": "Óscar Gollum",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "86783b40-2918-4eeb-afab-cb95dfccc1c0",
      "name": "Sta. Samuel López",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "b0821f83-43e9-4965-b189-42d77199b471",
      "name": "Jorge Delafuente",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "4b90a030-8738-4972-918e-58689249ec20",
      "name": "María Soledad Escobar",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "20a71223-18c9-42e2-919f-56c19681ac79",
      "name": "Luz Arguello",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "7b025799-7686-492e-adc3-18022889eb7d",
      "name": "Amalia Pedraza",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "0a459737-75d8-45ad-84f8-626f658e48b4",
      "name": "Diego Matos",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "1d15e48d-3e08-4579-a491-a0246917a4b6",
      "name": "Diego Heredia",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "c5ab6542-11d2-42d1-93ac-ebeca49537e7",
      "name": "Alfredo Delacrúz",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "a78af0f3-644a-48f5-bce6-6c3495b62f5d",
      "name": "María del Carmen Villalpando",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "f1178759-1496-49d8-a861-c65c323a4d95",
      "name": "Nicolás Cardenas",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "2050afd0-dc09-415b-9726-908c4fc4e804",
      "name": "Homero Sanches",
      "relationship": 2,
      "birthday": "2429-12-30"
    },
    {
      "id": "92b8493c-d459-4760-a06b-a458308c3bf4",
      "name": "Sergio Mena",
      "relationship": 1,
      "birthday": "2429-12-30"
    },
    {
      "id": "2652ec50-4c86-41cb-a874-4d4e5518724f",
      "name": "Prueba 1",
      "relationship": 0,
      "birthday": "1990-05-25"
    },
    {
      "id": "e4649a77-e9eb-4376-8fc7-4d64a7fadd71",
      "name": "Prueba 1",
      "relationship": 0,
      "birthday": "1990-05-25"
    },
    {
      "id": "ff5fd505-97e2-43e8-91bb-d50c66fc54ea",
      "name": "Cecilia Olivárez",
      "relationship": 0,
      "birthday": "2429-12-30"
    },
    {
      "id": "3a71e280-2b6e-4ad1-afaf-ff2799d54b7b",
      "name": "Test",
      "relationship": 3,
      "birthday": "2429-12-30"
    },
    {
      "id": "bf28db69-4f3f-4f8e-87c8-bb46486ee968",
      "name": "Prueba 2",
      "relationship": 3,
      "birthday": "2429-12-30"
    },
    {
      "id": "05e284af-1ebf-442a-94c3-8da8bcb266c3",
      "name": "Gregorio Delagarza",
      "relationship": 0,
      "birthday": "2429-12-30"
    },
    {
      "id": "54bb7b22-8a9f-4e38-973f-2eb41e656a1b",
      "name": "María Soledad Sauceda",
      "relationship": 5,
      "birthday": "2429-12-30"
    },
    {
      "id": "04a8f753-cca2-43c8-bc6b-747afb13eb0c",
      "name": "Eduardo Osorio",
      "relationship": 5,
      "birthday": "2429-12-30"
    },
    {
      "id": "3ec41fbc-3051-4dbc-82d5-e2426e7bbccd",
      "name": "Se terminaron las pruebas",
      "relationship": 5,
      "birthday": "2018-07-12"
    },
    {
      "id": "dc2c721b-c88d-495a-83e0-cf35d6ea515e",
      "name": "Rodrigo Gonzalez",
      "relationship": 4,
      "birthday": "1990-01-03"
    },
    {
      "id": "feb56f55-1c6d-4cf4-a28f-d00b6d1519f9",
      "name": "Test 10",
      "relationship": 0,
      "birthday": "2018-12-30"
    },
    {
      "id": "d797e649-9e74-4a84-90e3-748a4e9a9676",
      "name": "TEST 11",
      "relationship": 0,
      "birthday": "2018-07-05"
    },
    {
      "id": "a323aee8-de8b-40fa-abf7-ddd4215d4622",
      "name": "TEST 12",
      "relationship": 0,
      "birthday": "2018-12-31"
    }
  ]
}
```

## GET show user (csv)



### HTTP Request

`GET /api/users/706405506930370084.csv`

### HEADERS

| Parameter | Value |
| --------- | ----- |


### URL Parameters

| Parameter | Value |
| --------- | ----- |


> request body json
```json

```


> response json with status _200_
```json
shopify_id,email
706405506930370084,bob@biller.com
name,relationship,birthday

```

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

