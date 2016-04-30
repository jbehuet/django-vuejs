# DJANGO AND VUEJS

First test for stack [Django](https://www.djangoproject.com/) and [VueJS](https://vuejs.org/)

## How to

Requirements :
* Python
* NodeJS
* SQLite

### Django

`$ pip install Django`

[Official documentation](https://docs.djangoproject.com/en/1.9/topics/install/#installing-official-release)

### Prepare database

`$ python backend/manage.py migrate`

### Create SuperUser

`$ python backend/manage.py createsuperuser`

### Install node modules

`$ npm install`

and into frontend-src folder

`$ cd frontend-src && npm install`

### Build frontend

`$ gulp build`

### Run

`$ python backend/manage.py runserver`
